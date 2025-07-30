import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Gift } from "lucide-react";

const WaitlistSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          We're opening early access soon
        </h2>
        
        <div className="bg-card-gradient rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
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
            <Button variant="waitlist" size="lg" className="text-lg px-8 py-6 h-auto">
              <ArrowRight className="w-5 h-5" />
              Join the Waitlist
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