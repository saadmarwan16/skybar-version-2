"use client";

import { MessageSquare } from "lucide-react";
import type { FunctionComponent } from "react";
import { contactInformationIcons } from "@/app/(frontend)/icons";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import type { HomePage } from "@/payload-types";
import ContactForm from "./contact/ContactForm";

interface ContactProps {
  contact: HomePage["contact"];
}

const Contact: FunctionComponent<ContactProps> = ({ contact }) => {
  return (
    <section id="contact" className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              {contact.title}
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {contact.subtitle}
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
                      {contact.form_title}
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

              {contact.items?.map((info, index) => {
                const Icon = contactInformationIcons[info.icon];

                return (
                  <AnimatedSection
                    key={info.title}
                    animation="fade-up"
                    delay={100 * index}
                  >
                    <Card className="border-border/50 hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div
                            className={`p-3 bg-accent rounded-lg mr-4 ${
                              index % 2 === 0
                                ? "text-primary"
                                : "text-secondary"
                            }`}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                              {info.title}
                            </h4>
                            {/* {info.details.map((detail) => (
                            <p
                              key={detail}
                              className="font-body text-muted-foreground text-sm leading-relaxed"
                            >
                              {detail}
                            </p>
                          ))} */}
                            <p className="font-body text-muted-foreground text-sm leading-relaxed">
                              {info.contact}
                            </p>
                            {info.message && (
                              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                                {info.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
