import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, FaqSection, type FaqItem } from "../shared";
import { SellCollectionForm } from "./sell-collection-form";

export const metadata: Metadata = {
  title: "Sell Pokémon Cards & Collections in Lehigh Valley",
  description:
    "Sell Pokémon singles, PSA slabs, sealed product, binders, and complete collections to Let's Go Cards in West Easton, PA. Fair cash offers and no-pressure reviews.",
  alternates: {
    canonical: "/sell-your-collection"
  }
};

const cardTypes = [
  "Single PSA cards",
  "Singles",
  "PSA slabs",
  "Sealed Pokémon product",
  "Binders",
  "Complete collections"
];

const sellFaq: FaqItem[] = [
  {
    question: "What Pokémon cards and collections do you buy?",
    answer:
      "Let's Go Cards reviews Pokémon singles, single PSA cards, PSA slabs, sealed Pokémon product, binders, vintage collections, and complete collections."
  },
  {
    question: "Can I sell just one PSA graded Pokémon card?",
    answer:
      "Yes. We buy everything from one PSA graded Pokémon card to full collections when the card or collection is a good fit for the shop."
  },
  {
    question: "Are collection reviews high pressure?",
    answer:
      "No. Collection reviews are professional and no pressure. We explain condition, demand, and offer options so you can decide what feels right."
  },
  {
    question: "Can I get cash, trade, or consignment options?",
    answer:
      "Cash offers, trade offers, and consignment opportunities may be available depending on the collection, current demand, and what the shop can responsibly support."
  },
  {
    question: "Should I send photos before visiting?",
    answer:
      "Photos are helpful, especially for larger collections, sealed products, and graded cards. You can submit the form, email photos, or bring the collection to the West Easton shop."
  }
];

export default function SellYourCollection() {
  return (
    <main>
      <FaqJsonLd items={sellFaq} />
      <section className="page-hero compact">
        <p className="eyebrow">Fair cash offers for Pokémon collections</p>
        <h1>Sell Pokémon Cards and Collections</h1>
        <p>
          Sell one PSA graded card, a binder, sealed Pokémon product, or an entire collection
          through a safe, professional, no-pressure review with Let&apos;s Go Cards in West Easton,
          Pennsylvania.
        </p>
      </section>

      <section className="section sell-options-section">
        <div className="section-heading">
          <p className="eyebrow">What we review</p>
          <h2>Sell Your Cards Your Way</h2>
          <p>
            Bring cards to the shop or send photos first. We are a licensed, family-owned Pokémon
            specialty store focused on honest conversations, fair cash offers, and long-term
            relationships with collectors. Trade offers and consignment options may also be
            available depending on the collection.
          </p>
          <p>
            Looking to trade instead of sell? Visit our{" "}
            <Link href="/buy-sell-trade">Buy, Sell &amp; Trade Pokémon Cards in Easton, PA</Link>{" "}
            page, or{" "}
            <Link href="/contact">contact us</Link> with questions before bringing cards in.
          </p>
        </div>
        <div className="sell-type-grid">
          {cardTypes.map((type) => (
            <article key={type}>
              <span>✓</span>
              <h3>{type}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="form-section">
        <SellCollectionForm />
        <aside className="tip-panel">
          <h2>A clear, respectful review</h2>
          <p>
            Let&apos;s Go Cards reviews condition, demand, and current market interest before making
            an offer. You can ask questions, compare options, and decide what feels right without
            pressure.
          </p>
          <h3>What sellers can expect</h3>
          <p>
            Safe, professional transactions, fair cash offers when we can make them, and a clear
            next step whether you have one special PSA card or a complete Pokémon collection.
          </p>
          <h3>Photo tips</h3>
          <p>
            For the fastest review, include wide shots of the whole collection plus close-ups of the
            rarest cards, graded labels, and sealed product condition. You can also email photos
            directly to shopletsgocards@gmail.com.
          </p>
          <ul>
            <li>Front and back photos for valuable singles</li>
            <li>Clear PSA, CGC, or Beckett cert numbers</li>
            <li>Any notes about scratches, whitening, or dents</li>
          </ul>
        </aside>
      </section>
      <FaqSection
        title="Selling Pokémon Cards FAQ"
        intro="Clear answers for collectors in Easton, West Easton, and the Lehigh Valley who are thinking about selling Pokémon cards."
        items={sellFaq}
      />
    </main>
  );
}
