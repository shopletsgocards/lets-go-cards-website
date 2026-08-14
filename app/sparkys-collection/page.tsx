import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd, FaqSection, type FaqItem } from "../shared";

export const metadata: Metadata = {
  title: "PSA-Graded Pokémon Grail Cards in Easton PA | Sparky's Collection",
  description:
    "Explore Sparky's Collection at Let's Go Cards in West Easton, PA: PSA 10 Pokémon grail cards including Moonbreon, Gengar VMAX, Giratina V, Umbreon ex, and Pikachu favorites.",
  alternates: {
    canonical: "/sparkys-collection"
  },
  openGraph: {
    title: "PSA-Graded Pokémon Grail Cards in Easton PA | Sparky's Collection",
    description:
      "See PSA 10 Pokémon grail cards from Sparky's Collection at Let's Go Cards in West Easton, serving Easton and the Lehigh Valley.",
    url: "/sparkys-collection",
    images: [
      {
        url: "/2021-umbreon-vmax-moonbreon-215-203-evolving-skies-psa10.jpeg",
        width: 900,
        height: 1700,
        alt: "Umbreon VMAX Moonbreon PSA 10 from Sparky's Collection"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PSA-Graded Pokémon Grail Cards | Sparky's Collection",
    description:
      "Explore Moonbreon, Gengar VMAX, Pikachu, Umbreon ex, and Giratina V PSA cards from Let's Go Cards in West Easton.",
    images: ["/2021-umbreon-vmax-moonbreon-215-203-evolving-skies-psa10.jpeg"]
  }
};

const siteUrl = "https://www.shopletsgocards.com";

const featuredCards = [
  {
    title: "2021 — Umbreon VMAX “Moonbreon” #215/203 — Evolving Skies — PSA 10",
    slug: "umbreon-vmax-moonbreon-215-203-evolving-skies-psa-10",
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
      "A 2021 Umbreon VMAX “Moonbreon” #215/203 from Evolving Skies in PSA Gem Mint 10, loved by collectors for its alternate-art secret rare artwork, moonlit scene, and centerpiece display presence.",
    highlight: "Featured grail",
    psaCert: "63551640",
    src: "/2021-umbreon-vmax-moonbreon-215-203-evolving-skies-psa10.jpeg",
    alt: "2021 Umbreon VMAX Moonbreon #215/203 Evolving Skies Alternate Art Secret Rare graded PSA Gem Mint 10"
  },
  {
    title: "2021 — Gengar VMAX #271/264 — Fusion Strike Alternate Art — PSA 10",
    slug: "gengar-vmax-271-264-fusion-strike-alternate-art-psa-10",
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
      "A 2021 Gengar VMAX #271/264 from Fusion Strike in PSA Gem Mint 10, a special full art alternate-art favorite with oversized Gigantamax artwork and unmistakable collector appeal.",
    highlight: "Collector favorite",
    psaCert: "151290074",
    src: "/2021-gengar-vmax-271-264-fusion-strike-alternate-art-psa10.jpeg",
    alt: "2021 Gengar VMAX #271/264 Fusion Strike Special Full Art Alternate Art graded PSA Gem Mint 10"
  },
  {
    title: "2026 — Pikachu ex #276/217 — Ascended Heroes — PSA 10",
    slug: "pikachu-ex-276-217-ascended-heroes-special-illustration-rare-psa-10",
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
      "A 2026 Pikachu ex #276/217 from Ascended Heroes in PSA Gem Mint 10, made even more special because Enzo pulled this Special Illustration Rare before it became a family showcase slab.",
    highlight: "Pulled by Enzo",
    psaCert: "158529741",
    src: "/2026-pikachu-ex-276-217-ascended-heroes-special-illustration-rare-psa10.jpeg",
    alt: "2026 Pikachu ex #276/217 Ascended Heroes Special Illustration Rare graded PSA Gem Mint 10"
  },
  {
    title: "2023 — Pikachu with Grey Felt Hat #085 — SVP Black Star Promo — PSA 10",
    slug: "pikachu-with-grey-felt-hat-085-svp-black-star-promo-psa-10",
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
      "A 2023 Pikachu with Grey Felt Hat #085 SVP Black Star Promo in PSA Gem Mint 10, connecting Pokémon collecting with Van Gogh-inspired artwork and a memorable promotional release.",
    highlight: "Featured promo",
    psaCert: "108806405",
    src: "/2023-pikachu-with-grey-felt-hat-085-svp-black-star-promo-psa10.jpeg",
    alt: "2023 Pikachu with Grey Felt Hat #085 SVP Black Star Promo graded PSA Gem Mint 10"
  },
  {
    title: "2025 — Umbreon ex #161/131 — Prismatic Evolutions — PSA 10",
    slug: "umbreon-ex-161-131-prismatic-evolutions-special-illustration-rare-psa-10",
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
      "A 2025 Umbreon ex #161/131 from Prismatic Evolutions in PSA Gem Mint 10, shown in a matching custom extended-art frame that gives this Special Illustration Rare a dramatic gallery feel.",
    highlight: "Extended-art display",
    psaCert: "115774888",
    src: "/2025-umbreon-ex-161-131-prismatic-evolutions-special-illustration-rare-psa10.jpeg",
    alt: "2025 Umbreon ex #161/131 Prismatic Evolutions Special Illustration Rare graded PSA Gem Mint 10 in a custom extended-art display frame"
  },
  {
    title: "2022 — Giratina V #186/196 — Lost Origin Alternate Art — PSA 10",
    slug: "giratina-v-186-196-lost-origin-alternate-art-psa-10",
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
      "A 2022 Giratina V #186/196 from Lost Origin in PSA Gem Mint 10, a special full art alternate-art favorite with Shinji Kanda’s Distortion World artwork and a matching custom extended-art display frame.",
    highlight: "Extended-art display",
    psaCert: "91575323",
    src: "/2022-giratina-v-186-196-lost-origin-alternate-art-psa10.jpeg",
    alt: "2022 Giratina V #186/196 Lost Origin Special Full Art Alternate Art graded PSA Gem Mint 10 in a custom extended-art display frame"
  },
  {
    title: "2024 — Mew ex “Bubble Mew” #232/091 — Paldean Fates — PSA 10 Goal",
    slug: "mew-ex-bubble-mew-232-091-paldean-fates-psa-10-goal",
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
      "A 2024 Mew ex “Bubble Mew” #232/091 from Paldean Fates is a future PSA 10 goal for Sparky's Collection, chosen for its joyful Special Illustration Rare artwork and modern grail-card charm.",
    highlight: "Future Goal"
  }
];

const collectionHighlights = [
  ["Family favorites", "Cards with stories behind them, including pulls, trades, PSA grades, and pieces visitors can ask about when they stop by the shop."],
  ["Premium PSA slabs", "Gem mint Pokémon cards that show why condition, eye appeal, and verified certification matter to collectors."],
  ["Growing gallery", "Sparky's Collection will keep expanding as new Pokémon grail cards, family favorites, and shop conversation pieces arrive."]
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

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/sparkys-collection#collectionpage`,
  url: `${siteUrl}/sparkys-collection`,
  name: "Sparky's Collection: PSA-Graded Pokémon Grail Cards",
  description:
    "A collector gallery from Let's Go Cards in West Easton, PA featuring PSA-graded Pokémon grail cards, family favorites, and showcase slabs.",
  isPartOf: {
    "@type": "WebSite",
    name: "Let's Go Cards",
    url: siteUrl
  },
  about: [
    "PSA graded Pokémon cards",
    "Pokémon grail cards",
    "Pokémon card collecting in Easton PA",
    "Lehigh Valley Pokémon collectors"
  ],
  mainEntity: {
    "@type": "ItemList",
    name: "Sparky's Collection featured PSA Pokémon cards",
    itemListElement: featuredCards.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/sparkys-collection#${card.slug}`,
      item: {
        "@type": "CreativeWork",
        name: card.title,
        description: card.description,
        image: card.src ? `${siteUrl}${card.src}` : undefined,
        identifier: card.psaCert ? `PSA ${card.psaCert}` : card.caption,
        sameAs: card.psaCert ? `https://www.psacard.com/cert/${card.psaCert}` : undefined,
        isPartOf: {
          "@type": "Collection",
          name: "Sparky's Collection"
        }
      }
    }))
  }
};

