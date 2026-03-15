import qadrLogo from "@/assets/qadr-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img src={qadrLogo} alt="Qadr AI" className="h-8 w-auto" />
          
          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#roi-calculator" className="hover:text-foreground transition-colors">ROI Calculator</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
            <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
          </nav>
          
          {/* Contact */}
          <div className="text-sm text-muted-foreground">
            info@qadrai.com
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Qadr AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
