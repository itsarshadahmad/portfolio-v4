import type { Express } from "express";
import { createServer, type Server } from "http";
import { portfolioData } from "./portfolio-data";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/portfolio", (_req, res) => {
    res.json(portfolioData);
  });

  app.get("/api/portfolio/profile", (_req, res) => {
    res.json(portfolioData.profile);
  });

  app.get("/api/portfolio/experiences", (_req, res) => {
    res.json(portfolioData.experiences);
  });

  app.get("/api/portfolio/projects", (_req, res) => {
    res.json(portfolioData.projects);
  });

  app.get("/api/portfolio/skills", (_req, res) => {
    res.json(portfolioData.skills);
  });

  return httpServer;
}
