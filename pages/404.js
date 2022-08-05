import Head from "next/head";
import Layout from "../components/layout";
import { Box } from "@chakra-ui/react";

import AnimatedText from "../components/AnimatedText";

import { SITE_TITLE } from "../lib/constants";

const Custom404 = () => {
  const thePageIsNotHere = `The page you're looking for is not here.😞`;
  const code404 = "404";

  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section>
        <Box
          flexDirection="column"
          display="flex"
          height="60vh"
          justifyContent="center"
          alignItems="center"
        >
          <AnimatedText animateScale={{ opacity: 1, scale: [1, 2, 2, 1, 1] }}>
            {code404}
          </AnimatedText>
          <AnimatedText animateScale={{ opacity: 1 }}>
            {thePageIsNotHere}
          </AnimatedText>
        </Box>
      </section>
    </Layout>
  );
};

export default Custom404;
