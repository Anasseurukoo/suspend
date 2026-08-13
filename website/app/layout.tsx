import type { Metadata } from "next";
import { business } from "../lib/config";
import { defaultOgImage, siteUrl } from "../lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Loza Optique | Opticien à Casablanca",
    template: "%s | Loza Optique",
  },
  description: "Opticien à Casablanca depuis 1989 : montures optiques et solaires, conseil personnalisé, technologies verrières INDO, essayage et ajustement en boutique.",
  keywords: [
    "Opticien Casablanca",
    "lunettes Casablanca",
    "montures optiques Casablanca",
    "lunettes de soleil Casablanca",
    "Loza Optique",
  ],
  applicationName: business.name,
  category: "optique",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: business.name,
    title: "Loza Optique | Opticien à Casablanca",
    description: "Montures choisies, conseil personnalisé, technologies verrières et ajustement précis au cœur de Casablanca.",
    url: "/",
    images: [{ url: defaultOgImage, width: 1672, height: 941, alt: "Loza Optique à Casablanca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loza Optique | Opticien à Casablanca",
    description: "Montures choisies, conseil personnalisé et ajustement précis au cœur de Casablanca.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Optician", "LocalBusiness"],
  "@id": `${siteUrl}/#business`,
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}${defaultOgImage}`,
  telephone: business.phoneHref,
  email: business.email,
  foundingDate: String(business.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "132 Souk Korea, Bloc EF",
    addressLocality: business.city,
    addressCountry: "MA",
  },
  areaServed: { "@type": "City", name: business.city },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
