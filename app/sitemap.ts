import type { MetadataRoute } from "next";

const siteUrl = "https://www.shopletsgocards.com";

const routes = [
  "",
  "/sparkys-collection",
  "/sell-your-collection",
  "/buy-sell-trade",
  "/visit-us",
  "/about-us",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
