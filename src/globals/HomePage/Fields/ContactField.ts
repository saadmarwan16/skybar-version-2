import type { Field } from "payload";

export const ContactField: Field = {
  name: "contact",
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
      name: "form-title",
      type: "text",
      required: true,
    },
    {
      name: "items",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "contact",
          type: "text",
          required: true,
        },
        {
          name: "message",
          type: "text",
        },
        {
          name: "icon",
          type: "select",
          required: true,
          options: [
            {
              label: "Location",
              value: "location",
            },
            {
              label: "Phone",
              value: "phone",
            },
            {
              label: "Mail",
              value: "mail",
            },
            {
              label: "Hours",
              value: "hours",
            },
          ],
        },
      ],
    },
  ],
};
