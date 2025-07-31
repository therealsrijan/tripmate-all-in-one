import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      
      <div className="container max-w-6xl mx-auto text-center space-y-8 relative z-10">
        {/* Main headline */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-fade-in">
            Everything your trip needs —{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              in one box
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            TripMate takes care of the planning, coordination, and chaos — so you can focus on the fun.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button variant="hero" size="lg" className="text-lg px-10 py-7 h-auto shadow-feature hover:shadow-card transition-all duration-300" asChild>
            <a href="https://tally.so/r/3lkZzp" target="_blank" rel="noopener noreferrer">
              <ArrowRight className="w-5 h-5" />
              Join the Waitlist
            </a>
          </Button>
        </div>

        {/* Abstract visual elements */}
        <div className="pt-8 pb-6 relative animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="relative mx-auto max-w-5xl h-20 flex items-center justify-center">
            {/* Floating abstract elements */}
            <div className="absolute top-2 left-1/4 w-20 h-20 bg-primary/8 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-2 right-1/3 w-16 h-16 bg-accent/12 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary-glow/20 rounded-full blur-md animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-0 left-1/3 w-6 h-6 bg-hero-gradient rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-0 left-1/2 w-8 h-8 bg-accent/15 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;