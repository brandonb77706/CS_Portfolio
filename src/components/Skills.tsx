import { useEffect, useRef, useState } from "react";
import { Code2, Server, Database, GitBranch } from "lucide-react";

const tiers = {
  daily: {
    label: "Daily Driver",
    dot: "bg-primary",
    text: "text-primary",
    chip: "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_16px_hsl(var(--primary)/0.35)]",
  },
  proficient: {
    label: "Proficient",
    dot: "bg-secondary",
    text: "text-secondary",
    chip: "border-secondary/40 bg-secondary/10 text-secondary hover:bg-secondary/20 hover:border-secondary hover:shadow-[0_0_16px_hsl(var(--secondary)/0.35)]",
  },
  familiar: {
    label: "Familiar",
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
    chip: "border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:border-glass-border hover:text-foreground",
  },
} as const;

type TierKey = keyof typeof tiers;

const skillCategories: {
  title: string;
  icon: typeof Code2;
  groups: { tier: TierKey; skills: string[] }[];
}[] = [
  {
    title: "Frontend & Mobile",
    icon: Code2,
    groups: [
      {
        tier: "daily",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "HTML/CSS",
        ],
      },
      { tier: "proficient", skills: ["React Native", "Expo"] },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    groups: [
      { tier: "daily", skills: ["Node.js", "Express", "REST APIs"] },
      { tier: "proficient", skills: ["Python"] },
      { tier: "familiar", skills: ["Java"] },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    groups: [
      { tier: "proficient", skills: ["MongoDB", "Firebase"] },
      { tier: "familiar", skills: ["PostgreSQL"] },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: GitBranch,
    groups: [
      { tier: "daily", skills: ["Git", "GitHub"] },
      { tier: "proficient", skills: ["Jira"] },
      { tier: "familiar", skills: ["MongoDB Compass"] },
    ],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The languages, frameworks, and tools I build with — grouped by how
            often I actually reach for them.
          </p>
        </div>

        {/* Tier legend */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
          {(Object.keys(tiers) as TierKey[]).map((key) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${tiers[key].dot}`} />
              <span
                className={`font-mono text-xs uppercase tracking-widest ${tiers[key].text}`}
              >
                {tiers[key].label}
              </span>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const total = category.groups.reduce(
              (sum, group) => sum + group.skills.length,
              0
            );

            return (
              <div
                key={category.title}
                className="glass-card p-6 md:p-8 hover-lift transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${categoryIndex * 0.12}s`,
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-glass-border/40">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground truncate">
                      {category.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {total} technologies
                    </span>
                  </div>
                </div>

                {/* Tier groups */}
                <div className="space-y-5">
                  {category.groups.map((group) => (
                    <div key={group.tier}>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`w-1 h-3.5 rounded-full ${
                            tiers[group.tier].dot
                          }`}
                        />
                        <span
                          className={`font-mono text-[0.7rem] uppercase tracking-widest ${
                            tiers[group.tier].text
                          }`}
                        >
                          {tiers[group.tier].label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1.5 rounded-lg border text-sm font-medium cursor-default transition-all duration-300 ${
                              tiers[group.tier].chip
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
