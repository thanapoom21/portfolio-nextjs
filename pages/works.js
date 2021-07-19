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
        <Box my={6}>
          <h3 className="text-xl md:text-3xl font-bold">drstile</h3>
        </Box>
        <Box
          mt={4}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:gap-y-6"
        >
          <section>
            <div>
              <Image
                src="/assets/works/drstile-website/drstile-website-1.webp"
                fallbackSrc="/assets/works/drstile-website/drstile-website-1.jpg"
                alt="drstile-website-1"
              />
            </div>
          </section>
          <section>
            <div>
              <Image
                src="/assets/works/drstile-website/drstile-website-2.webp"
                fallbackSrc="/assets/works/drstile-website/drstile-website-2.jpg"
                alt="drstile-website-2"
              />
            </div>
          </section>
          <section>
            <div>
              <Image
                src="/assets/works/drstile-website/drstile-website-3.webp"
                fallbackSrc="/assets/works/drstile-website/drstile-website-3.jpg"
                alt="drstile-website-3"
              />
            </div>
          </section>
          <section>
            <div>
              <Image
                src="/assets/works/drstile-website/drstile-website-4.webp"
                fallbackSrc="/assets/works/drstile-website/drstile-website-4.jpg"
                alt="drstile-website-4"
              />
            </div>
          </section>
        </Box>

        <Box mt={6}>
          <h3 className="text-xl md:text-3xl font-bold">double moon</h3>
        </Box>
        <Box
          mt={4}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:gap-y-6"
        >
          <section>
            <div>
              <Image
                src="/assets/works/double-moon/double-moon-1.webp"
                fallbackSrc="/assets/works/double-moon/double-moon-1.jpg"
                alt="drstile-website-1"
              />
            </div>
          </section>
          <section>
            <div>
              <Image
                src="/assets/works/double-moon/double-moon-2.webp"
                fallbackSrc="/assets/works/double-moon/double-moon-1.jpg"
                alt="drstile-website-2"
              />
            </div>
          </section>
          <section>
            <div>
              <Image
                src="/assets/works/double-moon/double-moon-3.webp"
                fallbackSrc="/assets/works/double-moon/double-moon-1.jpg"
                alt="drstile-website-3"
              />
            </div>
          </section>
          <section>
            <div>
              <Image
                src="/assets/works/double-moon/double-moon-4.webp"
                fallbackSrc="/assets/works/double-moon/double-moon-1.jpg"
                alt="drstile-website-4"
              />
            </div>
          </section>
        </Box>

        <Box mt={10}>
          <h2 className="text-right text-3xl md:text-5xl font-bold">
            Graphics
          </h2>
        </Box>
        <Box
          mt={4}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:gap-y-32"
        >
          <section>
            <div className="mb-5">
              <Image
                src="gibbresh.png"
                fallbackSrc="https://via.placeholder.com/640x480"
              />
            </div>
            <h3>Something</h3>
          </section>
          <section>
            <div className="mb-5">
              <Image
                src="gibbresh.png"
                fallbackSrc="https://via.placeholder.com/640x480"
              />
            </div>
            <h3>Something</h3>
          </section>
        </Box>
      </section>
    </Layout>
  );
}
