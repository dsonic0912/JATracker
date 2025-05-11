"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useResume } from "@/context/resume-context";

export default function ProfilePage() {
  const { resumeData } = useResume();

  return (
    <DashboardLayout title="Profile">
      <div className="container mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Name</h3>
              <p>{resumeData.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Location</h3>
              <p>{resumeData.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">About</h3>
              <p className="text-sm">{resumeData.about}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
