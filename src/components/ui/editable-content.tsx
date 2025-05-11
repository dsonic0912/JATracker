"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./dialog";
import { PencilIcon, CheckIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditMode } from "@/context/edit-mode-context";

interface EditableContentProps {
  content: string | React.ReactNode;
  onSave: (newContent: string) => void;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  dialogTitle?: string;
}

export function EditableContent({
  content,
  onSave,
  className,
  multiline = false,
  placeholder = "Click to edit",
  dialogTitle = "Edit Content",
}: EditableContentProps) {
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  // Extract text content from ReactNode for editing
  const extractTextFromReactNode = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return node.toString();
    if (node === null || node === undefined) return "";

    // Handle React elements and fragments
    if (React.isValidElement(node)) {
      const children = node.props.children;
      if (children) {
        if (Array.isArray(children)) {
          return children.map(extractTextFromReactNode).join("");
        }
        return extractTextFromReactNode(children);
      }
      return "";
    }

    // Handle arrays (like React fragments)
    if (Array.isArray(node)) {
      return node.map(extractTextFromReactNode).join("");
    }

    return "";
  };

  const contentAsString = extractTextFromReactNode(content);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    if (multiline) {
      setEditedContent(contentAsString);
      setIsDialogOpen(true);
    } else {
      setIsEditing(true);
      setEditedContent(contentAsString);
    }
  };

  const handleSave = () => {
    onSave(editedContent);
    setIsEditing(false);
  };

  const handleDialogSave = () => {
    onSave(editedContent);
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !multiline) {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <>
      <span className={cn("group relative inline-block", className)}>
        {isEditing ? (
          <span className="flex items-center gap-2">
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder={placeholder}
            />
            <Button
              size="icon"
              variant="ghost"
              onClick={handleSave}
              className="h-8 w-8"
            >
              <CheckIcon className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCancel}
              className="h-8 w-8"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </span>
        ) : (
          <>
            <span className="inline-block w-full">
              {typeof content === "string"
                ? content
                : React.isValidElement(content)
                  ? React.Children.toArray(content.props.children).map(
                      (child, i) =>
                        typeof child === "string"
                          ? child
                          : React.isValidElement(child) && child.type === "ul"
                            ? null // Don't render the list in view mode
                            : "",
                    )
                  : content || placeholder}
            </span>
            {isEditMode && (
              <Button
                size="icon"
                variant="ghost"
                onClick={handleEditClick}
                className="absolute right-0 top-0 h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <PencilIcon className="h-3 w-3" />
              </Button>
            )}
          </>
        )}
      </span>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
          </DialogHeader>
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="min-h-[150px] w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder={placeholder}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleDialogSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
