import Head from "next/head";
import { Image } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { AUTHOR_NAME, SITE_TITLE, SITE_DESCRIPTION, CURRENT_URL, SITE_NAME } from '../lib/constants'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={SITE_TITLE} key="ogtitle" />
        <meta property="og:description" content={SITE_DESCRIPTION} key="ogdesc" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CURRENT_URL} key="ogurl" />
        <meta
          property="og:image"
          content="https://portfolio21-images.s3.us-west-1.amazonaws.com/cover.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content={SITE_NAME} key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark.min.css" />
      </Head>
      <div className={styles.wrapperBorder}>
        <Navbar />
        <div className="max-w-6xl px-4 mx-auto mt-12 mb-24">
          {home ? (
            <header className={styles.header}>
              <Image
                src="/images/logo_no_border2.svg"
                className={`${utilStyles.borderCircle}  w-1/2 md:w-2/4 lg:w-1/4`}
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
