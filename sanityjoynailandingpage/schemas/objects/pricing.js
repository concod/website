export default {
  type: "object",
  name: "pricing",
  fields: [
    {
      type: "string",
      name: "title",
    },

    {
      type: "simplePortableText",
      name: "text",
    },
    { type: "portableText", name: "subheading" },

    {
      type: "simplePortableText",
      name: "heading",
    },
    { type: "portableText", name: "subheadingtext" },

    {
      type: "array",
      name: "icons",
      of: [{ type: "figure" }],
    },

    {
      type: "simplePortableText",
      name: "wellsInput",
    },
    {
      type: "simplePortableText",
      name: "boepdInput",
    },
    {
      type: "simplePortableText",
      name: "plan",
    },
    {
      type: "simplePortableText",
      name: "price",
    },
    {
      title: "Wells Vs $/w/m",
      name: "DPW",
      type: "table",

      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          { type: "link" },
          { type: "internalLink" },
          { name: "color", title: "Color", type: "color" },
        ],
      },
    },

    {
      title: "BOEPD/Well Vs Well Factor",
      name: "wellfactor",
      type: "table",
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
        title: `Pricing module: ${title}`,
      };
    },
  },
};
