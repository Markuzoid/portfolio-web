import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, FileText } from "lucide-react";
import type { Lang } from "../types/portfolio";
import {
  ALL_HONORS,
  AWARDS,
  CERTIFICATIONS,
  COMMUNITY_ITEMS,
  CONTACT_INFO,
  GLOBAL_EXPERIENCES,
  GOOGLE_CLOUD_BADGES,
  GOOGLE_CLOUD_PROFILE,
  PUBLICATIONS,
} from "../data/profile";
import { UI_COPY, t } from "../data/translations";

import type { RecognitionTab } from "../utils/routing";

interface RecognitionSectionProps {
  lang: Lang;
  activeTab: RecognitionTab;
  onChangeTab: (tab: RecognitionTab) => void;
  onZoomImage: (src: string, caption: string) => void;
}

export function RecognitionSection({
  lang,
  activeTab: tab,
  onChangeTab: setTab,
  onZoomImage,
}: RecognitionSectionProps) {
  const [showAllHonors, setShowAllHonors] = useState(false);
  const [showGcpBadges, setShowGcpBadges] = useState(false);

  const tabs: RecognitionTab[] = ["awards", "certs", "global", "community", "press"];

  return (
    <section id="recognition" className="section-block">
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-index-dot" aria-hidden="true" />
            <span>{t(UI_COPY.recognition.index, lang)}</span>
          </div>
          <div>
            <h2 className="section-title">{t(UI_COPY.recognition.title, lang)}</h2>
            <p className="section-lead">{t(UI_COPY.recognition.lead, lang)}</p>
          </div>
        </div>

        <div className="tabs-bar" role="tablist" aria-label="Recognition categories">
          {tabs.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              className={`tab-btn ${tab === key ? "active" : ""}`}
              onClick={() => setTab(key)}
            >
              {t(UI_COPY.recognition.tabs[key], lang)}
            </button>
          ))}
        </div>

        {tab === "awards" && (
          <>
            <div className="awards-grid">
              {AWARDS.map((award) => {
                const title = t(award.title, lang);
                return (
                  <article key={award.id} className="award-card">
                    <img
                      src={award.image}
                      alt={title}
                      loading="lazy"
                      onClick={() => onZoomImage(award.image, `${award.year} — ${title}`)}
                    />
                    <div className="award-card-body">
                      <div className="mono" style={{ fontSize: "0.7rem", color: "var(--accent-vermilion)" }}>
                        {award.year} · {award.issuer}
                      </div>
                      <h3 style={{ fontSize: "1.02rem", marginTop: "0.3rem", marginBottom: "0.4rem" }}>
                        {title}
                      </h3>
                      <p style={{ fontSize: "0.84rem", color: "var(--ink-secondary)" }}>
                        {t(award.detail, lang)}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="honors-ledger">
              <div className="honors-ledger-head">
                <div>
                  <div className="mono" style={{ fontSize: "0.7rem", color: "var(--ink-muted)" }}>
                    LINKEDIN ARCHIVE · 2017–2026
                  </div>
                  <h3 style={{ fontSize: "1.05rem", marginTop: "0.2rem" }}>
                    {lang === "en"
                      ? `Complete Verified Honors Ledger (${ALL_HONORS.length} Records)`
                      : `Daftar Lengkap Penghargaan Terverifikasi (${ALL_HONORS.length} Rekaman)`}
                  </h3>
                </div>
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ padding: "0.5rem 0.9rem", fontSize: "0.8rem" }}
                  onClick={() => setShowAllHonors((prev) => !prev)}
                >
                  <span>
                    {showAllHonors
                      ? lang === "en"
                        ? "Hide Table"
                        : "Tutup Tabel"
                      : lang === "en"
                        ? "Expand All 36 Honors"
                        : "Lihat Semua 36 Penghargaan"}
                  </span>
                  {showAllHonors ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>

              {showAllHonors && (
                <div className="honors-table-wrap">
                  <table className="honors-table">
                    <thead>
                      <tr>
                        <th>{lang === "en" ? "Date" : "Tanggal"}</th>
                        <th>{lang === "en" ? "Honor / Award" : "Penghargaan"}</th>
                        <th>{lang === "en" ? "Issuer" : "Penyelenggara"}</th>
                        <th>{lang === "en" ? "Scope" : "Tingkat"}</th>
                        <th>{lang === "en" ? "Ref" : "Tautan"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ALL_HONORS.map((h, i) => (
                        <tr key={i}>
                          <td className="mono" style={{ whiteSpace: "nowrap", fontSize: "0.76rem" }}>
                            {h.year}
                          </td>
                          <td style={{ fontWeight: 500 }}>{h.title}</td>
                          <td style={{ color: "var(--ink-secondary)" }}>{h.issuer}</td>
                          <td>
                            <span className="tag">{h.scope}</span>
                          </td>
                          <td>
                            {h.link ? (
                              <a
                                href={h.link}
                                target="_blank"
                                rel="noreferrer"
                                className="project-open-link"
                              >
                                <ArrowUpRight size={14} />
                              </a>
                            ) : (
                              <span className="mono" style={{ color: "var(--ink-muted)" }}>
                                —
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        {tab === "certs" && (
          <>
            <div className="gcp-banner">
              <div className="gcp-banner-head">
                <div>
                  <div className="dossier-badge-row" style={{ marginBottom: "0.45rem" }}>
                    <span className="tag tag-teal">GOOGLE CLOUD SKILLS BOOST</span>
                    <span className="tag tag-accent">
                      {GOOGLE_CLOUD_PROFILE.league} · {GOOGLE_CLOUD_PROFILE.points} PTS
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem" }}>
                    {lang === "en"
                      ? "21 Verified Google Cloud, BigQuery ML, Gemini & Looker Badges"
                      : "21 Badge Terverifikasi Google Cloud, BigQuery ML, Gemini & Looker"}
                  </h3>
                  <p style={{ fontSize: "0.86rem", color: "var(--ink-secondary)", marginTop: "0.3rem" }}>
                    {lang === "en"
                      ? `Active since ${GOOGLE_CLOUD_PROFILE.memberSince} across Looker/LookML modeling, BigQuery Gemini AI, and Cloud Networking & Security.`
                      : `Aktif sejak ${GOOGLE_CLOUD_PROFILE.memberSince} di jalur pemodelan Looker/LookML, BigQuery Gemini AI, serta Jaringan & Keamanan Cloud.`}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  <button
                    type="button"
                    className="btn btn-outline"
                    style={{ padding: "0.55rem 0.9rem", fontSize: "0.8rem" }}
                    onClick={() => setShowGcpBadges((p) => !p)}
                  >
                    <span>
                      {showGcpBadges
                        ? lang === "en"
                          ? "Hide 21 Badges"
                          : "Tutup 21 Badge"
                        : lang === "en"
                          ? "Show All 21 Badges"
                          : "Tampilkan 21 Badge"}
                    </span>
                    {showGcpBadges ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>

                  <a
                    href={GOOGLE_CLOUD_PROFILE.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-solid"
                    style={{ padding: "0.55rem 0.9rem", fontSize: "0.8rem" }}
                  >
                    <span>{lang === "en" ? "Public Profile" : "Profil Publik"}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {showGcpBadges && (
                <div className="gcp-badges-grid">
                  {GOOGLE_CLOUD_BADGES.map((badge) => (
                    <a
                      key={badge.id}
                      href={badge.url}
                      target="_blank"
                      rel="noreferrer"
                      className="gcp-badge-item"
                    >
                      <div className="mono" style={{ fontSize: "0.68rem", color: "var(--ink-muted)" }}>
                        {badge.track} · {badge.earned}
                      </div>
                      <div style={{ fontWeight: 500, fontSize: "0.86rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
                        <span>{badge.title}</span>
                        <ArrowUpRight size={14} style={{ flexShrink: 0 }} />
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <div className="mono" style={{ fontSize: "0.75rem", color: "var(--ink-muted)" }}>
                GOOGLE DRIVE CERTIFICATE ARCHIVE · {CERTIFICATIONS.length} FILES
              </div>
              <a
                href={CONTACT_INFO.driveCertFolderUrl}
                target="_blank"
                rel="noreferrer"
                className="project-open-link"
              >
                <span>
                  {lang === "en"
                    ? "Open Drive Certificates Folder"
                    : "Buka Folder Sertifikat Google Drive"}
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="awards-grid">
              {CERTIFICATIONS.map((cert) => (
                <article key={cert.id} className="award-card">
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      style={{ objectFit: "contain", backgroundColor: "#f4f6f8" }}
                      onClick={() => onZoomImage(cert.image!, cert.title)}
                    />
                  )}
                  <div
                    className="award-card-body"
                    style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between", gap: "0.65rem" }}
                  >
                    <div>
                      <div className="mono" style={{ fontSize: "0.7rem", color: "var(--ink-muted)" }}>
                        {cert.year} · {cert.issuer}
                      </div>
                      <h3 style={{ fontSize: "1.02rem", marginTop: "0.3rem", marginBottom: "0.35rem" }}>
                        {cert.title}
                      </h3>
                      <p style={{ fontSize: "0.84rem", color: "var(--ink-secondary)" }}>
                        {t(cert.detail, lang)}
                      </p>
                    </div>

                    {(cert.url || cert.pdf) && (
                      <div style={{ paddingTop: "0.55rem", borderTop: "1px solid var(--bg-recessed)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
                        {cert.category ? <span className="tag">{cert.category}</span> : <span />}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          {cert.pdf && (
                            <a
                              href={cert.pdf}
                              target="_blank"
                              rel="noreferrer"
                              className="project-open-link"
                            >
                              <FileText size={14} />
                              <span>PDF</span>
                            </a>
                          )}
                          {cert.url && (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noreferrer"
                              className="project-open-link"
                            >
                              <span>{lang === "en" ? "View Proof" : "Lihat Bukti"}</span>
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {tab === "global" && (
          <div className="global-layout">
            <figure style={{ margin: 0, border: "1px solid var(--border-hairline)", backgroundColor: "var(--bg-surface)" }}>
              <img
                src="/assets/slide-45-global.jpg"
                alt="Global Experience across Singapore, Japan, Thailand, and Hong Kong"
                style={{ cursor: "zoom-in", width: "100%", height: "auto" }}
                onClick={() =>
                  onZoomImage(
                    "/assets/slide-45-global.jpg",
                    "Global Exposure — Singapore, Japan, Thailand & Hong Kong"
                  )
                }
              />
              <figcaption className="fig-caption">
                <span>FIG. 06 — SG · JP · TH · HK EXPOSURE</span>
                <span>4 COUNTRIES</span>
              </figcaption>
            </figure>

            <div className="global-cards">
              {GLOBAL_EXPERIENCES.map((g) => (
                <div key={g.id} className="info-card">
                  <div className="mono" style={{ fontSize: "0.7rem", color: "var(--accent-vermilion)" }}>
                    {g.code}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", marginTop: "0.3rem", marginBottom: "0.35rem" }}>
                    {t(g.title, lang)}
                  </h3>
                  <div className="tag" style={{ marginBottom: "0.6rem" }}>
                    {t(g.tag, lang)}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--ink-secondary)" }}>
                    {t(g.summary, lang)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "community" && (
          <div className="global-layout">
            <figure style={{ margin: 0, border: "1px solid var(--border-hairline)", backgroundColor: "var(--bg-surface)" }}>
              <img
                src="/assets/slide-43-community.jpg"
                alt="Community Service and Film Via Dolorosa Production"
                style={{ cursor: "zoom-in", width: "100%", height: "auto" }}
                onClick={() =>
                  onZoomImage(
                    "/assets/slide-43-community.jpg",
                    "Community Service & Documentary Film Production (Surabaya)"
                  )
                }
              />
              <figcaption className="fig-caption">
                <span>FIG. 07 — COMMUNITY MEDIA &amp; VOLUNTEERING</span>
                <span>2016–PRESENT</span>
              </figcaption>
            </figure>

            <div className="global-cards">
              {COMMUNITY_ITEMS.map((c) => (
                <div key={c.id} className="info-card">
                  <div className="mono" style={{ fontSize: "0.7rem", color: "var(--ink-muted)" }}>
                    {c.period} · {t(c.tag, lang)}
                  </div>
                  <h3 style={{ fontSize: "1.04rem", marginTop: "0.3rem", marginBottom: "0.25rem" }}>
                    {t(c.title, lang)}
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "var(--accent-teal)", fontWeight: 500, marginBottom: "0.45rem" }}>
                    {c.org}
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "var(--ink-secondary)" }}>
                    {t(c.summary, lang)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "press" && (
          <div className="press-list">
            {PUBLICATIONS.map((pub) => (
              <a
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                className="press-row"
              >
                <div>
                  <div className="mono" style={{ fontSize: "0.72rem", color: "var(--ink-muted)" }}>
                    {pub.year} · {pub.outlet}
                  </div>
                  <div style={{ fontWeight: 500, fontSize: "0.96rem", marginTop: "0.2rem" }}>
                    {pub.title}
                  </div>
                </div>
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
