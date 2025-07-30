const ProblemSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-muted/20"></div>
      <div className="container max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Group travel planning shouldn't need{" "}
          <span className="text-primary">7 apps</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
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
          
          <p className="text-foreground font-semibold text-xl text-center pt-4">
            TripMate brings it all together in one beautiful dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;