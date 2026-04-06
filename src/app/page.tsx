"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent selection:text-background">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Sticky nav / Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 p-6 mix-blend-difference flex justify-between items-center pointer-events-none">
        <p className="font-serif text-xl text-foreground font-bold tracking-tighter">RS_</p>
        <a 
          href="/resume.pdf" 
          download
          className="pointer-events-auto text-xs font-sans uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors"
        >
          Download CV
        </a>
      </header>

      {/* Main Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
      
    </main>
  );
}
