import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd, FaqSection, type FaqItem } from "../shared";

export const metadata: Metadata = {
  title: "PSA Pokémon Card Gallery | Sparky's Collection",
  description:
    "Explore Sparky's Collection at Let's Go Cards, a PSA Pokémon card gallery featuring Moonbreon PSA 10, Gengar VMAX PSA 10, Pikachu slabs, and family favorites.",
  alternates: {
    canonical: "/sparkys-collection"
  }
};

const featuredCards = [
  {
    title: "Moonbreon PSA 10",
    caption: "Moonbreon PSA 10",
    description:
      "A centerpiece modern grail with dramatic artwork, huge collector demand, and a gem mint PSA 10 grade.",
    highlight: "Featured grail",
    psaCert: "63551640",
    src: "/featured-moonbreon-psa10.jpeg",
    alt: "Umbreon VMAX PSA 10 Moonbreon slab from Sparky's Collection"
  },
  {
    title: "Gengar VMAX PSA 10",
    caption: "Gengar VMAX PSA 10",
    description:
      "A bold alternate-art favorite with standout color, playful energy, and display-case appeal.",
    highlight: "Collector favorite",
    psaCert: "151290074",
    src: "/featured-gengar-vmax-psa10.jpeg",
    alt: "Gengar VMAX PSA 10 slab from Sparky's Collection"
  },
  {
    title: "Ascended Heroes Pikachu ex Special Illustration Rare PSA 10",
    caption: "Ascended Heroes Pikachu ex PSA 10",
    note: "Pulled by Enzo",
    description:
      "A family favorite because Enzo pulled it himself before it earned a PSA 10 grade.",
    highlight: "Pulled by Enzo",
    psaCert: "158529741",
    src: "/featured-pikachu-psa10.jpeg",
    alt: "Ascended Heroes Pikachu ex Special Illustration Rare PSA 10 slab from Sparky's Collection"
  },
  {
    title: "Felt Hat Pikachu PSA 10",
    caption: "Felt Hat Pikachu PSA 10",
    description:
      "A playful Van Gogh Museum-inspired promo with a gem mint PSA 10 grade and instant display-case charm.",
    highlight: "Featured promo",
    psaCert: "108806405",
    src: "/featured-felt-hat-pikachu-psa10.jpeg",
    alt: "Pikachu with Grey Felt Hat PSA 10 slab from Sparky's Collection"
  },
  {
    title: "Umbreon ex Special Illustration Rare PSA 10",
    caption: "2025 Prismatic Evolutions Umbreon ex #161 PSA 10",
    description:
      "A Prismatic Evolutions Special Illustration Rare displayed in a matching custom extended-art frame for a dramatic collection showcase.",
    highlight: "Extended-art display",
    psaCert: "115774888",
    src: "/sparkys-collection-umbreon-ex-prismatic-evolutions-psa10.jpeg",
    alt: "2025 Prismatic Evolutions Umbreon ex Special Illustration Rare number 161 PSA 10 in a custom extended-art display frame"
  },
  {
    title: "Giratina V Alternate Art PSA 10",
    caption: "2022 Lost Origin Giratina V #186 PSA 10",
    description:
      "A Lost Origin full art alternate-art favorite paired with a matching custom extended-art display frame for Sparky's Collection.",
    highlight: "Extended-art display",
    psaCert: "91575323",
    src: "/sparkys-collection-giratina-v-lost-origin-psa10.jpeg",
    alt: "2022 Lost Origin Giratina V full art alternate art number 186 PSA 10 in a custom extended-art display frame"
  },
  {
    title: "Bubble Mew PSA 10",
    caption: "Bubble Mew PSA 10",
    note: "Future Collection Goal",
    description:
      "A dream-list card for the collection, loved for its bright artwork and grail-card charm.",
    highlight: "Future Goal"
  }
];

const collectionHighlights = [
  ["Family favorites", "Cards with stories behind them, including pulls, trades, and milestone grades."],
  ["Premium PSA slabs", "Gem mint display cards that show why condition and eye appeal matter."],
  ["Growing gallery", "Sparky's Collection will keep expanding as new grails and shop favorites arrive."]
];

