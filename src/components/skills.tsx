"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Server, Code2, Wrench, Sparkles } from "lucide-react";
import { TechIcons } from "./tech-icons";
import { skills } from "@/lib/data";
import { useLanguage } from "./language-provider";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  ...TechIcons,
  api: Server,
};

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  tools: Wrench,
};

const categoryColors = {
  frontend: "from-blue-500/20 to-cyan-500/20",
  backend: "from-green-500/20 to-emerald-500/20",
  tools: "from-purple-500/20 to-pink-500/20",
};

export function Skills() {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillCategories = [
    { key: "frontend", title: t.skills.frontend, skills: skills.frontend },
    { key: "backend", title: t.skills.backend, skills: skills.backend },
    { key: "tools", title: t.skills.tools, skills: skills.tools },
  ] as const;

  return (
    <section id="skills" className="min-h-screen py-20 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.skills.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.skills.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = categoryIcons[category.key];
              return (
                <motion.div
                  key={category.key}
                  variants={itemVariants}
                  className={`bg-linear-to-br ${categoryColors[category.key]} border border-border rounded-2xl p-6 hover:shadow-lg transition-all`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-background rounded-lg">
                      <CategoryIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = iconMap[skill.icon];
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.3,
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-2 p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 cursor-default group"
                        >
                          {IconComponent && (
                            <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          )}
                          <span className="text-sm font-medium truncate">{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
