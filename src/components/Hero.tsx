import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Use your illustration avatar here
import profilePhoto from "@/assets/cartoon-portfolio.png";
import resumePdf from "@/assets/Hariprakash_Karthikeyan_Resume.pdf";



type Badge = {
  label: string;
  position: string;
  delayMs: number;
};

const floatingBadges: Badge[] = [
  { label: "Bayesian Modeling", position: "top-[10%] -left-[12%]", delayMs: 0 },
  { label: "Marketing Analytics", position: "top-[2%] right-[0%]", delayMs: 150 },
  { label: "Healthcare EHR NLP", position: "top-[48%] -right-[16%]", delayMs: 300 },
  { label: "Python", position: "bottom-[18%] -left-[14%]", delayMs: 450 },
  { label: "SQL", position: "bottom-[6%] right-[6%]", delayMs: 600 },
];

export function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [inView, setInView] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  const [showBadges, setShowBadges] = useState(false);
  const [fadeBadges, setFadeBadges] = useState(false);

  const timersRef = useRef<number[]>([]);
  const prevInViewRef = useRef(false);

  // 1) Real IntersectionObserver
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        // These settings make "leave view" happen reliably
        threshold: 0.6,
        root: null,
        rootMargin: "0px",
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 2) Detect re-entry (false -> true) and restart cycle
  useEffect(() => {
    const wasInView = prevInViewRef.current;

    if (!wasInView && inView) {
      setCycleKey((k) => k + 1);
    }

    prevInViewRef.current = inView;
  }, [inView]);

  // 3) Badge cycle (show ~5s, fade near end)
  useEffect(() => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];

    if (cycleKey === 0) return;

    setShowBadges(true);
    setFadeBadges(false);

    const t1 = window.setTimeout(() => setFadeBadges(true), 4500);
    const t2 = window.setTimeout(() => {
      setShowBadges(false);
      setFadeBadges(false);
    }, 5200);

    timersRef.current.push(t1, t2);

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
    };
  }, [cycleKey]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/7 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Availability */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">
              Open to Full-Time Roles
            </span>
          </div>

          {/* Avatar + badges wrapper */}
          <div className="relative mb-10 animate-scale-in" ref={targetRef}>
            {/* Glow behind avatar */}
            <div className="absolute inset-0 bg-primary/25 rounded-full blur-3xl scale-110" />

            {/* Circular avatar */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-primary/30 bg-card/40 backdrop-blur-sm shadow-lg">
              <img
                src={profilePhoto}
                alt="Hariprakash Karthikeyan"
                className="w-full h-full object-cover object-center"
              />
              {/* Blend overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            {floatingBadges.map((badge, index) => (
              <div
                key={index}
                className={`absolute ${badge.position} hidden md:block transition-opacity duration-700 ${
                  showBadges ? (fadeBadges ? "opacity-0" : "opacity-100") : "opacity-0"
                }`}
                style={{ transitionDelay: `${badge.delayMs}ms` }}
              >
                <div className="px-4 py-2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium text-foreground shadow-lg whitespace-nowrap">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in-up">
            Hariprakash Karthikeyan
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl text-muted-foreground mb-5 animate-fade-in-up">
            Data Scientist <span className="text-primary/80">|</span> Data{" "}
            <span className="text-primary/80">|</span> ML{" "}
            <span className="text-primary/80">|</span> AI Engineer
          </p>

          {/* Intro + summary */}
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-base md:text-lg text-muted-foreground/90">
              I build reliable, decision-grade analytics from complex data.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground/80 leading-relaxed">
              My work spans hierarchical Bayesian media mix modeling for marketing ROI,
              rule-based NLP for cardiac phenotyping from EHR narratives, and analytics
              dashboards that turn messy, multi-source data into usable insights.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mt-10 animate-fade-in-up">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow"
            >
              <a href="#projects">View Projects</a>
            </Button>

            <Button
  asChild
  size="lg"
  variant="outline"
  className="border-primary/50 text-primary hover:bg-primary/10 gap-2"
>
  <a
    href={resumePdf}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FileText size={18} />
    Resume
  </a>
</Button>

          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-8 justify-center animate-fade-in-up">
            <a
              href="https://github.com/HariPrakash79"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hariprakashkarthikeyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hariprakashkarthikeyanslm@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
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
