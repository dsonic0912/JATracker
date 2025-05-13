import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Skip creating test user during build process
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NEXT_PHASE === "phase-production-build" ||
      process.env.NEXT_PHASE === "phase-export"
    ) {
      console.log("Skipping test user creation during build/export process");
      return NextResponse.json({
        success: true,
        message: "Skipping test user creation during build process",
        environment: process.env.NODE_ENV,
        buildPhase: process.env.NEXT_PHASE,
      });
    }

    // Check if test user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: "test@example.com" },
    });

    if (existingUser) {
      return NextResponse.json({
        success: true,
        message: "Test user already exists",
        data: existingUser,
      });
    }

    // Create a test user
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        name: "Test User",
        resumes: {
          create: {
            name: "Test Resume",
            title: "Test Resume", // Adding the required title field
            initials: "TR",
            location: "Test Location",
            about: "This is a test resume",
            contact: {
              create: {
                email: "test@example.com",
                tel: "123-456-7890",
                social: {
                  create: {
                    name: "GitHub",
                    url: "https://github.com/testuser",
                  },
                },
              },
            },
            education: {
              create: {
                school: "Test University",
                degree: "Test Degree",
                start: "2018",
                end: "2022",
              },
            },
            work: {
              create: {
                company: "Test Company",
                title: "Test Position",
                start: "Jan 2022",
                end: "Present",
                description: "This is a test job description",
                badges: {
                  create: {
                    name: "React",
                  },
                },
              },
            },
            skills: {
              create: {
                name: "JavaScript",
              },
            },
            projects: {
              create: {
                title: "Test Project",
                description: "This is a test project description",
                techStack: {
                  create: {
                    name: "React",
                  },
                },
                link: {
                  create: {
                    label: "GitHub",
                    href: "https://github.com/testuser/testproject",
                  },
                },
              },
            },
          },
        },
      },
      include: {
        resumes: {
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
        },
      },
    });

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error("Database test error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}
