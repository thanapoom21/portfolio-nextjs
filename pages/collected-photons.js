import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Box, Badge, Container, Image, Stack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const photos = [
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
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

      <h1 className={utilStyles.superBoldText4rem}>Collected Photons</h1>
      <section className={utilStyles.headingMd}>
        <Stack direction="row" display={{ md: "flex", lg: "flex" }}>
          {photos.map((photo, idx) => {
            return (
              <Box
                key={idx}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={photo.imageUrl} alt={photo.imageAlt} />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="gray">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {photo.beds} beds &bull; {photo.baths} baths
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {photo.title}
                  </Box>

                  <Box>
                    {photo.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / wk
                    </Box>
                  </Box>

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < photo.rating ? "black.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {photo.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </section>
    </Layout>
  );
}
