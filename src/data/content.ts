// ============================================================
//  EDIT DI SINI AJA BRO 😄
//  Semua konten website ada di file ini — teks, project, link.
//  Struktur: setiap field punya versi `id` (Indonesia) & `en` (English).
// ============================================================

export type Lang = "id" | "en";
export type Localized = Record<Lang, string>;

// ---------- PROFIL DASAR ----------
export const profile = {
  name: "Dapid",
  photo: "/assets/images/profile.webp", // taruh foto di folder public/, atau ganti path/URL di sini
  /** Dipakai di badge foto hero + layar loading */
  tagline: { id: "builder & creator", en: "builder & creator" } as Localized,
  location: { id: "Tangerang, ID", en: "Tangerang, ID" } as Localized,
  // %20 = spasi. Nama file aslinya "CV_David Pratama.pdf" di folder public/.
  // Kalau file-nya di-rename tanpa spasi, path ini bisa ditulis polos.
  cvUrl: "/CV_David%20Pratama.pdf",
  email: "davidprt202@gmail.com",
  socials: [
    { label: "🐙 GitHub", url: "https://github.com/DavidPratama21" },
    { label: "💼 LinkedIn", url: "https://linkedin.com/in/david-prt" },
    { label: "📸 Instagram", url: "https://instagram.com/daun_coklat" },
  ],
};

// ---------- HERO ----------
export const hero = {
  eyebrow: {
    id: "👋 Halo, gw Daun — dari Bangka, sekarang di Tangerang",
    en: "👋 Hi, I'm Daun — from Bangka, now based in Tangerang",
  } as Localized,
  // Headline: {swap} akan diganti kata yang muter otomatis
  headlineBefore: { id: "Gw bikin", en: "I build" } as Localized,
  headlineAfter: {
    id: "yang hidup & sistem yang jalan sendiri.",
    en: "that feel alive & systems that run themselves.",
  } as Localized,
  swapWords: {
    id: ["website", "sistem", "automation", "AI agent"],
    en: ["websites", "systems", "automation", "AI agents"],
  } as Record<Lang, string[]>,
  sub: { // TODO: ganti sesuai realita
    id: "Fullstack web developer dengan jiwa kreatif. Career-switcher dari digital business yang sekarang ngoprek React, Express, sampai AI automation — plus masih sempet motion design dan bikin konten. Satu orang, dua mode: builder & creator.",
    en: "Fullstack web developer with a creative soul. A career-switcher from digital business now deep into React, Express, and AI automation — while still doing motion design and content creation. One person, two modes: builder & creator.",
  } as Localized,
  ctaProjects: { id: "Lihat Karya 🚀", en: "See My Work 🚀" } as Localized,
  ctaCv: { id: "Download CV 📄", en: "Download CV 📄" } as Localized,
  stickers: [
    "⚡ React + TypeScript",
    "🤖 AI Automation",
    "📍 Tangerang, ID",
  ],
};

// ---------- MARQUEE ----------
export const marquee: Record<Lang, string[]> = {
  id: ["WEB DEVELOPMENT", "UI/UX", "AI AUTOMATION", "SYSTEM BUILDING"],
  en: ["WEB DEVELOPMENT", "UI/UX", "AI AUTOMATION", "SYSTEM BUILDING"],
};

// ---------- NAVIGASI & JUDUL SECTION ----------
export const nav = {
  about: { id: "Tentang", en: "About" } as Localized,
  skills: { id: "Skills", en: "Skills" } as Localized,
  projects: { id: "Projects", en: "Projects" } as Localized,
  cv: { id: "CV", en: "Resume" } as Localized,
  contact: { id: "Hubungi Gw", en: "Contact Me" } as Localized,
};

