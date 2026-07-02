import type { Metadata } from "next";
import { SellCollectionForm } from "./sell-collection-form";

export const metadata: Metadata = {
  title: "Sell Your Cards",
  description:
    "Submit photos of your Pokemon card collection to Let's Go Cards in West Easton, PA for a cash offer."
};

const cardTypes = [
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
        <p className="eyebrow">Cash offers for Pokemon collections</p>
        <h1>Sell Your Cards</h1>
        <p>
          Send photos of your Pokemon cards, slabs, sealed product, or full collection and receive
          a clear next step from Let&apos;s Go Cards.
        </p>
      </section>

      <section className="section sell-options-section">
        <div className="section-heading">
          <p className="eyebrow">What we review</p>
          <h2>Sell Your Cards Your Way</h2>
          <p>
            Bring cards to the shop or send photos first. Depending on the collection, cash offers,
            trade offers, and consignment options may be available.
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
          <h2>Offer options</h2>
          <p>
            Let&apos;s Go Cards may be able to discuss cash offers, trade offers, or consignment
            options after reviewing condition, demand, and current market interest.
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
