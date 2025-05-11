"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EditableContent } from "@/components/ui/editable-content";
import { useResume } from "@/context/resume-context";
import React, { useState } from "react";
import { PlusIcon, XIcon, PencilIcon, Trash2Icon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { useEditMode } from "@/context/edit-mode-context";

/**
 * Extracts task descriptions from the description field
 * This is used for backward compatibility with the old format
 */
function extractTasksFromDescription(description: any): WorkTask[] {
  // If description is a string, check if it contains a list
  if (typeof description === "string") {
    const descStr = description as string;
    // If the description contains an HTML list, try to extract the items
    if (descStr.includes("<ul") && descStr.includes("<li")) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = descStr;

      const tasks: WorkTask[] = [];
      const liElements = tempDiv.querySelectorAll("li");

      liElements.forEach((li) => {
        tasks.push({ description: li.textContent || "" });
      });

      return tasks;
    }
    return [];
  }

  // If description is null or undefined, return empty array
  if (!description) return [];

  // Try to find list items in the description
  let tasks: WorkTask[] = [];

  // Handle React elements
  if (React.isValidElement(description)) {
    const children = (description as any).props?.children;

    if (Array.isArray(children)) {
      // Look for ul element in children
      children.forEach((child: any) => {
        if (React.isValidElement(child) && child.type === "ul") {
          const listItems = (child as any).props?.children;

          if (Array.isArray(listItems)) {
            tasks = listItems
              .map((item: any) => {
                if (React.isValidElement(item) && item.type === "li") {
                  const itemChildren = (item as any).props?.children;

                  // Convert React element children to string properly
                  if (typeof itemChildren === "string") {
                    return { description: itemChildren };
                  } else if (typeof itemChildren === "number") {
                    return { description: String(itemChildren) };
                  } else if (Array.isArray(itemChildren)) {
                    return {
                      description: itemChildren
                        .map((child: any) => {
                          if (typeof child === "string") return child;
                          if (typeof child === "number") return String(child);
                          if (React.isValidElement(child)) {
                            const childContent = (child as any).props?.children;
                            if (typeof childContent === "string")
                              return childContent;
                            if (typeof childContent === "number")
                              return String(childContent);
                            return "";
                          }
                          return "";
                        })
                        .join(""),
                    };
                  } else if (React.isValidElement(itemChildren)) {
                    const childContent = (itemChildren as any).props?.children;
                    if (typeof childContent === "string")
                      return { description: childContent };
                    if (typeof childContent === "number")
                      return { description: String(childContent) };
                    return { description: "" };
                  } else {
                    // For any other type, convert to string safely
                    try {
                      return { description: String(itemChildren) };
                    } catch (e) {
                      return { description: "" };
                    }
                  }
                }
                return null;
              })
              .filter(Boolean) as WorkTask[];
          }
        }
      });
    }
  }

  return tasks;
}

// Extend the WorkExperience type to include tasks
type WorkExperience = (typeof RESUME_DATA)["work"][number] & {
  tasks?: WorkTask[];
};
type WorkBadges = readonly string[];
type WorkTask = { id?: string; description: string };

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
  workIndex: number;
}

