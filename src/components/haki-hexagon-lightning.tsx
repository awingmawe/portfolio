"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface HakiHexagonLightningProps {
  className?: string;
}

export function HakiHexagonLightning({ className = "" }: HakiHexagonLightningProps) {
  const prefersReducedMotion = useReducedMotion();

  // 6 Vertices of a regular hexagon inscribed in a 200x200 canvas centered at (100, 100), radius 90:
  // Angle k*60 deg (k=0..5):
  // 0: (177.9, 145)
  // 1: (100, 190)
  // 2: (22.1, 145)
  // 3: (22.1, 55)
  // 4: (100, 10)
  // 5: (177.9, 55)
  // Or with top flat / vertex at top: (100, 10), (177.9, 55), (177.9, 145), (100, 190), (22.1, 145), (22.1, 55)

  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
    >
      {/* 1. Deep Haoshoku Haki Aura Smoke (Pulsing Blood-Crimson) */}
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.7 }
            : {
                scale: [1, 1.35, 1.15, 1.45, 1],
                opacity: [0.65, 0.95, 0.75, 1, 0.65],
              }
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-80 sm:w-[460px] h-80 sm:h-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.55)_0%,rgba(185,28,28,0.35)_45%,rgba(17,24,39,0.1)_75%,transparent_85%)] blur-2xl"
      />

      {/* 2. Expanding Hexagonal Haki Shockwaves */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            animate={{
              scale: [0.85, 1.6, 2.2],
              opacity: [0.8, 0.4, 0],
              rotate: [0, 30, 60],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute w-60 sm:w-[360px] h-60 sm:h-[360px] border-2 border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.7)]"
            style={{
              clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
            }}
          />
          <motion.div
            animate={{
              scale: [0.75, 1.45, 2.0],
              opacity: [0.9, 0.35, 0],
              rotate: [0, -30, -60],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.45,
            }}
            className="absolute w-60 sm:w-[360px] h-60 sm:h-[360px] border border-red-400/50 shadow-[0_0_25px_rgba(239,68,68,0.6)]"
            style={{
              clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
            }}
          />
        </>
      )}

      {/* 3. Main Rotating Concentric Runic Hexagons SVG */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-80 sm:w-[480px] h-80 sm:h-[480px] text-red-500 drop-shadow-[0_0_35px_rgba(239,68,68,0.95)]"
        fill="none"
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: [0, 180, 360],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <filter id="hakiGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="hakiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4444" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* Outer Hexagon with Runic Dashes */}
        <polygon
          points="100,10 178,55 178,145 100,190 22,145 22,55"
          stroke="url(#hakiGrad)"
          strokeWidth="2.5"
          strokeDasharray="14 6 8 6"
          filter="url(#hakiGlow)"
        />

        {/* Outer Circular Boundary */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="#ef4444"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.6"
        />

        {/* Middle Hexagon (Rotated 30° / Interlocking Hexagram Star) */}
        <polygon
          points="100,25 165,62.5 165,137.5 100,175 35,137.5 35,62.5"
          stroke="#f87171"
          strokeWidth="1.8"
          opacity="0.85"
        />

        {/* Inner Concentric Hexagon */}
        <polygon
          points="100,45 147.6,72.5 147.6,127.5 100,155 52.4,127.5 52.4,72.5"
          stroke="#ef4444"
          strokeWidth="1.2"
          strokeDasharray="6 4"
          opacity="0.75"
        />

        {/* Center Concentric Ring */}
        <circle
          cx="100"
          cy="100"
          r="42"
          stroke="#fca5a5"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.7"
        />

        {/* 6 Glowing Vertex Nodes of the Hexagon */}
        {[
          { x: 100, y: 10 },
          { x: 178, y: 55 },
          { x: 178, y: 145 },
          { x: 100, y: 190 },
          { x: 22, y: 145 },
          { x: 22, y: 55 },
        ].map((pt, idx) => (
          <g key={idx}>
            <circle cx={pt.x} cy={pt.y} r="4.5" fill="#ef4444" />
            <circle cx={pt.x} cy={pt.y} r="2.5" fill="#ffffff" />
          </g>
        ))}
      </motion.svg>

      {/* 4. Violent Crackling Haoshoku Haki Lightning Arcs (Petir Gerak Menghujam) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Lightning Bolt 1: Top Right Vertex to Center */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute w-[330px] sm:w-[500px] h-[330px] sm:h-[500px] drop-shadow-[0_0_12px_#ff0033]"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [0, 1, 0, 0.9, 0, 1, 0.2, 0],
                  scale: [0.98, 1.04, 0.99, 1.02, 1],
                }
          }
          transition={{
            duration: 0.35,
            repeat: Infinity,
            repeatDelay: 0.1,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 178,55 L 152,70 L 160,82 L 135,95 L 142,104 L 115,115 L 100,100"
            stroke="#ff3366"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
          />
          <path
            d="M 178,55 L 152,70 L 160,82 L 135,95 L 142,104 L 115,115 L 100,100"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Branch Fork */}
          <path d="M 152,70 L 138,62 L 130,75" stroke="#ff0044" strokeWidth="2" fill="none" />
        </motion.svg>

        {/* Lightning Bolt 2: Bottom Left Vertex Arc */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute w-[330px] sm:w-[500px] h-[330px] sm:h-[500px] drop-shadow-[0_0_14px_#ff0022]"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [0, 0, 1, 0.1, 1, 0, 0.8, 0],
                  scale: [1, 1.03, 0.97, 1.01, 1],
                }
          }
          transition={{
            duration: 0.42,
            repeat: Infinity,
            repeatDelay: 0.18,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 22,145 L 48,132 L 40,120 L 68,110 L 60,98 L 88,95 L 100,100"
            stroke="#ff1a1a"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
          />
          <path
            d="M 22,145 L 48,132 L 40,120 L 68,110 L 60,98 L 88,95 L 100,100"
            stroke="#ffffff"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Branch Fork */}
          <path d="M 68,110 L 78,124 L 92,120" stroke="#ff0033" strokeWidth="1.8" fill="none" />
        </motion.svg>

        {/* Lightning Bolt 3: Top to Bottom Dramatic Strike across Perimeter */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] drop-shadow-[0_0_15px_#dc2626]"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [0, 0.9, 0, 1, 0, 0],
                  scale: [0.99, 1.02, 0.98, 1.03, 1],
                }
          }
          transition={{
            duration: 0.28,
            repeat: Infinity,
            repeatDelay: 0.35,
            ease: "linear",
          }}
        >
          <path
            d="M 100,10 L 112,35 L 94,48 L 118,72 L 95,90 L 125,120 L 108,140 L 130,165 L 100,190"
            stroke="#ff0044"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 100,10 L 112,35 L 94,48 L 118,72 L 95,90 L 125,120 L 108,140 L 130,165 L 100,190"
            stroke="#fff5f5"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>

        {/* Lightning Bolt 4: Outward Explosive Haki Sparks (Horizontal Discharge) */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute w-[350px] sm:w-[540px] h-[350px] sm:h-[540px] drop-shadow-[0_0_18px_#ff0033]"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [0, 1, 0.2, 0, 1, 0],
                  rotate: [0, 15, -10, 5, 0],
                }
          }
          transition={{
            duration: 0.38,
            repeat: Infinity,
            repeatDelay: 0.25,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 22,55 L 45,65 L 35,78 L 70,85 L 60,98 L 100,100 L 140,95 L 155,80 L 145,70 L 178,55"
            stroke="#ff2a2a"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 22,55 L 45,65 L 35,78 L 70,85 L 60,98 L 100,100 L 140,95 L 155,80 L 145,70 L 178,55"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>
      </div>
    </div>
  );
}
