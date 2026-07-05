"use client";

import { useEffect, useState } from "react";
import type { GTMEntry } from "@/lib/content";

interface GTMLightboxProps {
  entry: GTMEntry;
  onClose: () => void;
}

export default function GTMLightbox({ entry, onClose }: GTMLightboxProps) {
  const items = entry.items ?? [];
  const [index, setIndex] = useState(0);
  const item = items[index];

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [items.length, onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(28,26,23,0.85)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 40px",
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          all: "unset",
          position: "absolute",
          top: 28,
          right: 40,
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--bg)",
          cursor: "pointer",
        }}
      >
        Close ✕
      </button>

      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 24,
          maxWidth: "min(1100px, 90vw)",
          width: "100%",
        }}
      >
        {items.length > 1 && (
          <button
            onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
            style={{
              all: "unset",
              fontFamily: "var(--mono)",
              fontSize: 24,
              color: "var(--bg)",
              cursor: "pointer",
              padding: 12,
            }}
          >
            ←
          </button>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              borderRadius: 2,
              overflow: "hidden",
              background: "var(--ink)",
            }}
          >
            {item.type === "photo" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.caption}
                style={{ width: "100%", maxHeight: "72vh", objectFit: "contain", display: "block" }}
              />
            ) : (
              <iframe
                src={item.src}
                allowFullScreen
                style={{ width: "100%", height: "min(72vh, 620px)", border: "none", display: "block" }}
              />
            )}
          </div>
          {item.caption && (
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.02em",
                color: "var(--bg)",
                opacity: 0.75,
                marginTop: 16,
                textAlign: "center",
              }}
            >
              {item.caption}
              {items.length > 1 && `  ·  ${index + 1} / ${items.length}`}
            </p>
          )}
        </div>

        {items.length > 1 && (
          <button
            onClick={() => setIndex((i) => (i + 1) % items.length)}
            style={{
              all: "unset",
              fontFamily: "var(--mono)",
              fontSize: 24,
              color: "var(--bg)",
              cursor: "pointer",
              padding: 12,
            }}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
