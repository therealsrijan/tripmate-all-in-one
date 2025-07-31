import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Gift } from "lucide-react";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 px-6 relative">
      <div className="container max-w-4xl mx-auto text-center space-y-16">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground">
          We're opening early access soon
        </h2>
        
        <div className="bg-card-gradient rounded-3xl p-10 md:p-16 shadow-feature border border-border/50 hover:border-primary/20 transition-all duration-300">
          {/* Perks grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Beta Access</h3>
              <p className="text-sm text-muted-foreground">Be among the first to use TripMate</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Feedback Sessions</h3>
              <p className="text-sm text-muted-foreground">Help shape the product directly</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Lifetime Benefits</h3>
              <p className="text-sm text-muted-foreground">Special pricing and premium features</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-4">
            <Button variant="waitlist" size="lg" className="text-lg px-10 py-7 h-auto shadow-card hover:shadow-feature transition-all duration-300" asChild>
              <a href="https://tally.so/r/3lkZzp" target="_blank" rel="noopener noreferrer">
                <ArrowRight className="w-5 h-5" />
                Join the Waitlist
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Join 2,000+ travelers already on the list
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;