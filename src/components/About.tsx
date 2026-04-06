"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/lib/data";

export default function About() {
  return (
    <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Left Column: Heading */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1]"
          >
            A blend of <br/>
            <span className="italic text-accent">design precision</span> <br/>
            & robust logic.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">About Me</p>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-7 flex flex-col gap-12 pt-2 md:pl-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed font-light"
          >
            <p className="mb-6 drop-cap">
              {personalInfo.bio}
            </p>
            <p>
              I thrive at the intersection of aesthetics and engineering. My approach is rooted in
              delivering pixel-perfect, accessible, and high-performance interfaces that feel as good as they look.
            </p>
          </motion.div>

          {/* Skills Mini-grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-6 pt-12 border-t border-border/50"
          >
            <div>
              <h3 className="font-serif text-xl mb-4 text-foreground">Frontend</h3>
              <ul className="flex flex-col gap-3">
                {skills.frontend.slice(0, 6).map((skill, i) => (
                  <li key={i} className="font-sans text-sm text-foreground/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-xl mb-4 text-foreground">Backend & Core</h3>
              <ul className="flex flex-col gap-3">
                {skills.backend.map((skill, i) => (
                  <li key={i} className="font-sans text-sm text-foreground/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4 text-foreground">Tools</h3>
              <ul className="flex flex-col gap-3">
                {skills.tools.map((tool, i) => (
                  <li key={i} className="font-sans text-sm text-foreground/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
