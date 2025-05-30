"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { RESUME_DATA } from "@/data/resume-data";

// Define the context type
type ResumeContextType = {
  resumeData: typeof RESUME_DATA;
  updateField: (path: string[], value: any) => Promise<void>;
  resumeId: string | null;
  lastUpdated?: number; // Timestamp to track updates
};

// Create the context
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export function ResumeContextProvider({
  children,
  resumeData,
  updateField,
  resumeId,
  lastUpdated,
}: {
  children: ReactNode;
  resumeData: typeof RESUME_DATA;
  updateField: (path: string[], value: any) => Promise<void>;
  resumeId: string | null;
  lastUpdated?: number;
}) {
  return (
    <ResumeContext.Provider
      value={{ resumeData, updateField, resumeId, lastUpdated }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

// Custom hook to use the resume context
export function useResumeContext() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error(
      "useResumeContext must be used within a ResumeContextProvider",
    );
  }
  return context;
}
