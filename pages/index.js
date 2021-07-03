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
        <p className={utilStyles.superBoldText4rem}>
          Hi, I'm Thanapoom and I go by Music. I'm a web developer and a
          translator (English/Thai). 🍔 Epic cheeseburgers come in all kinds of
          manifestations, but we want them in and around our mouth no matter
          what. Slide those smashed patties with the gently caramelized meat fat
          between a toasted brioche bun and pass it over. You fall in love with
          the cheeseburger itself but the journey ain’t half bad either. They’re
          the childhood friend that knows your highest highs and lowest lows.
          They’ve been with you through thick and thin and they’re the best at
          keeping secrets. Whether it’s dressed up or informal, cheeseburgers
          have your back. 🎉
        </p>
        <p className={utilStyles.superBoldText4rem}>
          Pop quiz: what’s the greatest thing to happen to your mind, body, and
          soul in recent history? A cheeseburger, obviously. Cheeseburgers know
          that what you want can also be what you need.
        </p>
        <p className={utilStyles.superBoldText4rem}>
          If you feel like having a chat, feel free to drop me a line.
        </p>
      </section>
    </Layout>
  );
}
