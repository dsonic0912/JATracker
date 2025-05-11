"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { useEditMode } from "@/context/edit-mode-context";
import { EditModeSwitch } from "@/components/ui/edit-mode-switch";

interface HeaderProps {
  title?: string;
}

export function Header({ title = "Dashboard" }: HeaderProps) {
  const { isEditMode } = useEditMode();

  return (
    <div className="flex h-16 items-center justify-between border-b px-4 print:hidden">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 transform">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        {title === "Resume" && <EditModeSwitch />}
      </div>
    </div>
  );
}
