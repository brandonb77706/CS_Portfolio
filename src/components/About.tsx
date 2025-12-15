import { Code, Zap, Users, Target } from "lucide-react";
import headshotImage from "@/assets/brandonHeadshot.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code is my passion.",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description:
        "Quickly adapt to new technologies and programming paradigms.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Collaborative approach to solving complex problems together.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results and exceeding expectations.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I’m an ambitious Computer Science student at Eastern Michigan
            University, studying on a full-ride Presidential Scholarship. I
            specialize in full-stack and mobile app development, driven by a
            love for creating engaging, user-friendly digital experiences. With
            hands-on experience building interactive applications using modern
            technologies, I’m dedicated to transforming creative ideas into
            impactful, high-quality solutions.
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
                    alt="Brandon Brown - Computer Science Student"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-primary rounded-2xl opacity-20 blur-lg"></div>
              </div>

              <h3 className="text-2xl font-semibold mb-2 gradient-text">
                Brandon Brown{" "}
              </h3>
              <p className="text-muted-foreground mb-4 font-mono">
                CS Student & Aspiring Developer
              </p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Southfield, MI</p>
                <p>🎓 Computer Science Major</p>
                <p>💻 Full-Stack/mobile Dev Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before my senior year of high school, I discovered my passion
                for computer science by learning Python through Codecademy.
                After falling in love with code, I decided to start Codecademy’s
                front-end engineering course during my senior year of high
                school. This early exposure gave me two years of coding
                experience before starting University. I’m committed to pushing
                my limits and striving for excellence in everything I do.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I enjoy playing basketball and other sports, as
                well as video games, watching TV shows, and playing the drums. I
                also love hanging out with friends and meeting new people. I’m
                excited to see where Computer Science takes me and to meet cool
                people along the way.
              </p>
            </div>

            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Education & Goals
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Bachelor of Science in Computer Science{" "}
                </strong>
                <br />
                Expected Graduation: 2028
                <br />
                GPA: 3.97/4.0
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My goal is to earn a software development internship and learn
                with hands on experience to, grow into a full-stack or mobile
                developer, and lead projects that connect technology with human
                needs.
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
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
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
