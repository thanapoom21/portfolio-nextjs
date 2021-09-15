import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeadingOne from "../components/headingOne";
import { Box, Image } from "@chakra-ui/react";
import utilStyles from "../styles/utils.module.css";
import RandomMachine from "./fcc-tutorials-projects/random-quote-machine";

const imageSources = {
  drstile: [{
    src: "/assets/works/drstile-website/drstile-website-1.webp",
    fallbackSrc: "/assets/works/drstile-website/drstile-website-1.jpg",
    alt: "drstile-website-1"
  },
  {
    src: "/assets/works/drstile-website/drstile-website-2.webp",
    fallbackSrc: "/assets/works/drstile-website/drstile-website-2.jpg",
    alt: "drstile-website-2"
  },
  {
    src: "/assets/works/drstile-website/drstile-website-3.webp",
    fallbackSrc: "/assets/works/drstile-website/drstile-website-3.jpg",
    alt: "drstile-website-3"
  },
  {
    src: "/assets/works/drstile-website/drstile-website-2.webp",
    fallbackSrc: "/assets/works/drstile-website/drstile-website-2.jpg",
    alt: "drstile-website-4"
  }],
  doubleMoon: [{
    src: "/assets/works/double-moon/double-moon-1.webp",
    fallbackSrc: "/assets/works/double-moon/double-moon-1.jpg",
    alt: "double-moon-1"
  },
  {
    src: "/assets/works/double-moon/double-moon-2.webp",
    fallbackSrc: "/assets/works/double-moon/double-moon-2.jpg",
    alt: "double-moon-2"
  },
  {
    src: "/assets/works/double-moon/double-moon-3.webp",
    fallbackSrc: "/assets/works/double-moon/double-moon-3.jpg",
    alt: "double-moon-3"
  }],
  logos: [{
    src: "/assets/works/logos/harmoneyes-3.webp",
    fallbackSrc: "/assets/works/logos/harmoneyes-3.jpg",
    alt: "harmoneyes-3"
  }, {
    src: "/assets/works/logos/red-cardinal.webp",
    fallbackSrc: "/assets/works/logos/red-cardinal.jpg",
    alt: "red-cardinal"
  }, {
    src: "/assets/works/logos/scfoundation-1.webp",
    fallbackSrc: "/assets/works/logos/scfoundation-1.jpg",
    alt: "scfoundation-1"
  }, {
    src: "/assets/works/logos/scfoundation-2.webp",
    fallbackSrc: "/assets/works/logos/scfoundation-2.jpg",
    alt: "scfoundation-2"
  }],
  posters: [{
    src: "/assets/works/posters/exordium-main-poster-w990.webp",
    fallbackSrc: "/assets/works/posters/exordium-main-poster-w990.jpg",
    alt: "exordium-main-poster-w990"
  },
  {
    src: "/assets/works/posters/exordium-poster-w990.webp",
    fallbackSrc: "/assets/works/posters/exordium-poster-w990.jpg",
    alt: "exordium-poster-w990"
  }]
}

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
        )
      })}
    </>
  );
}

export default function Works() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <HeadingOne>Works</HeadingOne>
        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">drstile</h3>
        </Box>
        <Box
          my={6}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:gap-y-6"
        >
          <ImageSection project={imageSources.drstile} />
        </Box>

        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">double moon</h3>
        </Box>
        <Box
          my={6}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:gap-y-6"
        >
          <ImageSection project={imageSources.doubleMoon} />
        </Box>

        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">logos</h3>
        </Box>
        <Box
          my={4}
          className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6 gap-y-10 md:gap-y-32"
        >
          <ImageSection project={imageSources.logos} />
        </Box>

        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">posters</h3>
        </Box>
        <Box
          my={4}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:gap-y-32"
        >
          <ImageSection project={imageSources.posters} />
        </Box>

        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">APIs</h3>
          <h4>Random Quote Machine — freecodecamp.com</h4>
        </Box>
        <Box my={4} className="grid grid-cols-1 lg:grid-cols-1">
          <section>
            <div id="random-quote-machine" className="mb-5 text-center">
              <RandomMachine />
            </div>
          </section>
        </Box>
      </section>
    </Layout>
  );
}
