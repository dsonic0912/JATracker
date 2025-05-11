import { PrismaClient } from "../src/generated/prisma";
import { RESUME_DATA } from "../src/data/resume-data";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  console.log("Clearing existing data...");
  await prisma.resume.deleteMany({});
  await prisma.user.deleteMany({});

  console.log("Seeding database...");

  // Create anonymous user
  const anonymousUser = await prisma.user.create({
    data: {
      email: "anonymous@example.com",
      name: "Anonymous User",
      aiCallsLimit: 50, // Set the AI calls limit for the anonymous user
    },
  });

  console.log(
    "Created anonymous user:",
    anonymousUser.id,
    "with AI calls limit:",
    anonymousUser.aiCallsLimit,
  );

  // Create the resume and associate it with the anonymous user
  const resume = await prisma.resume.create({
    data: {
      userId: anonymousUser.id,
      name: RESUME_DATA.name,
      title: RESUME_DATA.name, // Using name as title by default
      initials: RESUME_DATA.initials,
      location: RESUME_DATA.location,
      locationLink: RESUME_DATA.locationLink,
      about: RESUME_DATA.about,
      summary: RESUME_DATA.summary?.toString() || "",
      avatarUrl: RESUME_DATA.avatarUrl,
      personalWebsiteUrl: RESUME_DATA.personalWebsiteUrl,
      contact: {
        create: {
          email: RESUME_DATA.contact.email,
          tel: RESUME_DATA.contact.tel,
          social: {
            createMany: {
              data: RESUME_DATA.contact.social.map((social: any) => ({
                name: social.name,
                url: social.url,
              })),
            },
          },
        },
      },
      education: {
        createMany: {
          data: RESUME_DATA.education.map((edu: any) => ({
            school: edu.school,
            degree: edu.degree,
            start: edu.start,
            end: edu.end,
          })),
        },
      },
      work: {
        create: RESUME_DATA.work.map((work: any) => ({
          company: work.company,
          link: work.link,
          title: work.title,
          start: work.start,
          end: work.end,
          description: work.description?.toString() || "",
          badges: {
            createMany: {
              data: work.badges.map((badge: string) => ({
                name: badge,
              })),
            },
          },
          tasks: work.tasks
            ? {
                createMany: {
                  data: work.tasks.map((task: any) => ({
                    description: task.description,
                  })),
                },
              }
            : undefined,
        })),
      },
      skills: {
        createMany: {
          data: RESUME_DATA.skills.map((skill: string) => ({
            name: skill,
          })),
        },
      },
      projects: {
        create: RESUME_DATA.projects.map((project: any) => ({
          title: project.title,
          description: project.description,
          techStack: {
            createMany: {
              data: project.techStack.map((tech: string) => ({
                name: tech,
              })),
            },
          },
          link: project.link
            ? {
                create: {
                  label: project.link.label,
                  href: project.link.href,
                },
              }
            : undefined,
        })),
      },
    },
  });

  console.log("Created resume:", resume.id);
  console.log("Associated with anonymous user:", anonymousUser.id);
  console.log("Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
