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
  const { updateField } = useResume();

  const handleSummaryUpdate = (newValue: string) => {
    // When updating the summary, we need to convert the string to a JSX element
    // to maintain consistency with the data structure
    const newSummary = <>{newValue}</>;
    updateField(["summary"], newSummary);
  };

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
          content={summary}
          onSave={handleSummaryUpdate}
          multiline={true}
          dialogTitle="Edit Summary"
        />
      </div>
    </Section>
  );
}
