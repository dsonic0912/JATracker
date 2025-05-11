"use client";

import { useState, useEffect } from "react";
import { WorkExperience } from "@/app/components/WorkExperience";
import { Projects } from "@/app/components/Projects";
import { Education } from "@/app/components/Education";
import { ResumeSummary } from "./ResumeSummary";
import { Header as ResumeHeader } from "@/app/components/Header";
import { RESUME_DATA } from "@/data/resume-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { EditModeProvider, useEditMode } from "@/context/edit-mode-context";
import { ResumeEditModeSwitch } from "./ResumeEditModeSwitch";
import { Button } from "@/components/ui/button";
import { ResumeContextProvider } from "./ResumeContext";

// Function to transform database resume to match the expected format
const transformDatabaseResume = (dbResume: any): typeof RESUME_DATA => {
  if (!dbResume) return JSON.parse(JSON.stringify(RESUME_DATA));

  // Add icon components to social entries
  const socialWithIcons =
    dbResume.contact?.social.map((social: any) => ({
      ...social,
      icon: null, // We don't need icons in this view
    })) || [];

  // Transform work entries
  const workWithComponents = dbResume.work.map((work: any) => {
    return {
      ...work,
      badges: work.badges.map((badge: any) => badge.name),
      description: work.description,
      logo: null,
      tasks: work.tasks
        ? work.tasks.map((task: any) => ({
            id: task.id,
            description: task.description,
          }))
        : [],
    };
  });

  // Transform projects
  const projectsWithComponents = dbResume.projects.map((project: any) => ({
    ...project,
    techStack: project.techStack.map((tech: any) => tech.name),
    logo: null,
  }));

  return {
    name: dbResume.name,
    initials: dbResume.initials || "",
    location: dbResume.location || "",
    locationLink: dbResume.locationLink || "",
    about: dbResume.about || "",
    summary: dbResume.summary || "",
    avatarUrl: dbResume.avatarUrl || "",
    personalWebsiteUrl: dbResume.personalWebsiteUrl || "",
    contact: {
      email: dbResume.contact?.email || "",
      tel: dbResume.contact?.tel || "",
      social: socialWithIcons,
    },
    education: dbResume.education || [],
    work: workWithComponents,
    skills: dbResume.skills.map((skill: any) => skill.name),
    projects: projectsWithComponents,
  };
};

interface ResumeContentProps {
  resumeId: string;
}

// Inner component that uses the edit mode context
function ResumeContentInner({ resumeId }: ResumeContentProps) {
  const [resumeData, setResumeData] = useState<typeof RESUME_DATA | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isEditMode } = useEditMode();
  const [resumeIdState, setResumeIdState] = useState<string | null>(null);

  // Function to update a field at a specific path
  const updateField = async (path: string[], value: any) => {
    if (!resumeIdState) {
      setError("No resume ID available");
      return;
    }

    try {
      // Update local state first for immediate UI feedback
      setResumeData((prevData: typeof RESUME_DATA | null) => {
        if (!prevData) return null;

        // Create a deep copy of the previous data
        const newData = JSON.parse(JSON.stringify(prevData));

        // Navigate to the nested property
        let current = newData;
        for (let i = 0; i < path.length - 1; i++) {
          current = current[path[i]];
        }

        // Update the value
        current[path[path.length - 1]] = value;

        return newData;
      });

      // Send update to the server
      const response = await fetch(`/api/resume/${resumeIdState}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path, value }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to update resume");
      }

      // Update with the server response to ensure consistency
      if (result.data) {
        const transformedData = transformDatabaseResume(result.data);
        setResumeData(transformedData);
      }
    } catch (err) {
      console.error("Error updating resume:", err);
      setError((err as Error).message);

      // Revert to the server state if there was an error
      const response = await fetch(`/api/resume/${resumeIdState}`);
      const result = await response.json();

      if (result.data) {
        const transformedData = transformDatabaseResume(result.data);
        setResumeData(transformedData);
      }
    }
  };

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/resume/${resumeId}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to fetch resume");
        }

        if (result.data) {
          const transformedData = transformDatabaseResume(result.data);
          setResumeData(transformedData);
          setResumeIdState(result.data.id);
        }
      } catch (err) {
        console.error("Error fetching resume data:", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (resumeId) {
      fetchResumeData();
    }
  }, [resumeId]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
              <p>Loading resume...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
            <p className="text-red-600">Error loading resume: {error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!resumeData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border p-4 text-center">
            <p className="text-muted-foreground">Resume not found</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Resume</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">
            {isEditMode ? "Edit Mode" : "View Mode"}
          </span>
          <ResumeEditModeSwitch />
        </div>
      </CardHeader>
      <CardContent>
        <ResumeContextProvider
          resumeData={resumeData}
          updateField={updateField}
          resumeId={resumeIdState}
        >
          <div className="mx-auto w-full max-w-2xl space-y-6 bg-white">
            <ResumeHeader />

            <div className="space-y-6">
              <ResumeSummary summary={resumeData.summary} />
              <WorkExperience work={resumeData.work} />
              <Projects projects={resumeData.projects} />
              <Education education={resumeData.education} />
            </div>
          </div>
        </ResumeContextProvider>
      </CardContent>
    </Card>
  );
}

// Wrapper component that provides the EditModeProvider context
export function ResumeContent({ resumeId }: ResumeContentProps) {
  return (
    <EditModeProvider>
      <ResumeContentInner resumeId={resumeId} />
    </EditModeProvider>
  );
}
