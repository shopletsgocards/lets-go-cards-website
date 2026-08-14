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
    title: "2021 — Umbreon VMAX “Moonbreon” #215/203 — Evolving Skies — PSA 10",
    caption: "Umbreon VMAX “Moonbreon”",
    facts: [
      ["Release year", "2021"],
      ["Card name", "Umbreon VMAX “Moonbreon”"],
      ["Card number", "#215/203"],
      ["Set", "Evolving Skies"],
      ["Rarity / treatment", "Alternate Art Secret Rare"],
      ["Grade", "PSA Gem Mint 10"]
    ],
    description:
      "A modern chase-card centerpiece with dramatic night-sky artwork and the kind of display presence collectors remember immediately.",
    highlight: "Featured grail",
    psaCert: "63551640",
    src: "/featured-moonbreon-psa10.jpeg",
    alt: "2021 Umbreon VMAX Moonbreon number 215/203 from Evolving Skies graded PSA Gem Mint 10"
  },
  {
    title: "2021 — Gengar VMAX #271/264 — Fusion Strike Alternate Art — PSA 10",
    caption: "Gengar VMAX Alternate Art",
    facts: [
      ["Release year", "2021"],
      ["Card name", "Gengar VMAX"],
      ["Card number", "#271/264"],
      ["Set", "Fusion Strike"],
      ["Rarity / treatment", "Special Full Art / Alternate Art"],
      ["Grade", "PSA Gem Mint 10"]
    ],
    description:
      "A fan-favorite Gigantamax Gengar card with playful, oversized artwork that makes it one of the most recognizable modern alternate arts.",
    highlight: "Collector favorite",
    psaCert: "151290074",
    src: "/featured-gengar-vmax-psa10.jpeg",
    alt: "2021 Gengar VMAX number 271/264 from Fusion Strike Alternate Art graded PSA Gem Mint 10"
  },
  {
    title: "2026 — Pikachu ex #276/217 — Ascended Heroes — PSA 10",
    caption: "Pikachu ex Special Illustration Rare",
    facts: [
      ["Release year", "2026"],
      ["Card name", "Pikachu ex"],
      ["Card number", "#276/217"],
      ["Set", "Ascended Heroes"],
      ["Rarity / treatment", "Special Illustration Rare"],
      ["Grade", "PSA Gem Mint 10"]
    ],
    note: "Pulled by Enzo",
    description:
      "A personal family highlight because Enzo pulled it himself before it earned a gem mint grade.",
    highlight: "Pulled by Enzo",
    psaCert: "158529741",
    src: "/featured-pikachu-psa10.jpeg",
    alt: "2026 Pikachu ex number 276/217 from Ascended Heroes Special Illustration Rare graded PSA Gem Mint 10"
  },
  {
    title: "2023 — Pikachu with Grey Felt Hat #085 — SVP Black Star Promo — PSA 10",
    caption: "Pikachu with Grey Felt Hat",
    facts: [
      ["Release year", "2023"],
      ["Card name", "Pikachu with Grey Felt Hat"],
      ["Card number", "#085"],
      ["Set", "SVP Black Star Promos"],
      ["Rarity / treatment", "Pokémon x Van Gogh promotional card"],
      ["Grade", "PSA Gem Mint 10"]
    ],
    description:
      "A charming Pokémon x Van Gogh promo that blends Pikachu’s personality with museum-inspired artwork and instant display-case appeal.",
    highlight: "Featured promo",
    psaCert: "108806405",
    src: "/featured-felt-hat-pikachu-psa10.jpeg",
    alt: "2023 Pikachu with Grey Felt Hat number 085 SVP Black Star Promo graded PSA Gem Mint 10"
  },
  {
    title: "2025 — Umbreon ex #161/131 — Prismatic Evolutions — PSA 10",
    caption: "Umbreon ex Special Illustration Rare",
    facts: [
      ["Release year", "2025"],
      ["Card name", "Umbreon ex"],
      ["Card number", "#161/131"],
      ["Set", "Prismatic Evolutions"],
      ["Rarity / treatment", "Special Illustration Rare"],
      ["Grade", "PSA Gem Mint 10"]
    ],
    description:
      "A Prismatic Evolutions chase card showcased in a matching custom extended-art frame that turns the slab into a dramatic display piece.",
    highlight: "Extended-art display",
    psaCert: "115774888",
    src: "/sparkys-collection-umbreon-ex-prismatic-evolutions-psa10.jpeg",
    alt: "2025 Umbreon ex number 161/131 from Prismatic Evolutions Special Illustration Rare graded PSA Gem Mint 10 in a custom extended-art display frame"
  },
  {
    title: "2022 — Giratina V #186/196 — Lost Origin Alternate Art — PSA 10",
    caption: "Giratina V Alternate Art",
    facts: [
      ["Release year", "2022"],
      ["Card name", "Giratina V"],
      ["Card number", "#186/196"],
      ["Set", "Lost Origin"],
      ["Rarity / treatment", "Special Full Art / Alternate Full Art"],
      ["Grade", "PSA Gem Mint 10"]
    ],
    description:
      "A Lost Origin standout with Shinji Kanda’s Distortion World artwork, paired with a matching custom extended-art frame for the collection.",
    highlight: "Extended-art display",
    psaCert: "91575323",
    src: "/sparkys-collection-giratina-v-lost-origin-psa10.jpeg",
    alt: "2022 Giratina V number 186/196 from Lost Origin Alternate Art graded PSA Gem Mint 10 in a custom extended-art display frame"
  },
  {
    title: "2024 — Mew ex “Bubble Mew” #232/091 — Paldean Fates — PSA 10 Goal",
    caption: "Mew ex “Bubble Mew”",
    facts: [
      ["Release year", "2024"],
      ["Card name", "Mew ex “Bubble Mew”"],
      ["Card number", "#232/091"],
      ["Set", "Paldean Fates"],
      ["Rarity / treatment", "Special Illustration Rare"],
      ["Grade", "PSA Gem Mint 10 goal"]
    ],
    note: "Future Collection Goal",
    description:
      "A bright, joyful dream-list card that would add a playful modern Mew centerpiece to Sparky's Collection.",
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
                <dl className="museum-card-facts">
                  {card.facts.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
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
