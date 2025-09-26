import { ArrowRight, Globe, Ship, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/hero-bg.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Connecting Turkish
            <span className="text-secondary block">Manufacturers</span>
            to the Global Market
          </h1>

          <p className="font-body text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
            Seamless and reliable international trade solutions bridging Turkey
            and East Africa with expertise, integrity, and innovative logistics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-heading font-semibold px-8 py-4 text-lg shadow-gold transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-foreground hover:bg-white/10 hover:text-white/90 hover:border-white/50 font-heading font-semibold px-8 py-4 text-lg backdrop-blur-sm"
            >
              View Our Impact
              <Globe className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Ship className="h-10 w-10 text-secondary mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                Reliable Shipping
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Secure cargo delivery across continents
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Globe className="h-10 w-10 text-secondary mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                6 Countries Served
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Extensive East African network
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <TrendingUp className="h-10 w-10 text-secondary mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                Proven Growth
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Connecting markets for mutual prosperity
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
