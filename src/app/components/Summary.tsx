"use client";

import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";
import { EditableContent } from "@/components/ui/editable-content";
import { useResume } from "@/context/resume-context";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  const { updateField, lastUpdated } = useResume();

  const handleSummaryUpdate = (newValue: string) => {
    // Pass the string value directly to the updateField function
    // Do not convert to a JSX element as it causes issues with Prisma
    updateField(["summary"], newValue);
  };

  // Don't render the section at all if summary is empty or null
  if (!summary) {
    return null;
  }

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        About
      </h2>
      <div
        className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        <EditableContent
          key={`summary-${lastUpdated || Date.now()}`}
          content={summary}
          onSave={handleSummaryUpdate}
          multiline={true}
          dialogTitle="Edit Summary"
        />
      </div>
    </Section>
  );
}
