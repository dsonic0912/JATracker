"use client";

import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <Button className="size-8" variant="outline" size="icon" asChild>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  return (
    <div
      className="flex gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <SocialButton
          href={personalWebsiteUrl}
          icon={GlobeIcon}
          label="Personal website"
        />
      )}
      {contact.email && (
        <SocialButton
          href={`mailto:${contact.email}`}
          icon={MailIcon}
          label="Email"
        />
      )}
      {contact.tel && (
        <SocialButton
          href={`tel:${contact.tel}`}
          icon={PhoneIcon}
          label="Phone"
        />
      )}
      {contact.social.map((social) => {
        // Map social network names to icon components
        let IconComponent: React.ElementType | null = null;
        if (social.name === "GitHub") IconComponent = GitHubIcon;
        else if (social.name === "LinkedIn") IconComponent = LinkedInIcon;
        else if (social.name === "X") IconComponent = XIcon;

        // Only render if we have a matching icon
        return IconComponent ? (
          <SocialButton
            key={social.name}
            href={social.url}
            icon={IconComponent}
            label={social.name}
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
          <span aria-hidden="true">/</span>
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
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <a
          className="underline hover:text-foreground/70"
          href={`tel:${contact.tel}`}
        >
          {contact.tel}
        </a>
      )}
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
          <div className="flex items-center gap-1">
            <MailIcon className="size-3" aria-hidden="true" />
            <EditableContent
              content={resumeData.contact.email}
              onSave={handleEmailUpdate}
              className="text-xs"
            />
          </div>
          <span aria-hidden="true">•</span>
          <div className="flex items-center gap-1">
            <PhoneIcon className="size-3" aria-hidden="true" />
            <EditableContent
              content={resumeData.contact.tel}
              onSave={handlePhoneUpdate}
              className="text-xs"
            />
          </div>
          <span aria-hidden="true">•</span>
          <div className="flex items-center gap-1">
            <GlobeIcon className="size-3" aria-hidden="true" />
            <EditableContent
              content={resumeData.personalWebsiteUrl}
              onSave={handleWebsiteUpdate}
              className="text-xs"
            />
          </div>
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
