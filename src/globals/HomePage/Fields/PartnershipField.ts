import type { Field } from "payload";

export const PartnershipsField: Field = {
  name: "partnerships",
  type: "group",
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
      name: "items",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
