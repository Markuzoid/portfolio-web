import type {
  AwardItem,
  CertificationItem,
  CloudBadgeItem,
  CommunityItem,
  ExperienceItem,
  GlobalItem,
  HonorRecord,
  PublicationItem,
} from "../types/portfolio";

export const CONTACT_INFO = {
  mainSiteUrl: "https://www.markalexanderierwanto.com/",
  portfolioHubUrl: "https://portfolio-web-5yv.pages.dev/",
  email: "mark.alexander.portfolio@gmail.com",
  linkedinUrl: "https://id.linkedin.com/in/mark-alexander-ie",
  linkedinLabel: "linkedin.com/in/mark-alexander-ie",
  canvaUrl: "https://mark-alexander-ierwanto.my.canva.site/",
  videoPortfolioUrl: "https://drive.google.com/file/d/1TMMy98hoR2BbDPcHlWA4LGnljgxkE3F8/view?usp=sharing",
  driveCertFolderUrl: "https://drive.google.com/drive/folders/1kbgC7b_08G72dmOSzrV8KDK-NLmHcfgR",
  gcpProfileUrl: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594",
  location: {
    en: "Tangerang / Surabaya, Indonesia",
    id: "Tangerang / Surabaya, Indonesia",
  },
};

export const EDUCATION = {
  university: "BINUS ASO School of Engineering — Bina Nusantara University",
  degree: {
    en: "B.Eng. in Automotive, Mechatronics, Robotics, Automation & AI Engineering (3rd Year)",
    id: "S1 Teknik Otomotif, Mekatronika, Robotika, Otomasi & AI (Tahun ke-3)",
  },
  period: "Aug 2023 – Sept 2027",
  gpa: "3.73 / 4.00",
  highSchool: "Petra 1 Christian Senior High School Surabaya (Jul 2020 – Jul 2023)",
  languages: [
    { name: { en: "Indonesian", id: "Bahasa Indonesia" }, level: { en: "Native", id: "Penutur Asli" } },
    { name: { en: "English", id: "Bahasa Inggris" }, level: { en: "Professional", id: "Profesional" } },
    { name: { en: "Japanese", id: "Bahasa Jepang" }, level: { en: "Basic", id: "Dasar" } },
    { name: { en: "Chinese", id: "Bahasa Mandarin" }, level: { en: "Basic", id: "Dasar" } },
  ],
};

export const SKILL_DOMAINS = [
  {
    title: { en: "Robotics, Embedded & Automotive", id: "Robotika, Embedded & Otomotif" },
    items: [
      "CAN Bus Embedded Systems",
      "Arduino IDE (UNO & ESP32)",
      "Raspberry Pi 4",
      "Jetson Orin Nano / Nano",
      "RS485 / Modbus RTU / I2C",
      "Nextion HMI",
      "Electronic Circuit Design",
      "Cable Wiring & Soldering",
    ],
  },
  {
    title: { en: "AI, Cloud & Data Engineering", id: "AI, Cloud & Rekayasa Data" },
    items: [
      "Large Language Models (LLM)",
      "Python & C/C++",
      "MATLAB & Simulink",
      "VHDL / Verilog (Vivado)",
      "BigQuery ML & Gemini",
      "Looker / LookML",
      "Microsoft Fabric Data Science",
      "Firebase IoT",
    ],
  },
  {
    title: { en: "CAD & Industrial Fabrication", id: "CAD & Fabrikasi Industrial" },
    items: [
      "Autodesk Inventor (CAD)",
      "CAD / CAM",
      "Autodesk Tinkercad",
      "BambuLab 3D Printing",
      "Modular Enclosure Design",
      "Airbrush & Surface Finishing",
    ],
  },
  {
    title: { en: "Media & Technical Leadership", id: "Media & Kepemimpinan Teknis" },
    items: [
      "Adobe Photoshop",
      "iMovie & CapCut",
      "Technical Judging",
      "Peer Robotics Tutoring",
      "Project Management",
      "System Troubleshooting",
    ],
  },
];

