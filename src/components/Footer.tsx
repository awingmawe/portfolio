"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative py-24 md:py-32 px-6 md:px-12 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-6">Got an idea?</p>
          <a href={`mailto:${personalInfo.email}`} className="group relative inline-block">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none hover:text-accent transition-colors duration-500">
              Let&apos;s build it.
            </h2>
            <div className="h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out mx-auto mt-2" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-background/20 pt-12">
          
          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl mb-2">Socials</h3>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="font-sans text-sm tracking-widest uppercase hover:text-accent transition-colors">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="font-sans text-sm tracking-widest uppercase hover:text-accent transition-colors">GitHub</a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="font-sans text-sm tracking-widest uppercase hover:text-accent transition-colors">Twitter</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 md:items-center">
            <h3 className="font-serif text-xl mb-2">Contact</h3>
            <p className="font-sans text-sm text-background/70">{personalInfo.email}</p>
            <p className="font-sans text-sm text-background/70">{personalInfo.phone}</p>
            <p className="font-sans text-sm text-background/70">{personalInfo.location}</p>
          </div>

          {/* Credits */}
          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="font-serif text-xl mb-2 text-right">Details</h3>
            <p className="font-sans text-sm text-background/70 text-right">
              Designed & Developed by <br/> {personalInfo.name}
            </p>
            <p className="font-sans text-sm text-background/50 text-right mt-auto">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

        </div>
      </div>

      {/* Decorative large circle/glow */}
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none" 
      />
    </footer>
  );
}
