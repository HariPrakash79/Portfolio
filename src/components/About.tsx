import { MapPin, GraduationCap, Briefcase, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "MS Data Science",
    sublabel: "University of Rochester, NY",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "1+ Years",
    sublabel: "Data Science & Analytics",
  },
  {
    icon: Award,
    label: "Specialty",
    value: "Bayesian & LLM Systems",
    sublabel: "Marketing, Healthcare & RAG",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Seattle, WA",
    sublabel: "Open to Relocation",
  },
];

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className={`space-y-6 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-2">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                About Me
              </span>
             <h2 className="text-3xl md:text-4xl font-display font-bold">
  Turning Data into{" "}
  <span className="text-primary">Decisions People Trust</span>
</h2>

              
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a data scientist with a passion for applying rigorous statistical
                methods to solve complex business problems. My expertise lies at the
                intersection of Bayesian inference, marketing analytics, healthcare
                data science, and applied LLM systems.
              </p>
          <p>
  As an <span className="text-foreground">AI Engineer at Community Dreams Foundation</span>,
  I built and deployed a production{" "}
  <span className="text-foreground">RAG chatbot</span> (LangChain, FAISS, OpenAI,
  Streamlit) serving volunteers organization-wide, grounding every answer in
  official documents with source citations. I designed an 82-question
  evaluation framework scored via LLM-as-judge and used it to drive a
  structured retrieval tuning study that lifted answer accuracy from 45% to
  89.2%.
</p>
          <p>
  At the <span className="text-foreground">University of Rochester Medical Center</span>,
  I worked with large-scale EHR and REDCap data, building analysis-ready
  patient-level datasets and extracting clinically meaningful cardiac
  phenotypes from unstructured echocardiogram narratives using robust
  rule-based NLP.
</p>

<p>
  Separately, I developed a{" "}
  <span className="text-foreground">Hierarchical Bayesian Media Mix Model</span>{" "}
  using <span className="text-foreground">PyMC</span> to estimate channel-level
  effectiveness across markets, explicitly accounting for geographic
  heterogeneity, adstock (carryover effects), and saturation.
</p>


              <p>
                I thrive on transforming ambiguous problems into structured analytical 
                frameworks and communicating technical findings to stakeholders across 
                all levels.
              </p>
            </div>

            {/* Key Values */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Rigorous Analysis", "Clear Communication", "Business Impact", "Continuous Learning"].map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground border border-border"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className={`grid grid-cols-2 gap-4 ${isInView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group hover:box-glow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon size={20} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-display font-bold text-foreground">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
