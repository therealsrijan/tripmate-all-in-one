import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import WaitlistSection from "@/components/WaitlistSection";
import OutroSection from "@/components/OutroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
