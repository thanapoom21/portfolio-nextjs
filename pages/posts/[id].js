import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Link from "next/link";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import { Box, Container, Heading } from "@chakra-ui/react";

export default function Post({ postData, blog }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box as="article" mt={10}>
        <Container maxW="container.md">
          <Heading as="h1" size="2xl">
            {postData.title}
          </Heading>

          <Box as="section" mt={10} className={utilStyles.lightText}>
            <div className={utilStyles.flexSpaceBetween}>
              <span>{postData.author}</span>
              <span>
                <Date dateString={postData.date} />
              </span>
            </div>
            <p className={utilStyles.marginTop0}>{postData.position}</p>
          </Box>
          <Box as="section" mt={10} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          {!blog && (
            <div className={styles.backToHome}>
              <Link href="/blog">
                <a>← Go Back</a>
              </Link>
            </div>
          )}
        </Container>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
