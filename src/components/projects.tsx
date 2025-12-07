"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  TrendingUp,
  Car,
  Link2,
  Fish,
  LayoutDashboard,
  Rocket,
} from "lucide-react";
import { projects } from "@/lib/data";
import { useLanguage } from "./language-provider";

const projectIcons = {
  parking: Car,
  link: Link2,
  fish: Fish,
  dashboard: LayoutDashboard,
};

export function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="min-h-screen py-20 pt-24 bg-secondary/30">
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
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.projects.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.projects.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const ProjectIcon =
                projectIcons[project.icon as keyof typeof projectIcons] || LayoutDashboard;
              const translatedProject = t.projects.items[index];
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Project Header with Icon */}
                  <div className="aspect-video bg-linear-to-br from-primary/20 via-primary/10 to-secondary flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[20px_20px]" />

                    {/* Main Icon */}
                    <div className="relative">
                      <div className="w-24 h-24 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <ProjectIcon className="w-12 h-12 text-primary" />
                      </div>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View source code"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </motion.a>
                      {project.liveUrl !== "#" && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View live site"
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {translatedProject?.title || project.title}
                      {project.liveUrl !== "#" && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {translatedProject?.description || project.description}
                    </p>

                    {/* Highlights/Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(translatedProject?.highlights || project.highlights).map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-600 rounded-md text-xs font-medium"
                        >
                          <TrendingUp className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">{t.projects.moreProjects}</p>
            <motion.a
              href="https://github.com/mochrafi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-card border border-border/60 rounded-lg font-medium shadow-sm hover:shadow-md hover:border-primary/40 transition-all text-sm md:text-base"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              {t.projects.viewGithub}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
