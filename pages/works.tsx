import Head from "next/head";
import Layout from "../components/layout";
import HeadingOne from "../components/headingOne";
import { Box, Image } from "@chakra-ui/react";
import utilStyles from "../styles/utils.module.css";
import RandomMachine from "./fcc-tutorials-projects/random-quote-machine";
import TodoApp from "./fcc-tutorials-projects/todo-app";
import { SITE_TITLE } from '../lib/constants';

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
  }],

  booklets: [{
    src: "/assets/works/booklets/geometry-artwork-1.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-1.jpg",
    alt: "geometry-artwork-1"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-2.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-2.jpg",
    alt: "geometry-artwork-2"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-3.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-3.jpg",
    alt: "geometry-artwork-3"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-4.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-4.jpg",
    alt: "geometry-artwork-4"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-5.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-5.jpg",
    alt: "geometry-artwork-5"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-6.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-6.jpg",
    alt: "geometry-artwork-6"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-7.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-7.jpg",
    alt: "geometry-artwork-7"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-8.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-8.jpg",
    alt: "geometry-artwork-8"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-9.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-9.jpg",
    alt: "geometry-artwork-9"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-10.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-10.jpg",
    alt: "geometry-artwork-10"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-11.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-11.jpg",
    alt: "geometry-artwork-11"
  },
  {
    src: "/assets/works/booklets/geometry-artwork-12.webp",
    fallbackSrc: "/assets/works/booklets/geometry-artwork-12.jpg",
    alt: "geometry-artwork-12"
  }]
}

interface Project {
  src: string,
  fallbackSrc: string,
  alt: string
}

const ImageSection = ({ project }: { project: Project[] }) => {
  return (
    <>
      {project.map((obj: { alt: string; src: string; fallbackSrc: string; }) => {
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

const BoxOfProjects = ({ name, gridCols, lgGridCols, mdGridCols, project }: {
  name: string,
  gridCols: number,
  lgGridCols: number,
  mdGridCols: number,
  project: Project[]
}) => {
  return (
    <>
      <Box my={6}>
        <h3 className="text-xl md:text-3xl font-bold">{name}</h3>
      </Box>
      <Box
        my={6}
        className={`grid grid-cols-${gridCols} lg:grid-cols-${lgGridCols} lg:gap-x-6 gap-y-10 md:grid-cols-${mdGridCols} md:gap-x-6 md:gap-y-16`}
      >
        <ImageSection project={project} />
      </Box>
    </>
  )
}

const Works = () => {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <HeadingOne>Works</HeadingOne>

        <BoxOfProjects name="drstile" gridCols={1} lgGridCols={2} mdGridCols={2} project={imageSources.drstile}/>
        <BoxOfProjects name="double moon" gridCols={1} lgGridCols={3} mdGridCols={3} project={imageSources.doubleMoon}/>
        <BoxOfProjects name="logos" gridCols={2} lgGridCols={4} mdGridCols={2} project={imageSources.logos}/>
        <BoxOfProjects name="posters" gridCols={1} lgGridCols={2} mdGridCols={2} project={imageSources.posters}/>
        <BoxOfProjects name="booklets" gridCols={2} lgGridCols={3} mdGridCols={2} project={imageSources.booklets}/>


        <Box>
          <h3 className="text-xl md:text-3xl font-bold">APIs</h3>
        </Box>
        <Box
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 md:grid-cols-2 md:gap-y-16"
        >

          <Box mt={6}>
            <Box>
              <h4>Random Quote Machine — freecodecamp.com</h4>
            </Box>
            <Box mt={4} className="grid grid-cols-1 lg:grid-cols-1">
              <section>
                <div id="random-quote-machine" className="mb-5 text-center">
                  <RandomMachine />
                </div>
              </section>
            </Box>
          </Box>
          <Box mt={6}>
            <Box>
              <h4>Todo App</h4>
            </Box>
            <Box mt={4} className="grid grid-cols-1 lg:grid-cols-1">
              <section>
                <div id="todo-app" className="mb-5 text-center">
                  <TodoApp />
                </div>
              </section>
            </Box>
          </Box>
        </Box>

      </section>
    </Layout>
  );
}

export default Works;