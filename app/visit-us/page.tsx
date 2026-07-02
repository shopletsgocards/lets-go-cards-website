import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Let's Go Cards in West Easton, PA",
  description:
    "Visit Let's Go Cards at 708A East Street in West Easton, Pennsylvania for Pokemon cards, PSA slabs, sealed product, trades, and collection reviews.",
  alternates: {
    canonical: "/visit-us"
  }
};

const storeHours = [
  ["Monday", "Hours coming soon"],
  ["Tuesday", "Hours coming soon"],
  ["Wednesday", "Hours coming soon"],
  ["Thursday", "Hours coming soon"],
  ["Friday", "Hours coming soon"],
  ["Saturday", "Hours coming soon"],
  ["Sunday", "Hours coming soon"]
];

const visitHighlights = [
  ["Shop Pokemon cards", "Browse singles, slabs, sealed product, and collector supplies."],
  ["Bring your collection", "Stop in with binders, slabs, sealed boxes, or full collections."],
  ["Trade locally", "Talk through condition, demand, and fair trade options at the counter."],
  ["Parking Information", "Parking information placeholder. Final parking details can be added here."],
  ["Store Hours", "Store hours placeholder. Final weekly hours can be added when ready."]
];

export default function VisitUs() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">West Easton card shop</p>
        <h1>Visit Us</h1>
        <p>
          Stop by Let&apos;s Go Cards for Pokemon singles, PSA slabs, sealed product, collection
          reviews, and friendly help from local collectors.
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
          <h2>Hours</h2>
          <dl>
            {storeHours.map(([day, hours]) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div className="map-placeholder-label">
          <p className="eyebrow">Google Map placeholder</p>
          <h2>Find the shop</h2>
          <p>
            The embedded map below marks the store location. It can be replaced or adjusted if the
            final map embed changes.
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
