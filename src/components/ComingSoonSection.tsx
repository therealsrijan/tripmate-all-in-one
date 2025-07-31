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
    <section id="coming-soon" className="py-32 px-6 bg-muted/30 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-36 h-36 bg-accent/6 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-primary/8 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      <div className="container max-w-4xl mx-auto text-center space-y-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground scroll-reveal">
          We're just getting started
        </h2>
        
        <div className="bg-card-gradient rounded-3xl p-10 md:p-16 shadow-premium backdrop-blur-sm border border-white/20 scroll-reveal" style={{animationDelay: '0.1s'}}>
          <p className="text-xl text-muted-foreground mb-10">
            These features are already in development and coming to early access users first:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 text-left p-4 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 scroll-reveal"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;