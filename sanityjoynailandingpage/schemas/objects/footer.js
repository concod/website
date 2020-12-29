export default {
  type: "object",
  name: "footer",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "simplePortableText",
      name: "copyright",
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
    {
      name: "social",
      type: "array",
      of: [
        {
          name: "icons",
          type: "figure",
        },
      ],
    },
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return {
        title: `footer module: ${title}`,
      };
    },
  },
};
