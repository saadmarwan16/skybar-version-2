"use client";

import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { contactInfo } from "@/lib/contactInfo";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Partner With Us Today
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to expand your business across international markets? Get in
              touch with our experienced team for customized trade solutions and
              market insights.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div>
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                      <MessageSquare className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-primary">
                      Get In Touch
                    </h3>
                  </div>

                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="slide-right" delay={400}>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => (
                <AnimatedSection
                  key={info.title}
                  animation="fade-up"
                  delay={100 * index}
                >
                  <Card className="border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div
                          className={`p-3 bg-accent rounded-lg mr-4 ${info.color}`}
                        >
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail) => (
                            <p
                              key={detail}
                              className="font-body text-muted-foreground text-sm leading-relaxed"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
