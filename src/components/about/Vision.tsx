import { Eye } from "lucide-react";
import type { FunctionComponent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Vision: FunctionComponent = () => {
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
            To become the leading bridge between Turkish innovation and African
            opportunity, fostering sustainable economic growth and mutual
            prosperity through strategic international trade partnerships.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default Vision;
