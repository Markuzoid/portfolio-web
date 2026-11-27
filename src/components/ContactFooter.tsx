import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import type { Lang } from "../types/portfolio";
import { CONTACT_INFO } from "../data/profile";
import { UI_COPY, t } from "../data/translations";

interface ContactFooterProps {
  lang: Lang;
}

export function ContactFooter({ lang }: ContactFooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const buildFormattedBody = () =>
    `Name: ${name}\nEmail: ${email}\n\n${message}`.trim();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(buildFormattedBody());
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(
        `To: ${CONTACT_INFO.email}\n${buildFormattedBody()}`
      );
      setCopiedMsg(true);
      setTimeout(() => setCopiedMsg(false), 1800);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <>
      <section id="contact" className="section-block">
        <div className="container">
          <div className="section-header">
            <div className="section-index">
              <span className="section-index-dot" aria-hidden="true" />
              <span>{t(UI_COPY.contact.index, lang)}</span>
            </div>
            <div>
              <h2 className="section-title">{t(UI_COPY.contact.title, lang)}</h2>
              <p className="section-lead">{t(UI_COPY.contact.lead, lang)}</p>
            </div>
          </div>

          <div className="contact-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div className="contact-item">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Mail size={17} strokeWidth={1.6} />
                  <div>
                    <div className="mono" style={{ fontSize: "0.68rem", color: "var(--ink-muted)" }}>
                      EMAIL
                    </div>
                    <a href={`mailto:${CONTACT_INFO.email}`} style={{ fontWeight: 500, fontSize: "0.94rem" }}>
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <button type="button" className="btn btn-subtle" style={{ padding: "0.4rem 0.7rem", fontSize: "0.75rem" }} onClick={copyEmail}>
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? t(UI_COPY.contact.copied, lang) : t(UI_COPY.contact.copyEmail, lang)}</span>
                </button>
              </div>

              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "var(--ink-muted)" }}>
                    LINKEDIN
                  </div>
                  <div style={{ fontWeight: 500, fontSize: "0.94rem" }}>
                    {CONTACT_INFO.linkedinLabel}
                  </div>
                </div>
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>

              <a
                href={CONTACT_INFO.videoPortfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "var(--ink-muted)" }}>
                    VIDEO PORTFOLIO
                  </div>
                  <div style={{ fontWeight: 500, fontSize: "0.94rem" }}>
                    Engineering Video Reel (Google Drive)
                  </div>
                </div>
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>

              <a
                href={CONTACT_INFO.canvaUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "var(--ink-muted)" }}>
                    ARCHIVAL DECK
                  </div>
                  <div style={{ fontWeight: 500, fontSize: "0.94rem" }}>
                    mark-alexander-ierwanto.my.canva.site
                  </div>
                </div>
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>

              <div className="contact-item">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <MapPin size={17} strokeWidth={1.6} />
                  <div>
                    <div className="mono" style={{ fontSize: "0.68rem", color: "var(--ink-muted)" }}>
                      BASE
                    </div>
                    <div style={{ fontWeight: 500, fontSize: "0.94rem" }}>
                      {t(CONTACT_INFO.location, lang)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="form-panel" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">{t(UI_COPY.contact.formName, lang)}</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">{t(UI_COPY.contact.formEmail, lang)}</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">{t(UI_COPY.contact.formMessage, lang)}</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <button type="submit" className="btn btn-solid">
                  {t(UI_COPY.contact.sendBtn, lang)}
                </button>
                <button type="button" className="btn btn-outline" onClick={copyMessage}>
                  {copiedMsg ? t(UI_COPY.contact.copied, lang) : t(UI_COPY.contact.copyMsgBtn, lang)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer-bar">
        <div className="container footer-bar-inner">
          <span>© 2026 MARK ALEXANDER IERWANTO · PORTFOLIO HUB</span>
          <span>
            <a href={CONTACT_INFO.mainSiteUrl} style={{ textDecoration: "underline" }}>
              markalexanderierwanto.com
            </a>{" "}
            · AUTOMOTIVE &amp; ROBOTICS ENGINEERING · BINUS ASO
          </span>
        </div>
      </footer>
    </>
  );
}
