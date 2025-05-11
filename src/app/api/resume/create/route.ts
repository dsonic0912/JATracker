import { NextRequest, NextResponse } from 'next/server';
import { resumeService } from '@/lib/db/resume-service';
import { prisma } from '@/lib/prisma';

/**
 * POST /api/resume/create
 * Create a new resume by duplicating the most recent one
 */
export async function POST() {
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
    
    // Get the most recent resume for the anonymous user
    const mostRecentResume = await resumeService.getMostRecentResumeForUser(anonymousUser.id);
    
    if (!mostRecentResume) {
      // If no resume exists, seed the database
      await resumeService.seedDatabase();
      const newResume = await resumeService.getDefaultResume();
      
      return NextResponse.json({ data: newResume });
    }
    
    // Duplicate the most recent resume
    const newResume = await resumeService.duplicateResume(anonymousUser.id, mostRecentResume.id);
    
    return NextResponse.json({ data: newResume });
  } catch (error) {
    console.error('Error creating resume:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
