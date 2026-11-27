import type { Lang } from "../types/portfolio";
import { UI_COPY, t } from "../data/translations";

interface HighlightsMarqueeProps {
  lang: Lang;
}

export function HighlightsMarquee({ lang }: HighlightsMarqueeProps) {
  const renderGroup = (hidden = false) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {UI_COPY.highlights.map((item, idx) => (
        <span key={idx} className="marquee-item">
          <span className="marquee-sep" aria-hidden="true">
            ◆{" "}
          </span>
          {t(item, lang)}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-label="Career and engineering highlights">
      <div className="marquee-track">
        {renderGroup(false)}
        {renderGroup(true)}
      </div>
    </div>
  );
}
