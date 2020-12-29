// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//Object types
import cta from "./objects/cta";
import embedHTML from "./objects/embedHTML";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import portableText from "./objects/portableText";
import simplePortableText from "./objects/simplePortableText";

// Landing page Section
import hero from "./objects/hero";

// document schemas
import page from "./documents/page";
import pricing from "./objects/pricing";
// import siteSettings from "./documents/siteConfig";
import siteConfig from "./documents/siteConfig";
import savings from "./objects/savings";
import customerExperience from "./objects/customerExperience";
import footer from "./objects/footer";
import migration from "./objects/migration";
import featureParity from "./objects/featureParity";
import productShowcase from "./objects/productShowcase";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "landingPage",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    customerExperience,
    cta,
    embedHTML,
    featureParity,
    figure,
    footer,
    hero,
    internalLink,
    link,
    migration,
    page,
    portableText,
    pricing,
    productShowcase,
    savings,
    simplePortableText,
    siteConfig,
  ]),
});
