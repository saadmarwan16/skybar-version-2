import type { Field } from "payload";

export const ConsultationField: Field = {
  name: "consultation",
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
  ],
};
