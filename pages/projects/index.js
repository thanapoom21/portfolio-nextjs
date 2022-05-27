import Head from "next/head";
import Layout from "../../components/layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import GreatQuote from "../../components/fullstackopen-tutorial/GreatQuote";
import SimpleButtons from "../../components/fullstackopen-tutorial/SimpleButtons";
import CountryList from "../../components/fullstackopen-tutorial/CountryList";
import CourseInfo from "../../components/fullstackopen-tutorial/CourseInfo";
import Phonebook from "../../components/fullstackopen-tutorial/Phonebook";
import Cacaocafe from "../../components/fullstackopen-tutorial/Cacaocafe";
import HackerNewsSearch from "../../components/fullstackopen-tutorial/HackerNewsSearch";
import WordSearch from "../../components/fullstackopen-tutorial/WordSearch";

const ProjectsLandingPage = () => {
  return (
    <Layout>
      <Head>
        <title>Tutorials From FullstackOpen</title>
      </Head>
      <>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  Great Quote
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GreatQuote />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  Simple Buttons
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleButtons />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  Country List
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CountryList />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  Course Info
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CourseInfo />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  Phonebook
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Phonebook />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  Cacao Cafe
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Cacaocafe />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  Hacker News Search
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HackerNewsSearch />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  Word Search
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <WordSearch />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
    </Layout>
  );
};

export default ProjectsLandingPage;
