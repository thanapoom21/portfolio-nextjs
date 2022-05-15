import Head from "next/head";
import Layout from "../../components/layout";
import HeadingOne from "../../components/headingOne";
import NavBlock from "../../components/scrimba-tutorial/NavBlock";
import MainBlock from "../../components/scrimba-tutorial/MainBlock";
import { SITE_TITLE } from "../../lib/constants";
import { Box } from "@chakra-ui/react";

export default function InfoSite() {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section>
        <HeadingOne>React Fun Facts</HeadingOne>
        <Box my={6}>
          <hr />
        </Box>
        <Box id="info-site-container" className="todo-app scrimba-tutorial">
          <NavBlock />
          <MainBlock />
        </Box>
      </section>
    </Layout>
  );
}
