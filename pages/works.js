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
        <Box
          mt={4}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:gap-y-32"
        >
          <section>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter my-2">
              First
            </h2>
            <div>
              <div className="mb-5">
                <Image
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/1200x600"
                />
              </div>
              <h3>Something</h3>
            </div>
          </section>
          <section>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter my-2">
              First
            </h2>
            <div>
              <div className="mb-5">
                <Image
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/1200x600"
                />
              </div>
              <h3>Something</h3>
            </div>
          </section>
          <section>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter my-2">
              First
            </h2>
            <div>
              <div className="mb-5">
                <Image
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/1200x600"
                />
              </div>
              <h3>Something</h3>
            </div>
          </section>
          <section>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter my-2">
              First
            </h2>
            <div>
              <div className="mb-5">
                <Image
                  src="gibbresh.png"
                  fallbackSrc="https://via.placeholder.com/1200x600"
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
