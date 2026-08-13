import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Let's Go Cards in West Easton, PA",
  description:
    "Visit Let's Go Cards, now open at 708A East Street in West Easton, Pennsylvania for Pokemon cards, PSA slabs, sealed product, trades, and collection reviews.",
  alternates: {
    canonical: "/visit-us"
  }
};

const googleBusinessProfileUrl =
  "https://www.google.com/search?q=Let%27s+Go+Cards+708A+East+Street+West+Easton+PA";

const visitHighlights = [
  ["Shop Pokemon cards", "Browse singles, slabs, sealed product, and collector supplies."],
  ["Bring your collection", "Stop in with binders, slabs, sealed boxes, or full collections."],
  ["Trade locally", "Talk through condition, demand, and fair trade options at the counter."],
  ["Soft Opening", "Soft Opening — Saturday, August 15 at 4:00 PM."],
  ["Current Hours", "Please check our Google Business Profile for current store hours before visiting."]
];

export default function VisitUs() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Now open in West Easton</p>
        <h1>Visit Us</h1>
        <p>
          Let&apos;s Go Cards is now open for Pokemon singles, PSA slabs, sealed product,
          collection reviews, and friendly help from local collectors. Soft Opening — Saturday,
          August 15 at 4:00 PM.
        </p>
      </section>

      <section className="section visit-page-section">
        <div className="visit-page-copy">
          <p className="eyebrow">Shop details</p>
          <h2>Let&apos;s Go Cards</h2>
          <p>
            708A East Street
            <br />
            West Easton, PA 18042
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+14842611453">484-261-1453</a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:shopletsgocards@gmail.com">shopletsgocards@gmail.com</a>
          </p>
          <div className="visit-highlight-grid">
            {visitHighlights.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="hours-card">
          <h2>Current Hours</h2>
          <p>
            Store hours may change during the soft opening period. Please check our Google Business
            Profile for the most current hours before visiting.
          </p>
          <a href={googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer">
            View Current Hours on Google
          </a>
        </aside>
        <div className="map-placeholder-label">
          <p className="eyebrow">Google Map</p>
          <h2>Find the shop</h2>
          <p>
            The embedded map below marks the store location. For the latest hours and profile
            details, visit our Google Business Profile.
          </p>
        </div>
        <iframe
          className="map-embed visit-page-map"
          title="Google Maps location for Let's Go Cards"
          src="https://www.google.com/maps?q=708A%20East%20Street%2C%20West%20Easton%2C%20PA%2018042&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
