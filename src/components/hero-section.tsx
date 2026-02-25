import { Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { portfolioData } from "@/data/portfolio-data";

export function HeroSection() {
  const profile = portfolioData.profile;
  const isLoading = false;

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section id="about" className="min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-16 w-80" />
                <Skeleton className="h-8 w-64" />
              </div>
              <Skeleton className="h-24 w-full max-w-xl" />
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="h-6 w-16" />
                ))}
              </div>
              <div className="flex gap-4">
                <Skeleton className="h-11 w-44" />
                <Skeleton className="h-11 w-36" />
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <Skeleton className="w-64 h-64 md:w-80 md:h-80 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const techStack = profile?.techStack || ["AWS", "Docker", "Kubernetes", "Terraform", "React", "Node.js"];
  const name = profile?.name || "Your Name";
  const title = profile?.title || "Cloud & DevOps Engineer";
  const bio = profile?.bio || "Building scalable cloud infrastructure and automating deployments. 2+ years of experience in full-stack development and DevOps practices, passionate about creating efficient, reliable systems.";
  const yearsExperience = profile?.yearsExperience || 2;
  const profileImage = profile?.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
  const linkedIn = profile?.linkedIn || "https://linkedin.com/in/yourprofile";

  return (
    <section id="about" className="min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wide uppercase">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                {title}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              {bio}
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {techStack.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-xs"
                  data-testid={`badge-tech-${tag.toLowerCase()}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-chart-4"></span>
                {yearsExperience}+ Years Experience
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="hidden sm:inline">Full Stack</span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="hidden sm:inline">Cloud/DevOps</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                data-testid="button-contact-cta"
              >
                <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                data-testid="button-email-cta"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                data-testid="button-resume-download"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-chart-3/20 rounded-2xl blur-3xl"></div>
              <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl relative border-4 border-background">
                <AvatarImage
                  src={profileImage}
                  alt="Profile"
                  className="object-cover rounded-2xl"
                />
                <AvatarFallback className="text-6xl rounded-2xl bg-gradient-to-br from-primary to-chart-3 text-primary-foreground">
                  {name.split(" ").map(n => n[0]).join("").toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-24">
          <button
            onClick={scrollToExperience}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to experience"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
