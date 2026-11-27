import type { Lang } from "../types/portfolio";
import { GBWC_HISTORY } from "../data/profile";
import { UI_COPY, t } from "../data/translations";

interface CraftShowcaseProps {
  lang: Lang;
  onZoomImage: (src: string, caption: string) => void;
}

export function CraftShowcase({ lang, onZoomImage }: CraftShowcaseProps) {
  return (
    <section id="craft" className="section-block">
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-index-dot" aria-hidden="true" />
            <span>{t(UI_COPY.craft.index, lang)}</span>
          </div>
          <div>
            <h2 className="section-title">{t(UI_COPY.craft.title, lang)}</h2>
            <p className="section-lead">{t(UI_COPY.craft.lead, lang)}</p>
          </div>
        </div>

        <div className="craft-grid">
          <div className="craft-gallery">
            <figure className="craft-figure wide" style={{ margin: 0 }}>
              <img
                src="/assets/slide-13-gbwc.jpg"
                alt="Gunpla Builders World Cup 2018 1st World Champion Tokyo and multi-year awards"
                onClick={() =>
                  onZoomImage(
                    "/assets/slide-13-gbwc.jpg",
                    "Gunpla Builders World Cup — 2018 1st World Champion (Tokyo) & 2017–2024 Records"
                  )
                }
              />
              <figcaption className="fig-caption">
                <span>FIG. 03 — GBWC 2018 1ST WORLD CHAMPION (TOKYO)</span>
                <span>2017–2024</span>
              </figcaption>
            </figure>

            <figure className="craft-figure" style={{ margin: 0 }}>
              <img
                src="/assets/slide-23-innovedu-trophy.jpg"
                alt="INNOVEDU 3D-printed custom trophies"
                onClick={() =>
                  onZoomImage(
                    "/assets/slide-23-innovedu-trophy.jpg",
                    "INNOVEDU Custom 3D-Printed & Airbrushed Competition Trophies"
                  )
                }
              />
              <figcaption className="fig-caption">
                <span>FIG. 04 — INNOVEDU TROPHIES</span>
              </figcaption>
            </figure>

            <figure className="craft-figure" style={{ margin: 0 }}>
              <img
                src="/assets/slide-03-about.jpg"
                alt="Precision scale assembly and engineering workbench"
                onClick={() =>
                  onZoomImage(
                    "/assets/slide-03-about.jpg",
                    "Precision Scale Modeling & Mechatronics Workbench"
                  )
                }
              />
              <figcaption className="fig-caption">
                <span>FIG. 05 — PRECISION ASSEMBLY</span>
              </figcaption>
            </figure>
          </div>

          <div className="craft-timeline">
            <div>
              <div className="mono" style={{ fontSize: "0.74rem", color: "var(--ink-muted)", marginBottom: "1rem", textTransform: "uppercase" }}>
                {t(UI_COPY.craft.trackTitle, lang)}
              </div>

              {GBWC_HISTORY.map((item) => (
                <div key={item.year + item.title.en} className="craft-row">
                  <span className="mono" style={{ fontSize: "0.82rem", fontWeight: 600, color: item.year === "2018" ? "var(--accent-vermilion)" : "var(--ink-primary)" }}>
                    {item.year}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "var(--ink-secondary)" }}>
                    {t(item.title, lang)}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-hairline)", fontSize: "0.85rem", color: "var(--ink-muted)" }}>
              {lang === "en"
                ? "Precision tooling, custom CAD geometry, and airbrush finishing carried directly from world-championship modeling into robotics enclosures and commercial Olympiad hardware."
                : "Ketelitian perakitan, pemodelan CAD, dan teknik finishing airbrush diterapkan langsung ke bodi robot dan produksi piala olimpiade internasional."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
