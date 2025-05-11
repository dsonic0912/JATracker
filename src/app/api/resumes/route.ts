import { NextRequest, NextResponse } from "next/server";
import { resumeService } from "@/lib/db/resume-service";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/resumes
 * Get all resumes for the anonymous user
 */
// Disable Next.js cache for this route
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    // Find the anonymous user
    const anonymousUser = await prisma.user.findFirst({
      where: { email: "anonymous@example.com" },
    });

    if (!anonymousUser) {
      // Create not found response with cache control headers
      const notFoundResponse = NextResponse.json(
        { error: "Anonymous user not found" },
        { status: 404 },
      );

      // Set cache control headers to prevent caching
      notFoundResponse.headers.set(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate",
      );
      notFoundResponse.headers.set("Pragma", "no-cache");
      notFoundResponse.headers.set("Expires", "0");

      return notFoundResponse;
    }

    // Get all resumes for the anonymous user
    const resumes = await resumeService.getResumesByUserId(anonymousUser.id);

    // Create response with cache control headers
    const response = NextResponse.json({ data: resumes });

    // Set cache control headers to prevent caching
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate",
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("Error fetching resumes:", error);

    // Create error response with cache control headers
    const errorResponse = NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );

    // Set cache control headers to prevent caching
    errorResponse.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate",
    );
    errorResponse.headers.set("Pragma", "no-cache");
    errorResponse.headers.set("Expires", "0");

    return errorResponse;
  }
}