export const GBWC_HISTORY = [
  {
    year: "2024",
    title: {
      en: "2nd Winner GBWC 12th Indonesia & West Region (U-20)",
      id: "Juara 2 GBWC ke-12 Indonesia & Regional Barat (U-20)",
    },
  },
  {
    year: "2023",
    title: {
      en: "Top 5 World Finalist GBWC 11th in Tokyo · 1st Indonesia Champion (U-20)",
      id: "Top 5 Finalis Dunia GBWC ke-11 di Tokyo · Juara 1 Indonesia (U-20)",
    },
  },
  {
    year: "2021",
    title: {
      en: "International Judge — GB Master Championship (Petra Christian Univ.)",
      id: "Juri Internasional — GB Master Championship (Univ. Kristen Petra)",
    },
  },
  {
    year: "2019",
    title: {
      en: "1st Champion GBWC 2019 Indonesia & West Region (Open A Course)",
      id: "Juara 1 GBWC 2019 Indonesia & Regional Barat (Open A Course)",
    },
  },
  {
    year: "2018",
    title: {
      en: "1st World Champion GBWC 2018 — Tokyo, Japan (Junior Course)",
      id: "Juara Dunia 1 GBWC 2018 — Tokyo, Jepang (Junior Course)",
    },
  },
  {
    year: "2017",
    title: {
      en: "2nd Winner GBWC 2017 Indonesia & East Region Preliminary",
      id: "Juara 2 GBWC 2017 Indonesia & Penyisihan Regional Timur",
    },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "tmmin-ai-intern",
    period: "Aug 2026 – Present",
    kind: "work",
    role: {
      en: "Artificial Intelligence Engineer Intern",
      id: "Artificial Intelligence Engineer Intern",
    },
    organization: "PT Toyota Motor Manufacturing Indonesia (TMMIN)",
    location: "Karawang, West Java · On-site",
    bullets: {
      en: [
        "Serving in the Capability Center Division — Future Skill Development Department.",
        "Applying AI, robotics, and software engineering workflows toward automotive manufacturing capability development and Toyota Kaizen initiatives.",
      ],
      id: [
        "Bertugas di Divisi Capability Center — Departemen Future Skill Development.",
        "Menerapkan rekayasa AI, robotika, dan perangkat lunak untuk pengembangan kapabilitas manufaktur otomotif serta inisiatif Kaizen di TMMIN.",
      ],
    },
    images: [
      {
        src: "/assets/linkedin-tmmin-learning-center.jpg",
        caption: "TMMIN Capability Center / Learning Center, Karawang",
      },
      {
        src: "/assets/linkedin-tmmin-selfie.jpg",
        caption: "Artificial Intelligence Engineer Intern at TMMIN Learning Center",
      },
      {
        src: "/assets/tmmin/tmmin-simulator-review.webp",
        caption: "Simulator testing & engineering review with TMMIN mentors",
      },
      {
        src: "/assets/tmmin/tmmin-team-group.webp",
        caption: "Capability Center — Future Skill Development team at TMMIN",
      },
      {
        src: "/assets/tmmin/tmmin-workstation.webp",
        caption: "Daily AI engineering workstation at TMMIN Karawang",
      },
      {
        src: "/assets/tmmin/tmmin-good-thinking-badge.webp",
        caption: "TMMIN Toyota — Good Thinking, Good Product",
      },
    ],
  },
  {
    id: "brin-intern",
    period: "Feb 2026 – Jun 2026",
    kind: "work",
    role: {
      en: "Researcher Intern — Smart Mechatronics & IoT",
      id: "Intern Riset — Mekatronika Cerdas & IoT",
    },
    organization: "BRIN RI — Smart Mechatronics Research Center",
    location: "Bandung, West Java · On-site",
    bullets: {
      en: [
        "Developed the Smart Gas Data Collector & Web/IoT monitoring platform for H2 purity and mass flow in multi-parameter hydrogen bioreactors under mentor Muhammad Kristamto Adhitya, Ph.D.",
        "Engineered Raspberry Pi 4 RS485/Modbus RTU + I2C acquisition, Ideal Gas Law Python compensation, and dual-layer SSD + Firebase logging.",
        "Co-designed the Gas Monitoring System (GMS) registered as DJKI Industrial Design Patent No. A00202603133 and won Best Finalist at BEST BRIN Expo 2026.",
      ],
      id: [
        "Mengembangkan Smart Gas Data Collector dan platform Web/IoT pemantau kemurnian serta laju alir H2 di bawah bimbingan Dr. Muhammad Kristamto Adhitya.",
        "Membangun akuisisi Raspberry Pi 4 via RS485/Modbus RTU + I2C, algoritma kompensasi Hukum Gas Ideal, serta logging ganda SSD + Firebase.",
        "Turut merancang Desain Industri DJKI No. A00202603133 (GMS) dan meraih Best Finalist di BEST BRIN Expo 2026.",
      ],
    },
    images: [
      {
        src: "/assets/linkedin-brin-labcoat.jpg",
        caption: "Research Internship at BRIN Smart Mechatronics, Bandung",
      },
      {
        src: "/assets/linkedin-brin-campus.jpg",
        caption: "BRIN Kawasan Sains Teknologi Samaun Samadikun, Bandung",
      },
    ],
  },
  {
    id: "tmmin-apprentice",
    period: "Feb 2026 – Jun 2026",
    kind: "work",
    role: {
      en: "Software Engineer Apprentice — T-MIND / TSAI 2026",
      id: "Software Engineer Apprentice — T-MIND / TSAI 2026",
    },
    organization: "PT Toyota Motor Manufacturing Indonesia (TMMIN)",
    location: "Indonesia · Hybrid",
    bullets: {
      en: [
        "Selected from 500+ nationwide candidates into Top 25 participants for Toyota's Software Engineering Bootcamp; trained in vehicle architecture, CAN bus embedded systems, and industrial AI/ML at Karawang.",
        "Led hardware and software of the 20M IDR-funded DRAVIXA AI co-pilot research project, earning 2nd Winner TSAI 2026 and Best Finalist Team.",
      ],
      id: [
        "Terpilih sebagai Top 25 dari 500+ kandidat nasional dalam bootcamp Software Engineering Toyota (arsitektur kendaraan, CAN bus embedded, dan AI/ML industri di Karawang).",
        "Memimpin hardware dan software proyek riset DRAVIXA (dana riset 20 juta IDR) hingga meraih Juara 2 TSAI 2026 dan Best Finalist Team.",
      ],
    },
    images: [
      {
        src: "/assets/linkedin-tmind-plant.jpg",
        caption: "Toyota Software Bootcamp at TMMIN Plant, Karawang",
      },
      {
        src: "/assets/linkedin-tmind-xev.jpg",
        caption: "T-MIND Toyota Cohort at xEV Center",
      },
    ],
  },
  {
    id: "innovedu-work",
    period: "Jul 2024 – Jun 2026",
    kind: "work",
    role: {
      en: "Trophy & Medal CAD Designer / Producer",
      id: "Desainer CAD & Produsen Trofi / Medali",
    },
    organization: "INNOVEDU",
    location: "Remote",
    bullets: {
      en: [
        "Designed and produced custom 3D trophies and medals for international academic competitions (GBMO 2024/2025, IASO 2025, WSSO 2025, MABO 2025).",
        "Managed Autodesk Inventor modeling, batch 3D printing, and hand-painted airbrush finishing to ceremony standards.",
      ],
      id: [
        "Mendesain dan memproduksi trofi serta medali kustom untuk olimpiade akademik internasional (GBMO, IASO, WSSO, MABO).",
        "Mengelola pemodelan Autodesk Inventor, cetak 3D batch, hingga finishing airbrush siap seremoni.",
      ],
    },
  },
  {
    id: "binus-judge",
    period: "Mar 2025",
    kind: "work",
    role: {
      en: "Panel Judge — Gunpla Student Tournament",
      id: "Dewan Juri — Gunpla Student Tournament",
    },
    organization: "BINUS ASO School of Engineering",
    location: "Alam Sutera, Banten · On-site",
    bullets: {
      en: [
        "Evaluated student scale-model entries on concept, mechanical craftsmanship, modification, posing, and photography.",
      ],
      id: [
        "Menilai karya mahasiswa berdasarkan konsep, kerapian perakitan, modifikasi teknis, pose, dan fotografi.",
      ],
    },
    images: [
      {
        src: "/assets/archive/judge-binus-1.webp",
        caption: "Judging panel at Gunpla Student Tournament — BINUS ASO",
      },
      {
        src: "/assets/archive/judge-binus-2.webp",
        caption: "Evaluating student craftsmanship & scale-model entries",
      },
    ],
  },
  {
    id: "gb-master-judge",
    period: "May – Aug 2021",
    kind: "work",
    role: {
      en: "International Judge — GB Master Championship",
      id: "Juri Internasional — GB Master Championship",
    },
    organization: "Petra Christian University",
    location: "Remote",
    bullets: {
      en: [
        "Selected alongside 4 international judges to score hundreds of global scale-modeling submissions.",
      ],
      id: [
        "Terpilih bersama 4 juri mancanegara untuk menilai ratusan karya peserta internasional.",
      ],
    },
    images: [
      {
        src: "/assets/archive/judge-gbmaster-1.webp",
        caption: "International Judge — GB Master Championship (Petra Christian Univ.)",
      },
      {
        src: "/assets/archive/judge-gbmaster-2.webp",
        caption: "Judging criteria & international scoring evaluation",
      },
    ],
  },
  {
    id: "verem-fx",
    period: "Jan 2018 – Jan 2020",
    kind: "work",
    role: {
      en: "Video & Photographer (Part-Time)",
      id: "Videografer & Fotografer (Paruh Waktu)",
    },
    organization: "VEREM FX",
    location: "Surabaya · Hybrid",
    bullets: {
      en: [
        "Shot and edited photography and video coverage for corporate events and private client functions.",
      ],
      id: [
        "Meliput serta menyunting foto dan video untuk acara korporasi maupun klien komersial.",
      ],
    },
  },
  {
    id: "gunpla-club",
    period: "Sept 2024 – Present",
    kind: "leadership",
    role: {
      en: "President — GUNPLA BASE Club",
      id: "Ketua Klub — GUNPLA BASE Club",
    },
    organization: "BINUS ASO School of Engineering",
    location: "Tangerang",
    bullets: {
      en: [
        "Lead club curriculum, 3D printing & airbrush workshops, and hands-on custom modification mentoring.",
      ],
      id: [
        "Memimpin program kerja klub, workshop 3D printing & airbrush, serta membimbing anggota dalam modifikasi kustom.",
      ],
    },
  },
  {
    id: "basecore-tutor",
    period: "Sept 2023 – Present",
    kind: "leadership",
    role: {
      en: "Teaching & Tutor Division — BASECORE Robotics",
      id: "Divisi Pengajar & Tutor — BASECORE Robotics",
    },
    organization: "BINUS ASO School of Engineering",
    location: "Tangerang",
    bullets: {
      en: [
        "Deliver weekly hands-on lectures and lab mentoring in robotics fundamentals, C++ embedded programming, and circuit prototyping.",
      ],
      id: [
        "Mengajar rutin setiap minggu mengenai dasar robotika, pemrograman C++ mikrokontroler, dan prototipe sirkuit elektronika.",
      ],
    },
  },
  {
    id: "basecore-research",
    period: "Sept 2023 – Present",
    kind: "leadership",
    role: {
      en: "Member — BASECORE Robotics Research & BASE CREATOR",
      id: "Anggota — Riset Robotika BASECORE & BASE CREATOR",
    },
    organization: "BINUS ASO School of Engineering",
    location: "Tangerang",
    bullets: {
      en: [
        "Collaborate on sensor fusion, IoT telemetry protocols, embedded state machines, and engineering showcases (BASE CREATOR: Sept 2023 – Feb 2024).",
      ],
      id: [
        "Berkolaborasi dalam riset sensor fusion, protokol IoT, state machine embedded, serta pameran desain teknik.",
      ],
    },
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: "tsai-2nd",
    year: "Jun 2026",
    title: {
      en: "2nd Winner — TOYOTA Software Academy Indonesia",
      id: "Juara 2 — TOYOTA Software Academy Indonesia",
    },
    issuer: "PT Toyota Motor Manufacturing Indonesia",
    detail: {
      en: "Awarded 2nd Place (29 June 2026) representing BINUS ASO with the 20M IDR-funded DRAVIXA AI co-pilot.",
      id: "Meraih Juara 2 (29 Juni 2026) mewakili BINUS ASO melalui inovasi co-pilot AI DRAVIXA.",
    },
    image: "/assets/toyota-cert-2nd.jpg",
  },
  {
    id: "tsai-finalist",
    year: "Jun 2026",
    title: {
      en: "Best Finalist — Toyota Expertise Exhibition",
      id: "Best Finalist — Toyota Expertise Exhibition",
    },
    issuer: "PT TMMIN & STEI ITB",
    detail: {
      en: "Selected Best Finalist Team for live hardware demonstration of the DRAVIXA 2-axis robot assistant.",
      id: "Terpilih sebagai Best Finalist Team atas demonstrasi langsung prototipe fisik robot DRAVIXA.",
    },
    image: "/assets/toyota-ceremony.jpg",
  },
  {
    id: "brin-best",
    year: "Jun 2026",
    title: {
      en: "Best Finalist — BEST BRIN Smart Technology Exhibition",
      id: "Best Finalist — Pameran Teknologi Cerdas BEST BRIN",
    },
    issuer: "BRIN & ICSMech 2026",
    detail: {
      en: "Awarded Best Finalist (09–10 June 2026) in Bandung for the Hydrolytix Smart Gas Data Collector.",
      id: "Meraih Best Finalist (09–10 Juni 2026) di Bandung untuk sistem Hydrolytix Smart Gas Data Collector.",
    },
    image: "/assets/slide-08-brin-best.jpg",
  },
  {
    id: "tmind-top25",
    year: "Feb 2026",
    title: {
      en: "Top 25 Best Participant — T-MIND Toyota Bootcamp",
      id: "Top 25 Peserta Terbaik — Bootcamp T-MIND Toyota",
    },
    issuer: "PT TMMIN & STEI ITB",
    detail: {
      en: "Selected among 500+ nationwide candidates as Top 25 Best Participant in the Industrial Class.",
      id: "Terpilih dari 500+ kandidat nasional dalam jajaran 25 peserta terbaik kelas industri Toyota.",
    },
    image: "/assets/toyota-cert-top25.jpg",
  },
  {
    id: "pilmapres-2025",
    year: "2025",
    title: {
      en: "PILMAPRES 2025 Faculty Winner & Top 10 Finalist",
      id: "Juara Fakultas PILMAPRES 2025 & Top 10 Finalis",
    },
    issuer: "BINUS University",
    detail: {
      en: "BINUS ASO PILMAPRES Faculty Winner (Jan 2025) and Top 10 BINUS University Finalist (Mar 2025).",
      id: "Juara PILMAPRES Fakultas BINUS ASO (Jan 2025) dan Top 10 Finalis BINUS University (Mar 2025).",
    },
    image: "/assets/slide-11-pilmapres.jpg",
  },
  {
    id: "binus-mawapres-2025",
    year: "Jun 2025",
    title: {
      en: "Most Outstanding Student — Appreciation Day 2025",
      id: "Mahasiswa Berprestasi — BINUS Appreciation Day 2025",
    },
    issuer: "BINUS University",
    detail: {
      en: "Honored on 07 June 2025 as Most Outstanding Student (National & International Level).",
      id: "Penghargaan Mahasiswa Berprestasi Tingkat Nasional & Internasional (07 Juni 2025).",
    },
    image: "/assets/awards/binus-mawapres-2025-sign.webp",
  },
  {
    id: "binus-mawapres-2025-stage",
    year: "Jun 2025",
    title: {
      en: "BINUS Appreciation Day 2025 — Main Stage Recognition",
      id: "BINUS Appreciation Day 2025 — Penyerahan Penghargaan di Panggung",
    },
    issuer: "BINUS University",
    detail: {
      en: "On-stage award presentation for international achievement (GBWC & BINUS ASO School of Engineering).",
      id: "Dokumentasi panggung utama BINUS Appreciation Day 2025 untuk prestasi tingkat internasional.",
    },
    image: "/assets/awards/binus-mawapres-2025-stage.webp",
  },
  {
    id: "binus-mawapres-2024",
    year: "2023–2024",
    title: {
      en: "Most Outstanding Student (2023 & 2024) + GBWC U-20",
      id: "Mahasiswa Berprestasi (2023 & 2024) + GBWC U-20",
    },
    issuer: "BINUS University",
    detail: {
      en: "Recognized at BINUS Appreciation Day 2024 (17 Aug 2024) and BINUS ASO Appreciation Day 2023.",
      id: "Penghargaan berturut-turut di BINUS Appreciation Day 2024 dan BINUS ASO Appreciation Day 2023.",
    },
    image: "/assets/slide-12-binus-2024.jpg",
  },
  {
    id: "gbwc-world",
    year: "2017–2024",
    title: {
      en: "1st World Champion GBWC 2018 & Top 5 Finalist 2023",
      id: "Juara Dunia 1 GBWC 2018 & Top 5 Finalis Dunia 2023",
    },
    issuer: "Bandai Japan — Tokyo, Japan",
    detail: {
      en: "1st World Champion (Tokyo 2018), Top 5 World Finalist (2023), 3× 1st Indonesia Champion (2018, 2019, 2023).",
      id: "Juara Dunia 1 (Tokyo 2018), Top 5 Finalis Dunia (2023), dan 3× Juara 1 Nasional Indonesia.",
    },
    image: "/assets/slide-13-gbwc.jpg",
  },
  {
    id: "iro-its",
    year: "2018–2022",
    title: {
      en: "Robotics, Science & Math Olympiad Honors",
      id: "Prestasi Olimpiade Robotika, Sains & Matematika",
    },
    issuer: "ITS · IASO Japan · IMAGO · UBAYA · Petra",
    detail: {
      en: "IRO 2019 2nd Winner (ITS), IASO 2020 Grand Champion, IMAGO 2022 Gold Medal, GBMO 2021/2022 1st Champion, IBMLB 2021, SSEG 2022 1st Winner.",
      id: "Juara 2 IRO 2019 (ITS), Grand Champion IASO 2020, Emas IMAGO 2022, Juara 1 GBMO 2021/2022, IBMLB 2021, Juara 1 SSEG 2022.",
    },
    image: "/assets/slide-19-iro.jpg",
  },
];

