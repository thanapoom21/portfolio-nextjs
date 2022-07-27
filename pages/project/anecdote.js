import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import GreatQuote from "../../components/fullstackopen-tutorial/GreatQuote";

const GreatQuotePage = () => {
  return (
    <Layout>
      <Head>
        <title>Great Quotes</title>
      </Head>
      <Container>
        <GreatQuote />
      </Container>
    </Layout>
  );
};

export default GreatQuotePage;
