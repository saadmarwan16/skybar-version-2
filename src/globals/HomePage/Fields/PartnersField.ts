import type { Field } from "payload";

export const PartnersField: Field = {
  name: "partners",
  type: "group",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "partners",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "cta",
      label: "Call to Action",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "subtitle",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
