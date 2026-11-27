import { useEffect, useState } from "react";
import { Check, ExternalLink, Film, Images, Link2, X } from "lucide-react";
import type { Lang, Project } from "../types/portfolio";
import { CONTACT_INFO } from "../data/profile";
import { UI_COPY, t } from "../data/translations";
import { resolveVideoSource } from "../utils/media";

interface ProjectModalProps {
  project: Project | null;
  initialTab: "video" | "gallery";
  lang: Lang;
  onClose: () => void;
  onZoomImage: (src: string, caption: string) => void;
}

export function ProjectModal({
  project,
  initialTab,
  lang,
  onClose,
  onZoomImage,
}: ProjectModalProps) {
  const hasVideoEntry = Boolean(project?.videoUrl || project?.localVideoUrl);
  const [tab, setTab] = useState<"video" | "gallery">(initialTab);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setTab(project && (project.videoUrl || project.localVideoUrl) ? initialTab : "gallery");
    setCopiedLink(false);
  }, [project, initialTab]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const videoSource = hasVideoEntry
    ? resolveVideoSource(
        project.videoUrl,
        project.localVideoUrl,
        CONTACT_INFO.videoPortfolioUrl
      )
    : null;

  const copyDirectLink = async () => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : CONTACT_INFO.portfolioHubUrl.replace(/\/$/, "");
    const shareUrl = `${origin}/projects/${project.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 1800);
    } catch {
      // Ignore clipboard failure
    }
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="mono" style={{ fontSize: "0.72rem", color: "var(--ink-muted)" }}>
              {project.code} · {project.year}
            </div>
            <h3 id="modal-project-title" style={{ fontSize: "1.25rem", marginTop: "0.2rem" }}>
              {t(project.title, lang)}
            </h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              type="button"
              className="btn btn-subtle"
              style={{ padding: "0.45rem 0.7rem", fontSize: "0.75rem" }}
              onClick={copyDirectLink}
            >
              {copiedLink ? <Check size={14} /> : <Link2 size={14} />}
              <span>
                {copiedLink
                  ? t(UI_COPY.modal.linkCopied, lang)
                  : t(UI_COPY.modal.copyLink, lang)}
              </span>
            </button>

            <button
              type="button"
              className="btn btn-subtle"
              style={{ padding: "0.45rem 0.7rem" }}
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={18} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          {videoSource && (
            <div className="tabs-bar" style={{ marginBottom: "1.25rem" }}>
              <button
                type="button"
                className={`tab-btn ${tab === "video" ? "active" : ""}`}
                onClick={() => setTab("video")}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <Film size={14} strokeWidth={1.6} />
                  {t(UI_COPY.modal.videoTab, lang)}
                </span>
              </button>
              <button
                type="button"
                className={`tab-btn ${tab === "gallery" ? "active" : ""}`}
                onClick={() => setTab("gallery")}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <Images size={14} strokeWidth={1.6} />
                  {t(UI_COPY.modal.galleryTab, lang)} ({project.gallery.length})
                </span>
              </button>
            </div>
          )}

          {videoSource && tab === "video" ? (
            <div style={{ marginBottom: "1.5rem" }}>
              {videoSource.kind === "mp4" ? (
                <video
                  key={videoSource.src}
                  className="modal-video"
                  controls
                  preload="metadata"
                  playsInline
                  poster={project.coverImage}
                >
                  <source src={videoSource.src} type="video/mp4" />
                </video>
              ) : (
                <iframe
                  key={videoSource.embedUrl}
                  className="modal-video-embed"
                  src={videoSource.embedUrl}
                  title={t(project.title, lang)}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              )}
              <div
                className="fig-caption"
                style={{ border: "1px solid var(--border-hairline)", borderTop: "none" }}
              >
                <span>
                  {project.videoLabel ? t(project.videoLabel, lang) : t(project.title, lang)}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
                  <span>{videoSource.badge}</span>
                  {videoSource.openUrl && (
                    <a
                      href={videoSource.openUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-open-link"
                    >
                      <span>{t(UI_COPY.modal.openDrive, lang)}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </span>
              </div>
              {videoSource.isFallbackReel && (
                <p
                  className="mono"
                  style={{ fontSize: "0.7rem", color: "var(--ink-muted)", marginTop: "0.55rem" }}
                >
                  {t(UI_COPY.modal.reelFallbackNote, lang)}
                </p>
              )}
            </div>
          ) : (
            <div style={{ marginBottom: "1.5rem" }}>
              <div className="modal-gallery">
                {project.gallery.map((img, i) => {
                  const cap = t(img.caption, lang);
                  return (
                    <figure
                      key={img.src + i}
                      style={{
                        margin: 0,
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-hairline)",
                      }}
                    >
                      <img
                        src={img.src}
                        alt={cap}
                        onClick={() => onZoomImage(img.src, cap)}
                      />
                      <figcaption className="fig-caption">
                        <span>{cap}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
              <p
                className="mono"
                style={{ fontSize: "0.7rem", color: "var(--ink-muted)", marginTop: "0.55rem" }}
              >
                {t(UI_COPY.modal.clickZoom, lang)}
              </p>
            </div>
          )}

          <table className="spec-table">
            <tbody>
              <tr>
                <th>{t(UI_COPY.modal.context, lang)}</th>
                <td>{t(project.context, lang)}</td>
              </tr>
              <tr>
                <th>{t(UI_COPY.modal.role, lang)}</th>
                <td>{t(project.role, lang)}</td>
              </tr>
              <tr>
                <th>{t(UI_COPY.modal.outcome, lang)}</th>
                <td style={{ color: "var(--accent-vermilion)" }}>{t(project.outcome, lang)}</td>
              </tr>
            </tbody>
          </table>

          <h4 style={{ fontSize: "1rem", marginBottom: "0.65rem" }}>
            {t(UI_COPY.modal.accomplishments, lang)}
          </h4>
          <ul className="exp-bullets" style={{ marginBottom: "1.25rem" }}>
            {project.accomplishments[lang].map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          <div className="project-tags" style={{ marginBottom: 0 }}>
            {project.specs.map((spec) => (
              <span key={spec} className="tag">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
