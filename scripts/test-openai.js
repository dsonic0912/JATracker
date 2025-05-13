#!/usr/bin/env node

/**
 * This script tests the OpenAI API with the current environment variables
 * Run it with: node scripts/test-openai.js
 */

// Load environment variables from .env files
try {
  require("dotenv").config();
  console.log("Loaded environment variables from .env file");
} catch (error) {
  console.log(
    "Could not load dotenv, continuing with existing environment variables",
  );
}

// Try to load from .env.local if dotenv is available
try {
  require("dotenv").config({ path: ".env.local" });
  console.log("Loaded environment variables from .env.local file");
} catch (error) {
  // Ignore error
}

// Import OpenAI
let OpenAI;
try {
  OpenAI = require("openai");
  console.log("OpenAI package loaded successfully");
} catch (error) {
  console.error("Error loading OpenAI package:", error.message);
  process.exit(1);
}

// Get the API key from environment variables
const apiKey = process.env.OPENAI_API_KEY;
console.log("API Key status:", apiKey ? "Present" : "Missing");
console.log("API Key length:", apiKey?.length || 0);
console.log(
  "API Key first 4 chars:",
  apiKey ? apiKey.substring(0, 4) + "..." : "N/A",
);

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: apiKey,
});

// Test the OpenAI API
async function testOpenAI() {
  try {
    console.log("Testing OpenAI API...");

    // Make a simple API call
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Say hello!" },
      ],
      max_tokens: 10,
    });

    console.log("API call successful!");
    console.log("Response:", completion.choices[0].message.content);

    return true;
  } catch (error) {
    console.error("Error calling OpenAI API:", error.message);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    }
    return false;
  }
}

// Run the test
testOpenAI()
  .then((success) => {
    console.log("Test completed:", success ? "SUCCESS" : "FAILED");
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error("Unexpected error:", error);
    process.exit(1);
  });
