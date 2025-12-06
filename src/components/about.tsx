"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Mail,
  Briefcase,
  Download,
  GraduationCap,
  Code2,
  Zap,
  Users,
  User,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "./language-provider";

export function About() {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights =
    language === "en"
      ? [
          {
            icon: Code2,
            title: "Clean Code Advocate",
            description:
              "Writing maintainable, scalable code following SOLID principles",
          },
          {
            icon: Zap,
            title: "Performance Focused",
            description:
              "Optimizing Core Web Vitals for lightning-fast experiences",
          },
          {
            icon: Users,
            title: "Team Player",
            description:
              "Collaborating effectively and mentoring junior developers",
          },
        ]
      : [
          {
            icon: Code2,
            title: "Advokat Clean Code",
            description:
              "Menulis kode yang mudah dipelihara dan skalabel mengikuti prinsip SOLID",
          },
          {
            icon: Zap,
            title: "Fokus Performa",
            description:
              "Mengoptimalkan Core Web Vitals untuk pengalaman super cepat",
          },
          {
            icon: Users,
            title: "Pemain Tim",
            description:
              "Berkolaborasi secara efektif dan membimbing developer junior",
          },
        ];

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
    <section id="about" className="py-20 bg-secondary/30">
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
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t.about.badge}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.about.title}{" "}
              <span className="text-primary">{t.about.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Photo & Quick Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 via-primary/10 to-secondary rounded-2xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <span className="text-9xl">👨‍💻</span>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="p-4 bg-card border border-border rounded-xl">
                  <MapPin className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {t.contact.info.location}
                  </p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-xl">
                  <Briefcase className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {t.about.yearsExp}
                  </p>
                  <p className="font-medium">3+</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-xl">
                  <Mail className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm truncate">
                    {personalInfo.email}
                  </p>
                </div>
                <div className="p-4 bg-card border border-border rounded-xl">
                  <GraduationCap className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {t.experience.education}
                  </p>
                  <p className="font-medium text-sm">Computer Science</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Bio & Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t.about.description}</p>
                  <p>{t.about.description2}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">{t.experience.education}</h4>
                </div>
                <p className="font-medium">{t.experience.edu.university}</p>
                <p className="text-muted-foreground text-sm">
                  {t.experience.edu.degree} · {t.experience.edu.period}
                </p>
              </div>

              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                {t.about.downloadCV}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
