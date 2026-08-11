"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

interface ZoomableImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export default function ZoomableImage({ src, alt, style }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} onClick={() => setOpen(true)} style={{ cursor: "zoom-in", ...style }} />
      <ImageLightbox src={src} alt={alt} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
