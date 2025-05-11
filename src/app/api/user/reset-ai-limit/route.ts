import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * POST /api/user/reset-ai-limit
 * Reset the anonymous user's AI calls limit
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
    
    // Reset the AI calls limit to 50
    const updatedUser = await prisma.user.update({
      where: { id: anonymousUser.id },
      data: { aiCallsLimit: 50 },
    });
    
    return NextResponse.json({ 
      success: true,
      data: {
        aiCallsLimit: updatedUser.aiCallsLimit
      },
      message: 'AI calls limit reset successfully'
    });
  } catch (error) {
    console.error('Error resetting AI calls limit:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
