import { ExternalLink, Github, Code, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import guruLogo from "@/assets/guru.png";
import guruIDE from "@/assets/guru-ide.png";
import sonzaify from "@/assets/sonzaify.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Learning platform",
      description:
        "Led the frontend development team for a real-time voice AI coding tutor built with React. Designed and implemented a custom Monaco Editor–based terminal interface, a responsive landing page, and key UI/UX features to deliver an engaging, adaptive learning experience.",
      image: guruIDE,
      githubUrl: "#",
      tags: ["Next.js", "TypeScript", "React", "Tailwind", "Python"],
      liveUrl: "https://frontend-gurueds-projects.vercel.app/",
      icon: Database,
      featured: true,
    },
    {
      id: 2,
      title: "Budgeting Mobile App",
      description:
        "A cross-platform budgeting app built with React Native, Express.js, and Firebase. Features include secure financial account linking via Plaid API and real-time expense tracking across categories.",
      image: "sonzaify",
      tags: ["React Native", "TypeScript", "Express.js", "Firebase", "Plaid"],
      githubUrl: "https://github.com/brandonb77706/budgetly",
      icon: Smartphone,
      featured: false,
    },
    {
      id: 3,
      title: "Spotify Playlist importer",
      description:
        "Developed a web application that enables users to generate and save custom Spotify playlists, reducing playlist creation time by 30%. Integrated OAuth 2.0 and the Spotify Web API for secure authentication and dynamic playlist management, and implemented a responsive React-based interface with robust asynchronous logic and error handling to ensure a smooth user experience.",
      image: sonzaify,
      tags: ["React", "Node.js", "Spotify API", "OAuth"],
      liveUrl: "#",
      githubUrl: "https://github.com/brandonb77706/sonzaify",
      icon: Database,
      featured: true,
    },
    {
      id: 4,
      title: "Movie Finder Mobile App",
      description:
        "Developed a cross-platform movie discovery mobile application that enables users to search for films, view detailed movie information, and explore a curated list of trending recommendations. Built with React Native for a seamless iOS and Android experience, and powered by an Appwrite backend to manage user data and implement a popularity-based algorithm for surfacing trending movies.",
      image: "",
      tags: ["React Native", "Appwrite", "TypeScript", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/brandonb77706/movie_app/",
      icon: Smartphone,
      featured: false,
    },
    {
      id: 5,
      title: "Full-Stack Task Manager",
      description:
        "Developed a full-stack task management web application designed to help users efficiently organize their work through prioritized tasks and deadline tracking. The application features a modern React frontend and a Node.js backend, with MongoDB used to securely persist user accounts and task data, enabling scalable, reliable, and user-centric task management.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MondgoDB", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com/brandonb77706/web-task-manager",
      icon: Code,
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and optimized for performance and SEO.",
      image: "/api/placeholder/600/400",
      tags: ["React", "TypeScript", "Tailwind", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Code,
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and
            problem-solving approaches. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-0 overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {project.image! ? (
                    // If it's a string URL
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // If it's an imported image
                    <project.icon className="w-16 h-16 text-primary/60" />
                  )}
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
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
                      className="border-secondary text-secondary hover:bg-secondary"
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
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-secondary">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="w-8 h-8 text-primary" />
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
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
