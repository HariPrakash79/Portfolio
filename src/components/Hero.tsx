import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import profilePhoto from "@/assets/cartoon-portfolio.png";
import resumePdf from "@/assets/Hariprakash_Karthikeyan_ml_resume.pdf";

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

  // Intersection observer
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Detect re-entry
  useEffect(() => {
    if (!prevInViewRef.current && inView) {
      setCycleKey((k) => k + 1);
    }
    prevInViewRef.current = inView;
  }, [inView]);

  // Badge timing cycle
  useEffect(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    if (!cycleKey) return;

    setShowBadges(true);
    setFadeBadges(false);

    const t1 = window.setTimeout(() => setFadeBadges(true), 4500);
    const t2 = window.setTimeout(() => {
      setShowBadges(false);
      setFadeBadges(false);
    }, 5200);

    timersRef.current.push(t1, t2);

    return () => timersRef.current.forEach(clearTimeout);
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

          {/* Avatar */}
          <div className="relative mb-10 animate-scale-in" ref={targetRef}>
            <div className="absolute inset-0 bg-primary/25 rounded-full blur-3xl scale-110" />

            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-primary/30 bg-card/40 backdrop-blur-sm shadow-lg">

            
{/* Circular avatar */}
<div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-primary/30 bg-card/40 backdrop-blur-sm shadow-lg">

{/* Orbiting symbols around HEAD (not the whole circle) */}
<div className="orbit-anchor pointer-events-none">
  <div className="orbit-center">
    <div className="orbit-rotator">
      {["ML", "AI", "Σ", "β", "μ", "SQL", "Py", "∫"].map((item, i, arr) => {
        const deg = (360 / arr.length) * i;
        return (
          <span
            key={i}
            className="orbit-symbol"
            style={{
              ["--orbit-angle" as never]: `${deg}deg`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  </div>
</div>



  {/* Avatar image */}
  <img
    src={profilePhoto}
    alt="Hariprakash Karthikeyan"
    className="w-full h-full object-cover object-center"
  />

  {/* Blend overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
</div>







              <img
                src={profilePhoto}
                alt="Hariprakash Karthikeyan"
                className="w-full h-full object-cover object-center"
              />

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
                <div className="px-4 py-2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium shadow-lg">
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

          {/* Summary */}
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-base md:text-lg text-muted-foreground/90">
              I build reliable, decision-grade analytics from complex data.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground/80 leading-relaxed">
              My work spans hierarchical Bayesian media mix modeling, rule-based NLP
              for cardiac phenotyping, and analytics dashboards that turn messy
              multi-source data into usable insights.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 justify-center mt-10 animate-fade-in-up">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                <FileText size={18} />
                Resume
              </a>
            </Button>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-8 justify-center animate-fade-in-up">
            <a href="https://github.com/HariPrakash79" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/hariprakashkarthikeyan" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <a href="mailto:hariprakashkarthikeyanslm@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
