import { Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    company: "Community Dreams Foundation",
    role: "AI Engineer",
    period: "Mar 2026 – Present",
    type: "Applied AI / RAG",
    highlights: [
      "Designed the knowledge-base feature for Drema, DreamStream's multi-agent Gemini assistant: a new specialist agent backed by hybrid pgvector + full-text search, where permissions are enforced in SQL so people only ever see documents they're allowed to",
      "Split the work so four engineers could build in parallel inside one large shared Firebase backend without stepping on each other: ingestion on one side, API and agent on the other",
      "Built and still run the volunteer-facing RAG assistant (LangChain, FAISS, GPT-4o-mini) that answers policy and HR questions with a citation to the exact source file, and took its accuracy from 45% to 89% using an 82-question eval set I re-run after every re-index",
    ],
  },
  {
    company: "Butler/Till",
    role: "Data Scientist – Marketing",
    period: "Aug 2025 – Dec 2025",
    type: "Marketing Analytics",
    highlights: [
      "The existing market-level Media Mix Model was noisy (R² 0.55) and budget recommendations swung from run to run, so I rebuilt it as a clustered hierarchical Bayesian model across 188 markets; validation R² improved 13.7%",
      "Partial pooling across market clusters gave stable regional estimates (R² 0.88–0.92) and surfaced real channel behavior, like TV's long carryover and Display saturating early",
      "Turned the adstock + saturation workflow (PyMC + JAX) into a reusable pipeline, so scenario analysis takes 40–50% less time and planners can test more budget options each quarter",
    ],
  },
  {
    company: "Buffalo Solar",
    role: "Data Science Intern",
    period: "Jun 2025 – Jul 2025",
    type: "Applied Analytics",
    highlights: [
      "Ops used to check 468 solar sites by hand every day; I replaced that with a pipeline that pulls 15-minute SolarEdge telemetry and flags the sites that actually need attention",
      "Calibrated the anomaly thresholds to about 90% precision, so crews stopped getting sent out on false alarms",
      "Built the Streamlit + Plotly dashboard the engineering and ops teams adopted, cutting manual monitoring time by roughly a third",
    ],
  },
  {
    company: "University of Rochester Medical Center",
    role: "Research Data Scientist",
    period: "Feb 2025 – May 2025",
    type: "Healthcare Data",
    highlights: [
      "Researchers were building patient cohorts through manual chart review; I automated it with Python pipelines that clean and merge 2,000+ longitudinal records",
      "Lined up labs, admissions, and clinical notes on a shared timeline so the team had modeling-ready feature tables they could reuse",
      "Pulled cardiac measurements such as LVEF out of free-text notes with rule-based NLP, producing an 845-patient dataset ready for analysis",
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
  const { ref, isInView } = useInView({ threshold: 0.15 });

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
            A track record of driving impact across healthcare analytics, Bayesian
            marketing modeling, and applied data products.
          </p>
        </div>

        {/* Experience Grid: 2 per row, last centered */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow-sm
                ${isInView ? "animate-fade-in-up" : "opacity-0"}
                ${
                  experiences.length % 2 === 1 && index === experiences.length - 1
                    ? "md:col-span-2 md:max-w-xl md:mx-auto"
                    : ""
                }
              `}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Building2 size={18} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="font-mono">{exp.period}</span>
                <span>•</span>
                <span>{exp.type}</span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 text-left">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
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
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary gap-2"
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
    </section>
  );
}
