import { NextRequest, NextResponse } from 'next/server';
import { resumeService } from '@/lib/db/resume-service';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/resumes
 * Get all resumes for the anonymous user
 */
export async function GET() {
  try {
    // Find the anonymous user
    const anonymousUser = await prisma.user.findFirst({
      where: { email: 'anonymous@example.com' },
    });
    
    if (!anonymousUser) {
      return NextResponse.json(
        { error: 'Anonymous user not found' },
        { status: 404 }
      );
    }
    
    // Get all resumes for the anonymous user
    const resumes = await resumeService.getResumesByUserId(anonymousUser.id);
    
    return NextResponse.json({ data: resumes });
  } catch (error) {
    console.error('Error fetching resumes:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
