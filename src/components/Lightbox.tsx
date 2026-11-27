import { useEffect } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  image: { src: string; caption: string } | null;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close fullscreen view"
        style={{
          position: "fixed",
          top: "1.25rem",
          right: "1.25rem",
          width: "40px",
          height: "40px",
          backgroundColor: "#ffffff",
          color: "#141413",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "2px",
        }}
      >
        <X size={20} strokeWidth={1.8} />
      </button>

      <img
        src={image.src}
        alt={image.caption}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="lightbox-caption">{image.caption}</p>
    </div>
  );
}
