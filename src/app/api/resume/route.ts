import { NextRequest, NextResponse } from 'next/server';
import { resumeService } from '@/lib/db/resume-service';

/**
 * GET /api/resume
 * Get the default resume
 */
export async function GET() {
  try {
    const resume = await resumeService.getDefaultResume();
    
    if (!resume) {
      // If no resume exists, seed the database
      await resumeService.seedDatabase();
      const newResume = await resumeService.getDefaultResume();
      
      return NextResponse.json({ data: newResume });
    }
    
    return NextResponse.json({ data: resume });
  } catch (error) {
    console.error('Error fetching resume:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
