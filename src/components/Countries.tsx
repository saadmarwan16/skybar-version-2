"use client";

import { Building, MapPin, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Countries = () => {
  const countries = [
    {
      name: "Uganda",
      flag: "🇺🇬",
      opportunities:
        "Agricultural machinery, construction materials, textiles, and automotive parts",
      highlights: [
        "Growing construction sector",
        "Agricultural modernization",
        "Infrastructure development",
      ],
      marketSize: "Growing Economy",
      population: "47M+ People",
    },
    {
      name: "Kenya",
      flag: "🇰🇪",
      opportunities:
        "Industrial equipment, building materials, food processing machinery, and technology",
      highlights: [
        "East Africa's business hub",
        "Strong manufacturing base",
        "Tech innovation center",
      ],
      marketSize: "Major Economy",
      population: "54M+ People",
    },
    {
      name: "Tanzania",
      flag: "🇹🇿",
      opportunities:
        "Mining equipment, agricultural tools, construction machinery, and consumer goods",
      highlights: [
        "Rich natural resources",
        "Mining industry growth",
        "Agricultural expansion",
      ],
      marketSize: "Resource Rich",
      population: "61M+ People",
    },
    {
      name: "DR Congo",
      flag: "🇨🇩",
      opportunities:
        "Mining machinery, construction equipment, power generation, and infrastructure materials",
      highlights: [
        "Vast mineral resources",
        "Infrastructure needs",
        "Energy sector development",
      ],
      marketSize: "Mineral Wealth",
      population: "95M+ People",
    },
    {
      name: "South Sudan",
      flag: "🇸🇸",
      opportunities:
        "Construction materials, agricultural equipment, power solutions, and basic infrastructure",
      highlights: [
        "Reconstruction opportunities",
        "Oil industry development",
        "Basic infrastructure needs",
      ],
      marketSize: "Emerging Market",
      population: "11M+ People",
    },
    {
      name: "Rwanda",
      flag: "🇷🇼",
      opportunities:
        "Technology equipment, construction materials, agricultural machinery, and green energy",
      highlights: [
        "Digital transformation",
        "Sustainable development",
        "Business-friendly policies",
      ],
      marketSize: "Innovation Hub",
      population: "13M+ People",
    },
  ];

  return (
    <section className="py-section bg-accent/30">
      <div className="max-w-container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Markets We Serve
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strategic presence across East Africa's most dynamic economies,
              connecting Turkish excellence with regional growth opportunities.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {countries.map((country, index) => (
            <AnimatedSection
              key={country.name}
              animation="fade-up"
              delay={150 * index}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-border/50 hover:border-secondary/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-4xl mr-3">{country.flag}</span>
                      <h3 className="font-heading text-xl font-semibold text-primary">
                        {country.name}
                      </h3>
                    </div>
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      {country.population}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {country.marketSize}
                    </Badge>
                  </div>

                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                    <strong>Key Opportunities:</strong> {country.opportunities}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-heading text-sm font-semibold text-primary flex items-center">
                      <Building className="h-4 w-4 mr-2" />
                      Market Highlights
                    </h4>
                    <ul className="space-y-1">
                      {country.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="font-body text-xs text-muted-foreground flex items-center"
                        >
                          <div className="w-1 h-1 bg-secondary rounded-full mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="text-center">
            <div className="bg-gradient-primary p-8 rounded-2xl text-white max-w-4xl mx-auto">
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Regional Expertise & Local Partnerships
              </h3>
              <p className="font-body text-primary-foreground/90 mb-6 leading-relaxed">
                Our deep understanding of East African markets, combined with
                strong local partnerships, ensures smooth market entry and
                sustainable business relationships. We navigate cultural
                nuances, regulatory frameworks, and business customs to maximize
                your success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedSection animation="scale-in" delay={100}>
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-secondary mb-1">
                      6+
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      Countries Served
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={200}>
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-secondary mb-1">
                      280M+
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      Market Access
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={300}>
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-secondary mb-1">
                      Local
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      Partnerships
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Countries;
