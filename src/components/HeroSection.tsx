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
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
            <ArrowRight className="w-5 h-5" />
            Join the Waitlist
          </Button>
        </div>

        {/* Abstract visual elements */}
        <div className="pt-12 pb-8 relative">
          <div className="relative mx-auto max-w-4xl h-64 flex items-center justify-center">
            {/* Floating abstract elements */}
            <div className="absolute top-8 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-8 right-1/3 w-24 h-24 bg-accent/15 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary-glow/20 rounded-full blur-lg"></div>
            
            {/* Central abstract shape */}
            <div className="w-48 h-48 bg-hero-gradient opacity-10 rounded-3xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;