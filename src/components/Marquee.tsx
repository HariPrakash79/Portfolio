const keywords = [
  "Data Science",
  "Bayesian Modeling",
  "Marketing Analytics",
  "Healthcare Data",
  "Machine Learning",
  "Statistical Inference",
  "Python",
  "SQL",
  "Data Visualization",
  "Causal Inference",
  "A/B Testing",
  "Predictive Modeling",
];

export function Marquee() {
  const duplicatedKeywords = [...keywords, ...keywords];

  return (
    <section className="py-8 bg-secondary/50 border-y border-border/50 overflow-hidden">
      <div className="flex animate-marquee">
        {duplicatedKeywords.map((keyword, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-lg md:text-xl font-display font-medium text-muted-foreground px-6">
              {keyword}
            </span>
            <span className="text-primary text-2xl">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
