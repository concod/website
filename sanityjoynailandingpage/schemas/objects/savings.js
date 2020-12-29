export default {
  type: "object",
  name: "savings",
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
      name: "leftlist",
    },
    {
      type: "portableText",
      name: "rightlist",
    },
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return {
        title: `savings module: ${title}`,
      };
    },
  },
};
