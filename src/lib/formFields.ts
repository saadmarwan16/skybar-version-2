import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "@/schemas/contactFormSchema";

export interface FormFieldProps {
  id: string;
  label: string;
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  name: keyof ContactFormData;
  placeholder: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}

export const fields: Omit<FormFieldProps, "register" | "errors">[] = [
  {
    id: "full-name",
    label: "Full Name",
    name: "name",
    placeholder: "Your full name",
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    name: "email",
    placeholder: "your@email.com",
    type: "email",
    required: true,
  },
  {
    id: "phone-number",
    label: "Phone Number",
    name: "phone",
    placeholder: "+1 (555) 123-4567",
  },
  {
    id: "company-name",
    label: "Company Name",
    name: "company",
    placeholder: "Your company",
  },
];
