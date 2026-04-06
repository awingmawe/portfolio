export const personalInfo = {
  name: "Moch Rafi Adnan Setiadipura",
  role: "Frontend Software Engineer",
  email: "rafisetiadipura@gmail.com",
  phone: "087825515689",
  location: "Bandung, Jawa Barat",
  bio: "Frontend Software Engineer with 3+ years of experience building scalable web applications. Expert in React, Next.js, and modern CSS with a track record of improving system performance and user experience. Proven ability to architect complex frontend structures, optimize legacy codebases, and deliver high-quality solutions.",
  tagline: "Seeking to leverage expertise in frontend technologies to drive innovation.",
  github: "https://github.com/awingmawe",
  linkedin: "https://linkedin.com/in/mochrafi",
  twitter: "https://twitter.com/mochrafi", // Optional, kept from previous
};

export const skills = {
  frontend: [
    { name: "ReactJS", icon: "react" },
    { name: "NextJS", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML/CSS", icon: "html" },
    { name: "SASS", icon: "sass" },
    { name: "Redux", icon: "redux" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Framer Motion", icon: "framer" },
    { name: "Material UI", icon: "mui" },
    { name: "Shadcn UI", icon: "shadcn" },
    { name: "SWR", icon: "swr" },
  ],
  backend: [
    { name: "SQL", icon: "sql" },
    { name: "Java", icon: "java" },
    { name: "C++", icon: "cpp" },
    { name: "Python", icon: "python" },
    { name: "Node.js", icon: "nodejs" },
  ],
  tools: [
    { name: "GIT", icon: "git" },
    { name: "CI/CD", icon: "cicd" },
    { name: "Agile/Scrum", icon: "agile" },
    { name: "SOLID", icon: "solid" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered CV Reviewer & Optimizer",
    description:
      "Engineered an intelligent CV analysis tool utilizing Large Language Models (LLMs) to automatically parse, evaluate, and optimize resumes against modern ATS standards.",
    image: "/projects/cv-reviewer.png",
    tags: ["Next.js", "LLM API", "Node.js", "OpenClaw", "Gemini 3.1 Pro"],
    liveUrl: "#",
    githubUrl: "https://github.com/awingmawe",
    highlights: ["ATS Optimization", "STAR/XYZ Method", "Telegram Bot Integration"],
    icon: "ai",
    type: "independent",
  },
  {
    id: 2,
    title: "AI Video Clipper System",
    description:
      "Architected a full-stack automated video processing pipeline that leverages AI to identify key moments in long-form videos and extract them into short, shareable clips.",
    image: "/projects/video-clipper.png",
    tags: ["React", "Node.js", "Gemini CLI", "FFmpeg"],
    liveUrl: "#",
    githubUrl: "https://github.com/awingmawe",
    highlights: ["Automated Processing", "AI Key Moment Identification", "Seamless Export"],
    icon: "video",
    type: "independent",
  },
  {
    id: 3,
    title: "Wedding Website Organizer",
    description:
      "Engineered an end-to-end custom wedding invitation platform and guest RSVP management system with full CRUD capabilities.",
    image: "/projects/wedding.png",
    tags: ["React", "CRUD", "Web Animations"],
    liveUrl: "https://ginapanji.my.id/rafi",
    githubUrl: "https://github.com/awingmawe",
    highlights: ["Over 350 guests managed", "Custom UI/UX", "Invitation distribution system"],
    icon: "wedding",
    type: "professional",
  },
  {
    id: 4,
    title: "Portfolio Andreas",
    description:
      "Developed a professional, high-performance portfolio landing page, independently translating broad client requirements into a polished, responsive web interface.",
    image: "/projects/portfolio-andreas.png",
    tags: ["Next.js", "Responsive Design"],
    liveUrl: "https://visiongoal.ch/en",
    githubUrl: "https://github.com/awingmawe",
    highlights: ["Delivered in 2 weeks", "Cross-device compatibility"],
    icon: "portfolio",
    type: "professional",
  },
  {
    id: 5,
    title: "LinkLSM.id",
    description:
      "Engineered a specialized social media platform to drive public engagement for organizations, successfully onboarding 135 registered organizations.",
    image: "/projects/linklsm.png",
    tags: ["React", "React Hook Form"],
    liveUrl: "https://linklsm.id",
    githubUrl: "https://github.com/awingmawe",
    highlights: ["135+ organizations", "5-step registration flow", "Data validation"],
    icon: "link",
    type: "professional",
  },
  {
    id: 6,
    title: "STP Aquaculture",
    description:
      "Architected the front-end structure for a corporate profile website using NextJS (App Router), optimizing for speed and modern web standards.",
    image: "/projects/stp-aquaculture.png",
    tags: ["Next.js", "Framer Motion"],
    liveUrl: "https://stpaquaculture.com",
    githubUrl: "https://github.com/awingmawe",
    highlights: ["App Router", "Parallax scrolling", "Immersive UX"],
    icon: "fish",
    type: "professional",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Software Engineer - Frontend Developer",
    company: "PARKEE",
    type: "Full-Time",
    period: "Nov 2022 - Present",
    description:
      "Engineered the migration of parkee.app from a traditional page router to a Next.js App Router, significantly enhancing routing performance, SEO, and application flexibility.",
    achievements: [
      "Architected and deployed a dedicated webview for the Wuzz registration system, successfully streamlining user onboarding and securely processing over 2,000 total transactions.",
      "Designed and integrated a dynamic email template system utilizing SendGrid, automating the delivery of transaction receipts and improving post-purchase communication.",
      "Refactored existing codebase by strictly applying SOLID principles, which improved code maintainability, reduced technical debt, and enhanced module scalability for future rollouts.",
      "Resolved critical performance bottlenecks within the CMS, reducing load times by an estimated 30% and delivering a seamless user experience for internal operators.",
    ],
    technologies: ["Next.js App Router", "React", "SendGrid", "SOLID Principles"],
  },
  {
    id: 2,
    role: "Software Engineer - Frontend Developer",
    company: "PT Muslim Seratus Satu",
    type: "Contract",
    period: "Aug 2024 - Dec 2025",
    description:
      "Spearheaded the end-to-end frontend architecture and development of an online Umrah transaction platform, collaborating within an 8-person cross-functional team.",
    achievements: [
      "Engineered two major iterations of the application: V1 utilizing Material UI, Next.js, and SWR, and V2 upgrading to Next.js 15 and Shadcn UI, completing the entire V2 rebuild from scratch in under 2 months.",
      "Achieved >95% pixel-perfect UI/UX consistency with Figma designs, ensuring a highly polished and intuitive user experience.",
      "Optimized Technical SEO by implementing UTM tracking, Google Tag Manager (GTM), comprehensive Sitemaps, and JSON-LD scripts, successfully securing a #1 search ranking for the V2 platform.",
      "Led and mentored a freelance frontend developer starting in the 7th month, accelerating project delivery and maintaining high code quality standards.",
    ],
    technologies: ["Next.js 15", "Shadcn UI", "Material UI", "SWR", "Technical SEO"],
  },
  {
    id: 3,
    role: "Software Engineer Intern - Frontend Developer",
    company: "Gincode Nusantara",
    type: "Internship → Contract",
    period: "Feb 2020 - Dec 2021",
    description:
      "Spearheaded the front-end implementation of the Rentatoy platform, utilizing ReactJS and Ant Design to create a responsive and intuitive user interface.",
    achievements: [
      "Built and deployed an interactive internal dashboard from scratch, collaborating within a 4-person development team using ReactJS and custom CSS.",
      "Developed custom registration forms and user flows for Idepreneursclub, successfully onboarding and serving a user base of over 500 participants.",
      "Created a scalable web application for digital wedding invitations, handling end-to-end frontend development and ensuring cross-device compatibility.",
    ],
    technologies: ["ReactJS", "Ant Design", "Custom CSS"],
  },
];
