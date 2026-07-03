import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Let's Go Cards",
  description:
    "Meet Wes, Laurin, and Enzo, the family behind Let's Go Cards, the Lehigh Valley's Pokemon specialty store opening soon in West Easton, PA.",
  alternates: {
    canonical: "/about-us"
  }
};

export default function AboutUs() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Lehigh Valley Pokémon destination</p>
        <h1>About Let&apos;s Go Cards</h1>
        <p>
          Founded by Wes, Laurin, and Enzo, Let&apos;s Go Cards is a Pokémon specialty store built
          around collecting, community, family, and the joy of sharing the hobby across generations.
        </p>
      </section>
      <section className="story-section">
        <div>
          <h2>Made for Pokémon collectors, parents, and kids</h2>
          <p>
            Let&apos;s Go Cards was created to be the Lehigh Valley&apos;s Pokémon destination: a
            welcoming place to shop Pokémon sealed products, Pokémon singles, PSA graded cards,
            collection reviews, trades, and Laurin&apos;s handmade Pokémon-themed merchandise and
            gifts.
          </p>
          <p>
            Our focus is intentional. We keep Let&apos;s Go Cards centered on Pokémon so families
            and collectors can enjoy a more thoughtful experience, from helping a new collector
            choose a first pack to talking through condition, value, and fair trade options with
            experienced collectors.
          </p>
          <p>
            Everything we do is built around trust: honest conversations, transparent collection
            reviews, fair offers, safe professional transactions, and long-term relationships with
            collectors who want a local shop they can come back to.
          </p>
          <p>
            As Pokémon celebrates its 30th anniversary, it is amazing to see how the hobby connects
            generations. Parents who collected cards as kids are now opening packs with their own
            children, sharing favorite characters, and making new memories together.
          </p>
          <p>
            That is the heart of Let&apos;s Go Cards: a professional, family-friendly Pokémon shop
            where collectors of every age can buy, sell, trade, learn, celebrate big pulls, discover
            handmade gifts, and feel like part of the local Pokémon community.
          </p>
        </div>
        <div className="family-card">
          <span>Wes</span>
          <span>Laurin</span>
          <span>Enzo</span>
        </div>
      </section>
    </main>
  );
}
