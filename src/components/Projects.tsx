"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      
      <div className="flex flex-col mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-foreground mb-4"
        >
          Selected <span className="italic text-accent">Works</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex items-center gap-4 mt-4"
        >
          <div className="w-12 h-[1px] bg-accent" />
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Portfolio</p>
        </motion.div>
      </div>

      <div className="flex flex-col border-t border-border/50">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative block py-12 md:py-16 border-b border-border/50 hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
              
              {/* Title & Index */}
              <div className="flex items-start gap-6 md:w-1/2">
                <span className="font-sans text-accent/50 text-sm md:text-base mt-2 font-light">
                  0{index + 1}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>
              </div>

              {/* Description & Tags */}
              <div className="md:w-1/3 flex flex-col items-start md:items-end gap-4">
                <p className="font-sans text-foreground/60 text-sm md:text-base font-light leading-relaxed md:text-right">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs uppercase tracking-[0.1em] font-sans font-semibold text-foreground/40 group-hover:text-foreground/70 transition-colors"
                    >
                      {tag} {i < project.tags.length - 1 && <span className="mx-1 opacity-30">/</span>}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Hover arrow indicator */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 hidden md:block">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </motion.a>
        ))}
      </div>

    </section>
  );
}
