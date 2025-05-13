"use client";

import { useEffect } from "react";
import { WorkExperience } from "./WorkExperience";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Summary } from "./Summary";
import { Header } from "./Header";
import { RESUME_DATA } from "@/data/resume-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EditModeProvider, useEditMode } from "@/context/edit-mode-context";
import { EditModeSwitch } from "@/components/ui/edit-mode-switch";
import { ResumeProvider, useResume } from "@/context/resume-context";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { CommandMenu } from "@/components/command-menu";

interface EmbeddedResumeProps {
  resumeId: string;
}

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
    ...resumeData.contact.social
      .filter((socialMediaLink) => socialMediaLink.url)
      .map((socialMediaLink) => ({
        url: socialMediaLink.url,
        title: socialMediaLink.name,
      })),
  ];
}

function EmbeddedResumeContent({ resumeId }: EmbeddedResumeProps) {
  const { isEditMode } = useEditMode();
  const { resumeData, loading, error, lastUpdated } = useResume();

  // This effect will run whenever lastUpdated changes, forcing a re-render
  useEffect(() => {
    console.log(
      "Resume data updated at:",
      new Date(lastUpdated || Date.now()).toLocaleTimeString(),
    );
  }, [lastUpdated]);

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

  return (
    <div className="relative">
      <Card className="print:border-0 print:shadow-none">
        <CardHeader className="flex flex-row items-center justify-between print:hidden">
          <CardTitle>Resume</CardTitle>
          <div className="flex items-center gap-2">
            <EditModeSwitch />
          </div>
        </CardHeader>
        <CardContent className="print:p-0">
          <section
            className={`mx-auto w-full max-w-2xl space-y-6 bg-white ${
              isEditMode ? "edit-mode" : "view-mode"
            }`}
          >
            <Header />

            <div className="space-y-6">
              <Summary summary={resumeData.summary} />
              <WorkExperience
                key={`work-section-${lastUpdated || Date.now()}`}
                work={resumeData.work}
              />
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
        </CardContent>
      </Card>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks(resumeData)} />
      </nav>
    </div>
  );
}

export function EmbeddedResume({ resumeId }: EmbeddedResumeProps) {
  return (
    <EditModeProvider>
      <ResumeProvider resumeId={resumeId}>
        <EmbeddedResumeContent resumeId={resumeId} />
      </ResumeProvider>
    </EditModeProvider>
  );
}
