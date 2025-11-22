"use client";

import { ChevronRight } from "lucide-react";
import type { FunctionComponent } from "react";
import { footerQuickLinks } from "@/lib/footer";
import { scrollToSection } from "@/lib/scrollToSection";

const FooterQuickLinks: FunctionComponent = () => {
  return (
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
              <ChevronRight className="h-4 w-4 shrink-0" />
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
