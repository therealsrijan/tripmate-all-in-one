import { CheckCircle } from "lucide-react";

const upcomingFeatures = [
  "Joinable public trips",
  "Exportable trip PDFs", 
  "Smart reminders",
  "Real-time weather and routes",
  "Creator-style trip sharing"
];

const ComingSoonSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          We're just getting started
        </h2>
        
        <div className="bg-card-gradient rounded-2xl p-8 md:p-12 shadow-card">
          <p className="text-lg text-muted-foreground mb-8">
            These features are already in development and coming to early access users first:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-left"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;