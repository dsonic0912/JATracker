#!/usr/bin/env node

/**
 * This script resets the AI calls limit for the anonymous user
 * Run it with: node scripts/reset-ai-limit.js
 */

// Import PrismaClient
const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function resetAICallsLimit() {
  try {
    console.log('Resetting AI calls limit for anonymous user...');
    
    // Find the anonymous user
    const anonymousUser = await prisma.user.findFirst({
      where: { email: 'anonymous@example.com' },
    });
    
    if (!anonymousUser) {
      console.error('Anonymous user not found');
      return;
    }
    
    console.log('Current AI calls limit:', anonymousUser.aiCallsLimit);
    
    // Reset the AI calls limit to 50
    const updatedUser = await prisma.user.update({
      where: { id: anonymousUser.id },
      data: { aiCallsLimit: 50 },
    });
    
    console.log('AI calls limit reset to:', updatedUser.aiCallsLimit);
  } catch (error) {
    console.error('Error resetting AI calls limit:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
resetAICallsLimit();
