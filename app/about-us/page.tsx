import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Let's Go Cards, a family-owned Pokemon card shop founded by Wes, Laurin, and Enzo in West Easton, PA."
};

export default function AboutUs() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Family-owned in Easton</p>
        <h1>About Let&apos;s Go Cards</h1>
        <p>
          Founded by Wes, Laurin, and Enzo, Let&apos;s Go Cards is built around collecting,
          community, and family.
        </p>
      </section>
      <section className="story-section">
        <div>
          <h2>Made for collectors, parents, and kids</h2>
          <p>
            We believe the best card shops feel welcoming the moment you walk in. Our goal is to
            make buying, selling, and trading easy to understand, whether you&apos;re opening your
            first pack or comparing premium PSA slabs.
          </p>
          <p>
            The shop focuses on honest conversations, fair offers, and a clean place for the local
            collecting community to gather.
          </p>
        </div>
        <div className="family-card">
          <span>Wes</span>
          <span>Laurin</span>
          <span>Enzo</span>
        </div>
      </section>
    </main>
  );
}
