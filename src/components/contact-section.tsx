import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Linkedin, Mail, Github, Twitter, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function ContactSection() {
  const profile = portfolioData.profile;
  const isLoading = false;

  if (isLoading) {
    return (
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Skeleton className="h-12 w-48 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto mb-12" />
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col gap-4 items-center">
                  <Skeleton className="h-11 w-48" />
                  <Skeleton className="h-11 w-64" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const openMyCV = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (profile.resumeUrl) {
            window.open(profile.resumeUrl, "_blank");
        }
    };

  const email = profile?.email || "your.email@example.com";
  const linkedIn = profile?.linkedIn || "https://linkedin.com/in/yourprofile";
  const github = profile?.github || "https://github.com/yourusername";
  const twitter = profile?.twitter || "https://twitter.com/yourhandle";

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: linkedIn,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: github,
      color: "hover:text-foreground",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: twitter,
      color: "hover:text-[#1DA1F2]",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to discussing new projects, opportunities, or just having a chat about cloud and DevOps.
          </p>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    data-testid="button-linkedin"
                  >
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    data-testid="button-email"
                  >
                    <a href={`mailto:${email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      {email}
                    </a>
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto"
                    data-testid="button-download-resume"
                    onClick={openMyCV}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className={`text-muted-foreground ${link.color} transition-colors`}
                data-testid={`button-social-${link.name.toLowerCase()}`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
