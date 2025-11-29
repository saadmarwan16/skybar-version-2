import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  hooks: {},
  fields: [
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "locations",
      type: "array",
      fields: [
        {
          name: "location",
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
    {
      name: "phone",
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
      name: "mail",
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
      name: "hours",
      type: "array",
      fields: [
        {
          name: "day",
          type: "text",
          required: true,
        },
        {
          name: "time",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "socials",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            {
              value: "linkedin",
              label: "LinkedIn",
            },
            {
              value: "twitter",
              label: "Twitter",
            },
            {
              value: "facebook",
              label: "Facebook",
            },
          ],
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
