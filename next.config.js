/** @type {import('next').NextConfig} */
const nextConfig = {
  // Make environment variables available to the client
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Configure server runtime config (server-side only)
  serverRuntimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  },
  // Configure public runtime config (available in both client and server)
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV || "development",
  },
};

module.exports = nextConfig;