export const sections = {
  about: {
    title: { id: "Tentang Gw", en: "About Me" } as Localized,
    tag: { id: "SIAPA SIH?", en: "WHO'S THIS?" } as Localized,
  },
  skills: {
    title: { id: "Toolbox", en: "Toolbox" } as Localized,
    tag: { id: "SENJATA ANDALAN", en: "WEAPONS OF CHOICE" } as Localized,
  },
  projects: {
    title: { id: "Karya Pilihan", en: "Selected Work" } as Localized,
    tag: { id: "HASIL NGOPREK", en: "THINGS I BUILT" } as Localized,
  },
  cv: {
    title: { id: "Curriculum Vitae", en: "Curriculum Vitae" } as Localized,
    tag: { id: "JEJAK PERJALANAN", en: "THE JOURNEY" } as Localized,
  },
};

// ---------- ABOUT ----------
export const about = {
  paragraphs: {
    id: [
      "Gw mulai dari **digital business**, tapi makin ke sini makin sadar: yang bikin gw betah begadang bukan marketing funnel-nya, tapi **proses ngebangun sistemnya**. Dari situ gw banting setir ke web development — belajar frontend, nyemplung ke fullstack, dan nggak berhenti di situ.",
      "Sekarang gw jadi **jembatan IT & digital** di perusahaan hydraulic systems: ngebangun website company dari nol, ngerancang sistem inventory, sampai bikin konten video dan poster untuk social media mereka. Satu peran, banyak topi. 🎩",
      "Obsesi gw sekarang? **AI automation** — bikin workflow yang kerja sendiri pake n8n, AI agents, dan integrasi Telegram. Goal jangka panjang: sistem operasional perusahaan yang fully automated.",
    ],
    en: [
      "I started in **digital business**, but over time I realized: what kept me up at night wasn't the marketing funnels — it was **the process of building systems**. So I made the switch to web development — learned frontend, dove into fullstack, and didn't stop there.",
      "Today I'm the **IT & digital bridge** at a hydraulic systems company: building the company website from scratch, designing an inventory system, and producing video content and posters for their social media. One role, many hats. 🎩",
      "My current obsession? **AI automation** — building workflows that run themselves using n8n, AI agents, and Telegram integrations. Long-term goal: a fully automated company operation.",
    ],
  } as Record<Lang, string[]>,
  facts: [
    {
      icon: "🎓",
      text: {
        id: "**Mahasiswa** Universitas Bunda Mulia, sambil OJT sebagai IT & digital all-rounder",
        en: "**Student** at Universitas Bunda Mulia, doing OJT as an IT & digital all-rounder",
      } as Localized,
    },
    {
      icon: "🔀",
      text: {
        id: "**Career switcher** — digital business ➜ fullstack web dev",
        en: "**Career switcher** — digital business ➜ fullstack web dev",
      } as Localized,
    },
    {
      icon: "🎨",
      text: {
        id: "**Creative side** — motion graphics, poster design, video editing",
        en: "**Creative side** — motion graphics, poster design, video editing",
      } as Localized,
    },
    {
      icon: "🏸",
      text: {
        id: "**Di luar layar** — organizer event komunitas, badminton, dan mentoring",
        en: "**Off-screen** — community event organizer, badminton, and mentoring",
      } as Localized,
    },
  ],
};

// ---------- SKILLS ----------
export interface SkillGroup {
  icon: string;
  title: Localized;
  color: "c1" | "c2" | "c3" | "c4";
  chips: string[];
}

export const skills: SkillGroup[] = [
  {
    icon: "🖥️",
    title: { id: "Frontend", en: "Frontend" },
    color: "c1",
    chips: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    icon: "⚙️",
    title: { id: "Backend", en: "Backend" },
    color: "c2",
    chips: ["Node.js", "Express", "Prisma", "MySQL", "REST API", "JWT Auth"],
  },
  {
    icon: "🎨",
    title: { id: "Creative", en: "Creative" },
    color: "c3",
    chips: ["After Effects", "Photoshop", "CapCut", "AI Image Gen", "Copywriting"],
  },
  {
    icon: "🤖",
    title: { id: "Automation", en: "Automation" },
    color: "c4",
    chips: ["n8n", "AI Agents", "Telegram Bots", "Docker", "Gemini API"],
  },
];

