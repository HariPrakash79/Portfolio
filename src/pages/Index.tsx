import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { WorkWithMe } from "@/components/WorkWithMe";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative">
      <CursorGlow />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Expertise />
      <Experience />
      <WorkWithMe />
      <Contact />
    </div>
  );
};

export default Index;
