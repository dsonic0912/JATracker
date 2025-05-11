import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/user/ai-calls-limit
 * Get the anonymous user's AI calls limit
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
    
    return NextResponse.json({ 
      data: {
        aiCallsLimit: anonymousUser.aiCallsLimit
      }
    });
  } catch (error) {
    console.error('Error fetching AI calls limit:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
