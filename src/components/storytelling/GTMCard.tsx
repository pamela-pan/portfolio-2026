"use client";

import { useState } from "react";
import type { GTMEntry } from "@/lib/content";
import GTMLightbox from "./GTMLightbox";

interface GTMCardProps {
  entry: GTMEntry;
}

export default function GTMCard({ entry }: GTMCardProps) {
  const [hovered, setHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const card = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", width: "100%", maxWidth: 420, cursor: "pointer" }}
    >
      {/* Label row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "var(--ink-muted)",
            textTransform: "uppercase",
          }}
        >
          {entry.kind} &nbsp;— &nbsp;{entry.date}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.1em",
            color: hovered ? "transparent" : "var(--border)",
            textTransform: "uppercase",
            transition: "color 0.4s ease",
          }}
        >
          Hover to reveal
        </span>
      </div>

      {/* Image wrap — the blend zone */}
      <div
        style={{
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          transform: hovered ? "rotate(0deg) scale(1)" : "rotate(-1deg) scale(0.97)",
          transition: `transform var(--duration-reveal) var(--ease-ink), box-shadow var(--duration-reveal) ease`,
          boxShadow: hovered
            ? "0 20px 60px rgba(28,26,23,0.15)"
            : "0 2px 8px rgba(28,26,23,0.06)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={entry.cover}
          alt={entry.coverAlt}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: hovered
              ? "saturate(1) sepia(0) brightness(1)"
              : "saturate(0.08) sepia(0.5) brightness(1.08)",
            mixBlendMode: hovered ? "normal" : "multiply",
            transition: `filter var(--duration-reveal) var(--ease-ink)`,
          }}
        />

        {/* Paper wash overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--bg)",
            opacity: hovered ? 0 : 0.6,
            transition: `opacity var(--duration-reveal) var(--ease-ink)`,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--bg) 0%, rgba(247,243,238,0.55) 28%, rgba(247,243,238,0) 52%)",
            opacity: hovered ? 0 : 1,
            transition: `opacity var(--duration-reveal) var(--ease-ink)`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Entry info — slides up */}
      <div
        style={{
          marginTop: 18,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s",
        }}
      >
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: 18,
            fontStyle: "italic",
            color: "var(--ink)",
          }}
        >
          {entry.title}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.08em",
            color: "var(--ink-muted)",
            textAlign: "right",
            lineHeight: 1.8,
            whiteSpace: "nowrap",
          }}
        >
          {entry.tags.join(" · ")}
        </span>
      </div>
    </div>
  );

  // Interaction is driven by data shape, not `kind` — `kind` is purely a filter/category
  // label, so entries like the HBR video can be filed under "ebook" while still opening
  // their lightbox instead of a link.
  if (entry.items && entry.items.length > 0) {
    return (
      <>
        <button
          onClick={() => setLightboxOpen(true)}
          style={{
            all: "unset",
            display: "block",
            width: "100%",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {card}
        </button>
        {lightboxOpen && <GTMLightbox entry={entry} onClose={() => setLightboxOpen(false)} />}
      </>
    );
  }

  return (
    <a
      href={entry.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {card}
    </a>
  );
}
