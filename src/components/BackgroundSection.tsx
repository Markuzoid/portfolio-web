import type { Lang } from "../types/portfolio";
import { EDUCATION, EXPERIENCES, SKILL_DOMAINS } from "../data/profile";
import { UI_COPY, t } from "../data/translations";

interface BackgroundSectionProps {
  lang: Lang;
  onZoomImage: (src: string, caption: string) => void;
}

export function BackgroundSection({ lang, onZoomImage }: BackgroundSectionProps) {
  const workItems = EXPERIENCES.filter((e) => e.kind === "work");
  const orgItems = EXPERIENCES.filter((e) => e.kind === "leadership");

  return (
    <section id="background" className="section-block">
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-index-dot" aria-hidden="true" />
            <span>{t(UI_COPY.background.index, lang)}</span>
          </div>
          <div>
            <h2 className="section-title">{t(UI_COPY.background.title, lang)}</h2>
            <p className="section-lead">{t(UI_COPY.background.lead, lang)}</p>
          </div>
        </div>

        <div className="background-grid">
          <div>
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.85rem" }}>
              {t(UI_COPY.background.workHeading, lang)}
            </h3>
            <div className="exp-list" style={{ marginBottom: "2.25rem" }}>
              {workItems.map((item) => (
                <div key={item.id} className="exp-item">
                  <div className="exp-top">
                    <span className="exp-role">{t(item.role, lang)}</span>
                    <span className="exp-period">{item.period}</span>
                  </div>
                  <div className="exp-org">
                    {item.organization} · {item.location}
                  </div>
                  <ul className="exp-bullets">
                    {item.bullets[lang].map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {item.images && item.images.length > 0 && (
                    <div className="exp-thumbs">
                      {item.images.map((img) => (
                        <figure
                          key={img.src}
                          className="exp-thumb-card"
                          onClick={() => onZoomImage(img.src, img.caption)}
                        >
                          <img src={img.src} alt={img.caption} loading="lazy" />
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h3 id="organization" style={{ fontSize: "1.15rem", marginBottom: "0.85rem" }}>
              {t(UI_COPY.background.orgHeading, lang)}
            </h3>
            <div className="exp-list">
              {orgItems.map((item) => (
                <div key={item.id} className="exp-item">
                  <div className="exp-top">
                    <span className="exp-role">{t(item.role, lang)}</span>
                    <span className="exp-period">{item.period}</span>
                  </div>
                  <div className="exp-org">
                    {item.organization} · {item.location}
                  </div>
                  <ul className="exp-bullets">
                    {item.bullets[lang].map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-stack">
            <div className="edu-panel">
              <div className="skill-panel-title">{t(UI_COPY.background.eduHeading, lang)}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem" }}>
                {EDUCATION.university}
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--ink-secondary)", marginTop: "0.25rem" }}>
                {t(EDUCATION.degree, lang)}
              </div>
              <div className="mono" style={{ fontSize: "0.75rem", color: "var(--accent-vermilion)", marginTop: "0.45rem" }}>
                {EDUCATION.period} · GPA {EDUCATION.gpa}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-muted)", marginTop: "0.45rem" }}>
                {EDUCATION.highSchool}
              </div>

              <div className="skill-chips" style={{ marginTop: "0.9rem" }}>
                {EDUCATION.languages.map((l) => (
                  <span key={l.name.en} className="tag">
                    {t(l.name, lang)} — {t(l.level, lang)}
                  </span>
                ))}
              </div>
            </div>

            {SKILL_DOMAINS.map((domain) => (
              <div key={domain.title.en} className="skill-panel">
                <div className="skill-panel-title">{t(domain.title, lang)}</div>
                <div className="skill-chips">
                  {domain.items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
