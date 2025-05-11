"use client";

import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileTextIcon,
  PlusIcon,
  Trash2Icon,
  BriefcaseIcon,
  CalendarIcon,
  BuildingIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

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

export default function JobApplicationsPage() {
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [applicationToDelete, setApplicationToDelete] = useState<string | null>(
    null,
  );
  const router = useRouter();

  const fetchJobApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/job-applications");
      const result = await response.json();

      if (result.data) {
        setJobApplications(result.data);
      } else if (result.error) {
        throw new Error(result.error);
      }
    } catch (err) {
      console.error("Error fetching job applications:", err);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobApplications();
  }, []);

  const handleCreateJobApplication = async () => {
    try {
      setCreating(true);
      router.push("/job-application/new");
    } catch (err) {
      console.error("Error creating job application:", err);
      setError((err as Error).message);
      setCreating(false);
    }
  };

  const openDeleteDialog = (applicationId: string) => {
    setApplicationToDelete(applicationId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteJobApplication = async () => {
    if (!applicationToDelete) return;

    try {
      const response = await fetch(
        `/api/job-applications/${applicationToDelete}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to delete job application");
      }

      // Update the local state after successful deletion
      setJobApplications(
        jobApplications.filter((app) => app.id !== applicationToDelete),
      );
      setDeleteDialogOpen(false);
      setApplicationToDelete(null);
    } catch (err) {
      console.error("Error deleting job application:", err);
      setError((err as Error).message);
    }
  };

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

  return (
    <DashboardLayout title="Job Applications">
      <div className="container mx-auto p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Job Applications</h1>
          <Button onClick={handleCreateJobApplication} disabled={creating}>
            <PlusIcon className="mr-2 h-4 w-4" />
            {creating ? "Creating..." : "Add Job Application"}
          </Button>
        </div>

        {jobApplications.length === 0 ? (
          <div className="rounded-lg border border-dashed p-8 text-center">
            <BriefcaseIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h2 className="mb-2 text-xl font-semibold">
              No Job Applications Found
            </h2>
            <p className="mb-4 text-muted-foreground">
              You haven&apos;t created any job applications yet. Add your first
              job application to get started.
            </p>
            <Button onClick={handleCreateJobApplication} disabled={creating}>
              <PlusIcon className="mr-2 h-4 w-4" />
              {creating ? "Creating..." : "Add Job Application"}
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobApplications.map((application) => (
              <Card
                key={application.id}
                className="transition-shadow hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle className="text-lg">
                      {application.company}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {application.position}
                    </p>
                  </div>
                  <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="mb-2 flex items-center">
                    <BuildingIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      Resume: {application.resume.title}
                    </span>
                  </div>
                  <div className="mb-2 flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      Applied:{" "}
                      {new Date(application.appliedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                        application.status,
                      )}`}
                    >
                      {application.status}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => openDeleteDialog(application.id)}
                  >
                    <Trash2Icon className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/job-application/${application.id}`}>
                      <FileTextIcon className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
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
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteJobApplication}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
