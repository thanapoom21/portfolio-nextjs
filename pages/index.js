import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { SITE_TITLE } from "../lib/constants";
import { Box, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <VStack spacing={12}>
          <Box>
            <p
              className={`${utilStyles.landingP} text-2xl leading-snug md:text-6xl font-bold md:leading-snug`}
            >
              Hi, my name is Thanapoom and I am Thai. It might be difficult to
              say my name but you can call me by Music. I&apos;m a web designer
              & developer. I am specializing in logos, business cards, posters,
              brochures, and websites. I&apos;ve done freelance works for small
              businesses, participated in a startup, and collaborated with
              talented people to build digital products for both business and
              consumer use. I&apos;m naturally curious, relentlessly optimistic,
              and gradually & constantly improving my abilities. 🎉
            </p>
          </Box>

          <Box>
            <p
              className={`${utilStyles.landingP} text-2xl leading-snug md:text-6xl font-bold md:leading-snug`}
            >
              If you feel like having a chat, feel free to drop me a line.
            </p>
          </Box>
        </VStack>
      </section>
    </Layout>
  );
}
