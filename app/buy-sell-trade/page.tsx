import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy, Sell, and Trade Pokemon Cards",
  description:
    "Buy Pokemon cards, sell collections, and trade singles, PSA slabs, and sealed product at Let's Go Cards in West Easton, PA.",
  alternates: {
    canonical: "/buy-sell-trade"
  }
};

const services = [
  ["Buy", "Shop singles, slabs, sealed product, supplies, and kid-friendly starter picks."],
  ["Sell", "Get straightforward offers for singles, binders, graded cards, and sealed collections."],
  ["Trade", "Work with the team to make fair trades based on condition, demand, and current market."],
  ["Grade Prep", "Get a second set of eyes before deciding which cards may be worth grading."]
];

export default function BuySellTrade() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Your local card counter</p>
        <h1>Buy / Sell / Trade</h1>
        <p>
          Whether you are chasing one card, moving a full collection, or helping a new collector
          learn the hobby, we keep the experience clear and welcoming.
        </p>
      </section>
      <section className="section">
        <div className="service-grid">
          {services.map(([title, text]) => (
            <article className="service-card" key={title}>
              <span>{title.slice(0, 1)}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-band">
        <div>
          <h2>Ready for an offer?</h2>
          <p>Send photos first or stop by the shop with your cards for an in-person review.</p>
        </div>
        <Link className="button primary sell-cta" href="/sell-your-collection">
          Sell Your Cards
        </Link>
      </section>
    </main>
  );
}
