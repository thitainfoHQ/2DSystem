import type { Metadata } from "next";

import { machineImage } from "./images";

// TODO: update to the real production domain once deployed.
export const siteUrl = "https://www.2dsystem.in";
export const siteName = "2D System";
export const ogImage = machineImage;

/**
 * Build consistent per-page metadata: canonical URL, Open Graph and Twitter
 * cards, all sharing the site defaults.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url,
      locale: "en_IN",
      images: [{ url: ogImage, alt: `${siteName} continuous inkjet printer` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
