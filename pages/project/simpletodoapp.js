import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import SimpleTodoApp from "../../components/fcc-tutorial/todo-app";

const SimpleTodoAppPage = () => {
  return (
    <Layout>
      <Head>
        <title>Simple Todo App</title>
      </Head>
      <Container>
        <SimpleTodoApp />
      </Container>
    </Layout>
  );
};

export default SimpleTodoAppPage;