"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Server, Star } from "lucide-react";
import { useLanguage } from "./language-provider";

const icons = [Award, Server];

export function Certifications() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen py-20 pt-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.certifications.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.certifications.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.certifications.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.certifications.items.map((cert, index) => {
              const IconComponent = icons[index] || Award;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{cert.score}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {cert.issuer} · {cert.year}
                  </p>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
