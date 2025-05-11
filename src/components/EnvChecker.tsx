"use client";

import { useEffect, useState } from "react";
import { getEnv, isDevelopment } from "@/lib/env";
import { AlertCircle, CheckCircle } from "lucide-react";

/**
 * A component that checks and displays the status of environment variables
 * Only visible in development mode
 */
export function EnvChecker() {
  const [envStatus, setEnvStatus] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (!isDevelopment()) {
      return;
    }

    // Check environment variables
    const envVars = {
      OPENAI_API_KEY: !!getEnv("OPENAI_API_KEY"),
      NODE_ENV: !!getEnv("NODE_ENV"),
    };

    setEnvStatus(envVars);
    setIsVisible(true);
  }, []);

  // Don't render anything in production or if not ready
  if (!isVisible) {
    return null;
  }

  const missingEnvVars = Object.entries(envStatus).filter(
    ([_, value]) => !value,
  );
  const allEnvVarsPresent = missingEnvVars.length === 0;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <div
        className={`rounded-lg border p-4 ${
          allEnvVarsPresent
            ? "border-green-200 bg-green-50"
            : "border-red-200 bg-red-50"
        }`}
      >
        <div className="flex items-center gap-2">
          {allEnvVarsPresent ? (
            <CheckCircle className="h-4 w-4 text-green-500" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-500" />
          )}
          <h5 className="font-medium">
            {allEnvVarsPresent
              ? "Environment variables loaded"
              : "Missing environment variables"}
          </h5>
        </div>
        <div className="mt-2">
          {allEnvVarsPresent ? (
            <p className="text-sm">
              All required environment variables are present.
            </p>
          ) : (
            <div>
              <p className="mb-2 text-sm">
                The following environment variables are missing:
              </p>
              <ul className="list-inside list-disc text-sm">
                {missingEnvVars.map(([key]) => (
                  <li key={key}>{key}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
