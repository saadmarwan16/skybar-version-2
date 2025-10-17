"use client";

import {
  ChevronRight,
  Clock,
  Facebook,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // const footerSections = [
  //   {
  //     title: "Services",
  //     links: [
  //       "Import & Export Solutions",
  //       "Cargo Shipping & Logistics",
  //       "Agricultural Machinery",
  //       "Construction Materials",
  //     ],
  //   },
  //   {
  //     title: "Markets",
  //     links: [
  //       "Uganda",
  //       "Kenya",
  //       "Tanzania",
  //       "DR Congo",
  //       "South Sudan",
  //       "Rwanda",
  //     ],
  //   },
  //   {
  //     title: "Company",
  //     links: ["About Us", "Career Opportunities", "Partner Program"],
  //   },
  // ];

  const footerQuickLinks = [
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

  const footerContactUs = [
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

  const footerBusinessHours = [
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    console.log("Section id:", sectionId, element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-secondary rounded-lg mr-3">
                <Globe className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">
                  Skybar Dış Ticaret
                </h3>
                <p className="font-body text-sm text-primary-foreground/80">
                  Limited Şirketi
                </p>
              </div>
            </div>

            <p className="font-body text-primary-foreground/90 mb-6 leading-relaxed">
              Connecting Turkish excellence with East African opportunities
              through reliable international trade solutions, fostering mutual
              growth and prosperity.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-3 text-secondary flex-shrink-0" />
                <span className="font-body text-primary-foreground/90">
                  Istanbul, Turkey
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-3 text-secondary flex-shrink-0" />
                <span className="font-body text-primary-foreground/90">
                  +90 (212) XXX-XXXX
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-3 text-secondary flex-shrink-0" />
                <span className="font-body text-primary-foreground/90">
                  info@skybar-trade.com
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-3"
                  >
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
              Contact Us
            </h4>
            <div className="space-y-3">
              {footerContactUs.map((item) => (
                <div key={item.type} className="flex space-x-2">
                  <item.icon className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <ul className="space-y-1">
                    {item.value.map((detail) => (
                      <>
                        {item.type === "address" ? (
                          <li
                            key={detail.name}
                            className="font-body text-sm text-primary-foreground/80"
                          >
                            {detail.name}
                          </li>
                        ) : (
                          <li
                            key={detail.name}
                            className="font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                          >
                            <a href={detail.link}>{detail.name}</a>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
              Business Hours
            </h4>
            <div className="space-y-3">
              {footerBusinessHours.map((item) => (
                <div key={item.day} className="flex space-x-2">
                  <Clock className="h-4 w-4 text-secondary flex-shrink-0 mt-2" />
                  <ul className="space-y-1">
                    <li className="font-body text-base md:text-lg text-primary-foreground/80">
                      {item.day}
                    </li>
                    <li className="font-body text-sm text-primary-foreground/80">
                      {item.hours}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() => {
                        if (section.title === "Services") {
                          scrollToSection("services");
                        } else if (section.title === "Markets") {
                          scrollToSection("countries");
                        } else if (section.title === "Company") {
                          scrollToSection("about");
                        }
                      }}
                      className="font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light">
        <div className="max-w-container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-body text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © {currentYear} Skybar Dış Ticaret Limited Şirketi. All rights
              reserved.
            </div>

            <div className="flex items-center space-x-4">
              <span className="font-body text-sm text-primary-foreground/80 mr-2">
                Follow Us:
              </span>
              <button
                type="button"
                className="p-2 hover:bg-primary-light rounded-full transition-colors"
              >
                <Linkedin className="h-4 w-4 text-secondary" />
              </button>
              <button
                type="button"
                className="p-2 hover:bg-primary-light rounded-full transition-colors"
              >
                <Twitter className="h-4 w-4 text-secondary" />
              </button>
              <button
                type="button"
                className="p-2 hover:bg-primary-light rounded-full transition-colors"
              >
                <Facebook className="h-4 w-4 text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
