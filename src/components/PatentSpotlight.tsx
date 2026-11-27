import { Play } from "lucide-react";
import type { Lang } from "../types/portfolio";
import { UI_COPY, t } from "../data/translations";

interface PatentSpotlightProps {
  lang: Lang;
  onOpenHydrolytixVideo: () => void;
  onZoomImage: (src: string, caption: string) => void;
}

export function PatentSpotlight({
  lang,
  onOpenHydrolytixVideo,
  onZoomImage,
}: PatentSpotlightProps) {
  return (
    <section id="ip-brin" className="section-block">
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-index-dot" aria-hidden="true" />
            <span>{t(UI_COPY.patent.index, lang)}</span>
          </div>
          <div>
            <h2 className="section-title">{t(UI_COPY.patent.title, lang)}</h2>
            <p className="section-lead">{t(UI_COPY.patent.lead, lang)}</p>
          </div>
        </div>

        <div className="dossier-grid">
          <div className="dossier-info">
            <div className="dossier-badge-row">
              <span className="tag tag-teal">{t(UI_COPY.patent.badgeIp, lang)}</span>
              <span className="tag tag-accent">{t(UI_COPY.patent.badgeAward, lang)}</span>
            </div>

            <h3 className="dossier-title">{t(UI_COPY.patent.designTitle, lang)}</h3>
            <p className="dossier-desc">{t(UI_COPY.patent.designDesc, lang)}</p>

            <table className="spec-table">
              <tbody>
                {UI_COPY.patent.rows.map((row, idx) => (
                  <tr key={idx}>
                    <th>{t(row.key, lang)}</th>
                    <td className={idx === 0 ? "mono" : undefined}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              type="button"
              className="btn btn-solid"
              onClick={onOpenHydrolytixVideo}
            >
              <Play size={15} strokeWidth={1.7} />
              <span>{t(UI_COPY.patent.watchHydrolytix, lang)}</span>
            </button>
          </div>

          <div className="dossier-visuals">
            <div className="dossier-cad-box">
              <img
                src="/assets/brin-gms-cad.jpg"
                alt="Gas Monitoring System Industrial Design CAD Isometric View"
                onClick={() =>
                  onZoomImage(
                    "/assets/brin-gms-cad.jpg",
                    "DJKI Industrial Design A00202603133 — Gas Monitoring System (GMS) CAD"
                  )
                }
              />
            </div>
            <div className="dossier-photo-box">
              <img
                src="/assets/slide-08-brin-best.jpg"
                alt="BEST BRIN 2026 Exhibition Showcase in Bandung"
                onClick={() =>
                  onZoomImage(
                    "/assets/slide-08-brin-best.jpg",
                    "Best Finalist — BEST BRIN Smart Technology Exhibition 2026"
                  )
                }
              />
              <div className="fig-caption">
                <span>FIG. 02 — GMS CAD &amp; BEST BRIN 2026 EXHIBITION</span>
                <span>A00202603133</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
