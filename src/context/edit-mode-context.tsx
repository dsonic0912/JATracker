"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type EditModeContextType = {
  isEditMode: boolean;
  toggleEditMode: () => void;
};

// Create the context
const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

// Provider component
export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
}

// Custom hook to use the edit mode context
export function useEditMode() {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error("useEditMode must be used within an EditModeProvider");
  }
  return context;
}
