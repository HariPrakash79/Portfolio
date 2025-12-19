import { Github, Linkedin, FileText, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const floatingBadges = [
  { label: "Bayesian Modeling", position: "top-[15%] -left-[5%]", delay: "0s" },
  { label: "Marketing Analytics", position: "top-[5%] right-[10%]", delay: "1s" },
  { label: "Python", position: "bottom-[25%] -left-[10%]", delay: "2s" },
  { label: "SQL", position: "bottom-[10%] right-[0%]", delay: "0.5s" },
  { label: "Healthcare Data", position: "top-[40%] -right-[15%]", delay: "1.5s" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                Open to Full-Time Roles
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Hi, Meet{" "}
              <span className="text-primary text-glow">Hariprakash</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Data Scientist & Analytics Engineer
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Specializing in Bayesian inference, marketing analytics, and healthcare data science. 
              I build models that drive decisions and create impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow gap-2"
              >
                <a href="#projects">
                  <Sparkles size={18} />
                  View Projects
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 gap-2"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText size={18} />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Photo with floating badges */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Photo Container */}
            <div className="relative animate-scale-in">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-110" />
              
              {/* Photo */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 box-glow">
                <img
                  src={profilePhoto}
                  alt="Hariprakash Karthikeyan - Data Scientist"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              {floatingBadges.map((badge, index) => (
                <div
                  key={index}
                  className={`absolute ${badge.position} hidden md:block`}
                  style={{ animationDelay: badge.delay }}
                >
                  <div className="animate-float px-4 py-2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium text-foreground shadow-lg whitespace-nowrap">
                    {badge.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
