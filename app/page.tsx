import Image from "next/image";
import Link from "next/link";

const whyChoose = [
  ["Family-Owned Business", "Built by Wes, Laurin, and Enzo for families and Pokémon collectors in the Lehigh Valley."],
  ["Honest and Transparent", "Clear conversations about condition, demand, collection values, and available offer options."],
  ["Fair Collection Buying", "Professional, no-pressure reviews for everything from one PSA card to an entire Pokémon collection."],
  ["Long-Term Collector Relationships", "A welcoming place to learn, return, trade, and grow with the local Pokémon community."],
  ["Pokémon Specialty Store", "Everything we do revolves around Pokémon, from sealed product to singles, slabs, collections, and gifts."],
  ["PSA Graded Cards", "Premium slabs and collection highlights for collectors who love graded cards."],
  ["Sealed Product and Singles", "Pokémon sealed product and singles for collectors, pack openers, and gift shopping."],
  ["Handmade Pokémon-Themed Gifts", "Laurin's handmade merchandise and gifts add a personal touch for fans and families."],
  ["Buy, Sell, and Trade Services", "Bring cards to the shop or submit photos for review."]
];

const sparkyCards = [
  {
    caption: "Moonbreon PSA 10",
    src: "/featured-moonbreon-psa10.jpeg",
    alt: "Umbreon VMAX PSA 10 slab from Sparky's Collection"
  },
  {
    caption: "Gengar VMAX PSA 10",
    src: "/featured-gengar-vmax-psa10.jpeg",
    alt: "Gengar VMAX PSA 10 slab from Sparky's Collection"
  },
  {
    caption: "Ascended Heroes Pikachu PSA 10",
    src: "/featured-pikachu-psa10.jpeg",
    alt: "Ascended Heroes Pikachu ex Special Illustration Rare PSA 10 slab from Sparky's Collection"
  }
];

const whatWeBuy = [
  "Pokémon Singles",
  "PSA Graded Cards",
  "Sealed Pokémon Product",
  "Vintage Collections",
  "Binders",
  "Complete Collections"
];

const storeHours = [
  ["Monday", "Hours coming soon"],
  ["Tuesday", "Hours coming soon"],
  ["Wednesday", "Hours coming soon"],
  ["Thursday", "Hours coming soon"],
  ["Friday", "Hours coming soon"],
  ["Saturday", "Hours coming soon"],
  ["Sunday", "Hours coming soon"]
];

const homepageActions = [
  {
    title: "Shop Pokémon Products",
    text: "Shop Pokémon singles, PSA graded cards, sealed products, and kid-friendly collector picks.",
    href: "/buy-sell-trade",
    label: "Shop"
  },
  {
    title: "Sell Your Collection",
    text: "Get a fair, no-pressure review for one PSA card, sealed product, binders, or full collections.",
    href: "/sell-your-collection",
    label: "Sell"
  },
  {
    title: "Visit the Store",
    text: "Plan your visit to our West Easton shop and meet a family-owned Pokémon community hub.",
    href: "/visit-us",
    label: "Visit"
  },
  {
    title: "Contact Us",
    text: "Ask about inventory, selling a collection, trades, handmade gifts, or grand opening updates.",
    href: "/contact",
    label: "Contact"
  }
];

