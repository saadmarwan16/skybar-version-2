import * as z from "zod";

export const quoteRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
});

export type QuoteRequestData = z.infer<typeof quoteRequestSchema>;
