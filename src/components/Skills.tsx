import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-500 to-teal-500' },
        { name: 'Next.js', level: 75, color: 'from-gray-700 to-gray-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-600 to-green-400' },
        { name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-300' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-700 to-blue-500' },
        { name: 'MongoDB', level: 70, color: 'from-green-700 to-green-500' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-600 to-orange-400' },
        { name: 'Docker', level: 65, color: 'from-blue-600 to-blue-400' },
        { name: 'AWS', level: 60, color: 'from-orange-500 to-yellow-500' },
        { name: 'Linux', level: 75, color: 'from-gray-600 to-gray-400' }
      ]
    }
  ];

  const technologies = [
    'JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'PostgreSQL',
    'MongoDB', 'Docker', 'AWS', 'Git', 'Linux', 'Next.js', 'Tailwind',
    'Express', 'REST APIs', 'GraphQL', 'Redis', 'Jest', 'Webpack', 'Vite'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies
            I use to bring ideas to life.
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cloud */}
        <div className="glass-card p-8 hover-lift">
          <h3 className="text-2xl font-semibold mb-6 text-center text-secondary">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: isVisible ? 'fadeInUp 0.5s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;