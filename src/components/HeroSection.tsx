import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

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

        {/* Hero image */}
        <div className="pt-12 pb-8">
          <div className="relative mx-auto max-w-4xl">
            <img
              src={heroDashboard}
              alt="TripMate dashboard interface showing trip planning features"
              className="w-full h-auto rounded-2xl shadow-feature transition-all duration-500 hover:scale-[1.02]"
            />
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;