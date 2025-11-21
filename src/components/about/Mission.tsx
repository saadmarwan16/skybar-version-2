import { Target } from "lucide-react";
import type { FunctionComponent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

interface MissionProps {
  mission: string;
}

const Mission: FunctionComponent<MissionProps> = ({ mission }) => {
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
            {mission}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default Mission;
