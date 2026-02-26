import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import resumePdf from "@/assets/Hariprakash_Karthikeyan_ml_resume.pdf";

const pageTitle = "Hariprakash Karthikeyan | Resume";

const Resume = () => {
  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <a href={resumePdf} target="_blank" rel="noopener noreferrer">
              Open PDF
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>

        <div className="rounded-xl overflow-hidden border border-border bg-card/40">
          <iframe
            src={resumePdf}
            title={pageTitle}
            className="w-full h-[84vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
