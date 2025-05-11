import { NextRequest, NextResponse } from "next/server";
import { jobApplicationService } from "@/lib/db/job-application-service";

/**
 * GET /api/job-applications/[id]
 * Get a job application by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const jobApplication = await jobApplicationService.getJobApplicationById(params.id);

    if (!jobApplication) {
      return NextResponse.json(
        { error: "Job application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: jobApplication });
  } catch (error) {
    console.error("Error fetching job application:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/job-applications/[id]
 * Update a job application
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    
    // Handle date conversion if appliedDate is provided
    if (data.appliedDate) {
      data.appliedDate = new Date(data.appliedDate);
    }
    
    const jobApplication = await jobApplicationService.updateJobApplication(
      params.id,
      data
    );

    return NextResponse.json({ data: jobApplication });
  } catch (error) {
    console.error("Error updating job application:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/job-applications/[id]
 * Delete a job application
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await jobApplicationService.deleteJobApplication(params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting job application:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
