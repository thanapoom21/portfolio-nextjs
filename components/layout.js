import Head from "next/head";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Thanapoom Phithakjarukorn";
export const siteTitle = "Next.js Portfolio Website";

export default function Layout({ children, home, blog }) {
  return (
    <div className={styles.wrapperBorder}>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="A personal website using Next.js" />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <Image
              priority
              src="/images/logo_no_border2.svg"
              className={utilStyles.borderCircle}
              height={300}
              width={300}
              alt={name}
            />
          ) : null}
        </header>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
