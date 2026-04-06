export type Language = "en" | "id";

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      source: "Source",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      bio: "Frontend Software Engineer with 3+ years of experience building scalable web applications. Expert in React, Next.js, and modern CSS with a track record of improving system performance and user experience.",
      tagline: "Seeking to leverage expertise in frontend technologies to drive innovation.",
      cta: "Let's Talk",
      viewWork: "View My Work",
      scroll: "Scroll",
    },

    // Stats
    stats: {
      yearsExp: "Years Experience",
      projects: "Projects Delivered",
      companies: "Companies Worked",
      clients: "Happy Clients",
    },

    // Typewriter
    typewriter: [
      "Frontend Engineer",
      "React Specialist",
      "Performance Enthusiast",
      "UI/UX Craftsman",
      "TypeScript Advocate",
    ],

    // About Section
    about: {
      badge: "About Me",
      title: "Passionate About Creating",
      titleHighlight: "Digital Experiences",
      description:
        "I'm a Frontend Software Engineer based in Bandung, Indonesia. I specialize in building scalable web applications with React, Next.js, and modern CSS, delivering high-quality solutions that improve system performance and user experience.",
      description2:
        "My expertise includes architecting complex frontend structures, optimizing legacy codebases, and consistently meeting modern web standards to drive innovation.",
      yearsExp: "Years of Experience",
      projectsDone: "Projects Completed",
      downloadCV: "Download CV",
      hireMe: "Hire Me",
    },

    // Services Section
    services: {
      badge: "What I Do",
      title: "Services I Offer",
      subtitle: "Helping businesses and startups build their digital presence",
      items: [
        {
          title: "Web Development",
          description: "Building responsive, performant web applications with modern frameworks",
        },
        {
          title: "UI/UX Implementation",
          description: "Translating designs into pixel-perfect, accessible interfaces",
        },
        {
          title: "Performance Optimization",
          description: "Improving Core Web Vitals and overall application speed",
        },
        {
          title: "Frontend Architecture",
          description: "Designing complex frontend structures and scalable codebases",
        },
      ],
    },

    // Skills Section
    skills: {
      badge: "Tech Stack",
      title: "Skills & Technologies",
      subtitle: "The tools and technologies I use to bring ideas to life",
      frontend: "Frontend",
      backend: "Backend & Database",
      tools: "Tools & DevOps",
    },

    // Projects Section
    projects: {
      badge: "Portfolio",
      title: "Featured Projects",
      subtitle: "Real-world applications I've built with measurable impact",
      viewGithub: "View GitHub Profile",
      moreProjects: "Want to see more? Check out my GitHub for additional projects.",
      items: [
        {
          title: "AI-Powered CV Reviewer & Optimizer",
          description: "Intelligent CV analysis tool utilizing LLMs to automatically parse, evaluate, and optimize resumes against modern ATS standards.",
          highlights: ["ATS Optimization", "STAR/XYZ Method", "Telegram Bot"],
        },
        {
          title: "AI Video Clipper System",
          description: "Full-stack automated video processing pipeline leveraging AI to extract short, shareable clips from long-form videos.",
          highlights: ["Automated Processing", "AI Integration", "Seamless Export"],
        },
        {
          title: "Wedding Website Organizer",
          description: "End-to-end custom wedding invitation platform and RSVP management system.",
          highlights: ["350+ guests", "Custom UI/UX", "Invitation distribution"],
        },
        {
          title: "LinkLSM.id",
          description: "Social platform connecting 135+ organizations with the public. Reduced form abandonment by 60%.",
          highlights: ["135+ organizations", "60% less abandonment", "Multi-step forms"],
        },
        {
          title: "STP Aquaculture",
          description: "Immersive company profile with scroll-driven animations and parallax effects. Achieved 95+ Lighthouse performance score.",
          highlights: ["95+ Lighthouse", "Smooth 60fps", "Mobile-first"],
        },
        {
          title: "Portfolio Andreas",
          description: "High-performance portfolio landing page translated from broad client requirements into a polished web interface.",
          highlights: ["2-week delivery", "Responsive", "Cross-device"],
        },
      ],
    },

    // Experience Section
    experience: {
      badge: "Career Path",
      title: "Work Experience",
      subtitle: "My professional journey in software development",
      education: "Education",
      items: [
        {
          role: "Software Engineer - Frontend Developer",
          company: "PARKEE",
          type: "Full-Time",
          period: "Nov 2022 - Present",
          description:
            "Engineered the migration to Next.js App Router, deployed dedicated webviews processing 2,000+ daily transactions, and improved CMS load times by 30%.",
          achievements: [
            "Migrated parkee.app to Next.js App Router, enhancing routing, SEO, and flexibility.",
            "Architected webview for Wuzz registration handling 2,000+ transactions.",
            "Designed dynamic email templates using SendGrid.",
            "Refactored codebase with SOLID principles to reduce technical debt.",
            "Resolved CMS bottlenecks, cutting load times by 30%.",
          ],
        },
        {
          role: "Software Engineer - Frontend Developer",
          company: "PT Muslim Seratus Satu",
          type: "Contract",
          period: "Aug 2024 - Dec 2025",
          description:
            "Spearheaded the end-to-end frontend architecture of an online Umrah transaction platform.",
          achievements: [
            "Engineered V1 and V2 platforms (upgrading to Next.js 15 & Shadcn UI in under 2 months).",
            "Achieved >95% pixel-perfect UI/UX consistency.",
            "Optimized SEO for a #1 search ranking.",
            "Mentored a freelance frontend developer.",
          ],
        },
        {
          role: "Software Engineer Intern - Frontend Developer",
          company: "Gincode Nusantara",
          type: "Internship → Contract",
          period: "Feb 2020 - Dec 2021",
          description:
            "Led frontend development for multiple client projects and internal tools, utilizing ReactJS and Ant Design.",
          achievements: [
            "Spearheaded frontend for Rentatoy platform.",
            "Built interactive internal dashboard using ReactJS.",
            "Developed registration flows serving 500+ participants.",
            "Created scalable web apps for digital wedding invitations.",
          ],
        },
      ],
      edu: {
        university: "Parahyangan Catholic University",
        degree: "Bachelor of Computer Science",
        location: "Bandung, West Java",
        period: "2017 - 2022",
        thesis: "Development of Water Quality Monitoring in NFT Hydroponic Systems Using WSN",
      },
    },

    // Certifications Section
    certifications: {
      badge: "Achievements",
      title: "Certifications",
      subtitle: "Professional certifications and accomplishments",
      items: [
        {
          name: "Back-end Developer (Main Bootcamp)",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "90.9/100",
          description:
            "Directed the backend architecture for the final project, designing scalable RESTful API infrastructure.",
        },
        {
          name: "Full-Stack Web Class (Pre-Bootcamp)",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "88.5/100",
          description:
            "Led the development utilizing ExpressJS, NodeJS, PostgreSQL, and JavaScript/Bootstrap. Implemented CI/CD via Heroku.",
        },
      ],
    },

    // Source Section
    source: {
      badge: "Open Source",
      title: "Built With",
      subtitle: "This portfolio is built using these amazing open source technologies and libraries",
      footer: "This portfolio is open source. Feel free to explore the code!",
      viewRepo: "View Repository",
    },

    // Contact Section
    contact: {
      badge: "Get In Touch",
      title: "Let's Work Together",
      subtitle: "Have a project in mind? Let's discuss how we can bring your ideas to life.",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
      },
      info: {
        email: "Email",
        location: "Location",
        social: "Social Media",
      },
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Failed to send message. Please try again.",
    },

    // Footer
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
      and: "and",
    },
  },

  id: {
    // Navbar
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      certifications: "Sertifikasi",
      source: "Sumber",
      contact: "Kontak",
    },

    // Hero Section
    hero: {
      available: "Tersedia untuk peluang baru",
      greeting: "Hai, Saya",
      bio: "Frontend Software Engineer dengan pengalaman 3+ tahun membangun aplikasi web skalabel. Ahli dalam React, Next.js, dan CSS modern dengan rekam jejak dalam meningkatkan performa sistem dan UX.",
      tagline: "Memanfaatkan keahlian dalam teknologi frontend untuk mendorong inovasi.",
      cta: "Hubungi Saya",
      viewWork: "Lihat Karya",
      scroll: "Gulir",
    },

    // Stats
    stats: {
      yearsExp: "Tahun Pengalaman",
      projects: "Proyek Selesai",
      companies: "Perusahaan",
      clients: "Klien Puas",
    },

    // Typewriter
    typewriter: [
      "Frontend Engineer",
      "Spesialis React",
      "Penggemar Performa",
      "Pengrajin UI/UX",
      "Advokat TypeScript",
    ],

    // About Section
    about: {
      badge: "Tentang Saya",
      title: "Bersemangat Menciptakan",
      titleHighlight: "Pengalaman Digital",
      description:
        "Saya seorang Frontend Software Engineer yang berbasis di Bandung, Indonesia. Saya spesialisasi dalam membangun aplikasi web dengan React, Next.js, dan CSS modern, memberikan solusi berkualitas yang meningkatkan performa sistem.",
      description2:
        "Keahlian saya meliputi merancang arsitektur struktur frontend yang kompleks, mengoptimalkan codebase legacy, dan secara konsisten memenuhi standar web modern.",
      yearsExp: "Tahun Pengalaman",
      projectsDone: "Proyek Selesai",
      downloadCV: "Unduh CV",
      hireMe: "Hubungi Saya",
    },

    // Services Section
    services: {
      badge: "Yang Saya Lakukan",
      title: "Layanan yang Ditawarkan",
      subtitle: "Membantu bisnis dan startup membangun kehadiran digital mereka",
      items: [
        {
          title: "Pengembangan Web",
          description: "Membangun aplikasi web responsif dan berkinerja tinggi",
        },
        {
          title: "Implementasi UI/UX",
          description: "Menerjemahkan desain menjadi antarmuka yang sempurna dan mudah diakses",
        },
        {
          title: "Optimasi Performa",
          description: "Meningkatkan Core Web Vitals dan kecepatan aplikasi",
        },
        {
          title: "Arsitektur Frontend",
          description: "Merancang struktur frontend kompleks dan codebase skalabel",
        },
      ],
    },

    // Skills Section
    skills: {
      badge: "Tech Stack",
      title: "Keahlian & Teknologi",
      subtitle: "Alat dan teknologi yang saya gunakan",
      frontend: "Frontend",
      backend: "Backend & Database",
      tools: "Tools & DevOps",
    },

    // Projects Section
    projects: {
      badge: "Portofolio",
      title: "Proyek Unggulan",
      subtitle: "Aplikasi nyata yang saya bangun dengan dampak terukur",
      viewGithub: "Lihat Profil GitHub",
      moreProjects: "Kunjungi GitHub saya untuk proyek tambahan.",
      items: [
        {
          title: "AI-Powered CV Reviewer & Optimizer",
          description: "Alat analisis CV cerdas yang menggunakan LLM untuk mengekstrak dan mengoptimalkan resume terhadap standar ATS.",
          highlights: ["Optimasi ATS", "Metode STAR/XYZ", "Bot Telegram"],
        },
        {
          title: "AI Video Clipper System",
          description: "Sistem otomatis pemrosesan video untuk mengekstrak klip dari video durasi panjang menggunakan AI.",
          highlights: ["Pemrosesan Otomatis", "Integrasi AI", "Ekspor Mulus"],
        },
        {
          title: "Wedding Website Organizer",
          description: "Platform undangan pernikahan custom end-to-end dan sistem manajemen RSVP tamu.",
          highlights: ["350+ tamu", "UI/UX Custom", "Distribusi undangan"],
        },
        {
          title: "LinkLSM.id",
          description: "Platform sosial untuk organisasi. Mengurangi pengabaian formulir sebesar 60%.",
          highlights: ["135+ organisasi", "Validasi Real-time", "Multi-step form"],
        },
        {
          title: "STP Aquaculture",
          description: "Profil perusahaan dengan animasi scroll dan efek parallax. Mencapai skor performa Lighthouse 95+.",
          highlights: ["95+ Lighthouse", "60fps lancar", "Mobile-first"],
        },
        {
          title: "Portfolio Andreas",
          description: "Halaman landing portofolio profesional dan responsif.",
          highlights: ["Pengiriman 2 minggu", "Responsif", "Lintas perangkat"],
        },
      ],
    },

    // Experience Section
    experience: {
      badge: "Perjalanan Karir",
      title: "Pengalaman Kerja",
      subtitle: "Perjalanan profesional saya dalam pengembangan software",
      education: "Pendidikan",
      items: [
        {
          role: "Software Engineer - Frontend Developer",
          company: "PARKEE",
          type: "Full-Time",
          period: "Nov 2022 - Sekarang",
          description:
            "Memimpin migrasi ke Next.js App Router, meluncurkan webview yang memproses 2.000+ transaksi harian, dan mempercepat pemuatan CMS.",
          achievements: [
            "Migrasi parkee.app ke Next.js App Router.",
            "Membangun webview untuk registrasi Wuzz (2.000+ transaksi).",
            "Mendesain template email dinamis menggunakan SendGrid.",
            "Refactoring codebase dengan prinsip SOLID.",
            "Mempercepat waktu muat CMS sebesar 30%.",
          ],
        },
        {
          role: "Software Engineer - Frontend Developer",
          company: "PT Muslim Seratus Satu",
          type: "Kontrak",
          period: "Agu 2024 - Des 2025",
          description:
            "Memimpin arsitektur dan pengembangan platform transaksi Umrah online.",
          achievements: [
            "Membangun V1 dan V2 (upgrade ke Next.js 15 & Shadcn UI di bawah 2 bulan).",
            "Mencapai >95% konsistensi UI/UX pixel-perfect dengan desain Figma.",
            "Optimasi Technical SEO hingga menduduki peringkat #1 pencarian.",
            "Membimbing developer frontend freelance.",
          ],
        },
        {
          role: "Software Engineer Intern - Frontend Developer",
          company: "Gincode Nusantara",
          type: "Magang → Kontrak",
          period: "Feb 2020 - Des 2021",
          description:
            "Memimpin pengembangan frontend untuk proyek klien dan aplikasi internal menggunakan ReactJS dan Ant Design.",
          achievements: [
            "Memimpin frontend untuk platform Rentatoy.",
            "Membangun dashboard internal interaktif.",
            "Mengembangkan form registrasi untuk 500+ pengguna.",
            "Membuat aplikasi undangan pernikahan digital skalabel.",
          ],
        },
      ],
      edu: {
        university: "Universitas Katolik Parahyangan",
        degree: "Sarjana Ilmu Komputer",
        location: "Bandung, Jawa Barat",
        period: "2017 - 2022",
        thesis: "Pengembangan Pemantauan Kualitas Air pada Sistem Hidroponik NFT Menggunakan WSN",
      },
    },

    // Certifications Section
    certifications: {
      badge: "Pencapaian",
      title: "Sertifikasi",
      subtitle: "Sertifikasi profesional dan pencapaian",
      items: [
        {
          name: "Back-end Developer (Main Bootcamp)",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "90.9/100",
          description:
            "Mengarahkan arsitektur backend untuk proyek akhir, merancang infrastruktur API RESTful skalabel.",
        },
        {
          name: "Full-Stack Web Class (Pre-Bootcamp)",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "88.5/100",
          description:
            "Memimpin pengembangan web full-stack dan implementasi pipeline CI/CD via Heroku.",
        },
      ],
    },

    // Source Section
    source: {
      badge: "Open Source",
      title: "Dibangun Dengan",
      subtitle: "Portfolio ini dibangun menggunakan teknologi open source",
      footer: "Portfolio ini open source. Silakan jelajahi kodenya!",
      viewRepo: "Lihat Repository",
    },

    // Contact Section
    contact: {
      badge: "Hubungi Saya",
      title: "Mari Bekerja Sama",
      subtitle: "Punya proyek dalam pikiran? Mari diskusikan ide Anda.",
      form: {
        name: "Nama Anda",
        email: "Email Anda",
        subject: "Subjek",
        message: "Pesan Anda",
        send: "Kirim Pesan",
        sending: "Mengirim...",
      },
      info: {
        email: "Email",
        location: "Lokasi",
        social: "Media Sosial",
      },
      success: "Pesan berhasil dikirim! Saya akan segera menghubungi Anda.",
      error: "Gagal mengirim pesan. Silakan coba lagi.",
    },

    // Footer
    footer: {
      rights: "Hak cipta dilindungi.",
      builtWith: "Dibuat dengan",
      and: "dan",
    },
  },
};

export type Translations = typeof translations.en;
