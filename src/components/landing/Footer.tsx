const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">Q</span>
            </div>
            <span className="text-xl font-bold text-foreground">Qadr AI</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
            <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
          </nav>

          {/* Contact placeholder */}
          <div className="text-sm text-muted-foreground">
            contact@qadrai.com
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
