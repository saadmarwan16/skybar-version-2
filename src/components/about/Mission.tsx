import { Target } from "lucide-react";
import type { FunctionComponent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Mission: FunctionComponent = () => {
  return (
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
            To provide seamless, integrated trade solutions that connect quality
            Turkish products with East African markets, while ensuring
            compliance, reliability, and value creation for all our partners.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default Mission;