export const ALL_HONORS: HonorRecord[] = [
  { year: "Jun 2026", title: "2nd Winner — Toyota Software Academy Indonesia", issuer: "PT Toyota Motor Manufacturing Indonesia", scope: "National Industry", link: "https://base.binus.ac.id/automotive-robotics-engineering/2026/11/05/kisah-kemenangan-dravixa-di-kompetisi-toyota-software-academy-indonesia-2026/" },
  { year: "Jun 2026", title: "Best Finalist — Toyota Software Academy Indonesia (TIM DRAVIXA)", issuer: "PT Toyota Motor Manufacturing Indonesia", scope: "Expertise Exhibition" },
  { year: "Jun 2026", title: "Best Finalist — BEST BRIN Exhibition in Conjunction with ICSMech", issuer: "BRIN RI", scope: "National Research" },
  { year: "Feb 2026", title: "Top 25 T-MIND Toyota Software Engineer Bootcamp 2025", issuer: "PT Toyota Motor Manufacturing Indonesia", scope: "500+ Candidates", link: "https://base.binus.ac.id/2025/12/15/mahasiswa-binus-aso-terpilih-mengikuti-toyota-mobility-innovation-development-t-mind/" },
  { year: "Jun 2025", title: "Mahasiswa Berprestasi — BINUS Appreciation Day 2025", issuer: "Bina Nusantara University", scope: "National & International" },
  { year: "Mar 2025", title: "Top 10 Finalis PILMAPRES Bina Nusantara University", issuer: "Bina Nusantara University", scope: "University Final", link: "https://student.binus.ac.id/2025/03/pilmapres-binus-2025-mahasiswa-berprestasi-siap-melaju-ke-tingkat-nasional/" },
  { year: "Jan 2025", title: "Winner PILMAPRES Tingkat Fakultas BINUS ASO", issuer: "Bina Nusantara University", scope: "Faculty Winner", link: "https://www.instagram.com/binusstudentachievement/p/DEvVD1tTRuS/" },
  { year: "Nov 2024", title: "2nd Champion — GBWC 2024 Indonesia (U-20)", issuer: "Bandai Japan", scope: "National" },
  { year: "Nov 2024", title: "2nd Champion — GBWC 2024 West Indonesia Region / Jakarta (U-20)", issuer: "Bandai Japan", scope: "Regional" },
  { year: "Aug 2024", title: "Mahasiswa Berprestasi — BINUS Appreciation Day 2024", issuer: "Bina Nusantara University", scope: "National & International" },
  { year: "Dec 2023", title: "Mahasiswa Berprestasi — BINUS ASO Appreciation Day 2023", issuer: "BINUS ASO", scope: "Regional, National & Int'l" },
  { year: "Dec 2023", title: "Top 5 Finalist — GBWC 11th World Championship, Tokyo (U-20)", issuer: "Bandai Japan", scope: "Global Competition", link: "https://www.youtube.com/live/L6gfQ6rZPtQ?t=2708s" },
  { year: "Nov 2023", title: "1st Champion — GBWC 2023 Indonesia (U-20)", issuer: "Bandai Japan", scope: "National" },
  { year: "Nov 2023", title: "1st Champion — GBWC 2023 West Indonesia Region / Jakarta (U-20)", issuer: "Bandai Japan", scope: "Regional" },
  { year: "Sep 2022", title: "1st Champion — Global Business Mathematics Olympiad (GBMO 2022)", issuer: "Widya Mandala Catholic University", scope: "Olympiad" },
  { year: "Aug 2022", title: "1st Winner — Student Stock Exchange Games (SSEG 2022)", issuer: "Petra Christian University", scope: "Competition" },
  { year: "Mar 2022", title: "Gold Medal — International Mathematical Advanced Geometry Olympiad (IMAGO)", issuer: "IMAGO Committee", scope: "International" },
  { year: "Oct 2021", title: "1st Champion — Global Business Mathematics Olympiad (GBMO 2021)", issuer: "Widya Mandala Catholic University", scope: "Olympiad" },
  { year: "Sep 2021", title: "Winner — Indonesia Bangkit Muda Luar Biasa (IBMLB 2021)", issuer: "UBAYA & Suara Surabaya FM", scope: "Leadership Scholarship", link: "https://www.suarasurabaya.net/kelanakota/2021/15-pemenang-indonesia-bangkit-muda-luar-biasa-ibmlb-menerima-beasiswa-kuliah-di-ubaya/" },
  { year: "Nov 2020", title: "Grand Champion — International Applied Science Olympiad (IASO 2020)", issuer: "IASO Committee, Japan", scope: "International", link: "https://sma1.pppkpetra.sch.id/berprestasi-meraih-grand-champion-dalam-international-applied-science-olympiad-2020/" },
  { year: "Sep 2020", title: "2nd Runner Up — Global Business Mathematics Olympiad (GBMO 2020)", issuer: "Widya Mandala Catholic University", scope: "Olympiad" },
  { year: "May 2020", title: "Robotic Olympiad Achiever — Academic Award 2020", issuer: "PPPK Petra Surabaya", scope: "Academic Award" },
  { year: "Oct 2019", title: "1st Champion — GBWC 2019 Indonesia (Open A Course)", issuer: "Bandai Japan", scope: "National", link: "https://duniaku.idntimes.com/geek/mainan/pemenang-gbwc-indonesia-2019-daftar-00-l6yjm-wlzn28" },
  { year: "Oct 2019", title: "1st Champion — GBWC 2019 West Indonesia Region / Jakarta (Open A)", issuer: "Bandai Japan", scope: "Regional" },
  { year: "Sep 2019", title: "2nd Champion — Indonesian Robotic Olympiad (IRO 2019) High School", issuer: "ITS Surabaya", scope: "National Robotics" },
  { year: "Aug 2019", title: "Bronze Award — HKIMO 2018 & 2019 (Hong Kong Int'l Math Olympiad)", issuer: "HKIMO Committee", scope: "International" },
  { year: "Apr 2019", title: "Bronze Award — TIMO 2018 & 2019 (Thailand Int'l Math Olympiad)", issuer: "TIMO Committee", scope: "International" },
  { year: "Dec 2018", title: "1st World Champion — GBWC World Championship 2018, Tokyo (Junior)", issuer: "Bandai Japan", scope: "Global Champion", link: "https://en.gundam.info/news/event/news_event_20181210_0008.html" },
  { year: "Nov 2018", title: "1st Runner Up — iSTTS Technology Robotic Competition (ITRC 2018)", issuer: "STTS Surabaya", scope: "East Java Regional" },
  { year: "Nov 2018", title: "Credit Award — Australian Mathematics Competition (AMC 2018)", issuer: "AMC", scope: "International" },
  { year: "Oct 2018", title: "1st Champion — GBWC 2018 West Indonesia Region / Jakarta (Junior B)", issuer: "Bandai Japan", scope: "Regional" },
  { year: "Oct 2018", title: "1st Champion — GBWC 2018 Indonesia (Junior B)", issuer: "Bandai Japan", scope: "National" },
  { year: "May 2018", title: "1st Champion — National Business Mathematics Competition (NBMC 2018)", issuer: "Widya Mandala Catholic University", scope: "National" },
  { year: "Apr 2018", title: "Bronze Award — Vanda International Science Competition 2018", issuer: "Vanda International", scope: "International" },
  { year: "Oct 2017", title: "2nd Champion — GBWC 2017 Indonesia", issuer: "Bandai Japan", scope: "National" },
  { year: "Aug 2017", title: "2nd Champion — Preliminary GBWC Indonesia 2017 (East Indonesia)", issuer: "Bandai Japan", scope: "Regional" },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-toyota",
    year: "2026",
    title: "TOYOTA Software Engineering Bootcamp (Industrial Class)",
    issuer: "PT Toyota Motor Manufacturing Indonesia & STEI ITB",
    category: "Industrial AI & Automotive",
    url: "https://drive.google.com/file/d/1ANvWujbsVSEWNGEB-78eouUSFHFI8deh/view",
    detail: {
      en: "Top 25 Best Participant certificate covering vehicle architecture, CAN bus, and industrial AI.",
      id: "Sertifikat Top 25 Peserta Terbaik mencakup arsitektur kendaraan, CAN bus, dan AI industri.",
    },
    image: "/assets/toyota-bootcamp.jpg",
    pdf: "/certificates/toyota-software-bootcamp-top25.pdf",
  },
  {
    id: "cert-icsmech-2026",
    year: "Jun 2026",
    title: "ICSMech 2026 — International Conference on Smart Mechatronics (Student Participant)",
    issuer: "BRIN & Telkom University",
    category: "Research & Mechatronics",
    detail: {
      en: "Official certificate of participation at the 2026 International Conference on Smart Mechatronics (Bandung, Indonesia).",
      id: "Sertifikat resmi partisipasi pada International Conference on Smart Mechatronics 2026 (BRIN & Telkom University).",
    },
    image: "/assets/awards/cert-icsmech-2026.webp",
  },
  {
    id: "cert-fabric",
    year: "Jun 2026",
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    category: "Data Science & Cloud",
    url: "https://drive.google.com/file/d/1nD8DFoIKlF_izXnKID-ByGHo5cn2odsc/view",
    detail: {
      en: "Applied data science workflows, lakehouse analytics, and ML modeling with Microsoft Fabric.",
      id: "Penerapan alur kerja data science, analitik lakehouse, dan pemodelan ML di Microsoft Fabric.",
    },
    image: "/certificates/thumbs/dicoding-microsoft-fabric-ds.jpg",
    pdf: "/certificates/dicoding-microsoft-fabric-ds.pdf",
  },
  {
    id: "cert-dicoding-fe",
    year: "Jun 2026",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia & DBS Foundation",
    category: "Web Engineering",
    url: "https://drive.google.com/file/d/1VrEKip-aPmCNtxuwpEeraQ-0gCdDnlN0/view",
    detail: {
      en: "DOM manipulation, interactive events, and browser web storage.",
      id: "Manipulasi DOM, event interaktif, dan penyimpanan web di browser.",
    },
    image: "/certificates/thumbs/dicoding-frontend-web.jpg",
    pdf: "/certificates/dicoding-frontend-web.pdf",
  },
  {
    id: "cert-dicoding-js",
    year: "Jun 2026",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia & DBS Foundation",
    category: "Web Engineering",
    url: "https://drive.google.com/file/d/16SOX_N7RSVq6AQd0gLRPhQ8NVMjypfbF/view",
    detail: {
      en: "Functional programming, OOP, asynchronous patterns, and JavaScript testing fundamentals.",
      id: "Pemrograman fungsional, OOP, pola asinkron, dan dasar pengujian JavaScript.",
    },
    image: "/certificates/thumbs/dicoding-javascript.jpg",
    pdf: "/certificates/dicoding-javascript.pdf",
  },
  {
    id: "cert-dicoding-web",
    year: "Jun 2026",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia & DBS Foundation",
    category: "Web Engineering",
    url: "https://drive.google.com/file/d/1l_gbfjqo-WopaRVn385LLKw4UvMpcT5U/view",
    detail: {
      en: "Semantic HTML5, responsive CSS Flexbox layouts, and web accessibility.",
      id: "HTML5 semantik, tata letak responsif Flexbox CSS, dan aksesibilitas web.",
    },
    image: "/certificates/thumbs/dicoding-web-basics.jpg",
    pdf: "/certificates/dicoding-web-basics.pdf",
  },
  {
    id: "cert-ur-core",
    year: "2021",
    title: "e-Series Core Track — Universal Robots Academy",
    issuer: "Universal Robots",
    category: "Industrial Robotics",
    url: "https://drive.google.com/file/d/1QWkGTj78ND0vb2vnm0_bjfuW7hfmJn3Q/view",
    detail: {
      en: "Core collaborative robot setup, safety boundaries, and PolyScope motion programming.",
      id: "Pengaturan dasar cobot, batas keselamatan, dan pemrograman gerak PolyScope.",
    },
    image: "/certificates/thumbs/universal-robots-eseries-core.jpg",
    pdf: "/certificates/universal-robots-eseries-core.pdf",
  },
  {
    id: "cert-ur-pro",
    year: "2021",
    title: "e-Series Pro Track — Universal Robots Academy",
    issuer: "Universal Robots",
    category: "Industrial Robotics",
    url: "https://drive.google.com/file/d/1etye-FrKrsOE0N-8g6bSCaRI2xyYzl_-/view",
    detail: {
      en: "Advanced cobot scripting, force-torque control, and industrial I/O integration.",
      id: "Skrip lanjutan cobot, kontrol gaya-torsi, dan integrasi I/O industri.",
    },
    image: "/certificates/thumbs/universal-robots-eseries-pro.jpg",
    pdf: "/certificates/universal-robots-eseries-pro.pdf",
  },
  {
    id: "cert-ur-app",
    year: "2021",
    title: "e-Series Application Track — Universal Robots Academy",
    issuer: "Universal Robots",
    category: "Industrial Robotics",
    url: "https://drive.google.com/file/d/1mbaSiHvKUpGPxxWFlZb-3aO-D0-hdzGE/view",
    detail: {
      en: "Pick-and-place, palletizing, and machine-tending collaborative robotics applications.",
      id: "Aplikasi industri cobot untuk pick-and-place, palletizing, dan machine-tending.",
    },
    image: "/certificates/thumbs/universal-robots-eseries-app.jpg",
    pdf: "/certificates/universal-robots-eseries-app.pdf",
  },
  {
    id: "cert-ur-cb3",
    year: "2021",
    title: "CB3 e-Learning — Universal Robots Academy",
    issuer: "Universal Robots",
    category: "Industrial Robotics",
    url: "https://drive.google.com/file/d/1uqGlZ8wV2Da7AL1A4xQK_ZPnDbDG9GWC/view",
    detail: {
      en: "Universal Robots CB3 arm kinematics, coordinate frames, and waypoint programming.",
      id: "Kinematika lengan robot CB3, sistem koordinat, dan pemrograman waypoint.",
    },
    image: "/certificates/thumbs/universal-robots-cb3.jpg",
    pdf: "/certificates/universal-robots-cb3.pdf",
  },
  {
    id: "cert-revou",
    year: "2024",
    title: "Intro to Data Analytics Mini Course",
    issuer: "RevoU",
    category: "Data Science & Cloud",
    url: "https://drive.google.com/file/d/1xxfAtv5Plw0cH8zJok0AOK1DfzMcJZs5/view",
    detail: {
      en: "Analytical problem framing, SQL/spreadsheet exploration, and KPI reporting.",
      id: "Perumusan masalah analitik, eksplorasi data, dan pelaporan KPI.",
    },
    image: "/certificates/thumbs/revou-data-analytics.jpg",
    pdf: "/certificates/revou-data-analytics.pdf",
  },
  {
    id: "cert-kaggle",
    year: "2023",
    title: "Python Course Certificate",
    issuer: "Kaggle",
    category: "Programming",
    url: "https://drive.google.com/file/d/1c9IiLTUy4CLeeyBfbVKk676I3ArqrDkq/view",
    detail: {
      en: "Python syntax, functions, loops, data structures, and external library integration.",
      id: "Sintaks Python, fungsi, perulangan, struktur data, dan penggunaan pustaka eksternal.",
    },
    image: "/assets/cert-kaggle-python.png",
  },
  {
    id: "cert-progate",
    year: "2024",
    title: "Bootcamp: Making Website with HTML & CSS",
    issuer: "Progate & Edufund",
    category: "Web Engineering",
    url: "https://drive.google.com/file/d/13CvAezJP1DA2ZG5MKO3ztihbMsce-wkX/view",
    detail: {
      en: "Completed structured HTML & CSS web layout and component styling bootcamp.",
      id: "Menyelesaikan bootcamp penyusunan tata letak dan styling web dengan HTML & CSS.",
    },
    image: "/certificates/thumbs/progate-html-css.jpg",
    pdf: "/certificates/progate-html-css.pdf",
  },
];

