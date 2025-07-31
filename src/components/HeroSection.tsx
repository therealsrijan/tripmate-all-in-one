import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32 overflow-hidden">
      {/* Enhanced background with travel elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-8"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-tl from-accent/8 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container max-w-6xl mx-auto text-center space-y-8 relative z-10">
        {/* Main headline */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-fade-in-up">
            Everything your trip needs —{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              in one box
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            TripMate takes care of the planning, coordination, and chaos — so you can focus on the fun.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-6 animate-scale-in" style={{animationDelay: '0.4s'}}>
          <Button variant="hero" size="lg" className="text-lg px-10 py-7 h-auto shadow-premium hover:shadow-card hover:scale-105 transition-all duration-300 group" asChild>
            <a href="https://tally.so/r/3lkZzp" target="_blank" rel="noopener noreferrer">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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