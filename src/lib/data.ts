export const personalInfo = {
  name: "Rafi Setiadipura",
  role: "Frontend Engineer",
  email: "rafisetiadipura@gmail.com",
  phone: "087825515689",
  location: "Bandung, Indonesia",
  bio: "I craft performant, accessible web experiences that users love. Specialized in React ecosystem with a focus on delivering pixel-perfect UIs and optimized Core Web Vitals.",
  tagline: "Turning complex problems into elegant, scalable solutions.",
  github: "https://github.com/mochrafi",
  linkedin: "https://linkedin.com/in/mochrafi",
  twitter: "https://twitter.com/mochrafi",
};

export const skills = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Framer Motion", icon: "framer" },
    { name: "Redux", icon: "redux" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "SASS", icon: "sass" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Prisma", icon: "prisma" },
    { name: "REST API", icon: "api" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "vercel" },
    { name: "VS Code", icon: "vscode" },
    { name: "Figma", icon: "figma" },
    { name: "Postman", icon: "postman" },
    { name: "npm", icon: "npm" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Parkee Platform",
    description:
      "Spearheaded migration from Pages Router to App Router, achieving 40% faster page loads. Built high-traffic webview handling 2,000+ daily transactions with optimized rendering and lazy loading strategies.",
    image: "/projects/parkee.png",
    tags: ["Next.js 14", "TypeScript", "App Router", "SendGrid"],
    liveUrl: "https://parkee.app",
    githubUrl: "https://github.com/mochrafi",
    highlights: ["40% faster loads", "2K+ daily transactions", "99.9% uptime"],
    icon: "parking",
  },
  {
    id: 2,
    title: "LinkLSM.id",
    description:
      "Architected a social platform connecting 135+ organizations with the public. Implemented complex multi-step forms with real-time validation, reducing form abandonment by 60%.",
    image: "/projects/linklsm.png",
    tags: ["React", "React Hook Form", "Zod", "REST API"],
    liveUrl: "https://linklsm.id",
    githubUrl: "https://github.com/mochrafi",
    highlights: ["135+ organizations", "60% less abandonment", "500+ daily users"],
    icon: "link",
  },
  {
    id: 3,
    title: "STP Aquaculture",
    description:
      "Designed and developed an immersive company profile with scroll-driven animations and parallax effects. Achieved 95+ Lighthouse performance score with optimized assets and modern CSS.",
    image: "/projects/stp-aquaculture.png",
    tags: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    liveUrl: "https://stpaquaculture.com",
    githubUrl: "https://github.com/mochrafi",
    highlights: ["95+ Lighthouse", "Smooth 60fps", "Mobile-first"],
    icon: "fish",
  },
  {
    id: 4,
    title: "Internal Dashboard",
    description:
      "Built a real-time analytics dashboard with interactive data visualizations, PDF export, and role-based access control. Reduced report generation time from minutes to seconds.",
    image: "/projects/dashboard.png",
    tags: ["React", "Chart.js", "React PDF", "WebSocket"],
    liveUrl: "#",
    githubUrl: "https://github.com/mochrafi",
    highlights: ["Real-time data", "10x faster reports", "RBAC system"],
    icon: "dashboard",
  },
];

export const experiences = [
  {
    id: 1,
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "Zustand"],
  },
  {
    id: 2,
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
    technologies: ["React", "Redux", "Chart.js", "Styled Components"],
  },
  {
    id: 3,
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
    technologies: ["React", "Ant Design", "JavaScript", "Git"],
  },
];
