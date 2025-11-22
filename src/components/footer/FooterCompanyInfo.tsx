import Image from "next/image";
import type { FunctionComponent } from "react";
import { socialsIcons } from "@/app/(frontend)/icons";
import type { Footer } from "@/payload-types";

interface Props {
  description: string;
  socials: Footer["socials"];
}

const FooterCompanyInfo: FunctionComponent<Props> = ({
  description,
  socials,
}) => {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center mb-6">
        <Image
          src="/logos/white-logo.png"
          alt="White Logo"
          width={36}
          height={36}
        />
        <div>
          <h3 className="font-heading text-xl font-bold">Skybar Dış Ticaret</h3>
          <p className="font-body text-sm text-primary-foreground/80">
            Limited Şirketi
          </p>
        </div>
      </div>

      <p className="font-body text-primary-foreground/90 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center space-x-4">
        <span className="font-body text-sm text-primary-foreground/80 mr-2">
          Follow Us:
        </span>
        {socials?.map((social) => {
          const Icon = socialsIcons[social.platform];

          return (
            <a
              key={social.platform}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="p-2 hover:bg-primary-light rounded-full transition-colors"
              >
                <Icon className="h-4 w-4 text-secondary" />
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
