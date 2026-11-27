import { PROJECTS } from "../data/projects";

export type RecognitionTab = "awards" | "certs" | "global" | "community" | "press";

export interface RouteTarget {
  sectionId?: string;
  recognitionTab?: RecognitionTab;
  projectId?: string;
  title: string;
  description: string;
}

const DEFAULT_TITLE =
  "Mark Alexander Ierwanto — Portfolio Hub | Automotive, Robotics & AI";
const DEFAULT_DESC =
  "Detailed engineering portfolio of Mark Alexander Ierwanto — DRAVIXA AI Co-Pilot (2nd Place TSAI 2026), BRIN Smart Mechatronics (DJKI A00202603133), 1st World Champion GBWC 2018, 36 Honors & Certifications.";

const STATIC_ROUTES: Record<string, RouteTarget> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  "/projects": {
    sectionId: "work",
    title: "Engineering Projects (11) — Mark Alexander Ierwanto",
    description:
      "Eleven documented robotics, AI, IoT, FPGA, and 3D fabrication builds by Mark Alexander Ierwanto.",
  },
  "/p/projects.html": {
    sectionId: "work",
    title: "Engineering Projects (11) — Mark Alexander Ierwanto",
    description:
      "Eleven documented robotics, AI, IoT, FPGA, and 3D fabrication builds by Mark Alexander Ierwanto.",
  },
  "/awards": {
    sectionId: "recognition",
    recognitionTab: "awards",
    title: "Awards & 36 Verified Honors — Mark Alexander Ierwanto",
    description:
      "36 verified national and global honors including 2nd Place TSAI 2026, BEST BRIN 2026, PILMAPRES 2025, and 1st World Champion GBWC 2018 Tokyo.",
  },
  "/p/awards.html": {
    sectionId: "recognition",
    recognitionTab: "awards",
    title: "Awards & 36 Verified Honors — Mark Alexander Ierwanto",
    description:
      "36 verified national and global honors including 2nd Place TSAI 2026, BEST BRIN 2026, PILMAPRES 2025, and 1st World Champion GBWC 2018 Tokyo.",
  },
  "/p/awards_23.html": {
    sectionId: "recognition",
    recognitionTab: "awards",
    title: "Awards & 36 Verified Honors — Mark Alexander Ierwanto",
    description:
      "36 verified national and global honors including 2nd Place TSAI 2026, BEST BRIN 2026, PILMAPRES 2025, and 1st World Champion GBWC 2018 Tokyo.",
  },
  "/certifications": {
    sectionId: "recognition",
    recognitionTab: "certs",
    title: "Certifications & 21 Google Cloud Badges — Mark Alexander Ierwanto",
    description:
      "12 technical certificates and 21 Google Cloud Diamond League badges across AI, BigQuery ML, Looker, and Universal Robots.",
  },
  "/global": {
    sectionId: "recognition",
    recognitionTab: "global",
    title: "Global Academic & Robotics Exposure — Mark Alexander Ierwanto",
    description:
      "International engineering visits and competitions across Singapore, Japan, Thailand, and Hong Kong.",
  },
  "/community": {
    sectionId: "recognition",
    recognitionTab: "community",
    title: "Community Service & Media — Mark Alexander Ierwanto",
    description:
      "Community volunteering, documentary production, and social impact initiatives.",
  },
  "/p/community-services.html": {
    sectionId: "recognition",
    recognitionTab: "community",
    title: "Community Service & Media — Mark Alexander Ierwanto",
    description:
      "Community volunteering, documentary production, and social impact initiatives.",
  },
  "/publications": {
    sectionId: "recognition",
    recognitionTab: "press",
    title: "Publications & Media Coverage (15) — Mark Alexander Ierwanto",
    description:
      "Press features and official competition broadcasts covering Mark Alexander Ierwanto.",
  },
  "/p/publications.html": {
    sectionId: "recognition",
    recognitionTab: "press",
    title: "Publications & Media Coverage (15) — Mark Alexander Ierwanto",
    description:
      "Press features and official competition broadcasts covering Mark Alexander Ierwanto.",
  },
  "/experience": {
    sectionId: "background",
    title: "Industry, Research & Judging Experience — Mark Alexander Ierwanto",
    description:
      "AI Engineer Intern at Toyota TMMIN, BRIN Smart Mechatronics Research Intern, INNOVEDU CAD Designer, and international robotics/model judging.",
  },
  "/p/work-experience.html": {
    sectionId: "background",
    title: "Industry, Research & Judging Experience — Mark Alexander Ierwanto",
    description:
      "AI Engineer Intern at Toyota TMMIN, BRIN Smart Mechatronics Research Intern, INNOVEDU CAD Designer, and international robotics/model judging.",
  },
  "/organization": {
    sectionId: "organization",
    title: "Organization & Robotics Leadership — Mark Alexander Ierwanto",
    description:
      "Leadership roles at GUNPLA BASE Club and BASECORE Robotics at BINUS ASO School of Engineering.",
  },
  "/p/organization-experience.html": {
    sectionId: "organization",
    title: "Organization & Robotics Leadership — Mark Alexander Ierwanto",
    description:
      "Leadership roles at GUNPLA BASE Club and BASECORE Robotics at BINUS ASO School of Engineering.",
  },
  "/p/organization.html": {
    sectionId: "organization",
    title: "Organization & Robotics Leadership — Mark Alexander Ierwanto",
    description:
      "Leadership roles at GUNPLA BASE Club and BASECORE Robotics at BINUS ASO School of Engineering.",
  },
  "/contact": {
    sectionId: "contact",
    title: "Contact — Mark Alexander Ierwanto",
    description:
      "Reach out to Mark Alexander Ierwanto for AI, Robotics, Mechatronics, and Industrial CAD collaborations.",
  },
  "/p/contact-info.html": {
    sectionId: "contact",
    title: "Contact — Mark Alexander Ierwanto",
    description:
      "Reach out to Mark Alexander Ierwanto for AI, Robotics, Mechatronics, and Industrial CAD collaborations.",
  },
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
}

export function resolveRoute(pathname: string): RouteTarget {
  const norm = normalizePathname(pathname);
  if (norm.startsWith("/projects/")) {
    const id = norm.slice("/projects/".length);
    const project = PROJECTS.find((p) => p.id === id);
    if (project) {
      return {
        sectionId: "work",
        projectId: project.id,
        title: `${project.title.en} — Mark Alexander Ierwanto`,
        description: project.summary.en,
      };
    }
  }
  return STATIC_ROUTES[norm] ?? STATIC_ROUTES["/"];
}

export function applyDocumentMeta(target: RouteTarget): void {
  if (typeof document === "undefined") return;
  document.title = target.title;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) {
    descEl.setAttribute("content", target.description);
  }
}
