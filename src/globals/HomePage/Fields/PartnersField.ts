import type { Field } from "payload";

export const PartnersField: Field = {
  name: "partners",
  type: "group",
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
};
