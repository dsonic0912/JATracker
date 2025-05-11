#!/usr/bin/env node

/**
 * This script checks if required environment variables are set
 * It's meant to be run before the build process
 */

// List of required environment variables
const requiredEnvVars = [
  'OPENAI_API_KEY',
];

// Check if all required environment variables are set
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

// If there are missing environment variables, print a warning
if (missingEnvVars.length > 0) {
  console.warn('\x1b[33m%s\x1b[0m', '⚠️  WARNING: Missing environment variables');
  console.warn('\x1b[33m%s\x1b[0m', 'The following environment variables are not set:');
  missingEnvVars.forEach(envVar => {
    console.warn('\x1b[33m%s\x1b[0m', `  - ${envVar}`);
  });
  console.warn('\x1b[33m%s\x1b[0m', 'Some features may not work correctly without these variables.');
  console.warn('\x1b[33m%s\x1b[0m', 'You can set them in a .env file or in your deployment environment.');
  
  // In production, we might want to exit with an error code
  if (process.env.NODE_ENV === 'production' && process.env.SKIP_ENV_VALIDATION !== 'true') {
    console.error('\x1b[31m%s\x1b[0m', '❌ ERROR: Missing required environment variables in production');
    console.error('\x1b[31m%s\x1b[0m', 'Set the SKIP_ENV_VALIDATION=true environment variable to bypass this check.');
    process.exit(1);
  }
} else {
  console.log('\x1b[32m%s\x1b[0m', '✅ All required environment variables are set');
}
