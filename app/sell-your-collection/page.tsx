import type { Metadata } from "next";
import { SellCollectionForm } from "./sell-collection-form";

export const metadata: Metadata = {
  title: "Sell Pokemon Cards in West Easton, PA",
  description:
    "Sell Pokemon singles, PSA slabs, sealed product, binders, and complete collections to Let's Go Cards in West Easton, PA. Fair cash offers, safe transactions, and no-pressure reviews.",
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

export default function SellYourCollection() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Fair cash offers for Pokémon collections</p>
        <h1>Sell Your Cards</h1>
        <p>
          Sell one PSA graded card, a binder, sealed Pokémon product, or an entire collection
          through a safe, professional, no-pressure review with Let&apos;s Go Cards.
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
    </main>
  );
}