const sparkyFaq: FaqItem[] = [
  {
    question: "What is Sparky's Collection?",
    answer:
      "Sparky's Collection is a family collection gallery at Let's Go Cards featuring memorable PSA graded Pokémon cards, favorite pulls, and display pieces."
  },
  {
    question: "Can I shop for PSA graded Pokémon cards at Let's Go Cards?",
    answer:
      "Yes. Let's Go Cards focuses on Pokémon singles, PSA graded Pokémon cards, sealed products, trades, and collection reviews."
  },
  {
    question: "Are the featured cards listed with prices?",
    answer:
      "No. Sparky's Collection is presented like a small gallery for collectors to enjoy, with card stories and highlights rather than prices."
  }
];

export default function SparkysCollection() {
  return (
    <main>
      <FaqJsonLd items={sparkyFaq} />
      <section className="page-hero sparky-page-hero">
        <div>
          <p className="eyebrow">PSA Pokémon card gallery</p>
          <h1>Sparky&apos;s Collection</h1>
          <p>
            A curated showcase of memorable PSA cards, family favorites, and premium pieces from
            the Let&apos;s Go Cards collection in West Easton.
          </p>
        </div>
        <Image
          className="sparky-hero-mascot"
          src="/sparky-mascot.png"
          alt="Sparky, the Let's Go Cards mascot"
          width={1254}
          height={1254}
          priority
        />
      </section>

      <section className="section sparky-museum-intro">
        <div className="museum-copy">
          <p className="eyebrow">Meet the mascot</p>
          <h2>Meet Sparky</h2>
          <p>
            Sparky is the official mascot of Let&apos;s Go Cards. He loves collecting cards, helping
            new trainers start their collections, and sharing the excitement of discovering
            something special. Sparky represents everything we believe in: Trade • Collect • Fun.
            Want to see more in person? <Link href="/visit-us">Plan your visit</Link>.
          </p>
        </div>
        <div className="museum-mascot-frame">
          <Image
            src="/sparky-mascot.png"
            alt="Sparky mascot artwork"
            width={1254}
            height={1254}
            sizes="(max-width: 800px) 100vw, 420px"
          />
        </div>
      </section>

      <section className="section museum-gallery">
        <div className="section-heading centered-heading">
          <p className="eyebrow">Featured from Sparky&apos;s Collection</p>
          <h2>Premium PSA Card Gallery</h2>
          <p>
            Displayed like a small museum case: no prices, just standout cards, family stories, and
            the thrill of collecting.
          </p>
        </div>
        <div className="museum-card-grid">
          {featuredCards.map((card) => (
            <article className="museum-card" key={card.title}>
              <div className="museum-card-light">
                {card.src && card.alt ? (
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={900}
                    height={1700}
                    sizes="(max-width: 800px) 100vw, 360px"
                  />
                ) : (
                  <div className="museum-card-placeholder">
                    <span>{card.highlight}</span>
                    <strong>{card.caption}</strong>
                  </div>
                )}
              </div>
              <div className="museum-label">
                <h3>{card.title}</h3>
                <p>{card.caption}</p>
                <p className="museum-description">{card.description}</p>
                {card.note ? <small>{card.note}</small> : null}
                {card.psaCert ? (
                  <a
                    className="museum-psa-link"
                    href={`https://www.psacard.com/cert/${card.psaCert}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${card.title} with PSA certification number ${card.psaCert}`}
                  >
                    Verify with PSA: {card.psaCert}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section collection-highlights-section">
        <div className="section-heading">
          <p className="eyebrow">Collection highlights</p>
          <h2>What makes Sparky&apos;s Collection special</h2>
          <p>
            The gallery is part showcase, part family scrapbook, and part inspiration board for
            collectors visiting the shop.
          </p>
        </div>
        <div className="collection-highlight-grid">
          {collectionHighlights.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <FaqSection
        title="Sparky's Collection FAQ"
        intro="Answers about the gallery, PSA slabs, and what collectors can expect when they visit."
        items={sparkyFaq}
      />
    </main>
  );
}
