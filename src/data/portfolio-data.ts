import type { FullPortfolio } from "@/types/portfolio";

export const portfolioData: FullPortfolio = {
  profile: {
    name: "Arshad Ahmad",
    title: "Full Stack Developer",
    tagline:
      "Building scalable apps with infrastructure and automating deployments",
    bio: "~ 2 years of experience in full-stack development — turning ideas into production-ready web experiences, from UI to deployment.",
    email: "arshadxdev@gmail.com",
    linkedIn: "https://linkedin.com/in/itsarshadahmad",
    github: "https://github.com/itsarshadahmad",
    resumeUrl: "#",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    techStack: ["Next.js", "React", "Node.js", "AWS", "Docker", "Kubernetes"],
    yearsExperience: 2,
  },
  experiences: [
    {
      id: "1",
      role: "Software Developer",
      company: "Aumble",
      duration: "Apr 2025 - Mar 2026",
      description:
        "Building and maintaining scalable web applications and internal tools for production workflows, working across the full stack from UI to deployment.",
      achievements: [
        "Built and maintained 6–8 web applications and dashboards using Next.js, React.js, and TypeScript, supporting multiple internal workflows.",
        "Developed reusable UI components with Tailwind CSS and Shadcn UI, and integrated CMS platforms like Directus and Pocketbase for internal tooling.",
        "Integrated FastAPI backend services and REST APIs into frontend applications, ensuring reliable data flow and consistent API performance.",
        "Containerized and deployed applications using Docker, streamlining deployment pipelines and eliminating environment inconsistencies.",
      ],
      techStack: ["Next.js", "React.js", "TypeScript", "Docker", "Python"],
    },
    {
      id: "2",
      role: "Full Stack Developer Intern",
      company: "To-Let Globe",
      duration: "Jan 2025 - Mar 2025",
      description:
        "Contributed to building core platform features including property listings and a blog, while collaborating across frontend and AI/ML teams to deliver end-to-end solutions.",
      achievements: [
        "Built a fully responsive property listing platform end-to-end, displaying 500+ records with search, filtering, and optimized database queries for faster load times.",
        "Developed and maintained the blog page, collaborating closely with the team to ensure consistent UI and smooth content management.",
        "Collaborated with AI/ML developers to integrate a RAG-based chatbot using LangChain, improving the relevance and accuracy of AI-generated responses.",
      ],
      techStack: ["React", "Node.js", "MongoDB", "LangChain", "Docker"],
    },
    {
      id: "3",
      role: "Backend Developer (Intern)",
      company: "Forage (Lyft)",
      duration: "Sept 2023 - Oct 2023",
      description:
        "Worked on backend systems and solution design, focusing on optimization logic and software architecture using Python and Django.",
      achievements: [
        "Designed UML diagrams to plan and document system architecture before implementation.",
        "Built and optimized backend methods in Django to calculate and improve pricing logic for Lyft ride/cab fare scenarios.",
        "Wrote comprehensive test cases for all implemented functions, ensuring reliability and correctness of the solution.",
      ],
      techStack: ["Python", "Django", "PostgreSQL", "Docker", "Linux"],
    },
    {
      id: "4",
      role: "Web Developer Intern",
      company: "The Spark Foundation",
      duration: "May 2023 - Jun 2023",
      description:
        "Gained hands-on experience building real-world web applications across different domains as part of a structured training program.",
      achievements: [
        "Built an interactive analytics dashboard with data visualization components for monitoring and reporting.",
        "Developed a banking application with core financial UI flows including transactions and account management.",
        "Designed and built a responsive landing page, focusing on clean UI and user experience.",
      ],
      techStack: ["React", "Node.js", "MySQL", "Tailwind CSS", "Bootstrap"],
    },
    {
      id: "5",
      role: "Full Stack Developer Intern",
      company: "Solar Secure Solutions",
      duration: "May 2022 - Jul 2022",
      description:
        "Delivered multiple full-stack projects across different domains, gaining broad experience in frontend, backend, and third-party integrations.",
      achievements: [
        "Built a COVID tracker app and multiple landing pages, focusing on real-time data display and responsive design.",
        "Developed a banking app and an interactive chart dashboard with dynamic data visualization.",
        "Built a fully functional e-commerce application with Razorpay payment gateway integration for end-to-end checkout flow.",
      ],
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Cloud Infrastructure Automation",
      description:
        "Automated AWS infrastructure provisioning using Terraform and Ansible. Includes VPC, EKS clusters, RDS, and monitoring with CloudWatch.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop",
      techStack: ["Terraform", "AWS", "Ansible", "Python"],
      githubUrl: "#",
      // liveUrl: "#",
    },
    {
      id: "2",
      title: "Kubernetes Deployment Platform",
      description:
        "Built a self-service deployment platform for developers to deploy applications to Kubernetes with CI/CD integration and GitOps workflow.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop",
      techStack: ["Kubernetes", "ArgoCD", "Helm", "Go"],
      githubUrl: "#",
    },
    {
      id: "3",
      title: "Real-time Analytics Dashboard",
      description:
        "Full-stack web application for real-time data visualization with WebSocket streaming and responsive charts.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
      techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "4",
      title: "Microservices E-commerce API",
      description:
        "Scalable e-commerce backend with microservices architecture, event-driven communication, and containerized deployment.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
      techStack: ["Node.js", "Docker", "RabbitMQ", "MongoDB"],
      githubUrl: "#",
    },
  ],
  skills: [
    { name: "AWS", category: "cloud" },
    { name: "IBM Cloud", category: "cloud" },
    { name: "Docker", category: "devops" },
    { name: "Kubernetes", category: "devops" },
    { name: "Jenkins", category: "devops" },
    { name: "GitHub Actions", category: "devops" },
    { name: "Prometheus", category: "devops" },
    { name: "Grafana", category: "devops" },
    { name: "Terraform", category: "cloud" },
    { name: "React", category: "development" },
    { name: "Next.js", category: "development" },
    { name: "Node.js", category: "development" },
    { name: "JavaScript", category: "development" },
    { name: "TypeScript", category: "development" },
    { name: "Python", category: "development" },
    { name: "PostgreSQL", category: "tools" },
    { name: "MongoDB", category: "tools" },
    { name: "Linux", category: "tools" },
  ],
};
