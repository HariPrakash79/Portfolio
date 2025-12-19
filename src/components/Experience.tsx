import { Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    company: "Novartis",
    role: "Data Science Analyst",
    period: "2023 - Present",
    type: "Healthcare & Pharma",
    highlights: [
      "Patient journey modeling for cardiovascular drugs",
      "Clinical trial optimization and cohort identification",
      "Multi-market EHR analytics at scale",
    ],
  },
  {
    company: "Epsilon (Publicis Groupe)",
    role: "Senior Analyst, Marketing Science",
    period: "2022 - 2023",
    type: "Marketing Analytics",
    highlights: [
      "Hierarchical Bayesian media mix modeling",
      "Multi-touch attribution analysis",
      "Marketing budget optimization",
    ],
  },
  {
    company: "Mu Sigma",
    role: "Trainee Decision Scientist",
    period: "2019 - 2021",
    type: "Analytics Consulting",
    highlights: [
      "Client-facing analytics projects",
      "Statistical modeling and forecasting",
      "Dashboard development and reporting",
    ],
  },
];

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            A track record of driving impact through data science across healthcare, 
            marketing, and consulting industries.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 mt-2" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow-sm">
                    {/* Header */}
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg">{exp.company}</h3>
                        <p className="text-sm text-muted-foreground">{exp.role}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`flex items-center gap-3 text-xs text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="font-mono">{exp.period}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((item, i) => (
                        <li key={i} className={`flex items-center gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <div className={`text-center mt-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 gap-2"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                View Full Experience on LinkedIn
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
