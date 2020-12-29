export default {
  type: "object",
  name: "customerExperience",
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
      type: "portableText",
      name: "text",
    },
    { type: "cta", name: "cta" },
    {
      title: "Customer Videos",
      name: "video",
      type: "array",
      of: [
        {
          type: "file",
          fields: [
            {
              name: "description",
              type: "string",
              title: "Description",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return {
        title: `Customer Experience module: ${title}`,
      };
    },
  },
};
