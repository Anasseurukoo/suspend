"use client";

import { useState } from "react";

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`image-fallback ${className}`} role="img" aria-label={alt}>Image indisponible</div>;
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading={loading} onError={() => setFailed(true)} />;
}
