import type { Project } from "../types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "dravixa",
    code: "PRJ-01",
    category: "ai-robotics",
    featured: true,
    year: "Feb – Jun 2026",
    title: {
      en: "DRAVIXA — Dynamic Robot Assistant for Vehicle Intelligence",
      id: "DRAVIXA — Asisten Robot Dinamis untuk Kecerdasan Kendaraan",
    },
    context: {
      en: "TOYOTA Software Academy Indonesia 2026 (20M IDR Funded · TMMIN & STEI ITB)",
      id: "TOYOTA Software Academy Indonesia 2026 (Pendanaan 20 Juta IDR · TMMIN & STEI ITB)",
    },
    role: {
      en: "Hardware & Software Lead, 3D Robot Design, HMI & Edge-AI",
      id: "Lead Hardware & Software, Desain Robot 3D, HMI & Edge-AI",
    },
    outcome: {
      en: "2nd Winner (Juara 2), Best Finalist Team & Top 25 / 500+ Candidates",
      id: "Juara 2 Nasional, Best Finalist Team & Top 25 / 500+ Kandidat",
    },
    summary: {
      en: "20M IDR-funded proactive in-cabin AI co-pilot robot built at Toyota's Karawang training track; monitors driver mood and cognitive fatigue in real time using MediaPipe and edge LLM voice interaction.",
      id: "Robot co-pilot kabin AI proaktif dengan pendanaan riset 20 juta IDR; memantau emosi dan kelelahan kognitif pengemudi secara real-time dengan MediaPipe serta interaksi suara LLM di edge.",
    },
    specs: ["Jetson Orin Nano", "CAN Bus / Vehicle Arch", "MediaPipe + LLM", "Autodesk Inventor", "2-Axis Servo"],
    accomplishments: {
      en: [
        "Selected from 500+ nationwide candidates into Top 25 for the T-MIND Toyota Software Engineer Bootcamp covering vehicle architecture, CAN bus embedded systems, and industrial AI/ML at TMMIN Karawang.",
        "Led hardware and software execution for the 20M IDR-funded DRAVIXA research prototype targeting driver fatigue and microsleep prevention (70–85% projected attention-lapse risk reduction).",
        "Modeled the modular robot in Autodesk Inventor (CAD) with 2-axis servo articulation, 3D-printed the enclosure, and integrated an AMOLED display, ReSpeaker mic array, and camera module.",
        "Co-deployed edge AI on NVIDIA Jetson Orin Nano combining MediaPipe mood/fatigue detection with STT/LLM/TTS voice interaction.",
        "Awarded 2nd Place at Toyota Software Academy Indonesia 2026 and Best Finalist Team at the Toyota Expertise Exhibition.",
      ],
      id: [
        "Terpilih sebagai Top 25 dari 500+ kandidat nasional pada Toyota Software Engineer Bootcamp (arsitektur kendaraan, CAN bus embedded systems, dan AI/ML industri di pabrik TMMIN Karawang).",
        "Memimpin pengembangan hardware dan software prototipe riset DRAVIXA senilai pendanaan 20 juta IDR untuk mencegah microsleep pengemudi.",
        "Mendesain robot modular di Autodesk Inventor (CAD) dengan servo 2-axis, mencetak 3D bodi robot, dan merakit layar AMOLED, ReSpeaker mic array, serta modul kamera.",
        "Mengintegrasikan edge-AI pada NVIDIA Jetson Orin Nano yang memadukan deteksi emosi/kelelahan MediaPipe dengan dialog suara STT/LLM/TTS.",
        "Meraih Juara 2 Toyota Software Academy Indonesia 2026 dan Best Finalist Team pada Toyota Expertise Exhibition.",
      ],
    },
    coverImage: "/assets/slide-21-dravixa.jpg",
    coverCaption: {
      en: "DRAVIXA system architecture, modular CAD, and live hardware prototype",
      id: "Arsitektur sistem DRAVIXA, desain CAD modular, dan prototipe fisik",
    },
    gallery: [
      {
        src: "/assets/slide-21-dravixa.jpg",
        caption: {
          en: "System architecture diagram, modular CAD, and dashboard prototype",
          id: "Diagram arsitektur sistem, CAD modular, dan prototipe dashboard",
        },
      },
      {
        src: "/assets/linkedin-dravixa-team.jpg",
        caption: {
          en: "DRAVIXA team with physical prototype at Toyota Software Academy Indonesia 2026",
          id: "Tim DRAVIXA bersama prototipe fisik di Toyota Software Academy Indonesia 2026",
        },
      },
      {
        src: "/assets/toyota-ceremony.jpg",
        caption: {
          en: "Best Finalist awarding ceremony — Toyota Expertise Exhibition 2026",
          id: "Penyerahan penghargaan Best Finalist — Toyota Expertise Exhibition 2026",
        },
      },
      {
        src: "/assets/toyota-plaque.jpg",
        caption: {
          en: "2nd Place Winner plaque — Toyota Software Academy Indonesia 2026",
          id: "Plakat Juara 2 — Toyota Software Academy Indonesia 2026",
        },
      },
      {
        src: "/assets/toyota-cert-2nd.jpg",
        caption: {
          en: "Official 2nd Place Certificate issued by PT Toyota Motor Manufacturing Indonesia",
          id: "Sertifikat resmi Juara 2 dari PT Toyota Motor Manufacturing Indonesia",
        },
      },
    ],
    videoUrl: "https://drive.google.com/file/d/10fW3zqWtYnO6jjeqDwjq37xR3rJflieY/view?usp=sharing",
    localVideoUrl: "/local-media/dravixa-demo.mp4",
    videoLabel: {
      en: "DRAVIXA Live Hardware & AI Co-Pilot Demo",
      id: "Video Demo Prototipe & AI Co-Pilot DRAVIXA",
    },
  },
  {
    id: "brin-gms",
    code: "PRJ-02",
    category: "iot-embedded",
    featured: true,
    year: "Feb – Jun 2026",
    title: {
      en: "Hydrolytix — Smart Gas Data Collector & Monitoring Platform",
      id: "Hydrolytix — Platform Pengumpul & Pemantau Data Gas Cerdas",
    },
    context: {
      en: "BRIN Smart Mechatronics Research Center, Bandung (Mentor: Muhammad Kristamto Adhitya, Ph.D.)",
      id: "Pusat Riset Mekatronika Cerdas BRIN, Bandung (Pembimbing: Dr. Muhammad Kristamto Adhitya)",
    },
    role: {
      en: "Research & IoT Development Intern · Co-Designer (DJKI IP)",
      id: "Intern Riset & Pengembangan IoT · Pendesain HKI DJKI",
    },
    outcome: {
      en: "Registered DJKI Patent A00202603133 & Best Finalist BEST BRIN 2026",
      id: "HKI Desain Industri A00202603133 & Best Finalist BEST BRIN 2026",
    },
    summary: {
      en: "Edge-to-cloud Raspberry Pi 4 instrumentation system aggregating 6 industrial gas sensors via RS485/Modbus RTU for real-time H2 purity and mass flow analysis in enzymatic bioreactors.",
      id: "Sistem instrumentasi edge-to-cloud berbasis Raspberry Pi 4 yang membaca 6 sensor gas industri via RS485/Modbus RTU untuk analisis kemurnian H2 dan laju alir bioreaktor enzimatik.",
    },
    specs: ["Raspberry Pi 4", "RS485 / Modbus RTU", "6-Gas Sensor Array", "Ideal Gas Law Python", "Firebase + SSD Buffer"],
    accomplishments: {
      en: [
        "Engineered a Raspberry Pi 4 edge-to-cloud architecture polling 6 industrial multi-parameter sensors (CO, CO2, O2, CH4, H2S, H2) via RS485/Modbus RTU and I2C under mentor Muhammad Kristamto Adhitya, Ph.D.",
        "Implemented Python compensation algorithms applying the Ideal Gas Law for NTP-standardized temperature and pressure mass-flow accuracy.",
        "Built a dual-layer persistence strategy pairing local SSD ring-buffering with Firebase Realtime Database for uninterrupted 24/7 laboratory monitoring.",
        "Co-designed the Gas Monitoring System (GMS) angled HMI enclosure and integrated gas piping manifold, officially registered as DJKI Industrial Design No. A00202603133.",
        "Awarded Best Finalist (BEST BRIN) at the BRIN Exhibition on Smart Technology in conjunction with ICSMech 2026.",
      ],
      id: [
        "Membangun arsitektur edge-to-cloud Raspberry Pi 4 untuk mengakuisisi 6 sensor gas industri (CO, CO2, O2, CH4, H2S, H2) via RS485/Modbus RTU dan I2C bersama pembimbing Dr. Muhammad Kristamto Adhitya.",
        "Mengembangkan algoritma Python berbasis Hukum Gas Ideal untuk kompensasi suhu dan tekanan secara real-time sesuai standar NTP.",
        "Menerapkan penyimpanan ganda berupa ring-buffer SSD lokal dan Firebase Realtime Database untuk pemantauan laboratorium 24/7.",
        "Turut merancang enklosur Gas Monitoring System (GMS) dengan layar HMI miring dan jalur pipa terintegrasi hingga terdaftar resmi di DJKI (No. A00202603133).",
        "Meraih penghargaan Best Finalist pada pameran BEST BRIN 2026 bersama ICSMech.",
      ],
    },
    coverImage: "/assets/slide-22-brin-gms.jpg",
    coverCaption: {
      en: "BRIN Smart Gas Data Collector CAD, touchscreen HMI, mobile & web dashboard",
      id: "CAD pengumpul data gas BRIN, HMI layar sentuh, serta dashboard web & mobile",
    },
    gallery: [
      {
        src: "/assets/slide-22-brin-gms.jpg",
        caption: {
          en: "Full system overview: CAD enclosure, local HMI, mobile telemetry & web dashboard",
          id: "Ringkasan sistem lengkap: enklosur CAD, HMI lokal, telemetri mobile & dashboard web",
        },
      },
      {
        src: "/assets/brin-gms-cad.jpg",
        caption: {
          en: "Gas Monitoring System (GMS) industrial design CAD — DJKI A00202603133",
          id: "Desain CAD Gas Monitoring System (GMS) — Terdaftar DJKI A00202603133",
        },
      },
      {
        src: "/assets/awards/brin-best-expo.webp",
        caption: {
          en: "Best Finalist showcase at BEST BRIN 2026 (The Trans Luxury Hotel, Bandung)",
          id: "Pameran Best Finalist BEST BRIN 2026 di Bandung",
        },
      },
      {
        src: "/assets/projects/brin-gms-screen.webp",
        caption: {
          en: "Local touchscreen HMI showing live H2 purity & mass flow telemetry",
          id: "Layar sentuh HMI lokal menampilkan kemurnian H2 dan laju alir secara langsung",
        },
      },
      {
        src: "/assets/linkedin-brin-labcoat.jpg",
        caption: {
          en: "On-site at BRIN Smart Mechatronics Research Center, Bandung",
          id: "Dokumentasi riset di Pusat Riset Mekatronika Cerdas BRIN, Bandung",
        },
      },
      {
        src: "/assets/linkedin-brin-campus.jpg",
        caption: {
          en: "BRIN Kawasan Sains Teknologi Samaun Samadikun, Bandung",
          id: "Kawasan Sains Teknologi Samaun Samadikun BRIN, Bandung",
        },
      },
    ],
    videoUrl: "https://drive.google.com/file/d/1BoXvWZfjO2s2lTX1gE0pmdtbQlV1tIqQ/view?usp=sharing",
    localVideoUrl: "/local-media/hydrolytix-demo.mp4",
    videoLabel: {
      en: "Hydrolytix Bioreactor Telemetry & Hardware Demo",
      id: "Video Demo Telemetri & Perangkat Keras Hydrolytix",
    },
  },
  {
    id: "punguters",
    code: "PRJ-03",
    category: "ai-robotics",
    featured: false,
    year: "Sep 2025 – Jan 2026",
    title: {
      en: "Punguters — Autonomous Trash Picking & Sorting Robot",
      id: "Punguters — Robot Pemilah & Pengambil Sampah Otonom",
    },
    context: {
      en: "BINUS ASO School of Engineering (Group Project)",
      id: "BINUS ASO School of Engineering (Proyek Tim)",
    },
    role: {
      en: "Project Leader, Electrical Designer & 3D Fabrication",
      id: "Ketua Proyek, Desainer Elektrik & Fabrikasi 3D",
    },
    outcome: {
      en: "6-class YOLOv8n waste sorting with PID Mecanum navigation",
      id: "Deteksi 6 jenis sampah YOLOv8n dengan navigasi Mecanum PID",
    },
    summary: {
      en: "Omnidirectional mobile robot running YOLOv8n on Jetson Nano to classify six waste categories and retrieve items via custom 3D-printed parallel grippers.",
      id: "Robot mobile omnidirectional dengan YOLOv8n pada Jetson Nano untuk memilah 6 kategori sampah dan mengambilnya memakai gripper paralel cetak 3D.",
    },
    specs: ["Jetson Nano", "YOLOv8n CV", "Arduino Mega", "Mecanum PID", "VL6180X ToF"],
    accomplishments: {
      en: [
        "Deployed CNN/YOLOv8n real-time object detection on Jetson Nano to classify 6 waste classes (cardboard, glass, metal, paper, plastic, biodegradable) and avoid obstacles.",
        "Built omnidirectional Mecanum drive controlled by Arduino Mega with optical-encoder PID loops for straight tracking and accurate 90-degree turns.",
        "Designed a custom parallel actuator gripper powered by MG996R servos alongside VL6180X ToF proximity sensors and MPU6050 IMU.",
        "Engineered high-current power distribution via an XL4016E1 200W step-down module.",
      ],
      id: [
        "Mengimplementasikan deteksi objek real-time CNN/YOLOv8n di Jetson Nano untuk 6 kategori sampah serta deteksi rintangan.",
        "Merancang penggerak roda Mecanum berbasis Arduino Mega dengan kontrol PID encoder optik untuk gerak presisi.",
        "Mendesain gripper paralel aktuator servo MG996R beserta integrasi sensor jarak VL6180X ToF dan giroskop MPU6050.",
        "Mengelola distribusi daya beban berat menggunakan modul step-down XL4016E1 200W.",
      ],
    },
    coverImage: "/assets/projects/punguters-robot.webp",
    coverCaption: {
      en: "Punguters autonomous waste-sorting Mecanum rover with 3D-printed parallel gripper",
      id: "Prototipe robot Punguters dengan sasis Mecanum dan gripper paralel cetak 3D",
    },
    gallery: [
      {
        src: "/assets/projects/punguters-robot.webp",
        caption: {
          en: "Physical Mecanum rover with 3D-printed parallel gripper & Jetson Nano",
          id: "Prototipe fisik rover Mecanum dengan gripper paralel cetak 3D & Jetson Nano",
        },
      },
      {
        src: "/assets/projects/punguters-cad.webp",
        caption: {
          en: "3D CAD design of the custom parallel gripper & servo actuation linkage",
          id: "Desain CAD 3D gripper paralel kustom beserta mekanisme aktuator servo",
        },
      },
      {
        src: "/assets/slide-29-punguters.jpg",
        caption: {
          en: "Mechanical gripper CAD, Mecanum chassis, and Jetson/Arduino block architecture",
          id: "CAD gripper mekanis, sasis Mecanum, dan arsitektur kontrol Jetson/Arduino",
        },
      },
      {
        src: "/assets/slide-30-punguters-2.jpg",
        caption: {
          en: "Hardware assembly, electronics integration, and field sorting workflow",
          id: "Perakitan perangkat keras, integrasi elektronika, dan alur pemilahan",
        },
      },
    ],
  },
  {
    id: "firebot",
    code: "PRJ-04",
    category: "ai-robotics",
    featured: false,
    year: "Mar – Jun 2025",
    title: {
      en: "Autonomous Fire-Fighting Robot",
      id: "Robot Pemadam Api Otonom",
    },
    context: {
      en: "BINUS ASO — Intro Microcontroller Project",
      id: "BINUS ASO — Proyek Intro Mikrokontroler",
    },
    role: {
      en: "Project Lead, System Architect & C++ Firmware",
      id: "Ketua Proyek, Arsitek Sistem & Firmware C++",
    },
    outcome: {
      en: "Vision-guided pan/tilt turret with 360° rapid flame acquisition",
      id: "Turret bidik otomatis berbasis visi dengan pemindaian 360°",
    },
    summary: {
      en: "Dual-ESP32 autonomous rover that navigates obstacles via 3 ultrasonic sensors + gyroscope and locks onto flames using ESP32-CAM vision telemetry.",
      id: "Rover otonom dual-ESP32 yang bernavigasi dengan 3 sensor ultrasonik + giroskop serta mengunci titik api melalui visi ESP32-CAM.",
    },
    specs: ["ESP32 + ESP32-CAM", "C++ State Machine", "3× Ultrasonic + Gyro", "MQ-2 + ToF", "Pan/Tilt Turret"],
    accomplishments: {
      en: [
        "Architected and authored the full C++ firmware implementing a 4-state machine (Patrol, Search, Auto-Aim, Extinguish).",
        "Established serial vision telemetry between an ESP32-CAM flame detector and the primary ESP32 controller to steer a pan/tilt extinguishing turret.",
        "Combined 3 ultrasonic rangefinders, ToF, MQ-2 smoke/gas sensing, and gyroscope feedback for stabilized 90-degree turns.",
        "Implemented a 360-degree rapid pre-scan servo routine to orient toward heat signatures before engaging fine auto-aim.",
      ],
      id: [
        "Merancang arsitektur elektronika dan menulis kode C++ penuh dengan state machine 4-fase (Patrol, Search, Auto-Aim, Extinguish).",
        "Menghubungkan deteksi api ESP32-CAM melalui komunikasi serial ke kontroler utama ESP32 untuk mengarahkan turret pan/tilt.",
        "Menggabungkan 3 sensor ultrasonik, ToF, sensor gas MQ-2, dan giroskop untuk navigasi dan belokan 90° yang stabil.",
        "Menerapkan rutinitas pemindaian cepat 360° sebelum mengaktifkan sistem bidik presisi.",
      ],
    },
    coverImage: "/assets/projects/firebot-robot.webp",
    coverCaption: {
      en: "Autonomous fire-fighting rover with 3D-printed chassis, ultrasonic array & water turret",
      id: "Rover pemadam api otonom dengan sasis cetak 3D, sensor ultrasonik & turret air",
    },
    gallery: [
      {
        src: "/assets/projects/firebot-robot.webp",
        caption: {
          en: "Physical prototype with custom 3D-printed body and front ultrasonic array",
          id: "Prototipe fisik dengan bodi cetak 3D kustom dan susunan sensor ultrasonik",
        },
      },
      {
        src: "/assets/projects/firebot-wiring.webp",
        caption: {
          en: "Dual-ESP32 electronics integration and internal wiring",
          id: "Integrasi elektronika dual-ESP32 dan pengkabelan internal",
        },
      },
      {
        src: "/assets/slide-36-firebot-2.jpg",
        caption: {
          en: "System architecture, state machine flow, and wiring schematics",
          id: "Arsitektur sistem, alur state machine, dan skematik pengkabelan",
        },
      },
    ],
  },
  {
    id: "vbcefd",
    code: "PRJ-05",
    category: "digital-ml",
    featured: false,
    year: "Sep 2024 – Jan 2025",
    title: {
      en: "VBCEFD — Voice-Based Car Engine Fault Detection",
      id: "VBCEFD — Deteksi Kerusakan Mesin Mobil Berbasis Suara",
    },
    context: {
      en: "BINUS ASO School of Engineering (Group Project)",
      id: "BINUS ASO School of Engineering (Proyek Tim)",
    },
    role: {
      en: "Digital Signal Processing & ML Model Developer",
      id: "Pengembang DSP & Model Machine Learning",
    },
    outcome: {
      en: "99.94% training / 94.74%–100% test accuracy (SVM)",
      id: "Akurasi latih 99.94% / uji 94.74%–100% (SVM)",
    },
    summary: {
      en: "Acoustic diagnostic pipeline in MATLAB & Simulink that extracts MFCC/FFT signatures from Toyota Avanza 1.3L engine audio to detect knocking and belt faults.",
      id: "Sistem diagnostik akustik di MATLAB & Simulink dengan ekstraksi fitur MFCC/FFT pada suara mesin Toyota Avanza 1.3L untuk mendeteksi knocking dan masalah sabuk.",
    },
    specs: ["MATLAB & Simulink", "MFCC + FFT", "SVM Classifier", "Acoustic DSP", "Toyota Avanza 1.3L"],
    accomplishments: {
      en: [
        "Recorded real-world engine audio datasets on a 1.3L 4-cylinder Toyota Avanza across normal, knocking, and whistling belt fault states.",
        "Extracted spectral and cepstral features using FFT and MFCC pipelines in MATLAB.",
        "Trained and validated a Support Vector Machine (SVM) classifier achieving 99.94% training accuracy and 94.74%–100% test accuracy across fault bands.",
      ],
      id: [
        "Mengumpulkan dataset audio nyata dari mesin Toyota Avanza 1.3L 4-silinder untuk kondisi normal, knocking, dan suara berdecit.",
        "Mengekstrak fitur spektral dan cepstral menggunakan pipeline FFT dan MFCC di MATLAB.",
        "Melatih serta menguji model Support Vector Machine (SVM) dengan akurasi latih 99.94% dan akurasi uji 94.74%–100%.",
      ],
    },
    coverImage: "/assets/slide-37-vbcefd.jpg",
    coverCaption: {
      en: "Acoustic fault taxonomy and Toyota Avanza 1.3L DSP study",
      id: "Taksonomi kerusakan akustik dan studi DSP Toyota Avanza 1.3L",
    },
    gallery: [
      {
        src: "/assets/slide-37-vbcefd.jpg",
        caption: {
          en: "Engine fault classification overview (knocking vs belt whistle)",
          id: "Ringkasan klasifikasi kerusakan mesin (detonasi vs sabuk)",
        },
      },
      {
        src: "/assets/slide-39-vbcefd-2.jpg",
        caption: {
          en: "SVM evaluation matrix showing 99.94% training and 94.74–100% testing accuracy",
          id: "Matriks evaluasi SVM dengan akurasi latih 99.94% dan uji 94.74–100%",
        },
      },
      {
        src: "/assets/archive/vbcefd-detail.webp",
        caption: {
          en: "MFCC/FFT signal extraction pipeline and MATLAB Simulink workflow",
          id: "Pipeline ekstraksi sinyal MFCC/FFT dan alur kerja MATLAB Simulink",
        },
      },
    ],
  },
  {
    id: "innovedu",
    code: "PRJ-06",
    category: "industrial-3d",
    featured: false,
    year: "Jul 2024 – Jun 2026",
    title: {
      en: "INNOVEDU — Custom Olympiad Trophies & Medals",
      id: "INNOVEDU — Desain & Produksi Trofi dan Medali Olimpiade",
    },
    context: {
      en: "INNOVEDU International Academic Competitions (Freelance)",
      id: "Kompetisi Akademik Internasional INNOVEDU (Freelance)",
    },
    role: {
      en: "CAD Product Designer & Additive Manufacturer",
      id: "Desainer Produk CAD & Manufaktur Aditif",
    },
    outcome: {
      en: "Delivered official awards for GBMO, IASO, WSSO, MABO & JELC",
      id: "Memproduksi trofi & medali resmi untuk GBMO, IASO, WSSO, MABO & JELC",
    },
    summary: {
      en: "End-to-end freelance industrial design, 3D printing, and metallic airbrush finishing for international mathematics, science, and biology olympiad awards.",
      id: "Desain CAD menyeluruh, pencetakan 3D, dan finishing airbrush metalik untuk trofi serta medali resmi olimpiade akademik internasional.",
    },
    specs: ["Autodesk Inventor", "BambuLab / 3D Print", "Airbrush Finishing", "Batch Production", "Custom Tooling"],
    accomplishments: {
      en: [
        "Designed bespoke multi-part trophy and medal geometries in Autodesk Inventor tailored to each olympiad's visual identity (GBMO 2024/2025, IASO 2025, WSSO 2025, MABO 2025, JELC).",
        "Manufactured production batches on personal 3D printers under tight international event schedules.",
        "Executed multi-stage sanding, priming, and metallic airbrush finishing for ceremony-ready durability.",
      ],
      id: [
        "Mendesain geometri trofi dan medali kustom di Autodesk Inventor sesuai tema masing-masing olimpiade (GBMO, IASO, WSSO, MABO, JELC).",
        "Memproduksi batch piala menggunakan 3D printer pribadi dengan jadwal pengiriman acara yang ketat.",
        "Melakukan proses penghalusan, primer, serta pengecatan airbrush metalik untuk hasil siap panggung.",
      ],
    },
    coverImage: "/assets/slide-23-innovedu-trophy.jpg",
    coverCaption: {
      en: "3D-printed & airbrushed GBMO / IASO / WSSO trophy series",
      id: "Seri trofi GBMO / IASO / WSSO hasil cetak 3D dan finishing airbrush",
    },
    gallery: [
      {
        src: "/assets/slide-23-innovedu-trophy.jpg",
        caption: {
          en: "Custom trophy progression from raw 3D print to finished ceremony pieces",
          id: "Progres trofi dari cetakan 3D mentah hingga finishing upacara penghargaan",
        },
      },
      {
        src: "/assets/slide-28-innovedu-medal.jpg",
        caption: {
          en: "GBMO, MABO, and JELC custom medal series with branded lanyards",
          id: "Seri medali kustom GBMO, MABO, dan JELC beserta pita",
        },
      },
      {
        src: "/assets/archive/innovedu-detail-1.webp",
        caption: {
          en: "Autodesk Inventor CAD geometry and 3D-printed trophy components",
          id: "Geometri CAD Autodesk Inventor dan komponen trofi cetak 3D",
        },
      },
      {
        src: "/assets/archive/innovedu-detail-2.webp",
        caption: {
          en: "Batch airbrush surface finishing and assembly quality control",
          id: "Proses finishing airbrush dan kontrol kualitas perakitan batch",
        },
      },
      {
        src: "/assets/archive/innovedu-medal-detail.webp",
        caption: {
          en: "Production-ready competition medals with custom olympiad emblems",
          id: "Medali kompetisi siap seremoni dengan emblem olimpiade kustom",
        },
      },
    ],
  },
  {
    id: "fpga-counter",
    code: "PRJ-07",
    category: "digital-ml",
    featured: false,
    year: "Sep 2024 – Jan 2025",
    title: {
      en: "4-Digit Seven-Segment Display Counter (FPGA)",
      id: "Penghitung Seven-Segment 4-Digit Berbasis FPGA",
    },
    context: {
      en: "BINUS ASO — Digital Systems Engineering",
      id: "BINUS ASO — Rekayasa Sistem Digital",
    },
    role: {
      en: "BCD Counter & Top-Level RTL Designer",
      id: "Perancang BCD Counter & Top-Level RTL",
    },
    outcome: {
      en: "Flicker-free 240 Hz multiplexed 0000–9999 counter on Basys3",
      id: "Tampilan 0000–9999 bebas kedip 240 Hz di board FPGA Basys3",
    },
    summary: {
      en: "Pure hardware-description FPGA implementation deriving 1 Hz counting and 240 Hz anode multiplexing clocks from the Basys3 100 MHz oscillator.",
      id: "Implementasi RTL murni di FPGA Basys3 yang membagi clock 100 MHz menjadi 1 Hz untuk pencacah BCD dan 240 Hz untuk multiplexing tampilan.",
    },
    specs: ["Verilog / VHDL", "Vivado", "Basys3 FPGA", "240 Hz Mux", "RTL Testbench"],
    accomplishments: {
      en: [
        "Designed cascaded 4-bit BCD counter modules counting 0–9 with carry propagation.",
        "Built a 100 MHz clock divider generating both 1 Hz counting ticks and a 240 Hz multiplexing scan clock.",
        "Implemented a 2-bit ring counter, 4-to-1 digit multiplexer, and BCD-to-seven-segment decoder.",
        "Verified timing waveforms via a full Verilog testbench prior to Basys3 bitstream deployment.",
      ],
      id: [
        "Merancang modul pencacah BCD 4-bit bertingkat untuk hitungan desimal 0–9.",
        "Membangun pembagi frekuensi dari clock sistem 100 MHz menjadi 1 Hz (cacah) dan 240 Hz (refresh).",
        "Mengimplementasikan ring counter 2-bit, multiplexer 4-ke-1, serta dekoder BCD ke seven-segment.",
        "Menjalankan simulasi testbench Verilog menyeluruh sebelum implementasi pada FPGA Basys3.",
      ],
    },
    coverImage: "/assets/projects/fpga-basys3.webp",
    coverCaption: {
      en: "4-digit multiplexed seven-segment BCD counter running on Basys3 FPGA",
      id: "Penghitung BCD seven-segment 4-digit berjalan pada board FPGA Basys3",
    },
    gallery: [
      {
        src: "/assets/projects/fpga-basys3.webp",
        caption: {
          en: "Hardware counter running live on Digilent Basys3 FPGA",
          id: "Penghitung berjalan langsung pada board FPGA Digilent Basys3",
        },
      },
      {
        src: "/assets/projects/fpga-testbench.webp",
        caption: {
          en: "Vivado Verilog testbench simulation waveform",
          id: "Gelombang simulasi testbench Verilog di Vivado",
        },
      },
      {
        src: "/assets/slide-42-fpga.jpg",
        caption: {
          en: "Hardware counter running on Basys3 with full simulation waveform",
          id: "Penghitung berjalan di Basys3 beserta gelombang simulasi testbench",
        },
      },
    ],
  },
  {
    id: "arcs",
    code: "PRJ-08",
    category: "iot-embedded",
    featured: false,
    year: "Feb – Jul 2024",
    title: {
      en: "ARCS — Automated Rapid Commuter System",
      id: "ARCS — Sistem Kereta Komuter Otomatis Berbasis Logika",
    },
    context: {
      en: "BINUS ASO School of Engineering (Group Project)",
      id: "BINUS ASO School of Engineering (Proyek Tim)",
    },
    role: {
      en: "Project Leader, Circuit Designer & 3D Casing",
      id: "Ketua Proyek, Perancang Sirkuit & Casing 3D",
    },
    outcome: {
      en: "100% microcontroller-free pure electronic automation",
      id: "Otomasi 100% elektronika diskrit tanpa mikrokontroler",
    },
    summary: {
      en: "Logic-gate and 555-timer rail commuter automation engineered strictly without microcontrollers or software code, verified in Multisim and fabricated in 3D-printed housings.",
      id: "Sistem otomasi kereta komuter berbasis gerbang logika, IC 555, dan relai tanpa mikrokontroler maupun pemrograman sama sekali.",
    },
    specs: ["555 Timer ICs", "Logic Gates", "Relays", "NI Multisim", "Autodesk Inventor"],
    accomplishments: {
      en: [
        "Simulated deterministic station stopping and signaling sequences using 555 timer ICs, AND/OR/NOT logic gates, and relays — zero code.",
        "Validated voltage thresholds and timing margins in NI Multisim before breadboard and perfboard assembly.",
        "Designed and 3D-printed the scale commuter train shell and station gantry in Autodesk Inventor.",
      ],
      id: [
        "Merancang logika berhenti dan sinyal stasiun deterministik memakai IC 555, gerbang logika, dan relai tanpa kode program.",
        "Memvalidasi level tegangan serta jeda waktu di NI Multisim sebelum perakitan di breadboard dan perfboard.",
        "Mendesain dan mencetak 3D bodi kereta komuter serta struktur stasiun di Autodesk Inventor.",
      ],
    },
    coverImage: "/assets/projects/arcs-train.webp",
    coverCaption: {
      en: "3D-printed commuter train unit & station gates with discrete logic control",
      id: "Unit kereta komuter cetak 3D & gerbang stasiun dengan kontrol logika diskrit",
    },
    gallery: [
      {
        src: "/assets/projects/arcs-train.webp",
        caption: {
          en: "3D-printed ARCS commuter train and automated station platform",
          id: "Kereta komuter ARCS cetak 3D dan peron stasiun otomatis",
        },
      },
      {
        src: "/assets/projects/arcs-track.webp",
        caption: {
          en: "Scale track automation test setup",
          id: "Uji coba jalur otomasi kereta skala miniatur",
        },
      },
      {
        src: "/assets/archive/arcs-detail.webp",
        caption: {
          en: "Discrete IC 555 / logic-gate timing circuit and Multisim simulation",
          id: "Rangkaian pewaktu IC 555 / gerbang logika diskrit dan simulasi Multisim",
        },
      },
    ],
  },
  {
    id: "raise",
    code: "PRJ-09",
    category: "iot-embedded",
    featured: false,
    year: "Sep 2023 – Jan 2024",
    title: {
      en: "RAISE — Robotic Advance Irrigation System",
      id: "RAISE — Sistem Irigasi Robotik Hemat Air & Energi",
    },
    context: {
      en: "IEEE R10 Competition Entry (Individual Project)",
      id: "Kompetisi IEEE R10 (Proyek Individu)",
    },
    role: {
      en: "Solo Designer, Embedded Programmer & Fabricator",
      id: "Desainer Tunggal, Pemrogram Embedded & Fabrikator",
    },
    outcome: {
      en: "Gravity-fed drip control with nocturnal auto-cutoff",
      id: "Kontrol irigasi tetes berbasis gravitasi dengan pemutus malam otomatis",
    },
    summary: {
      en: "Arduino Uno drip-irrigation prototype conserving pump energy via gravity pressure, soil moisture triggers, ultrasonic tank telemetry, and LDR night shutoff.",
      id: "Prototipe irigasi tetes berbasis Arduino Uno yang meminimalkan daya pompa dengan tekanan gravitasi, sensor kelembaban tanah, ultrasonik tangki, dan LDR.",
    },
    specs: ["Arduino Uno", "Soil Moisture", "Ultrasonic Tank", "LDR Night Cutoff", "Autodesk Inventor"],
    accomplishments: {
      en: [
        "Replaced continuous electric pumping with regulated gravity-fed drip flow calibrated via potentiometer and mechanical valves.",
        "Added photoresistor (LDR) sensing to disable nighttime watering when photosynthesis pauses.",
        "Integrated ultrasonic reservoir level monitoring with real-time LCD and mobile dashboard feedback.",
      ],
      id: [
        "Menggantikan pompa listrik terus-menerus dengan aliran gravitasi terkalibrasi menggunakan potensiometer dan katup mekanis.",
        "Menambahkan sensor cahaya (LDR) untuk menonaktifkan penyiraman otomatis pada malam hari.",
        "Mengintegrasikan sensor ultrasonik level tangki air dengan tampilan LCD dan antarmuka pemantauan.",
      ],
    },
    coverImage: "/assets/projects/raise-demo.webp",
    coverCaption: {
      en: "RAISE gravity-fed robotic irrigation prototype & mobile monitoring UI",
      id: "Prototipe irigasi robotik RAISE berbasis gravitasi & UI pemantauan seluler",
    },
    gallery: [
      {
        src: "/assets/projects/raise-demo.webp",
        caption: {
          en: "First-semester individual IEEE R10 prototype presentation",
          id: "Presentasi prototipe individu IEEE R10 semester pertama",
        },
      },
      {
        src: "/assets/projects/raise-app.webp",
        caption: {
          en: "Mobile control & telemetry interface for soil moisture and water level",
          id: "Antarmuka kontrol seluler untuk kelembaban tanah dan level air",
        },
      },
      {
        src: "/assets/archive/raise-detail.webp",
        caption: {
          en: "Soil moisture, ultrasonic reservoir, and LDR night-cutoff architecture",
          id: "Arsitektur sensor kelembaban tanah, ultrasonik tangki, dan LDR pemutus malam",
        },
      },
    ],
  },
  {
    id: "torque-lab",
    code: "PRJ-10",
    category: "industrial-3d",
    featured: false,
    year: "Mar – Jul 2024",
    title: {
      en: "Automated Torque & Parallel Force Experiment System",
      id: "Sistem Otomasi Eksperimen Torsi & Gaya Paralel",
    },
    context: {
      en: "BINUS ASO — Physics 2 Laboratory",
      id: "BINUS ASO — Laboratorium Fisika 2",
    },
    role: {
      en: "Project Leader, 3D Designer & Programmer",
      id: "Ketua Proyek, Desainer 3D & Pemrogram",
    },
    outcome: {
      en: "0.1 mm layer-height PASCO-compatible lab automation",
      id: "Otomasi lab kompatibel PASCO dengan presisi cetak 0.1 mm",
    },
    summary: {
      en: "Modular Arduino apparatus integrating dual load cells and ToF distance sensors to automate torque and parallel force measurements in university physics labs.",
      id: "Perangkat lab modular berbasis Arduino dengan dua load cell dan sensor jarak ToF untuk mengotomatiskan pengukuran torsi serta gaya paralel.",
    },
    specs: ["Arduino Uno", "2× Load Cells", "2× ToF Sensors", "0.1 mm 3D Print", "PASCO Compatible"],
    accomplishments: {
      en: [
        "Integrated dual precision load cells and two Time-of-Flight (ToF) distance sensors for simultaneous force and lever-arm acquisition.",
        "Printed modular mounting brackets at 0.1 mm layer height ensuring repeatable alignment with existing PASCO educational lab rigs.",
        "Computed and displayed live torque vectors on an onboard LCD to eliminate manual transcription errors.",
      ],
      id: [
        "Mengintegrasikan dua load cell presisi dan dua sensor jarak ToF untuk pembacaan gaya serta lengan momen serentak.",
        "Mencetak komponen modular dengan ketebalan lapis 0.1 mm agar kompatibel dan presisi pada perangkat lab PASCO.",
        "Menampilkan hasil perhitungan torsi secara langsung pada layar LCD untuk menekan kesalahan pencatatan manual.",
      ],
    },
    coverImage: "/assets/slide-41-torque.jpg",
    coverCaption: {
      en: "Dual load-cell & ToF test rig mounted to physics lab board",
      id: "Perangkat uji load-cell ganda & sensor ToF pada papan laboratorium",
    },
    gallery: [
      {
        src: "/assets/slide-41-torque.jpg",
        caption: {
          en: "PASCO-compatible 3D-printed brackets and Arduino acquisition rig",
          id: "Braket cetak 3D kompatibel PASCO dan modul akuisisi Arduino",
        },
      },
      {
        src: "/assets/archive/torque-hardware-1.webp",
        caption: {
          en: "Physical dual load-cell torque testbench mounted on PASCO rail",
          id: "Perangkat uji torsi dua load-cell terpasang di rel PASCO",
        },
      },
      {
        src: "/assets/archive/torque-hardware-2.webp",
        caption: {
          en: "Arduino acquisition wiring and ToF lever-arm sensor bracket",
          id: "Pengkabelan akuisisi Arduino dan braket sensor jarak ToF",
        },
      },
    ],
  },
  {
    id: "hooke-lab",
    code: "PRJ-11",
    category: "iot-embedded",
    featured: false,
    year: "Sep 2023 – Feb 2024",
    title: {
      en: "Automated Hooke's Law Experiment Device",
      id: "Perangkat Otomasi Eksperimen Hukum Hooke",
    },
    context: {
      en: "BINUS ASO — Physics 1 Laboratory",
      id: "BINUS ASO — Laboratorium Fisika 1",
    },
    role: {
      en: "Project Leader, Idea Generator & Programmer",
      id: "Ketua Proyek, Penggagas Ide & Pemrogram",
    },
    outcome: {
      en: "1 mm precision automated spring constant (k) measurement",
      id: "Pengukuran konstanta pegas (k) otomatis presisi 1 mm",
    },
    summary: {
      en: "Digital spring-constant measurement rig combining a rigid wooden test frame, Arduino Uno, and 1 mm precision ToF displacement sensing.",
      id: "Alat ukur konstanta pegas digital dengan rangka uji kayu kokoh, Arduino Uno, dan sensor perpindahan ToF presisi 1 mm.",
    },
    specs: ["Arduino Uno", "ToF 1 mm Precision", "LCD Readout", "Wooden Rig"],
    accomplishments: {
      en: [
        "Constructed a rigid wooden calibration frame to isolate vertical spring oscillation and ensure repeatable sensor alignment.",
        "Automated mass, weight, displacement (Δx), and spring constant (k) calculation via Arduino Uno and LCD output.",
      ],
      id: [
        "Membangun rangka kalibrasi kayu kokoh untuk menjaga kelurusan sumbu pengukuran pegas.",
        "Mengotomatiskan perhitungan massa, gaya berat, pertambahan panjang (Δx), dan konstanta pegas (k) di Arduino Uno.",
      ],
    },
    coverImage: "/assets/slide-40-hooke.jpg",
    coverCaption: {
      en: "Hooke's Law wooden test frame with ToF sensor & serial telemetry",
      id: "Rangka uji Hukum Hooke dengan sensor ToF dan telemetri serial",
    },
    gallery: [
      {
        src: "/assets/slide-40-hooke.jpg",
        caption: {
          en: "Spring displacement rig and live Arduino data acquisition",
          id: "Perangkat ukur perpindahan pegas dan akuisisi data Arduino",
        },
      },
      {
        src: "/assets/archive/hooke-hardware-1.webp",
        caption: {
          en: "Vertical calibration frame with mounted spring and ToF rangefinder",
          id: "Rangka kalibrasi vertikal dengan pegas dan sensor jarak ToF",
        },
      },
      {
        src: "/assets/archive/hooke-hardware-2.webp",
        caption: {
          en: "LCD live readout of spring mass, elongation, and constant k",
          id: "Tampilan LCD langsung untuk massa, pertambahan panjang, dan konstanta k",
        },
      },
      {
        src: "/assets/archive/hooke-hardware-3.webp",
        caption: {
          en: "Arduino Uno electronics integration on wooden test stand",
          id: "Integrasi elektronika Arduino Uno pada dudukan uji kayu",
        },
      },
    ],
  },
];
