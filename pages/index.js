import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p
          className={`${utilStyles.fontRoboto} text-4xl md:text-6xl font-bold md:leading-snug`}
        >
          Hi, I'm Thanapoom and I go by Music. I'm a web developer and a
          translator (English/Thai). I like to create graphics such as logos,
          business cards, posters, brochures, and websites. However, I consider
          myself as a new kid on the block in this field because there are many
          things that I don't fully understand. I am eager to learn new things.
          I've done freelance work for small businesses, participated in
          startups, and collaborated with talented people to build digital
          products for both business and consumer use. I'm naturally curious,
          relentlessly optimistic, and gradually & constantly improving my
          ability. 🎉
        </p>
        <p
          className={`${utilStyles.fontRoboto} text-4xl md:text-6xl font-bold md:leading-snug`}
        >
          Pop quiz: what’s the greatest thing to happen to your mind, body, and
          soul in recent history? A cheeseburger, obviously. Cheeseburgers know
          that what you want can also be what you need.
        </p>
        <p
          className={`${utilStyles.fontRoboto} text-4xl md:text-6xl font-bold md:leading-snug`}
        >
          If you feel like having a chat, feel free to drop me a line.
        </p>
      </section>
    </Layout>
  );
}
