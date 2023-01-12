import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import HeadingOne from "../components/headingOne";
import { Box, Tab, Tabs, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import RandomMachine from "../components/fcc-tutorial/random-quote-machine";
import Link from "next/link";
import imageSources from "../public/data/works.json";

const ImageSection = ({ project, width, height }) => {
  return (
    <>
      {project.map(obj => {
        return (
          <section key={obj.alt}>
            <div className="mb-5">
              <Image
                src={obj.src}
                width={width}
                height={height}
                alt={obj.alt}
              />
            </div>
          </section>
        );
      })}
    </>
  );
};

const Work = () => {
  return (
    <Layout>
      <Head>
        <title>Thanapoom&apos;s Works</title>
      </Head>
      <section>
        <HeadingOne>Work</HeadingOne>

        <Tabs isLazy size="sm" variant="enclosed" my={2}>
          <TabList overflowX="scroll">
            <Tab>drstile</Tab>
            <Tab>doublemoon</Tab>
            <Tab>logos</Tab>
            <Tab>posters</Tab>
            <Tab>booklets</Tab>
            <Tab>APIs</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box
                my={6}
                className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-6 md:gap-y-16"
              >
                <ImageSection
                  project={imageSources.drstile}
                  width={1086}
                  height={816}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                my={6}
                className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-16"
              >
                <ImageSection
                  project={imageSources.doubleMoon}
                  width={752}
                  height={486}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                my={4}
                className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16"
              >
                <ImageSection
                  project={imageSources.logos}
                  width={5334}
                  height={4001}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                my={4}
                className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16"
              >
                <ImageSection
                  project={imageSources.posters}
                  width={1584}
                  height={2016}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                my={4}
                className="grid grid-cols-2 lg:grid-cols-3 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16"
              >
                <ImageSection
                  project={imageSources.booklets}
                  width={825}
                  height={1275}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 md:grid-cols-2 md:gap-y-16">
                <Box mt={6}>
                  <Box>
                    <h3>Random Quote Machine — freecodecamp.com</h3>
                  </Box>
                  <Box mt={4} className="grid grid-cols-1 lg:grid-cols-1">
                    <section>
                      <div id="random-quote-machine" className="mb-5">
                        <RandomMachine />
                      </div>
                    </section>
                  </Box>
                </Box>
                <Box mt={6}>
                  <Box>
                    <h4>Top 20 Movies of All Time</h4>
                  </Box>
                  <Box mt={4} className="grid grid-cols-1 lg:grid-cols-1">
                    <section>
                      <div id="movies-of-all-time" className="mb-5 text-center">
                        <div className="todo-app">
                          <Link href="/movie">
                            <a className="hover:underline text-white">
                              A Sample Movies Collection
                            </a>
                          </Link>
                        </div>
                      </div>
                    </section>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </Layout>
  );
};

export default Work;
