import { Code, Zap, Users, Target } from 'lucide-react';
import headshotImage from '@/assets/headshot.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapt to new technologies and programming paradigms.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to solving complex problems together.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results and exceeding expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student with a passion for technology and innovation.
            My journey in programming started with curiosity and has evolved into a deep love for creating
            digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Photo Section */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="glass-card p-8 hover-lift text-center">
              <div className="relative mb-6">
                <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden glow-primary">
                  <img
                    src={headshotImage}
                    alt="Alex Developer - Computer Science Student"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-primary rounded-2xl opacity-20 blur-lg"></div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-2 gradient-text">Alex Developer</h3>
              <p className="text-muted-foreground mb-4 font-mono">CS Student & Aspiring Developer</p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 San Francisco, CA</p>
                <p>🎓 Computer Science Major</p>
                <p>💻 Full-Stack Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing my Computer Science degree, I've developed a strong foundation in
                programming fundamentals, data structures, algorithms, and software engineering principles.
                I'm particularly interested in web development, artificial intelligence, and mobile applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to
                open-source projects, or brainstorming innovative solutions to everyday problems.
              </p>
            </div>
            
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Education & Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Bachelor of Science in Computer Science</strong><br />
                Expected Graduation: 2025<br />
                GPA: 3.8/4.0
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My goal is to become a full-stack developer and eventually lead innovative projects
                that bridge the gap between technology and human needs.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="glass-card p-6 hover-lift text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 glow-primary">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;