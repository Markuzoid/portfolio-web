import { useEffect, useRef, useState } from "react";
import type { DependencyList } from "react";

const REVEAL_SELECTOR =
  ".section-header, .project-card, .award-card, .info-card, .press-row, .credential-cell, .gcp-badge-item, .exp-item";

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function tagRevealElements(root: ParentNode, io: IntersectionObserver) {
  const nodes = root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
  nodes.forEach((el) => {
    if (!el.hasAttribute("data-reveal")) {
      el.setAttribute("data-reveal", "");
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((child) =>
          child.matches(REVEAL_SELECTOR)
        );
        const idx = Math.max(0, siblings.indexOf(el));
        el.style.setProperty("--reveal-i", String(idx % 6));
      }
    }
    if (!el.classList.contains("is-visible")) {
      io.observe(el);
    }
  });
}

export function useScrollReveal(deps: DependencyList = []) {
  useEffect(() => {
    const html = document.documentElement;
    if (prefersReducedMotion()) {
      html.classList.remove("js-reveal");
      return;
    }

    html.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    const mainEl = document.querySelector("main") ?? document.body;
    tagRevealElements(mainEl, io);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          tagRevealElements(mainEl, io);
          break;
        }
      }
    });
    mo.observe(mainEl, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function useScrollProgress(): { scrolled: boolean } {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const scrollTop = window.scrollY;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
      document.documentElement.style.setProperty("--progress", progress.toFixed(4));
      setScrolled(scrollTop > 600);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return { scrolled };
}

export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>("");
  const key = ids.join(",");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return activeId;
}

export function useCountUp<T extends HTMLElement = HTMLElement>(
  target: number,
  duration = 1400
): [React.RefObject<T | null>, number] {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState<number>(() =>
    prefersReducedMotion() ? target : 0
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          started = true;
          io.disconnect();
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - elapsed, 3);
            setValue(target * eased);
            if (elapsed < 1) {
              rafId = window.requestAnimationFrame(tick);
            } else {
              setValue(target);
            }
          };

          rafId = window.requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [target, duration]);

  return [ref, value];
}

export function useParallax<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const el = ref.current;
      if (!el) return;
      if (window.innerWidth < 768) {
        el.style.setProperty("--py", "0px");
        return;
      }
      const parent = el.parentElement ?? el;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      const offset = (rect.top + rect.height / 2 - vh / 2) * -0.15;
      el.style.setProperty("--py", `${offset.toFixed(1)}px`);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return ref;
}
