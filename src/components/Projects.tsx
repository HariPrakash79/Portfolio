import { ExternalLink, Github, TrendingUp, Twitter, CarTaxiFront, Music, Nut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import mmmReport from "@/assets/report_capstone.pdf";
import twitterReport from "@/assets/Final_Report_DSS.pdf";
import taxiReport from "@/assets/report_nsa.pdf";

const projects = [
  {
    id: 5,
    title: "Hierarchical Bayesian Media Mix Modeling (MMM)",
    domain: "Marketing Analytics",
    icon: TrendingUp,
    description:
      "Built a hierarchical Bayesian Media Mix Model in PyMC to estimate channel-level effectiveness across ~170 U.S. DMAs, capturing geographic heterogeneity and uncertainty for ROI and scenario analysis.",
    impact: [
      "Integrated weekly sales + multi-channel spend with contextual DMA-level features for geo-level inference",
      "Modeled carryover and diminishing returns via adstock and saturation (Hill-type) transformations",
      "Validated performance using rolling time-based splits and produced interpretable channel contribution estimates",
    ],
    technologies: ["Python", "PyMC", "Pandas", "NumPy", "SQL"],
    codeUrl: "https://github.com/HariPrakash79",
    detailsUrl: mmmReport,
  },
    {
    id: 1,
    title: "Real time Spotify Music Assistant using AWS and LLM",
    domain: "Cloud Data Engineering & Recommender Systems",
    icon: Music,
    description:
      "Built an AWS-based, cloud-first music data pipeline that ingests multi-source datasets directly into S3 (no local storage), normalizes to SQL-ready Parquet, streams events with Kafka, and enables real-time recommendation/chat workflows.",
    impact: [
      "Developed workflows to normalize large-scale listening logs and track metadata into SQL-ready Parquet datasets",
      "Designed PostgreSQL serving schemas for tracks, events, and user features to support recommendation use cases",
      "Implemented Kafka producers and topic contracts for low-latency event streaming and future LLM assistant capabilities",
    ],
    technologies: ["Python", "S3", "IAM", "Kafka", "SQL", "Parquet", "RDS", "Bedrock"],
    codeUrl: "https://github.com/HariPrakash79/spotify-realtime-music-assistant.git",
    detailsUrl: "https://github.com/HariPrakash79/spotify-realtime-music-assistant.git",
  },
  {
  id: 3,
  title: "Uber & NYC Taxi Network Analysis",
  domain: "Urban Mobility & Network Science",
  icon: CarTaxiFront,
  description:
    "Analyzed large-scale NYC taxi and ride-hailing data using network science to uncover mobility patterns, demand hubs, and structural inefficiencies in urban transportation.",
  impact: [
    "Modeled spatiotemporal ride data as transportation networks",
    "Identified high-traffic hubs and congestion-prone regions",
    "Extracted interpretable network metrics for urban mobility insights",
  ],
  technologies: ["Python", "Pandas", "NetworkX", "NumPy", "Geospatial Analysis"],
  codeUrl: "https://github.com/HariPrakash79/Uber_Taxi_Network_Analysis",
  detailsUrl: taxiReport,
},
  {
    id: 4,
    title: "Solder Joint Quality Prediction (XRay Baseline + MobileNet + Regression + Demo)",
    domain: "Manufacturing AI & Computer Vision",
    icon: Nut,
    description:
      "Built an end-to-end ML pipeline to classify solder joint quality from XRay images using the HellaStudy-of-LEDs dataset by converting void-rate measurements into defect labels and training scalable image models for automated inspection.",
    impact: [
      "Developed baseline CNN, MobileNetV2 fine-tuning, and EfficientNetV2 regression workflows with panel-level splits to reduce leakage",
      "Tuned label and decision thresholds to reach high defect recall (~0.95), reducing missed defects in quality screening",
      "Delivered a Streamlit single-image inference demo with configurable thresholds and a clear path to FastAPI-based production serving",
    ],
    technologies: ["Python", "TensorFlow", "MobileNetV2", "EfficientNetV2", "Pandas", "Streamlit"],
    codeUrl: "https://github.com/HariPrakash79/solder-joint-quality-prediction",
    detailsUrl: "https://github.com/HariPrakash79/solder-joint-quality-prediction",
  },


{
  id: 2,
  title: "Streaming Twitter Sentiment Analysis",
  domain: "Real-Time Data Processing",
  icon: Twitter,
  description:
    "Built a Spark Structured Streaming pipeline in Databricks using the Medallion Architecture (Bronze–Silver–Gold) to process and analyze tweet sentiment data in real time.",
  impact: [
    "Designed an end-to-end streaming ETL pipeline using Delta Lake",
    "Implemented stream monitoring, cleanup, and operational controls",
    "Produced analytics-ready Gold tables for downstream consumption",
  ],
  technologies: ["Python", "PySpark", "Databricks", "Delta Lake"],
  codeUrl: "https://github.com/HariPrakash79/Twitter_sentiment_analysis",
  detailsUrl: twitterReport,
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
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A selection of projects spanning Bayesian modeling, healthcare EHR
            analytics, and dashboard-driven decision support.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {[...projects].sort((a, b) => a.id - b.id).map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:box-glow-sm ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient accent */}
              <div
              />

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
                    <ul className="space-y-3 text-left">
                      {project.impact.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-4 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/10 gap-2"
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </Button>

                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-border text-muted-foreground hover:bg-secondary gap-2"
                      >
                        <a
                          href={project.detailsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Details
                        </a>
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



