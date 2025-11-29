import type { Field } from "payload";

export const CoreValuesField: Field = {
  name: "core_values",
  label: "Core Values",
  type: "group",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "values",
      type: "array",
      minRows: 1,
      maxRows: 4,
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
          name: "icon",
          type: "select",
          required: true,
          options: [
            {
              label: "Shield",
              value: "shield",
            },
            {
              label: "Globe",
              value: "globe",
            },
            {
              label: "Handshake",
              value: "handshake",
            },
            {
              label: "Award",
              value: "award",
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
