"use client";

import { useState, useCallback, ReactNode, createContext, useContext } from "react";
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
      <div className="min-h-screen bg-background overflow-hidden font-sans">
        {/* Top Bar - Back Button & Language Toggle */}
        <AnimatePresence>
          {currentSection !== "hero" && (
            <motion.div
              className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={goBack}
                className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-md border border-border/50 rounded-md text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground hover:bg-card hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-md border border-border/50 rounded-md text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground hover:bg-card hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-sm"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transition Overlay with Section Name */}
        <AnimatePresence>
          {isTransitioning && transitionLabel && (
            <motion.div
              className="fixed inset-0 z-40 flex items-center justify-center bg-background pointer-events-none"
              initial={{ scaleY: 0, transformOrigin: "bottom" }}
              animate={{ scaleY: 1, transformOrigin: "bottom" }}
              exit={{ scaleY: 0, transformOrigin: "top" }}
              transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            >
              <motion.div
                className="relative flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-4xl md:text-6xl lg:text-8xl font-syne font-black text-primary uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  {transitionLabel}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
          {currentSection === "hero" ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
              className="min-h-screen"
            >
              {hero}
            </motion.div>
          ) : (
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
              className="min-h-screen pt-24 px-6 md:px-12 pb-12"
            >
              {sections[currentSection as Exclude<SectionKey, "hero">]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PortfolioContext.Provider>
  );
}
