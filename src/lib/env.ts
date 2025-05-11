import getConfig from 'next/config';

/**
 * Utility to safely access environment variables
 * 
 * This function provides a consistent way to access environment variables
 * across different environments (development, production, etc.)
 * 
 * @param key The environment variable key
 * @param defaultValue Optional default value if the environment variable is not found
 * @returns The environment variable value or the default value
 */
export function getEnv(key: string, defaultValue: string = ''): string {
  // Get Next.js runtime configs
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig() || {};
  
  // Try to get the value from different sources with fallbacks
  return (
    // First check server runtime config (for server components)
    serverRuntimeConfig?.[key] ||
    // Then check public runtime config (for client components)
    publicRuntimeConfig?.[key] ||
    // Then check process.env (direct environment variables)
    process.env[key] ||
    // Then check Next.js env config (from next.config.js)
    (typeof window !== 'undefined' ? (window as any).__NEXT_DATA__?.env?.[key] : undefined) ||
    // Finally fall back to the default value
    defaultValue
  );
}

/**
 * Check if the application is running in production mode
 * 
 * @returns true if NODE_ENV is 'production'
 */
export function isProduction(): boolean {
  return getEnv('NODE_ENV') === 'production';
}

/**
 * Check if the application is running in development mode
 * 
 * @returns true if NODE_ENV is 'development'
 */
export function isDevelopment(): boolean {
  return getEnv('NODE_ENV') === 'development';
}

/**
 * Get the OpenAI API key
 * 
 * @returns The OpenAI API key or an empty string if not found
 */
export function getOpenAIApiKey(): string {
  return getEnv('OPENAI_API_KEY');
}
