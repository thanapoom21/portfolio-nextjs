import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { Box, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { SplitText } from "../components/SplitText";
import { AnimatePresence, motion } from "framer-motion";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  const textToAnimate = `I am available for freelance work. Drop me a line if you would like to chat. 😄`;
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.superBoldText4rem}>Contact</h1>
        <Box mt={10}>
          <AnimatedText>{textToAnimate}</AnimatedText>
          <Button
            my={10}
            leftIcon={<EmailIcon />}
            colorScheme="blackAlpha"
            variant="outline"
          >
            <a href="mailto:thanapoom.p.music@gmail.com?Subject=Web Development">
              Email me
            </a>
          </Button>
          {/* <Repeat numberOfTimes={5}>
            <div>&#9660;</div>
          </Repeat> */}
        </Box>
      </section>
    </Layout>
  );
}

// /**
//  *
//  * @param {Number} numberOfTimes
//  * @param {JSX} thingsToRepeat
//  * @returns the number of array of element to be repeated. For experiment purposes.
//  */
// const repeatIt = (numberOfTimes, thingsToRepeat) => {
//   let element = [];
//   for (let index = 0; index < numberOfTimes; index++) {
//     element.push(thingsToRepeat);
//   }
//   return element;
// };

// const Repeat = ({ numberOfTimes, children }) => {
//   let element = [];
//   for (let index = 0; index < numberOfTimes; index++) {
//     element.push(children);
//   }
//   return <>{element}</>;
// };

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
                  delay: i * 0.02,
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
