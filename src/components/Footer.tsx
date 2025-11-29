import { getPayload } from "payload";
import type { FunctionComponent } from "react";
import config from "@/payload.config";
import FooterBusinessHours from "./footer/FooterBusinessHours";
import FooterCompanyInfo from "./footer/FooterCompanyInfo";
import FooterContactUs from "./footer/FooterContactUs";
import FooterQuickLinks from "./footer/FooterQuickLinks";

const Footer: FunctionComponent = async () => {
  const payload = await getPayload({ config });
  const footer = await payload.findGlobal({
    slug: "footer",
  });
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <FooterCompanyInfo
            description={footer.description}
            socials={footer.socials}
          />

          <FooterQuickLinks />

          <FooterContactUs
            locations={footer.locations}
            phone={footer.phone}
            mail={footer.mail}
          />

          <FooterBusinessHours hours={footer.hours} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light">
        <div className="max-w-container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-start md:justify-end items-center">
            <div className="font-body text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © {currentYear} Skybar Dış Ticaret Limited Şirketi. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
