import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import qadrLogo from "@/assets/qadr-logo.png";

const Header = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
      >
        <div className="container mx-auto flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={qadrLogo} alt="Qadr AI" className="h-8 w-auto" />
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
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:inline-flex"
              onClick={() => window.open('https://calendly.com/qadrai_com/30min', '_blank')}
            >
              Book a FREE Call
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => setShowVideoModal(true)}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Vertical Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="relative w-full max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Vertical video container - 9:16 aspect ratio */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9VGBsRnagxc?autoplay=1"
                title="Qadr AI Demo - HVAC Emergency"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Optional: Video title/description below */}
            <p className="text-white text-center mt-4 text-sm">
              🚨 HVAC Emergency Call Demo (2:40)
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
