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
      <section>
        <VStack spacing={12}>
          <Box width="100%">
            <p
              className={`${utilStyles.monoText} text-lg leading-snug md:text-xl md:leading-snug`}
            >
              Hello, my name is
            </p>

            <p
              className={`${utilStyles.quicksandTitle} text-4xl leading-snug md:text-6xl font-bold md:leading-snug`}
            >
              Thanapoom Phithakjarukorn.
            </p>

            <p
              className={`${utilStyles.quicksandSubtitle} text-2xl leading-snug md:text-4xl font-bold md:leading-snug`}
            >
              I develop things for the web.
            </p>

            <p
              className={`${utilStyles.monoText} text-lg leading-snug md:text-xl md:leading-snug my-6`}
            >
              I&apos;m a web designer & developer. I am specializing in logos,
              business cards, posters, brochures, and websites. I&apos;ve done
              freelance works for small businesses, participated in a startup,
              and collaborated with talented people to build digital products
              for both business and consumer use. I&apos;m naturally curious,
              relentlessly optimistic, and gradually & constantly improving my
              abilities. 🎉
            </p>

            <p className={`text-lg md:text-xl`}>
              If you feel like having a chat, feel free to drop me a line.
            </p>
          </Box>
        </VStack>
      </section>
    </Layout>
  );
}