/**
 * Renders a list of badges for work experience with edit functionality
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges, workIndex }: BadgeListProps) {
  const { updateField } = useResume();
  const { isEditMode } = useEditMode();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBadge, setEditingBadge] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newBadge, setNewBadge] = useState("");

  // Ensure badges is always an array
  const badgesArray = Array.isArray(badges) ? badges : [];

  const handleAddBadge = () => {
    if (newBadge.trim() === "") return;

    // Add the new badge to the bottom of the list
    const updatedBadges = [...badgesArray, newBadge];
    updateField(["work", workIndex.toString(), "badges"], updatedBadges);

    setNewBadge("");
    setIsDialogOpen(false);
    console.log("Badge added:", newBadge, "to work index:", workIndex);
  };

  if (badgesArray.length === 0 && !className?.includes("sm:hidden")) {
    return isEditMode ? (
      <>
        <Button
          variant="ghost"
          size="sm"
          className="h-5 px-1 text-xs"
          onClick={() => {
            setIsEditing(false);
            setNewBadge("");
            setIsDialogOpen(true);
            console.log("Add Skills button clicked, dialog should open");
          }}
        >
          <PlusIcon className="mr-1 h-3 w-3" /> Add Skills
        </Button>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Skill</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <input
                type="text"
                value={newBadge}
                onChange={(e) => setNewBadge(e.target.value)}
                className="w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Enter skill or technology"
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddBadge}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    ) : null;
  }

  const handleEditBadge = (badge: string, index: number) => {
    setEditingBadge(badge);
    setEditingIndex(index);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDeleteBadge = (index: number) => {
    const updatedBadges = [...badgesArray];
    updatedBadges.splice(index, 1);
    updateField(["work", workIndex.toString(), "badges"], updatedBadges);
  };

  const handleSaveBadge = () => {
    if (editingBadge.trim() === "") return;

    const updatedBadges = [...badgesArray];
    updatedBadges[editingIndex] = editingBadge;
    updateField(["work", workIndex.toString(), "badges"], updatedBadges);

    setIsEditing(false);
    setIsDialogOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "relative",
          className?.includes("sm:hidden") ? "mt-2" : "",
        )}
      >
        <ul
          className={cn("inline-flex list-none flex-wrap gap-1 p-0", className)}
          aria-label="Technologies used"
        >
          {badgesArray.map((badge, index) => (
            <li key={`${badge}-${index}`} className="group relative">
              <Badge
                variant="secondary"
                className="pr-5 align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              >
                {badge}
                {isEditMode && (
                  <span className="absolute right-1 top-1/2 flex -translate-y-1/2 space-x-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-3 w-3 p-0"
                      onClick={() => handleEditBadge(badge, index)}
                    >
                      <PencilIcon className="h-2 w-2" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-3 w-3 p-0 text-destructive"
                      onClick={() => handleDeleteBadge(index)}
                    >
                      <XIcon className="h-2 w-2" />
                    </Button>
                  </span>
                )}
              </Badge>
            </li>
          ))}
          {isEditMode && (
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="h-5 px-1 text-xs"
                onClick={() => {
                  setIsEditing(false);
                  setNewBadge("");
                  setIsDialogOpen(true);
                  console.log("Add button clicked, dialog should open");
                }}
              >
                <PlusIcon className="mr-1 h-3 w-3" /> Add
              </Button>
            </li>
          )}
        </ul>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit Skill" : "Add New Skill"}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <input
              type="text"
              value={isEditing ? editingBadge : newBadge}
              onChange={(e) =>
                isEditing
                  ? setEditingBadge(e.target.value)
                  : setNewBadge(e.target.value)
              }
              className="w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Enter skill or technology"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={isEditing ? handleSaveBadge : handleAddBadge}>
              {isEditing ? "Save" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Note: WorkPeriod component is not currently used but kept for future reference
// interface WorkPeriodProps {
//   start: WorkExperience["start"];
//   end?: WorkExperience["end"];
// }

// /**
//  * Displays the work period in a consistent format
//  */
// function WorkPeriod({ start, end }: WorkPeriodProps) {
//   return (
//     <div
//       className="text-sm tabular-nums text-gray-500"
//       aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
//     >
//       {start} - {end ?? "Present"}
//     </div>
//   );
// }

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  if (!link) {
    return <span>{company}</span>;
  }

  return (
    <a
      className="inline-flex items-center gap-1 hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website (opens in new tab)`}
    >
      {company}
      <span
        className="size-1 rounded-full bg-green-500"
        aria-label="Active company indicator"
      />
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end } = work;
  // Ensure description is treated as a string
  const description =
    typeof work.description === "string"
      ? work.description
      : work.description
        ? String(work.description)
        : "";

  const { updateField, resumeData } = useResume();
  const { isEditMode } = useEditMode();
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [editedLink, setEditedLink] = useState(link || "");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Initialize tasks from work object or from description if tasks don't exist
  const initialTasks =
    work.tasks && Array.isArray(work.tasks)
      ? work.tasks
      : extractTasksFromDescription(description);

  const [tasks, setTasks] = useState<WorkTask[]>(initialTasks || []);

  // Find the index of this work item using the current resumeData instead of RESUME_DATA
  const workIndex = resumeData.work.findIndex(
    (w) => w.company === company && w.start === start,
  );

  const handleCompanyUpdate = (newValue: string) => {
    if (workIndex !== -1) {
      updateField(["work", workIndex.toString(), "company"], newValue);
    }
  };

  const handleTitleUpdate = (newValue: string) => {
    if (workIndex !== -1) {
      updateField(["work", workIndex.toString(), "title"], newValue);
    }
  };

  const handleStartUpdate = (newValue: string) => {
    if (workIndex !== -1) {
      updateField(["work", workIndex.toString(), "start"], newValue);
    }
  };

  const handleEndUpdate = (newValue: string) => {
    if (workIndex !== -1) {
      updateField(["work", workIndex.toString(), "end"], newValue || null);
    }
  };

  const handleDescriptionUpdate = (newValue: string) => {
    if (workIndex !== -1) {
      // Check if the original description is a JSX element
      const isJSX =
        React.isValidElement(description) ||
        (typeof description === "object" && description !== null);

      // If it's JSX, wrap the new value in a fragment to maintain consistency
      const newDescription = isJSX ? <>{newValue}</> : newValue;
      updateField(
        ["work", workIndex.toString(), "description"],
        newDescription,
      );
    }
  };

  // State for task management
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState(-1);
  const [newTaskText, setNewTaskText] = useState("");

  // Function to add a new task
  const handleAddTask = (newTaskDescription: string) => {
    if (workIndex === -1 || !newTaskDescription.trim()) return;

    const newTask: WorkTask = { description: newTaskDescription };
    const updatedTasks = [...tasks, newTask];

    // Update the tasks in the work object
    updateField(["work", workIndex.toString(), "tasks"], updatedTasks);

    // Update local state
    setTasks(updatedTasks);
    setIsTaskDialogOpen(false);
    setNewTaskText("");
  };

  // Function to edit a task
  const handleEditTask = (index: number, newDescription: string) => {
    if (workIndex === -1) return;
    if (index < 0 || index >= tasks.length) return;

    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      description: newDescription,
    };

    // Update the tasks in the work object
    updateField(["work", workIndex.toString(), "tasks"], updatedTasks);

    // Update local state
    setTasks(updatedTasks);
    setIsTaskDialogOpen(false);
    setEditingTaskIndex(-1);
    setNewTaskText("");
  };

  // Function to delete a task
  const handleDeleteTask = (index: number) => {
    if (workIndex === -1) return;
    if (index < 0 || index >= tasks.length) return;

    const updatedTasks = tasks.filter((_, idx) => idx !== index);

    // Update the tasks in the work object
    updateField(["work", workIndex.toString(), "tasks"], updatedTasks);

    // Update local state
    setTasks(updatedTasks);
  };

  // Open dialog to add a new task
  const openAddTaskDialog = () => {
    setEditingTaskIndex(-1);
    setNewTaskText("");
    setIsTaskDialogOpen(true);
  };

  // Open dialog to edit a task
  const openEditTaskDialog = (index: number) => {
    if (index >= 0 && index < tasks.length) {
      setEditingTaskIndex(index);
      setNewTaskText(tasks[index].description);
      setIsTaskDialogOpen(true);
    }
  };

  const handleLinkUpdate = () => {
    if (workIndex !== -1) {
      updateField(["work", workIndex.toString(), "link"], editedLink || null);
      setIsLinkDialogOpen(false);
    }
  };

  const openLinkDialog = () => {
    setEditedLink(link || "");
    setIsLinkDialogOpen(true);
  };

  const handleDeleteWork = () => {
    if (workIndex !== -1) {
      // Create a new array without the work item at workIndex
      const updatedWork = [...resumeData.work];
      updatedWork.splice(workIndex, 1);
      updateField(["work"], updatedWork);
      setIsDeleteDialogOpen(false);
    }
  };

  const cardClassName =
    company === "LBSTek"
      ? "py-1 print:py-0 print-force-new-page"
      : "py-1 print:py-0";

  return (
    <Card className={cardClassName}>
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <div className="flex items-center">
              {isEditMode ? (
                <EditableContent
                  content={company}
                  onSave={handleCompanyUpdate}
                />
              ) : (
                <CompanyLink company={company} link={link} />
              )}
              {isEditMode && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-1 h-6 w-6 p-0"
                  onClick={openLinkDialog}
                  title="Edit company link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </Button>
              )}
              {isEditMode && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-1 h-6 w-6 p-0 text-destructive hover:bg-destructive/10"
                  onClick={() => setIsDeleteDialogOpen(true)}
                  title="Delete work experience"
                >
                  <Trash2Icon className="h-3 w-3" />
                </Button>
              )}
            </div>
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
              workIndex={workIndex}
            />
          </h3>
          <div className="text-sm tabular-nums text-gray-500">
            <EditableContent
              content={start}
              onSave={handleStartUpdate}
              className="inline"
            />{" "}
            -{" "}
            <EditableContent
              content={end || "Present"}
              onSave={handleEndUpdate}
              className="inline"
            />
          </div>
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[14px]">
          <EditableContent content={title} onSave={handleTitleUpdate} />
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-pretty text-xs text-foreground/80 print:mt-1 print:text-[12px]">
          {!isEditMode ? (
            <>
              <EditableContent
                content={description}
                onSave={handleDescriptionUpdate}
                multiline={true}
                dialogTitle="Edit Job Description"
              />

              {/* Display tasks in view mode */}
              {tasks && tasks.length > 0 && (
                <ul className="mt-2 list-inside list-disc">
                  {tasks.map((task) => (
                    <li key={task.id || task.description}>
                      {task.description}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <>
              {/* In edit mode, show the description text */}
              <EditableContent
                content={description}
                onSave={handleDescriptionUpdate}
                multiline={true}
                dialogTitle="Edit Job Description"
              />

              {/* Tasks management */}
              <div className="mt-2">
                <button
                  onClick={openAddTaskDialog}
                  className="flex items-center text-xs text-primary hover:underline"
                >
                  <PlusIcon className="mr-1 h-3 w-3" /> Add Bullet Point
                </button>

                {tasks && tasks.length > 0 && (
                  <ul className="mt-2 list-inside list-disc">
                    {tasks.map((task, index) => (
                      <li key={task.id || index} className="group relative">
                        {task.description}
                        <span className="absolute right-0 top-1/2 flex -translate-y-1/2 space-x-1 opacity-0 transition-opacity group-hover:opacity-100">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 p-0"
                            onClick={() => openEditTaskDialog(index)}
                          >
                            <PencilIcon className="h-2 w-2" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 p-0 text-destructive"
                            onClick={() => handleDeleteTask(index)}
                          >
                            <XIcon className="h-2 w-2" />
                          </Button>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
            workIndex={workIndex}
          />
        </div>

        {/* Dialog for adding/editing tasks */}
        <Dialog open={isTaskDialogOpen} onOpenChange={setIsTaskDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingTaskIndex === -1
                  ? "Add Bullet Point"
                  : "Edit Bullet Point"}
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <textarea
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                className="min-h-[100px] w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Enter bullet point text"
              />
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsTaskDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={() =>
                  editingTaskIndex === -1
                    ? handleAddTask(newTaskText)
                    : handleEditTask(editingTaskIndex, newTaskText)
                }
              >
                {editingTaskIndex === -1 ? "Add" : "Save"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>

      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Company Link</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <input
              type="text"
              value={editedLink}
              onChange={(e) => setEditedLink(e.target.value)}
              className="w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="https://example.com"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsLinkDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleLinkUpdate}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Work Experience</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this work experience? This action
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
            <Button variant="destructive" onClick={handleDeleteWork}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  const { resumeData, updateField } = useResume();
  const { isEditMode } = useEditMode();

  const handleAddWork = () => {
    // Get current year for the start date
    const currentYear = new Date().getFullYear();

    const newWork = {
      company: "New Company",
      link: "#",
      badges: [], // Initialize with an empty array to allow adding badges later
      title: "Job Title",
      logo: null,
      start: currentYear.toString(), // Use current year as default
      end: null,
      description: "Job description goes here.",
      tasks: [], // Initialize with an empty array for tasks
    };

    // Add the new work experience to the beginning of the array
    const updatedWork = [newWork, ...resumeData.work];
    updateField(["work"], updatedWork);
  };

  return (
    <Section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" id="work-experience">
          Work Experience
        </h2>
        {isEditMode && (
          <button
            onClick={handleAddWork}
            className="rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground hover:bg-primary/90"
          >
            Add Work +
          </button>
        )}
      </div>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
