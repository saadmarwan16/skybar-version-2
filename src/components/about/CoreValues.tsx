import type { FunctionComponent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { values } from "@/lib/about";

const CoreValues: FunctionComponent = () => {
  return (
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
  );
};

export default CoreValues;
