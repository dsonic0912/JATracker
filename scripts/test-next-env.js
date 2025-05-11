#!/usr/bin/env node

/**
 * This script tests environment variables in a Next.js context
 * Run it with: node scripts/test-next-env.js
 */

// Import required modules
const { loadEnvConfig } = require('@next/env');
const path = require('path');

// Load Next.js environment variables
console.log('Loading Next.js environment variables...');
const projectDir = path.resolve(process.cwd());
const { combinedEnv, loadedEnvFiles } = loadEnvConfig(projectDir, process.env.NODE_ENV === 'production');

// Print loaded environment files
console.log('Loaded environment files:');
loadedEnvFiles.forEach(file => {
  console.log(`- ${file.path} (${file.contents.split('\n').length} lines)`);
});

// Print environment variables
console.log('\nEnvironment Variables:');
console.log('=====================');

// Print NODE_ENV
console.log(`NODE_ENV: ${combinedEnv.NODE_ENV || process.env.NODE_ENV || 'not set'}`);

// Print OPENAI_API_KEY (redacted for security)
const openaiKey = combinedEnv.OPENAI_API_KEY || process.env.OPENAI_API_KEY;
console.log(`OPENAI_API_KEY: ${openaiKey ? `${openaiKey.substring(0, 4)}...${openaiKey.substring(openaiKey.length - 4)} (${openaiKey.length} chars)` : 'not set'}`);

// Print Next.js specific environment variables
console.log('\nNext.js Environment Variables:');
console.log('============================');
Object.keys(combinedEnv).filter(key => key.startsWith('NEXT_')).forEach(key => {
  console.log(`${key}: ${combinedEnv[key]}`);
});

// Compare process.env and combinedEnv
console.log('\nComparison:');
console.log('==========');
console.log(`process.env.OPENAI_API_KEY: ${process.env.OPENAI_API_KEY ? 'set' : 'not set'}`);
console.log(`combinedEnv.OPENAI_API_KEY: ${combinedEnv.OPENAI_API_KEY ? 'set' : 'not set'}`);

// Check if the keys match
if (process.env.OPENAI_API_KEY && combinedEnv.OPENAI_API_KEY) {
  console.log('Keys match:', process.env.OPENAI_API_KEY === combinedEnv.OPENAI_API_KEY);
}
