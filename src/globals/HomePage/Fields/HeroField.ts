import type { Field } from "payload";

export const HeroField: Field = {
  name: "hero",
  type: "group",
  fields: [
    {
      name: "title",
      type: "group",
      required: true,
      fields: [
        {
          name: "prefix",
          type: "text",
          required: true,
        },
        {
          name: "infix",
          type: "text",
          required: true,
        },
        {
          name: "suffix",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "card",
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
          name: "subtitle",
          type: "text",
          required: true,
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
              label: "Globe",
              value: "globe",
            },
            {
              label: "Growth",
              value: "growth",
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
