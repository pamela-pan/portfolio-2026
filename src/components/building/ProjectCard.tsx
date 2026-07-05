"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
  index?: number;       // for "01 / 03" label
  total?: number;
}

export default function ProjectCard({ project, index = 1, total = 1 }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  // Touch devices have no hover state, so the reveal shows by default.
  const revealed = hovered || isTouch;

  return (
    <Link
      href={`/building/${project.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
            Featured &nbsp;— &nbsp;{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          {!isTouch && (
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
          )}
        </div>

        {/* Image wrap — the blend zone */}
        <div
          style={{
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            transform: revealed ? "rotate(0deg) scale(1)" : "rotate(-1deg) scale(0.97)",
            transition: `transform var(--duration-reveal) var(--ease-ink), box-shadow var(--duration-reveal) ease`,
            boxShadow: revealed
              ? "0 20px 60px rgba(28,26,23,0.15)"
              : "0 2px 8px rgba(28,26,23,0.06)",
          }}
        >
          <Image
            src={project.cover}
            alt={project.coverAlt}
            width={840}
            height={560}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: revealed
                ? "saturate(1) sepia(0) brightness(1)"
                : "saturate(0.08) sepia(0.5) brightness(1.08)",
              mixBlendMode: revealed ? "normal" : "multiply",
              transition: `filter var(--duration-reveal) var(--ease-ink)`,
            }}
          />

          {/* Paper wash overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--bg)",
              opacity: revealed ? 0 : 0.6,
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
              opacity: revealed ? 0 : 1,
              transition: `opacity var(--duration-reveal) var(--ease-ink)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Project info — slides up */}
        <div
          style={{
            marginTop: 18,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(8px)",
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
            {project.title}
          </span>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              color: "var(--ink-muted)",
              textAlign: "right",
              lineHeight: 1.8,
            }}
          >
            {project.tags.join(" · ")}
          </span>
        </div>
      </div>
    </Link>
  );
}
