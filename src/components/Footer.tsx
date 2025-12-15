import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Built by Brandon</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brandon Developer. All rights reserved.
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Designed and developed with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