export default function SparkysCollection() {
  return (
    <main>
      <FaqJsonLd items={sparkyFaq} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema).replace(/</g, "\\u003c")
        }}
      />
      <section className="page-hero sparky-page-hero">
        <div>
          <p className="eyebrow">PSA-graded Pokémon card gallery in West Easton</p>
          <h1>Sparky&apos;s Collection</h1>
          <p>
            A curated showcase of PSA-graded Pokémon grail cards, family favorites, and premium
            slabs from Let&apos;s Go Cards in West Easton, serving collectors throughout Easton and
            the Lehigh Valley.
          </p>
          <p>
            Enjoy the gallery, then <Link href="/visit-us">visit the shop</Link>,{" "}
            <Link href="/buy-sell-trade">buy, sell, or trade Pokémon cards</Link>, or{" "}
            <Link href="/sell-your-collection">start a collection review</Link>.
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
          <h2>PSA-Graded Pokémon Grail Cards</h2>
          <p>
            Displayed like a small museum case: no prices, just verified PSA slabs, full card
            details, standout artwork, family stories, and the thrill of collecting.
          </p>
        </div>
        <div className="museum-card-grid">
          {featuredCards.map((card) => (
            <article className="museum-card" id={card.slug} key={card.title}>
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
            collectors visiting the shop. Looking for something similar?{" "}
            <Link href="/contact">Contact us</Link> or{" "}
            <Link href="/buy-sell-trade">learn how we buy, sell, and trade Pokémon cards</Link>.
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
