import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Container from "../../components/container";

const ProjectsLandingPage = () => {
  return (
    <Layout>
      <Head>
        <title>Tutorials From FullstackOpen</title>
      </Head>
      <Container>
        <ul>
          <li>
            <Link href="/projects/anecdote">
              <a>Anecdote</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/country-list">
              <a>Country List</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/course-info">
              <a>Courses Infomation</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/phonebook">
              <a>Phonebook</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/unicafe">
              <a>Unicafe</a>
            </Link>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default ProjectsLandingPage;
