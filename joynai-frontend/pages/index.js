import Head from "next/head";
import styles from "../styles/Home.module.css";

import pageQuery from "../lib/api";

import Hero from "../sections.js/Hero";
import CustomerExperience from "../sections.js/CustomerExperience";

import Footer from "../sections.js/Footer";
import Pricing from "../sections.js/Pricing";
import Migration from "../sections.js/Migration";
import Features from "../sections.js/Features";
import ProductShowcase from "../sections.js/ProductShowcase";

export default function Home({ page: { content } }) {
  return (
    <>
      <Head>
        <title>
          JOYN Oil & Gas Production: Field Data Gathering, Allocations, Reports
          & Analytics
        </title>
        <link
          rel="shortcut icon"
          href="https://www.sevenlakes.com/wp-content/uploads/2019/04/favicon.ico"
        />
        <meta
          name="description"
          content="With the innovative enterprise grade JOYN Oil & Gas Production, you can do your field data gathering, allocations, reporting and analytics in one seamlessly integrated solution."
        />
      </Head>
      <div>
        <Hero props={content[0]} />
        <Pricing props={content[1]} />
        <ProductShowcase props={content[7]} />
        <Features props={content[6]} />
        <CustomerExperience props={content[3]} />
        <Migration props={content[4]} />
        <Footer props={content[5]} />
      </div>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const page = await pageQuery();

  return {
    props: {
      page,
    },
  };
};
