import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "@/lib/env-direct";

/**
 * GET /api/test-openai
 * Test the OpenAI API connection
 */
export async function GET(request: NextRequest) {
  try {
    // Log environment information
    console.log("Environment:", process.env.NODE_ENV);
    console.log("OpenAI API Key status:", OPENAI_API_KEY ? "Present" : "Missing");
    console.log("OpenAI API Key length:", OPENAI_API_KEY?.length || 0);
    console.log("OpenAI API Key first 4 chars:", OPENAI_API_KEY ? OPENAI_API_KEY.substring(0, 4) + "..." : "N/A");
    console.log("Direct process.env.OPENAI_API_KEY status:", process.env.OPENAI_API_KEY ? "Present" : "Missing");
    
    // Try different ways to access the API key
    const apiKey = OPENAI_API_KEY || process.env.OPENAI_API_KEY || "";
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      );
    }
    
    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: apiKey,
    });
    
    // Make a simple API call to test the connection
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Say hello!" }
      ],
      max_tokens: 10,
    });
    
    return NextResponse.json({
      success: true,
      message: completion.choices[0].message.content,
      apiKeyStatus: "valid",
    });
  } catch (error) {
    console.error("Error testing OpenAI API:", error);
    
    // Provide detailed error information
    const errorResponse = {
      success: false,
      error: (error as Error).message,
      apiKeyStatus: OPENAI_API_KEY ? "present but invalid" : "missing",
      apiKeyLength: OPENAI_API_KEY?.length || 0,
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
