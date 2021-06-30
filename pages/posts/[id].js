import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Link from "next/link";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData, blog }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <div className={utilStyles.flexSpaceBetween}>
            <span>{postData.author}</span>
            <span>
              <Date dateString={postData.date} />
            </span>
          </div>
          <p className={utilStyles.marginTop0}>{postData.position}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      {!blog && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
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
