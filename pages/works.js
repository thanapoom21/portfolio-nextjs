import Head from "next/head";
import Layout from "../components/layout";
import HeadingOne from "../components/headingOne";
import { Box, Image } from "@chakra-ui/react";
import utilStyles from "../styles/utils.module.css";
import RandomMachine from "./fcc-tutorials-projects/random-quote-machine";
import TodoApp from "./fcc-tutorials-projects/todo-app";
import Link from "next/link";
import { SITE_TITLE } from "../lib/constants";
import imageSources from "../public/data/works.json";

function ImageSection({ project }) {
  return (
    <>
      {project.map(obj => {
        return (
          <section key={obj.alt}>
            <div className="mb-5">
              <Image
                src={obj.src}
                fallbackSrc={obj.fallbackSrc}
                alt={obj.alt}
              />
            </div>
          </section>
        );
      })}
    </>
  );
}

export default function Works() {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <HeadingOne>Works</HeadingOne>
        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">drstile</h3>
        </Box>
        <Box
          my={6}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-6 md:gap-y-16"
        >
          <ImageSection project={imageSources.drstile} />
        </Box>

        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">double moon</h3>
        </Box>
        <Box
          my={6}
          className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-16"
        >
          <ImageSection project={imageSources.doubleMoon} />
        </Box>

        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">logos</h3>
        </Box>
        <Box
          my={4}
          className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16"
        >
          <ImageSection project={imageSources.logos} />
        </Box>

        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">posters</h3>
        </Box>
        <Box
          my={4}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16"
        >
          <ImageSection project={imageSources.posters} />
        </Box>

        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">booklets</h3>
        </Box>
        <Box
          my={4}
          className="grid grid-cols-2 lg:grid-cols-3 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16"
        >
          <ImageSection project={imageSources.booklets} />
        </Box>

        <Box>
          <h2 className="text-xl md:text-3xl font-bold">APIs</h2>
        </Box>
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
              <h3>Todo App</h3>
            </Box>
            <Box mt={4} className="grid grid-cols-1 lg:grid-cols-1">
              <section>
                <div id="todo-app" className="mb-5">
                  <TodoApp />
                </div>
              </section>
            </Box>
          </Box>
          <Box mt={6}>
            <Box>
              <h4>Top 20 Movies of All Time from A Sample Movies Collection</h4>
            </Box>
            <Box mt={4} className="grid grid-cols-1 lg:grid-cols-1">
              <section>
                <div id="movies-of-all-time" className="mb-5 text-center">
                  <div className="todo-app">
                    <Link href="/movies">
                      <a className="hover:underline text-white">20 Movies</a>
                    </Link>
                  </div>
                </div>
              </section>
            </Box>
          </Box>
        </Box>
      </section>
    </Layout>
  );
}
