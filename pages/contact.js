import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.superBoldText4rem}>Contact</h1>
        <p className={utilStyles.superBoldText3rem}>
          I'm available for freelance work. Drop me a line if you'd like to
          chat.
        </p>
        <p className={utilStyles.headingXl}>
          <a href="mailto:thanapoom.p.music@gmail.com?Subject=Web Development">
            thanapoom.p.music@gmail.com
          </a>
        </p>

        {repeatIt(3, <div>&#9660;</div>)}
      </section>
    </Layout>
  );
}

const repeatIt = (numberOfTimes, thingsToRepeat) => {
  let element = [];
  for (let index = 0; index < numberOfTimes; index++) {
    element.push(thingsToRepeat);
  }
  return element;
};
