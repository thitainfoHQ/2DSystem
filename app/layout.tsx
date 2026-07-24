import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ogImage, siteName, siteUrl } from "@/components/site/site-metadata";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2D System | Continuous Inkjet Coding & Marking Solutions",
    template: "%s | 2D System",
  },
  description:
    "2D System supplies reliable continuous inkjet (CIJ) printers and coding solutions for products, packaging and production lines across India.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: "2D System | Continuous Inkjet Coding & Marking Solutions",
    description:
      "Reliable continuous inkjet printers and coding solutions for products, packaging and production lines across India.",
    url: "/",
    locale: "en_IN",
    images: [{ url: ogImage, alt: `${siteName} continuous inkjet printer` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2D System | Continuous Inkjet Coding & Marking Solutions",
    description:
      "Reliable continuous inkjet printers and coding solutions for products, packaging and production lines across India.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
