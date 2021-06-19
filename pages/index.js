import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Thanapoom and I go by Music. I'm a web developer and a
          translator (English/Thai). You can contact me on Twitter. 🍻 Cheers, I
          am Fabian, an award winning frontend developer from rural Italy,
          currently living in ~~Sydney~~ on the road. I've worked with and for
          startups like Canva and Spreadshirt, helped companies like DDB
          Worldwide and Munich Airport deliver kick-ass campaigns and cutting
          edge web experiences, judged the best websites around the globe as a
          jury member at awwwards, fucked up my own startup Momate, worked as a
          wedding photographer, created fancy architecture visualisations as a
          3d artist, played the shit out of Dota 2, backpacked 3 months through
          Vietnam with my lovely X100F and hiked 220km through freezing Swedish
          Lapland making friends with reindeers. I guess I like to stay active.
          🤷🏻‍♂️
        </p>
        <p>
          I have 9 years of experience as a developer and love working with
          React and other hip frameworks.
        </p>
        <p>If you fancy a chat feel free to drop me a line.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
