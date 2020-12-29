export default {
  type: "document",
  name: "siteSettings",
  title: "Site Settings",
  __experimental_actions: [/* create, delete, */ "update", "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
    },
    {
      title: "Brand logo",
      description:
        "Best choice is to use an SVG where the color are set with currentColor",
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    //   {
    //     name: 'navMenu',
    //     type: 'reference',
    //     title: 'Navigation menu',
    //     // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
    //     to: [{ type: 'navigationMenu' }],
    //     description: 'Which nav menu should be shown, if any',
    //   },
    //   {
    //     name: 'content',
    //     type: 'array',
    //     title: 'Page sections',
    //     description: 'Add, edit, and reorder sections',
    //     of: [
    //       { type: 'pricing' },
    //       { type: 'uiComponentRef' },
    //       { type: 'hero' },
    //       { type: 'infoRows' },
    //       { type: 'ctaColumns' },
    //       { type: 'ctaPlug' },
    //     ],
    //   },
  ],
};
