import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import CountryList from "../../components/fullstackopen-tutorial/CountryList";

const CountryListPage = () => {
  return (
    <Layout>
      <Head>
        <title>Country List Tutorial</title>
      </Head>
      <Container>
        <CountryList />
      </Container>
    </Layout>
  );
};

export default CountryListPage;
