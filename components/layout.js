import Head from "next/head";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { AUTHOR_NAME, SITE_TITLE } from '../lib/constants'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A personal website using Next.js" />
        <meta
          property="og:image"
          content="https://portfolio21-images.s3.us-west-1.amazonaws.com/cover.jpg"
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.wrapperBorder}>
        <Navbar />
        <div className={styles.container}>
          {home ? (
            <header className={styles.header}>
              <Image
                priority
                src="/images/logo_no_border2.svg"
                className={utilStyles.borderCircle}
                height={300}
                width={300}
                alt={AUTHOR_NAME}
              />
            </header>
          ) : null}
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
