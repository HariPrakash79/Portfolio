import { Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    company: "University of Rochester Medical Center",
    role: "Research Assistant (EHR Analytics & Cardiac Phenotyping)",
    period: "Sep 2025 – Dec 2025",
    type: "Healthcare Data",
    highlights: [
      "Built an analysis-ready patient-level dataset from fragmented REDCap/EHR tables and multiple hospitalizations",
      "Extracted cardiac phenotypes from unstructured echocardiogram narratives using robust rule-based NLP (regex + context/negation handling)",
      "Aligned MRN-linked encounters with admission–discharge windows and preserved lab timestamps for downstream ML/statistical analysis",
    ],
  },
  {
    company: "Butler/Till",
    role: "Data Science Intern (Hierarchical Bayesian MMM)",
    period: "Aug 2025 – Dec 2025",
    type: "Marketing Analytics",
    highlights: [
      "Developed a hierarchical Bayesian Media Mix Model (MMM) in PyMC to quantify channel effectiveness across ~170 U.S. DMAs",
      "Modeled real-world ad dynamics with adstock carryover and Hill-type saturation to improve interpretability of spend-response behavior",
      "Delivered ROI and scenario insights with time-based validation (rolling splits) to support budget optimization decisions",
    ],
  },
  {
    company: "Buffalo Solar",
    role: "Data Analyst Intern (Analytics Dashboard)",
    period: "Jun 2025 – Jul 2025",
    type: "Applied Analytics",
    highlights: [
      "Built an interactive Streamlit + Plotly analytics dashboard to monitor performance across 468+ SolarEdge and CPS sites",
      "Automated ingestion using SolarEdge Monitoring API and dynamic merging of multi-year CPS Excel files per site",
      "Implemented outage detection thresholds and prediction-vs-actual comparison with error metrics for performance tracking",
    ],
  },
  {
    company: "University of Rochester – Simon Business School",
    role: "Graduate Teaching Assistant",
    period: "Jan 2025 – Dec 2025",
    type: "Teaching & Support",
    highlights: [
      "Supported graduate-level courses: Core Statistics (Python), Data Analytics (R), and Data Management/Warehousing/Visualization (SQL)",
      "Graded ~5 analytical/programming assignments per course and provided timely, actionable feedback",
      "Held office hours to debug code and reinforce applied concepts in modeling, data workflows, and visualization",
    ],
  },
  {
    company: "University of Rochester",
    role: "Graduate Teaching Assistant",
    period: "Sep 2024 – Dec 2025",
    type: "Teaching & Support",
    highlights: [
      "Supported courses including Signals & Systems, Python Programming, Tools for Data Science, and Statistical Foundations & Data Visualization",
      "Graded ~5 assignments per course and reinforced structured problem-solving and programming fundamentals",
      "Assisted students via office hours with Python basics, numerical/statistical reasoning, and data analysis workflows",
    ],
  },
];

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            A track record of building practical, defensible data products and models
            across healthcare, marketing analytics, and applied dashboards.
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
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow-sm">
                    {/* Header */}
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.role}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div
                      className={`flex items-center gap-3 text-xs text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="font-mono">{exp.period}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 text-left">

                      {exp.highlights.map((item, i) => (
    <li className="relative pl-4 text-sm text-muted-foreground leading-relaxed">
  <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-primary" />
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
          <div
            className={`text-center mt-12 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 gap-2"
            >
              <a
                href="https://www.linkedin.com/in/hariprakashkarthikeyan"
                target="_blank"
                rel="noopener noreferrer"
              >
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
