"use client";

import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  User,
  Wrench,
  Sparkles,
  Rocket,
  Briefcase,
  Award,
  MessageSquare,
  Globe,
  Code2,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "./language-provider";
import { usePortfolio } from "./portfolio-layout";

const menuItems = [
  { key: "about", icon: User },
  { key: "services", icon: Wrench },
  { key: "skills", icon: Sparkles },
  { key: "projects", icon: Rocket },
  { key: "experience", icon: Briefcase },
  { key: "certifications", icon: Award },
  { key: "source", icon: Code2 },
  { key: "contact", icon: MessageSquare },
] as const;

export function HeroMinimal() {
  const { t, language, setLanguage } = useLanguage();
  const { navigateTo } = usePortfolio();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const roleWords = personalInfo.role.split(" ");

  return (
    <section className="min-h-screen flex flex-col font-sans relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Top - Name & Language Toggle */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 py-6 px-6 md:px-12 flex items-center justify-between border-b border-border/50 backdrop-blur-md"
      >
        <h1 className="text-2xl md:text-3xl font-syne font-extrabold tracking-tighter uppercase flex items-center gap-1">
          {personalInfo.name.split(" ")[0]}
          <span className="w-2 h-2 md:w-3 md:h-3 bg-primary block animate-pulse" />
        </h1>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-transparent border border-border/50 text-foreground text-xs md:text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
          aria-label="Toggle language"
        >
          <Globe className="w-4 h-4" />
          {language.toUpperCase()}
        </button>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row px-6 md:px-12 py-12 gap-12 lg:gap-16 relative z-10">
        {/* Left - Description (60%) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-[60%] flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-primary block" />
                <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                  {t.hero.available}
                </p>
              </div>
              <h2 className="font-syne font-black leading-[0.9] mb-8 uppercase tracking-tighter flex flex-col gap-2">
                {roleWords.map((word, i) => (
                  <span
                    key={i}
                    className="text-[12vw] sm:text-6xl md:text-7xl xl:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70"
                  >
                    {word}
                  </span>
                ))}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl font-sans border-l-2 border-primary/30 pl-4 py-1">
                {t.hero.bio}
              </p>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              {t.about.downloadCV}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Menu Grid (40%) */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-[40%] flex items-center"
        >
          <div className="grid grid-cols-2 gap-3 w-full">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const label = t.nav[item.key as keyof typeof t.nav] || item.key;

              return (
                <motion.button
                  key={item.key}
                  variants={itemVariants}
                  onClick={() =>
                    navigateTo(
                      item.key as
                        | "about"
                        | "services"
                        | "skills"
                        | "projects"
                        | "experience"
                        | "certifications"
                        | "source"
                        | "contact"
                    )
                  }
                  className="cursor-pointer group relative p-6 bg-card/40 backdrop-blur-sm border border-border/50 text-center hover:bg-card hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-hidden"
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="absolute inset-0 bg-primary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
                  <span className="font-bold text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-10">
                    {label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      </main>

      {/* Bottom - Social Links */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative z-10 py-6 px-6 md:px-12 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
          {personalInfo.location}
        </p>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
          {personalInfo.email}
        </p>
      </motion.footer>
    </section>
  );
}
