import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Cloud, Container, Code2, Wrench } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Skill } from "@shared/schema";
import { SiAmazon, SiDocker, SiKubernetes, SiTerraform, SiReact, SiNodedotjs, SiTypescript, SiPython, SiPostgresql, SiMongodb, SiGithubactions, SiLinux, SiJenkins, SiPrometheus, SiGrafana } from "react-icons/si";

const skillIcons: Record<string, React.ReactNode> = {
  "AWS": <SiAmazon className="w-6 h-6" />,
  "IBM Cloud": <Cloud className="w-6 h-6" />,
  "Docker": <SiDocker className="w-6 h-6" />,
  "Kubernetes": <SiKubernetes className="w-6 h-6" />,
  "Jenkins": <SiJenkins className="w-6 h-6" />,
  "Terraform": <SiTerraform className="w-6 h-6" />,
  "React": <SiReact className="w-6 h-6" />,
  "Node.js": <SiNodedotjs className="w-6 h-6" />,
  "TypeScript": <SiTypescript className="w-6 h-6" />,
  "Python": <SiPython className="w-6 h-6" />,
  "PostgreSQL": <SiPostgresql className="w-6 h-6" />,
  "MongoDB": <SiMongodb className="w-6 h-6" />,
  "GitHub Actions": <SiGithubactions className="w-6 h-6" />,
  "Prometheus": <SiPrometheus className="w-6 h-6" />,
  "Grafana": <SiGrafana className="w-6 h-6" />,
  "Linux": <SiLinux className="w-6 h-6" />,
};

const categoryLabels = {
  cloud: { label: "Cloud", icon: <Cloud className="w-5 h-5" /> },
  devops: { label: "DevOps", icon: <Container className="w-5 h-5" /> },
  development: { label: "Development", icon: <Code2 className="w-5 h-5" /> },
  tools: { label: "Tools", icon: <Wrench className="w-5 h-5" /> },
};

export function SkillsSection() {
  const { data: skills, isLoading } = useQuery<Skill[]>({
    queryKey: ["/api/portfolio/skills"],
  });

  const categories = ["cloud", "devops", "development", "tools"] as const;

  if (isLoading) {
    return (
      <section id="skills" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <Skeleton className="h-12 w-72 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-6 w-24" />
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <Skeleton key={j} className="h-16 w-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable cloud solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                {categoryLabels[category].icon}
                <span>{categoryLabels[category].label}</span>
              </div>
              <div className="space-y-3">
                {skills
                  ?.filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Card
                      key={skill.name}
                      className="hover-elevate transition-all duration-300"
                      data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="text-primary">
                          {skillIcons[skill.name] || <Code2 className="w-6 h-6" />}
                        </div>
                        <span className="font-medium text-foreground font-mono text-sm">
                          {skill.name}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
