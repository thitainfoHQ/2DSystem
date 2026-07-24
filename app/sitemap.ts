import type { MetadataRoute } from "next";

import { siteUrl } from "@/components/site/site-metadata";

const routes = [
  "/",
  "/solutions",
  "/products",
  "/applications",
  "/process",
  "/contact",
  "/about",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
