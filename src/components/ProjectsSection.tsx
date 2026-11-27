import { useState } from "react";
import type { PointerEvent } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import type { Lang, Project, ProjectCategory } from "../types/portfolio";
import { PROJECTS } from "../data/projects";
import { UI_COPY, t } from "../data/translations";

interface ProjectsSectionProps {
  lang: Lang;
  onSelectProject: (project: Project, initialTab?: "video" | "gallery") => void;
}

type FilterKey = "all" | ProjectCategory;

function handleTilt(e: PointerEvent<HTMLElement>, reset = false) {
  const el = e.currentTarget;
  if (
    reset ||
    (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches)
  ) {
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    return;
  }
  const rect = el.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.setProperty("--rx", `${(-py * 10).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${(px * 10).toFixed(2)}deg`);
}

export function ProjectsSection({ lang, onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filterKeys: FilterKey[] = [
    "all",
    "ai-robotics",
    "iot-embedded",
    "industrial-3d",
    "digital-ml",
  ];

  const countFor = (key: FilterKey) =>
    key === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === key).length;

  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const flagships = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <section id="work" className="section-block" style={{ marginTop: "3.5rem" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-index-dot" aria-hidden="true" />
            <span>{t(UI_COPY.projects.index, lang)}</span>
          </div>
          <div>
            <h2 className="section-title">{t(UI_COPY.projects.title, lang)}</h2>
            <p className="section-lead">{t(UI_COPY.projects.lead, lang)}</p>
          </div>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Project categories">
          {filterKeys.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={filter === key}
              className={`filter-btn ${filter === key ? "active" : ""}`}
              onClick={() => setFilter(key)}
            >
              {t(UI_COPY.projects.filters[key], lang)} ({countFor(key)})
            </button>
          ))}
        </div>

        {flagships.length > 0 && (
          <div className="flagship-grid">
            {flagships.map((project) => (
              <article
                key={project.id}
                className="project-card flagship-card"
                onPointerMove={(e) => handleTilt(e)}
                onPointerLeave={(e) => handleTilt(e, true)}
              >
                <div
                  className="project-media-wrap"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    onSelectProject(
                      project,
                      project.videoUrl || project.localVideoUrl ? "video" : "gallery"
                    )
                  }
                >
                  <img
                    src={project.coverImage}
                    alt={t(project.title, lang)}
                    loading="lazy"
                  />
                  {(project.videoUrl || project.localVideoUrl) && (
                    <span className="project-video-pill">
                      <Play size={11} strokeWidth={2} />
                      <span>{t(UI_COPY.projects.videoBadge, lang)}</span>
                    </span>
                  )}
                </div>

                <div className="project-card-body">
                  <div className="project-meta-row">
                    <span>
                      {project.code} · {t(UI_COPY.projects.flagshipBadge, lang)}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="project-title">{t(project.title, lang)}</h3>
                  <p className="project-summary">{t(project.summary, lang)}</p>

                  <div className="project-tags">
                    {project.specs.slice(0, 4).map((spec) => (
                      <span key={spec} className="tag">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <span className="tag tag-accent">{t(project.outcome, lang)}</span>
                    <button
                      type="button"
                      className="project-open-link"
                      onClick={() =>
                        onSelectProject(
                          project,
                          project.videoUrl || project.localVideoUrl ? "video" : "gallery"
                        )
                      }
                    >
                      <span>{t(UI_COPY.projects.inspectBtn, lang)}</span>
                      <ArrowUpRight size={14} strokeWidth={1.7} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="projects-grid">
            {rest.map((project) => (
              <article
                key={project.id}
                className="project-card"
                onPointerMove={(e) => handleTilt(e)}
                onPointerLeave={(e) => handleTilt(e, true)}
              >
                <div
                  className="project-media-wrap"
                  style={{ cursor: "pointer" }}
                  onClick={() => onSelectProject(project, "gallery")}
                >
                  <img
                    src={project.coverImage}
                    alt={t(project.title, lang)}
                    loading="lazy"
                  />
                </div>

                <div className="project-card-body">
                  <div className="project-meta-row">
                    <span>{project.code}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="project-title">{t(project.title, lang)}</h3>
                  <p className="project-summary">{t(project.summary, lang)}</p>

                  <div className="project-tags">
                    {project.specs.slice(0, 3).map((spec) => (
                      <span key={spec} className="tag">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <span className="mono" style={{ fontSize: "0.7rem", color: "var(--ink-muted)" }}>
                      {t(project.role, lang).split(",")[0]}
                    </span>
                    <button
                      type="button"
                      className="project-open-link"
                      onClick={() => onSelectProject(project, "gallery")}
                    >
                      <span>{t(UI_COPY.projects.inspectBtn, lang)}</span>
                      <ArrowUpRight size={14} strokeWidth={1.7} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
