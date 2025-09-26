import {
  Award,
  Eye,
  Globe,
  Handshake,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      description:
        "We build lasting relationships through transparency, honesty, and ethical business practices in every transaction.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description:
        "Deep understanding of international markets, regulations, and cultural nuances spanning Turkey and East Africa.",
    },
    {
      icon: Handshake,
      title: "Partnership Focus",
      description:
        "We believe in mutual growth and long-term partnerships that benefit all stakeholders in the value chain.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Committed to delivering superior service quality and connecting partners with premium Turkish products.",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Trusted Partners",
      description: "Manufacturers and suppliers",
    },
    {
      icon: Globe,
      value: "6",
      label: "Countries",
      description: "Active market presence",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      description: "Successful trade facilitation",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Compliance",
      description: "Regulatory adherence",
    },
  ];

  return (
    <section className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        {/* Company Overview */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              About Skybar Dış Ticaret
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              We are a premier international trade company based in Turkey,
              specializing in connecting Turkish manufacturers with emerging
              markets across East Africa. Our mission is to bridge continents
              through strategic partnerships and reliable trade solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection animation="slide-left" delay={200}>
            <Card className="border-border/50 hover:shadow-md transition-shadow h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                    <Eye className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To become the leading bridge between Turkish innovation and
                  African opportunity, fostering sustainable economic growth and
                  mutual prosperity through strategic international trade
                  partnerships.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={400}>
            <Card className="border-border/50 hover:shadow-md transition-shadow h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-gold rounded-lg mr-4">
                    <Target className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To provide seamless, integrated trade solutions that connect
                  quality Turkish products with East African markets, while
                  ensuring compliance, reliability, and value creation for all
                  our partners.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mb-16">
            <h3 className="font-heading text-3xl font-semibold text-primary text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection
                  key={value.title}
                  animation="scale-in"
                  delay={100 * index}
                >
                  <Card className="text-center border-border/50 hover:shadow-md hover:border-secondary/30 transition-all duration-300 group h-full">
                    <CardContent className="p-6">
                      <div className="p-4 bg-accent rounded-full inline-flex mb-4 group-hover:bg-secondary/10 transition-colors">
                        <value.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <h4 className="font-heading text-lg font-semibold text-primary mb-3">
                        {value.title}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="font-heading text-2xl font-semibold text-center mb-8">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection
                  key={stat.value}
                  animation="scale-in"
                  delay={150 * index}
                >
                  <div className="text-center">
                    <div className="p-3 bg-white/10 rounded-lg inline-flex mb-3">
                      <stat.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-3xl font-heading font-bold text-secondary mb-1">
                      {stat.value}
                    </div>
                    <div className="font-heading text-sm font-medium mb-1">
                      {stat.label}
                    </div>
                    <div className="font-body text-xs text-primary-foreground/70">
                      {stat.description}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-16 text-center">
            <h3 className="font-heading text-3xl font-semibold text-primary mb-8">
              Why Choose Skybar?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="p-6">
                  <h4 className="font-heading text-xl font-semibold text-primary mb-4">
                    Integrated Solutions
                  </h4>
                  <p className="font-body text-muted-foreground">
                    End-to-end trade facilitation from sourcing to delivery,
                    handling all complexities of international commerce under
                    one roof.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="p-6">
                  <h4 className="font-heading text-xl font-semibold text-primary mb-4">
                    Market Knowledge
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Deep expertise in both Turkish manufacturing capabilities
                    and East African market dynamics, ensuring optimal matching
                    of supply and demand.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="p-6">
                  <h4 className="font-heading text-xl font-semibold text-primary mb-4">
                    Reliable Partnerships
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Established relationships with trusted manufacturers,
                    logistics providers, and local partners ensuring smooth
                    operations across all markets.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
