import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const sentences = [
    'Computer Science Student',
    'Passionate Learner',
    'Future Full-Stack Developer',
    'Future Mobile-App Developer'
  ];
  
  useEffect(() => {
    const currentSentence = sentences[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentSentence.length) {
          setDisplayText(currentSentence.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentSentence.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, sentences]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="gradient-text">Hello,</span>
            <br />
            <span className="text-foreground">I'm Alex</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground font-mono h-8">
            <span className="border-r-2 border-primary animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. 
            I build beautiful, functional applications and solve complex problems 
            with clean, efficient programming.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground glow-secondary transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 glass-card hover:glow-primary transition-all duration-300 hover:scale-110 group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full glass-card hover:glow-primary transition-all duration-300"
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;