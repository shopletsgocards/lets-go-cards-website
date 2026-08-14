import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, FaqSection, type FaqItem } from "../shared";

export const metadata: Metadata = {
  title: "Buy, Sell & Trade Pokémon Cards in Easton, PA",
  description:
    "Buy, Sell & Trade Pokémon Cards in Easton, PA at Let's Go Cards. Shop singles, PSA slabs, sealed products, and get fair collection reviews.",
  alternates: {
    canonical: "/buy-sell-trade"
  }
};

const services = [
  ["Buy Pokémon Cards", "Shop Pokémon singles, PSA graded cards, sealed Pokémon products, supplies, and kid-friendly starter picks."],
  ["Sell Pokémon Cards", "Get straightforward offers for Pokémon singles, binders, graded cards, sealed product, and full collections."],
  ["Trade Pokémon Cards", "Work with the team to make fair local trades based on condition, demand, and current market interest."],
  ["Collection Reviews", "Get a second set of eyes before deciding what to sell, trade, keep, or consider for grading."]
];

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.shopletsgocards.com/buy-sell-trade#services",
  name: "Buy, Sell & Trade Pokémon Cards in Easton, PA",
  itemListElement: services.map(([name, description], index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name,
      description,
      provider: {
        "@type": "Store",
        "@id": "https://www.shopletsgocards.com/#localbusiness",
        name: "Let's Go Cards"
      },
      areaServed: [
        "West Easton PA",
        "Easton PA",
        "Lehigh Valley PA"
      ],
      url: "https://www.shopletsgocards.com/buy-sell-trade"
    }
  }))
};

const buySellTradeFaq: FaqItem[] = [
  {
    question: "Can I trade Pokémon cards at Let's Go Cards?",
    answer:
      "Yes. Let’s Go Cards reviews trade options based on card condition, demand, and current market interest so collectors can make fair local trades."
  },
  {
    question: "What Pokémon products can I shop for?",
    answer:
      "The shop focuses on Pokémon sealed products, Pokémon singles, PSA graded Pokémon cards, collector supplies, and handmade Pokémon-themed gifts."
  },
  {
    question: "Can I sell cards during the same visit?",
    answer:
      "Yes. You can bring Pokémon singles, PSA slabs, sealed product, binders, or larger collections for a no-pressure review while you are at the shop."
  },
  {
    question: "Do you help new collectors understand values?",
    answer:
      "Yes. The team explains condition, demand, grading, and trade considerations in a friendly way for kids, parents, and experienced collectors."
  }
];

export default function BuySellTrade() {
  return (
    <main>
      <FaqJsonLd items={buySellTradeFaq} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListSchema).replace(/</g, "\\u003c")
        }}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Pokémon card counter in West Easton</p>
        <h1>Buy, Sell &amp; Trade Pokémon Cards in Easton, PA</h1>
        <p>
          Whether you are chasing one Pokémon card, moving a full collection, trading locally, or
          helping a new collector learn the hobby, we keep the experience clear, fair, and
          welcoming.
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
          <h2>Ready for a Pokémon collection review?</h2>
          <p>
            Send photos first,{" "}
            <Link href="/sell-your-collection">Sell Pokémon Cards through a collection review</Link>,
            or stop by the shop with your cards for an in-person review. You can also{" "}
            <Link href="/visit-us">visit our Pokémon card shop in West Easton</Link> before coming in.
          </p>
        </div>
        <Link className="button primary sell-cta" href="/sell-your-collection">
          Sell Pokémon Cards
        </Link>
      </section>
      <FaqSection
        title="Buy, Sell, and Trade FAQ"
        intro="Helpful answers for local Pokémon collectors in Easton, West Easton, and the Lehigh Valley."
        items={buySellTradeFaq}
      />
    </main>
  );
}
