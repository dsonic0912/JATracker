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
import { PencilIcon, CheckIcon, XIcon, HighlighterIcon } from "lucide-react";
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

// Helper function to apply highlighting to selected text
const applyHighlight = (
  text: string,
  selectionStart: number,
  selectionEnd: number,
): string => {
  if (selectionStart === selectionEnd) return text;

  const before = text.substring(0, selectionStart);
  const selected = text.substring(selectionStart, selectionEnd);
  const after = text.substring(selectionEnd);

  // Use a special marker for highlighted text
  return `${before}<mark>${selected}</mark>${after}`;
};

// Helper function to convert HTML-like string to React elements
const parseContentWithHighlights = (content: string): React.ReactNode => {
  if (!content.includes("<mark>")) return content;

  const parts = content.split(/(<mark>.*?<\/mark>)/g);

  return parts.map((part, index) => {
    if (part.startsWith("<mark>") && part.endsWith("</mark>")) {
      const highlightedText = part.replace(/<mark>(.*?)<\/mark>/, "$1");
      return (
        <span key={index} className="rounded bg-yellow-200 px-0.5">
          {highlightedText}
        </span>
      );
    }
    return part;
  });
};

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
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);

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

  // Update the edited content when the content prop changes
  useEffect(() => {
    if (!isEditing && !isDialogOpen) {
      setEditedContent(contentAsString);
    }
  }, [content, contentAsString, isEditing, isDialogOpen]);

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
    // Only save if content has actually changed
    if (editedContent !== contentAsString) {
      onSave(editedContent);
    }
    setIsEditing(false);
  };

  const handleDialogSave = () => {
    // Only save if content has actually changed
    if (editedContent !== contentAsString) {
      onSave(editedContent);
    }
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

  // Track selection in the textarea or input
  const handleSelect = (
    e: React.SyntheticEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const target = e.target as HTMLTextAreaElement | HTMLInputElement;
    setSelectionStart(target.selectionStart);
    setSelectionEnd(target.selectionEnd);
  };

  // Apply highlighting to selected text
  const handleHighlight = () => {
    if (
      selectionStart !== null &&
      selectionEnd !== null &&
      selectionStart !== selectionEnd
    ) {
      const newContent = applyHighlight(
        editedContent,
        selectionStart,
        selectionEnd,
      );
      setEditedContent(newContent);

      // Reset selection after highlighting
      setSelectionStart(null);
      setSelectionEnd(null);
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
              onSelect={handleSelect}
              className="w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder={placeholder}
            />
            <Button
              size="icon"
              variant="ghost"
              onClick={handleHighlight}
              className="h-8 w-8"
              title="Highlight selected text"
              disabled={
                selectionStart === null ||
                selectionEnd === null ||
                selectionStart === selectionEnd
              }
            >
              <HighlighterIcon className="h-4 w-4" />
            </Button>
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
                ? content.includes("<mark>")
                  ? parseContentWithHighlights(content)
                  : content
                : React.isValidElement(content)
                  ? React.Children.toArray(content.props.children).map(
                      (child, i) =>
                        typeof child === "string"
                          ? child.includes("<mark>")
                            ? parseContentWithHighlights(child)
                            : child
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
          <div className="mb-2 flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleHighlight}
              className="flex items-center gap-1"
              title="Highlight selected text"
              disabled={
                selectionStart === null ||
                selectionEnd === null ||
                selectionStart === selectionEnd
              }
            >
              <HighlighterIcon className="h-4 w-4" />
              <span>Highlight</span>
            </Button>
          </div>
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            onSelect={handleSelect}
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
