"use client";

import { useEffect, useState } from "react";
import React from "react";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "../components/WorkExperience";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Summary } from "../components/Summary";
import { Header as ResumeHeader } from "../components/Header";
import { EditModeProvider, useEditMode } from "@/context/edit-mode-context";
import { ResumeProvider, useResume } from "@/context/resume-context";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

// Map social network names to icon components
const socialIconMap: Record<string, any> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
};

// Transform database resume to match the expected format
const transformDatabaseResume = (dbResume: any): typeof RESUME_DATA => {
  if (!dbResume) return RESUME_DATA;

  // Add icon components to social entries
  const socialWithIcons =
    dbResume.contact?.social.map((social: any) => ({
      ...social,
      icon: socialIconMap[social.name] || null,
    })) || [];

  // Transform work entries to include React components for descriptions
  const workWithComponents = dbResume.work.map((work: any) => {
    // Try to parse the description as JSON if it might be a serialized React element
    let description = work.description;

    // Check if the description might be a serialized JSX element
    if (description && description.includes('{"type":"')) {
      try {
        // Try to parse it as JSON
        const parsedDescription = JSON.parse(description);

        // If it has a type property, it might be a React element
        if (parsedDescription && parsedDescription.type) {
          // Convert it back to a React element
          description = React.createElement(
            React.Fragment,
            null,
            parsedDescription.props?.children || "",
          );
        }
      } catch (e) {
        // If parsing fails, keep the original description
        console.log("Failed to parse description:", e);
      }
    }

    return {
      ...work,
      badges: work.badges.map((badge: any) => badge.name),
      description: description,
      logo: null, // We don't store logos in the database
      tasks: work.tasks
        ? work.tasks.map((task: any) => ({
            id: task.id,
            description: task.description,
          }))
        : [], // Include tasks from the database and ensure they have the right format
    };
  });

  // Transform projects to match the expected format
  const projectsWithComponents = dbResume.projects.map((project: any) => ({
    ...project,
    techStack: project.techStack.map((tech: any) => tech.name),
    logo: null, // We don't store logos in the database
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

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks(resumeData: typeof RESUME_DATA) {
  const links = [];

  if (resumeData.personalWebsiteUrl) {
    links.push({
      url: resumeData.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...resumeData.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

// Main wrapper component that provides the context
export default function ResumePage() {
  // Get the resume ID from the URL
  const [resumeId, setResumeId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      setResumeId(id);
    } else {
      console.error("No resume ID found in URL");
    }
  }, []);

  if (!resumeId) {
    return (
      <DashboardLayout title="Resume">
        <div className="container flex h-screen items-center justify-center">
          <div className="max-w-md rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold text-red-700">
              Error Loading Resume
            </h2>
            <p className="mb-4 text-red-600">No resume ID found in URL</p>
            <Link href="/resumes">
              <Button>Go to Resumes</Button>
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <EditModeProvider>
      <ResumeProvider resumeId={resumeId}>
        <ResumePageContent />
      </ResumeProvider>
    </EditModeProvider>
  );
}

// Inner component that uses the context
function ResumePageContent() {
  const { isEditMode } = useEditMode();
  const { resumeData, loading, error, lastUpdated } = useResume();

  // Log when the resume data is updated
  useEffect(() => {
    console.log(
      "Resume page data updated at:",
      new Date(lastUpdated || Date.now()).toLocaleTimeString(),
    );
  }, [lastUpdated]);

  if (loading) {
    return (
      <DashboardLayout title="Resume">
        <div className="container flex h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
            <p className="text-lg">Loading resume data...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Resume">
        <div className="container flex h-screen items-center justify-center">
          <div className="max-w-md rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold text-red-700">
              Error Loading Resume
            </h2>
            <p className="mb-4 text-red-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Resume">
      <div
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-11"
        id="main-content"
      >
        <div className="mb-6 print:hidden">
          <Button variant="outline" size="sm" asChild>
            <Link href="/resumes">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Resumes
            </Link>
          </Button>
        </div>

        <div className="sr-only">
          <h1>{resumeData.name}&apos;s Resume</h1>
        </div>

        <section
          className={`mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4 ${
            isEditMode ? "edit-mode" : "view-mode"
          }`}
          aria-label="Resume Content"
        >
          <ResumeHeader />

          <div className="space-y-8 print:space-y-4">
            <Summary summary={resumeData.summary} />

            <WorkExperience
              key={`work-section-${lastUpdated || Date.now()}`}
              work={resumeData.work}
            />

            {/* <Skills /> */}

            <Projects
              key={`projects-section-${lastUpdated || Date.now()}`}
              projects={resumeData.projects}
            />

            <Education
              key={`education-section-${lastUpdated || Date.now()}`}
              education={resumeData.education}
            />
          </div>
        </section>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu links={getCommandMenuLinks(resumeData)} />
        </nav>
      </div>
    </DashboardLayout>
  );
}
