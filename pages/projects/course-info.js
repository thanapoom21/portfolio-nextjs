import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import CourseInfo from "../../components/fullstackopen-tutorial/CourseInfo";

const CourseInfoPage = () => {
  return (
    <Layout>
      <Head>
        <title>Course Info Tutorial</title>
      </Head>
      <Container>
        <CourseInfo />
      </Container>
    </Layout>
  );
};

export default CourseInfoPage;
