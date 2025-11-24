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
  versions: {
    drafts: {
      autosave: false,
    },
  },
  fields: [
    {
      name: "value",
      type: "text",
      required: true,
    },
  ],
};
