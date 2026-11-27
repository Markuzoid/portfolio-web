import type { Lang } from "../types/portfolio";

export const UI_COPY = {
  nav: {
    mainSite: { en: "Main Site", id: "Web Utama" },
    work: { en: "Work", id: "Karya" },
    ip: { en: "IP & BRIN", id: "HKI & BRIN" },
    craft: { en: "Craft", id: "Kriya 3D" },
    background: { en: "Background", id: "Pengalaman" },
    recognition: { en: "Recognition", id: "Rekognisi" },
    contact: { en: "Contact", id: "Kontak" },
    themeLight: { en: "Light", id: "Terang" },
    themeDark: { en: "Dark", id: "Gelap" },
  },
  hero: {
    kicker: {
      en: "AI ENGINEER INTERN @ TOYOTA (TMMIN) · EX-BRIN SMART MECHATRONICS · BINUS ASO (GPA 3.68)",
      id: "AI ENGINEER INTERN @ TOYOTA (TMMIN) · EX-BRIN MEKATRONIKA CERDAS · BINUS ASO (IPK 3.68)",
    },
    title: {
      en: "Mark Alexander Ierwanto",
      id: "Mark Alexander Ierwanto",
    },
    subtitle: {
      en: "AI Engineer Intern at Toyota Motor Manufacturing Indonesia | Robotics & Industrial CAD Systems.",
      id: "AI Engineer Intern di Toyota Motor Manufacturing Indonesia | Sistem Robotika & CAD Industrial.",
    },
    roles: {
      en: [
        "Edge AI & Automotive Co-Pilots",
        "ROS 2 & Smart Mechatronics",
        "CAD-to-Hardware Fabrication",
        "Embedded CAN-Bus & Industrial IoT",
      ],
      id: [
        "Edge AI & Co-Pilot Otomotif",
        "ROS 2 & Mekatronika Cerdas",
        "Fabrikasi CAD-to-Hardware",
        "Embedded CAN-Bus & IoT Industri",
      ],
    },
    bio: {
      en: "Undergraduate Automotive & Robotics engineer building physical-digital systems from CAD and CAN-bus/IoT hardware to edge AI. Currently interning as an AI Engineer in TMMIN's Capability Center (Future Skill Development), following a research internship at BRIN Bandung (DJKI Patent A00202603133), 2nd Place at TSAI 2026, and 1st World Champion at GBWC 2018 Tokyo.",
      id: "Mahasiswa Teknik Otomotif & Robotika yang merancang sistem fisik-digital mulai dari CAD dan perangkat keras CAN-bus/IoT hingga edge AI. Saat ini magang sebagai AI Engineer di Capability Center TMMIN (Future Skill Development), setelah sebelumnya magang riset di BRIN Bandung (HKI DJKI A00202603133), meraih Juara 2 TSAI 2026, dan Juara Dunia 1 GBWC 2018 Tokyo.",
    },
    ctaPrimary: {
      en: "View Selected Work (11)",
      id: "Lihat Karya Pilihan (11)",
    },
    ctaSecondary: {
      en: "Watch Demo Reels",
      id: "Tonton Video Demo",
    },
    videoPortfolioBtn: {
      en: "Video Portfolio",
      id: "Video Portfolio",
    },
    portraitCaption: {
      en: "FIG. 00 — 2ND PLACE, TOYOTA SOFTWARE ACADEMY INDONESIA 2026",
      id: "FIG. 00 — JUARA 2, TOYOTA SOFTWARE ACADEMY INDONESIA 2026",
    },
    credentials: [
      {
        label: { en: "CURRENT ROLE · TMMIN", id: "PERAN SAAT INI · TMMIN" },
        value: { en: "AI Engineer Intern", id: "AI Engineer Intern" },
        sub: { en: "Aug 2026 – Present · 2nd Place TSAI", id: "Agu 2026 – Sekarang · Juara 2 TSAI" },
      },
      {
        label: { en: "REGISTERED IP · DJKI", id: "HKI TERDAFTAR · DJKI" },
        value: { en: "No. A00202603133", id: "No. A00202603133" },
        sub: { en: "BRIN Gas Monitoring System", id: "Gas Monitoring System BRIN" },
      },
      {
        label: { en: "WORLD CHAMPIONSHIP", id: "KEJUARAAN DUNIA" },
        value: { en: "1st World Champion", id: "Juara Dunia 1" },
        sub: { en: "GBWC 2018 Tokyo, Japan", id: "GBWC 2018 Tokyo, Jepang" },
      },
      {
        label: { en: "ACADEMIC & CLOUD", id: "AKADEMIK & CLOUD" },
        value: { en: "PILMAPRES · GCP Diamond", id: "PILMAPRES · GCP Diamond" },
        sub: { en: "15,873 pts · 3× Outstanding Student", id: "15.873 poin · 3× Mawapres" },
      },
    ],
  },
  projects: {
    index: { en: "01 / SELECTED WORK", id: "01 / KARYA PILIHAN" },
    title: {
      en: "Engineering, Robotics & Systems Index",
      id: "Indeks Rekayasa, Robotika & Sistem",
    },
    lead: {
      en: "Eleven documented builds spanning edge-AI automotive co-pilots, BRIN industrial IoT instrumentation, autonomous robots, FPGA digital logic, and custom 3D fabrication.",
      id: "Sebelas proyek terdokumentasi mulai dari co-pilot otomotif edge-AI, instrumentasi IoT industri BRIN, robot otonom, logika digital FPGA, hingga fabrikasi 3D presisi.",
    },
    filters: {
      all: { en: "All", id: "Semua" },
      "ai-robotics": { en: "AI & Robotics", id: "AI & Robotika" },
      "iot-embedded": { en: "IoT & Embedded", id: "IoT & Embedded" },
      "industrial-3d": { en: "Industrial 3D & Craft", id: "3D & Desain Produk" },
      "digital-ml": { en: "Digital Systems & ML", id: "Sistem Digital & ML" },
    },
    flagshipBadge: { en: "FLAGSHIP BUILD", id: "PROYEK UTAMA" },
    videoBadge: { en: "DEMO VIDEO", id: "VIDEO DEMO" },
    inspectBtn: { en: "Inspect Dossier", id: "Buka Detail" },
  },
  modal: {
    videoTab: { en: "Demo Video", id: "Video Demo" },
    galleryTab: { en: "Gallery & Slides", id: "Galeri & Slide" },
    year: { en: "Period", id: "Periode" },
    context: { en: "Context", id: "Institusi / Konteks" },
    role: { en: "Role", id: "Peran" },
    outcome: { en: "Outcome", id: "Capaian" },
    accomplishments: {
      en: "Technical Contributions & Architecture",
      id: "Kontribusi Teknis & Arsitektur",
    },
    clickZoom: {
      en: "Click any slide or photo to zoom fullscreen",
      id: "Klik gambar atau slide untuk memperbesar layar penuh",
    },
    openDrive: {
      en: "Open in Google Drive",
      id: "Buka di Google Drive",
    },
    copyLink: {
      en: "Copy Link",
      id: "Salin Tautan",
    },
    linkCopied: {
      en: "Link Copied",
      id: "Tersalin",
    },
    reelFallbackNote: {
      en: "Showing the Engineering Video Portfolio Reel (Google Drive) — project-specific clip link can be set in src/data/projects.ts.",
      id: "Menampilkan Engineering Video Portfolio Reel (Google Drive) — tautan video khusus proyek ini dapat diatur di src/data/projects.ts.",
    },
  },
  patent: {
    index: { en: "02 / REGISTERED IP & RESEARCH", id: "02 / HKI TERDAFTAR & RISET" },
    title: {
      en: "BRIN Industrial Design Registration",
      id: "Desain Industri Terdaftar BRIN",
    },
    lead: {
      en: "Formally registered with the Directorate General of Intellectual Property (DJKI) during my Smart Mechatronics research internship at BRIN Bandung under mentor Muhammad Kristamto Adhitya, Ph.D.",
      id: "Didaftarkan secara resmi ke Direktorat Jenderal Kekayaan Intelektual (DJKI) selama magang riset Mekatronika Cerdas di BRIN Bandung di bawah bimbingan Dr. Muhammad Kristamto Adhitya.",
    },
    badgeIp: { en: "DJKI REGISTERED", id: "TERDAFTAR DJKI" },
    badgeAward: { en: "BEST FINALIST · BEST BRIN 2026", id: "BEST FINALIST · BEST BRIN 2026" },
    designTitle: {
      en: "Gas Monitoring System (GMS) — Ergonomic Laboratory Enclosure",
      id: "Gas Monitoring System (GMS) — Enklosur Instrumen Laboratorium",
    },
    designDesc: {
      en: "An angled HMI enclosure and unified side-manifold gas piping architecture engineered to protect multi-parameter gas sensors, Raspberry Pi 4 edge compute, and electronics while giving laboratory operators an ergonomic real-time view of H2 purity and mass flow.",
      id: "Desain enklosur layar HMI miring dengan jalur perpipaan gas uji terintegrasi di satu sisi alat untuk melindungi sensor gas multi-parameter, komputasi edge Raspberry Pi 4, dan elektronika sekaligus memudahkan pembacaan kemurnian H2 oleh operator lab.",
    },
    watchHydrolytix: {
      en: "Watch Hydrolytix System Demo",
      id: "Tonton Demo Sistem Hydrolytix",
    },
    rows: [
      { key: { en: "Application No.", id: "Nomor Permohonan" }, value: "A00202603133" },
      { key: { en: "Applicant", id: "Pemohon" }, value: "Badan Riset dan Inovasi Nasional (BRIN)" },
      { key: { en: "Co-Designer", id: "Pendesain" }, value: "Mark Alexander Ierwanto (Research Team)" },
      { key: { en: "Reception Date", id: "Tanggal Penerimaan" }, value: "22 May 2026" },
      { key: { en: "Locarno Class", id: "Klasifikasi" }, value: "Class 10-04 (Measuring Instruments)" },
      { key: { en: "Protection Term", id: "Masa Perlindungan" }, value: "10 Years (DJKI Kemenkumham RI)" },
    ],
  },
  craft: {
    index: { en: "03 / PRECISION CRAFT & 3D", id: "03 / KRIYA PRESISI & 3D" },
    title: {
      en: "From World Championship Craft to Industrial Fabrication",
      id: "Dari Juara Dunia Perakitan ke Fabrikasi Industrial",
    },
    lead: {
      en: "Before university robotics, precision scale modeling trained my eye for mechanical tolerances, surface finishing, and structural storytelling — culminating in a World Championship title in Tokyo and commercial 3D trophy manufacturing.",
      id: "Sebelum mendalami robotika, dunia scale modeling melatih ketelitian toleransi mekanis, finishing permukaan, dan struktur — berpuncak pada gelar Juara Dunia di Tokyo serta produksi trofi 3D komersial.",
    },
    trackTitle: {
      en: "GBWC & Judging Track Record (2017–2025)",
      id: "Rekam Jejak GBWC & Penjurian (2017–2025)",
    },
  },
  background: {
    index: { en: "04 / EXPERIENCE & CAPABILITIES", id: "04 / PENGALAMAN & KEAHLIAN" },
    title: {
      en: "Experience, Leadership & Technical Matrix",
      id: "Pengalaman Kerja, Organisasi & Matriks Keahlian",
    },
    lead: {
      en: "Industrial AI engineering at Toyota, Smart Mechatronics R&D at BRIN, freelance CAD manufacturing, peer robotics instruction, and technical judging.",
      id: "Peran AI engineering di Toyota, riset Mekatronika Cerdas di BRIN, manufaktur CAD lepas, pengajaran robotika, serta penjurian kompetisi.",
    },
    workHeading: { en: "Industry, Research & Judging Experience", id: "Pengalaman Industri, Riset & Penjurian" },
    orgHeading: { en: "Organization & Leadership", id: "Organisasi & Kepemimpinan" },
    eduHeading: { en: "Education & Languages", id: "Pendidikan & Bahasa" },
  },
  recognition: {
    index: { en: "05 / RECOGNITION & GLOBAL", id: "05 / PENGHARGAAN & GLOBAL" },
    title: {
      en: "Awards, Certifications, Global Exposure & Press",
      id: "Penghargaan, Sertifikasi, Pengalaman Global & Media",
    },
    lead: {
      en: "36 verified competition honors, 12 Google Drive certificates, 21 Google Cloud Diamond League badges, international academic visits, community service, and press coverage.",
      id: "36 rekam jejak penghargaan terverifikasi, 12 sertifikat Google Drive, 21 badge Google Cloud Diamond League, kunjungan akademik internasional, pengabdian, serta liputan media.",
    },
    tabs: {
      awards: { en: "Awards (36)", id: "Penghargaan (36)" },
      certs: { en: "Certifications (12 + 21 GCP)", id: "Sertifikasi (12 + 21 GCP)" },
      global: { en: "Global (4)", id: "Global (4)" },
      community: { en: "Community", id: "Komunitas" },
      press: { en: "Press & Media (15)", id: "Publikasi & Media (15)" },
    },
  },
  contact: {
    index: { en: "06 / CONTACT", id: "06 / KONTAK" },
    title: {
      en: "Open for R&D, Robotics & AI Engineering Roles",
      id: "Terbuka untuk Riset, Robotika & Kolaborasi AI Engineering",
    },
    lead: {
      en: "Based in Tangerang / Surabaya, Indonesia — open to on-site, hybrid, and remote engineering collaborations in automotive AI, robotics, and smart mechatronics.",
      id: "Berbasis di Tangerang / Surabaya, Indonesia — terbuka untuk kolaborasi teknik on-site, hybrid, maupun remote di bidang AI otomotif, robotika, dan mekatronika cerdas.",
    },
    copyEmail: { en: "Copy", id: "Salin" },
    copied: { en: "Copied", id: "Tersalin" },
    formName: { en: "Your Name", id: "Nama Anda" },
    formEmail: { en: "Your Email", id: "Email Anda" },
    formMessage: { en: "Message / Project Brief", id: "Pesan / Detail Kolaborasi" },
    sendBtn: { en: "Open in Email Client", id: "Kirim via Email" },
    copyMsgBtn: { en: "Copy Formatted Inquiry", id: "Salin Teks Pesan" },
  },
  highlights: [
    { en: "AI Engineer Intern · Toyota TMMIN", id: "AI Engineer Intern · Toyota TMMIN" },
    { en: "1st World Champion · GBWC Tokyo 2018", id: "Juara Dunia 1 · GBWC Tokyo 2018" },
    { en: "DJKI Patent A00202603133", id: "Paten DJKI A00202603133" },
    { en: "Google Cloud Diamond League · 21 Badges", id: "Google Cloud Diamond League · 21 Badge" },
    { en: "BRIN Smart Mechatronics Research Intern", id: "Magang Riset Mekatronika Cerdas BRIN" },
    { en: "DRAVIXA · TSAI 2026", id: "DRAVIXA · TSAI 2026" },
    { en: "36 Verified Honors", id: "36 Penghargaan Terverifikasi" },
    { en: "GPA 3.68 · BINUS ASO", id: "IPK 3.68 · BINUS ASO" },
  ],
  interludes: {
    industry: {
      kicker: {
        en: "INDUSTRIAL R&D · AUTOMOTIVE & INSTRUMENTATION",
        id: "RISET & INDUSTRI · OTOMOTIF & INSTRUMENTASI",
      },
      title: {
        en: "From factory floor to research lab",
        id: "Dari lantai pabrik ke laboratorium riset",
      },
      stats: [
        {
          value: { en: "2nd Place", id: "Juara 2" },
          label: { en: "Toyota TMMIN TSAI 2026 (500+ Candidates)", id: "Toyota TMMIN TSAI 2026 (500+ Kandidat)" },
        },
        {
          value: { en: "Best Finalist", id: "Best Finalist" },
          label: { en: "BRIN Smart Mechatronics (Bandung)", id: "Mekatronika Cerdas BRIN (Bandung)" },
        },
        {
          value: { en: "A00202603133", id: "A00202603133" },
          label: { en: "Registered DJKI Industrial Design Patent", id: "Hak Desain Industri Terdaftar DJKI" },
        },
      ],
    },
    champion: {
      kicker: {
        en: "ENGINEERING TRACK RECORD · 2017–2026",
        id: "REKAM JEJAK REKAYASA · 2017–2026",
      },
      title: {
        en: "Built with precision since 2017",
        id: "Dibangun dengan presisi sejak 2017",
      },
      stats: [
        {
          value: { en: "1st World", id: "Juara 1 Dunia" },
          label: { en: "GBWC 2018 World Champion (Tokyo, Japan)", id: "Juara Dunia GBWC 2018 (Tokyo, Jepang)" },
        },
        {
          value: { en: "36 Honors", id: "36 Penghargaan" },
          label: { en: "Verified National & Global Awards", id: "Penghargaan Nasional & Internasional" },
        },
        {
          value: { en: "15 Press", id: "15 Liputan" },
          label: { en: "Published Media & Campus Features", id: "Publikasi Media & Berita Kampus" },
        },
      ],
    },
  },
} as const;

export function t<T extends { en: string; id: string }>(obj: T, lang: Lang): string {
  return obj[lang];
}
