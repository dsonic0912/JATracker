/**
 * Direct environment variable access
 * 
 * This file provides direct access to environment variables without any abstraction.
 * It's useful for debugging and ensuring we're accessing the variables correctly.
 */

// Direct access to OPENAI_API_KEY
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';

// Direct access to NODE_ENV
export const NODE_ENV = process.env.NODE_ENV || 'development';

// Helper function to check if we're in production
export const IS_PRODUCTION = NODE_ENV === 'production';

// Helper function to check if we're in development
export const IS_DEVELOPMENT = NODE_ENV === 'development';

// Log environment variables to the console (only in development)
if (typeof window !== 'undefined' && IS_DEVELOPMENT) {
  console.log('Environment Variables (direct access):');
  console.log('- OPENAI_API_KEY:', OPENAI_API_KEY ? '[SET]' : '[NOT SET]');
  console.log('- NODE_ENV:', NODE_ENV);
}
