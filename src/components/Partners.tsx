"use client";

import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";
import type { HomePage, Media } from "@/payload-types";

// interface Partner {
//   name: string;
//   logo: string;
//   description?: string;
// }

interface PartnersProps {
  value: HomePage["partners"];
}

// const defaultPartners: Partner[] = [
//   {
//     name: "Global Trade Corporation",
//     logo: "/partners/partner-1.png",
//     description: "Leading international trade partner",
//   },
//   {
//     name: "African Logistics Co.",
//     logo: "/partners/partner-2.png",
//     description: "Premier logistics solutions provider",
//   },
//   {
//     name: "Turkish Manufacturing Group",
//     logo: "/partners/partner-3.png",
//     description: "Quality manufacturing partner",
//   },
//   {
//     name: "East African Distributors",
//     logo: "/partners/partner-4.png",
//     description: "Regional distribution network",
//   },
//   {
//     name: "International Shipping Ltd.",
//     logo: "/partners/partner-5.png",
//     description: "Reliable shipping services",
//   },
//   {
//     name: "Trade Finance Bank",
//     logo: "/partners/partner-6.png",
//     description: "Financial solutions partner",
//   },
// ];

const Partners: FunctionComponent<PartnersProps> = ({
  value: { title, subtitle, partners, cta },
}) => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners?.map((partner) => {
            const logo = partner.logo as Media | null | undefined;

            return (
              <Link
                key={partner.name}
                href={partner.link}
                className="group flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo?.url || "/no-logo.png"}
                      alt={logo?.alt || "No logo image available"}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <p className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                  {partner.name}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              {cta.title}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg">
              {cta.subtitle}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

// Interested in Partnership?
// Join our network of trusted partners and grow your business with us
