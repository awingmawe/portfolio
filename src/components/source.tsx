"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "./language-provider";

const openSourceLibraries = [
  {
    category: "Framework",
    items: [
      {
        name: "Next.js",
        version: "16.0.7",
        description: "The React Framework for the Web",
        url: "https://nextjs.org",
        github: "https://github.com/vercel/next.js",
      },
      {
        name: "React",
        version: "19.2.1",
        description: "A JavaScript library for building user interfaces",
        url: "https://react.dev",
        github: "https://github.com/facebook/react",
      },
    ],
  },
  {
    category: "Styling",
    items: [
      {
        name: "Tailwind CSS",
        version: "4.1.17",
        description: "A utility-first CSS framework",
        url: "https://tailwindcss.com",
        github: "https://github.com/tailwindlabs/tailwindcss",
      },
      {
        name: "tailwind-merge",
        version: "3.4.0",
        description: "Merge Tailwind CSS classes without style conflicts",
        url: "https://github.com/dcastil/tailwind-merge",
        github: "https://github.com/dcastil/tailwind-merge",
      },
    ],
  },
  {
    category: "Animation",
    items: [
      {
        name: "Framer Motion",
        version: "12.23.25",
        description: "A production-ready motion library for React",
        url: "https://www.framer.com/motion",
        github: "https://github.com/framer/motion",
      },
      {
        name: "react-type-animation",
        version: "3.2.0",
        description: "A React typewriter animation component",
        url: "https://react-type-animation.netlify.app",
        github: "https://github.com/maxeth/react-type-animation",
      },
    ],
  },
  {
    category: "Forms & Validation",
    items: [
      {
        name: "React Hook Form",
        version: "7.68.0",
        description: "Performant, flexible and extensible forms",
        url: "https://react-hook-form.com",
        github: "https://github.com/react-hook-form/react-hook-form",
      },
      {
        name: "Zod",
        version: "4.1.13",
        description: "TypeScript-first schema validation",
        url: "https://zod.dev",
        github: "https://github.com/colinhacks/zod",
      },
    ],
  },
  {
    category: "UI Components",
    items: [
      {
        name: "Lucide React",
        version: "0.556.0",
        description: "Beautiful & consistent icon toolkit",
        url: "https://lucide.dev",
        github: "https://github.com/lucide-icons/lucide",
      },
      {
        name: "react-intersection-observer",
        version: "10.0.0",
        description: "React implementation of the Intersection Observer API",
        url: "https://react-intersection-observer.vercel.app",
        github: "https://github.com/thebuilder/react-intersection-observer",
      },
    ],
  },
  {
    category: "Dev Tools",
    items: [
      {
        name: "TypeScript",
        version: "5.9.3",
        description: "JavaScript with syntax for types",
        url: "https://www.typescriptlang.org",
        github: "https://github.com/microsoft/TypeScript",
      },
      {
        name: "ESLint",
        version: "9.39.1",
        description: "Find and fix problems in your JavaScript code",
        url: "https://eslint.org",
        github: "https://github.com/eslint/eslint",
      },
      {
        name: "Prettier",
        version: "3.7.4",
        description: "Opinionated code formatter",
        url: "https://prettier.io",
        github: "https://github.com/prettier/prettier",
      },
    ],
  },
  {
    category: "Email",
    items: [
      {
        name: "Resend",
        version: "6.5.2",
        description: "Email API for developers",
        url: "https://resend.com",
        github: "https://github.com/resend/resend-node",
      },
    ],
  },
];

export function Source() {
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

  return (
    <section className="min-h-screen py-20 pt-24">
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
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.source.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.source.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.source.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {openSourceLibraries.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-card border border-border/60 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all overflow-hidden"
              >
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {category.items.map((lib) => (
                    <div key={lib.name} className="group">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0 overflow-hidden">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-sm md:text-base">{lib.name}</span>
                            <span className="text-[10px] md:text-xs text-muted-foreground bg-secondary px-1.5 md:px-2 py-0.5 rounded-full whitespace-nowrap">
                              v{lib.version}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                            {lib.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0">
                          <motion.a
                            href={lib.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 md:p-1.5 text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Visit ${lib.name} website`}
                          >
                            <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </motion.a>
                          <motion.a
                            href={lib.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 md:p-1.5 text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`View ${lib.name} on GitHub`}
                          >
                            <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div variants={itemVariants} className="text-center mt-8 md:mt-12">
            <p className="text-muted-foreground text-xs md:text-sm">{t.source.footer}</p>
            <motion.a
              href="https://github.com/mochrafi/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 md:px-6 py-2.5 md:py-3 bg-card border border-border/60 rounded-lg font-medium shadow-sm hover:shadow-md hover:border-primary/40 transition-all text-sm md:text-base"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              {t.source.viewRepo}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
