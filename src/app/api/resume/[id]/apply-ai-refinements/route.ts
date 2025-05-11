import { NextRequest, NextResponse } from "next/server";
import { resumeService } from "@/lib/db/resume-service";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/resume/[id]/apply-ai-refinements
 * Apply AI refinements to a specific resume by creating a new version
 * that preserves all original data and adds new information from AI
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    // Get the refinements and job application ID from the request body
    const { refinements, jobApplicationId } = await request.json();

    if (!refinements) {
      return NextResponse.json(
        { error: "Refinements are required" },
        { status: 400 },
      );
    }

    if (!jobApplicationId) {
      return NextResponse.json(
        { error: "Job application ID is required" },
        { status: 400 },
      );
    }

    // Log refinements data
    console.log("Refinements data structure:", {
      hasName: !!refinements.name,
      hasTitle: !!refinements.title,
      hasLocation: !!refinements.location,
      hasSummary: !!refinements.summary,
      workCount: refinements.work?.length || 0,
      skillsCount: refinements.skills?.length || 0,
      projectsCount: refinements.projects?.length || 0,
      educationCount: refinements.education?.length || 0,
    });

    // Log work descriptions and badges in refinements
    if (refinements.work && Array.isArray(refinements.work)) {
      console.log("Refinements work details:");
      refinements.work.forEach((work: any) => {
        console.log(
          `${work.title} at ${work.company}: ${work.description || "MISSING"}`,
        );

        // Log badges
        if (
          work.badges &&
          Array.isArray(work.badges) &&
          work.badges.length > 0
        ) {
          console.log(
            `  Badges (${work.badges.length}): ${JSON.stringify(work.badges)}`,
          );

          // Log the type of each badge
          work.badges.forEach((badge: any, index: number) => {
            console.log(`  Badge ${index + 1} type: ${typeof badge}`);
            if (typeof badge === "object") {
              console.log(
                `  Badge ${index + 1} keys: ${Object.keys(badge).join(", ")}`,
              );
              console.log(
                `  Badge ${index + 1} has name property: ${
                  badge.name !== undefined
                }`,
              );
              if (badge.name !== undefined) {
                console.log(
                  `  Badge ${index + 1} name type: ${typeof badge.name}`,
                );
              }
            }
          });
        } else {
          console.log(`  No badges found for this work experience`);
        }
      });
    }

    // Log project descriptions in refinements
    if (refinements.projects && Array.isArray(refinements.projects)) {
      console.log("Refinements project descriptions:");
      refinements.projects.forEach((project: any) => {
        console.log(`${project.title}: ${project.description || "MISSING"}`);
      });
    }

    // Log education entries in refinements
    if (refinements.education && Array.isArray(refinements.education)) {
      console.log("Refinements education entries:");
      refinements.education.forEach((edu: any) => {
        console.log(
          `${edu.degree} at ${edu.school}: ${edu.start} - ${
            edu.end || "Present"
          }`,
        );
      });
    } else {
      console.log("No education entries found in refinements or not an array");
      console.log("refinements.education:", refinements.education);
    }

    // Get the original resume with all relationships
    const originalResume = await prisma.resume.findUnique({
      where: { id: params.id },
      include: {
        contact: {
          include: {
            social: true,
          },
        },
        education: true,
        work: {
          include: {
            badges: true,
            tasks: true,
          },
        },
        skills: true,
        projects: {
          include: {
            techStack: true,
            link: true,
          },
        },
      },
    });

    if (!originalResume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    // Log work descriptions and badges in original resume
    if (originalResume.work && originalResume.work.length > 0) {
      console.log("Original resume work details:");
      originalResume.work.forEach((work: any) => {
        console.log(
          `${work.title} at ${work.company}: ${work.description || "MISSING"}`,
        );

        // Log badges
        if (work.badges && work.badges.length > 0) {
          console.log(
            `  Badges (${work.badges.length}): ${work.badges
              .map((b: any) => b.name)
              .join(", ")}`,
          );
        } else {
          console.log(`  No badges found for this work experience`);
        }
      });
    }

    // Log project descriptions in original resume
    if (originalResume.projects && originalResume.projects.length > 0) {
      console.log("Original resume project descriptions:");
      originalResume.projects.forEach((project: any) => {
        console.log(`${project.title}: ${project.description || "MISSING"}`);
      });
    }

    // Log education entries in original resume
    if (originalResume.education && originalResume.education.length > 0) {
      console.log("Original resume education entries:");
      originalResume.education.forEach((edu: any) => {
        console.log(
          `${edu.degree} at ${edu.school}: ${edu.start} - ${
            edu.end || "Present"
          }`,
        );
      });
    } else {
      console.log("No education entries found in original resume");
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

    // Create a new resume with the AI refined data
    const newResume = await prisma.resume.create({
      data: {
        userId: anonymousUser.id,
        name: refinements.name || originalResume.name,
        title: `${
          refinements.title || originalResume.title || originalResume.name
        } (AI Refined)`,
        initials: originalResume.initials,
        location: refinements.location || originalResume.location,
        locationLink: originalResume.locationLink,
        about: originalResume.about,
        summary: refinements.summary || originalResume.summary,
        avatarUrl: originalResume.avatarUrl,
        personalWebsiteUrl: originalResume.personalWebsiteUrl,
      },
    });

    console.log(`Created new resume with ID: ${newResume.id}`);

    // Copy contact information exactly as is
    if (originalResume.contact) {
      const contact = await prisma.contact.create({
        data: {
          resumeId: newResume.id,
          email: originalResume.contact.email,
          tel: originalResume.contact.tel,
        },
      });

      console.log(`Created contact for new resume`);

      // Copy social links exactly as is
      if (
        originalResume.contact.social &&
        originalResume.contact.social.length > 0
      ) {
        await prisma.social.createMany({
          data: originalResume.contact.social.map((social) => ({
            contactId: contact.id,
            name: social.name,
            url: social.url,
          })),
        });
        console.log(
          `Copied ${originalResume.contact.social.length} social links`,
        );
      }
    }

    // Create education directly from AI refinements
    if (refinements.education && Array.isArray(refinements.education)) {
      console.log(
        `Creating ${refinements.education.length} education entries from AI refinements`,
      );

      try {
        // Validate education entries before creating them
        const validEducationEntries = refinements.education.filter(
          (edu: any) => {
            if (!edu.school || !edu.degree) {
              console.warn(
                `Skipping education entry with missing school or degree: ${JSON.stringify(
                  edu,
                )}`,
              );
              return false;
            }
            return true;
          },
        );

        if (validEducationEntries.length === 0) {
          console.warn("No valid education entries found in AI refinements");

          // If no valid education entries in refinements, copy from original resume
          if (originalResume.education && originalResume.education.length > 0) {
            console.log(
              "Using education entries from original resume as fallback",
            );
            await prisma.education.createMany({
              data: originalResume.education.map((edu: any) => ({
                resumeId: newResume.id,
                school: edu.school,
                degree: edu.degree,
                start: edu.start,
                end: edu.end,
              })),
            });
            console.log(
              `Copied ${originalResume.education.length} education entries from original resume`,
            );
          }
        } else {
          // Create education entries one by one to better handle errors
          for (const edu of validEducationEntries) {
            try {
              await prisma.education.create({
                data: {
                  resumeId: newResume.id,
                  school: edu.school,
                  degree: edu.degree,
                  start: edu.start || "",
                  end: edu.end || null,
                },
              });
              console.log(
                `Created education entry: ${edu.degree} at ${edu.school}`,
              );
            } catch (eduError) {
              console.error(
                `Error creating education entry ${edu.degree} at ${edu.school}:`,
                eduError,
              );
            }
          }
          console.log(
            `Created ${validEducationEntries.length} education entries from AI refinements`,
          );
        }
      } catch (error) {
        console.error(
          "Error creating education entries from AI refinements:",
          error,
        );

        // Fallback to original education entries if there was an error
        if (originalResume.education && originalResume.education.length > 0) {
          try {
            console.log(
              "Using education entries from original resume as fallback after error",
            );
            await prisma.education.createMany({
              data: originalResume.education.map((edu: any) => ({
                resumeId: newResume.id,
                school: edu.school,
                degree: edu.degree,
                start: edu.start,
                end: edu.end,
              })),
            });
            console.log(
              `Copied ${originalResume.education.length} education entries from original resume after error`,
            );
          } catch (fallbackError) {
            console.error(
              "Error copying education entries from original resume:",
              fallbackError,
            );
          }
        }
      }
    } else {
      console.log("No education entries found in AI refinements");

      // If no education entries in refinements, copy from original resume
      if (originalResume.education && originalResume.education.length > 0) {
        try {
          console.log(
            "Using education entries from original resume as fallback",
          );
          await prisma.education.createMany({
            data: originalResume.education.map((edu: any) => ({
              resumeId: newResume.id,
              school: edu.school,
              degree: edu.degree,
              start: edu.start,
              end: edu.end,
            })),
          });
          console.log(
            `Copied ${originalResume.education.length} education entries from original resume`,
          );
        } catch (fallbackError) {
          console.error(
            "Error copying education entries from original resume:",
            fallbackError,
          );
        }
      }
    }

    // Create work experiences directly from AI refinements
    if (refinements.work && Array.isArray(refinements.work)) {
      console.log(
        `Creating ${refinements.work.length} work experiences from AI refinements`,
      );

      for (const work of refinements.work) {
        try {
          if (!work.company || !work.title) {
            console.warn(
              "Skipping work experience with missing company or title",
            );
            continue;
          }

          // Check if work description is missing
          if (!work.description) {
            console.warn(
              `Work description missing for ${work.title} at ${work.company}, using default`,
            );
          }

          // Create the work experience with a default description if missing
          const newWork = await prisma.work.create({
            data: {
              resumeId: newResume.id,
              company: work.company,
              link: work.link || null,
              title: work.title,
              start: work.start || "",
              end: work.end || null,
              description:
                typeof work.description === "object"
                  ? JSON.stringify(work.description)
                  : work.description
                    ? String(work.description)
                    : `${work.title} at ${work.company}`, // Default description if missing
            },
          });

          console.log(
            `Created work experience: ${work.title} at ${work.company}`,
          );

          // Check if badges are missing
          if (
            !work.badges ||
            !Array.isArray(work.badges) ||
            work.badges.length === 0
          ) {
            console.warn(
              `Badges missing for ${work.title} at ${work.company}, using default`,
            );
            // Create a default badge based on the job title with the correct format
            work.badges = [{ name: work.title.split(" ")[0] }]; // Use first word of title as a badge
          }

          // Add badges one by one to better handle errors
          try {
            // The badges should already be in the correct format from the post-processing step
            // But we'll double-check and create the badge data for the database
            const badgeData = [];

            for (const badge of work.badges) {
              // At this point, badge should be an object with a name property
              // But let's handle all possible cases just to be safe
              let badgeName = "";

              if (typeof badge === "object" && badge !== null && badge.name) {
                // This is the expected format after post-processing
                badgeName = badge.name;
                console.log(`Badge with name property: ${badge.name}`);
              } else if (typeof badge === "string") {
                // In case a string badge slipped through
                badgeName = badge;
                console.log(`String badge (unexpected): ${badge}`);
              } else if (badge && typeof badge === "object") {
                // Object without name property
                try {
                  badgeName = JSON.stringify(badge);
                  console.log(
                    `Object badge without name (unexpected): ${badgeName}`,
                  );
                } catch (e) {
                  console.error(`Error stringifying badge:`, e);
                  badgeName = String(badge);
                }
              } else {
                // Fallback for any other type
                badgeName = String(badge || "");
                console.log(`Other badge type (unexpected): ${badgeName}`);
              }

              // Only add badges with non-empty names
              if (badgeName && badgeName.trim().length > 0) {
                badgeData.push({
                  workId: newWork.id,
                  name: badgeName.trim(),
                });
              }
            }

            console.log(
              `Final badge data for ${work.title} (${badgeData.length} badges):`,
              JSON.stringify(badgeData),
            );

            // Create badges one by one to avoid batch errors
            if (badgeData.length > 0) {
              for (const badge of badgeData) {
                try {
                  await prisma.workBadge.create({
                    data: badge,
                  });
                  console.log(`Created badge: ${badge.name}`);
                } catch (badgeError) {
                  console.error(
                    `Error creating badge ${badge.name}:`,
                    badgeError,
                  );
                }
              }
              console.log(
                `Successfully created ${badgeData.length} badges for ${work.title}`,
              );
            } else {
              console.log(`No valid badges to create for ${work.title}`);
            }
          } catch (error) {
            console.error(`Error adding badges for ${work.title}:`, error);

            // Try to find matching work experience in original resume to copy badges
            const originalWork = originalResume.work.find(
              (ow: any) =>
                ow.company === work.company && ow.title === work.title,
            );

            if (
              originalWork &&
              originalWork.badges &&
              originalWork.badges.length > 0
            ) {
              try {
                console.log(
                  `Using badges from original resume for ${work.title} as fallback`,
                );
                for (const badge of originalWork.badges) {
                  try {
                    await prisma.workBadge.create({
                      data: {
                        workId: newWork.id,
                        name: badge.name,
                      },
                    });
                    console.log(
                      `Copied badge ${badge.name} from original resume`,
                    );
                  } catch (badgeCopyError) {
                    console.error(
                      `Error copying badge ${badge.name}:`,
                      badgeCopyError,
                    );
                  }
                }
                console.log(
                  `Copied ${originalWork.badges.length} badges from original resume for ${work.title}`,
                );
              } catch (fallbackError) {
                console.error(
                  `Error copying badges from original resume for ${work.title}:`,
                  fallbackError,
                );

                // If copying from original resume fails, create a default badge
                try {
                  await prisma.workBadge.create({
                    data: {
                      workId: newWork.id,
                      name: work.title.split(" ")[0], // Use first word of title as a badge
                    },
                  });
                  console.log(
                    `Created default badge for ${work.title} after all fallbacks failed`,
                  );
                } catch (defaultBadgeError) {
                  console.error(
                    `Error creating default badge for ${work.title}:`,
                    defaultBadgeError,
                  );
                }
              }
            } else {
              // If no matching work experience in original resume, create a default badge
              try {
                await prisma.workBadge.create({
                  data: {
                    workId: newWork.id,
                    name: work.title.split(" ")[0], // Use first word of title as a badge
                  },
                });
                console.log(
                  `Created default badge for ${work.title} (no original badges found)`,
                );
              } catch (defaultBadgeError) {
                console.error(
                  `Error creating default badge for ${work.title}:`,
                  defaultBadgeError,
                );
              }
            }
          }

          // Add tasks
          console.log(
            `Work tasks for ${work.title}:`,
            JSON.stringify(work.tasks),
          );

          if (
            work.tasks &&
            Array.isArray(work.tasks) &&
            work.tasks.length > 0
          ) {
            console.log(
              `Processing ${work.tasks.length} tasks for work experience ${work.title}`,
            );

            // Create a properly formatted task array
            const taskData = [];

            for (const task of work.tasks) {
              let taskDescription = "";

              // Handle different task formats
              if (typeof task === "string") {
                taskDescription = task;
                console.log(`String task: ${task}`);
              } else if (task && typeof task === "object") {
                if (task.description && typeof task.description === "string") {
                  taskDescription = task.description;
                  console.log(
                    `Object task with description: ${task.description}`,
                  );
                } else {
                  // Try to convert the object to a string
                  try {
                    taskDescription = JSON.stringify(task);
                    console.log(
                      `Object task without description: ${taskDescription}`,
                    );
                  } catch (e) {
                    console.error(`Error stringifying task:`, e);
                    taskDescription = String(task);
                  }
                }
              } else {
                // Fallback for any other type
                taskDescription = String(task || "");
                console.log(`Other task type: ${taskDescription}`);
              }

              // Only add tasks with non-empty descriptions
              if (taskDescription && taskDescription.trim().length > 0) {
                taskData.push({
                  workId: newWork.id,
                  description: taskDescription.trim(),
                });
              }
            }

            console.log(
              `Final task data for ${work.title} (${taskData.length} tasks):`,
              JSON.stringify(taskData),
            );

            if (taskData.length > 0) {
              try {
                // Create tasks one by one to avoid batch errors
                for (const task of taskData) {
                  await prisma.workTasks.create({
                    data: task,
                  });
                  console.log(
                    `Created task: ${task.description.substring(0, 50)}...`,
                  );
                }
                console.log(
                  `Successfully created ${taskData.length} tasks for ${work.title}`,
                );
              } catch (error) {
                console.error(`Error creating tasks for ${work.title}:`, error);
              }
            } else {
              console.log(`No valid tasks to create for ${work.title}`);
            }
          } else {
            console.log(`No tasks to create for ${work.title}`);
          }
        } catch (error) {
          console.error(`Error creating work experience ${work.title}:`, error);
        }
      }
    } else {
      console.log("No work experiences found in AI refinements");
    }

    // Create skills directly from AI refinements
    if (refinements.skills && Array.isArray(refinements.skills)) {
      console.log(
        `Creating ${refinements.skills.length} skills from AI refinements`,
      );

      try {
        await prisma.skill.createMany({
          data: refinements.skills.map((skill: any) => ({
            resumeId: newResume.id,
            name:
              typeof skill === "string"
                ? skill
                : typeof skill === "object" && skill.name
                  ? skill.name
                  : String(skill || ""),
          })),
        });
        console.log(
          `Created ${refinements.skills.length} skills from AI refinements`,
        );
      } catch (error) {
        console.error("Error creating skills from AI refinements:", error);
      }
    } else {
      console.log("No skills found in AI refinements");
    }

    // Create projects directly from AI refinements
    if (refinements.projects && Array.isArray(refinements.projects)) {
      console.log(
        `Creating ${refinements.projects.length} projects from AI refinements`,
      );

      for (const project of refinements.projects) {
        try {
          if (!project.title) {
            console.warn("Skipping project with missing title");
            continue;
          }

          // Check if project description is missing
          if (!project.description) {
            console.warn(
              `Project description missing for ${project.title}, using default`,
            );
          }

          // Create the project with a default description if missing
          const newProject = await prisma.project.create({
            data: {
              resumeId: newResume.id,
              title: project.title,
              description: project.description || `Project: ${project.title}`, // Default description if missing
            },
          });

          console.log(`Created project: ${project.title}`);

          // Add tech stack
          if (
            project.techStack &&
            Array.isArray(project.techStack) &&
            project.techStack.length > 0
          ) {
            await prisma.projectTech.createMany({
              data: project.techStack.map((tech: any) => ({
                projectId: newProject.id,
                name:
                  typeof tech === "string"
                    ? tech
                    : typeof tech === "object" && tech.name
                      ? tech.name
                      : String(tech || ""),
              })),
            });
            console.log(
              `Added ${project.techStack.length} tech items for ${project.title}`,
            );
          }

          // Add project link if it exists
          if (project.link && (project.link.label || project.link.href)) {
            await prisma.projectLink.create({
              data: {
                projectId: newProject.id,
                label: project.link.label || "Project Link",
                href: project.link.href || "#",
              },
            });
            console.log(`Added link for ${project.title}`);
          }
        } catch (error) {
          console.error(`Error creating project ${project.title}:`, error);
        }
      }
    } else {
      console.log("No projects found in AI refinements");
    }

    // Update the job application to point to the new resume
    await prisma.jobApplication.update({
      where: { id: jobApplicationId },
      data: { resumeId: newResume.id },
    });

    console.log(
      `Updated job application ${jobApplicationId} to use the new resume`,
    );

    // Get the complete new resume with all relationships
    const completeNewResume = await resumeService.getResumeById(newResume.id);

    console.log(
      `Successfully created AI-refined resume with ID: ${newResume.id}`,
    );

    // Save the complete refinements data to the database
    // Create a new table entry to store the raw refinements
    try {
      // Store the complete refinements data
      await prisma.aiRefinement.create({
        data: {
          resumeId: newResume.id,
          jobApplicationId: jobApplicationId,
          refinements: JSON.stringify(refinements),
          createdAt: new Date(),
        },
      });

      console.log(
        `Saved complete AI refinements data for resume ${newResume.id}`,
      );
    } catch (error) {
      console.error("Error saving AI refinements data:", error);
    }

    return NextResponse.json({
      data: completeNewResume,
      refinements: refinements, // Include the complete refinements in the response
      message:
        "Created a new AI-refined resume and updated the job application",
    });
  } catch (error) {
    console.error("Error applying AI refinements:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
