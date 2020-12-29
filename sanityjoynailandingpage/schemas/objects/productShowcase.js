export default {
  type: "object",
  name: "productShowcase",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "simplePortableText",
      name: "heading",
    },
    {
      type: "simplePortableText",
      name: "subheading",
    },

    {
      name: "tabs",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    { name: "image", type: "array", of: [{ type: "figure" }] },
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
        title: `Product Showcase module: ${title}`,
      };
    },
  },
};
