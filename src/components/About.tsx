"use client";

import type { FunctionComponent } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import type { HomePage } from "@/payload-types";
import CoreValues from "./about/CoreValues";
import Mission from "./about/Mission";
import Stats from "./about/Stats";
import Vision from "./about/Vision";
import WhyChooseUs from "./about/WhyChooseUs";

interface AboutProps {
  about: HomePage["about"];
  values: HomePage["core-values"];
  stats: HomePage["impact"];
  why: HomePage["why"];
}

const About: FunctionComponent<AboutProps> = ({
  about,
  values,
  stats,
  why,
}) => {
  return (
    <section className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        {/* Company Overview */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              {about.title}
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {about.description}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Vision vision={about.vision} />

          <Mission mission={about.mission} />
        </div>

        <CoreValues values={values} />

        <Stats stats={stats} />

        <WhyChooseUs why={why} />
      </div>
    </section>
  );
};

export default About;
