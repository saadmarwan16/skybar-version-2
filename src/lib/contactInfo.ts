import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const contactInfo = [
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
