import Head from "next/head";
import Layout from "../components/layout";
import HeadingOne from "../components/headingOne";
import { Box, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { SplitText } from "../components/SplitText";
import { AnimatePresence, motion } from "framer-motion";
import utilStyles from "../styles/utils.module.css";
import { SITE_TITLE } from '../lib/constants'

export default function Contact() {
  const textToAnimate = `I am available for freelance work. Drop me a line if you would like to chat. 😄`;
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <HeadingOne>Contact</HeadingOne>
        <Box mt={4}>
          <AnimatedText>{textToAnimate}</AnimatedText>
          <Button
            mt={10}
            leftIcon={<EmailIcon />}
            colorScheme="blackAlpha"
            variant="outline"
            borderRadius="1px"
          >
            <a href="mailto:thanapoom.p.music@gmail.com?Subject=Web Development">
              Email me
            </a>
          </Button>
        </Box>
      </section>
    </Layout>
  );
}

function AnimatedText({ children }) {
  return (
    <div className={utilStyles.superBoldText3rem}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SplitText
            splitBy=" "
            initial={{ y: "100%" }}
            animate="visible"
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.05,
                },
              }),
            }}
          >
            {children}
          </SplitText>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
