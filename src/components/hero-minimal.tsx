"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
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
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "./language-provider";
import { usePortfolio } from "./portfolio-layout";
import { ThemeToggleReversi } from "./theme-toggle-reversi";

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

  const tapCountRef = useRef(0);
  const lastTapRef = useRef(0);

  const handleSecretDotTap = () => {
    const now = Date.now();
    if (now - lastTapRef.current > 2000) {
      tapCountRef.current = 1;
    } else {
      tapCountRef.current += 1;
    }
    lastTapRef.current = now;

    if (tapCountRef.current >= 5) {
      tapCountRef.current = 0;
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("trigger-domi-reversi"));
      }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex flex-col justify-between">
      {/* Top - Name & Controls */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="py-6 px-6 md:px-12 flex items-center justify-between"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {personalInfo.name.split(" ")[0]}
          <span
            onClick={handleSecretDotTap}
            className="text-primary cursor-pointer select-none active:scale-125 transition-transform inline-block"
            title="Domi Reversi (Tap 5x or type 'reversi')"
          >
            .
          </span>
        </h1>

        <div className="flex items-center gap-2">
          <ThemeToggleReversi />

          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-card/85 backdrop-blur-md border border-border rounded-xl text-sm font-medium shadow-xs hover:shadow-md hover:border-primary/50 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4 text-primary" />
            <span>{language.toUpperCase()}</span>
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row px-6 md:px-12 py-4 gap-8 lg:gap-14 items-center">
        {/* Left - Description (55%) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-[55%] flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 text-foreground">
                {personalInfo.role}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">{t.hero.bio}</p>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition-all w-fit cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              <span>{t.about.downloadCV}</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Menu Grid (45%) */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-[45%] w-full"
          aria-label="Navigation sections"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3.5 w-full">
            {menuItems.map((item) => {
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
                  className="cursor-pointer group relative p-5 bg-card/75 backdrop-blur-md border border-border/80 rounded-2xl text-left shadow-xs hover:shadow-xl hover:border-primary/60 hover:bg-card transition-all duration-300 overflow-hidden focus-visible:ring-2 focus-visible:ring-primary"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative flex flex-col justify-between h-full min-h-[90px]">
                    <div className="flex items-center justify-between w-full">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                    </div>

                    <div className="mt-3">
                      <span className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors block">
                        {label}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      </main>

      {/* Bottom - Social Links */}
      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="py-5 px-6 md:px-12 border-t border-border/50"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-muted-foreground hidden sm:block">{personalInfo.location}</p>

          <div className="flex items-center mx-auto sm:mx-0 flex-col gap-1.5">
            <div className="flex items-center gap-1">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card border border-transparent hover:border-border transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card border border-transparent hover:border-border transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card border border-transparent hover:border-border transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground/60">
                Design inspired by{" "}
                <a
                  href="https://dribbble.com/shots/18413288-Frontend-Developer-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline underline-offset-2"
                >
                  Prince Chijioke
                </a>{" "}
                on Dribbble
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground hidden sm:block">{personalInfo.email}</p>
        </div>
      </motion.footer>
    </section>
  );
}
