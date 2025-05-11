"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";
import { useEditMode } from "@/context/edit-mode-context";
import { PencilIcon, EyeIcon } from "lucide-react";

export function ResumeEditModeSwitch() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <div className="flex items-center gap-2">
      <EyeIcon
        className={`h-4 w-4 ${
          !isEditMode ? "text-primary" : "text-muted-foreground"
        }`}
      />
      <Switch
        checked={isEditMode}
        onCheckedChange={toggleEditMode}
        id="edit-mode"
      />
      <PencilIcon
        className={`h-4 w-4 ${
          isEditMode ? "text-primary" : "text-muted-foreground"
        }`}
      />
    </div>
  );
}
