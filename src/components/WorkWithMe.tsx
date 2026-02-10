import { Rocket, BarChart3, Brain, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import resumePdf from "@/assets/Hariprakash_Karthikeyan_ml_resume.pdf";

const capabilities = [
  {
    icon: Brain,
    title: "Bayesian Modeling",
    description: "Custom probabilistic models for marketing, healthcare, and business applications.",
  },
  {
    icon: BarChart3,
    title: "Analytics Strategy",
    description: "End-to-end analytics solutions from data engineering to executive dashboards.",
  },
  {
    icon: Rocket,
    title: "MLOps & Deployment",
    description: "Production-grade ML pipelines with monitoring, versioning, and scalability.",
  },
  {
    icon: MessageSquare,
    title: "Technical Communication",
    description: "Translating complex analyses into clear, actionable business recommendations.",
  },
];

export function WorkWithMe() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Available for Full-Time Roles</span>
            </span>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let's Build Something{" "}
              <span className="text-primary text-glow">Impactful</span> Together
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm seeking full-time opportunities where I can apply Bayesian methods 
              and data science to solve meaningful problems. Let's connect and explore 
              how I can contribute to your team.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow gap-2"
              >
                <a href="#contact">
                  <MessageSquare size={18} />
                  Get in Touch
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download Resume
                </a>
              </Button>

            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className={`group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow-sm ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
