import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "../hooks/useMotion";

export function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}

export function BackToTop() {
  const { scrolled } = useScrollProgress();

  return (
    <button
      type="button"
      className={`to-top ${scrolled ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <svg className="to-top-ring" viewBox="0 0 44 44" aria-hidden="true">
        <circle className="to-top-ring-track" cx="22" cy="22" r="18" />
        <circle className="to-top-ring-progress" cx="22" cy="22" r="18" />
      </svg>
      <ArrowUp size={16} strokeWidth={1.8} />
    </button>
  );
}
