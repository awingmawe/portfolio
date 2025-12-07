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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex flex-col">
      {/* Top - Name & Language Toggle */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-6 px-6 md:px-12 flex items-center justify-between"
      >
        <h1 className="text-2xl md:text-3xl font-bold">
          {personalInfo.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </h1>

        <motion.button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border/60 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Toggle language"
        >
          <Globe className="w-4 h-4 text-primary" />
          {language.toUpperCase()}
        </motion.button>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row px-6 md:px-12 pb-6 gap-8 lg:gap-12">
        {/* Left - Description (60%) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-[60%] flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <p className="text-sm text-primary font-medium mb-2">{t.hero.available}</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                {personalInfo.role}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t.hero.bio}</p>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
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
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 w-full">
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
                  className="cursor-pointer group relative p-5 md:p-6 bg-transparent border border-primary text-left  hover:shadow-md hover:border-primary/40 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-1.5 transition-colors text-center">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <span className="font-medium text-sm md:text-base block text-foreground">
                        {label}
                      </span>
                    </div>
                    {/* <span className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all text-lg">
                      →
                    </span> */}
                  </div>
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
        transition={{ duration: 0.5, delay: 0.5 }}
        className="py-6 px-6 md:px-12 border-t border-border/50"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground hidden sm:block">{personalInfo.location}</p>

          <div className="flex items-center mx-auto sm:mx-0 flex-col">
            <div className="flex items-center gap-2">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
            {/* Design Inspiration Credit */}
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
