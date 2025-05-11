import { NextRequest, NextResponse } from 'next/server';
import { resumeService } from '@/lib/db/resume-service';
import { prisma } from '@/lib/prisma';

/**
 * POST /api/resume/create-with-title
 * Create a new resume with a custom title by duplicating the most recent one
 */
export async function POST(request: NextRequest) {
  try {
    const { title } = await request.json();
    
    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }
    
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
      const defaultResume = await resumeService.getDefaultResume();
      
      if (!defaultResume) {
        return NextResponse.json(
          { error: 'Failed to create default resume' },
          { status: 500 }
        );
      }
      
      // Update the title of the default resume
      await resumeService.updateResumeField(defaultResume.id, ['title'], title);
      
      // Get the updated resume
      const updatedResume = await resumeService.getResumeById(defaultResume.id);
      
      return NextResponse.json({ data: updatedResume });
    }
    
    // Duplicate the most recent resume
    const newResume = await resumeService.duplicateResume(anonymousUser.id, mostRecentResume.id);
    
    // Update the title of the new resume
    await resumeService.updateResumeField(newResume.id, ['title'], title);
    
    // Get the updated resume
    const updatedResume = await resumeService.getResumeById(newResume.id);
    
    return NextResponse.json({ data: updatedResume });
  } catch (error) {
    console.error('Error creating resume with title:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
