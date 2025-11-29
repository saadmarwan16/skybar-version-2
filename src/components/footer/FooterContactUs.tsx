import { Mail, MapPin, Phone } from "lucide-react";
import { Fragment, type FunctionComponent } from "react";
import type { Footer } from "@/payload-types";

interface FooterContactUsProps {
  locations: Footer["locations"];
  phone: Footer["phone"];
  mail: Footer["mail"];
}

const constructMailtoLink = (email: string) => {
  return `mailto:${email}`;
};

const constructPhoneLink = (phone: string) => {
  return `tel:${phone.replace(/\s+/g, "")}`;
};

const FooterContactUs: FunctionComponent<FooterContactUsProps> = ({
  locations,
  phone,
  mail,
}) => {
  return (
    <div>
      <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
        Contact Us
      </h4>
      <div className="space-y-3">
        <div className="flex space-x-2">
          <MapPin className="h-4 w-4 text-secondary shrink-0 mt-1" />
          <div className="flex flex-col space-y-3">
            {locations?.map(({ id, location }) => (
              <ul key={id} className="space-y-1">
                {location?.map((detail) => (
                  <Fragment key={detail.value}>
                    <li className="font-body text-sm text-primary-foreground/80">
                      {detail.value}
                    </li>
                  </Fragment>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex space-x-2">
          <Phone className="h-4 w-4 text-secondary shrink-0 mt-1" />
          <ul className="space-y-1">
            {phone?.map((detail) => (
              <Fragment key={detail.value}>
                <li className="font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  <a href={constructPhoneLink(detail.value)}>{detail.value}</a>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
        <div className="flex space-x-2">
          <Mail className="h-4 w-4 text-secondary shrink-0 mt-1" />
          <ul className="space-y-1">
            {mail?.map((detail) => (
              <Fragment key={detail.value}>
                <li className="font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  <a href={constructMailtoLink(detail.value)}>{detail.value}</a>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
