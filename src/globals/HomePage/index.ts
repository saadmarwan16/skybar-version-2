import type { GlobalConfig } from "payload";
import { AboutField } from "./Fields/AboutField";
import { ConsultationField } from "./Fields/ConsultationField";
import { ContactField } from "./Fields/ContactField";
import { CoreValuesField } from "./Fields/CoreValueField";
import { HeroField } from "./Fields/HeroField";
import { ImpactField } from "./Fields/ImpactField";
import { MarketsField } from "./Fields/MarketsField";
import { PartnershipsField } from "./Fields/PartnershipField";
import { ServicesField } from "./Fields/ServicesField";
import { WhyField } from "./Fields/WhyField";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  access: {
    read: () => true,
  },
  admin: {
    preview: () => "http://localhost:3000?preview=true",
    livePreview: {
      url: () => "http://localhost:3000?preview=true",
    },
  },
  hooks: {},
  versions: {
    drafts: {
      autosave: false,
    },
  },
  fields: [
    HeroField,
    AboutField,
    CoreValuesField,
    ImpactField,
    WhyField,
    ServicesField,
    ConsultationField,
    MarketsField,
    PartnershipsField,
    ContactField,
  ],
};
