import type { FunctionComponent } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { stats } from "@/lib/about";

const Stats: FunctionComponent = () => {
  return (
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
  );
};

export default Stats;
