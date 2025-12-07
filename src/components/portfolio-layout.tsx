"use client";

import { useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "./language-provider";

type SectionKey =
  | "hero"
  | "about"
  | "services"
  | "skills"
  | "projects"
  | "experience"
  | "certifications"
  | "source"
  | "contact";

interface PortfolioLayoutProps {
  hero: ReactNode;
  sections: Record<Exclude<SectionKey, "hero">, ReactNode>;
}

interface PortfolioContextValue {
  currentSection: SectionKey;
  navigateTo: (section: SectionKey) => void;
  goBack: () => void;
}

import { createContext, useContext } from "react";

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within PortfolioLayout");
  return context;
}

export function PortfolioLayout({ hero, sections }: PortfolioLayoutProps) {
  const [currentSection, setCurrentSection] = useState<SectionKey>("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState<string>("");
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  const getSectionLabel = useCallback(
    (section: SectionKey): string => {
      if (section === "hero") return "";
      return t.nav[section as keyof typeof t.nav] || section;
    },
    [t.nav]
  );

  const navigateTo = useCallback(
    (section: SectionKey) => {
      if (isTransitioning || section === currentSection) return;
      setTransitionLabel(getSectionLabel(section));
      setIsTransitioning(true);
      setCurrentSection(section);
    },
    [isTransitioning, currentSection, getSectionLabel]
  );

  const goBack = useCallback(() => {
    if (isTransitioning || currentSection === "hero") return;
    setTransitionLabel("");
    setIsTransitioning(true);
    setCurrentSection("hero");
  }, [isTransitioning, currentSection]);

  const handleAnimationComplete = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  const contextValue: PortfolioContextValue = {
    currentSection,
    navigateTo,
    goBack,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Top Bar - Back Button & Language Toggle (Outside AnimatePresence for proper fixed positioning) */}
        <AnimatePresence>
          {currentSection !== "hero" && (
            <motion.div
              className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={goBack}
                className="flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border/60 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-4 h-4 text-primary" />
                Back
              </motion.button>

              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border/60 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4 text-primary" />
                {language.toUpperCase()}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transition Overlay with Section Name */}
        <AnimatePresence>
          {isTransitioning && transitionLabel && (
            <motion.div
              className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="relative flex flex-col items-center gap-4"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Decorative line */}
                <motion.div
                  className="w-12 h-1 bg-primary/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
                {/* Section name */}
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
                  {transitionLabel}
                </span>
                {/* Decorative line */}
                <motion.div
                  className="w-12 h-1 bg-primary/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
          {currentSection === "hero" ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="min-h-screen"
            >
              {hero}
            </motion.div>
          ) : (
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="min-h-screen"
            >
              {sections[currentSection as Exclude<SectionKey, "hero">]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PortfolioContext.Provider>
  );
}
