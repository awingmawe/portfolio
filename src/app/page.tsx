import { PortfolioLayout } from "@/components/portfolio-layout";
import { HeroMinimal } from "@/components/hero-minimal";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { Source } from "@/components/source";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <PortfolioLayout
      hero={<HeroMinimal />}
      sections={{
        about: <About />,
        services: <Services />,
        skills: <Skills />,
        projects: <Projects />,
        experience: <Experience />,
        certifications: <Certifications />,
        source: <Source />,
        contact: <Contact />,
      }}
    />
  );
}
