import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { ResumeProvider } from "@/context/resume-context";
import { EditModeProvider } from "@/context/edit-mode-context";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "dSonic JHTracker",
  description:
    "A Next.js powered web application that provides users an intuitive interface for building their resume.",
  metadataBase: new URL("https://dsonic-resume-builder.davidtung.ca"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>dSonic JHTracker</title>
      </head>
      <body>
        <ResumeProvider>
          <EditModeProvider>{children}</EditModeProvider>
        </ResumeProvider>
        <Analytics />
      </body>
    </html>
  );
}
