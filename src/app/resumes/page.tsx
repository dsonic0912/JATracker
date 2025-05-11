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
  EyeIcon,
  PlusIcon,
  Trash2Icon,
  PencilIcon,
  CheckIcon,
  XIcon,
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
import { Input } from "@/components/ui/input";

interface Resume {
  id: string;
  name: string;
  title: string;
  updatedAt: string;
}

export default function ResumesPage() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [resumeToDelete, setResumeToDelete] = useState<string | null>(null);
  const [editingTitleId, setEditingTitleId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState<string>("");
  const router = useRouter();

  const fetchResumes = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/resumes");
      const result = await response.json();

      if (result.data) {
        setResumes(result.data);
      }
    } catch (err) {
      console.error("Error fetching resumes:", err);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleCreateResume = () => {
    // Open the create dialog
    setNewResumeTitle("");
    setCreateDialogOpen(true);
  };

  const createResumeWithTitle = async () => {
    if (!newResumeTitle.trim()) {
      return; // Don't create a resume with an empty title
    }

    try {
      setCreating(true);
      setCreateDialogOpen(false);

      const response = await fetch("/api/resume/create-with-title", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newResumeTitle.trim() }),
      });

      const result = await response.json();

      if (result.data) {
        // Navigate to the new resume
        router.push(`/resume?id=${result.data.id}`);
      } else {
        throw new Error(result.error || "Failed to create resume");
      }
    } catch (err) {
      console.error("Error creating resume:", err);
      setError((err as Error).message);
      setCreating(false);
    }
  };

  const openDeleteDialog = (resumeId: string) => {
    setResumeToDelete(resumeId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteResume = async () => {
    if (!resumeToDelete) return;

    try {
      setDeleting(true);
      const response = await fetch(`/api/resume/${resumeToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to delete resume");
      }

      // Close the dialog and refresh the resumes list
      setDeleteDialogOpen(false);
      setResumeToDelete(null);

      // Remove the deleted resume from the state
      setResumes(resumes.filter((resume) => resume.id !== resumeToDelete));
    } catch (err) {
      console.error("Error deleting resume:", err);
      setError((err as Error).message);
    } finally {
      setDeleting(false);
    }
  };

  const startEditingTitle = (resumeId: string, currentTitle: string) => {
    setEditingTitleId(resumeId);
    setEditedTitle(currentTitle);
  };

  const cancelEditingTitle = () => {
    setEditingTitleId(null);
    setEditedTitle("");
  };

  const saveTitle = async (resumeId: string) => {
    if (!editedTitle.trim()) {
      return cancelEditingTitle();
    }

    try {
      setUpdating(true);
      const response = await fetch(`/api/resume/${resumeId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: ["title"],
          value: editedTitle.trim(),
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to update resume title");
      }

      // Update the resume in the local state
      setResumes(
        resumes.map((resume) =>
          resume.id === resumeId
            ? { ...resume, title: editedTitle.trim() }
            : resume,
        ),
      );

      // Reset editing state
      cancelEditingTitle();
    } catch (err) {
      console.error("Error updating resume title:", err);
      setError((err as Error).message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout title="Resumes">
        <div className="container flex h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
            <p className="text-lg">Loading resumes...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Resumes">
        <div className="container mx-auto p-6">
          <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive">
            <h2 className="mb-2 text-lg font-semibold">Error</h2>
            <p>{error}</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Resumes">
      <div className="container mx-auto p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Resumes</h1>
          <Button onClick={handleCreateResume} disabled={creating}>
            <PlusIcon className="mr-2 h-4 w-4" />
            {creating ? "Creating..." : "Create New Resume"}
          </Button>
        </div>

        {resumes.length === 0 ? (
          <div className="rounded-lg border border-dashed p-8 text-center">
            <FileTextIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h2 className="mb-2 text-xl font-semibold">No Resumes Found</h2>
            <p className="mb-4 text-muted-foreground">
              You haven&apos;t created any resumes yet. Create your first resume
              to get started.
            </p>
            <Button onClick={handleCreateResume} disabled={creating}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Create Resume
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resumes.map((resume) => (
              <Card
                key={resume.id}
                className="transition-shadow hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Resume</CardTitle>
                  <FileTextIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  {editingTitleId === resume.id ? (
                    <div className="flex items-center gap-2">
                      <Input
                        value={editedTitle}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEditedTitle(e.target.value)
                        }
                        className="h-8 text-lg font-bold"
                        onKeyDown={(
                          e: React.KeyboardEvent<HTMLInputElement>,
                        ) => {
                          if (e.key === "Enter") {
                            saveTitle(resume.id);
                          } else if (e.key === "Escape") {
                            cancelEditingTitle();
                          }
                        }}
                        autoFocus
                      />
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => saveTitle(resume.id)}
                        >
                          <CheckIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={cancelEditingTitle}
                        >
                          <XIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="group relative">
                      <h3 className="text-lg font-bold">{resume.title}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -right-2 -top-2 h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                        onClick={() =>
                          startEditingTitle(resume.id, resume.title)
                        }
                      >
                        <PencilIcon className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Last updated:{" "}
                    {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => openDeleteDialog(resume.id)}
                  >
                    <Trash2Icon className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/resume?id=${resume.id}`}>
                      <EyeIcon className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Delete confirmation dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Resume</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this resume? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setDeleteDialogOpen(false);
                setResumeToDelete(null);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteResume}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create resume dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              Enter a title for your new resume.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              placeholder="Resume Title"
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}
              className="w-full"
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setCreateDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={createResumeWithTitle}
              disabled={creating || !newResumeTitle.trim()}
            >
              {creating ? "Creating..." : "Create Resume"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
