import type { FunctionComponent } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const WhyChooseUs: FunctionComponent = () => {
  return (
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
                handling all complexities of international commerce under one
                roof.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="p-6">
              <h4 className="font-heading text-xl font-semibold text-primary mb-4">
                Market Knowledge
              </h4>
              <p className="font-body text-muted-foreground">
                Deep expertise in both Turkish manufacturing capabilities and
                East African market dynamics, ensuring optimal matching of
                supply and demand.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="p-6">
              <h4 className="font-heading text-xl font-semibold text-primary mb-4">
                Reliable Partnerships
              </h4>
              <p className="font-body text-muted-foreground">
                Established relationships with trusted manufacturers, logistics
                providers, and local partners ensuring smooth operations across
                all markets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;
