import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeadingOne from "../components/headingOne";
import utilStyles from "../styles/utils.module.css";
import { Box, Image, Wrap, WrapItem } from "@chakra-ui/react";

const photos = [
  {
    imageUrl: "https://source.unsplash.com/user/earl_plannerzone/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://source.unsplash.com/user/erondu/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://source.unsplash.com/user/acharki95/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://source.unsplash.com/user/sigmund/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://source.unsplash.com/user/miteneva/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://source.unsplash.com/user/tranmautritam/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://source.unsplash.com/user/thenewmalcolm/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://source.unsplash.com/user/louishansel/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://source.unsplash.com/user/andrazlazic/640x480",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
];

export default function Photons() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd}`}>
        <HeadingOne>Collected Photons</HeadingOne>
        <Box mt={4}>
          <Wrap justify="center" align="center">
            {photos.map((photo, idx) => {
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
                  <Image src={photo.imageUrl} alt={photo.imageAlt} />
                </WrapItem>
              );
            })}
          </Wrap>
        </Box>
      </section>
    </Layout>
  );
}
