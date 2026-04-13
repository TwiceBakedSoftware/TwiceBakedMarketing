import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  companyName: "TwiceBakedSoftware",
  legalName: "TwiceBakedSoftware LLC",
  tagline: "Local-first internal software for Central Kentucky businesses",
  summary:
    "We help Central Kentucky teams and growing businesses beyond the region replace spreadsheet-heavy processes with focused internal tools, in-person when requested and always with a direct human point of contact.",
  contactName: "Craigory",
  serviceRegion: "Central Kentucky and beyond",
  linkedinUrl: "https://www.linkedin.com/in/craigoryvcoppola/",
  githubUrl: "https://github.com/AgentEnder",
  siteUrl: "https://twicebakedsoftware.com",
  contactEmail: "hello@twicebakedsoftware.com",
  calendlyUrl: "https://calendly.com/craigory-coppola/express-interest-meeting",
  calendlyEmbedUrl:
    "https://calendly.com/craigory-coppola/express-interest-meeting",
};

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
