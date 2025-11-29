import type { CollectionConfig } from "payload";

export const Countries: CollectionConfig = {
  slug: "countries",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "value",
  },
  hooks: {},
  fields: [
    {
      name: "value",
      type: "text",
      required: true,
    },
  ],
};
