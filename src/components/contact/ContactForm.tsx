import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import type { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  type ContactFormData,
  contactFormSchema,
} from "@/schemas/contactFormSchema";

const ContactForm: FunctionComponent = () => {
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
        },
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

  return (
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
            className={`w-full ${errors.name ? "border-destructive" : ""}`}
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
            className={`w-full ${errors.email ? "border-destructive" : ""}`}
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
            className={`w-full ${errors.phone ? "border-destructive" : ""}`}
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
            className={`w-full ${errors.company ? "border-destructive" : ""}`}
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
          className={`w-full ${errors.country ? "border-destructive" : ""}`}
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
  );
};

export default ContactForm;
