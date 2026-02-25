import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";

export function Footer() {
  const profile = portfolioData.profile;

  const currentYear = new Date().getFullYear();
  const name = profile?.name || "Your Name";
  const email = profile?.email || "mailto:your.email@example.com";
  const linkedIn = profile?.linkedIn || "https://linkedin.com/in/yourprofile";
  const github = profile?.github || "https://github.com/yourusername";
  const twitter = profile?.twitter || "https://twitter.com/yourhandle";

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      url: linkedIn,
    },
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4" />,
      url: github,
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      url: twitter,
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      url: `mailto:${email}`,
    },
  ];

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} {name}. Built with passion.
          </p>

          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-foreground transition-colors h-8 w-8"
                data-testid={`button-footer-${link.name.toLowerCase()}`}
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
    </footer>
  );
}
