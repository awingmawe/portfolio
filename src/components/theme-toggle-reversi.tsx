"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

interface ThemeToggleReversiProps {
  className?: string;
}

export function ThemeToggleReversi({ className = "" }: ThemeToggleReversiProps) {
  const { theme, toggleTheme } = useTheme();
  const [isRippling, setIsRippling] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const isDark = theme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Trigger runic sigil pulse on the button
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 650);

    // Feature detection for View Transitions API with circular shockwave
    if (
      !prefersReducedMotion &&
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      typeof (
        document as unknown as { startViewTransition: (cb: () => void) => { ready: Promise<void> } }
      ).startViewTransition === "function"
    ) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const doc = document as unknown as {
        startViewTransition: (callback: () => void) => { ready: Promise<void> };
      };

      const transition = doc.startViewTransition(() => {
        toggleTheme();
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
          },
          {
            duration: 550,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      toggleTheme();
    }
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Runic Sigil Shockwave (Domi Reversi summoning circle pulse) */}
      {isRippling && !prefersReducedMotion && (
        <motion.div
          key="reversi-sigil"
          initial={{ scale: 0.7, opacity: 0.9, rotate: 0 }}
          animate={{ scale: 2.2, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-20 h-20 text-cyan-400 dark:text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            fill="none"
          >
            {/* Outer Runic Circle */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 3 8 3"
            />
            {/* Inner Reversi Pentagram/Triangle Accents */}
            <circle
              cx="50"
              cy="50"
              r="34"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            <path
              d="M50 8 L54 42 L88 50 L54 58 L50 92 L46 58 L12 50 L46 42 Z"
              stroke="currentColor"
              strokeWidth="0.75"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      )}

      {/* Main 3D Reversi Button */}
      <motion.button
        type="button"
        onClick={handleToggle}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.94 }}
        className={`group relative flex items-center justify-center w-10 h-10 bg-card/85 backdrop-blur-md border border-border rounded-xl text-sm font-medium shadow-xs hover:shadow-md hover:border-primary/50 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary ${className}`}
        style={{ perspective: 1000 }}
        aria-label={
          isDark ? "Switch to light theme (Domi Reversi)" : "Switch to dark theme (Domi Reversi)"
        }
        title="Domi Reversi · 180° Flip Theme"
      >
        {/* 3D Reversi Coin / Token */}
        <motion.div
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : {
                  rotateY: isDark ? 180 : 0,
                  rotateZ: isDark ? 8 : 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 20,
            mass: 0.8,
          }}
          className="relative w-6 h-6 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Face (0°): Pure Sun / Light Side */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Sun className="w-4 h-4 text-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)] transition-transform duration-300 group-hover:rotate-45" />
          </div>

          {/* Back Face (180°): Obsidian / Demonic Soul Moon (Domi Reversi) */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Moon className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.9)] transition-transform duration-300 group-hover:-rotate-12" />
            {/* Subtle cyan flame glow dot reminiscent of the soul flame */}
            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-cyan-300 rounded-full blur-[1px] animate-pulse" />
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}
