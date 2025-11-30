"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import type { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/native-dialog";
import {
  type QuoteRequestData,
  quoteRequestSchema,
} from "@/schemas/quoteRequestSchema";
import type { CartItem } from "@/store/useCartStore";

interface QuoteRequestDialogProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

const QuoteRequestDialog: FunctionComponent<QuoteRequestDialogProps> = ({
  isOpen,
  onClose,
  cartItems,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteRequestData>({
    resolver: zodResolver(quoteRequestSchema),
    mode: "onBlur",
  });

  const formatQuoteItems = (items: CartItem[]): string => {
    return items
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.title}\n   Price Range: $${
            item.product.price_range.min_price
          } - $${item.product.price_range.max_price}\n   Quantity: ${
            item.quantity
          }\n   Min Order: ${item.product.min_order}\n`
      )
      .join("\n");
  };

  const onSubmit = async (data: QuoteRequestData) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_QUOTE_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      const quoteDetails = formatQuoteItems(cartItems);
      const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: data.email,
          customer_name: data.name || "Customer",
          customer_email: data.email,
          customer_phone: data.phone || "Not provided",
          customer_company: data.company || "Not provided",
          quote_items: quoteDetails,
          total_items: totalItems,
          total_products: cartItems.length,
        },
        { publicKey }
      );

      toast.success("Quote Request Sent Successfully!", {
        description:
          "We've received your quote request and will send you a detailed quotation within 24 hours.",
      });
      reset();
      onClose();
    } catch (_) {
      toast.error("Failed to Send Quote Request", {
        description:
          "We're sorry, but there was an error sending your request. Please try again or contact us directly.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Request a Quote
          </DialogTitle>
          <DialogDescription>
            Please provide your email address to receive a detailed quotation
            for the items in your cart.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mt-4 py-4 px-4 sm:px-6 md:px-7"
        >
          {/* Email Field (Required) */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Name Field (Optional) */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Field (Optional) */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              {...register("phone")}
            />
          </div>

          {/* Company Field (Optional) */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <Input
              id="company"
              type="text"
              placeholder="Your company name"
              {...register("company")}
            />
          </div>

          {/* Cart Summary */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-sm text-gray-700 mb-2">
              Quote Summary
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Total Products: {cartItems.length}</p>
              <p>
                Total Items:{" "}
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestDialog;
