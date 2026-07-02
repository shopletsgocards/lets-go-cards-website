import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Let's Go Cards",
  description:
    "Contact Let's Go Cards in West Easton, Pennsylvania for Pokemon card buying, selling, trading, collection reviews, and grand opening updates.",
  alternates: {
    canonical: "/contact"
  }
};

export default function Contact() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Visit or message us</p>
        <h1>Contact</h1>
        <p>
          Questions about a collection, card availability, or trades? Call, email, or stop by the
          shop in West Easton.
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
            <h3>Store Hours</h3>
            <p>
              Monday-Friday: Hours coming soon
              <br />
              Saturday: Hours coming soon
              <br />
              Sunday: Hours coming soon
            </p>
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
