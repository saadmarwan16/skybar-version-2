import { Fragment, type FunctionComponent } from "react";
import { footerContactUs } from "@/lib/footer";

const FooterContactUs: FunctionComponent = () => {
  return (
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
                <Fragment key={detail.name}>
                  {item.type === "address" ? (
                    <li className="font-body text-sm text-primary-foreground/80">
                      {detail.name}
                    </li>
                  ) : (
                    <li className="font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                      <a href={detail.link}>{detail.name}</a>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContactUs;