export const GOOGLE_CLOUD_PROFILE = {
  league: "Diamond League",
  points: "15,873",
  memberSince: "2024",
  badgeCount: 21,
  url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594",
};

export const GOOGLE_CLOUD_BADGES: CloudBadgeItem[] = [
  { id: "20992477", title: "Applying Advanced LookML Concepts in Looker", earned: "Dec 18, 2025", track: "Looker & BI", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/20992477" },
  { id: "20991689", title: "Manage Data Models in Looker", earned: "Dec 18, 2025", track: "Looker & BI", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/20991689" },
  { id: "20990707", title: "Prepare Data for Looker Dashboards and Reports", earned: "Dec 18, 2025", track: "Looker & BI", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/20990707" },
  { id: "20955872", title: "Developing Data Models with LookML", earned: "Dec 16, 2025", track: "Looker & BI", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/20955872" },
  { id: "20882938", title: "Data Studio Essentials", earned: "Dec 14, 2025", track: "Looker & BI", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/20882938" },
  { id: "20649524", title: "Analyzing and Visualizing Data in Looker", earned: "Dec 4, 2025", track: "Looker & BI", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/20649524" },
  { id: "19731229", title: "Introduction to Looker", earned: "Oct 29, 2025", track: "Looker & BI", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/19731229" },
  { id: "19729455", title: "Work with Gemini Models in BigQuery", earned: "Oct 29, 2025", track: "BigQuery & Gemini", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/19729455" },
  { id: "19379096", title: "Create ML Models with BigQuery ML", earned: "Oct 21, 2025", track: "BigQuery & Gemini", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/19379096" },
  { id: "19172615", title: "Boost Productivity with Gemini in BigQuery", earned: "Oct 15, 2025", track: "BigQuery & Gemini", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/19172615" },
  { id: "18943588", title: "Derive Insights from BigQuery Data", earned: "Oct 7, 2025", track: "BigQuery & Gemini", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/18943588" },
  { id: "18744181", title: "BigQuery for Data Analysts", earned: "Sep 30, 2025", track: "BigQuery & Gemini", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/18744181" },
  { id: "18575195", title: "Google Cloud Data Analytics Essentials", earned: "Sep 24, 2025", track: "BigQuery & Gemini", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/18575195" },
  { id: "12337905", title: "Prepare Data for ML APIs on Google Cloud", earned: "Oct 24, 2024", track: "BigQuery & Gemini", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/12337905" },
  { id: "12337416", title: "Build a Secure Google Cloud Network", earned: "Oct 23, 2024", track: "Cloud Foundations & Security", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/12337416" },
  { id: "12137430", title: "Set Up an App Dev Environment on Google Cloud", earned: "Oct 16, 2024", track: "Cloud Foundations & Security", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/12137430" },
  { id: "12072765", title: "Google Cloud Computing Foundations: Networking & Security", earned: "Oct 15, 2024", track: "Cloud Foundations & Security", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/12072765" },
  { id: "11961573", title: "Implementing Cloud Load Balancing for Compute Engine", earned: "Oct 10, 2024", track: "Cloud Foundations & Security", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/11961573" },
  { id: "11956667", title: "Google Cloud Computing Foundations: Data, ML, and AI", earned: "Oct 9, 2024", track: "Cloud Foundations & Security", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/11956667" },
  { id: "11692828", title: "Google Cloud Computing Foundations: Infrastructure", earned: "Sep 26, 2024", track: "Cloud Foundations & Security", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/11692828" },
  { id: "11530250", title: "Google Cloud Computing Foundations: Cloud Fundamentals", earned: "Sep 19, 2024", track: "Cloud Foundations & Security", url: "https://www.skills.google/public_profiles/a92562da-e529-48d5-ab32-b385aada6594/badges/11530250" },
];

export const GLOBAL_EXPERIENCES: GlobalItem[] = [
  {
    id: "sg",
    country: { en: "Singapore", id: "Singapura" },
    code: "SG · NTU / NUS",
    tag: { en: "Academic Study Visit", id: "Kunjungan Akademik" },
    title: {
      en: "NTU & NUS Innovation Study Visit",
      id: "Studi Inovasi di NTU & NUS",
    },
    summary: {
      en: "Examined Southeast Asian engineering ecosystems, campus R&D culture, and academic environments at Nanyang Technological University (NTU) and the National University of Singapore (NUS).",
      id: "Mempelajari ekosistem teknik, budaya riset kampus, dan lingkungan akademik di Nanyang Technological University (NTU) serta National University of Singapore (NUS).",
    },
  },
  {
    id: "jp",
    country: { en: "Japan", id: "Jepang" },
    code: "JP · TOKYO / YOKOHAMA / KYOTO",
    tag: { en: "Robotics & World Final", id: "Robotika & Final Dunia" },
    title: {
      en: "Yokohama Robotics, Kyoto & Tokyo GBWC",
      id: "Riset Robotika Yokohama, Kyoto & Tokyo",
    },
    summary: {
      en: "Observed large-scale mechatronics at Gundam Factory Yokohama, explored cultural heritage in Kyoto, and competed as Indonesia's representative at GBWC World Finals in Tokyo.",
      id: "Mengamati mekatronika skala penuh di Gundam Factory Yokohama, mengeksplorasi budaya Kyoto, dan bertanding di Final Dunia GBWC Tokyo.",
    },
  },
  {
    id: "th",
    country: { en: "Thailand", id: "Thailand" },
    code: "TH · PHUKET",
    tag: { en: "International Olympiad", id: "Olimpiade Internasional" },
    title: {
      en: "TIMO — Thailand Int'l Mathematical Olympiad",
      id: "TIMO — Olimpiade Matematika Internasional",
    },
    summary: {
      en: "Competed against international delegates in the Thailand International Mathematical Olympiad in Phuket (Bronze Award 2018 & 2019).",
      id: "Berkompetisi dengan delegasi internasional pada Thailand International Mathematical Olympiad (TIMO) di Phuket (Medali Perunggu 2018 & 2019).",
    },
  },
  {
    id: "hk",
    country: { en: "Hong Kong", id: "Hong Kong" },
    code: "HK · HKIMO",
    tag: { en: "International Olympiad", id: "Olimpiade Internasional" },
    title: {
      en: "HKIMO & Cultural Heritage Exploration",
      id: "HKIMO & Eksplorasi Sejarah Budaya",
    },
    summary: {
      en: "Participated in the Hong Kong International Mathematical Olympiad (Bronze Award 2018 & 2019) while visiting the Hong Kong Palace Museum.",
      id: "Mengikuti Hong Kong International Mathematical Olympiad (Medali Perunggu 2018 & 2019) sekaligus mempelajari sejarah seni di Hong Kong Palace Museum.",
    },
  },
];

export const COMMUNITY_ITEMS: CommunityItem[] = [
  {
    id: "pudokorman",
    period: "2017 – 2019",
    tag: { en: "Documentary Film", id: "Film Dokumenter" },
    title: {
      en: "Director & Editor — Film 'Via Dolorosa'",
      id: "Sutradara & Editor — Film 'Via Dolorosa'",
    },
    org: "PUDOKORMAN Elderly Community, Surabaya",
    summary: {
      en: "Directed, filmed, and edited the documentary 'Visualization Stations of the Cross (Via Dolorosa)' (31.03.2017) plus event documentation for the elderly worship community.",
      id: "Menyutradarai, merekam, dan menyunting film dokumenter 'Via Dolorosa' (31.03.2017) beserta dokumentasi kegiatan komunitas lansia.",
    },
  },
  {
    id: "santo-yakobus",
    period: "2016 – Present",
    tag: { en: "Parish Service & Media", id: "Pelayanan & Media" },
    title: {
      en: "Senior Altar Boy & Parish Media Team",
      id: "Putra Altar Senior & Tim Media Paroki",
    },
    org: "Saint James Roman Catholic Church, Surabaya",
    summary: {
      en: "Volunteering as Senior Altar Boy managing liturgy ceremonies while handling church video recording and photography for parish publications (2017–2023).",
      id: "Melayani sebagai Putra Altar Senior dalam tata liturgi sekaligus mengelola dokumentasi foto dan video resmi paroki.",
    },
  },
  {
    id: "orphanage",
    period: "2017 – 2023",
    tag: { en: "Social Volunteering", id: "Relawan Sosial" },
    title: {
      en: "Orphanage Educational & Aid Volunteer",
      id: "Relawan Edukasi & Sosial Panti Asuhan",
    },
    org: "Tarekat Maria Mediatrix Orphanage House",
    summary: {
      en: "Organized interactive learning activities, mentoring, and charitable support programs for children over six years.",
      id: "Menyelenggarakan kegiatan belajar interaktif, pendampingan, dan bantuan sosial bagi anak-anak panti.",
    },
  },
  {
    id: "world-clean-day",
    period: "2023",
    tag: { en: "Environmental Action", id: "Aksi Lingkungan" },
    title: {
      en: "World Clean Day Volunteer",
      id: "Relawan World Clean Day 2023",
    },
    org: "CAVDITARIO Volunteering",
    summary: {
      en: "Joined coordinated urban waste cleanup drives and sustainability awareness campaigns.",
      id: "Berpartisipasi dalam aksi bersih lingkungan dan kampanye kesadaran pengelolaan sampah.",
    },
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "pub-10",
    year: "2026",
    outlet: "BINUS ASO School of Engineering (BASE)",
    title: "Kisah Kemenangan DRAVIXA di Kompetisi Toyota Software Academy Indonesia 2026",
    url: "https://base.binus.ac.id/automotive-robotics-engineering/2026/11/05/kisah-kemenangan-dravixa-di-kompetisi-toyota-software-academy-indonesia-2026/",
  },
  {
    id: "pub-9",
    year: "2025",
    outlet: "BINUS ASO BASE",
    title: "Mahasiswa BINUS ASO Terpilih Mengikuti Toyota Mobility Innovation Development (T-MIND)",
    url: "https://base.binus.ac.id/2025/12/15/mahasiswa-binus-aso-terpilih-mengikuti-toyota-mobility-innovation-development-t-mind/",
  },
  {
    id: "pub-1",
    year: "2025",
    outlet: "BINUS Student Achievement",
    title: "PILMAPRES BINUS 2025: Mahasiswa Berprestasi Siap Melaju ke Tingkat Nasional",
    url: "https://student.binus.ac.id/2025/03/pilmapres-binus-2025-mahasiswa-berprestasi-siap-melaju-ke-tingkat-nasional/",
  },
  {
    id: "pub-2",
    year: "2025",
    outlet: "BINUS Instagram",
    title: "MAWAPRES BINUS 2025 Faculty Winner Announcement",
    url: "https://www.instagram.com/binusstudentachievement/p/DEvVD1tTRuS/",
  },
  {
    id: "pub-3",
    year: "2023",
    outlet: "Bandai Spirits YouTube",
    title: "GBWC 11th Tournament World Final Broadcast",
    url: "https://www.youtube.com/live/L6gfQ6rZPtQ?si=fe7_p83IyZ--O9jbE&t=2708",
  },
  {
    id: "pub-4",
    year: "2021",
    outlet: "Suara Surabaya",
    title: "Indonesia Bangkit Luar Biasa: Mark Alexander Jadi Juara Dunia Karena Hobi Merangkai Gunpla",
    url: "https://www.suarasurabaya.net/indonesiabangkit/2021/mark-alexander-peserta-ibmlb-jadi-juara-dunia-karena-hobi-merangkai-gunpla/",
  },
  {
    id: "pub-5",
    year: "2021",
    outlet: "Suara Surabaya",
    title: "15 Pemenang Indonesia Bangkit Muda Luar Biasa Menerima Beasiswa",
    url: "https://www.suarasurabaya.net/kelanakota/2021/15-pemenang-indonesia-bangkit-muda-luar-biasa-ibmlb-menerima-beasiswa-kuliah-di-ubaya/",
  },
  {
    id: "pub-6",
    year: "2021",
    outlet: "E100 Suara Surabaya FM",
    title: "E100 Suara Surabaya FM Feature: Mark Menjadi Juara Dunia Karena Hobi Gunpla",
    url: "https://www.facebook.com/share/v/1EgsYGCnro/",
  },
  {
    id: "pub-11",
    year: "2020",
    outlet: "SMA Kristen Petra 1 Surabaya",
    title: "Berprestasi Meraih Grand Champion Dalam International Applied Science Olympiad 2020",
    url: "https://sma1.pppkpetra.sch.id/berprestasi-meraih-grand-champion-dalam-international-applied-science-olympiad-2020/",
  },
  {
    id: "pub-12",
    year: "2019",
    outlet: "Duniaku · IDN Times",
    title: "Inilah Daftar Para Pemenang GBWC Indonesia 2019! (1st Champion Open A Course)",
    url: "https://duniaku.idntimes.com/geek/mainan/pemenang-gbwc-indonesia-2019-daftar-00-l6yjm-wlzn28",
  },
  {
    id: "pub-13",
    year: "2019",
    outlet: "eduASIAs",
    title: "Mark Alexander Ierwanto, Siswa Jenius Indonesia Juara Dunia dalam Kejuaraan Desain Membuat Robot Mecha di Jepang",
    url: "https://eduasias.wordpress.com/2019/01/08/siswa-smp-indonesia-juara-dunia-dalam-kejuaraan-desain-membuat-robot-mecha-di-tokyo-jepang/",
  },
  {
    id: "pub-14",
    year: "2019",
    outlet: "JPNN Media",
    title: "Siswa SMP Petra 1 Berhasil Kalahkan Legenda Asal Jepang",
    url: "https://www.jpnn.com/news/siswa-smp-petra-1-berhasil-kalahkan-legenda-asal-jepang",
  },
  {
    id: "pub-15",
    year: "2019",
    outlet: "Harian Disway",
    title: "Belajar Otodidak, Perkakas Beli Sendiri — Kisah Juara Dunia Gunpla Surabaya",
    url: "https://harian.disway.id/read/31223/belajar-otodidak-perkakas-beli-sendiri",
  },
  {
    id: "pub-7",
    year: "2018",
    outlet: "GUNDAM.INFO",
    title: "Japan Champion Wins World Cup! Gunpla Builders World Cup 2018 World Tournament Finals Report",
    url: "https://en.gundam.info/news/event/news_event_20181210_0008.html",
  },
  {
    id: "pub-8",
    year: "2018",
    outlet: "Bandai Spirits YouTube",
    title: "GBWC 2018 World Championship Award Ceremony (Tokyo)",
    url: "https://www.youtube.com/live/9udrMAeLJMI?si=k_DkKUYVu38wQM7io&t=1783",
  },
];
