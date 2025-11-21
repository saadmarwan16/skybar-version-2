import type { FunctionComponent } from "react";
import { impactIcons } from "@/app/(frontend)/icons";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import type { HomePage } from "@/payload-types";

interface StatsProps {
  stats: HomePage["impact"];
}

const Stats: FunctionComponent<StatsProps> = ({ stats: { title, stats } }) => {
  return (
    <AnimatedSection animation="fade-up" delay={200}>
      <div className="bg-gradient-primary p-8 rounded-2xl text-white">
        <h3 className="font-heading text-2xl font-semibold text-center mb-8">
          {title}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => {
            const Icon = impactIcons[stat.icon];

            return (
              <AnimatedSection
                key={stat.value}
                animation="scale-in"
                delay={150 * index}
              >
                <div className="text-center">
                  <div className="p-3 bg-white/10 rounded-lg inline-flex mb-3">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-heading text-sm font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="font-body text-xs text-primary-foreground/70">
                    {stat.subtitle}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Stats;
