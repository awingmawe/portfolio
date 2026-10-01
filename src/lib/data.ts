export const personalInfo = {
  name: "Moch Rafi Adnan Setiadipura",
  role: "Frontend Engineer",
  email: "rafisetiadipura@gmail.com",
  phone: "+62 878-2551-5689",
  location: "Bandung, Indonesia (Remote, UTC+7)",
  bio: "Frontend Engineer with 4 years of experience building and shipping production web applications with React, Next.js, and TypeScript across parking, travel, and e-commerce products.",
  tagline:
    "Building high-throughput web applications with sub-second performance, bulletproof UX, and measurable business impact.",
  github: "https://github.com/awingmawe",
  linkedin: "https://www.linkedin.com/in/mochrafias/",
  twitter: "https://twitter.com/mochrafi",
  whatsapp: "https://wa.me/6287825515689",
};

export const skills = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Framer Motion", icon: "framer" },
    { name: "Zustand", icon: "redux" },
    { name: "Redux", icon: "redux" },
    { name: "HTML5 / CSS3", icon: "html" },
    { name: "SASS", icon: "sass" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Prisma ORM", icon: "prisma" },
    { name: "REST API", icon: "api" },
    { name: "Python", icon: "api" },
  ],
  tools: [
    { name: "Git & GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "vercel" },
    { name: "Technical SEO", icon: "api" },
    { name: "Xendit & Midtrans", icon: "api" },
    { name: "SendGrid", icon: "api" },
    { name: "Figma", icon: "figma" },
    { name: "Postman", icon: "postman" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Wedding Website SaaS · Maru Story",
    description:
      "Architected an end-to-end digital wedding platform using Next.js (App Router), TypeScript, and PostgreSQL (Prisma ORM), managing ~500 guests with real-time RSVP, sub-second QR scanner, and multi-tenant audit logs.",
    image: "/projects/maru-story.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "QR Scanner", "Framer Motion"],
    liveUrl: "https://maruplanner.my.id",
    githubUrl: "https://github.com/maru-story/wedding-ecosystem",
    highlights: ["<1s QR Check-in", "500+ Guest Capacity", "Multi-Tenant & AuditLog"],
    icon: "heart",
  },
  {
    id: 2,
    title: "YooraSarah Lifestyle E-Commerce",
    description:
      "Built custom direct-to-consumer digital storefront from scratch in a 4-person team, eliminating third-party marketplace fees. Integrated Xendit payment gateway and fluid media experience.",
    image: "/projects/yoorasarah.png",
    tags: ["Next.js 16", "React 19", "TypeScript", "Xendit", "Tailwind CSS", "Zustand"],
    liveUrl: "https://www.yoorasarah.com/en",
    githubUrl: "#",
    highlights: ["Direct Sales D2C", "Xendit Gateway", "4-Person Team"],
    icon: "shopping",
  },
  {
    id: 3,
    title: "Wedding Website Organizer · Panji & Gina",
    description:
      "Engineered an end-to-end custom wedding invitation platform in TypeScript with a guest RSVP management system (full CRUD), managing data for 350+ guests with bespoke animations.",
    image: "/projects/wedding-panji-v2.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "RSVP CRUD"],
    liveUrl: "https://ginapanji.my.id/rafi",
    githubUrl: "https://github.com/awingmawe/wedding-panji-gina",
    highlights: ["350+ Guests RSVP", "Tailored Motion", "Full CRUD Admin"],
    icon: "heart",
  },
  {
    id: 4,
    title: "Vision Goal · Cinematography & Production",
    description:
      "High-performance cinematography and media portfolio landing page in TypeScript, translating client requirements into an immersive interface without existing mockups, delivered in two weeks with fluid 60fps motion.",
    image: "/projects/andreas-v2.png",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Swiper", "Tailwind CSS"],
    liveUrl: "https://www.visiongoal.ch/en",
    githubUrl: "https://github.com/awingmawe/andreas-portfolio",
    highlights: ["Delivered in 2 Weeks", "Zero Mockup to Prod", "Fluid 60fps Motion"],
    icon: "film",
  },
  {
    id: 5,
    title: "STP Aquaculture Corporate Profile",
    description:
      "Built the frontend of a corporate profile website with Next.js (App Router), TypeScript, and Framer Motion, incorporating interactive animations and parallax scrolling for maritime enterprise.",
    image: "/projects/stp-aquaculture-v2.png",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Parallax"],
    liveUrl: "https://stpaquaculture.com/en",
    githubUrl: "https://github.com/awingmawe/stp-aquaculture",
    highlights: ["Parallax Motion", "Enterprise Profile", "App Router"],
    icon: "fish",
  },
  {
    id: 6,
    title: "LinkLSM.id NGO Social Platform",
    description:
      "Built a social engagement platform for non-profit organizations with React and TypeScript, successfully onboarding 135 organizations through a comprehensive 5-step validation workflow.",
    image: "/projects/linklsm-v2.png",
    tags: ["React", "TypeScript", "React Hook Form", "REST API", "Tailwind CSS"],
    liveUrl: "https://linklsm.id",
    githubUrl: "https://github.com/awingmawe/link-lsm-web",
    highlights: ["135 Organizations", "5-Step Reg Flow", "Multi-Step Form"],
    icon: "link",
  },
  {
    id: 7,
    title: "AI Video Clipper System",
    description:
      "Built a full-stack media intelligence pipeline that leverages Gemini AI and FFmpeg to identify key moments in long-form videos and automatically extract them into shareable clips.",
    image: "/projects/video-clipper.png",
    tags: ["React", "TypeScript", "Node.js", "Gemini AI", "FFmpeg"],
    liveUrl: "#",
    githubUrl: "https://github.com/awingmawe/frontend-video-clipper",
    highlights: ["Gemini AI Powered", "FFmpeg Processing", "Automated Clip Extraction"],
    icon: "video",
  },
];

export const experiences = [
  {
    id: 1,
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
    technologies: [
      "Next.js 14",
      "TypeScript",
      "App Router",
      "SendGrid",
      "Core Web Vitals",
      "Zustand",
    ],
  },
  {
    id: 2,
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
    technologies: ["Next.js 15", "TypeScript", "Shadcn UI", "SWR", "Technical SEO", "Midtrans"],
  },
  {
    id: 3,
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
    technologies: ["React", "Ant Design", "JavaScript", "CSS3", "Git"],
  },
];
