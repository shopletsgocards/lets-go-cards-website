import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Let's Go Cards",
  description:
    "Contact Let's Go Cards in West Easton, Pennsylvania for Pokemon card buying, selling, trading, collection reviews, current hours, and soft opening details.",
  alternates: {
    canonical: "/contact"
  }
};

const googleBusinessProfileUrl =
  "https://www.google.com/search?q=Let%27s+Go+Cards+708A+East+Street+West+Easton+PA";

export default function Contact() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Now open in West Easton</p>
        <h1>Contact</h1>
        <p>
          Questions about a collection, card availability, trades, or current hours? Call, email,
          or stop by the shop in West Easton. Soft Opening — Saturday, August 15 at 4:00 PM.
        </p>
      </section>
      <section className="contact-layout">
        <ContactForm />
        <aside className="contact-card">
          <h2>Store Info</h2>
          <p>
            <strong>Let&apos;s Go Cards</strong>
            <br />
            708A East Street
            <br />
            West Easton, PA 18042
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+14842611453">484-261-1453</a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:shopletsgocards@gmail.com">shopletsgocards@gmail.com</a>
            <br />
            <strong>Website:</strong>{" "}
            <a href="https://www.ShopLetsGoCards.com">www.ShopLetsGoCards.com</a>
          </p>
          <div className="contact-hours">
            <h3>Current Hours</h3>
            <p>
              Store hours may change during the soft opening period. Please check our Google
              Business Profile for the most current hours before visiting.
            </p>
            <a href={googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer">
              View Current Hours on Google
            </a>
          </div>
          <iframe
            className="map-embed"
            title="Google Maps location for Let's Go Cards"
            src="https://www.google.com/maps?q=708A%20East%20Street%2C%20West%20Easton%2C%20PA%2018042&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </aside>
      </section>
    </main>
  );
}
