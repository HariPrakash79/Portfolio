import { Code, Database, BarChart3, Brain, LineChart, Layers } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const expertiseCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "R", "SQL", "SAS", "PySpark"],
  },
  {
    icon: Brain,
    title: "Python Ecosystem",
    skills: ["PyMC", "NumPyro", "scikit-learn", "Pandas", "TensorFlow"],
  },
  {
    icon: Database,
    title: "Data & MLOps",
    skills: ["Snowflake", "Databricks", "AWS", "Docker", "MLflow"],
  },
  {
    icon: BarChart3,
    title: "Statistical Methods",
    skills: ["Bayesian Inference", "Causal Inference", "Time Series", "A/B Testing"],
  },
  {
    icon: LineChart,
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Plotly", "matplotlib", "Streamlit"],
  },
  {
    icon: Layers,
    title: "Domain Expertise",
    skills: ["Marketing Mix Modeling", "Patient Analytics", "Clinical Trials", "EHR Data"],
  },
];

export function Expertise() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="expertise" className="py-24 bg-secondary/30 relative" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Skills & Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Core <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit spanning statistical modeling, data engineering, 
            and visualization—built through years of hands-on experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow-sm ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-display font-semibold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
