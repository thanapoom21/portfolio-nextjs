import Head from "next/head";
import { Image } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/layout.module.css";
import {
  AUTHOR_NAME,
  CURRENT_URL,
  HOME_OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "../lib/constants";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={SITE_TITLE} key="ogtitle" />
        <meta
          property="og:description"
          content={SITE_DESCRIPTION}
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CURRENT_URL} key="ogurl" />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogimage" />
        <meta property="og:site_name" content={SITE_NAME} key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
      </Head>
      <div className={styles.wrapperBorder}>
        <Navbar />
        <div className="max-w-6xl px-4 mx-auto mt-12 mb-10">
          {home ? (
            <header className={styles.header}>
              <Image
                src="/images/logo_no_border2.svg"
                className={`w-1/4`}
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
