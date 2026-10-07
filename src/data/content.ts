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
  tagline: {
    id: "Front-end Developer",
    en: "Front-end Developer",
  } as Localized,
  location: { id: "Tangerang, ID", en: "Tangerang, ID" } as Localized,
  // %20 = spasi. Nama file aslinya "CV_David Pratama.pdf" di folder public/.
  // Kalau file-nya di-rename tanpa spasi, path ini bisa ditulis polos.
  cvUrl: "/CV.pdf",
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
    id: "👋 Halo, gw Dapid — dari Bangka, sekarang di Tangerang",
    en: "👋 Hi, I'm Dapid — from Bangka, now based in Tangerang",
  } as Localized,
  // Headline: {swap} akan diganti kata yang muter otomatis
  headlineBefore: { id: "Gw bikin", en: "I build" } as Localized,
  headlineAfter: {
    id: "yang rapi, cepat, dan enak dipakai.",
    en: "that are clean, fast, and a pleasure to use.",
  } as Localized,
  swapWords: {
    id: ["website", "tampilan", "aplikasi web"],
    en: ["websites", "interfaces", "web apps"],
  } as Record<Lang, string[]>,
  sub: {
    id: "Web developer (frontend & fullstack) dengan latar belakang digital business. Fokus di React, TypeScript, dan Node.js, dan lagi mendalami AI agentic.",
    en: "Web developer (frontend & fullstack) with a digital business background. Focused on React, TypeScript, and Node.js, and currently exploring agentic AI.",
  } as Localized,
  ctaProjects: { id: "Lihat Karya 🚀", en: "See My Work 🚀" } as Localized,
  ctaCv: { id: "Download CV 📄", en: "Download CV 📄" } as Localized,
  stickers: [
    "⚡ React + TypeScript",
    "🌱 Exploring Agentic AI",
    "📍 Tangerang, ID",
  ],
};

// ---------- MARQUEE ----------
export const marquee: Record<Lang, string[]> = {
  id: [
    "WEB DEVELOPMENT",
    "UI/UX",
    "FRONTEND",
    "REACT",
    "TYPESCRIPT",
    "NODE.JS",
  ],
  en: [
    "WEB DEVELOPMENT",
    "UI/UX",
    "FRONTEND",
    "REACT",
    "TYPESCRIPT",
    "NODE.JS",
  ],
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
      "Sekarang gw bekerja di perusahaan hydraulic systems & heavy equipment, ngebangun website untuk kebutuhan perusahaan, dan ngembangin sistem inventory gudang.",
      "Ke depan, gw mau memperdalam frontend sambil terus ngembangin sisi fullstack. Di sela itu, gw juga penasaran sama AI agentic dan lagi ngulik pelan-pelan.",
    ],
    en: [
      "I started in **digital business**, but over time I realized: what kept me up at night wasn't the marketing funnels — it was **the process of building systems**. So I made the switch to web development — learned frontend, dove into fullstack, and didn't stop there.",
      "I currently work at a hydraulic systems & heavy equipment company, building websites for the company's needs and developing a warehouse inventory system.",
      "Going forward, I want to go deeper into frontend while continuing to grow on the fullstack side. Alongside that, I'm curious about agentic AI and slowly exploring it.",
    ],
  } as Record<Lang, string[]>,
  facts: [
    {
      icon: "🎓",
      text: {
        id: "Lulusan Digital Business, Universitas Bunda Mulia (Desember 2025).",
        en: "Graduate in Digital Business, Universitas Bunda Mulia (December 2025).",
      } as Localized,
    },
    {
      icon: "🔀",
      text: {
        id: "Career switcher: dari digital business ke dunia teknologi, fokus di web development.",
        en: "Career switcher: from digital business into tech, focused on web development.",
      } as Localized,
    },
    {
      icon: "💼",
      text: {
        id: "Terbuka untuk peran Frontend / Fullstack Developer, baik full-time maupun freelance.",
        en: "Open to Frontend / Fullstack Developer roles, full-time or freelance.",
      } as Localized,
    },
    // {
    //   icon: "🏸",
    //   text: {
    //     id: "**Di luar layar** — organizer event komunitas, badminton, dan mentoring",
    //     en: "**Off-screen** — community event organizer, badminton, and mentoring",
    //   } as Localized,
    // },
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
    chips: ["Node.js", "Express", "Prisma", "MySQL", "JWT Auth"],
  },
  {
    icon: "🧰",
    title: { id: "Tools & Deployment", en: "Tools & Deployment" },
    color: "c3",
    chips: ["Git & GitHub,", "Vercel", "cPanel", "Render", "Supabase"],
  },
  {
    icon: "🌱",
    title: { id: "Lagi Dipelajari", en: "Currently Learning" },
    color: "c4",
    chips: ["Advanced Frontend", "Agentic AI", "Git Workflow"],
  },
];

