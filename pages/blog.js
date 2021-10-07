import Head from "next/head";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import HeadingOne from "../components/headingOne";
import { Box } from "@chakra-ui/react";
import { getAllPosts } from "../lib/posts";

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Posts with Markdown</title>
      </Head>
      <section>
        <HeadingOne>Blog</HeadingOne>
        <Box mt={4}>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Box>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: {
      allPosts,
    },
  };
}
