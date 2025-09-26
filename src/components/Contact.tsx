import {
  Building,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      //   toast({
      //     title: "Message Sent Successfully!",
      //     description:
      //       "Thank you for your interest. Our team will contact you within 24 hours to discuss your international trade needs.",
      //   });
      toast("Message Sent Successfully!", {
        description:
          "Thank you for your interest. Our team will contact you within 24 hours to discuss your international trade needs.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Building,
      title: "Headquarters",
      details: ["Skybar Dış Ticaret Limited Şirketi", "Istanbul, Turkey"],
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+90 (212) XXX-XXXX", "Available 24/7"],
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
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM (GMT+3)",
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

                  <form onSubmit={handleSubmit} className="space-y-6">
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
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="w-full"
                        />
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
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="w-full"
                        />
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
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full"
                        />
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
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company"
                          className="w-full"
                        />
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
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Your country or region"
                        className="w-full"
                      />
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
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your international trade requirements, products of interest, or any specific questions you have..."
                        required
                        rows={5}
                        className="w-full resize-none"
                      />
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

              {/* Map Placeholder */}
              <AnimatedSection animation="scale-in" delay={600}>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-gold rounded-lg mr-4">
                        <MapPin className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <h4 className="font-heading text-lg font-semibold text-primary">
                        Our Location
                      </h4>
                    </div>
                    <div className="bg-accent/50 rounded-lg p-8 text-center">
                      <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
                      <p className="font-body text-muted-foreground">
                        Located in the heart of Istanbul, Turkey's commercial
                        center, strategically positioned for international trade
                        operations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-gold p-8 rounded-2xl text-secondary-foreground max-w-4xl mx-auto">
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Ready to Start Your International Trade Journey?
              </h3>
              <p className="font-body mb-6 leading-relaxed opacity-90">
                Join the growing network of successful businesses that trust
                Skybar for their international trade needs. Let's explore the
                opportunities together.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-heading font-semibold shadow-lg"
              >
                Schedule Free Consultation
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
