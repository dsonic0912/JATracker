#!/usr/bin/env node

/**
 * This script prints environment variables for debugging purposes
 * Run it with: node scripts/print-env.js
 */

console.log('Environment Variables:');
console.log('=====================');

// Print NODE_ENV
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);

// Print OPENAI_API_KEY (redacted for security)
const openaiKey = process.env.OPENAI_API_KEY;
console.log(`OPENAI_API_KEY: ${openaiKey ? `${openaiKey.substring(0, 4)}...${openaiKey.substring(openaiKey.length - 4)} (${openaiKey.length} chars)` : 'not set'}`);

// Print all environment variables (redacted for security)
console.log('\nAll Environment Variables (redacted):');
console.log('================================');
Object.keys(process.env).sort().forEach(key => {
  const value = process.env[key];
  
  // Skip binary data or very long values
  if (!value || typeof value !== 'string' || value.length > 1000) {
    console.log(`${key}: [binary data or very long value]`);
    return;
  }
  
  // Redact sensitive values
  if (key.includes('KEY') || key.includes('SECRET') || key.includes('PASSWORD') || key.includes('TOKEN')) {
    console.log(`${key}: ${value.substring(0, 3)}...${value.substring(value.length - 3)} (${value.length} chars)`);
  } else {
    console.log(`${key}: ${value}`);
  }
});

// Print process.env object type and properties
console.log('\nprocess.env Object:');
console.log('=================');
console.log(`Type: ${typeof process.env}`);
console.log(`Properties: ${Object.keys(process.env).length}`);
console.log(`Constructor: ${process.env.constructor ? process.env.constructor.name : 'unknown'}`);

// Print Next.js specific environment variables
console.log('\nNext.js Environment Variables:');
console.log('============================');
Object.keys(process.env).filter(key => key.startsWith('NEXT_')).forEach(key => {
  console.log(`${key}: ${process.env[key]}`);
});

// Print environment variable access methods
console.log('\nEnvironment Variable Access Methods:');
console.log('=================================');
console.log(`process.env.OPENAI_API_KEY: ${process.env.OPENAI_API_KEY ? 'set' : 'not set'}`);
console.log(`process.env['OPENAI_API_KEY']: ${process.env['OPENAI_API_KEY'] ? 'set' : 'not set'}`);
console.log(`Object.prototype.hasOwnProperty.call(process.env, 'OPENAI_API_KEY'): ${Object.prototype.hasOwnProperty.call(process.env, 'OPENAI_API_KEY')}`);
