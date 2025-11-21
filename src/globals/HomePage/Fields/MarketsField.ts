import type { Field } from "payload";

export const MarketsField: Field = {
  name: "markets",
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
      minRows: 1,
      fields: [
        {
          name: "country",
          type: "text",
          required: true,
        },
        {
          name: "population",
          type: "text",
          required: true,
        },
        {
          name: "market-size",
          type: "text",
          required: true,
        },
        {
          name: "opportunities",
          type: "text",
          required: true,
        },
        {
          name: "highlights",
          type: "array",
          fields: [
            {
              name: "value",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
