import { NextRequest, NextResponse } from "next/server";
import { resumeService } from "@/lib/db/resume-service";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/resume/[id]/duplicate
 * Duplicate a specific resume by ID
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumeId = params.id;
    
    // Find the anonymous user
    const anonymousUser = await prisma.user.findFirst({
      where: { email: "anonymous@example.com" },
    });
    
    if (!anonymousUser) {
      return NextResponse.json(
        { error: "Anonymous user not found" },
        { status: 404 }
      );
    }
    
    // Check if the resume exists
    const resume = await resumeService.getResumeById(resumeId);
    
    if (!resume) {
      return NextResponse.json(
        { error: "Resume not found" },
        { status: 404 }
      );
    }
    
    // Duplicate the resume
    const newResume = await resumeService.duplicateResume(anonymousUser.id, resumeId);
    
    // Create response with cache control headers
    const response = NextResponse.json({ data: newResume });
    
    // Set cache control headers to prevent caching
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    
    return response;
  } catch (error) {
    console.error("Error duplicating resume:", error);
    
    // Create error response with cache control headers
    const errorResponse = NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
    
    // Set cache control headers to prevent caching
    errorResponse.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    errorResponse.headers.set("Pragma", "no-cache");
    errorResponse.headers.set("Expires", "0");
    
    return errorResponse;
  }
}
