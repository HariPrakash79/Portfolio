import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Newspaper, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

type SubstackPost = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  image?: string;
};

type SubstackResponse = {
  posts: SubstackPost[];
};

const formatDate = (value: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return format(date, "MMM d, yyyy");
};

const fetchPosts = async (): Promise<SubstackResponse> => {
  const res = await fetch("/.netlify/functions/substack?limit=3");
  if (!res.ok) {
    throw new Error("Failed to fetch Substack posts.");
  }
  return res.json();
};

export function Writing() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { data, isLoading, isError } = useQuery({
    queryKey: ["substack-posts"],
    queryFn: fetchPosts,
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
  });

  const posts = (data?.posts ?? []).slice(0, 3);
  const blogTags = ["Tech Diary", "Substack", "Tech Writing"];

  return (
    <section id="blogs" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-14 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Tech Diary
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Tech Diary{" "}
            <span className="text-primary">Blogs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Fresh posts pulled automatically from Substack whenever I publish.
          </p>
        </div>

        {isLoading && (
          <div className="text-center text-muted-foreground">Loading latest posts…</div>
        )}

        {isError && (
          <div className="text-center text-muted-foreground">
            Posts will appear here once the feed is live.
          </div>
        )}

        {!isLoading && !isError && posts.length === 0 && (
          <div className="text-center text-muted-foreground">
            No posts yet. Check back soon.
          </div>
        )}

        {!isLoading && !isError && posts.length > 0 && (
          <>
            <div className="space-y-8">
              {posts.map((post, index) => (
                <div
                  key={`${post.link}-${index}`}
                  className={`group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:box-glow-sm ${
                    isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1 space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                            <Newspaper size={28} />
                          </div>
                          <div className="space-y-2">
                            <span className="text-xs font-mono text-primary uppercase tracking-wider">
                              Tech Diary
                            </span>
                            <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                              {post.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {blogTags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-secondary rounded-md text-sm font-mono text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:w-80 space-y-4">
                        <h4 className="text-sm font-mono text-primary uppercase tracking-wider">
                          Post Details
                        </h4>
                        <ul className="space-y-3 text-left">
                          <li className="relative pl-4 text-sm text-muted-foreground leading-relaxed">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary" />
                            Published: {formatDate(post.date) || "Recently"}
                          </li>
                          <li className="relative pl-4 text-sm text-muted-foreground leading-relaxed">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary" />
                            Source: Substack
                          </li>
                          <li className="relative pl-4 text-sm text-muted-foreground leading-relaxed">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary" />
                            Auto-updates with new posts
                          </li>
                        </ul>

                        <div className="flex gap-3 pt-4">
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-primary/50 text-primary hover:bg-primary/10 gap-2"
                          >
                            <a href={post.link} target="_blank" rel="noreferrer">
                              <ArrowUpRight size={16} />
                              Read
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-border text-muted-foreground hover:bg-secondary gap-2"
                          >
                            <a
                              href="https://substack.com/@hariprakashkarthikeyan"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <ExternalLink size={16} />
                              Substack
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary">
                <a
                  href="https://substack.com/@hariprakashkarthikeyan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read My Other Posts on Substack
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
