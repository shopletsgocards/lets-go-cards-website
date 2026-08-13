import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, FaqSection, type FaqItem } from "../shared";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Let's Go Cards for Pokémon Cards in Easton PA",
  description:
    "Contact Let's Go Cards in West Easton, PA about Pokémon cards, sealed products, PSA slabs, selling a collection, trades, current hours, and visits.",
  alternates: {
    canonical: "/contact"
  }
};

const googleBusinessProfileUrl =
  "https://www.google.com/search?q=Let%27s+Go+Cards+708A+East+Street+West+Easton+PA";

const contactFaq: FaqItem[] = [
  {
    question: "What can I contact Let's Go Cards about?",
    answer:
      "You can contact Let's Go Cards about Pokémon singles, sealed Pokémon products, PSA graded cards, selling a collection, trade questions, handmade gifts, and planning a visit."
  },
  {
    question: "Can I ask about selling before I bring cards in?",
    answer:
      "Yes. You can send a message or use the sell form with photos so the team can understand what you have before you visit."
  },
  {
    question: "Where can I confirm current hours?",
    answer:
      "Please check the Let's Go Cards Google Business Profile for current store hours before visiting the West Easton shop."
  },
  {
    question: "What payment options are available?",
    answer:
      "Payment options can vary during the soft opening period, so please ask in store or contact Let's Go Cards before visiting if you need a specific payment method."
  }
];

export default function Contact() {
  return (
    <main>
      <FaqJsonLd items={contactFaq} />
      <section className="page-hero compact">
        <p className="eyebrow">Now open in West Easton</p>
        <h1>Contact Let&apos;s Go Cards</h1>
        <p>
          Questions about a collection, card availability, trades, or current hours? Call, email,
          or stop by the shop in West Easton. You can also{" "}
          <Link href="/sell-your-collection">submit a collection review request</Link> before
          visiting. Soft Opening — Saturday, August 15 at 4:00 PM.
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
      <FaqSection
        title="Contact FAQ"
        intro="Answers to common questions before you call, message, sell a collection, or visit."
        items={contactFaq}
      />
    </main>
  );
}