export default function Home() {
  return (
    <main>
      <section className="coming-soon-banner">
        <div className="coming-soon-copy">
          <p className="eyebrow">Opening update</p>
          <h2>COMING SOON TO WEST EASTON</h2>
          <p>
            Let&apos;s Go Cards is a family-owned Pokémon specialty store opening soon in West
            Easton, Pennsylvania.
          </p>
          <h1>The Lehigh Valley&apos;s Family-Friendly Pokémon Destination</h1>
          <p className="coming-soon-line">
            Buy, Sell, Trade, and Discover Pokémon Sealed Products, Pokémon Singles, PSA Graded
            Cards, Handmade Gifts, and Sparky&apos;s Collection.
          </p>
          <p>
            Conveniently located in West Easton, Pennsylvania, Let&apos;s Go Cards is being built
            for families, collectors, and kids who want a welcoming place where every shelf,
            display case, trade conversation, and handmade gift is centered on Pokémon.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/buy-sell-trade">
              Shop Pokémon Products
            </Link>
            <Link className="button secondary" href="/sell-your-collection">
              Sell Your Collection
            </Link>
            <Link className="button secondary" href="/visit-us">
              Visit the Store
            </Link>
          </div>
          <div className="homepage-action-grid" aria-label="Popular actions">
            {homepageActions.map((action) => (
              <Link className="homepage-action-card" href={action.href} key={action.title}>
                <span>{action.label}</span>
                <h3>{action.title}</h3>
                <p>{action.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section meet-sparky">
        <div className="sparky-copy">
          <p className="eyebrow">Official mascot</p>
          <h2>Meet Sparky!</h2>
          <p>
            Sparky is the official mascot of Let&apos;s Go Cards. Full of energy and always ready
            for the next adventure, Sparky helps collectors of all ages discover new cards, build
            collections, make trades, and enjoy the hobby together.
          </p>
          <Link className="button secondary sparky-button" href="/sparkys-collection">
            Visit Sparky&apos;s Collection
          </Link>
        </div>
        <div className="sparky-art">
          <Image
            src="/sparky-mascot.png"
            alt="Sparky, the Let's Go Cards mascot"
            width={1254}
            height={1254}
            sizes="(max-width: 800px) 100vw, 520px"
          />
        </div>
      </section>

      <section className="section family-section">
        <div className="family-story">
          <p className="eyebrow">Lehigh Valley Pokémon destination</p>
          <h2>Meet the Family Behind Let&apos;s Go Cards</h2>
          <p>
            Let&apos;s Go Cards was created by Wes, Laurin, and Enzo to share the fun of
            collecting Pokémon cards with families throughout the Lehigh Valley. Our shop is
            intentionally focused on Pokémon so every display case, sealed product, trade
            conversation, and gift feels connected to the world collectors love.
          </p>
          <p>
            We are not trying to be every kind of card store. Our shelves, buying counter, and
            community are dedicated to Pokémon, which helps us create a better experience for
            collectors, parents, and kids who love the same world we do.
          </p>
          <p>
            As Pokémon celebrates its 30th anniversary, the hobby is bringing generations together
            in a special way: parents who collected as children now get to open packs, trade cards,
            and chase favorite characters with kids discovering Pokémon for the first time.
          </p>
          <p>
            Inspired by our son Enzo&apos;s love of Pokémon and Laurin&apos;s handmade
            Pokémon-themed merchandise and gifts, Let&apos;s Go Cards was created to bring
            collectors of all ages together.
          </p>
        </div>
        <div className="family-name-grid" aria-label="The family behind Let's Go Cards">
          <span>Wes</span>
          <span>Laurin</span>
          <span>Enzo</span>
        </div>
        <div className="storefront-placeholder">
          <span>Storefront photo coming soon.</span>
        </div>
      </section>

      <section className="section what-we-buy">
        <div className="section-heading">
          <p className="eyebrow">Collection reviews</p>
          <h2>What We Buy</h2>
          <p>
            Collectors can bring items to the store or submit photos for review. Cash offers,
            trade offers, and consignment opportunities may be available depending on the
            collection.
          </p>
        </div>
        <div className="what-we-buy-grid">
          {whatWeBuy.map((item) => (
            <article className="collection-card" key={item}>
              <span>Buy</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
        <div className="section-heading why-inline-heading">
          <p className="eyebrow">Your Pokémon specialty shop</p>
          <h2>Why Choose Let&apos;s Go Cards?</h2>
          <p>
            By focusing on Pokémon, Let&apos;s Go Cards can create a deeper, friendlier experience
            for families and collectors looking for sealed product, singles, PSA graded cards,
            safe collection reviews, fair trades, and thoughtful Pokémon-themed gifts.
          </p>
        </div>
        <div className="why-grid">
          {whyChoose.map(([title, text]) => (
            <article key={title}>
              <span>★</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link className="button primary sell-cta section-cta" href="/sell-your-collection">
          Sell Your Cards
        </Link>
      </section>

      <section className="section sparky-featured">
        <div className="section-heading">
          <p className="eyebrow">Premium slabs</p>
          <h2>Sparky&apos;s Collection</h2>
          <p>
            Premium PSA slabs featured from Sparky&apos;s Collection, showcased for collectors to
            admire in store.
          </p>
        </div>
        <div className="featured-card-grid">
          {sparkyCards.map((card) => (
            <article className="premium-card" key={card.caption}>
              <div className="premium-card-photo">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={900}
                  height={1700}
                  sizes="(max-width: 800px) 100vw, 360px"
                />
              </div>
              <h3>{card.caption}</h3>
              <p>Featured from Sparky&apos;s Collection</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section sell-home">
        <div className="section-heading">
          <p className="eyebrow">Collection offers</p>
          <h2>Sell Your Cards</h2>
          <p>
            Bring Pokémon singles, PSA graded cards, sealed product, binders, or complete
            collections to the shop, or submit photos first. Reviews are professional,
            transparent, and never high pressure.
          </p>
        </div>
        <Link className="button primary sell-cta" href="/sell-your-collection">
          Start a Collection Review
        </Link>
      </section>

      <section className="section store-visit" id="visit-store">
        <div className="section-heading">
          <p className="eyebrow">Visit the shop</p>
          <h2>Visit Let&apos;s Go Cards</h2>
          <p>
            Let&apos;s Go Cards is located at 708A East Street, West Easton, PA 18042. Placeholder
            hours are listed below and can be updated when the final schedule is ready.
          </p>
        </div>
        <div className="visit-grid">
          <div className="visit-details">
            <div className="visit-card">
              <h3>Store Address</h3>
              <p>
                Let&apos;s Go Cards
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
              </p>
            </div>
            <div className="hours-card">
              <h3>Hours</h3>
              <dl>
                {storeHours.map(([day, hours]) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <iframe
            className="map-embed home-map"
            title="Google Maps location for Let's Go Cards"
            src="https://www.google.com/maps?q=708A%20East%20Street%2C%20West%20Easton%2C%20PA%2018042&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="cta-band contact-home">
        <div>
          <h2>Contact</h2>
          <p>
            Questions about shopping Pokémon products, selling a collection, visiting the store, or
            joining the local Pokémon community? Reach out to the Let&apos;s Go Cards family.
          </p>
        </div>
        <Link className="button primary sell-cta" href="/contact">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
