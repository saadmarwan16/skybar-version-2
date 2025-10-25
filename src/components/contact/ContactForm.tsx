import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import type { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { fields } from "@/lib/formFields";
import {
  type ContactFormData,
  contactFormSchema,
} from "@/schemas/contactFormSchema";
import FormField from "./FormField";

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
        { publicKey },
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
        {fields.slice(0, 2).map((field) => (
          <FormField
            key={field.id}
            {...field}
            register={register}
            errors={errors}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.slice(2, 4).map((field) => (
          <FormField
            key={field.id}
            {...field}
            register={register}
            errors={errors}
          />
        ))}
      </div>

      <FormField
        id="country"
        label="Country/Region"
        name="country"
        placeholder="Your country or region"
        register={register}
        errors={errors}
      />

      <FormField
        id="message"
        label="Message"
        name="message"
        placeholder="Tell us about your international trade requirements, products of interest, or any specific questions you have..."
        register={register}
        errors={errors}
        required
        textarea
      />

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
