"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Palette, Zap, Users, Wrench } from "lucide-react";
import { useLanguage } from "./language-provider";

const icons = [Globe, Palette, Zap, Users];

export function Services() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="min-h-screen py-20 pt-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.services.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => {
              const IconComponent = icons[index];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={
                    inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-colors duration-300 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                    </motion.div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
