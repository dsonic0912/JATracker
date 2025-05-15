"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { HighlighterIcon } from "lucide-react";
import { useResume } from "@/context/resume-context";

interface SkillHighlighterProps {
  isOpen: boolean;
  onClose: () => void;
  skillText: string;
  onSave: (highlightedText: string) => void;
  title?: string;
}

export function SkillHighlighter({
  isOpen,
  onClose,
  skillText,
  onSave,
  title = "Highlight Skill",
}: SkillHighlighterProps) {
  const [text, setText] = useState(skillText);
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update text when skillText prop changes
  useEffect(() => {
    setText(skillText);
  }, [skillText]);

  // Focus the input when the dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [isOpen]);

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

    console.log("Highlighting parts:", { before, selected, after });

    // Use a special marker for highlighted text
    return `${before}<mark>${selected}</mark>${after}`;
  };

  // Track selection in the input
  const handleSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    console.log(
      "Selection changed:",
      target.selectionStart,
      target.selectionEnd,
    );
    setSelectionStart(target.selectionStart);
    setSelectionEnd(target.selectionEnd);
  };

  // Handle mouse up event to capture selection
  const handleMouseUp = () => {
    if (inputRef.current) {
      console.log(
        "Mouse up - selection:",
        inputRef.current.selectionStart,
        inputRef.current.selectionEnd,
      );
      setSelectionStart(inputRef.current.selectionStart);
      setSelectionEnd(inputRef.current.selectionEnd);
    }
  };

  // Handle click event to update selection state
  const handleClick = () => {
    setTimeout(() => {
      if (inputRef.current) {
        setSelectionStart(inputRef.current.selectionStart);
        setSelectionEnd(inputRef.current.selectionEnd);
      }
    }, 0);
  };

  // Handle key up event to update selection state
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Skip certain keys that don't affect selection
    if (["Escape", "Tab"].includes(e.key)) return;

    if (inputRef.current) {
      setSelectionStart(inputRef.current.selectionStart);
      setSelectionEnd(inputRef.current.selectionEnd);
    }
  };

  // Apply highlighting to selected text
  const handleHighlight = () => {
    console.log("Highlight button clicked");

    // Get the current selection directly from the input element
    if (inputRef.current) {
      const currentStart = inputRef.current.selectionStart;
      const currentEnd = inputRef.current.selectionEnd;

      console.log("Current selection from input:", currentStart, currentEnd);

      // Use the current selection from the input if available, otherwise fall back to state
      const start = currentStart !== null ? currentStart : selectionStart;
      const end = currentEnd !== null ? currentEnd : selectionEnd;

      console.log("Using selection:", start, end);

      if (start !== null && end !== null && start !== end) {
        console.log("Text to highlight:", text);

        try {
          const newContent = applyHighlight(text, start, end);
          console.log("New content with highlighting:", newContent);
          setText(newContent);

          // Reset selection after highlighting
          setSelectionStart(null);
          setSelectionEnd(null);

          // Force focus back to the input after highlighting
          if (inputRef.current) {
            inputRef.current.focus();

            // Set cursor position after the highlighted text
            setTimeout(() => {
              if (inputRef.current) {
                const newPosition = start + 13; // Length of "<mark></mark>" tags
                inputRef.current.setSelectionRange(newPosition, newPosition);
              }
            }, 0);
          }
        } catch (error) {
          console.error("Error applying highlight:", error);
        }
      } else {
        console.log("No valid selection to highlight");
        alert("Please select some text to highlight first");
      }
    } else {
      console.log("Input reference not available");
    }
  };

  const handleSave = () => {
    onSave(text);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Select text and click the highlight button to highlight important
            parts of this skill.
          </p>
        </DialogHeader>

        <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="text-sm font-medium text-gray-700">
            Text Formatting:
          </div>
          <Button
            size="sm"
            variant="secondary"
            onClick={handleHighlight}
            className="flex items-center gap-1 bg-yellow-100 hover:bg-yellow-200"
            title="Highlight selected text"
            disabled={
              selectionStart === null ||
              selectionEnd === null ||
              selectionStart === selectionEnd
            }
          >
            <HighlighterIcon className="h-4 w-4 text-yellow-600" />
            <span className="font-medium">Highlight Selection</span>
          </Button>
        </div>

        <div className="py-4">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onSelect={handleSelect}
              onMouseUp={handleMouseUp}
              onClick={handleClick}
              onKeyUp={handleKeyUp}
              className="w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Enter skill"
            />

            {/* Preview of highlighted text */}
            {text.includes("<mark>") && (
              <div className="mt-3 rounded-md border-2 border-yellow-300 bg-yellow-50 p-3 text-sm shadow-sm">
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                  <HighlighterIcon className="h-4 w-4 text-yellow-600" />
                  Preview with Highlighting:
                </div>
                <div className="mt-2 rounded bg-white p-2">
                  {text.split(/(<mark>.*?<\/mark>)/g).map((part, index) => {
                    if (part.startsWith("<mark>") && part.endsWith("</mark>")) {
                      const highlightedText = part.replace(
                        /<mark>(.*?)<\/mark>/,
                        "$1",
                      );
                      return (
                        <span
                          key={index}
                          className="rounded bg-yellow-200 px-0.5 text-black print:border print:border-yellow-400 print:bg-yellow-200 print:text-black"
                        >
                          {highlightedText}
                        </span>
                      );
                    }
                    return part;
                  })}
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  This is how your skill will appear on your resume.
                </p>
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
