import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Loza Optique | Casablanca",
    template: "%s | Loza Optique",
  },
  description: "Montures optiques et solaires, conseil personnalisÃ©, essayage et ajustement Ã  Casablanca.",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
