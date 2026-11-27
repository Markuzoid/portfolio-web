import { useState } from "react";
import { ArrowLeft, Menu, Moon, Sun, X } from "lucide-react";
import type { Lang, ThemeMode } from "../types/portfolio";
import { CONTACT_INFO } from "../data/profile";
import { UI_COPY, t } from "../data/translations";
import { useActiveSection } from "../hooks/useMotion";

interface NavbarProps {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const SECTION_IDS = ["work", "ip-brin", "craft", "background", "recognition", "contact"];

export function Navbar({ lang, onChangeLang, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const links = [
    { href: "#work", label: t(UI_COPY.nav.work, lang) },
    { href: "#ip-brin", label: t(UI_COPY.nav.ip, lang) },
    { href: "#craft", label: t(UI_COPY.nav.craft, lang) },
    { href: "#background", label: t(UI_COPY.nav.background, lang) },
    { href: "#recognition", label: t(UI_COPY.nav.recognition, lang) },
    { href: "#contact", label: t(UI_COPY.nav.contact, lang) },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand-mark">
          <span className="brand-cube" aria-hidden="true" />
          <span>Mark A. Ierwanto</span>
        </a>

        <nav className="nav-links" aria-label="Primary Navigation">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeId === item.href.slice(1) ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={CONTACT_INFO.mainSiteUrl}
            className="main-site-link desktop-only"
            title="markalexanderierwanto.com"
          >
            <ArrowLeft size={13} strokeWidth={1.7} />
            <span>{t(UI_COPY.nav.mainSite, lang)}</span>
          </a>

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? t(UI_COPY.nav.themeLight, lang)
                : t(UI_COPY.nav.themeDark, lang)
            }
          >
            {theme === "dark" ? (
              <Sun size={14} strokeWidth={1.7} />
            ) : (
              <Moon size={14} strokeWidth={1.7} />
            )}
            <span>
              {theme === "dark"
                ? t(UI_COPY.nav.themeLight, lang)
                : t(UI_COPY.nav.themeDark, lang)}
            </span>
          </button>

          <div className="lang-switch" role="group" aria-label="Language switcher">
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => onChangeLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "id" ? "active" : ""}
              onClick={() => onChangeLang("id")}
            >
              ID
            </button>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            {open ? <X size={18} strokeWidth={1.6} /> : <Menu size={18} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-drawer" aria-label="Mobile Navigation">
          <a href={CONTACT_INFO.mainSiteUrl} onClick={() => setOpen(false)}>
            ← {t(UI_COPY.nav.mainSite, lang)} (markalexanderierwanto.com)
          </a>
          {links.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
