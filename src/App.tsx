import { useCallback, useEffect, useState } from "react";
import type { Lang, Project, ThemeMode } from "./types/portfolio";
import { PROJECTS } from "./data/projects";
import { useScrollReveal } from "./hooks/useMotion";
import {
  applyDocumentMeta,
  normalizePathname,
  resolveRoute,
  type RecognitionTab,
} from "./utils/routing";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HighlightsMarquee } from "./components/HighlightsMarquee";
import { ProjectsSection } from "./components/ProjectsSection";
import { PhotoInterlude } from "./components/PhotoInterlude";
import { PatentSpotlight } from "./components/PatentSpotlight";
import { CraftShowcase } from "./components/CraftShowcase";
import { BackgroundSection } from "./components/BackgroundSection";
import { RecognitionSection } from "./components/RecognitionSection";
import { ContactFooter } from "./components/ContactFooter";
import { ProjectModal } from "./components/ProjectModal";
import { Lightbox } from "./components/Lightbox";
import { BackToTop, ScrollProgress } from "./components/BackToTop";

const TAB_TO_PATH: Record<RecognitionTab, string> = {
  awards: "/awards",
  certs: "/certifications",
  global: "/global",
  community: "/community",
  press: "/publications",
};

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Ignore storage access errors
  }
  return "dark";
}

export function App() {
  const initialRoute =
    typeof window !== "undefined"
      ? resolveRoute(window.location.pathname)
      : resolveRoute("/");

  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [recognitionTab, setRecognitionTab] = useState<RecognitionTab>(
    initialRoute.recognitionTab ?? "awards"
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(() =>
    initialRoute.projectId
      ? PROJECTS.find((p) => p.id === initialRoute.projectId) ?? null
      : null
  );
  const [modalInitialTab, setModalInitialTab] = useState<"video" | "gallery">(
    "gallery"
  );
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  useScrollReveal([lang, recognitionTab]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Ignore storage access errors
    }
  }, [theme]);

  useEffect(() => {
    const route = resolveRoute(window.location.pathname);
    applyDocumentMeta(route);
    if (route.sectionId) {
      const targetEl = document.getElementById(route.sectionId);
      if (targetEl) {
        window.requestAnimationFrame(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const route = resolveRoute(window.location.pathname);
      applyDocumentMeta(route);
      if (route.recognitionTab) {
        setRecognitionTab(route.recognitionTab);
      }
      if (route.projectId) {
        const found = PROJECTS.find((p) => p.id === route.projectId) ?? null;
        setSelectedProject(found);
      } else {
        setSelectedProject(null);
      }
      if (route.sectionId) {
        const el = document.getElementById(route.sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const openProject = useCallback(
    (project: Project, initialTab: "video" | "gallery" = "gallery") => {
      setModalInitialTab(initialTab);
      setSelectedProject(project);
      const targetPath = `/projects/${project.id}`;
      if (normalizePathname(window.location.pathname) !== targetPath) {
        window.history.pushState({ projectId: project.id }, "", targetPath);
      }
      applyDocumentMeta(resolveRoute(targetPath));
    },
    []
  );

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    const current = normalizePathname(window.location.pathname);
    if (current.startsWith("/projects/")) {
      window.history.pushState({}, "", "/projects");
      applyDocumentMeta(resolveRoute("/projects"));
    }
  }, []);

  const openProjectById = (id: string, tab: "video" | "gallery" = "video") => {
    const found = PROJECTS.find((p) => p.id === id);
    if (found) {
      openProject(found, tab);
    }
  };

  const handleChangeRecognitionTab = (nextTab: RecognitionTab) => {
    setRecognitionTab(nextTab);
    const nextPath = TAB_TO_PATH[nextTab];
    window.history.replaceState({}, "", nextPath);
    applyDocumentMeta(resolveRoute(nextPath));
  };

  return (
    <>
      <ScrollProgress />
      <Navbar
        lang={lang}
        onChangeLang={setLang}
        theme={theme}
        onToggleTheme={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
      />

      <main>
        <Hero
          lang={lang}
          onOpenFlagshipVideo={() => openProjectById("dravixa", "video")}
          onZoomImage={(src, caption) => setLightboxImage({ src, caption })}
        />

        <HighlightsMarquee lang={lang} />

        <ProjectsSection lang={lang} onSelectProject={openProject} />

        <PhotoInterlude variant="industry" lang={lang} />

        <PatentSpotlight
          lang={lang}
          onOpenHydrolytixVideo={() => openProjectById("brin-gms", "video")}
          onZoomImage={(src, caption) => setLightboxImage({ src, caption })}
        />

        <CraftShowcase
          lang={lang}
          onZoomImage={(src, caption) => setLightboxImage({ src, caption })}
        />

        <BackgroundSection
          lang={lang}
          onZoomImage={(src, caption) => setLightboxImage({ src, caption })}
        />

        <PhotoInterlude variant="champion" lang={lang} />

        <RecognitionSection
          lang={lang}
          activeTab={recognitionTab}
          onChangeTab={handleChangeRecognitionTab}
          onZoomImage={(src, caption) => setLightboxImage({ src, caption })}
        />

        <ContactFooter lang={lang} />
      </main>

      <ProjectModal
        project={selectedProject}
        initialTab={modalInitialTab}
        lang={lang}
        onClose={closeProject}
        onZoomImage={(src, caption) => setLightboxImage({ src, caption })}
      />

      <Lightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <BackToTop />
    </>
  );
}

export default App;
