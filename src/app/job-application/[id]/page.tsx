"use client";

import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeftIcon,
  FileTextIcon,
  CalendarIcon,
  BuildingIcon,
  PencilIcon,
  Trash2Icon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { EmbeddedResume } from "@/app/components/EmbeddedResume";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Resume {
  id: string;
  title: string;
}

interface JobApplication {
  id: string;
  company: string;
  position: string;
  status: string;
  resumeId: string;
  appliedDate: string;
  jobDescription?: string;
  jobUrl?: string;
  resume: {
    id: string;
    title: string;
  };
}

export default function JobApplicationDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();

  const [jobApplication, setJobApplication] = useState<JobApplication | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  // Edit dialog state
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedJobApplication, setEditedJobApplication] = useState<{
    company: string;
    position: string;
    status: string;
    appliedDate: string;
    jobUrl: string;
    jobDescription: string;
    resumeId: string;
  } | null>(null);

  // Delete dialog state
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // AI refinement state
  const [isRefiningResume, setIsRefiningResume] = useState(false);
  const [refinedResume, setRefinedResume] = useState<any>(null);
  const [originalResume, setOriginalResume] = useState<any>(null);
  const [isRefinementModalOpen, setIsRefinementModalOpen] = useState(false);
  const [refinementError, setRefinementError] = useState<string | null>(null);
  const [refinementWarning, setRefinementWarning] = useState<string | null>(
    null,
  );
  const [remainingAICalls, setRemainingAICalls] = useState<number | null>(null);
  const [isCheckingAILimit, setIsCheckingAILimit] = useState(false);

  // Fetch resumes for the dropdown
  const fetchResumes = async () => {
    try {
      setLoadingResumes(true);
      const response = await fetch("/api/resumes");
      const result = await response.json();

      if (result.data) {
        setResumes(result.data);
      }
    } catch (err) {
      console.error("Error fetching resumes:", err);
      setError((err as Error).message);
    } finally {
      setLoadingResumes(false);
    }
  };

  // Open edit dialog and initialize form with current values
  const openEditDialog = async () => {
    if (jobApplication) {
      // Fetch resumes for the dropdown
      await fetchResumes();

      setEditedJobApplication({
        company: jobApplication.company,
        position: jobApplication.position,
        status: jobApplication.status,
        appliedDate: new Date(jobApplication.appliedDate)
          .toISOString()
          .split("T")[0],
        jobUrl: jobApplication.jobUrl || "",
        jobDescription: jobApplication.jobDescription || "",
        resumeId: jobApplication.resumeId,
      });
      setIsEditDialogOpen(true);
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setEditedJobApplication((prev) =>
      prev ? { ...prev, [name]: value } : null,
    );
  };

  // Handle status change from select component
  const handleStatusChange = (value: string) => {
    setEditedJobApplication((prev) =>
      prev ? { ...prev, status: value } : null,
    );
  };

  // Handle resume change from select component
  const handleResumeChange = (value: string) => {
    setEditedJobApplication((prev) =>
      prev ? { ...prev, resumeId: value } : null,
    );
  };

  // Update job application
  const handleUpdateJobApplication = async () => {
    if (!editedJobApplication) return;

    try {
      const response = await fetch(`/api/job-applications/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedJobApplication),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to update job application");
      }

      const result = await response.json();

      // Update local state with the updated job application
      setJobApplication(result.data);
      setIsEditDialogOpen(false);
    } catch (err) {
      console.error("Error updating job application:", err);
      setError((err as Error).message);
    }
  };

  // Delete job application
  const handleDeleteJobApplication = async () => {
    try {
      const response = await fetch(`/api/job-applications/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to delete job application");
      }

      // Redirect to job applications page after successful deletion
      router.push("/job-applications");
    } catch (err) {
      console.error("Error deleting job application:", err);
      setError((err as Error).message);
    }
  };

  // Fetch the user's AI calls limit
  const fetchAICallsLimit = async () => {
    try {
      setIsCheckingAILimit(true);
      const response = await fetch("/api/user/ai-calls-limit");
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to fetch AI calls limit");
      }

      setRemainingAICalls(result.data.aiCallsLimit);
      return result.data.aiCallsLimit;
    } catch (err) {
      console.error("Error fetching AI calls limit:", err);
      return null;
    } finally {
      setIsCheckingAILimit(false);
    }
  };

  // Refine resume with AI
  const handleRefineResumeWithAI = async () => {
    if (!jobApplication) return;

    try {
      setIsRefiningResume(true);
      setRefinementError(null);
      setRefinementWarning(null);

      // Check the AI calls limit first
      const aiCallsLimit = await fetchAICallsLimit();

      // If the limit is 0, show an error message and don't proceed
      if (aiCallsLimit !== null && aiCallsLimit <= 0) {
        setRefinementError(
          "Sorry, you've reached the daily limit for Resume Refinement. All limits and data will reset daily at 12:00 AM UTC. Please try again later.",
        );
        setIsRefinementModalOpen(true);
        return;
      }

      const response = await fetch("/api/resume/refine-with-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resumeId: jobApplication.resumeId,
          jobDescription: jobApplication.jobDescription,
          jobUrl: jobApplication.jobUrl,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to refine resume with AI");
      }

      setRefinedResume(result.data);
      setOriginalResume(result.originalResume);
      setRemainingAICalls(result.remainingCalls);

      // Check if there's a warning message
      if (result.warning) {
        setRefinementWarning(result.warning);
      }

      setIsRefinementModalOpen(true);
    } catch (err) {
      console.error("Error refining resume with AI:", err);
      setRefinementError((err as Error).message);
      setIsRefinementModalOpen(true);
    } finally {
      setIsRefiningResume(false);
    }
  };

  // Apply AI refinements to the resume
  const handleApplyRefinements = async () => {
    if (!refinedResume || !jobApplication) return;

    try {
      // Normalize the refined resume data to ensure it's in the expected format
      const normalizedResume = { ...refinedResume };

      // Normalize skills
      if (normalizedResume.skills && Array.isArray(normalizedResume.skills)) {
        normalizedResume.skills = normalizedResume.skills.map((skill: any) => {
          if (typeof skill === "string") return { name: skill };
          if (typeof skill === "object") {
            if (typeof skill.name === "string") return { name: skill.name };
            if (
              typeof skill.name === "object" &&
              skill.name &&
              typeof skill.name.name === "string"
            ) {
              return { name: skill.name.name };
            }
            // Try to extract name from any property that might contain it
            for (const key in skill) {
              if (
                typeof skill[key] === "string" &&
                key !== "id" &&
                key !== "resumeId" &&
                key !== "createdAt" &&
                key !== "updatedAt"
              ) {
                return { name: skill[key] };
              }
            }
          }
          return { name: String(skill || "") };
        });
      }

      // Normalize work experience
      if (normalizedResume.work && Array.isArray(normalizedResume.work)) {
        normalizedResume.work = normalizedResume.work.map((work: any) => {
          const normalizedWork = { ...work };

          // Normalize badges
          if (normalizedWork.badges && Array.isArray(normalizedWork.badges)) {
            normalizedWork.badges = normalizedWork.badges.map((badge: any) => {
              if (typeof badge === "string") return { name: badge };
              if (typeof badge === "object") {
                if (typeof badge.name === "string") return { name: badge.name };
                if (
                  typeof badge.name === "object" &&
                  badge.name &&
                  typeof badge.name.name === "string"
                ) {
                  return { name: badge.name.name };
                }
              }
              return { name: String(badge || "") };
            });
          }

          // Normalize tasks
          if (normalizedWork.tasks && Array.isArray(normalizedWork.tasks)) {
            normalizedWork.tasks = normalizedWork.tasks.map((task: any) => {
              if (typeof task === "string") return { description: task };
              if (
                typeof task === "object" &&
                typeof task.description === "string"
              ) {
                return { description: task.description };
              }
              return { description: String(task || "") };
            });
          }

          return normalizedWork;
        });
      }

      // Normalize projects
      if (
        normalizedResume.projects &&
        Array.isArray(normalizedResume.projects)
      ) {
        normalizedResume.projects = normalizedResume.projects.map(
          (project: any) => {
            const normalizedProject = { ...project };

            // Normalize techStack
            if (
              normalizedProject.techStack &&
              Array.isArray(normalizedProject.techStack)
            ) {
              normalizedProject.techStack = normalizedProject.techStack.map(
                (tech: any) => {
                  if (typeof tech === "string") return { name: tech };
                  if (typeof tech === "object") {
                    if (typeof tech.name === "string")
                      return { name: tech.name };
                    if (
                      typeof tech.name === "object" &&
                      tech.name &&
                      typeof tech.name.name === "string"
                    ) {
                      return { name: tech.name.name };
                    }
                  }
                  return { name: String(tech || "") };
                },
              );
            }

            // Normalize project link
            if (normalizedProject.link) {
              // Ensure link has valid label and href
              if (
                !normalizedProject.link.label &&
                !normalizedProject.link.href
              ) {
                // If both label and href are missing or invalid, remove the link
                normalizedProject.link = undefined;
              } else {
                // Ensure label and href have default values if missing
                normalizedProject.link = {
                  label: normalizedProject.link.label || "Project Link",
                  href: normalizedProject.link.href || "#",
                };
              }
            }

            return normalizedProject;
          },
        );
      }

      // Fetch the current resume data to ensure we're only updating what's needed
      const originalResumeResponse = await fetch(
        `/api/resume/${jobApplication.resumeId}`,
      );
      await originalResumeResponse.json(); // We don't actually need the data, just ensuring the fetch completes

      // Create a new object with only the fields that need to be updated
      const updatePayload: any = {};

      // Only include fields that are present in the refined resume
      if (normalizedResume.summary !== undefined)
        updatePayload.summary = normalizedResume.summary;
      if (normalizedResume.skills !== undefined)
        updatePayload.skills = normalizedResume.skills;
      if (normalizedResume.work !== undefined)
        updatePayload.work = normalizedResume.work;
      if (normalizedResume.projects !== undefined)
        updatePayload.projects = normalizedResume.projects;

      // Use the new API endpoint specifically for AI refinements
      // This creates a new resume with the refinements and updates the job application
      const response = await fetch(
        `/api/resume/${jobApplication.resumeId}/apply-ai-refinements`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refinements: updatePayload,
            jobApplicationId: jobApplication.id,
          }),
        },
      );

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to apply refinements");
      }

      // Close the modal and reset state
      setIsRefinementModalOpen(false);
      setRefinedResume(null);
      setOriginalResume(null);

      // Refresh the page to show updated resume
      window.location.reload();
    } catch (err) {
      console.error("Error applying refinements:", err);
      setRefinementError((err as Error).message);
    }
  };

  useEffect(() => {
    const fetchJobApplication = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/job-applications/${id}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to fetch job application");
        }

        if (result.data) {
          setJobApplication(result.data);
        }
      } catch (err) {
        console.error("Error fetching job application:", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJobApplication();
      // Also fetch the AI calls limit when the page loads
      fetchAICallsLimit();
    }
  }, [id]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "applied":
        return "bg-blue-100 text-blue-800";
      case "interview":
        return "bg-purple-100 text-purple-800";
      case "offer":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <DashboardLayout title="Job Application">
        <div className="container flex h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
            <p className="text-lg">Loading job application data...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Job Application">
        <div className="container flex h-screen items-center justify-center">
          <div className="max-w-md rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold text-red-700">
              Error Loading Data
            </h2>
            <p className="mb-4 text-red-600">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              variant="destructive"
            >
              Try Again
            </Button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!jobApplication) {
    return (
      <DashboardLayout title="Job Application">
        <div className="container flex h-screen items-center justify-center">
          <div className="max-w-md rounded-lg border p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold">
              Job Application Not Found
            </h2>
            <p className="mb-4 text-muted-foreground">
              The job application you&apos;re looking for doesn&apos;t exist or
              has been deleted.
            </p>
            <Button asChild>
              <Link href="/job-applications">Back to Job Applications</Link>
            </Button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Job Application">
      <div className="container mx-auto p-6">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Button variant="outline" size="sm" asChild>
            <Link href="/job-applications">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Job Applications
            </Link>
          </Button>

          <div className="flex gap-2">
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefineResumeWithAI}
                disabled={isRefiningResume}
              >
                <SparklesIcon className="mr-2 h-4 w-4" />
                {isRefiningResume ? "Refining..." : "Refine resume with AI"}
              </Button>
              {remainingAICalls !== null && remainingAICalls > 0 && (
                <div className="absolute -bottom-6 left-0 text-xs text-muted-foreground">
                  {remainingAICalls} refinements left
                </div>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => openEditDialog()}
            >
              <PencilIcon className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setIsDeleteDialogOpen(true)}
            >
              <Trash2Icon className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        <div className="mb-6 print:hidden">
          <h1 className="text-2xl font-bold">
            {jobApplication.position} at {jobApplication.company}
          </h1>
          <div className="mt-2">
            <span
              className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                jobApplication.status,
              )}`}
            >
              {jobApplication.status}
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 print:hidden">
          <Card>
            <CardHeader>
              <CardTitle>Application Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <BuildingIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Company: {jobApplication.company}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>
                  Applied:{" "}
                  {new Date(jobApplication.appliedDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center">
                <FileTextIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Resume: {jobApplication.resume.title}</span>
              </div>
              {jobApplication.jobUrl && (
                <div>
                  <h3 className="mb-1 text-sm font-medium">Job URL</h3>
                  <a
                    href={jobApplication.jobUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {jobApplication.jobUrl}
                  </a>
                </div>
              )}
            </CardContent>
          </Card>

          {jobApplication.jobDescription && (
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">
                  {jobApplication.jobDescription}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-6">
          <EmbeddedResume resumeId={jobApplication.resumeId} />
        </div>
      </div>

      {/* Edit Job Application Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Job Application</DialogTitle>
            <DialogDescription>
              Update the details of your job application.
            </DialogDescription>
          </DialogHeader>

          {editedJobApplication && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="company"
                  className="text-right text-sm font-medium"
                >
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={editedJobApplication.company}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="position"
                  className="text-right text-sm font-medium"
                >
                  Position
                </label>
                <Input
                  id="position"
                  name="position"
                  value={editedJobApplication.position}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="status"
                  className="text-right text-sm font-medium"
                >
                  Status
                </label>
                <Select
                  value={editedJobApplication.status}
                  onValueChange={handleStatusChange}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Applied">Applied</SelectItem>
                    <SelectItem value="Interview">Interview</SelectItem>
                    <SelectItem value="Offer">Offer</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="appliedDate"
                  className="text-right text-sm font-medium"
                >
                  Applied Date
                </label>
                <Input
                  id="appliedDate"
                  name="appliedDate"
                  type="date"
                  value={editedJobApplication.appliedDate}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="jobUrl"
                  className="text-right text-sm font-medium"
                >
                  Job URL
                </label>
                <Input
                  id="jobUrl"
                  name="jobUrl"
                  value={editedJobApplication.jobUrl}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="resumeId"
                  className="text-right text-sm font-medium"
                >
                  Resume
                </label>
                <div className="col-span-3">
                  <Select
                    value={editedJobApplication.resumeId}
                    onValueChange={handleResumeChange}
                    disabled={loadingResumes || resumes.length === 0}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a resume" />
                    </SelectTrigger>
                    <SelectContent>
                      {resumes.map((resume) => (
                        <SelectItem key={resume.id} value={resume.id}>
                          {resume.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {resumes.length === 0 && !loadingResumes && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      No resumes available. Please create a resume first.
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="jobDescription"
                  className="text-right text-sm font-medium"
                >
                  Job Description
                </label>
                <Textarea
                  id="jobDescription"
                  name="jobDescription"
                  value={editedJobApplication.jobDescription}
                  onChange={handleInputChange}
                  className="col-span-3 min-h-[100px]"
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleUpdateJobApplication}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Job Application</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this job application? This action
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
            <Button variant="destructive" onClick={handleDeleteJobApplication}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* AI Resume Refinement Modal */}
      <Dialog
        open={isRefinementModalOpen}
        onOpenChange={setIsRefinementModalOpen}
      >
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>AI Resume Refinement</DialogTitle>
            <DialogDescription>
              {refinementError ? (
                <div className="mt-2 rounded-md bg-red-50 p-4 text-red-700">
                  {refinementError}
                </div>
              ) : refinementWarning ? (
                <>
                  <div className="mt-2 rounded-md bg-yellow-50 p-4 text-yellow-700">
                    {refinementWarning}
                  </div>
                  {remainingAICalls !== null && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      You have {remainingAICalls} AI refinements remaining
                      today.
                    </div>
                  )}
                </>
              ) : (
                <>
                  The AI has refined your resume to better match this job
                  application.
                  {remainingAICalls !== null && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      You have {remainingAICalls} AI refinements remaining
                      today.
                    </div>
                  )}
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {refinedResume && !refinementError && (
            <div className="max-h-[500px] overflow-y-auto">
              <div className="space-y-4">
                <div className="rounded-md bg-muted p-4">
                  <h3 className="mb-2 font-medium">Summary</h3>
                  <p>{refinedResume.summary}</p>
                </div>

                {refinedResume.skills && refinedResume.skills.length > 0 && (
                  <div className="rounded-md bg-muted p-4">
                    <h3 className="mb-2 font-medium">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {refinedResume.skills.map((skill: any, index: number) => (
                        <span
                          key={index}
                          className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {typeof skill === "string"
                            ? skill
                            : typeof skill === "object" && skill.name
                              ? typeof skill.name === "string"
                                ? skill.name
                                : typeof skill.name === "object" &&
                                    skill.name &&
                                    skill.name.name
                                  ? skill.name.name
                                  : String(skill.name || "")
                              : String(skill || "")}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {refinedResume.work && refinedResume.work.length > 0 && (
                  <div className="rounded-md bg-muted p-4">
                    <h3 className="mb-2 font-medium">Work Experience</h3>
                    <div className="space-y-3">
                      {refinedResume.work
                        .slice(0, 2)
                        .map((work: any, index: number) => (
                          <div
                            key={index}
                            className="border-b border-border pb-2 last:border-0"
                          >
                            <div className="font-medium">
                              {work.title} at {work.company}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {work.start} - {work.end || "Present"}
                            </div>
                            {work.tasks && work.tasks.length > 0 && (
                              <ul className="mt-1 list-inside list-disc text-sm">
                                {work.tasks
                                  .slice(0, 2)
                                  .map((task: any, taskIndex: number) => (
                                    <li key={taskIndex}>
                                      {typeof task === "string"
                                        ? task
                                        : typeof task === "object" &&
                                            task.description
                                          ? task.description
                                          : String(task || "")}
                                    </li>
                                  ))}
                                {work.tasks.length > 2 && (
                                  <li>
                                    ... and {work.tasks.length - 2} more tasks
                                  </li>
                                )}
                              </ul>
                            )}
                          </div>
                        ))}
                      {refinedResume.work.length > 2 && (
                        <div className="text-sm text-muted-foreground">
                          ... and {refinedResume.work.length - 2} more work
                          experiences
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRefinementModalOpen(false)}
            >
              {refinementError ? "Close" : "Cancel"}
            </Button>
            {!refinementError && (
              <Button
                onClick={handleApplyRefinements}
                disabled={!refinedResume}
              >
                Apply Refinements
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
