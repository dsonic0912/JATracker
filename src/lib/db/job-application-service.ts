import { prisma } from "@/lib/prisma";

/**
 * Service for handling job application database operations
 */
export const jobApplicationService = {
  /**
   * Get a job application by ID
   */
  async getJobApplicationById(id: string) {
    return prisma.jobApplication.findUnique({
      where: { id },
      include: {
        resume: true,
      },
    });
  },

  /**
   * Get all job applications
   */
  async getAllJobApplications() {
    return prisma.jobApplication.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        resume: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  },

  /**
   * Create a new job application
   */
  async createJobApplication(data: {
    resumeId: string;
    company: string;
    position: string;
    status?: string;
    appliedDate?: Date;
    jobUrl?: string;
    jobDescription?: string;
  }) {
    return prisma.jobApplication.create({
      data: {
        resumeId: data.resumeId,
        company: data.company,
        position: data.position,
        status: data.status || "Applied",
        appliedDate: data.appliedDate || new Date(),
        jobUrl: data.jobUrl,
        jobDescription: data.jobDescription,
      },
      include: {
        resume: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  },

  /**
   * Update a job application
   */
  async updateJobApplication(
    id: string,
    data: {
      resumeId?: string;
      company?: string;
      position?: string;
      status?: string;
      appliedDate?: Date;
      jobUrl?: string;
      jobDescription?: string;
    }
  ) {
    return prisma.jobApplication.update({
      where: { id },
      data,
      include: {
        resume: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  },

  /**
   * Delete a job application
   */
  async deleteJobApplication(id: string) {
    return prisma.jobApplication.delete({
      where: { id },
    });
  },

  /**
   * Get job applications for a resume
   */
  async getJobApplicationsByResumeId(resumeId: string) {
    return prisma.jobApplication.findMany({
      where: { resumeId },
      orderBy: { updatedAt: "desc" },
      include: {
        resume: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  },
};
