const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 px-6 relative" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute inset-0 bg-muted/20"></div>
      <div className="container max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight" data-aos="fade-up" data-aos-delay="100">
          Group travel planning shouldn't need{" "}
          <span className="bg-hero-gradient bg-clip-text text-transparent">7 apps</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up" data-aos-delay="200">
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="text-muted-foreground">
                • Flight screenshots flooding your chat
              </div>
              <div className="text-muted-foreground">
                • Expenses scattered across 3+ apps
              </div>
              <div className="text-muted-foreground">
                • Lost itineraries in Google Docs
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-muted-foreground">
                • WhatsApp threads everywhere
              </div>
              <div className="text-muted-foreground">
                • Email booking chaos
              </div>
              <div className="text-muted-foreground">
                • Who paid for what?
              </div>
            </div>
          </div>
          
          <p className="text-foreground font-semibold text-xl md:text-2xl text-center pt-6" data-aos="fade-in" data-aos-delay="300">
            TripMate brings it all together in one beautiful dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;