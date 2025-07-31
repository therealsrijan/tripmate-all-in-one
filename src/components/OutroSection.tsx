const OutroSection = () => {
  return (
    <section className="py-24 px-6 border-t border-border/30 bg-muted/20 backdrop-blur-sm relative">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/3 w-24 h-24 bg-primary/6 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-accent/8 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <p className="text-2xl md:text-3xl text-muted-foreground italic font-light leading-relaxed scroll-reveal">
          If you've planned a trip before, you know why this matters.
        </p>
      </div>
    </section>
  );
};

export default OutroSection;