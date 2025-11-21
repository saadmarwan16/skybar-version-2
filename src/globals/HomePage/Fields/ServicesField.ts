import type { Field } from "payload";

export const ServicesField: Field = {
  name: "services",
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
      name: "items",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
          required: true,
        },
        {
          name: "features",
          type: "array",
          fields: [
            {
              name: "value",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "icon",
          type: "select",
          required: true,
          options: [
            {
              label: "Ship",
              value: "ship",
            },
            {
              label: "Container",
              value: "container",
            },
            {
              label: "Wrench",
              value: "wrench",
            },
            {
              label: "Building",
              value: "building",
            },
          ],
        },
      ],
    },
  ],
};
