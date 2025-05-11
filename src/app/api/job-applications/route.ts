import { NextRequest, NextResponse } from 'next/server';
import { jobApplicationService } from '@/lib/db/job-application-service';

/**
 * GET /api/job-applications
 * Get all job applications
 */
export async function GET() {
  try {
    const jobApplications = await jobApplicationService.getAllJobApplications();
    
    return NextResponse.json({ data: jobApplications });
  } catch (error) {
    console.error('Error fetching job applications:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/job-applications
 * Create a new job application
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.resumeId || !data.company || !data.position) {
      return NextResponse.json(
        { error: 'Missing required fields: resumeId, company, position' },
        { status: 400 }
      );
    }
    
    const jobApplication = await jobApplicationService.createJobApplication({
      resumeId: data.resumeId,
      company: data.company,
      position: data.position,
      status: data.status,
      appliedDate: data.appliedDate ? new Date(data.appliedDate) : undefined,
      jobUrl: data.jobUrl,
      jobDescription: data.jobDescription,
    });
    
    return NextResponse.json({ data: jobApplication });
  } catch (error) {
    console.error('Error creating job application:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
