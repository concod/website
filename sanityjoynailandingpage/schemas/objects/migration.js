import figure from "./figure";

export default {
  type: "object",
  name: "migration",
  fields: [
    {
      type: "string",
      name: "title",
    },

    {
      type: "array",
      name: "icons",
      of: [
        {
          type: "figure",
          name: "icon",
        },
      ],
    },
    {
      type: "simplePortableText",
      name: "heading",
    },
    {
      type: "simplePortableText",
      name: "Subheading",
    },
    {
      type: "portableText",
      name: "card1",
    },
    {
      type: "portableText",
      name: "card2",
    },
    {
      type: "portableText",
      name: "card3",
    },

    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        {
          title: "Call to action",
          type: "cta",
        },
      ],
    },
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return {
        title: `Migration module: ${title}`,
      };
    },
  },
};
