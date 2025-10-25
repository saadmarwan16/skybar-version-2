import { Clock } from "lucide-react";
import type { FunctionComponent } from "react";
import { footerBusinessHours } from "@/lib/footer";

const FooterBusinessHours: FunctionComponent = () => {
  return (
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
  );
};

export default FooterBusinessHours;
