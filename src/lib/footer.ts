import { Mail, MapPin, Phone } from "lucide-react";

export const footerQuickLinks = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Countries",
    href: "countries",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

export const footerContactUs = [
  {
    type: "address",
    icon: MapPin,
    value: [
      {
        name: "Aksaray Mahallesi Tiryaki",
        link: undefined,
      },
      {
        name: "Hasanpaşa Cad. No: 50 /2",
        link: undefined,
      },
      {
        name: "Fatih, Istanbul, Turkey",
        link: undefined,
      },
    ],
  },
  {
    type: "phone",
    icon: Phone,
    value: [
      {
        name: "+90 551 895 46 15",
        link: "tel:+905518954615",
      },
      {
        name: "+90 553 161 19 86",
        link: "tel:+905531611986",
      },
      {
        name: "+90 531 725 50 65",
        link: "tel:+905317255065",
      },
    ],
  },
  {
    type: "email",
    icon: Mail,
    value: [
      {
        name: "info@skybar-trade.com",
        link: "mailto:info@skybar-trade.com",
      },
      {
        name: "sales@skybar-trade.com",
        link: "mailto:sales@skybar-trade.com",
      },
    ],
  },
];

export const footerBusinessHours = [
  {
    day: "Monday - Friday",
    hours: "9:00 AM - 6:00 PM",
  },
  {
    day: "Saturday",
    hours: "10:00 AM - 4:00 PM",
  },
  {
    day: "Sunday",
    hours: "Closed",
  },
];
