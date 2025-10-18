import { Facebook, Globe, Linkedin, Twitter } from "lucide-react";
import type { FunctionComponent } from "react";

const FooterCompanyInfo: FunctionComponent = () => {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center mb-6">
        <div className="p-2 bg-secondary rounded-lg mr-3">
          <Globe className="h-6 w-6 text-secondary-foreground" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold">Skybar Dış Ticaret</h3>
          <p className="font-body text-sm text-primary-foreground/80">
            Limited Şirketi
          </p>
        </div>
      </div>

      <p className="font-body text-primary-foreground/90 mb-6 leading-relaxed">
        Connecting Turkish excellence with East African opportunities through
        reliable international trade solutions, fostering mutual growth and
        prosperity.
      </p>

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
  );
};

export default FooterCompanyInfo;
