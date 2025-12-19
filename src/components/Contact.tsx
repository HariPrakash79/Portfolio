import { Mail, Github, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { toast } from "sonner";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hariprakash@example.com",
    href: "mailto:hariprakash@example.com",
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/hariprakash-k",
    href: "https://linkedin.com/in/hariprakash-k",
    copyable: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@hariprakash-k",
    href: "https://github.com/hariprakash-k",
    copyable: false,
  },
];

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <div className={`mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground">
              I'm always open to discussing new opportunities, interesting projects, 
              or just connecting with fellow data enthusiasts.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4 mb-8">
            {contactLinks.map((link, index) => (
              <div
                key={index}
                className={`group flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow-sm ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 flex-1"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <link.icon size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {link.value}
                    </p>
                  </div>
                </a>
                
                {link.copyable && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopy(link.value, index);
                    }}
                  >
                    {copiedIndex === index ? <Check size={18} /> : <Copy size={18} />}
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Location */}
          <div className={`flex items-center justify-center gap-2 text-muted-foreground ${isInView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <MapPin size={16} className="text-primary" />
            <span>Based in the United States</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hariprakash Karthikeyan. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
