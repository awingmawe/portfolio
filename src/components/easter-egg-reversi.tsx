"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { RotateCcw, Eye } from "lucide-react";
import { ImuEyeAnimation } from "./imu-eye-animation";
import { HakiHexagonLightning } from "./haki-hexagon-lightning";

interface EasterEggReversiProps {
  children: React.ReactNode;
}

export function EasterEggReversiProvider({ children }: EasterEggReversiProps) {
  const [phase, setPhase] = useState<"idle" | "incantation" | "inverted" | "restoring">("idle");
  const prefersReducedMotion = useReducedMotion();
  const keyBufferRef = useRef<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio ref on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/easter-egg/reversi-sfx.mp3");
      audioRef.current.volume = 0.6;
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const activateReversi = useCallback(() => {
    if (phase !== "idle") return;

    // Play SFX
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
          // Autoplay policy might block un-interacted audio, silent catch
        });
      }
    } catch {
      // Audio fallback safe
    }

    setPhase("incantation");

    // After incantation phase (full Domi Reversi audio is 2.15s), invert reality!
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setPhase("inverted");
    }, 2100);
  }, [phase]);

  const restoreReality = useCallback(() => {
    if (phase !== "inverted") return;
    setPhase("restoring");
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setPhase("idle");
    }, 900);
  }, [phase]);

  // Global Keyboard Listener for 'reversi' or 'domi' & 'Escape'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If inverted, Escape restores
      if (e.key === "Escape" && phase === "inverted") {
        e.preventDefault();
        restoreReality();
        return;
      }

      // Ignore input inside textfields/textareas
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }

      if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        keyBufferRef.current = (keyBufferRef.current + e.key.toLowerCase()).slice(-10);

        if (keyBufferRef.current.endsWith("reversi") || keyBufferRef.current.endsWith("domi")) {
          keyBufferRef.current = "";
          activateReversi();
        }
      }
    };

    const handleCustomTrigger = () => {
      if (phase === "idle") {
        activateReversi();
      } else if (phase === "inverted") {
        restoreReality();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("trigger-domi-reversi", handleCustomTrigger);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("trigger-domi-reversi", handleCustomTrigger);
    };
  }, [phase, activateReversi, restoreReality]);

  const isInverted = phase === "inverted";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Inverted Dimension Atmosphere (Blood-Red / Dark Void Haze) */}
      <AnimatePresence>
        {isInverted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.18)_0%,rgba(15,23,42,0.92)_100%)] mix-blend-color-burn"
          />
        )}
      </AnimatePresence>

      {/* Main 180° Inversion Container */}
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: isInverted ? 180 : 0,
                scale: isInverted ? 0.94 : 1,
              }
        }
        transition={{
          type: "spring",
          stiffness: 110,
          damping: 15,
          mass: 1.1,
        }}
        className={`w-full min-h-screen origin-center transition-shadow duration-700 ${
          isInverted ? "shadow-[0_0_80px_rgba(239,68,68,0.3)] filter contrast-105" : ""
        }`}
      >
        {children}
      </motion.div>

      {/* Incantation Overlay (Eye Flash + Runic Summoning Sigil) */}
      <AnimatePresence>
        {phase === "incantation" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md pointer-events-none"
          >
            {/* Screen Shake & Haki Rumble effect wrapper */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      x: [-4, 4, -8, 8, -5, 5, -12, 12, -4, 4, 0],
                      y: [3, -3, 6, -6, 4, -4, 10, -10, 2, -2, 0],
                    }
              }
              transition={{ duration: 2.1, ease: "easeInOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Haoshoku Haki Hexagon with Crackling Lightning Motion */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1.15, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.9, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <HakiHexagonLightning />
              </motion.div>

              {/* Pure Clean & Frameless Merging Eyes Animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 1 }}
                exit={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex items-center justify-center pointer-events-none"
              >
                <ImuEyeAnimation />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Inverted Dimension HUD Capsule (Escape Hatch) */}
      <AnimatePresence>
        {isInverted && (
          <motion.div
            role="region"
            aria-label="Inverted Dimension Controls"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="fixed bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3.5 px-3.5 sm:px-5 py-2 sm:py-3 rounded-2xl sm:rounded-full bg-black/95 border-2 border-red-600/70 shadow-[0_0_40px_rgba(220,38,38,0.75),inset_0_0_15px_rgba(185,28,28,0.3)] backdrop-blur-2xl text-white w-[94vw] sm:w-auto max-w-[420px] sm:max-w-none"
          >
            {/* Outer Haoshoku Haki Glow Aura */}
            <div className="absolute -inset-1 rounded-2xl sm:rounded-full bg-red-600/30 blur-md -z-10 animate-pulse pointer-events-none" />

            {/* Left Section: Glowing Demonic Eye + Text */}
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-950/80 border border-red-500/80 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(239,68,68,0.85)]">
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
                <div className="absolute inset-0 rounded-full border border-red-400/40 animate-ping pointer-events-none" />
              </div>

              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-[11px] sm:text-xs font-black tracking-wider sm:tracking-widest text-red-500 uppercase font-mono drop-shadow-[0_0_8px_rgba(239,68,68,0.9)] truncate">
                    ドミ・リバーシ
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-red-400/80 font-mono font-bold tracking-wider shrink-0">
                    [ 反転世界 ]
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-red-200/90 font-sans tracking-wide truncate">
                  <span className="font-semibold text-red-400">重力反転 180°</span>
                  <span className="hidden sm:inline"> · 魂はイムの支配下にあり</span>
                </span>
              </div>
            </div>

            {/* Right Section: Liberation Escape Button */}
            <button
              type="button"
              onClick={restoreReality}
              aria-label="Restore Reality / Exit Inverted Dimension (Escape)"
              className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-linear-to-r from-red-800 via-rose-700 to-amber-600 hover:from-red-700 hover:via-rose-600 hover:to-amber-500 text-white text-[11px] sm:text-xs font-bold tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-red-400/60 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-red-400 active:scale-95 group shrink-0"
            >
              <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:-rotate-90 transition-transform duration-300 text-amber-200 shrink-0" />
              <span className="font-mono">現実解放</span>
              <span className="hidden sm:inline font-mono text-[10px] opacity-80">(ESC)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Restoring Liberation Flash */}
      <AnimatePresence>
        {phase === "restoring" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-linear-to-b from-amber-200/40 via-white/70 to-amber-100/40 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
