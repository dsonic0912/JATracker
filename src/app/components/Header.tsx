"use client";

import React from "react";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { EditableContent } from "@/components/ui/editable-content";
import { useResume } from "@/context/resume-context";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

interface LocationLinkProps {
  location: typeof RESUME_DATA.location;
  locationLink: typeof RESUME_DATA.locationLink;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  url: string;
  icon: React.ElementType;
  name: string;
  index: number;
  onUpdate: (index: number, field: string, value: string) => void;
}

function SocialButton({
  url,
  icon: Icon,
  name,
  index,
  onUpdate,
}: SocialButtonProps) {
  const handleNameUpdate = (newValue: string) => {
    onUpdate(index, "name", newValue);
  };

  const handleUrlUpdate = (newValue: string) => {
    onUpdate(index, "url", newValue);
  };

  return (
    <div className="flex items-center gap-1">
      <Icon className="size-3" aria-hidden="true" />
      <EditableContent
        content={name}
        onSave={handleNameUpdate}
        className="text-xs"
      />
      <span className="text-xs">:</span>
      <EditableContent
        content={url}
        onSave={handleUrlUpdate}
        className="text-xs"
      />
    </div>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  const { updateField } = useResume();

  // Check if there are any contact methods to display
  const hasContactMethods = contact.social && contact.social.length > 0;

  if (!hasContactMethods) {
    return null;
  }

  // Handler for updating social links
  const handleSocialUpdate = (index: number, field: string, value: string) => {
    updateField(["contact", "social", index.toString(), field], value);
  };

  return (
    <div
      className="flex flex-col gap-y-2 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label="Social links"
    >
      <h3 className="text-xs font-medium">Social Links</h3>
      {contact.social &&
        contact.social.map((social, index) => {
          // Map social network names to icon components
          let IconComponent: React.ElementType | null = null;
          if (social.name === "GitHub") IconComponent = GitHubIcon;
          else if (social.name === "LinkedIn") IconComponent = LinkedInIcon;
          else if (social.name === "X") IconComponent = XIcon;
          else IconComponent = GlobeIcon; // Default icon

          // Only render if we have a name and url
          return social.name && social.url ? (
            <SocialButton
              key={`${social.name}-${index}`}
              url={social.url}
              icon={IconComponent}
              name={social.name}
              index={index}
              onUpdate={handleSocialUpdate}
            />
          ) : null;
        })}
    </div>
  );
}

interface PrintContactProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  // Don't render the component at all if no contact information is available
  if (
    !personalWebsiteUrl &&
    !contact.email &&
    !contact.tel &&
    (!contact.social || contact.social.length === 0)
  ) {
    return null;
  }

  return (
    <div
      className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]"
      aria-label="Print contact information"
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          {(contact.email ||
            contact.tel ||
            (contact.social && contact.social.length > 0)) && (
            <span aria-hidden="true">/</span>
          )}
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          {(contact.tel || (contact.social && contact.social.length > 0)) && (
            <span aria-hidden="true">/</span>
          )}
        </>
      )}
      {contact.tel && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`tel:${contact.tel}`}
          >
            {contact.tel}
          </a>
          {contact.social && contact.social.length > 0 && (
            <span aria-hidden="true">/</span>
          )}
        </>
      )}
      {contact.social &&
        contact.social.map((social, index) => (
          <React.Fragment key={`print-${social.name}-${index}`}>
            {social.name && social.url && (
              <>
                <a
                  className="underline hover:text-foreground/70"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
                {index < contact.social.length - 1 && (
                  <span aria-hidden="true">/</span>
                )}
              </>
            )}
          </React.Fragment>
        ))}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  const { resumeData, updateField } = useResume();

  const handleNameUpdate = (newValue: string) => {
    updateField(["name"], newValue);
  };

  const handleLocationUpdate = (newValue: string) => {
    updateField(["location"], newValue);
  };

  const handleEmailUpdate = (newValue: string) => {
    updateField(["contact", "email"], newValue);
  };

  const handlePhoneUpdate = (newValue: string) => {
    updateField(["contact", "tel"], newValue);
  };

  const handleWebsiteUpdate = (newValue: string) => {
    updateField(["personalWebsiteUrl"], newValue);
  };

  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          <EditableContent
            content={resumeData.name}
            onSave={handleNameUpdate}
          />
        </h1>

        <div className="flex items-center gap-1.5">
          <GlobeIcon className="size-3" aria-hidden="true" />
          <EditableContent
            content={resumeData.location}
            onSave={handleLocationUpdate}
            className="max-w-md items-center text-pretty font-mono text-xs text-foreground"
          />
        </div>

        <div className="flex gap-x-2 font-mono text-sm text-foreground/80">
          {resumeData.contact.email && (
            <>
              <div className="flex items-center gap-1">
                <MailIcon className="size-3" aria-hidden="true" />
                <EditableContent
                  content={resumeData.contact.email}
                  onSave={handleEmailUpdate}
                  className="text-xs"
                />
              </div>
              {(resumeData.contact.tel || resumeData.personalWebsiteUrl) && (
                <span aria-hidden="true">•</span>
              )}
            </>
          )}
          {resumeData.contact.tel && (
            <>
              <div className="flex items-center gap-1">
                <PhoneIcon className="size-3" aria-hidden="true" />
                <EditableContent
                  content={resumeData.contact.tel}
                  onSave={handlePhoneUpdate}
                  className="text-xs"
                />
              </div>
              {resumeData.personalWebsiteUrl && (
                <span aria-hidden="true">•</span>
              )}
            </>
          )}
          {resumeData.personalWebsiteUrl && (
            <div className="flex items-center gap-1">
              <GlobeIcon className="size-3" aria-hidden="true" />
              <EditableContent
                content={resumeData.personalWebsiteUrl}
                onSave={handleWebsiteUpdate}
                className="text-xs"
              />
            </div>
          )}
        </div>

        <ContactButtons
          contact={resumeData.contact}
          personalWebsiteUrl={resumeData.personalWebsiteUrl}
        />

        <PrintContact
          contact={resumeData.contact}
          personalWebsiteUrl={resumeData.personalWebsiteUrl}
        />
      </div>

      {/* <Avatar className="size-28" aria-hidden="true">
        <AvatarImage
          alt={`${resumeData.name}'s profile picture`}
          src={resumeData.avatarUrl}
        />
        <AvatarFallback>{resumeData.initials}</AvatarFallback>
      </Avatar> */}
    </header>
  );
}
