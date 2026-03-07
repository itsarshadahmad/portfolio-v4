export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  linkedIn: string;
  github?: string;
  twitter?: string;
  resumeUrl?: string;
  profileImage?: string;
  techStack: string[];
  yearsExperience: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export type SkillCategory = "backend" | "devops" | "frontend" | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface FullPortfolio {
  profile: PortfolioData;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}
