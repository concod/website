import sanityClient from "@sanity/client";
const options = {
  dataset: "development",
  projectId: "0g8g7mz3",
  useCdn: true,
};

export default sanityClient(options);
