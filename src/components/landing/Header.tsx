import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import qadrLogo from "@/assets/qadr-logo.png";

const Header = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#roi-calculator", label: "ROI Calculator" },
    { href: "#pricing", label: "Pricing" },
    { href: "#services", label: "Services" },
    { href: "#demo", label: "Demo" },
    { href: "#benefits", label: "Benefits" }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2">
            <img src={qadrLogo} alt="Qadr AI" className="h-8 w-auto" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.open('https://calendly.com/qadrai_com', '_blank')}
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

          {/* Mobile Buttons & Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="h-9 px-3"
              onClick={() => window.open('https://calendly.com/qadrai_com', '_blank')}
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-xs">Call</span>
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              className="h-9 px-3"
              onClick={() => setShowVideoModal(true)}
            >
              <span className="text-xs">Watch Demo</span>
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-border/30 overflow-hidden"
            >
              <nav className="container mx-auto py-4 px-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
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
