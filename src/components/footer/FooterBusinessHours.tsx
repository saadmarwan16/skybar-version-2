import { Clock } from "lucide-react";
import type { FunctionComponent } from "react";
import type { Footer } from "@/payload-types";

interface FooterBusinessHoursProps {
  hours: Footer["hours"];
}

const FooterBusinessHours: FunctionComponent<FooterBusinessHoursProps> = ({
  hours,
}) => {
  return (
    <div>
      <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
        Business Hours
      </h4>
      <div className="space-y-3">
        {hours?.map((item) => (
          <div key={item.day} className="flex space-x-2">
            <Clock className="h-4 w-4 text-secondary shrink-0 mt-2" />
            <ul className="space-y-1">
              <li className="font-body text-base md:text-lg text-primary-foreground/80">
                {item.day}
              </li>
              <li className="font-body text-sm text-primary-foreground/80">
                {item.time}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterBusinessHours;
