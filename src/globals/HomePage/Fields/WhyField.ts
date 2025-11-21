import type { Field } from "payload";

export const WhyField: Field = {
  name: "why",
  type: "group",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "highlights",
      type: "array",
      minRows: 1,
      maxRows: 3,
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
      ],
    },
  ],
};
