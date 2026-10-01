"use client";

import { useState, useCallback, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "./language-provider";
import { ThemeToggleReversi } from "./theme-toggle-reversi";
import { FloatingDock } from "./floating-dock";

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
    [t]
  );

  const navigateTo = useCallback(
    (section: SectionKey) => {
      if (isTransitioning || section === currentSection) return;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (typeof document !== "undefined") {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
      setTransitionLabel(getSectionLabel(section));
      setIsTransitioning(true);
      setCurrentSection(section);
    },
    [isTransitioning, currentSection, getSectionLabel]
  );

  const goBack = useCallback(() => {
    if (isTransitioning || currentSection === "hero") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    setTransitionLabel("");
    setIsTransitioning(true);
    setCurrentSection("hero");
  }, [isTransitioning, currentSection]);

  // Ensure scroll is at top whenever section changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [currentSection]);

  // Keyboard navigation: Escape key returns to hero (UI/UX Pro Max Priority 1 & 9)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && currentSection !== "hero") {
        goBack();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, goBack]);

  const handleAnimationComplete = useCallback(() => {
    setIsTransitioning(false);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, []);

  const contextValue: PortfolioContextValue = {
    currentSection,
    navigateTo,
    goBack,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      <div className="min-h-screen bg-background overflow-hidden relative">
        {/* Top Bar - Back Button & Controls */}
        <AnimatePresence>
          {currentSection !== "hero" && (
            <motion.div
              className="fixed top-5 left-4 right-4 md:left-8 md:right-8 z-50 flex items-center justify-between pointer-events-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <motion.button
                onClick={goBack}
                className="flex items-center gap-2 px-3.5 py-2 bg-card/85 backdrop-blur-md border border-border rounded-xl text-sm font-medium shadow-xs hover:shadow-md hover:border-primary/50 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Back to overview (Esc)"
              >
                <ArrowLeft className="w-4 h-4 text-primary" />
                <span>Back</span>
                <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono rounded bg-muted/60 border border-border text-muted-foreground">
                  ESC
                </kbd>
              </motion.button>

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
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                className="relative flex flex-col items-center gap-4"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Decorative line */}
                <motion.div
                  className="w-12 h-1 bg-primary/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                />
                {/* Section name */}
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
                  {transitionLabel}
                </span>
                {/* Decorative line */}
                <motion.div
                  className="w-12 h-1 bg-primary/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
          {currentSection === "hero" ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-screen"
            >
              {hero}
            </motion.div>
          ) : (
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-screen pb-20"
            >
              {sections[currentSection as Exclude<SectionKey, "hero">]}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Glass Dock (Option A) */}
        <AnimatePresence>
          {currentSection !== "hero" && (
            <FloatingDock
              currentSection={currentSection}
              onNavigate={navigateTo}
              onGoHome={goBack}
            />
          )}
        </AnimatePresence>
      </div>
    </PortfolioContext.Provider>
  );
}
