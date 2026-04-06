"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <motion.div
        style={{ y, opacity }}
        className="text-center z-10 px-6 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="mb-8 overflow-hidden"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-xs md:text-sm font-sans font-semibold">
            {personalInfo.location}
          </p>
        </motion.div>

        <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-serif tracking-tighter text-foreground mb-6">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="block"
          >
            Frontend
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="block italic text-accent"
          >
            Engineering
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-sans text-base md:text-xl text-foreground/60 max-w-2xl mt-8 leading-relaxed font-light"
        >
          Crafting performant, visually striking, and deeply engaging web experiences. 
          Specializing in React, Next.js, and modern aesthetics.
        </motion.p>
      </motion.div>

      {/* Decorative large circle/glow */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" 
      />
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-foreground/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
}
