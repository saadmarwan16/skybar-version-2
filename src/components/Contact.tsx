"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  country: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          company: data.company || "Not provided",
          country: data.country || "Not provided",
          message: data.message,
        },
        {
          publicKey,
        }
      );

      toast.success("Message Sent Successfully!", {
        description:
          "Thank you for your interest. Our team will contact you within 24 hours to discuss your international trade needs.",
      });

      reset();
    } catch (_) {
      toast.error("Failed to Send Message", {
        description:
          "We're sorry, but there was an error sending your message. Please try again or contact us directly.",
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Aksaray Mahallesi Tiryaki",
        "Hasanpaşa Cad. No: 50 /2",
        "Fatih, Istanbul, Turkey",
      ],
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+90 551 895 46 15", "Available 24/7"],
      color: "text-secondary",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@skybar-trade.com", "Response within 4 hours"],
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
      ],
      color: "text-secondary",
    },
  ];

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

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="full-name"
                          className="font-body text-sm font-medium text-foreground mb-2 block"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="full-name"
                          {...register("name")}
                          placeholder="Your full name"
                          className={`w-full ${
                            errors.name ? "border-destructive" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="font-body text-sm font-medium text-foreground mb-2 block"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="your@email.com"
                          className={`w-full ${
                            errors.email ? "border-destructive" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone-number"
                          className="font-body text-sm font-medium text-foreground mb-2 block"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone-number"
                          {...register("phone")}
                          placeholder="+1 (555) 123-4567"
                          className={`w-full ${
                            errors.phone ? "border-destructive" : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="company-name"
                          className="font-body text-sm font-medium text-foreground mb-2 block"
                        >
                          Company Name
                        </label>
                        <Input
                          id="company-name"
                          {...register("company")}
                          placeholder="Your company"
                          className={`w-full ${
                            errors.company ? "border-destructive" : ""
                          }`}
                        />
                        {errors.company && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="font-body text-sm font-medium text-foreground mb-2 block"
                      >
                        Country/Region
                      </label>
                      <Input
                        id="country"
                        {...register("country")}
                        placeholder="Your country or region"
                        className={`w-full ${
                          errors.country ? "border-destructive" : ""
                        }`}
                      />
                      {errors.country && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.country.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="font-body text-sm font-medium text-foreground mb-2 block"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your international trade requirements, products of interest, or any specific questions you have..."
                        rows={5}
                        className={`w-full resize-none ${
                          errors.message ? "border-destructive" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-heading font-semibold py-3 text-lg shadow-lg"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
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
