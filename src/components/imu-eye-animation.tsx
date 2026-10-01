"use client";

import React, { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ImuEyeAnimationProps {
  className?: string;
}

export function ImuEyeAnimation({ className = "" }: ImuEyeAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
    >
      {/* Outer Sinister Aura Glow */}
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.8 }
            : {
                opacity: [0.6, 0.95, 0.7, 1, 0.6],
                scale: [0.95, 1.06, 0.97, 1.08, 0.95],
              }
        }
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.7)_0%,rgba(185,28,28,0.35)_45%,transparent_75%)] blur-3xl -z-10"
      />

      {/* Clean & Frameless Merging Eyes Video (Smooth Vignette Edge, No Borders) */}
      <div
        className="relative w-[88vw] max-w-[460px] aspect-video overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 68%, transparent 98%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 68%, transparent 98%)",
        }}
      >
        <video
          ref={videoRef}
          src="/easter-egg/imu-eyes-motion.mp4"
          poster="/easter-egg/imu-eyes-motion.webp"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle Crimson Ambient Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(15,2,2,0.5)_100%)] pointer-events-none" />
      </div>
    </div>
  );
}