// ---------- PROJECTS ----------
export interface Project {
  emoji: string;
  /** Warna banner garis-garis — dipakai kalau `image` kosong */
  banner: "pb-1" | "pb-2" | "pb-3" | "pb-4";
  type: string;
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
    type: "COMPANY WEBSITE · FULLSTACK", 
    title: {
      id: "Company Website Shiba Hidrolik Pratama",
      en: "Company Website Shiba Hidrolik Pratama",
    },
    desc: {
      id: "Website company profile untuk perusahaan hydraulic systems: informasi perusahaan, katalog produk, contoh aplikasi produk, dan form kontak. Tombol WhatsApp di halaman produk bikin calon konsumen bisa langsung bertanya, dengan tampilan yang diperbarui dari versi sebelumnya. Dibangun dengan React, TypeScript, Express, dan MySQL, dan sudah live di cPanel.",
      en: "A company profile website for a hydraulic systems company: company info, product catalog, product application examples, and a contact form. A WhatsApp button on product pages lets prospects ask about a product right away, with a refreshed look over the previous version. Built with React, TypeScript, Express, and MySQL, and live on cPanel hosting.",
    },
    chips: ["React", "TypeScript", "Tailwind", "Express", "cPanel Deploy"],
    image: "/assets/images/shibahidrolikpratama.com.webp", 
    url: "https://shibahidrolikpratama.com",
  },
  {
    emoji: "🏭",
    banner: "pb-1",
    type: "E-COMMERCE · FULLSTACK",  
    title: {
      id: "Zella Hydraulic Website Shop",
      en: "Zella Hydraulic Website Shop",
    },
    desc: {
      id: "Platform e-commerce untuk produk hydraulic: pencarian dan filter produk, keranjang, checkout, dan pembayaran manual lewat bukti transfer ke admin. Dibangun sebagai Turborepo monorepo dengan React/Vite, Express, Prisma, PostgreSQL, dan Redis, serta pernah di-deploy di VPS (nginx, PM2, SSL). Saat ini tersedia lewat video demo dan GitHub.",
      en: "An e-commerce platform for hydraulic products: product search and filtering, cart, checkout, and manual payment through proof of transfer sent to the admin. Built as a Turborepo monorepo with React/Vite, Express, Prisma, PostgreSQL, and Redis, and previously deployed on a VPS (nginx, PM2, SSL). Currently available via demo video and GitHub.",
    },
    chips: ["React", "TypeScript", "Tailwind", "Express"],
    image: "/assets/images/zella-hydraulic-website.vercel.app.webp",
    url: "https://zella-hydraulic-website.vercel.app",
  },
  {
    emoji: "🏭",
    banner: "pb-1",
    type: "INTERNAL TOOL · FULLSTACK",   
    title: {
      id: "Zella Hydraulic Admin Website Shop",
      en: "Zella Hydraulic Admin Website Shop",
    },
    desc: {
      id: "Dashboard admin untuk Zella, terhubung ke API yang sama dengan website utama. Dipakai admin untuk [kelola produk / kelola pesanan / verifikasi pembayaran manual].",
      en: "An admin dashboard for Zella, connected to the same API as the main website. Used by admins to [manage products / manage orders / verify manual payments].",
    },
    chips: ["React", "TypeScript", "Tailwind", "Express", "JWT"],
    image: "/assets/images/zella-hydraulic-website-admin.vercel.app.webp",
    url: "https://zella-hydraulic-website-admin.vercel.app",
  },
  // {
  //   emoji: "📦",
  //   banner: "pb-2",
  //   role: { id: "FULLSTACK · SYSTEM DESIGN", en: "FULLSTACK · SYSTEM DESIGN" },
  //   title: {
  //     id: "Inventory Management System",
  //     en: "Inventory Management System",
  //   },
  //   desc: {
  //     id: "Sistem manajemen stok gudang untuk spare parts & hydraulic seals: stock in/out, live stock view, riwayat transaksi, dengan roadmap alerts & reporting. Dirancang standalone tapi siap diintegrasikan ke sistem utama.",
  //     en: "A warehouse stock management system for spare parts & hydraulic seals: stock in/out, live stock view, transaction history, with an alerts & reporting roadmap. Designed standalone but integration-ready.",
  //   },
  //   chips: ["Next.js", "Prisma", "MySQL"],
  // },
];

