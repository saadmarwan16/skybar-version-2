import type { CollectionConfig } from "payload";
import { env } from "@/env";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    read: () => true,
  },
  admin: {
    preview: () => `${env.NEXT_PUBLIC_URL}/products/?preview=true`,
    livePreview: {
      url: () => `${env.NEXT_PUBLIC_URL}/products/?preview=true`,
    },
  },
  hooks: {},
  //   versions: {
  //     drafts: {
  //       autosave: false,
  //     },
  //   },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "min_order",
      label: "Minimum Order",
      type: "number",
      required: true,
    },
    {
      name: "price_range",
      label: "Price Range",
      type: "group",
      fields: [
        {
          name: "min_price",
          label: "Minimum Price",
          type: "number",
          required: true,
        },
        {
          name: "max_price",
          label: "Maximum Price",
          type: "number",
          required: true,
        },
      ],
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      maxRows: 3,
    },
    {
      name: "export_from",
      label: "Export From Countries",
      type: "relationship",
      relationTo: "countries",
      hasMany: true,
      maxRows: 4,
    },
  ],
};
