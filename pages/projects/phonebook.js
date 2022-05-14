import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Phonebook from "../../components/fullstackopen-tutorial/Phonebook";

const PhonebookPage = () => {
  return (
    <Layout>
      <Head>
        <title>Phonebook Tutorial</title>
      </Head>
      <Container>
        <Phonebook />
      </Container>
    </Layout>
  );
};

export default PhonebookPage;
