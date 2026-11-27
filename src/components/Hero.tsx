import { useEffect, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { ArrowDownRight, ArrowUpRight, Play } from "lucide-react";
import type { Lang } from "../types/portfolio";
import { CONTACT_INFO } from "../data/profile";
import { UI_COPY, t } from "../data/translations";
import { CountUpValue } from "./CountUpValue";

interface HeroProps {
  lang: Lang;
  onOpenFlagshipVideo: () => void;
  onZoomImage: (src: string, caption: string) => void;
}

function HeroTyper({ roles }: { roles: readonly string[] }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charCount, setCharCount] = useState(roles[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setRoleIdx(0);
    setCharCount(roles[0]?.length ?? 0);
    setDeleting(false);
  }, [roles]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCharCount(roles[0]?.length ?? 0);
      return;
    }

    const current = roles[roleIdx] ?? "";
    let delay = deleting ? 28 : 52;

    if (!deleting && charCount === current.length) {
      delay = 2600;
    } else if (deleting && charCount === 0) {
      delay = 220;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && charCount < current.length) {
        setCharCount((c) => c + 1);
      } else if (!deleting && charCount === current.length) {
        setDeleting(true);
      } else if (deleting && charCount > 0) {
        setCharCount((c) => c - 1);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [roles, roleIdx, charCount, deleting]);

  const activeText = (roles[roleIdx] ?? "").slice(0, charCount);

  return (
    <div className="hero-typer" aria-live="polite">
      <span>{activeText}</span>
    </div>
  );
}

export function Hero({ lang, onOpenFlagshipVideo, onZoomImage }: HeroProps) {
  const portraitCaption = t(UI_COPY.hero.portraitCaption, lang);
  const words = t(UI_COPY.hero.title, lang).split(" ");
  const roles = UI_COPY.hero.roles[lang];

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${x.toFixed(1)}%`);
    e.currentTarget.style.setProperty("--my", `${y.toFixed(1)}%`);
  };

  return (
    <section id="top" className="hero" onPointerMove={handlePointerMove}>
      <div
        className="hero-bg"
        style={{ backgroundImage: 'url("/assets/linkedin-tmind-plant.jpg")' }}
        aria-hidden="true"
      />
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-spotlight" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-kicker">
              <span className="hero-kicker-dot" aria-hidden="true" />
              <span>{t(UI_COPY.hero.kicker, lang)}</span>
            </div>

            <h1 className="hero-title">
              {words.map((word, idx) => (
                <span
                  key={idx}
                  className="word"
                  style={{ "--i": idx } as CSSProperties}
                >
                  {word}
                  {idx < words.length - 1 ? "\u00A0" : ""}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle">{t(UI_COPY.hero.subtitle, lang)}</p>
            <HeroTyper roles={roles} />
            <p className="hero-bio">{t(UI_COPY.hero.bio, lang)}</p>

            <div className="hero-cta-row">
              <a href="#work" className="btn btn-solid">
                <span>{t(UI_COPY.hero.ctaPrimary, lang)}</span>
                <ArrowDownRight size={16} strokeWidth={1.7} />
              </a>

              <button
                type="button"
                className="btn btn-outline"
                onClick={onOpenFlagshipVideo}
              >
                <Play size={15} strokeWidth={1.7} />
                <span>{t(UI_COPY.hero.ctaSecondary, lang)}</span>
              </button>

              <a
                href={CONTACT_INFO.videoPortfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-subtle"
              >
                <span>{t(UI_COPY.hero.videoPortfolioBtn, lang)}</span>
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <figure className="hero-figure" style={{ margin: 0 }}>
            <span className="hud-corner hud-corner--tl" aria-hidden="true" />
            <span className="hud-corner hud-corner--tr" aria-hidden="true" />
            <span className="hud-corner hud-corner--bl" aria-hidden="true" />
            <span className="hud-corner hud-corner--br" aria-hidden="true" />
            <div className="hud-readout" aria-hidden="true">
              <span className="hud-rec-dot" />
              <span>REC · TMMIN / AI-ENG</span>
            </div>

            <img
              src="/assets/hero-portrait.jpg"
              alt="Mark Alexander Ierwanto holding 2nd Place Trophy at BINUS ASO School of Engineering"
              className="hero-figure-img"
              onClick={() => onZoomImage("/assets/hero-portrait.jpg", portraitCaption)}
            />
            <figcaption className="fig-caption">
              <span>{portraitCaption}</span>
              <span>BINUS ASO</span>
            </figcaption>
          </figure>
        </div>

        <div className="credential-strip">
          {UI_COPY.hero.credentials.map((cred, idx) => (
            <div key={idx} className="credential-cell">
              <div className="credential-label">{t(cred.label, lang)}</div>
              <div className="credential-value">
                <CountUpValue text={t(cred.value, lang)} />
              </div>
              <div className="credential-sub">{t(cred.sub, lang)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
