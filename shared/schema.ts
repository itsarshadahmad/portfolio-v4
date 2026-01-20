import { z } from "zod";

export const portfolioDataSchema = z.object({
  name: z.string(),
  title: z.string(),
  tagline: z.string(),
  bio: z.string(),
  email: z.string().email(),
  linkedIn: z.string().url(),
  github: z.string().url().optional(),
  twitter: z.string().url().optional(),
  resumeUrl: z.string().url().optional(),
  profileImage: z.string().url().optional(),
  techStack: z.array(z.string()),
  yearsExperience: z.number(),
});

export const experienceSchema = z.object({
  id: z.string(),
  role: z.string(),
  company: z.string(),
  duration: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
  techStack: z.array(z.string()),
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  techStack: z.array(z.string()),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
});

export const skillSchema = z.object({
  name: z.string(),
  category: z.enum(["cloud", "devops", "development", "tools"]),
});

export type PortfolioData = z.infer<typeof portfolioDataSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Skill = z.infer<typeof skillSchema>;

export interface FullPortfolio {
  profile: PortfolioData;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}
