"use client";

import { Button } from "./ui/button";
import { PrinterIcon } from "lucide-react";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";

export const PrintDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden">
          <PrinterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Export Resume</DrawerTitle>
            <DrawerDescription>
              Choose how to export your resume
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0"></div>
          <DrawerFooter className="flex flex-col gap-2">
            <Button onClick={() => window.print()} className="w-full">
              <PrinterIcon className="mr-2 h-4 w-4" />
              Print
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
