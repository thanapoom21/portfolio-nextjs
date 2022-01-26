import Head from "next/head";
import Image from 'next/image';
import Layout from "../components/layout";
import HeadingOne from "../components/headingOne";
import utilStyles from "../styles/utils.module.css";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SITE_TITLE } from '../lib/constants'

const Photons = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/614679f84a82881d6c519db1/2")
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setItems(result.record.photos);
      })
  }, []);

  const mappedImages = items.map((photo, idx) => {
    return (
      <WrapItem
        key={idx}
        w={{
          base: "100%",
          md: "48.55555%",
          lg: "32.33333%",
        }}
        justify="space-evenly"
      >
        <Image
          src={photo.imageUrl}
          width={480}
          height={320}
          alt={photo.imageAlt} />
      </WrapItem>
    );
  })

  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <section className={`${utilStyles.headingMd}`}>
        <HeadingOne>Collected Photons</HeadingOne>
        <Box mt={4}>
          {
            isLoaded
              ?
              <Wrap justify="center" align="center">
                {mappedImages}
              </Wrap>
              :
              <div>Loading.....</div>
          }
        </Box>
      </section>
    </Layout>
  );
}

export default Photons;