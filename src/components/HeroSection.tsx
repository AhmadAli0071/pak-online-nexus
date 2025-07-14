import { Button } from "@/components/ui/button";
import heroCityscape from "@/assets/hero-cityscape.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Hero Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-64 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroCityscape})` }}
      />
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-8 py-24 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-medium text-text-blue-dark mb-6">
            Welcome to Pakistan Online
          </h1>
          <p className="text-xl md:text-2xl text-text-blue-gray mb-12 max-w-2xl mx-auto">
            Your city's all‑in‑one hub for shopping, learning & community.
          </p>
          <Button 
            variant="pill" 
            size="xl" 
            className="text-lg font-medium px-12 py-4 h-14"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}