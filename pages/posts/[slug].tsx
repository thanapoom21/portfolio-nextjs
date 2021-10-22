import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/posts";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }) {
  const router = useRouter();
  if (!router.isFallback && !postData?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {postData.title} | Next.js Blog Posts with Markdown
                </title>
                <meta property="og:image" content={postData.ogImage.url} />
              </Head>
              <PostHeader
                title={postData.title}
                coverImage={postData.coverImage}
                date={postData.date}
                author={postData.author}
              />
              <PostBody content={postData.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: {
  params: {
    slug: string
  }
}) => {
  const postData = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(postData.content || "");

  return {
    props: {
      postData: {
        ...postData,
        content,
      },
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
