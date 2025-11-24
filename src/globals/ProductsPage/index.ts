import type { GlobalConfig } from "payload";

export const ProductsPage: GlobalConfig = {
  slug: "products-page",
  access: {
    read: () => true,
  },
  admin: {
    preview: () => "/products/?preview=true",
    livePreview: {
      url: () => "/products/?preview=true",
    },
  },
  hooks: {},
  versions: {
    drafts: {
      autosave: false,
    },
  },
  fields: [
    {
      name: "title",
      type: "group",
      fields: [
        {
          name: "prefix",
          type: "text",
          required: true,
        },
        {
          name: "infix",
          type: "text",
          required: true,
        },
        {
          name: "suffix",
          type: "text",
        },
      ],
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "countries",
      type: "relationship",
      relationTo: "countries",
      hasMany: true,
    },
  ],
};
