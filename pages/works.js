import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeadingOne from "../components/headingOne";
import { Box, Image } from "@chakra-ui/react";
import utilStyles from "../styles/utils.module.css";

export default function Works() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <HeadingOne>Works</HeadingOne>
        <Box mt={4}>
          <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter">
            Web
          </h2>
        </Box>
        <Box
          mt={4}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:gap-y-32"
        >
          <section>
            <div>
              <div className="mb-5">
                <Image
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/640x480"
                />
              </div>
              <h3>Something</h3>
            </div>
          </section>
          <section>
            <div>
              <div className="mb-5">
                <Image
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/640x480"
                />
              </div>
              <h3>Something</h3>
            </div>
          </section>
          <section>
            <div>
              <div className="mb-5">
                <Image
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/640x480"
                />
              </div>
              <h3>Something</h3>
            </div>
          </section>
          <section>
            <div>
              <div className="mb-5">
                <Image
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/640x480"
                />
              </div>
              <h3>Something</h3>
            </div>
          </section>
        </Box>
      </section>
    </Layout>
  );
}
