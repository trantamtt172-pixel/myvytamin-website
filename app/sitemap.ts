import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    "",
    "/impressum",
    "/datenschutz",
    "/danke",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
