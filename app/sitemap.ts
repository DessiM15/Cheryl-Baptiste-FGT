import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://fgtsco.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://fgtsco.com/diagnostic", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
