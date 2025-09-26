import {
  ArrowRight,
  Building2,
  Container,
  Package,
  Ship,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Import & Export Solutions",
      description:
        "Comprehensive trade facilitation connecting Turkish manufacturers with East African markets. We handle documentation, customs clearance, and regulatory compliance.",
      features: [
        "Customs Documentation",
        "Regulatory Compliance",
        "Trade Financing",
        "Market Entry Support",
      ],
    },
    {
      icon: Container,
      title: "Cargo Shipping & Logistics",
      description:
        "End-to-end shipping solutions with real-time tracking, secure packaging, and timely delivery across international waters.",
      features: [
        "Sea & Air Freight",
        "Real-time Tracking",
        "Secure Packaging",
        "Insurance Coverage",
      ],
    },
    {
      icon: Wrench,
      title: "Agricultural Machinery",
      description:
        "Specialized equipment sourcing and export from leading Turkish manufacturers to modernize African agriculture and boost productivity.",
      features: [
        "Equipment Sourcing",
        "Technical Training",
        "Maintenance Support",
        "Spare Parts Supply",
      ],
    },
    {
      icon: Building2,
      title: "Construction Materials",
      description:
        "High-quality Turkish construction materials and building solutions for infrastructure development across East Africa.",
      features: [
        "Material Sourcing",
        "Quality Assurance",
        "Technical Specifications",
        "Delivery Coordination",
      ],
    },
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Core Services
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive international trade solutions tailored to connect
              Turkish excellence with East African opportunities through our
              integrated approach.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="scale-in"
              delay={200 * index}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/30 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-gold rounded-lg mr-4 group-hover:shadow-gold transition-shadow">
                      <service.icon className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>

                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <Package className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        <span className="font-body text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleContactClick}
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-heading"
                  >
                    Get Custom Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center">
            <div className="bg-gradient-primary p-8 rounded-2xl text-white">
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Need Specialized Solutions?
              </h3>
              <p className="font-body text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Our experienced team provides customized trade solutions for
                unique requirements. Let's discuss how we can support your
                international business goals.
              </p>
              <Button
                onClick={handleContactClick}
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-heading font-semibold shadow-gold"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
