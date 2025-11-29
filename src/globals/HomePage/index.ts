import type { GlobalConfig } from "payload";
import { env } from "@/env";
import { AboutField } from "./Fields/AboutField";
import { ConsultationField } from "./Fields/ConsultationField";
import { ContactField } from "./Fields/ContactField";
import { CoreValuesField } from "./Fields/CoreValueField";
import { HeroField } from "./Fields/HeroField";
import { ImpactField } from "./Fields/ImpactField";
import { MarketsField } from "./Fields/MarketsField";
import { PartnersField } from "./Fields/PartnersField";
import { PartnershipsField } from "./Fields/PartnershipField";
import { ServicesField } from "./Fields/ServicesField";
import { TeamField } from "./Fields/TeamField";
import { WhyField } from "./Fields/WhyField";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  access: {
    read: () => true,
  },
  admin: {
    preview: () => `${env.NEXT_PUBLIC_URL}/?preview=true`,
    livePreview: {
      url: () => `${env.NEXT_PUBLIC_URL}/?preview=true`,
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
    TeamField,
    PartnersField,
    ContactField,
  ],
};
