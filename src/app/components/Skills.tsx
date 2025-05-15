"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, XIcon, PencilIcon } from "lucide-react";
import { useResume } from "@/context/resume-context";
import { useEditMode } from "@/context/edit-mode-context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type Skills = readonly string[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

/**
 * Renders a list of skills as badges with edit and delete functionality
 */
function SkillsList({ skills, className }: SkillsListProps) {
  const { updateField } = useResume();
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editingSkill, setEditingSkill] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  // Helper function to strip HTML tags for display in input
  const stripHtmlTags = (text: string): string => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const handleEditSkill = (skill: string, index: number) => {
    console.log("Editing skill:", skill, "at index:", index);

    // Store the original skill with markup
    setEditingSkill(skill);
    setEditingIndex(index);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDeleteSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    updateField(["skills"], updatedSkills);
  };

  const openAddDialog = () => {
    setIsEditing(false);
    setNewSkill("");
    setIsDialogOpen(true);
  };

  const handleSaveSkill = () => {
    if (editingSkill.trim() === "") return;

    console.log("Saving skill with highlighting:", editingSkill);

    const updatedSkills = [...skills];
    updatedSkills[editingIndex] = editingSkill;

    // Update the skills in the database
    updateField(["skills"], updatedSkills);

    setIsEditing(false);
    setIsDialogOpen(false);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() === "") return;

    console.log("Adding skill with highlighting:", newSkill);

    // Add the new skill to the bottom of the list
    const updatedSkills = [...skills, newSkill];

    // Update the skills in the database
    updateField(["skills"], updatedSkills);

    setNewSkill("");
    setIsDialogOpen(false);
  };

  return (
    <>
      {isEditMode && (
        <div className="mb-2 flex items-center justify-between">
          <Button
            onClick={openAddDialog}
            className="rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground hover:bg-primary/90"
          >
            <PlusIcon className="mr-1 h-3 w-3" /> Add Skill
          </Button>
        </div>
      )}

      <ul
        className={cn("flex list-none flex-wrap gap-1 p-0", className)}
        aria-label="List of skills"
      >
        {skills.map((skill, index) => (
          <li key={`${skill}-${index}`} className="group relative">
            <Badge
              className="pr-6 print:text-[10px]"
              aria-label={`Skill: ${skill}`}
            >
              {(() => {
                // Helper function to render highlighted content
                const renderHighlightedContent = (text: string) => {
                  return text
                    .split(/(<mark>.*?<\/mark>)/g)
                    .map((part, index) => {
                      if (
                        part.startsWith("<mark>") &&
                        part.endsWith("</mark>")
                      ) {
                        const highlightedText = part.replace(
                          /<mark>(.*?)<\/mark>/,
                          "$1",
                        );
                        return (
                          <span
                            key={index}
                            className="rounded bg-yellow-200 px-0.5 text-black"
                          >
                            {highlightedText}
                          </span>
                        );
                      }
                      return part;
                    });
                };

                // Check if the skill has highlighting markup
                if (typeof skill === "string" && skill.includes("<mark>")) {
                  return renderHighlightedContent(skill);
                } else {
                  return skill;
                }
              })()}
              {isEditMode && (
                <span className="absolute right-1 top-1/2 flex -translate-y-1/2 space-x-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-3 w-3 p-0"
                    onClick={() => handleEditSkill(skill, index)}
                  >
                    <PencilIcon className="h-2 w-2" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-3 w-3 p-0 text-destructive"
                    onClick={() => handleDeleteSkill(index)}
                  >
                    <XIcon className="h-2 w-2" />
                  </Button>
                </span>
              )}
            </Badge>
          </li>
        ))}
      </ul>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit Skill" : "Add New Skill"}
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              To highlight text, wrap it with &lt;mark&gt; tags:{" "}
              <code>&lt;mark&gt;text to highlight&lt;/mark&gt;</code>
            </p>
          </DialogHeader>
          <div className="py-4">
            <div className="relative">
              <input
                type="text"
                value={isEditing ? editingSkill : newSkill}
                onChange={(e) =>
                  isEditing
                    ? setEditingSkill(e.target.value)
                    : setNewSkill(e.target.value)
                }
                className="w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Enter skill"
              />

              {/* Preview of highlighted text */}
              {(isEditing ? editingSkill : newSkill).includes("<mark>") && (
                <div className="mt-3 rounded-md border-2 border-yellow-300 bg-yellow-50 p-3 text-sm shadow-sm">
                  <div className="font-semibold text-gray-800">
                    Preview with Highlighting:
                  </div>
                  <div className="mt-2 rounded bg-white p-2">
                    {(isEditing ? editingSkill : newSkill)
                      .split(/(<mark>.*?<\/mark>)/g)
                      .map((part, index) => {
                        if (
                          part.startsWith("<mark>") &&
                          part.endsWith("</mark>")
                        ) {
                          const highlightedText = part.replace(
                            /<mark>(.*?)<\/mark>/,
                            "$1",
                          );
                          return (
                            <span
                              key={index}
                              className="rounded bg-yellow-200 px-0.5 text-black"
                            >
                              {highlightedText}
                            </span>
                          );
                        }
                        return part;
                      })}
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    This is how your skill will appear on your resume.
                  </p>
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={isEditing ? handleSaveSkill : handleAddSkill}>
              {isEditing ? "Save" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

interface SkillsProps {
  skills?: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ className }: SkillsProps) {
  const { resumeData } = useResume();

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <SkillsList skills={resumeData.skills} aria-labelledby="skills-section" />
    </Section>
  );
}
