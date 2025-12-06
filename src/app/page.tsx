import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ScrollProgress } from "@/components/scroll-progress";

// Lazy load below-fold components
const About = dynamic(() => import("@/components/about").then(mod => ({ default: mod.About })));
const Services = dynamic(() => import("@/components/services").then(mod => ({ default: mod.Services })));
const Skills = dynamic(() => import("@/components/skills").then(mod => ({ default: mod.Skills })));
const Projects = dynamic(() => import("@/components/projects").then(mod => ({ default: mod.Projects })));
const Experience = dynamic(() => import("@/components/experience").then(mod => ({ default: mod.Experience })));
const Certifications = dynamic(() => import("@/components/certifications").then(mod => ({ default: mod.Certifications })));
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })));
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })));
const BackToTop = dynamic(() => import("@/components/back-to-top").then(mod => ({ default: mod.BackToTop })));

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
