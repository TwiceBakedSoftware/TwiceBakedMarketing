export type SiteConfig = {
  companyName: string;
  legalName: string;
  tagline: string;
  summary: string;
  contactName: string;
  serviceRegion: string;
  linkedinUrl: string;
  githubUrl: string;
  siteUrl: string;
  contactEmail: string;
  calendlyUrl: string;
  calendlyEmbedUrl: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  timeline: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  duration: string;
  description: string;
  outputs: string[];
  clientInvolvement: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  clientProfile: string;
  timeline: string;
  scope: string;
  challenge: string;
  approach: string;
  solution: string;
  outcomes: string[];
  tech: string[];
  anonymizationNote: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  category: "process" | "timeline" | "fit" | "pricing";
};