// ---------- PROJECTS ----------
export interface Project {
  emoji: string;
  /** Warna banner garis-garis — dipakai kalau `image` kosong */
  banner: "pb-1" | "pb-2" | "pb-3" | "pb-4";
  role: Localized;
  title: Localized;
  desc: Localized;
  chips: string[];
  /** Screenshot project, mis. "/assets/images/videobelajar.webp".
   *  Kalau diisi, gambar ini menggantikan banner emoji. */
  image?: string;
  /** Link ke situs live / demo */
  url?: string;
  /** Link ke repo source code */
  repo?: string;
}

export const projects: Project[] = [
  {
    emoji: "🏭",
    banner: "pb-1",
    role: { id: "FULLSTACK · SOLO DEV", en: "FULLSTACK · SOLO DEV" },
    title: {
      id: "Company Website — Hydraulic Systems",
      en: "Company Website — Hydraulic Systems",
    },
    desc: {
      id: "Website perusahaan yang gw bangun dan migrasikan penuh: dari Next.js + Prisma ke arsitektur React + Express (monorepo) demi kompatibilitas shared hosting. Termasuk katalog produk PDF dengan CMS, filtering client-side, auth admin, dan SMTP integration.",
      en: "A company website I built and fully migrated: from Next.js + Prisma to a React + Express monorepo architecture for shared-hosting compatibility. Includes a PDF product catalog with CMS, client-side filtering, admin auth, and SMTP integration.",
    },
    chips: ["React", "TypeScript", "Express", "cPanel Deploy"],
  },
  {
    emoji: "📦",
    banner: "pb-2",
    role: { id: "FULLSTACK · SYSTEM DESIGN", en: "FULLSTACK · SYSTEM DESIGN" },
    title: {
      id: "Inventory Management System",
      en: "Inventory Management System",
    },
    desc: {
      id: "Sistem manajemen stok gudang untuk spare parts & hydraulic seals: stock in/out, live stock view, riwayat transaksi, dengan roadmap alerts & reporting. Dirancang standalone tapi siap diintegrasikan ke sistem utama.",
      en: "A warehouse stock management system for spare parts & hydraulic seals: stock in/out, live stock view, transaction history, with an alerts & reporting roadmap. Designed standalone but integration-ready.",
    },
    chips: ["Next.js", "Prisma", "MySQL"],
  },
  {
    emoji: "🤖",
    banner: "pb-3",
    role: { id: "AI · AUTOMATION", en: "AI · AUTOMATION" },
    title: { id: "AI Agent Workflows", en: "AI Agent Workflows" },
    desc: {
      id: "Multi-agent system dengan orchestrator + coding sub-agent yang terhubung via Telegram, plus workflow n8n (Telegram ➜ Gemini ➜ Telegram) yang jalan di Docker. Next: bot generator konsep poster berbasis AI vision.",
      en: "A multi-agent system with an orchestrator + coding sub-agent connected via Telegram, plus an n8n workflow (Telegram ➜ Gemini ➜ Telegram) running on Docker. Next up: an AI-vision-based poster concept generator bot.",
    },
    chips: ["n8n", "OpenRouter", "Telegram API", "Docker"],
  },
  {
    emoji: "🎬",
    banner: "pb-4",
    role: { id: "CREATIVE · CONTENT", en: "CREATIVE · CONTENT" },
    title: { id: "Brand Content Production", en: "Brand Content Production" },
    desc: {
      id: "Paket produksi konten lengkap untuk campaign perusahaan: video produk, Reels/TikTok/Shorts, voiceover script, thumbnail AI-generated, sampai poster hari besar nasional dengan motion graphics After Effects.",
      en: "Full content production packages for company campaigns: product videos, Reels/TikTok/Shorts, voiceover scripts, AI-generated thumbnails, and national holiday posters with After Effects motion graphics.",
    },
    chips: ["After Effects", "CapCut", "Dreamina", "Multi-platform"],
  },
];

