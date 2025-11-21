import type { Field } from "payload";

export const ImpactField: Field = {
  name: "impact",
  type: "group",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "stats",
      type: "array",
      minRows: 1,
      maxRows: 4,
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
        {
          name: "subtitle",
          type: "text",
          required: false,
        },
        {
          name: "icon",
          type: "select",
          required: true,
          options: [
            {
              label: "Users",
              value: "users",
            },
            {
              label: "Globe",
              value: "globe",
            },
            {
              label: "Growth",
              value: "growth",
            },
            {
              label: "Shield",
              value: "shield",
            },
          ],
          admin: {
            isClearable: true,
          },
        },
      ],
    },
  ],
};
