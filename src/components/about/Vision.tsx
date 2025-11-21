import { Eye } from "lucide-react";
import type { FunctionComponent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

interface VisionProps {
  vision: string;
}

const Vision: FunctionComponent<VisionProps> = ({ vision }) => {
  return (
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
            {vision}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default Vision;
