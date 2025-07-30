const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Group travel planning shouldn't need{" "}
          <span className="text-primary">7 apps</span>
        </h2>
        
        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 max-w-3xl mx-auto">
          <p>
            Your group chat is flooded with flight screenshots. Expenses are scattered across Splitwise, Venmo, and random notes. Itineraries live in Google Docs that no one can find.
          </p>
          
          <p>
            Meanwhile, you're juggling WhatsApp threads, booking confirmations in your email, and trying to remember who paid for what.
          </p>
          
          <p className="text-foreground font-semibold text-xl">
            TripMate brings it all together in one beautiful, organized dashboard that actually makes group travel enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;