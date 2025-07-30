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
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Everything you need, beautifully organized
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six powerful features that transform chaotic group planning into smooth collaboration.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-feature-gradient border-border/50 hover:shadow-soft transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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