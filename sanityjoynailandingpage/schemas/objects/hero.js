export default {
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      type: "simplePortableText",
      title: "Tagline",
    },
    {
      name: "trial",
      type: "simplePortableText",
    },
    {
      name: "subheading",
      type: "simplePortableText",
    },
    {
      name: "logo",
      type: "figure",
      title: "Brand Logo",
      options: {
        hotspot: true,
      },
    },

    {
      name: "image",
      type: "figure",
      title: "Image",
      options: {
        hotspot: true,
      },
    },

    {
      title: "Joyn Video",
      name: "video",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
      ],
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
    select: {
      title: "heading",
      media: "backgroundImage",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero section",
        media,
      };
    },
  },
};
