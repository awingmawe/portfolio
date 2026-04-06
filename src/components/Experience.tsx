"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Section Title */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Career <br />
              <span className="italic text-accent">Trajectory</span>
            </h2>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-[1px] bg-accent" />
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Experience</p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="md:w-2/3 relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-[7px] w-[1px] bg-border/50 hidden md:block" />

          <div className="flex flex-col gap-20 relative">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-0 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[3px] top-2 w-[9px] h-[9px] rounded-full bg-accent hidden md:block ring-4 ring-background" />

                <p className="text-accent font-sans text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  {exp.period}
                </p>
                <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-1">{exp.role}</h3>
                <h4 className="text-lg font-serif italic text-foreground/60 mb-6">{exp.company} — {exp.type}</h4>
                
                <p className="font-sans text-foreground/70 text-base font-light leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="font-sans text-sm text-foreground/60 flex items-start gap-3 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 border border-border/50 rounded-full text-xs font-sans text-foreground/50 tracking-wider bg-background/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
