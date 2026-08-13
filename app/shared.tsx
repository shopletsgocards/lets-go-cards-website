const premiumCards = [
  {
    name: "First Partner Holo",
    grade: "PSA 10",
    detail: "Iconic starter-era energy with a crisp holo pattern and standout eye appeal."
  },
  {
    name: "Golden Voltage Rare",
    grade: "PSA 9",
    detail: "Electric-themed collector favorite with strong color and clean centering."
  },
  {
    name: "Moonlit Dragon Alt",
    grade: "PSA 10",
    detail: "A modern chase card known for dramatic art direction and premium demand."
  }
];

const purchases = [
  "Pokémon singles",
  "PSA graded cards",
  "Sealed Pokémon product"
];

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({
  eyebrow = "Frequently asked questions",
  title,
  intro,
  items
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: FaqItem[];
}) {
  return (
    <section className="section faq-section">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      <div className="faq-grid">
        {items.map((item) => (
          <article className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c")
      }}
    />
  );
}

export function CardShowcase({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Collector favorites</p>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="card-grid">
        {premiumCards.map((card, index) => (
          <article className="feature-card" key={card.name}>
            <div className={`card-art art-${index + 1}`}>
              <span>{card.grade}</span>
            </div>
            <h3>{card.name}</h3>
            <p>{card.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RecentPurchases() {
  return (
    <section className="section purchases">
      <div className="section-heading">
        <p className="eyebrow">Collection reviews</p>
        <h2>What We Buy</h2>
        <p>
          From childhood binders to high-end slabs, we review every collection with care and clear
          communication.
        </p>
      </div>
      <div className="purchase-list">
        {purchases.map((purchase) => (
          <article key={purchase}>
            <span className="spark">★</span>
            <h3>{purchase}</h3>
            <p>Evaluated in-store with a friendly explanation of condition, demand, and offer range.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
