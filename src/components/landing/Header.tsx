import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">Q</span>
          </div>
          <span className="text-xl font-bold text-foreground">Qadr AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Book a Call
          </Button>
          <Button variant="hero" size="sm">
            Watch Demo
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
