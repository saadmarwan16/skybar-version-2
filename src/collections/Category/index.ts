import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
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
