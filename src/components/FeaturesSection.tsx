import { Card } from "@/components/ui/card";
import { 
  MapPin, 
  DollarSign, 
  Bed, 
  Shield, 
  MessageCircle, 
  Camera 
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "AI Itinerary Builder with Route Guidance",
    description: "Smart suggestions for activities, dining, and transportation routes based on your group's interests and travel style."
  },
  {
    icon: DollarSign,
    title: "Built-in Expense Splitter",
    description: "Track shared expenses, split bills automatically, and settle up seamlessly without leaving the app."
  },
  {
    icon: Bed,
    title: "Stays & Transport in One View",
    description: "Compare and book accommodations and flights directly in TripMate with group approval features."
  },
  {
    icon: Shield,
    title: "Secure Document Vault",
    description: "Store passports, tickets, reservations, and important documents safely with easy sharing to group members."
  },
  {
    icon: MessageCircle,
    title: "Group Chat with Polls & Notes",
    description: "Make group decisions faster with built-in polls, shared notes, and context-aware trip discussions."
  },
  {
    icon: Camera,
    title: "Shared Trip Photo Gallery",
    description: "Everyone's photos in one place, automatically organized by location and date with easy sharing options."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-primary/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-accent/6 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center space-y-8 mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground scroll-reveal">
            Everything you need, beautifully organized
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-reveal" style={{animationDelay: '0.1s'}}>
            Six powerful features that transform chaotic group planning into smooth collaboration.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 md:p-10 bg-feature-gradient border-border/50 hover:shadow-premium transition-all duration-500 hover:scale-[1.05] group hover:border-primary/30 backdrop-blur-sm scroll-reveal"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;