"use client";

import { AnimatedSection } from "@/hooks/useScrollAnimation";
import CoreValues from "./about/CoreValues";
import Mission from "./about/Mission";
import Stats from "./about/Stats";
import Vision from "./about/Vision";
import WhyChooseUs from "./about/WhyChooseUs";

const About = () => {
  return (
    <section className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        {/* Company Overview */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              About Skybar Dış Ticaret
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              We are a premier international trade company based in Turkey,
              specializing in connecting Turkish manufacturers with emerging
              markets across East Africa. Our mission is to bridge continents
              through strategic partnerships and reliable trade solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Vision />

          <Mission />
        </div>

        <CoreValues />

        <Stats />

        <WhyChooseUs />
      </div>
    </section>
  );
};

export default About;
