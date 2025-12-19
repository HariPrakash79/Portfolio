import { ExternalLink, Github, TrendingUp, Activity, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    id: 1,
    title: "Hierarchical Bayesian Media Mix Modeling",
    domain: "Marketing Analytics",
    icon: TrendingUp,
    description:
      "Developed a multi-market hierarchical Bayesian media mix model using PyMC to quantify the causal impact of marketing channels on revenue across 50+ markets.",
    impact: [
      "Informed $20M+ annual marketing budget allocation",
      "Identified 30% efficiency gains in underperforming channels",
      "Reduced model uncertainty by 40% vs. traditional approaches",
    ],
    technologies: ["Python", "PyMC", "NumPyro", "SQL", "Snowflake"],
    accentColor: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    title: "Healthcare EHR Analytics & Cardiac Phenotyping",
    domain: "Healthcare Data Science",
    icon: Activity,
    description:
      "Built patient journey analytics and phenotyping algorithms on large-scale EHR data to support cardiovascular clinical trials at Novartis.",
    impact: [
      "Processed 10M+ patient records for cohort identification",
      "Reduced trial enrollment time by 25%",
      "Developed reusable phenotyping framework adopted across teams",
    ],
    technologies: ["PySpark", "Databricks", "SQL", "R", "SAS"],
    accentColor: "from-green-500/20 to-green-500/5",
  },
  {
    id: 3,
    title: "Large-Scale Solar & CPS Analytics Dashboard",
    domain: "Energy & IoT Analytics",
    icon: Sun,
    description:
      "Designed and built an interactive analytics dashboard for solar energy production and cyber-physical system monitoring using real-time sensor data.",
    impact: [
      "Real-time monitoring of 500+ solar panel sensors",
      "Anomaly detection reduced downtime by 15%",
      "Stakeholder-friendly visualizations improved decision speed",
    ],
    technologies: ["Python", "Tableau", "Power BI", "Streamlit", "AWS"],
    accentColor: "from-yellow-500/20 to-yellow-500/5",
  },
];

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent -translate-y-1/2 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A selection of impactful projects showcasing my expertise in Bayesian 
            modeling, healthcare analytics, and data-driven decision making.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:box-glow-sm ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`} />

              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Main Content */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                        <project.icon size={28} />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">
                          {project.domain}
                        </span>
                        <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary rounded-md text-sm font-mono text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Impact */}
                  <div className="lg:w-80 space-y-4">
                    <h4 className="text-sm font-mono text-primary uppercase tracking-wider">
                      Key Impact
                    </h4>
                    <ul className="space-y-3">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/10 gap-2"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border text-muted-foreground hover:bg-secondary gap-2"
                      >
                        <ExternalLink size={16} />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
