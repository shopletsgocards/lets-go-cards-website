import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, FaqSection, type FaqItem } from "../shared";

export const metadata: Metadata = {
  title: "Lehigh Valley Pokémon Specialty Store",
  description:
    "Meet the family behind Let's Go Cards, a Pokémon specialty store in West Easton, PA focused on community, fair collection reviews, and family collecting.",
  alternates: {
    canonical: "/about-us"
  }
};

const aboutFaq: FaqItem[] = [
  {
    question: "Is Let's Go Cards family owned?",
    answer:
      "Yes. Let's Go Cards was created by Wes, Laurin, and Enzo to share the fun of Pokémon collecting with families throughout the Lehigh Valley."
  },
  {
    question: "Why is the shop focused only on Pokémon?",
    answer:
      "The shop intentionally focuses on Pokémon so collectors and families can get a more thoughtful experience with Pokémon sealed products, singles, PSA slabs, collection reviews, trades, and handmade gifts."
  },
  {
    question: "Does Let's Go Cards support new collectors?",
    answer:
      "Yes. The shop is built to welcome kids, parents, new collectors, and longtime fans with honest conversations and friendly help."
  }
];

export default function AboutUs() {
  return (
    <main>
      <FaqJsonLd items={aboutFaq} />
      <section className="page-hero">
        <p className="eyebrow">Now open in West Easton</p>
        <h1>The Lehigh Valley&apos;s Pokémon Specialty Store</h1>
        <p>
          Founded by Wes, Laurin, and Enzo, Let&apos;s Go Cards is a Pokémon specialty store built
          around collecting, community, family, and the joy of sharing the hobby across generations.
          Soft Opening — Saturday, August 15 at 4:00 PM.
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
          <p>
            Ready to connect with us? Explore how to{" "}
            <Link href="/buy-sell-trade">Buy, Sell &amp; Trade Pokémon Cards in Easton, PA</Link>,{" "}
            <Link href="/sell-your-collection">Sell Pokémon Cards through a collection review</Link>, or{" "}
            <Link href="/visit-us">visit the West Easton shop</Link>.
          </p>
        </div>
        <div className="family-card">
          <span>Wes</span>
          <span>Laurin</span>
          <span>Enzo</span>
        </div>
      </section>
      <FaqSection
        title="About Let's Go Cards FAQ"
        intro="A quick look at what makes the shop intentionally Pokémon-focused and family-friendly."
        items={aboutFaq}
      />
    </main>
  );
}
