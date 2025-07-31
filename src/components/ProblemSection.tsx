const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/8 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      <div className="container max-w-4xl mx-auto text-center space-y-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight scroll-reveal">
          Group travel planning shouldn't need{" "}
          <span className="bg-hero-gradient bg-clip-text text-transparent">7 apps</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4 scroll-reveal" style={{animationDelay: '0.1s'}}>
              <div className="text-muted-foreground text-lg hover:text-foreground transition-colors duration-300 p-3 rounded-lg hover:bg-white/50 backdrop-blur-sm">
                • Flight screenshots flooding your chat
              </div>
              <div className="text-muted-foreground text-lg hover:text-foreground transition-colors duration-300 p-3 rounded-lg hover:bg-white/50 backdrop-blur-sm">
                • Expenses scattered across 3+ apps
              </div>
              <div className="text-muted-foreground text-lg hover:text-foreground transition-colors duration-300 p-3 rounded-lg hover:bg-white/50 backdrop-blur-sm">
                • Lost itineraries in Google Docs
              </div>
            </div>
            <div className="space-y-4 scroll-reveal" style={{animationDelay: '0.2s'}}>
              <div className="text-muted-foreground text-lg hover:text-foreground transition-colors duration-300 p-3 rounded-lg hover:bg-white/50 backdrop-blur-sm">
                • WhatsApp threads everywhere
              </div>
              <div className="text-muted-foreground text-lg hover:text-foreground transition-colors duration-300 p-3 rounded-lg hover:bg-white/50 backdrop-blur-sm">
                • Email booking chaos
              </div>
              <div className="text-muted-foreground text-lg hover:text-foreground transition-colors duration-300 p-3 rounded-lg hover:bg-white/50 backdrop-blur-sm">
                • Who paid for what?
              </div>
            </div>
          </div>
          
          <p className="text-foreground font-semibold text-xl md:text-2xl text-center pt-8 scroll-reveal" style={{animationDelay: '0.3s'}}>
            TripMate brings it all together in one beautiful dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;