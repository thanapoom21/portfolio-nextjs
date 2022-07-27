import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Cacaocafe from "../../components/fullstackopen-tutorial/Cacaocafe";

const CacaocafePage = () => {
  return (
    <Layout>
      <Head>
        <title>Cacao Cafe</title>
      </Head>
      <Container>
        <Cacaocafe />
      </Container>
    </Layout>
  );
};

export default CacaocafePage;
