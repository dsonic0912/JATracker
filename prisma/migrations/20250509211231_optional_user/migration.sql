-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resume" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "initials" TEXT,
    "location" TEXT,
    "locationLink" TEXT,
    "about" TEXT,
    "summary" TEXT,
    "avatarUrl" TEXT,
    "personalWebsiteUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Resume" ("about", "avatarUrl", "createdAt", "id", "initials", "location", "locationLink", "name", "personalWebsiteUrl", "summary", "updatedAt", "userId") SELECT "about", "avatarUrl", "createdAt", "id", "initials", "location", "locationLink", "name", "personalWebsiteUrl", "summary", "updatedAt", "userId" FROM "Resume";
DROP TABLE "Resume";
ALTER TABLE "new_Resume" RENAME TO "Resume";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
