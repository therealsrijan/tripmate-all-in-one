import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import WaitlistSection from "@/components/WaitlistSection";
import OutroSection from "@/components/OutroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-travel-bg travel-bg-pattern relative overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-[15%] w-24 h-24 bg-accent/8 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-[20%] w-40 h-40 bg-primary-glow/4 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 right-[25%] w-28 h-28 bg-accent/6 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <ComingSoonSection />
      <WaitlistSection />
      <OutroSection />
    </div>
  );
};

export default Index;
