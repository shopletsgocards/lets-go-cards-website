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

export const metadata: Metadata = {
  title: {
    default: "Let's Go Cards | Pokemon Card Shop in West Easton, PA",
    template: "%s | Let's Go Cards"
  },
  description:
    "Let's Go Cards is a family-friendly Pokemon card shop in West Easton, Pennsylvania, buying, selling, and trading collections, sealed product, and premium graded cards.",
  metadataBase: new URL("https://www.ShopLetsGoCards.com"),
  icons: {
    icon: "/favicon.jpg"
  },
  openGraph: {
    title: "Let's Go Cards",
    description:
      "Family-friendly Pokemon card shop in West Easton, PA for buying, selling, trading, and premium PSA cards.",
    url: "https://www.ShopLetsGoCards.com",
    siteName: "Let's Go Cards",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
