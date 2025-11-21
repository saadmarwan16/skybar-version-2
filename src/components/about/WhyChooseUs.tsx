import type { FunctionComponent } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import type { HomePage } from "@/payload-types";

interface WhyChooseUsProps {
  why: HomePage["why"];
}

const WhyChooseUs: FunctionComponent<WhyChooseUsProps> = ({ why }) => {
  return (
    <AnimatedSection animation="fade-up" delay={300}>
      <div className="mt-16 text-center">
        <h3 className="font-heading text-3xl font-semibold text-primary mb-8">
          {why.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {why.highlights?.map((highlight, index) => (
            <AnimatedSection
              key={highlight.title}
              animation="fade-up"
              delay={100 * (index + 1)}
            >
              <div className="p-6">
                <h4 className="font-heading text-xl font-semibold text-primary mb-4">
                  {highlight.title}
                </h4>
                <p className="font-body text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;
