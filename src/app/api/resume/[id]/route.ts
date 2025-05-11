import { NextRequest, NextResponse } from "next/server";
import { resumeService } from "@/lib/db/resume-service";

/**
 * GET /api/resume/[id]
 * Get a resume by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const resume = await resumeService.getResumeById(params.id);

    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    return NextResponse.json({ data: resume });
  } catch (error) {
    console.error("Error fetching resume:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}

/**
 * PATCH /api/resume/[id]
 * Update a resume field
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { path, value } = await request.json();

    if (!path || !Array.isArray(path)) {
      return NextResponse.json({ error: "Invalid path" }, { status: 400 });
    }

    // Special case for updating the entire resume
    if (path.length === 0 && value && typeof value === "object") {
      // Extract the fields we want to update
      const {
        name,
        title,
        initials,
        location,
        locationLink,
        about,
        summary,
        avatarUrl,
        personalWebsiteUrl,
        contact,
        education,
        work,
        skills,
        projects,
      } = value;

      // Update basic fields - only if they are explicitly defined in the value object
      if (name !== undefined && name !== null)
        await resumeService.updateResumeField(params.id, ["name"], name);
      if (title !== undefined && title !== null)
        await resumeService.updateResumeField(params.id, ["title"], title);
      if (initials !== undefined && initials !== null)
        await resumeService.updateResumeField(
          params.id,
          ["initials"],
          initials,
        );
      if (location !== undefined && location !== null)
        await resumeService.updateResumeField(
          params.id,
          ["location"],
          location,
        );
      if (locationLink !== undefined && locationLink !== null)
        await resumeService.updateResumeField(
          params.id,
          ["locationLink"],
          locationLink,
        );
      if (about !== undefined && about !== null)
        await resumeService.updateResumeField(params.id, ["about"], about);
      if (summary !== undefined && summary !== null)
        await resumeService.updateResumeField(params.id, ["summary"], summary);
      if (avatarUrl !== undefined && avatarUrl !== null)
        await resumeService.updateResumeField(
          params.id,
          ["avatarUrl"],
          avatarUrl,
        );
      if (personalWebsiteUrl !== undefined && personalWebsiteUrl !== null)
        await resumeService.updateResumeField(
          params.id,
          ["personalWebsiteUrl"],
          personalWebsiteUrl,
        );

      // Update complex fields - only if they are explicitly defined in the value object
      if (contact !== undefined && contact !== null)
        await resumeService.updateResumeField(params.id, ["contact"], contact);
      if (education !== undefined && education !== null)
        await resumeService.updateResumeField(
          params.id,
          ["education"],
          education,
        );
      if (work !== undefined && work !== null)
        await resumeService.updateResumeField(params.id, ["work"], work);
      if (skills !== undefined && skills !== null)
        await resumeService.updateResumeField(params.id, ["skills"], skills);
      if (projects !== undefined && projects !== null)
        await resumeService.updateResumeField(
          params.id,
          ["projects"],
          projects,
        );
    } else {
      // Normal case - update a specific field
      await resumeService.updateResumeField(params.id, path, value);
    }

    // Return the updated resume
    const updatedResume = await resumeService.getResumeById(params.id);

    return NextResponse.json({ data: updatedResume });
  } catch (error) {
    console.error("Error updating resume:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/resume/[id]
 * Delete a resume
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await resumeService.deleteResume(params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting resume:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
