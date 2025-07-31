const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              TravelKaro
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </a>
            <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors">
              Join Waitlist
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;