"use client";

import { useState } from "react";
import GTMCard from "./GTMCard";
import type { GTMEntry } from "@/lib/content";

interface GTMGridProps {
  entries: GTMEntry[];
}

const filters = ["All", "eBooks", "Blogs", "Speaking & Demos"] as const;
type Filter = (typeof filters)[number];

const filterToKind: Record<Filter, GTMEntry["kind"] | null> = {
  All: null,
  eBooks: "ebook",
  Blogs: "blogs",
  "Speaking & Demos": "speaking",
};

export default function GTMGrid({ entries }: GTMGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const activeKind = filterToKind[activeFilter];
  const visibleEntries = activeKind === null ? entries : entries.filter((entry) => entry.kind === activeKind);

  return (
    <>
      {/* Filter pills */}
      <div style={{ display: "flex", gap: 12, marginBottom: 64, flexWrap: "wrap" }}>
        {filters.map((filter) => {
          const active = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: active ? "var(--bg)" : "var(--ink-muted)",
                background: active ? "var(--ink)" : "transparent",
                border: "0.5px solid var(--border)",
                borderRadius: 100,
                padding: "8px 20px",
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s",
              }}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Entries grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: "80px 60px",
        }}
      >
        {visibleEntries.map((entry) => (
          <GTMCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </>
  );
}
