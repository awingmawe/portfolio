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
      contact: "Contact",
    },

    // Hero Section
    hero: {
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      bio: "I craft performant, accessible web experiences that users love. Specialized in React ecosystem with a focus on delivering pixel-perfect UIs and optimized Core Web Vitals.",
      tagline: "Turning complex problems into elegant, scalable solutions.",
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
        "I'm a Frontend Engineer based in Bandung, Indonesia with over 3 years of experience building web applications. I specialize in React and Next.js, focusing on creating performant, accessible, and user-friendly interfaces.",
      description2:
        "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading tech articles.",
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
          description:
            "Building responsive, performant web applications with modern frameworks",
        },
        {
          title: "UI/UX Implementation",
          description:
            "Translating designs into pixel-perfect, accessible interfaces",
        },
        {
          title: "Performance Optimization",
          description: "Improving Core Web Vitals and overall application speed",
        },
        {
          title: "Code Review & Mentoring",
          description:
            "Helping teams improve code quality and development practices",
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
          title: "Parkee Platform",
          description:
            "Spearheaded migration from Pages Router to App Router, achieving 40% faster page loads. Built high-traffic webview handling 2,000+ daily transactions with optimized rendering and lazy loading strategies.",
          highlights: ["40% faster loads", "2K+ daily transactions", "99.9% uptime"],
        },
        {
          title: "LinkLSM.id",
          description:
            "Architected a social platform connecting 135+ organizations with the public. Implemented complex multi-step forms with real-time validation, reducing form abandonment by 60%.",
          highlights: ["135+ organizations", "60% less abandonment", "500+ daily users"],
        },
        {
          title: "STP Aquaculture",
          description:
            "Designed and developed an immersive company profile with scroll-driven animations and parallax effects. Achieved 95+ Lighthouse performance score with optimized assets and modern CSS.",
          highlights: ["95+ Lighthouse", "Smooth 60fps", "Mobile-first"],
        },
        {
          title: "Internal Dashboard",
          description:
            "Built a real-time analytics dashboard with interactive data visualizations, PDF export, and role-based access control. Reduced report generation time from minutes to seconds.",
          highlights: ["Real-time data", "10x faster reports", "RBAC system"],
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
          role: "Frontend Engineer",
          company: "PARKEE",
          type: "Full-Time · Remote",
          period: "Nov 2022 - Present",
          description:
            "Leading frontend architecture decisions for Indonesia's growing parking management platform. Championing performance optimization, code quality standards, and developer experience improvements.",
          achievements: [
            "Migrated legacy codebase to Next.js App Router, improving LCP by 40%",
            "Built transaction system handling 2,000+ daily operations with zero downtime",
            "Established coding standards with ESLint, Prettier, and Husky pre-commit hooks",
            "Mentored junior developers on React best practices and clean code principles",
          ],
        },
        {
          role: "Frontend Developer",
          company: "PT. Elaborasi Media Inovasi",
          type: "Contract",
          period: "Jul 2022 - Oct 2022",
          description:
            "Delivered enterprise-grade dashboard solutions with focus on data visualization and user experience for internal stakeholders.",
          achievements: [
            "Designed component architecture supporting 50+ reusable UI components",
            "Implemented real-time data sync reducing manual refresh by 100%",
            "Built PDF export feature generating reports 10x faster than previous solution",
          ],
        },
        {
          role: "Frontend Developer",
          company: "Gincode Nusantara",
          type: "Internship → Contract",
          period: "Feb 2020 - Dec 2021",
          description:
            "Started as an intern and grew into a key contributor, leading frontend development for multiple client projects and internal tools.",
          achievements: [
            "Led development of Rentatoy platform serving thousands of users",
            "Built registration system for Idepreneursclub handling 500+ participants",
            "Introduced Git workflow and code review practices to the team",
          ],
        },
      ],
      edu: {
        university: "Parahyangan Catholic University",
        degree: "Bachelor of Computer Science",
        location: "Bandung, West Java",
        period: "2017 - 2022",
        thesis:
          "Development of Water Quality Monitoring in NFT Hydroponic Systems Using WSN",
      },
    },

    // Certifications Section
    certifications: {
      badge: "Achievements",
      title: "Certifications",
      subtitle: "Professional certifications and accomplishments",
      items: [
        {
          name: "Full-Stack Web Development",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "90.9/100",
          description:
            "Intensive bootcamp covering modern web development stack including React, Node.js, and PostgreSQL",
        },
        {
          name: "Back-end Developer",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "88.5/100",
          description:
            "Specialized training in server-side development, API design, and database management",
        },
      ],
    },

    // Contact Section
    contact: {
      badge: "Get In Touch",
      title: "Let's Work Together",
      subtitle:
        "Have a project in mind? Let's discuss how we can bring your ideas to life.",
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
      contact: "Kontak",
    },

    // Hero Section
    hero: {
      available: "Tersedia untuk peluang baru",
      greeting: "Hai, Saya",
      bio: "Saya membuat pengalaman web yang berkinerja tinggi dan mudah diakses. Spesialisasi dalam ekosistem React dengan fokus pada UI yang sempurna dan Core Web Vitals yang optimal.",
      tagline: "Mengubah masalah kompleks menjadi solusi yang elegan dan skalabel.",
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
        "Saya seorang Frontend Engineer berbasis di Bandung, Indonesia dengan pengalaman lebih dari 3 tahun membangun aplikasi web. Saya spesialisasi di React dan Next.js, fokus pada pembuatan antarmuka yang berkinerja tinggi, mudah diakses, dan ramah pengguna.",
      description2:
        "Saat tidak coding, Anda akan menemukan saya menjelajahi teknologi baru, berkontribusi ke proyek open-source, atau menikmati secangkir kopi sambil membaca artikel teknologi.",
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
          description:
            "Membangun aplikasi web responsif dan berkinerja tinggi dengan framework modern",
        },
        {
          title: "Implementasi UI/UX",
          description:
            "Menerjemahkan desain menjadi antarmuka yang sempurna dan mudah diakses",
        },
        {
          title: "Optimasi Performa",
          description:
            "Meningkatkan Core Web Vitals dan kecepatan aplikasi secara keseluruhan",
        },
        {
          title: "Review Kode & Mentoring",
          description:
            "Membantu tim meningkatkan kualitas kode dan praktik pengembangan",
        },
      ],
    },

    // Skills Section
    skills: {
      badge: "Tech Stack",
      title: "Keahlian & Teknologi",
      subtitle: "Alat dan teknologi yang saya gunakan untuk mewujudkan ide",
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
      moreProjects:
        "Ingin melihat lebih banyak? Kunjungi GitHub saya untuk proyek tambahan.",
      items: [
        {
          title: "Platform Parkee",
          description:
            "Memimpin migrasi dari Pages Router ke App Router, mencapai pemuatan halaman 40% lebih cepat. Membangun webview dengan traffic tinggi yang menangani 2.000+ transaksi harian dengan rendering optimal dan strategi lazy loading.",
          highlights: [
            "40% lebih cepat",
            "2K+ transaksi harian",
            "99.9% uptime",
          ],
        },
        {
          title: "LinkLSM.id",
          description:
            "Merancang platform sosial yang menghubungkan 135+ organisasi dengan publik. Mengimplementasikan form multi-step kompleks dengan validasi real-time, mengurangi pengabaian form sebesar 60%.",
          highlights: [
            "135+ organisasi",
            "60% lebih sedikit pengabaian",
            "500+ pengguna harian",
          ],
        },
        {
          title: "STP Aquaculture",
          description:
            "Mendesain dan mengembangkan profil perusahaan yang imersif dengan animasi scroll-driven dan efek parallax. Mencapai skor Lighthouse 95+ dengan aset yang dioptimalkan dan CSS modern.",
          highlights: ["95+ Lighthouse", "60fps lancar", "Mobile-first"],
        },
        {
          title: "Dashboard Internal",
          description:
            "Membangun dashboard analitik real-time dengan visualisasi data interaktif, ekspor PDF, dan kontrol akses berbasis peran. Mengurangi waktu pembuatan laporan dari menit menjadi detik.",
          highlights: ["Data real-time", "Laporan 10x lebih cepat", "Sistem RBAC"],
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
          role: "Frontend Engineer",
          company: "PARKEE",
          type: "Full-Time · Remote",
          period: "Nov 2022 - Sekarang",
          description:
            "Memimpin keputusan arsitektur frontend untuk platform manajemen parkir yang berkembang di Indonesia. Mempelopori optimasi performa, standar kualitas kode, dan peningkatan pengalaman developer.",
          achievements: [
            "Migrasi codebase legacy ke Next.js App Router, meningkatkan LCP sebesar 40%",
            "Membangun sistem transaksi yang menangani 2.000+ operasi harian tanpa downtime",
            "Menetapkan standar coding dengan ESLint, Prettier, dan Husky pre-commit hooks",
            "Membimbing developer junior tentang praktik terbaik React dan prinsip clean code",
          ],
        },
        {
          role: "Frontend Developer",
          company: "PT. Elaborasi Media Inovasi",
          type: "Kontrak",
          period: "Jul 2022 - Okt 2022",
          description:
            "Menyampaikan solusi dashboard kelas enterprise dengan fokus pada visualisasi data dan pengalaman pengguna untuk stakeholder internal.",
          achievements: [
            "Merancang arsitektur komponen yang mendukung 50+ komponen UI yang dapat digunakan kembali",
            "Mengimplementasikan sinkronisasi data real-time yang mengurangi refresh manual sebesar 100%",
            "Membangun fitur ekspor PDF yang menghasilkan laporan 10x lebih cepat dari solusi sebelumnya",
          ],
        },
        {
          role: "Frontend Developer",
          company: "Gincode Nusantara",
          type: "Magang → Kontrak",
          period: "Feb 2020 - Des 2021",
          description:
            "Memulai sebagai magang dan berkembang menjadi kontributor kunci, memimpin pengembangan frontend untuk berbagai proyek klien dan tools internal.",
          achievements: [
            "Memimpin pengembangan platform Rentatoy yang melayani ribuan pengguna",
            "Membangun sistem registrasi untuk Idepreneursclub yang menangani 500+ peserta",
            "Memperkenalkan workflow Git dan praktik code review ke tim",
          ],
        },
      ],
      edu: {
        university: "Universitas Katolik Parahyangan",
        degree: "Sarjana Ilmu Komputer",
        location: "Bandung, Jawa Barat",
        period: "2017 - 2022",
        thesis:
          "Pengembangan Pemantauan Kualitas Air pada Sistem Hidroponik NFT Menggunakan WSN",
      },
    },

    // Certifications Section
    certifications: {
      badge: "Pencapaian",
      title: "Sertifikasi",
      subtitle: "Sertifikasi profesional dan pencapaian",
      items: [
        {
          name: "Pengembangan Web Full-Stack",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "90.9/100",
          description:
            "Bootcamp intensif yang mencakup stack pengembangan web modern termasuk React, Node.js, dan PostgreSQL",
        },
        {
          name: "Back-end Developer",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "88.5/100",
          description:
            "Pelatihan khusus dalam pengembangan server-side, desain API, dan manajemen database",
        },
      ],
    },

    // Contact Section
    contact: {
      badge: "Hubungi Saya",
      title: "Mari Bekerja Sama",
      subtitle:
        "Punya proyek dalam pikiran? Mari diskusikan bagaimana kita bisa mewujudkan ide Anda.",
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
