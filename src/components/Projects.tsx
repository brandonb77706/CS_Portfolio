import { useEffect, useRef, useState } from "react";
import {
  Cloud,
  Code,
  ExternalLink,
  Film,
  Github,
  ListChecks,
  Music,
  Sparkles,
  Trophy,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  stack: string;
  highlights: string[];
  tags: string[];
  icon: typeof Code;
  badge?: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Gig Driver Peak Time Optimizer",
    stack: "Next.js · FastAPI · MongoDB · Base44 AI",
    badge: "Hackathon Winner",
    highlights: [
      "Engineered a FastAPI analytics service using pre-aggregation to serve real-time insights in under 200ms.",
      "Built a full-stack system processing multi-dimensional earnings data to identify peak revenue windows and generate scheduling recommendations.",
      "Built a real-time analytics dashboard in Next.js + TypeScript to surface earnings trends and AI-driven recommendations.",
      "Designed data pipelines and prompts for an AI recommendation engine, converting raw earnings data into actionable guidance.",
    ],
    tags: ["Next.js", "FastAPI", "MongoDB", "TypeScript", "AI"],
    icon: TrendingUp,
    githubUrl: "https://github.com/brandonb77706/hackathon",
  },
  {
    id: 2,
    title: "AWS Document Processing Pipeline",
    stack: "Python · AWS (S3, Lambda, Textract, SQS) · Terraform",
    highlights: [
      "Designed and built a serverless document processing pipeline in Python that ingests files through S3, triggers Lambda functions, and extracts text with Textract.",
      "Decoupled processing stages with SQS queues to isolate failures and enable automatic retries.",
      "Provisioned infrastructure as code with Terraform, configuring VPC networking and least-privilege IAM policies.",
    ],
    tags: ["Python", "AWS", "Terraform", "Lambda", "Serverless"],
    icon: Cloud,
    githubUrl: "https://github.com/brandonb77706/aws-document-processor",
  },
  {
    id: 3,
    title: "AI-Generated Coding Quiz Platform",
    stack: "React · TypeScript · FastAPI · PostgreSQL · OpenAI",
    highlights: [
      "Built a full-stack web application that generates AI-powered coding challenges using OpenAI APIs.",
      "Built a type-safe React + TypeScript frontend and a high-performance FastAPI backend with REST APIs.",
      "Achieved sub-millisecond endpoint latency and ~5ms database query time through optimized SQL queries and indexing.",
      "Separated AI inference from application logic, isolating the ~97% of latency attributable to model inference (~2.05s total).",
    ],
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI"],
    icon: Sparkles,
    githubUrl: "https://github.com/brandonb77706/code_challenge_generator",
  },
  {
    id: 4,
    title: "Spotify Playlist Generator",
    stack: "React · Node.js · JavaScript",
    highlights: [
      "Implemented production-grade logging and performance monitoring, achieving 0–2ms server-side latency on cached routes.",
      "Integrated OAuth 2.0 and the Spotify Web API to authenticate users and dynamically manage playlists.",
      "Reduced playlist creation time by 20% with a React frontend supporting real-time interactions.",
    ],
    tags: ["React", "Node.js", "Spotify API", "OAuth"],
    icon: Music,
    githubUrl: "https://github.com/brandonb77706/sonzaify",
  },
  {
    id: 5,
    title: "Budgeting Mobile App",
    stack: "React Native · Express.js · Firebase",
    highlights: [
      "Built a cross-platform budgeting app with secure financial account linking via the Plaid API.",
      "Implemented real-time expense tracking across spending categories.",
    ],
    tags: ["React Native", "TypeScript", "Express.js", "Firebase", "Plaid"],
    icon: Wallet,
    githubUrl: "https://github.com/brandonb77706/budgetly",
  },
  {
    id: 6,
    title: "Movie Finder Mobile App",
    stack: "React Native · Appwrite · TypeScript",
    highlights: [
      "Built a cross-platform movie discovery app for searching films and viewing detailed information.",
      "Backed by Appwrite to manage user data and power a popularity-based algorithm for surfacing trending movies.",
    ],
    tags: ["React Native", "Appwrite", "TypeScript", "TailwindCSS"],
    icon: Film,
    githubUrl: "https://github.com/brandonb77706/movie_app/",
  },
  {
    id: 7,
    title: "Full-Stack Task Manager",
    stack: "React · Node.js · MongoDB · Express",
    highlights: [
      "Built a task management app for organizing work through prioritized tasks and deadline tracking.",
      "Persisted user accounts and task data in MongoDB behind a Node.js backend.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"],
    icon: ListChecks,
    githubUrl: "https://github.com/brandonb77706/web-task-manager",
  },
  {
    id: 8,
    title: "Portfolio Website",
    stack: "React · TypeScript · Tailwind · Vite",
    highlights: [
      "A responsive portfolio site showcasing my projects and skills.",
      "Built with modern tooling and optimized for performance and SEO.",
    ],
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    icon: Code,
    githubUrl: "https://github.com/brandonb77706/CS_Portfolio",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and
            problem-solving approaches. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const hasLinks =
              (project.githubUrl && project.githubUrl !== "#") ||
              (project.liveUrl && project.liveUrl !== "#");

            return (
              <article
                key={project.id}
                className="glass-card p-6 md:p-7 hover-lift group flex flex-col transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${Math.min(index, 5) * 0.08}s`,
                }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 text-primary shrink-0 transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-warning/10 border border-warning/40 text-warning font-mono text-[0.65rem] uppercase tracking-wider whitespace-nowrap">
                          <Trophy className="w-3 h-3" />
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-muted-foreground mt-1.5">
                      {project.stack}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags pinned to the bottom so cards line up in the grid */}
                <div className="mt-auto pt-4 border-t border-glass-border/40">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {hasLinks && (
                    <div className="flex gap-3 mt-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            asChild
          >
            <a
              href="https://github.com/brandonb77706"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
