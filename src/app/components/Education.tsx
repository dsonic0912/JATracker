"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { EditableContent } from "@/components/ui/editable-content";
import { useResume } from "@/context/resume-context";
import { useEditMode } from "@/context/edit-mode-context";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

type Education = (typeof RESUME_DATA)["education"][number];

interface EducationPeriodProps {
  start: Education["start"];
  end: Education["end"];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Period: ${start} to ${end}`}
    >
      {start} - {end}
    </div>
  );
}

interface EducationItemProps {
  education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree } = education;
  const { resumeData, updateField } = useResume();
  const { isEditMode } = useEditMode();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Find the index of this education item
  const getEducationIndex = () => {
    return resumeData.education.findIndex((e) => e.school === school);
  };

  const handleSchoolUpdate = (newValue: string) => {
    const index = getEducationIndex();
    if (index !== -1) {
      updateField(["education", index.toString(), "school"], newValue);
    }
  };

  const handleDegreeUpdate = (newValue: string) => {
    const index = getEducationIndex();
    if (index !== -1) {
      updateField(["education", index.toString(), "degree"], newValue);
    }
  };

  const handleStartUpdate = (newValue: string) => {
    const index = getEducationIndex();
    if (index !== -1) {
      updateField(["education", index.toString(), "start"], newValue);
    }
  };

  const handleEndUpdate = (newValue: string) => {
    const index = getEducationIndex();
    if (index !== -1) {
      updateField(["education", index.toString(), "end"], newValue);
    }
  };

  const handleDeleteEducation = () => {
    const index = getEducationIndex();
    if (index !== -1) {
      // Create a new array without the education entry at the specified index
      const updatedEducation = [...resumeData.education];
      updatedEducation.splice(index, 1);
      updateField(["education"], updatedEducation);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <div className="flex items-center">
            <h3
              className="font-semibold leading-none"
              id={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <EditableContent content={school} onSave={handleSchoolUpdate} />
            </h3>
            {isEditMode && (
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 h-6 w-6 p-0 text-destructive hover:bg-destructive/10"
                onClick={() => setIsDeleteDialogOpen(true)}
                title="Delete education"
              >
                <Trash2Icon className="h-3 w-3" />
              </Button>
            )}
          </div>
          <div className="flex items-center text-sm tabular-nums text-gray-500">
            <span className="inline-flex items-center">
              <EditableContent
                content={start}
                onSave={handleStartUpdate}
                className="inline"
              />
            </span>
            <span className="mx-1">-</span>
            <span className="inline-flex items-center">
              <EditableContent
                content={end}
                onSave={handleEndUpdate}
                className="inline"
              />
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
        aria-labelledby={`education-${school
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        <EditableContent content={degree} onSave={handleDegreeUpdate} />
      </CardContent>

      {/* Delete confirmation dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Education</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this education entry? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteEducation}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  const { resumeData, updateField, lastUpdated } = useResume();
  const { isEditMode } = useEditMode();

  const handleAddEducation = async () => {
    // Get current year for default dates
    const currentYear = new Date().getFullYear();

    const newEducation = {
      school: "New School",
      degree: "Degree Title",
      start: (currentYear - 4).toString(), // Default to 4 years ago
      end: currentYear.toString(),
    };

    // Add the new education to the beginning of the array
    const updatedEducation = [newEducation, ...resumeData.education];

    console.log("Adding new education:", newEducation);
    console.log("Updated education array length:", updatedEducation.length);

    // Wait for the update to complete
    await updateField(["education"], updatedEducation);

    console.log("Education added successfully");
  };

  return (
    <Section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" id="education-section">
          Education
        </h2>
        {isEditMode && (
          <button
            onClick={async (e) => {
              e.preventDefault();
              await handleAddEducation();
            }}
            className="rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground hover:bg-primary/90"
          >
            Add Education +
          </button>
        )}
      </div>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="education-section"
      >
        {education.map((item) => (
          <article
            key={`${item.school}-${lastUpdated || Date.now()}`}
            role="article"
          >
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
