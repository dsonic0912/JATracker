import { NextRequest, NextResponse } from "next/server";
import { resumeService } from "@/lib/db/resume-service";
import { prisma } from "@/lib/prisma";
import OpenAI from "openai";

// Function to get the OpenAI API key from all possible sources
function getOpenAIApiKey(): string {
  // Try different ways to access the API key
  const apiKey = process.env.OPENAI_API_KEY || "";

  // Log the API key status for debugging (redacted for security)
  console.log("OpenAI API Key status:", apiKey ? "Present" : "Missing");
  console.log("OpenAI API Key length:", apiKey?.length || 0);
  console.log(
    "OpenAI API Key first 4 chars:",
    apiKey ? apiKey.substring(0, 4) + "..." : "N/A",
  );

  return apiKey;
}

// Initialize OpenAI client with the API key
const openai = new OpenAI({
  apiKey: getOpenAIApiKey(),
});

/**
 * POST /api/resume/refine-with-ai
 * Refine a resume using OpenAI based on job description
 */
export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is available
    if (!openai.apiKey) {
      console.error("OpenAI API key is missing");
      return NextResponse.json(
        {
          error:
            "OpenAI API key is not configured. Please contact the administrator.",
          details: "The API key is missing in the environment variables.",
        },
        { status: 500 },
      );
    }

    // Validate the API key format (simple check)
    if (
      openai.apiKey &&
      (!openai.apiKey.startsWith("sk-") || openai.apiKey.length < 20)
    ) {
      console.error("OpenAI API key appears to be invalid");
      return NextResponse.json(
        {
          error:
            "OpenAI API key appears to be invalid. Please check your configuration.",
          details: "The API key doesn't match the expected format.",
        },
        { status: 500 },
      );
    }

    const { resumeId, jobDescription, jobUrl } = await request.json();

    if (!resumeId) {
      return NextResponse.json(
        { error: "Resume ID is required" },
        { status: 400 },
      );
    }

    // Find the anonymous user
    const anonymousUser = await prisma.user.findFirst({
      where: { email: "anonymous@example.com" },
    });

    if (!anonymousUser) {
      return NextResponse.json(
        { error: "Anonymous user not found" },
        { status: 404 },
      );
    }

    // Check if the user has reached their AI calls limit
    if (anonymousUser.aiCallsLimit <= 0) {
      return NextResponse.json(
        {
          error:
            "Sorry, you've reached the daily limit for Resume Refinement. All limits and data will reset daily at 12:00 AM UTC. Please try again later.",
        },
        { status: 403 },
      );
    }

    // Get the resume
    const resume = await resumeService.getResumeById(resumeId);

    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    // Convert resume to text format
    const formatResumeAsText = (resume: any) => {
      let text = `Name: ${resume.name}\n`;
      text += `Title: ${resume.title || ""}\n`;
      text += `Location: ${resume.location || ""}\n`;
      text += `Email: ${resume.contact?.email || ""}\n`;
      text += `Phone: ${resume.contact?.tel || ""}\n`;
      text += `Website: ${resume.personalWebsiteUrl || ""}\n\n`;

      text += `SUMMARY\n${resume.summary || ""}\n\n`;

      text += `SKILLS\n`;
      if (resume.skills && resume.skills.length > 0) {
        resume.skills.forEach((skill: any) => {
          text += `- ${typeof skill === "string" ? skill : skill.name}\n`;
        });
      }
      text += "\n";

      text += `WORK EXPERIENCE\n`;
      if (resume.work && resume.work.length > 0) {
        resume.work.forEach((work: any) => {
          text += `${work.title} at ${work.company}\n`;
          if (work.link) {
            text += `Company Link: ${work.link}\n`;
          }
          text += `${work.start} - ${work.end || "Present"}\n`;
          if (work.description) {
            text += `${work.description}\n`;
          }
          if (work.badges && work.badges.length > 0) {
            text += `Skills: ${work.badges
              .map((badge: any) =>
                typeof badge === "string" ? badge : badge.name,
              )
              .join(", ")}\n`;
          }
          if (work.tasks && work.tasks.length > 0) {
            work.tasks.forEach((task: any) => {
              text += `• ${
                typeof task === "string" ? task : task.description
              }\n`;
            });
          }
          text += "\n";
        });
      }

      text += `EDUCATION\n`;
      if (resume.education && resume.education.length > 0) {
        resume.education.forEach((edu: any) => {
          text += `${edu.degree} at ${edu.school}\n`;
          text += `${edu.start} - ${edu.end || "Present"}\n\n`;
        });
      }

      text += `PROJECTS\n`;
      if (resume.projects && resume.projects.length > 0) {
        resume.projects.forEach((project: any) => {
          text += `${project.title}\n`;
          text += `${project.description || ""}\n`;
          if (project.techStack && project.techStack.length > 0) {
            text += `Technologies: ${project.techStack
              .map((tech: any) => (typeof tech === "string" ? tech : tech.name))
              .join(", ")}\n`;
          }
          if (project.link) {
            text += `Link: ${project.link.href || ""}\n`;
          }
          text += "\n";
        });
      }

      return text;
    };

    // Prepare the prompt for OpenAI
    const prompt = `
      You are an expert resume writer. Your task is to refine the following resume to better match the job description provided.

      ${
        jobDescription
          ? `Job Description:\n${jobDescription}`
          : jobUrl
            ? `Job URL:\n${jobUrl}\nPlease analyze the job posting at this URL and tailor the resume accordingly.`
            : "No job description or URL provided. Make general improvements to the resume."
      }

      Resume:
      ${formatResumeAsText(resume)}

      Please analyze the resume and job description, then provide a refined version of the resume that:
      1. ENHANCES or MODIFIES descriptions of existing items to better match the job - but NEVER DELETES any items
      2. Highlights relevant skills and experiences that match the job description
      3. ADDS NEW SKILLS OR TASKS that would be beneficial for this role but are not currently on the resume:
         - Identify key skills mentioned in the job description that are missing from the resume
         - Add these missing skills to the appropriate work experiences as badges or tasks
         - Include industry-standard skills that are commonly expected for this role but not explicitly mentioned
         - Add these new skills even if the candidate doesn't explicitly claim them, as long as they're relevant to their experience
         - CREATE NEW TASK DESCRIPTIONS that align with the job requirements, even if they weren't mentioned in the original resume
         - INVENT PLAUSIBLE SKILLS AND ACCOMPLISHMENTS that would make the candidate more competitive for this specific role
      4. Improves the wording and formatting of bullet points to better showcase achievements
      5. Ensures the resume is tailored to the specific job by enhancing relevant information

      ⚠️ CRITICAL INSTRUCTIONS - READ CAREFULLY ⚠️
      1. YOU CAN ENHANCE OR MODIFY DESCRIPTIONS, BUT NEVER DELETE ANY ITEMS
      2. YOU MUST INCLUDE EVERY SINGLE PIECE OF ORIGINAL DATA - Do not remove ANY existing work experiences, education entries, projects, skills, tasks, or badges
      3. You may MODIFY descriptions to better match the job, but NEVER DELETE any items completely
      4. You may ADD new skills, tasks, or badges to supplement existing ones
      5. Include ALL original work experiences with the same company names and titles
      6. Include ALL original tasks for each work experience (you may improve their wording)
      7. Include ALL original badges for each work experience (you may improve their wording)
      8. Include ALL original education entries with the same school names and degrees
      9. Include ALL original projects with the same titles
      10. Include ALL original skills (you may improve their wording)

      Return ONLY the refined resume as a valid JSON object without any markdown formatting, code blocks, or additional text.
      The JSON object MUST have the same structure as the original resume with the following fields:
      - name: string (MUST be identical to original)
      - title: string (MUST be identical to original)
      - location: string (MUST be identical to original)
      - summary: string (may enhance but MUST contain all original content)
      - skills: array of skill objects with name property (MUST include ALL original skills, may add new ones)
      - work: array of work experience objects (MUST include ALL original work entries with EXACTLY the same company, title, start, end)
        - Each work object MUST include a description property with the overall role description
        - Each work object MUST include a badges array with all skill badges for that role where each badge is an object with a name property
        - Each work object MUST include a tasks array where each task is an object with a description property
        - Each work object MUST include a link property if provided in the original resume (preserve the exact URL)
        - Example work format: { "company": "Company Name", "link": "https://company-website.com", "title": "Job Title", "description": "Overall role description", "badges": [{ "name": "Skill 1" }, { "name": "Skill 2" }], "tasks": [{ "description": "Task 1" }] }
        - Badges MUST be objects with a name property, like { "name": "JavaScript" }
        - DO NOT use string badges, always use objects with name property
      - education: array of education objects (MUST include ALL original education entries with EXACTLY the same school, degree, start, end)
        - Each education object MUST include school, degree, start, and end properties
        - Example education format: { "school": "University Name", "degree": "Degree Name", "start": "2018", "end": "2022" }
      - projects: array of project objects (MUST include ALL original projects with EXACTLY the same title)
        - Each project object MUST include a description property with the project description
        - Each project object MUST include a link property if provided in the original resume (preserve the exact URL and label)
        - Example project format: { "title": "Project Title", "description": "Project description", "link": { "label": "Project Link", "href": "https://project-url.com" } }

      FINAL CHECK BEFORE SUBMITTING:
      - Verify that you have ENHANCED or MODIFIED descriptions, but have NOT DELETED any items
      - Verify that EVERY original work experience is included (you may improve descriptions)
      - Verify that EVERY original task is included (you may improve wording)
      - Verify that EVERY original badge is included (you may improve wording)
      - Verify that EVERY original education entry is included with the same school and degree
      - Verify that EVERY original project is included with the same title
      - Verify that EVERY original skill is included (you may improve wording)
      - Verify that ALL company links and project links from the original resume are preserved
      - Verify that you have ADDED NEW SKILLS or TASKS that would be beneficial for this role but were not on the original resume
      - Verify that you have included industry-standard skills commonly expected for this role
      - Verify that you have CREATED NEW TASK DESCRIPTIONS that align with the job requirements
      - Verify that you have INVENTED PLAUSIBLE SKILLS AND ACCOMPLISHMENTS to make the candidate more competitive

      MOST IMPORTANT:
      1. You can ENHANCE or MODIFY descriptions, but NEVER DELETE any items completely
      2. Check that ALL items from the original resume are preserved (even if their wording is improved)

      Do not wrap your response in \`\`\`json or any other markdown.
      YOUR PRIMARY GOAL IS TO PRESERVE ALL ORIGINAL ITEMS WHILE ENHANCING THEIR DESCRIPTIONS TO MATCH THE JOB.
    `;

    // Call OpenAI API with GPT-3.5 Turbo model for resume refinement
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            'You are an expert resume writer that helps refine resumes to match job descriptions. YOU CAN ENHANCE OR MODIFY DESCRIPTIONS, BUT NEVER DELETE ANY ITEMS. YOUR PRIMARY RESPONSIBILITY IS TO PRESERVE ALL ORIGINAL DATA ITEMS. You must include EVERY SINGLE work experience, education entry, project, skill, task, and badge from the original resume - you can improve their wording but never delete them completely. You may modify descriptions to better match the job requirements, but ensure all original items remain in the resume. Your job is to ADD new information and ENHANCE existing content to make the resume more relevant to the job description. IMPORTANT FOCUS: Identify and add skills or tasks that would be beneficial for the job role but are not currently on the resume. Look for key skills mentioned in the job description that are missing from the resume and add them as badges or tasks to relevant work experiences. Include industry-standard skills that are commonly expected for this role even if not explicitly mentioned in the job description. BE CREATIVE: Create new task descriptions that align with the job requirements, even if they weren\'t mentioned in the original resume. Invent plausible skills and accomplishments that would make the candidate more competitive for this specific role. Don\'t hesitate to make up relevant experiences that fit with the candidate\'s work history. IMPORTANT FORMAT: Each work experience MUST include a description property with the overall role description AND a badges array where each badge is an object with a name property, like [{ "name": "JavaScript" }, { "name": "React" }]. DO NOT use string badges like ["JavaScript", "React"]. Each work experience MUST include a link property if provided in the original resume (preserve the exact URL). Each project MUST include a description property with the project description and a link property if provided in the original resume (preserve the exact URL and label). Each education entry MUST include school, degree, start, and end properties. All tasks must be formatted as objects with a description property, like { "description": "Task description here" }. Never use string tasks. Always respond with valid JSON only, without any markdown formatting or explanatory text. Do not wrap your response in code blocks.',
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: "json_object" }, // Explicitly request JSON format
    });

    // Extract the refined resume from the response
    const content = completion.choices[0].message.content || "{}";
    console.log("Using GPT-3.5-turbo model for resume refinement");
    console.log("Raw OpenAI response:", content);

    // Clean up the response if it contains markdown formatting
    let refinedResumeJson = content;

    // Remove markdown code blocks if present (```json ... ```)
    if (content.includes("```")) {
      const jsonMatch = content.match(/```(?:json)?\s*\n([\s\S]*?)\n```/);
      if (jsonMatch && jsonMatch[1]) {
        refinedResumeJson = jsonMatch[1];
      }
    }

    // Try to fix common JSON issues
    refinedResumeJson = refinedResumeJson
      // Fix unterminated strings by adding missing quotes
      .replace(/([{,]\s*"[^"]+"\s*:\s*"[^"]*)\n/g, '$1"\n')
      // Fix missing commas between properties
      .replace(/"\s*\n\s*"/g, '",\n"')
      // Fix trailing commas before closing brackets
      .replace(/,\s*}/g, "}")
      .replace(/,\s*]/g, "]");

    // Parse the JSON response
    let refinedResume;
    try {
      console.log(
        "Attempting to parse OpenAI response:",
        refinedResumeJson.substring(0, 200) + "...",
      );
      refinedResume = JSON.parse(refinedResumeJson);

      // Log successful parsing
      console.log("Successfully parsed OpenAI response");

      // Log the work experiences and tasks
      if (refinedResume.work && Array.isArray(refinedResume.work)) {
        console.log(
          `OpenAI returned ${refinedResume.work.length} work experiences`,
        );

        refinedResume.work.forEach((work: any, index: number) => {
          console.log(`Work ${index + 1}: ${work.company} - ${work.title}`);

          // Log work description
          console.log(`  Description: ${work.description || "MISSING"}`);

          // Log badges
          if (work.badges && Array.isArray(work.badges)) {
            console.log(
              `  Badges (${work.badges.length}): ${JSON.stringify(
                work.badges,
              )}`,
            );
          } else {
            console.log(`  No badges found for this work experience`);
          }

          if (work.tasks && Array.isArray(work.tasks)) {
            console.log(`  Tasks (${work.tasks.length}):`);
            work.tasks.forEach((task: any, taskIndex: number) => {
              if (typeof task === "string") {
                console.log(`    Task ${taskIndex + 1} (string): ${task}`);
              } else if (task && typeof task === "object") {
                console.log(
                  `    Task ${taskIndex + 1} (object): ${JSON.stringify(task)}`,
                );
              } else {
                console.log(
                  `    Task ${taskIndex + 1} (unknown type): ${JSON.stringify(
                    task,
                  )}`,
                );
              }
            });
          } else {
            console.log(`  No tasks found for this work experience`);
          }
        });
      } else {
        console.log(`OpenAI response does not contain work experiences array`);
      }

      // Log projects
      if (refinedResume.projects && Array.isArray(refinedResume.projects)) {
        console.log(
          `OpenAI returned ${refinedResume.projects.length} projects`,
        );

        refinedResume.projects.forEach((project: any, index: number) => {
          console.log(`Project ${index + 1}: ${project.title}`);
          console.log(`  Description: ${project.description || "MISSING"}`);

          if (project.techStack && Array.isArray(project.techStack)) {
            console.log(
              `  Tech Stack (${project.techStack.length}): ${JSON.stringify(
                project.techStack,
              )}`,
            );
          } else {
            console.log(`  No tech stack found for this project`);
          }
        });
      } else {
        console.log(`OpenAI response does not contain projects array`);
      }

      // Log education entries
      if (refinedResume.education && Array.isArray(refinedResume.education)) {
        console.log(
          `OpenAI returned ${refinedResume.education.length} education entries`,
        );

        refinedResume.education.forEach((edu: any, index: number) => {
          console.log(`Education ${index + 1}: ${edu.degree} at ${edu.school}`);
          console.log(
            `  Start: ${edu.start || "MISSING"}, End: ${edu.end || "MISSING"}`,
          );

          // Check for required properties
          if (!edu.school) console.log(`  WARNING: Missing school property`);
          if (!edu.degree) console.log(`  WARNING: Missing degree property`);
          if (!edu.start) console.log(`  WARNING: Missing start property`);
          // end can be null for ongoing education
        });
      } else {
        console.log(`OpenAI response does not contain education array`);
        console.log(`refinedResume.education:`, refinedResume.education);
      }

      // Log the structure of the refined resume
      console.log("Refined resume structure:", {
        hasName: !!refinedResume.name,
        hasTitle: !!refinedResume.title,
        hasLocation: !!refinedResume.location,
        hasSummary: !!refinedResume.summary,
        workCount: refinedResume.work?.length || 0,
        skillsCount: refinedResume.skills?.length || 0,
        projectsCount: refinedResume.projects?.length || 0,
        educationCount: refinedResume.education?.length || 0,
      });

      // We're using the AI response directly without validation or merging
      console.log("Using AI response directly without validation or merging");

      // Post-process the badges to ensure they match the WorkBadge model schema
      if (refinedResume.work && Array.isArray(refinedResume.work)) {
        console.log(
          "Post-processing badges to match WorkBadge model schema...",
        );

        refinedResume.work = refinedResume.work.map((work: any) => {
          // Ensure badges array exists
          if (!work.badges) {
            work.badges = [];
          }

          // Ensure badges are in the correct format (objects with name property)
          if (Array.isArray(work.badges)) {
            work.badges = work.badges.map((badge: any) => {
              // If badge is already an object with a name property, return it as is
              if (typeof badge === "object" && badge !== null && badge.name) {
                return badge;
              }

              // If badge is a string, convert it to an object with a name property
              if (typeof badge === "string") {
                return { name: badge };
              }

              // For any other type, try to convert it to a string and then to an object
              return { name: String(badge || "") };
            });

            // Filter out any badges with empty names
            work.badges = work.badges.filter(
              (badge: any) => badge.name && badge.name.trim().length > 0,
            );

            console.log(
              `Processed ${work.badges.length} badges for ${work.title} at ${work.company}`,
            );
          }

          return work;
        });
      }

      // Log the structure of the refined resume
      console.log("Refined resume structure:", {
        hasName: !!refinedResume.name,
        hasTitle: !!refinedResume.title,
        hasLocation: !!refinedResume.location,
        hasSummary: !!refinedResume.summary,
        workCount: refinedResume.work?.length || 0,
        skillsCount: refinedResume.skills?.length || 0,
        projectsCount: refinedResume.projects?.length || 0,
        educationCount: refinedResume.education?.length || 0,
      });
    } catch (error) {
      console.error("Error parsing OpenAI response:", error);
      console.error("Response content type:", typeof content);
      console.error("Response content length:", content.length);
      console.error(
        "Response content preview:",
        content.substring(0, 200) + "...",
      );
      console.error(
        "Refined JSON preview:",
        refinedResumeJson.substring(0, 200) + "...",
      );

      // Fallback: Instead of failing, return the original resume with minimal enhancements
      console.log(
        "Using fallback: returning original resume with minimal enhancements",
      );

      // Create a shallow copy of the original resume
      refinedResume = JSON.parse(JSON.stringify(resume));

      // Add a note to the summary indicating the AI refinement failed
      if (refinedResume.summary) {
        refinedResume.summary = `${refinedResume.summary} (Note: AI refinement encountered an error, showing original resume)`;
      }

      // Decrement the user's AI calls limit anyway since we attempted the refinement
      await prisma.user.update({
        where: { id: anonymousUser.id },
        data: { aiCallsLimit: anonymousUser.aiCallsLimit - 1 },
      });

      return NextResponse.json({
        data: refinedResume,
        originalResume: resume,
        remainingCalls: anonymousUser.aiCallsLimit - 1,
        warning:
          "AI refinement encountered an error. Showing original resume with minimal changes.",
      });
    }

    // No helper functions needed as we're using the AI response directly

    // Decrement the user's AI calls limit
    await prisma.user.update({
      where: { id: anonymousUser.id },
      data: { aiCallsLimit: anonymousUser.aiCallsLimit - 1 },
    });

    // Save the complete OpenAI response to the database
    try {
      // Store the raw OpenAI response
      await prisma.openAiResponse.create({
        data: {
          resumeId: resume.id,
          prompt: prompt,
          response: content,
          createdAt: new Date(),
        },
      });

      console.log(`Saved complete OpenAI response for resume ${resume.id}`);
    } catch (error) {
      console.error("Error saving OpenAI response:", error);
    }

    return NextResponse.json({
      data: refinedResume,
      originalResume: resume,
      remainingCalls: anonymousUser.aiCallsLimit - 1,
      rawResponse: content, // Include the raw OpenAI response
    });
  } catch (error) {
    console.error("Error refining resume with AI:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
