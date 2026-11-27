export type Lang = "en" | "id";

export type ThemeMode = "dark" | "light";

export interface LocalizedText {
  en: string;
  id: string;
}

export type ProjectCategory =
  | "ai-robotics"
  | "iot-embedded"
  | "industrial-3d"
  | "digital-ml";

export interface ProjectImage {
  src: string;
  caption: LocalizedText;
}

export interface Project {
  id: string;
  code: string;
  category: ProjectCategory;
  featured: boolean;
  year: string;
  title: LocalizedText;
  context: LocalizedText;
  role: LocalizedText;
  outcome: LocalizedText;
  summary: LocalizedText;
  specs: string[];
  accomplishments: {
    en: string[];
    id: string[];
  };
  coverImage: string;
  coverCaption: LocalizedText;
  gallery: ProjectImage[];
  videoUrl?: string;
  localVideoUrl?: string;
  videoLabel?: LocalizedText;
}

export interface AwardItem {
  id: string;
  year: string;
  title: LocalizedText;
  issuer: string;
  detail: LocalizedText;
  image: string;
}

export interface HonorRecord {
  year: string;
  title: string;
  issuer: string;
  scope: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  kind: "work" | "leadership";
  role: LocalizedText;
  organization: string;
  location: string;
  bullets: {
    en: string[];
    id: string[];
  };
  images?: { src: string; caption: string }[];
}

export interface CertificationItem {
  id: string;
  year: string;
  title: string;
  issuer: string;
  category?: string;
  url?: string;
  detail: LocalizedText;
  image?: string;
  pdf?: string;
}

export interface CloudBadgeItem {
  id: string;
  title: string;
  earned: string;
  url: string;
  track: "Looker & BI" | "BigQuery & Gemini" | "Cloud Foundations & Security";
}

export interface GlobalItem {
  id: string;
  country: LocalizedText;
  code: string;
  tag: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
}

export interface CommunityItem {
  id: string;
  period: string;
  tag: LocalizedText;
  title: LocalizedText;
  org: string;
  summary: LocalizedText;
}

export interface PublicationItem {
  id: string;
  year: string;
  outlet: string;
  title: string;
  url: string;
}
