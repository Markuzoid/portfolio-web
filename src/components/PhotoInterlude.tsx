import type { Lang } from "../types/portfolio";
import { UI_COPY, t } from "../data/translations";
import { useParallax } from "../hooks/useMotion";
import { CountUpValue } from "./CountUpValue";

interface PhotoInterludeProps {
  variant: "industry" | "champion";
  lang: Lang;
}

const INTERLUDE_IMAGES: Record<PhotoInterludeProps["variant"], string> = {
  industry: "/assets/linkedin-brin-campus.jpg",
  champion: "/assets/slide-13-gbwc.jpg",
};

export function PhotoInterlude({ variant, lang }: PhotoInterludeProps) {
  const bgRef = useParallax<HTMLDivElement>();
  const copy = UI_COPY.interludes[variant];

  return (
    <section className="interlude" aria-label={t(copy.kicker, lang)}>
      <div
        ref={bgRef}
        className="interlude-bg"
        style={{ backgroundImage: `url("${INTERLUDE_IMAGES[variant]}")` }}
        aria-hidden="true"
      />
      <div className="container interlude-content">
        <div className="interlude-kicker">{t(copy.kicker, lang)}</div>
        <h2 className="interlude-title">{t(copy.title, lang)}</h2>

        <div className="interlude-stats">
          {copy.stats.map((stat, idx) => (
            <div key={idx} className="interlude-stat">
              <div className="interlude-stat-value">
                <CountUpValue text={t(stat.value, lang)} />
              </div>
              <div className="interlude-stat-label">{t(stat.label, lang)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