// ---------- CV / TIMELINE ----------
export interface TimelineItem {
  when: Localized;
  title: Localized;
  desc: Localized;
}

export const cv = {
  experienceTitle: { id: "💼 Pengalaman", en: "💼 Experience" } as Localized,
  educationTitle: { id: "🎓 Pendidikan & Lainnya", en: "🎓 Education & More" } as Localized,
  experience: [
    {
      when: { id: "2025 — SEKARANG", en: "2025 — PRESENT" },
      title: { id: "IT & Digital Presence — OJT", en: "IT & Digital Presence — OJT" },
      desc: {
        id: "Perusahaan hydraulic systems & heavy equipment service, Tangerang. Web development, system building, dan social media content — de facto IT bridge perusahaan.",
        en: "Hydraulic systems & heavy equipment service company, Tangerang. Web development, system building, and social media content — the company's de facto IT bridge.",
      },
    },
    {
      when: { id: "SEBELUMNYA", en: "PREVIOUSLY" },
      title: { id: "Frontend Developer — Project Based", en: "Frontend Developer — Project Based" },
      desc: {
        id: "Membangun VideoBelajar, aplikasi platform belajar online, sebagai project pembelajaran intensif React ecosystem.",
        en: "Built VideoBelajar, an online learning platform app, as an intensive React-ecosystem learning project.",
      },
    },
    {
      when: { id: "AWAL KARIER", en: "EARLY CAREER" },
      title: { id: "Digital Business", en: "Digital Business" },
      desc: {
        id: "Background awal yang ngasih gw pemahaman bisnis, marketing, dan cara mikir product-minded — bekal yang sekarang kepake banget pas bangun sistem.",
        en: "The early background that gave me business sense, marketing knowledge, and a product-minded way of thinking — invaluable now when building systems.",
      },
    },
  ] as TimelineItem[],
  education: [
    {
      when: { id: "SEKARANG", en: "PRESENT" },
      title: { id: "Universitas Bunda Mulia", en: "Universitas Bunda Mulia" },
      desc: {
        id: "Mahasiswa aktif, sambil praktik langsung lewat program OJT.",
        en: "Active student, gaining hands-on experience through an OJT program.",
      },
    },
    {
      when: { id: "ONGOING", en: "ONGOING" },
      title: { id: "Self-taught Developer Journey", en: "Self-taught Developer Journey" },
      desc: {
        id: "React, TypeScript, Node.js, Prisma, sampai AI automation — belajar dengan cara paling efektif: bangun project beneran.",
        en: "React, TypeScript, Node.js, Prisma, all the way to AI automation — learning the most effective way: by building real projects.",
      },
    },
    {
      when: { id: "KOMUNITAS", en: "COMMUNITY" },
      title: { id: "Community Leader", en: "Community Leader" },
      desc: {
        id: "Aktif memimpin kelompok komunitas, mengorganisir event (badminton, youth gathering), dan mentoring anggota.",
        en: "Actively leading a community group, organizing events (badminton, youth gatherings), and mentoring members.",
      },
    },
  ] as TimelineItem[],
};

// ---------- CONTACT ----------
export const contact = {
  headline: {
    id: "Punya ide project? *Yuk ngobrol!*",
    en: "Got a project idea? *Let's talk!*",
  } as Localized,
  sub: {
    id: "Gw open untuk project web development, automation, atau kolaborasi kreatif. Drop pesan aja — biasanya gw bales cepet. ⚡",
    en: "I'm open to web development projects, automation work, or creative collaborations. Just drop a message — I usually reply fast. ⚡",
  } as Localized,
  emailLabel: { id: "📧 Email", en: "📧 Email" } as Localized,
};

export const footer: Localized = {
  id: "© 2026 Daun — Dibangun dengan ☕ dan terlalu banyak tab browser.",
  en: "© 2026 Daun — Built with ☕ and way too many browser tabs.",
};
