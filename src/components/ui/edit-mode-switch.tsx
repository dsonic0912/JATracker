"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";
import { useEditMode } from "@/context/edit-mode-context";
import { PencilIcon, EyeIcon } from "lucide-react";

export function EditModeSwitch() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-white p-2 shadow-md print:hidden">
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
      <span className="text-xs font-medium">
        {isEditMode ? "Edit Mode" : "View Mode"}
      </span>
    </div>
  );
}
