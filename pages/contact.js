import Head from "next/head";
import Layout from "../components/layout";
import HeadingOne from "../components/headingOne";
import { Box, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import AnimatedText from "../components/AnimatedText";

const Contact = () => {
  const textToAnimate = `I am available for freelance work. Drop me a line if you would like to chat. 😄`;
  return (
    <Layout>
      <Head>
        <title>Thanapoom&apos;s Contact</title>
      </Head>
      <section>
        <HeadingOne>Contact</HeadingOne>
        <Box mt={4}>
          <AnimatedText>{textToAnimate}</AnimatedText>
          <Button mt={10} leftIcon={<EmailIcon />}>
            <a href="mailto:thanapoom.p.music@gmail.com?Subject=Web Development">
              Email me
            </a>
          </Button>
        </Box>
      </section>
    </Layout>
  );
};

export default Contact;