// ---------- CV / TIMELINE ----------
export interface TimelineItem {
  when: Localized;
  title: Localized;
  desc: Localized;
}

export const cv = {
  experienceTitle: { id: "💼 Pengalaman", en: "💼 Experience" } as Localized,
  educationTitle: {
    id: "🎓 Pendidikan & Lainnya",
    en: "🎓 Education & More",
  } as Localized,
  experience: [
    {
      when: { id: "Nov 2025 — SEKARANG", en: "Nov 2025 — PRESENT" },
      title: {
        id: "Multimedia Staff — Shiba Hidrolik Pratama",
        en: "Multimedia Staff — Shiba Hidrolik Pratama",
      },
      desc: {
        id: "Perusahaan hydraulic systems & heavy equipment service, Tangerang. Mengembangkan website company, serta menangani desain grafis (katalog produk, poster hari besar) dan konten social media (video).",
        en: "Hydraulic systems & heavy equipment service company, Tangerang. Developed the company website, and handles graphic design (product catalogs, holiday posters) and social media content (video).",
      },
    },
    {
      when: { id: "Jul 2024 - Nov 2024", en: "Jul 2024 - Nov 2024" },
      title: {
        id: "Web Designer Intern — Shiba Hidrolik Pratama",
        en: "Web Designer Intern — Shiba Hidrolik Pratama",
      },
      desc: {
        id: "Magang sebagai web designer di perusahaan hydraulic systems & heavy equipment service, Tangerang.",
        en: "Web designer internship at a hydraulic systems & heavy equipment service company, Tangerang.",
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
      when: { id: "Aug 2021 - Nov 2025", en: "Aug 2021 - Nov 2025" },
      title: { id: "Universitas Bunda Mulia", en: "Universitas Bunda Mulia" },
      desc: {
        id: "Lulus dengan latar belakang Digital Business.",
        en: "Graduated with a background in Digital Business.",
      },
    },
    {
      when: { id: "Mar 2025 - Aug 2025", en: "Mar 2025 - Aug 2025" },
      title: {
        id: "Full Stack Developer Bootcamp — HariSenin.com",
        en: "Full Stack Developer Bootcamp — HariSenin.com",
      },
      desc: {
        id: "Bootcamp Full Stack Developer. Tugas akhir: VideoBelajar, aplikasi platform belajar online.",
        en: "Full Stack Developer Bootcamp. Final project: VideoBelajar, an online learning platform application.",
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
