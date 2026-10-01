"use client";

import {
  useState,
  useCallback,
  useEffect,
  useRef,
  createContext,
  useContext,
  ReactNode,
} from "react";
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

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within PortfolioLayout");
  return context;
}

export function PortfolioLayout({ hero, sections }: PortfolioLayoutProps) {
  const [currentSection, setCurrentSection] = useState<SectionKey>("hero");
  const [highlightTitle, setHighlightTitle] = useState<string | null>(null);
  const titleTimerRef = useRef<NodeJS.Timeout | null>(null);
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
      if (section === currentSection) return;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      const label = getSectionLabel(section);
      if (label) {
        setHighlightTitle(label);
        if (titleTimerRef.current) clearTimeout(titleTimerRef.current);
        titleTimerRef.current = setTimeout(() => {
          setHighlightTitle(null);
        }, 420);
      } else {
        setHighlightTitle(null);
      }

      setCurrentSection(section);
    },
    [currentSection, getSectionLabel]
  );

  const goBack = useCallback(() => {
    if (currentSection === "hero") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (titleTimerRef.current) clearTimeout(titleTimerRef.current);
    setHighlightTitle(null);
    setCurrentSection("hero");
  }, [currentSection]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (titleTimerRef.current) clearTimeout(titleTimerRef.current);
    };
  }, []);

  // Ensure scroll is at top whenever section changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [currentSection]);

  // Keyboard navigation: Escape key returns to hero
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && currentSection !== "hero") {
        goBack();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, goBack]);

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

        {/* Cinematic Section Highlight Title (GPU Accelerated, Zero-Lag) */}
        <AnimatePresence>
          {highlightTitle && (
            <motion.div
              key={highlightTitle}
              className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none select-none bg-background/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              style={{ willChange: "opacity", transform: "translateZ(0)" }}
            >
              <motion.div
                className="relative flex flex-col items-center gap-2.5 sm:gap-3 px-6 py-4"
                initial={{ opacity: 0, scale: 0.92, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.04, y: -12 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              >
                {/* Decorative Top Accent Line */}
                <motion.div
                  className="w-8 sm:w-12 h-0.5 sm:h-1 bg-primary/70 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  style={{ willChange: "transform" }}
                />

                {/* Section Name (Refined, proportional typography) */}
                <span className="text-2xl sm:text-3xl md:text-5xl font-black tracking-wider text-primary drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] uppercase">
                  {highlightTitle}
                </span>

                {/* Decorative Bottom Accent Line */}
                <motion.div
                  className="w-8 sm:w-12 h-0.5 sm:h-1 bg-primary/70 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  style={{ willChange: "transform" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Content with Fast & Fluid 60fps GPU Cross-Fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, delay: highlightTitle ? 0.12 : 0, ease: "easeOut" }}
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            className={currentSection === "hero" ? "min-h-screen" : "min-h-screen pb-20"}
          >
            {currentSection === "hero"
              ? hero
              : sections[currentSection as Exclude<SectionKey, "hero">]}
          </motion.div>
        </AnimatePresence>

        {/* Floating Glass Navigation Dock */}
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
