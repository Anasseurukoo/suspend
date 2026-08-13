import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Loza Optique",
    short_name: "Loza",
    description: "Opticien à Casablanca — montures, conseil, technologies verrières et essayage.",
    start_url: "/",
    display: "standalone",
    background_color: "#071f20",
    theme_color: "#071f20",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
