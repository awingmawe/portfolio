"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Wrench,
  Sparkles,
  Rocket,
  Briefcase,
  Award,
  Code2,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "./language-provider";

export type SectionKey =
  | "hero"
  | "about"
  | "services"
  | "skills"
  | "projects"
  | "experience"
  | "certifications"
  | "source"
  | "contact";

interface FloatingDockProps {
  currentSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
  onGoHome: () => void;
}

const navItems = [
  { key: "about", icon: User },
  { key: "services", icon: Wrench },
  { key: "skills", icon: Sparkles },
  { key: "projects", icon: Rocket },
  { key: "experience", icon: Briefcase },
  { key: "certifications", icon: Award },
  { key: "source", icon: Code2 },
  { key: "contact", icon: MessageSquare },
] as const;

export function FloatingDock({ currentSection, onNavigate, onGoHome }: FloatingDockProps) {
  const { t, language } = useLanguage();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  if (currentSection === "hero") return null;

  // Active or hovered label determination for the dynamic label banner
  const activeItem = navItems.find((item) => item.key === currentSection);
  const hoveredItem =
    hoveredKey === "home"
      ? { key: "home", icon: Home }
      : navItems.find((item) => item.key === hoveredKey);

  const displayedItem = hoveredItem || activeItem || { key: "about", icon: User };
  const DisplayedIcon = displayedItem.icon;
  const displayedLabel =
    displayedItem.key === "home"
      ? language === "id"
        ? "Beranda (Esc)"
        : "Overview (Esc)"
      : t.nav[displayedItem.key as keyof typeof t.nav] || displayedItem.key;

  const isShowingHover = hoveredKey !== null;

  return (
    <motion.aside
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[96vw] flex flex-col items-center select-none"
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Quick section navigation dock"
    >
      {/* Dynamic Section Label Pill (Clearly indicates current / hovered menu on Mobile, Tablet & Desktop) */}
      <motion.div
        key={displayedItem.key}
        initial={{ opacity: 0, y: 4, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -4, scale: 0.96 }}
        transition={{ duration: 0.15 }}
        className="mb-1.5 px-3 py-0.5 md:py-1 rounded-full bg-card/90 dark:bg-card/85 backdrop-blur-xl border border-border/80 shadow-md text-[11px] md:text-xs font-semibold text-foreground flex items-center gap-1.5 pointer-events-none"
      >
        <DisplayedIcon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
        <span className="tracking-tight">{displayedLabel}</span>
        {isShowingHover && hoveredKey !== currentSection && (
          <span className="text-[10px] text-muted-foreground font-normal hidden sm:inline">
            • {language === "id" ? "Buka" : "Jump"}
          </span>
        )}
      </motion.div>

      {/* Dock Container: overflow-visible avoids any scrollbars during hover / scaling */}
      <div className="relative flex items-center gap-0.5 sm:gap-1 md:gap-1.5 p-1 sm:p-1.5 md:p-2 bg-card/85 dark:bg-card/75 backdrop-blur-xl border border-border/80 rounded-full shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-visible no-scrollbar">
        {/* Home / Overview Button */}
        <div className="relative group">
          <motion.button
            type="button"
            onClick={onGoHome}
            onMouseEnter={() => setHoveredKey("home")}
            onMouseLeave={() => setHoveredKey(null)}
            onTouchStart={() => setHoveredKey("home")}
            onTouchEnd={() => setTimeout(() => setHoveredKey(null), 1000)}
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Overview / Home (Esc)"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
          </motion.button>

          {/* Desktop/Tablet Hover Tooltip */}
          <AnimatePresence>
            {hoveredKey === "home" && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="hidden md:block absolute -top-8 left-0 sm:left-1/2 sm:-translate-x-1/2 px-2.5 py-1 text-[11px] font-medium rounded-lg bg-foreground text-background shadow-lg whitespace-nowrap pointer-events-none z-50"
              >
                {language === "id" ? "Beranda (Esc)" : "Overview (Esc)"}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Vertical divider */}
        <div className="w-px h-4 sm:h-5 bg-border/80 mx-0.5" />

        {/* Section Icons */}
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentSection === item.key;
          const label = t.nav[item.key as keyof typeof t.nav] || item.key;
          const isLastItem = index === navItems.length - 1;

          return (
            <div key={item.key} className="relative group">
              <motion.button
                type="button"
                onClick={() => onNavigate(item.key as SectionKey)}
                onMouseEnter={() => setHoveredKey(item.key)}
                onMouseLeave={() => setHoveredKey(null)}
                onTouchStart={() => setHoveredKey(item.key)}
                onTouchEnd={() => setTimeout(() => setHoveredKey(null), 1000)}
                className={`relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                whileHover={{ scale: isActive ? 1.05 : 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
                aria-label={`Jump to ${label}`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.span
                    layoutId="active-dock-indicator"
                    className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>

              {/* Desktop/Tablet Hover Tooltip - Anchored right for the last item (Contact) to prevent horizontal overflow */}
              <AnimatePresence>
                {hoveredKey === item.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className={`hidden md:block absolute -top-8 px-2.5 py-1 text-[11px] font-medium rounded-lg bg-foreground text-background shadow-lg whitespace-nowrap pointer-events-none z-50 ${
                      isLastItem ? "right-0 translate-x-0" : "left-1/2 -translate-x-1/2"
                    }`}
                  >
                    {label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.aside>
  );
}
