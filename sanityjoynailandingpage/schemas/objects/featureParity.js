import figure from "./figure";

export default {
  type: "object",
  name: "featureParity",
  fields: [
    {
      type: "string",
      name: "title",
    },
    { type: "simplePortableText", name: "heading" },
    { type: "simplePortableText", name: "subheading" },
    { name: "pricing", title: "PRICING & IMPLEMENTATION", type: "table" },
    { name: "cloud", title: "CLOUD SaaS", type: "table" },
    {
      name: "datamigration",
      title: "DATA MIGRATION & USER MANAGEMENT",
      type: "table",
    },
    { name: "FDG", title: "FIELD DATA CAPTURE (FDG)", type: "table" },
    { name: "production", title: "PRODUCTION ALLOCATION", type: "table" },
    { name: "analytics", title: "ANALYTICS & REPORTING", type: "table" },

    {
      type: "array",
      name: "tableHeaders",
      of: [{ type: "string", name: "heading" }],
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
        title: `Features module: ${title}`,
      };
    },
  },
};
