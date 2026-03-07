import type { FullPortfolio } from "@/types/portfolio";

export const portfolioData: FullPortfolio = {
  profile: {
    name: "Arshad Ahmad",
    title: "Full Stack Developer",
    tagline:
      "Building scalable apps with infrastructure and automating deployments",
    bio: "~ 2 years of experience in full-stack frontend — turning ideas into production-ready web experiences, from UI to deployment.",
    email: "arshadxdev@gmail.com",
    linkedIn: "https://linkedin.com/in/itsarshadahmad",
    github: "https://github.com/itsarshadahmad",
    resumeUrl: "https://flowcv.com/resume/cj5v7gi53g",
    profileImage: "/profile.jpg",
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
      title: "ShiftFlow - Employee Shift Scheduler",
      description:
        "A self-hostable SaaS platform for employee shift scheduling and workforce management. Features drag-and-drop scheduling, time-off & shift swap workflows with manager approvals, team messaging, role-based access control, and labor cost reporting. Ships with Docker support and multi-tenant architecture.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "Shadcn/UI",
        "Docker",
      ],
      githubUrl: "https://github.com/itsarshadahmad/shift-manager",
      // liveUrl: "#",
    },
    {
      id: "2",
      title: "SubTrack - Subscriptions Tracker",
      description:
        "A full-stack subscription management app that helps you track all your recurring expenses in one place. Features include spending insights, renewal reminders, smart alerts for price changes, cost history tracking, calendar view, multi-currency support, and monthly budget limits.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "Shadcn/UI",
        "Docker",
      ],
      githubUrl: "https://github.com/itsarshadahmad/subscription-tracker",
    },
    {
      id: "3",
      title: "Socially - Modern Social Media Experience",
      description:
        "A modern social media app with posts, feed, likes, comments, shares, bookmarks, real-time messaging, and search. Built with Supabase for authentication, database, and real-time features.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
      techStack: ["Next.js", "Supabase", "PostgreSQL", "Zustand", "TypeScript"],
      githubUrl: "https://github.com/itsarshadahmad/socially",
      liveUrl: "https://socially-drab-three.vercel.app/",
    },
    {
      id: "4",
      title: "Velocity - Online Shoe Store",
      description:
        "A modern shoe e-commerce store with product listings, collections, search, filtering, cart, and authentication — fast, clean, and fully responsive UI.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
      techStack: ["Next.js", "TypeScript", "Shadcn/UI", "Zustand"],
      githubUrl: "https://github.com/itsarshadahmad/velocity",
      liveUrl: "https://velocity-nu-sooty.vercel.app/",
    },
  ],
  skills: [
    { name: "AWS", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "Kubernetes", category: "devops" },
    { name: "GitHub Actions", category: "devops" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "State Management (Zustand & Redux)", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "SCSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Linux", category: "tools" },
    { name: "ZenHub", category: "tools" },
    { name: "GIT & GitHub", category: "tools" },
    { name: "CMS", category: "tools" },
  ],
};
