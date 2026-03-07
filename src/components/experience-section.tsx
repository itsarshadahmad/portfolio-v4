import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function ExperienceSection() {
  const experiences = portfolioData.experiences;
  const isLoading = false;

  if (isLoading) {
    return (
      <section id="experience" className="py-16 md:py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative pl-12 md:pl-20">
                <Skeleton className="absolute left-0 md:left-4 w-8 h-8 rounded-full" />
                <Card>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-32 mb-4" />
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-16 md:py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and full stack
            development
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {experiences?.map((exp, index) => (
              <div key={exp.id} className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </div>

                <Card
                  className="hover-elevate transition-all duration-300"
                  data-testid={`card-experience-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="w-fit font-mono text-xs"
                      >
                        {exp.duration}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-chart-4 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
