import { ReactNode } from "react";

type BadgeVariant = "highlight" | "regular";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const highlighted: string[] = ["Full-Stack", "Cloud-Native", "Microservices"];

const regular: string[] = [
  "REST APIs",
  "Agile / Scrum",
  "CI/CD Pipelines",
  "Database Design",
  "Responsive UI",
  "Server Admin",
];

function Badge({ children, variant = "regular" }: BadgeProps) {
  const base =
    "font-mono text-[11px] tracking-wide px-3 py-1 rounded-full border cursor-default transition-all duration-200 select-none";
  const styles: Record<BadgeVariant, string> = {
    highlight:
      "border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50",
    regular:
      "border-white/10 bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] hover:border-white/20",
  };
  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}

export default function SkillsSummary() {
  return (
    <div className="w-full rounded-xl border border-white/[0.07] bg-[#141618] px-6 py-5 flex flex-wrap items-center gap-x-5 gap-y-4">
      {/* Label */}
      <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-500 shrink-0">
        Also comfortable with →
      </span>

      {/* Divider */}
      <div className="hidden sm:block h-4 w-px bg-white/10" />

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {highlighted.map((skill: string) => (
          <Badge key={skill} variant="highlight">
            {skill}
          </Badge>
        ))}
        {regular.map((skill: string) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}