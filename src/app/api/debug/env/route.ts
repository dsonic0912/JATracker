import { NextRequest, NextResponse } from "next/server";
import { OPENAI_API_KEY, NODE_ENV, IS_PRODUCTION } from "@/lib/env-direct";

/**
 * GET /api/debug/env
 * Debug endpoint to check environment variables
 * Only available in development mode
 */
export async function GET(request: NextRequest) {
  // Only allow this endpoint in development mode
  if (NODE_ENV === "production") {
    return NextResponse.json(
      { error: "This endpoint is not available in production" },
      { status: 403 }
    );
  }

  // Get environment variables
  const envVars = {
    NODE_ENV,
    IS_PRODUCTION,
    OPENAI_API_KEY_STATUS: OPENAI_API_KEY ? "set" : "not set",
    OPENAI_API_KEY_LENGTH: OPENAI_API_KEY?.length || 0,
    OPENAI_API_KEY_PREVIEW: OPENAI_API_KEY 
      ? `${OPENAI_API_KEY.substring(0, 4)}...${OPENAI_API_KEY.substring(OPENAI_API_KEY.length - 4)}`
      : "not set",
    PROCESS_ENV_OPENAI_API_KEY_STATUS: process.env.OPENAI_API_KEY ? "set" : "not set",
    PROCESS_ENV_OPENAI_API_KEY_LENGTH: process.env.OPENAI_API_KEY?.length || 0,
    PROCESS_ENV_OPENAI_API_KEY_PREVIEW: process.env.OPENAI_API_KEY
      ? `${process.env.OPENAI_API_KEY.substring(0, 4)}...${process.env.OPENAI_API_KEY.substring(process.env.OPENAI_API_KEY.length - 4)}`
      : "not set",
  };

  return NextResponse.json(envVars);
}
