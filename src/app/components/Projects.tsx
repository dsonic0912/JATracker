"use client";

import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";
import { EditableContent } from "@/components/ui/editable-content";
import { useResume } from "@/context/resume-context";
import { useEditMode } from "@/context/edit-mode-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Trash2Icon } from "lucide-react";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active project indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

/**
 * Card component displaying project information
 */
function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  const { resumeData, updateField } = useResume();
  const { isEditMode } = useEditMode();
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editedLink, setEditedLink] = useState(link || "");

  // Find the index of this project
  const getProjectIndex = () => {
    return resumeData.projects.findIndex((p) => p.title === title);
  };

  const handleTitleUpdate = (newValue: string) => {
    const index = getProjectIndex();
    if (index !== -1) {
      updateField(["projects", index.toString(), "title"], newValue);
    }
  };

  const handleDescriptionUpdate = (newValue: string) => {
    const index = getProjectIndex();
    if (index !== -1) {
      updateField(["projects", index.toString(), "description"], newValue);
    }
  };

  const handleLinkUpdate = () => {
    const index = getProjectIndex();
    if (index !== -1) {
      if (editedLink) {
        updateField(["projects", index.toString(), "link"], {
          label: title.toLowerCase().replace(/\s+/g, "-"),
          href: editedLink,
        });
      } else {
        // If link is empty, create a new project object without the link property
        const { link: _, ...projectWithoutLink } = {
          ...resumeData.projects[index],
        };
        updateField(["projects", index.toString()], projectWithoutLink);
      }
      setIsLinkDialogOpen(false);
    }
  };

  const handleDeleteProject = () => {
    const index = getProjectIndex();
    if (index !== -1) {
      // Create a new array without the project at the specified index
      const updatedProjects = [...resumeData.projects];
      updatedProjects.splice(index, 1);
      updateField(["projects"], updatedProjects);
      setIsDeleteDialogOpen(false);
    }
  };

  const openLinkDialog = () => {
    setEditedLink(link || "");
    setIsLinkDialogOpen(true);
  };

  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-3"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="flex items-center justify-between text-base">
            <div className="flex-1">
              {isEditMode ? (
                <EditableContent content={title} onSave={handleTitleUpdate} />
              ) : (
                <ProjectLink title={title} link={link} />
              )}
            </div>
            {isEditMode && (
              <div className="flex">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={openLinkDialog}
                  title="Edit project link"
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-1 h-6 w-6 p-0 text-destructive hover:bg-destructive/10"
                  onClick={() => setIsDeleteDialogOpen(true)}
                  title="Delete project"
                >
                  <Trash2Icon className="h-3 w-3" />
                </Button>
              </div>
            )}
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            <EditableContent
              content={description}
              onSave={handleDescriptionUpdate}
              multiline={true}
              dialogTitle="Edit Project Description"
            />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} />
      </CardContent>

      {/* Link edit dialog */}
      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Project Link</DialogTitle>
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
            <DialogTitle>Delete Project</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this project? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteProject}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Section component displaying all side projects
 */
export function Projects({ projects }: ProjectsProps) {
  const { resumeData, updateField, lastUpdated } = useResume();
  const { isEditMode } = useEditMode();

  const handleAddProject = async () => {
    const newProject = {
      title: "New Project",
      techStack: ["Tech 1", "Tech 2"],
      description: "Project description goes here.",
      logo: null,
      link: {
        label: "project-link",
        href: "#",
      },
    };

    // Add the new project to the beginning of the array
    const updatedProjects = [newProject, ...resumeData.projects];

    console.log("Adding new project:", newProject);
    console.log("Updated projects array length:", updatedProjects.length);

    // Wait for the update to complete
    await updateField(["projects"], updatedProjects);

    console.log("Project added successfully");
  };

  return (
    <Section className="scroll-mb-16 print:space-y-4 print:pt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" id="side-projects">
          Side projects
        </h2>
        {isEditMode && (
          <button
            onClick={async (e) => {
              e.preventDefault();
              await handleAddProject();
            }}
            className="rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground hover:bg-primary/90"
          >
            Add Project +
          </button>
        )}
      </div>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article
            key={`${project.title}-${lastUpdated || Date.now()}`}
            className="h-full"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={
                "link" in project &&
                project.link &&
                typeof project.link === "object" &&
                project.link.href
                  ? project.link.href
                  : undefined
              }
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
