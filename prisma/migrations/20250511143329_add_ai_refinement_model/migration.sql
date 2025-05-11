-- CreateTable
CREATE TABLE "AiRefinement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "resumeId" TEXT NOT NULL,
    "jobApplicationId" TEXT NOT NULL,
    "refinements" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AiRefinement_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AiRefinement_jobApplicationId_fkey" FOREIGN KEY ("jobApplicationId") REFERENCES "JobApplication" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
