import type { Field } from "payload";

export const AboutField: Field = {
  name: "about",
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
      name: "mission",
      type: "textarea",
      required: true,
    },
    {
      name: "vision",
      type: "textarea",
      required: true,
    },
  ],
};
