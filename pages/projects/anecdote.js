import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Anecdote from "../../components/fullstackopen-tutorial/Anecdotes"

const AnecdotePage = () => {
  return (
    <Layout>
      <Head>
        <title>Anecdotes Tutorial</title>
      </Head>
      <Container>
        <Anecdote />
      </Container>
    </Layout>
  )
}

export default AnecdotePage;