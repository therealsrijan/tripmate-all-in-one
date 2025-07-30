import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      
      <div className="container max-w-6xl mx-auto text-center space-y-8 relative z-10">
        {/* Main headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Everything your trip needs —{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              in one box
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TripMate takes care of the planning, coordination, and chaos — so you can focus on the fun.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
            <a href="https://tally.so/r/3lkZzp" target="_blank" rel="noopener noreferrer">
              <ArrowRight className="w-5 h-5" />
              Join the Waitlist
            </a>
          </Button>
        </div>

        {/* Abstract visual elements */}
        <div className="pt-6 pb-4 relative">
          <div className="relative mx-auto max-w-4xl h-16 flex items-center justify-center">
            {/* Floating abstract elements */}
            <div className="absolute top-2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-2 right-1/3 w-12 h-12 bg-accent/10 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-primary-glow/15 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;