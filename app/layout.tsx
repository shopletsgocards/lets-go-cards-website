import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const navItems = [
  ["Home", "/"],
  ["Sparky's Collection", "/sparkys-collection"],
  ["Sell Your Cards", "/sell-your-collection"],
  ["Visit Us", "/visit-us"],
  ["Buy / Sell / Trade", "/buy-sell-trade"],
  ["About Us", "/about-us"],
  ["Contact", "/contact"]
];

const siteUrl = "https://www.shopletsgocards.com";

export const metadata: Metadata = {
  title: {
    default: "Let's Go Cards | Pokemon Card Shop in West Easton, PA",
    template: "%s | Let's Go Cards"
  },
  description:
    "Let's Go Cards is a family-owned Pokemon card shop opening soon in West Easton, PA. Buy, sell, and trade Pokemon cards, PSA graded cards, sealed product, and collections.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/"
  },
  applicationName: "Let's Go Cards",
  keywords: [
    "Pokemon card shop West Easton PA",
    "sell Pokemon cards Lehigh Valley",
    "Pokemon cards Easton PA",
    "PSA graded Pokemon cards",
    "Pokemon card collections",
    "sealed Pokemon product"
  ],
  icons: {
    icon: "/favicon.jpg"
  },
  openGraph: {
    title: "Let's Go Cards | Pokemon Card Shop in West Easton, PA",
    description:
      "Family-owned Pokemon card shop opening soon in West Easton, PA for buying, selling, trading, PSA graded cards, sealed product, and collections.",
    url: siteUrl,
    siteName: "Let's Go Cards",
    images: [
      {
        url: "/logo.jpg",
        width: 1320,
        height: 1660,
        alt: "Let's Go Cards logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Go Cards | Pokemon Card Shop in West Easton, PA",
    description:
      "Family-owned Pokemon card shop opening soon in West Easton, PA for buying, selling, trading, PSA graded cards, sealed product, and collections.",
    images: ["/logo.jpg"]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Let's Go Cards",
  url: siteUrl,
  image: `${siteUrl}/logo.jpg`,
  logo: `${siteUrl}/logo.jpg`,
  description:
    "Family-owned Pokemon card shop opening soon in West Easton, Pennsylvania, offering Pokemon cards, PSA graded cards, sealed product, collection reviews, buying, selling, and trading.",
  telephone: "+1-484-261-1453",
  email: "ShopLetsGoCards@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "708A East Street",
    addressLocality: "West Easton",
    addressRegion: "PA",
    postalCode: "18042",
    addressCountry: "US"
  },
  areaServed: [
    "West Easton PA",
    "Easton PA",
    "Lehigh Valley PA",
    "Northampton County PA"
  ],
  priceRange: "$$",
  sameAs: ["https://www.facebook.com/share/1EELuF6yk5/?mibextid=wwXIfr"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Buy Pokemon cards"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Sell Pokemon card collections"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Trade Pokemon cards"
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c")
          }}
        />
        <div className="top-info-bar">
          <div className="top-info-content">
            <address>
              708A East Street, West Easton, PA 18042
            </address>
            <a href="tel:+14842611453">484-261-1453</a>
            <a href="mailto:shopletsgocards@gmail.com">shopletsgocards@gmail.com</a>
          </div>
          <div className="social-links" aria-label="Social media links">
            <a
              href="https://www.facebook.com/share/1EELuF6yk5/?mibextid=wwXIfr"
              aria-label="Let's Go Cards on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              f
            </a>
          </div>
        </div>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Let's Go Cards home">
            <Image
              className="brand-logo"
              src="/logo.jpg"
              alt="Let's Go Cards"
              width={1320}
              height={1660}
              priority
            />
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <Link
                className={href === "/sell-your-collection" ? "nav-cta" : undefined}
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <Link className="footer-brand" href="/">
              <Image
                className="footer-logo"
                src="/logo.jpg"
                alt="Let's Go Cards"
                width={1320}
                height={1660}
              />
            </Link>
            <p>Buying, selling, and trading Pokemon cards in West Easton, Pennsylvania.</p>
          </div>
          <div className="footer-grid">
            <span>708A East Street, West Easton, PA 18042</span>
            <a href="tel:+14842611453">484-261-1453</a>
            <a href="mailto:shopletsgocards@gmail.com">shopletsgocards@gmail.com</a>
            <span>Copyright © Let&apos;s Go Cards</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
