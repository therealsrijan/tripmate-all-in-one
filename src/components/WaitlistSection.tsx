import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Gift } from "lucide-react";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-32 px-6 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-48 h-48 bg-primary/6 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-accent/8 rounded-full blur-2xl animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>
      <div className="container max-w-4xl mx-auto text-center space-y-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground scroll-reveal">
          We're opening early access soon
        </h2>
        
        <div className="bg-card-gradient rounded-3xl p-12 md:p-20 shadow-premium border border-white/30 hover:border-primary/30 transition-all duration-500 backdrop-blur-sm scroll-reveal" style={{animationDelay: '0.1s'}}>
          {/* Perks grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4 group hover:scale-105 transition-all duration-300 scroll-reveal" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Beta Access</h3>
              <p className="text-muted-foreground">Be among the first to use TripMate</p>
            </div>
            
            <div className="space-y-4 group hover:scale-105 transition-all duration-300 scroll-reveal" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Feedback Sessions</h3>
              <p className="text-muted-foreground">Help shape the product directly</p>
            </div>
            
            <div className="space-y-4 group hover:scale-105 transition-all duration-300 scroll-reveal" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Lifetime Benefits</h3>
              <p className="text-muted-foreground">Special pricing and premium features</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-6 scroll-reveal" style={{animationDelay: '0.5s'}}>
            <Button variant="waitlist" size="lg" className="text-lg px-12 py-8 h-auto shadow-premium hover:shadow-card hover:scale-105 transition-all duration-300 group" asChild>
              <a href="https://tally.so/r/3lkZzp" target="_blank" rel="noopener noreferrer">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Join the Waitlist
              </a>
            </Button>
            <p className="text-muted-foreground">
              Join 2,000+ travelers already on the list
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;