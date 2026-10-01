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
      "React & Next.js Specialist",
      "Full-Stack System Builder",
      "System Designer",
      "Performance Enthusiast",
      "Core Web Vitals Obsessed",
      "TypeScript Advocate",
    ],

    // About Section
    about: {
      badge: "About Me",
      title: "Passionate About Creating",
      titleHighlight: "Digital Experiences",
      description:
        "I'm a Frontend Engineer based in Bandung, Indonesia with over 4 years of experience building web applications where speed, reliability, and precision directly impact the bottom line. I specialize in React and Next.js, focusing on creating performant, accessible, and user-friendly interfaces.",
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
          title: "Full-Stack Web Engineering",
          description:
            "Architecting responsive, high-availability web apps using Next.js App Router, TypeScript, and relational databases",
        },
        {
          title: "Design Systems & UI Engineering",
          description:
            "Transforming complex Figma wireframes into accessible, design-token-driven components with 60fps spring motion",
        },
        {
          title: "Core Web Vitals & Speed Optimization",
          description:
            "Slashing LCP and TBT to achieve 95+ Lighthouse scores, improving SEO rankings, and lifting conversion rates",
        },
        {
          title: "Code Review & Mentoring",
          description: "Helping teams improve code quality and development practices",
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
      subtitle:
        "Featured case studies with proven technical benchmarks and measurable business impact",
      viewGithub: "View GitHub Profile",
      moreProjects: "Want to see more? Check out my GitHub for additional projects.",
      items: [
        {
          title: "Wedding Website SaaS · Maru Story",
          description:
            "Architected an end-to-end digital wedding platform using Next.js (App Router), TypeScript, and PostgreSQL (Prisma ORM), managing ~500 guests across multi-session events with real-time RSVP, sub-second QR code scanner, and multi-tenant audit logs.",
          highlights: ["<1s QR Check-in", "500+ Guest Capacity", "Multi-Tenant & AuditLog"],
        },
        {
          title: "YooraSarah Lifestyle E-Commerce",
          description:
            "Built custom direct-to-consumer digital storefront from scratch in a 4-person team, eliminating third-party marketplace commission fees. Integrated Xendit payment checkout and fluid 60fps media browsing.",
          highlights: ["Direct Sales D2C", "Xendit Gateway", "4-Person Team"],
        },
        {
          title: "Wedding Website Organizer · Panji & Gina",
          description:
            "Engineered an end-to-end custom wedding invitation platform in TypeScript with a guest RSVP management system (full CRUD), managing data for 350+ guests with bespoke animations and personalized invitations.",
          highlights: ["350+ Guests RSVP", "Tailored Motion", "Full CRUD Admin"],
        },
        {
          title: "Vision Goal · Cinematography & Production",
          description:
            "High-performance cinematography and media portfolio landing page in TypeScript, translating client requirements into an immersive, editorial interface with fluid 60fps spring transitions.",
          highlights: ["Delivered in 2 Weeks", "Zero Mockup to Prod", "Fluid 60fps Motion"],
        },
        {
          title: "STP Aquaculture Corporate Profile",
          description:
            "Built the frontend of a corporate profile website with Next.js (App Router), TypeScript, and Framer Motion, incorporating interactive animations and parallax scrolling for an immersive maritime enterprise experience.",
          highlights: ["Parallax Motion", "Enterprise Profile", "App Router"],
        },
        {
          title: "LinkLSM.id NGO Social Platform",
          description:
            "Built a social engagement platform for non-profit organizations with React and TypeScript, successfully onboarding 135 organizations through a comprehensive 5-step validation workflow.",
          highlights: ["135 Organizations", "5-Step Reg Flow", "Multi-Step Form"],
        },
        {
          title: "AI Video Clipper System",
          description:
            "Built a full-stack media intelligence pipeline that leverages Gemini AI and FFmpeg to identify key moments in long-form videos and automatically extract them into short, shareable clips.",
          highlights: ["Gemini AI Powered", "FFmpeg Processing", "Automated Clip Extraction"],
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
          role: "Software Engineer – Frontend Developer",
          company: "PARKEE",
          type: "Full-Time · Remote",
          period: "Nov 2022 - Present",
          description:
            "Leading frontend architecture decisions for Indonesia's growing smart parking ecosystem. Championing Core Web Vitals optimization, zero-downtime transaction systems, and developer experience.",
          achievements: [
            "Migrated legacy Gatsby to Next.js 14 App Router, cutting LCP by 29% (2.1s to 1.5s) with TBT 50% below Google threshold",
            "Engineered Wuzz standalone registration webview securely handling 2,000+ daily transactions",
            "Implemented automated transactional receipt email system with SendGrid API",
            "Refactored codebase around SOLID principles and optimized internal CMS, reducing load times by 30%",
          ],
        },
        {
          role: "Software Engineer – Frontend Developer",
          company: "PT Muslim Seratus Satu",
          type: "Contract · Remote",
          period: "Aug 2024 - Dec 2025",
          description:
            "Led frontend architecture of online Umrah marketplace and Islamic banking transaction platform within an 8-person cross-functional team.",
          achievements: [
            "Shipped V1 with Next.js & Material UI, then rebuilt platform from scratch as V2 using Next.js 15 & Shadcn UI in under 2 months",
            "Achieved #1 Google search ranking for V2 platform through end-to-end technical SEO (JSON-LD, GTM, sitemaps)",
            "Delivered 95%+ pixel-perfect fidelity matching Figma designs with integrated Midtrans Snap & LinkAja payments",
            "Mentored freelance frontend developers, maintaining code quality and continuous delivery standards",
          ],
        },
        {
          role: "Software Engineer Intern – Frontend Developer",
          company: "Gincode Nusantara",
          type: "Internship → Contract",
          period: "Feb 2020 - Dec 2021",
          description:
            "Developed responsive interfaces and interactive web portals across multiple client products and internal tools.",
          achievements: [
            "Built frontend for Rentatoy platform using ReactJS and Ant Design",
            "Engineered registration flows and interactive forms for Idepreneursclub onboarding 500+ participants",
            "Collaborated in 4-person team to build internal operational dashboards from scratch",
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
            "Specialized training in server-side development, API design, and database management. Built RESTful API architecture for 'mager' and 'filmen' with Express, Node.js, and PostgreSQL",
        },
      ],
    },

    // Source Section
    source: {
      badge: "Open Source",
      title: "Built With",
      subtitle:
        "This portfolio is built using these amazing open source technologies and libraries",
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
        send: "Send Inquiry",
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
      skills: "Skills",
      projects: "Proyek",
      experience: "Pengalaman",
      certifications: "Sertifikasi",
      source: "Source",
      contact: "Kontak",
    },

    // Hero Section
    hero: {
      available: "Siap untuk peluang baru",
      greeting: "Halo, saya",
      bio: "Saya fokus membangun website yang cepat, interaktif, dan nyaman digunakan. Spesialisasi di ekosistem React dengan perhatian penuh pada detail antarmuka dan optimasi Core Web Vitals.",
      tagline: "Mengubah masalah rumit jadi solusi web yang rapi, elegan, dan siap berkembang.",
      cta: "Hubungi Saya",
      viewWork: "Lihat Karya",
      scroll: "Scroll",
    },

    // Stats
    stats: {
      yearsExp: "Tahun Pengalaman",
      projects: "Proyek Selesai",
      companies: "Perusahaan & Klien",
      clients: "Klien Puas",
    },

    // Typewriter
    typewriter: [
      "Frontend Engineer",
      "Spesialis React & Next.js",
      "Pembangun Sistem Full-Stack",
      "UI/UX & System Design",
      "Web Performance Enthusiast",
      "Terobsesi Core Web Vitals",
      "Advokat TypeScript",
    ],

    // About Section
    about: {
      badge: "Tentang Saya",
      title: "Senang Menciptakan",
      titleHighlight: "Pengalaman Digital",
      description:
        "Saya seorang Frontend Engineer asal Bandung dengan pengalaman lebih dari 4 tahun membangun aplikasi web yang mengutamakan kecepatan, stabilitas, dan kenyamanan pengguna. Spesialisasi saya berfokus pada React dan Next.js, mulai dari perancangan antarmuka yang presisi hingga optimasi performa Core Web Vitals.",
      description2:
        "Saat lagi santai di luar jam ngoding, biasanya saya suka eksplorasi teknologi baru, berkontribusi ke proyek open-source, atau sekadar menikmati kopi sambil membaca artikel tech.",
      yearsExp: "Tahun Pengalaman",
      projectsDone: "Proyek Selesai",
      downloadCV: "Unduh CV",
      hireMe: "Hubungi Saya",
    },

    // Services Section
    services: {
      badge: "Yang Saya Kerjakan",
      title: "Layanan",
      subtitle: "Membantu bisnis dan startup membangun kehadiran produk digital yang solid",
      items: [
        {
          title: "Pengembangan Web Full-Stack",
          description:
            "Membangun aplikasi web modern yang responsif dan kencang menggunakan Next.js App Router, TypeScript, dan database relasional.",
        },
        {
          title: "Sistem Desain & Rekayasa UI",
          description:
            "Menerjemahkan wireframe Figma kompleks jadi komponen modular berbasis design tokens dengan animasi mulus 60fps.",
        },
        {
          title: "Optimasi Kecepatan & Core Web Vitals",
          description:
            "Memangkas metrik LCP & TBT untuk meraih skor Lighthouse 95+, mendongkrak peringkat SEO, dan meningkatkan konversi pengguna.",
        },
        {
          title: "Code Review & Mentoring",
          description:
            "Membantu tim meningkatkan kualitas kode, merapikan arsitektur aplikasi, dan menerapkan best practice development.",
        },
      ],
    },

    // Skills Section
    skills: {
      badge: "Tech Stack",
      title: "Keahlian & Teknologi",
      subtitle: "Teknologi dan tools andalan yang biasa saya gunakan sehari-hari",
      frontend: "Frontend",
      backend: "Backend & Database",
      tools: "Tools & DevOps",
    },

    // Projects Section
    projects: {
      badge: "Portofolio",
      title: "Proyek Pilihan",
      subtitle:
        "Koleksi studi kasus nyata dengan tolok ukur teknis teruji dan dampak bisnis yang nyata",
      viewGithub: "Lihat Profil GitHub",
      moreProjects: "Mau lihat eksplorasi kode lainnya? Yuk, mampir ke profil GitHub saya.",
      items: [
        {
          title: "SaaS Undangan Digital · Maru Story",
          description:
            "Platform SaaS pernikahan digital end-to-end berbasis Next.js App Router, TypeScript, dan PostgreSQL Prisma ORM. Mampu menangani ~500 tamu secara real-time lewat QR scanner instan (< 1 detik) dan pelacakan audit log multi-tenant.",
          highlights: ["Check-in QR < 1 dtk", "Kapasitas 500+ Tamu", "Multi-Tenant & AuditLog"],
        },
        {
          title: "E-Commerce Lifestyle YooraSarah",
          description:
            "Storefront digital D2C yang dibangun dari nol bersama tim beranggotakan 4 orang untuk menghemat biaya komisi marketplace pihak ketiga. Dilengkapi checkout Xendit dan navigasi katalog yang tetap mulus di 60fps.",
          highlights: ["Penjualan Langsung D2C", "Gateway Xendit", "Tim 4 Orang"],
        },
        {
          title: "Undangan Pernikahan Kustom · Panji & Gina",
          description:
            "Platform undangan pernikahan kustom berbasis TypeScript dengan sistem manajemen RSVP mandiri (full CRUD) untuk 350+ tamu, lengkap dengan animasi interaktif yang dipersonalisasi.",
          highlights: ["350+ Tamu RSVP", "Animasi Personal", "Admin Full CRUD"],
        },
        {
          title: "Vision Goal · Sinematografi & Produksi",
          description:
            "Landing page portofolio sinematografi berkinerja tinggi dalam TypeScript. Menerjemahkan kebutuhan klien menjadi tampilan interaktif elegan tanpa mockup awal, selesai dalam 2 minggu dengan transisi pegas 60fps.",
          highlights: ["Selesai dlm 2 Pekan", "Dari Nol Mockup", "Animasi 60fps Mulus"],
        },
        {
          title: "Profil Perusahaan STP Aquaculture",
          description:
            "Website profil korporat maritim menggunakan Next.js App Router, TypeScript, dan Framer Motion, dilengkapi animasi interaktif serta efek parallax modern untuk citra brand enterprise.",
          highlights: ["Animasi Parallax", "Profil Korporat", "App Router"],
        },
        {
          title: "Platform Sosial NGO LinkLSM.id",
          description:
            "Platform keterlibatan publik untuk organisasi non-profit dengan React dan TypeScript. Sukses memfasilitasi onboarding 135 organisasi melalui alur pendaftaran 5 langkah yang terstruktur rapi.",
          highlights: ["135 Organisasi", "Alur Daftar 5 Tahap", "Form Multi-Step"],
        },
        {
          title: "Pipeline AI Video Clipper",
          description:
            "Pipeline kecerdasan media full-stack bertenaga Gemini AI dan FFmpeg untuk mendeteksi momen puncak dari video berdurasi panjang secara otomatis dan memotongnya jadi klip pendek siap share.",
          highlights: ["Ditenagai Gemini AI", "Pemrosesan FFmpeg", "Ekstraksi Klip Otomatis"],
        },
      ],
    },

    // Experience Section
    experience: {
      badge: "Perjalanan Karir",
      title: "Pengalaman Kerja",
      subtitle: "Jejak langkah profesional saya dalam dunia software engineering",
      education: "Pendidikan",
      items: [
        {
          role: "Software Engineer – Frontend Developer",
          company: "PARKEE",
          type: "Full-Time · Remote",
          period: "Nov 2022 - Sekarang",
          description:
            "Memegang peran dalam pengambilan keputusan arsitektur frontend ekosistem smart parking di Indonesia. Fokus mengoptimalkan Core Web Vitals, menjaga keandalan transaksi tanpa downtime, dan meningkatkan developer experience tim.",
          achievements: [
            "Migrasi codebase legacy Gatsby ke Next.js 14 App Router, memangkas LCP sebesar 29% (2,1 detik ke 1,5 detik) dengan TBT 50% lebih baik dari batas standar Google",
            "Membangun webview mandiri Wuzz yang memproses 2.000+ transaksi harian secara aman dan stabil",
            "Menerapkan sistem email bukti transaksi otomatis terintegrasi SendGrid API",
            "Merapikan arsitektur kode dengan prinsip SOLID dan optimasi CMS internal, memangkas waktu pemuatan hingga 30%",
          ],
        },
        {
          role: "Software Engineer – Frontend Developer",
          company: "PT Muslim Seratus Satu",
          type: "Kontrak · Remote",
          period: "Agu 2024 - Des 2025",
          description:
            "Memimpin arsitektur frontend marketplace Umrah dan sistem transaksi keuangan syariah bersama tim lintas fungsi beranggotakan 8 orang.",
          achievements: [
            "Merilis V1 dengan Next.js & Material UI, lalu membangun ulang V2 dari nol memakai Next.js 15 & Shadcn UI dalam waktu kurang dari 2 bulan",
            "Membawa platform V2 meraih peringkat #1 Google lewat penerapan SEO teknis terstruktur (JSON-LD, GTM, sitemap dinamis)",
            "Menghasilkan antarmuka pixel-perfect 95%+ sesuai desain Figma dengan integrasi pembayaran Midtrans Snap & LinkAja",
            "Mementori rekan developer frontend freelance, menjaga standar kode dan konsistensi delivery fitur",
          ],
        },
        {
          role: "Software Engineer Intern – Frontend Developer",
          company: "Gincode Nusantara",
          type: "Magang → Kontrak",
          period: "Feb 2020 - Des 2021",
          description:
            "Mengembangkan antarmuka web responsif dan portal interaktif untuk beberapa produk klien serta internal tools perusahaan.",
          achievements: [
            "Membangun frontend platform Rentatoy menggunakan ReactJS dan Ant Design yang intuitif",
            "Merancang alur pendaftaran dan form interaktif Idepreneursclub yang melayani 500+ peserta",
            "Berkolaborasi bersama 4 orang anggota tim membangun dashboard operasional internal dari nol",
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
      subtitle: "Sertifikasi profesional dan program pelatihan yang pernah saya selesaikan",
      items: [
        {
          name: "Pengembangan Web Full-Stack",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "90.9/100",
          description:
            "Bootcamp intensif yang mendalami stack pengembangan web modern, mencakup React, Node.js, dan PostgreSQL",
        },
        {
          name: "Back-end Developer",
          issuer: "SYNERGY Academy",
          year: "2022",
          score: "88.5/100",
          description:
            "Pelatihan khusus arsitektur server-side, desain API, dan manajemen database. Merancang arsitektur RESTful API untuk 'mager' dan 'filmen' dengan Express, Node.js, dan PostgreSQL",
        },
      ],
    },

    // Source Section
    source: {
      badge: "Open Source",
      title: "Dibangun Dengan",
      subtitle:
        "Portofolio ini dibangun dengan memanfaatkan beragam teknologi dan library open-source pilihan",
      footer: "Kode sumber portofolio ini sepenuhnya open-source. Silakan dieksplorasi!",
      viewRepo: "Lihat Repository",
    },

    // Contact Section
    contact: {
      badge: "Hubungi Saya",
      title: "Mari Bekerja Sama",
      subtitle:
        "Punya ide proyek menarik atau peluang kerja sama? Yuk, diskusikan bagaimana kita bisa mewujudkannya bersama.",
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
      success: "Pesan berhasil terkirim! Saya akan segera menghubungi Anda kembali.",
      error: "Gagal mengirim pesan. Silakan coba beberapa saat lagi ya.",
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
