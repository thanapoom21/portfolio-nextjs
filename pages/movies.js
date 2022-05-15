import Head from "next/head";
import Layout from "../components/layout";
import HeadingOne from "../components/headingOne";
import {
  Box,
  Container,
  Flex,
  Image,
  Badge,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import utilStyles from "../styles/utils.module.css";
import { SITE_TITLE } from "../lib/constants";

import { connectToDatabase } from "../lib/mongodb";

export default function Movies({ movies }) {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <HeadingOne>Top 20 Movies of All Time</HeadingOne>
        <Container maxW="6xl">
          {movies.map((movie, idx) => (
            <Box key={idx} overflow="hidden" m={10}>
              <Box display={{ md: "flex" }} justifyContent="space-around">
                <Box maxW="sm">
                  <Image
                    src={movie.poster}
                    alt={movie.title}
                    objectFit="cover"
                  />
                </Box>
                <Flex
                  maxW="sm"
                  fontSize={["sm", "md", "lg", "xl"]}
                  direction="column"
                >
                  <Box>
                    <strong>Title:</strong> {movie.title}
                  </Box>
                  <Box>
                    <strong>Year Released:</strong>
                    <Badge ml="1" colorScheme="green">
                      {movie.year}
                    </Badge>
                  </Box>
                  <Box>
                    <strong>IMDB Rating:</strong> {movie.imdb.rating}
                  </Box>
                  <Box>
                    <strong>Directors:</strong>
                    <UnorderedList>
                      {movie.directors.map((director, idx) => {
                        return <ListItem key={idx}>{director}</ListItem>;
                      })}
                    </UnorderedList>
                  </Box>
                  <Box>
                    <strong>Cast & Crew:</strong>
                    <UnorderedList>
                      {movie.cast.map((cast, idx) => {
                        return <ListItem key={idx}>{cast}</ListItem>;
                      })}
                    </UnorderedList>
                  </Box>
                  <Box>
                    <strong>Genres:</strong>
                    {movie.genres.map((genre, idx) => {
                      return (
                        <Badge key={idx} ml="1" colorScheme="green">
                          {genre}
                        </Badge>
                      );
                    })}
                  </Box>
                  <Box>
                    <strong>Plot Summary:</strong> {movie.plot}
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))}
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}
