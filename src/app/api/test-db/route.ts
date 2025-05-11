import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Create a test user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        resumes: {
          create: {
            name: 'Test Resume',
            initials: 'TR',
            location: 'Test Location',
            about: 'This is a test resume',
            contact: {
              create: {
                email: 'test@example.com',
                tel: '123-456-7890',
                social: {
                  create: {
                    name: 'GitHub',
                    url: 'https://github.com/testuser'
                  }
                }
              }
            },
            education: {
              create: {
                school: 'Test University',
                degree: 'Test Degree',
                start: '2018',
                end: '2022'
              }
            },
            work: {
              create: {
                company: 'Test Company',
                title: 'Test Position',
                start: 'Jan 2022',
                end: 'Present',
                description: 'This is a test job description',
                badges: {
                  create: {
                    name: 'React'
                  }
                }
              }
            },
            skills: {
              create: {
                name: 'JavaScript'
              }
            },
            projects: {
              create: {
                title: 'Test Project',
                description: 'This is a test project description',
                techStack: {
                  create: {
                    name: 'React'
                  }
                },
                link: {
                  create: {
                    label: 'GitHub',
                    href: 'https://github.com/testuser/testproject'
                  }
                }
              }
            }
          }
        }
      },
      include: {
        resumes: {
          include: {
            contact: {
              include: {
                social: true
              }
            },
            education: true,
            work: {
              include: {
                badges: true
              }
            },
            skills: true,
            projects: {
              include: {
                techStack: true,
                link: true
              }
            }
          }
        }
      }
    });

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
