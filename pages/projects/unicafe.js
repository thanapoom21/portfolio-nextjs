import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Unicafe from "../../components/fullstackopen-tutorial/Unicafe";

const UnicafePage = () => {
  return (
    <Layout>
      <Head>
        <title>Unicafe Tutorial</title>
      </Head>
      <Container>
        <Unicafe />
      </Container>
    </Layout>
  );
};

export default UnicafePage;
