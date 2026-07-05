"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { person } from "@/lib/content";

const links = [
  { href: "/building", label: "Building" },
  { href: "/storytelling", label: "Storytelling" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px 52px",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          color: "var(--ink-muted)",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        {person.nameFull} &nbsp;·&nbsp; {person.nameChinese}
      </Link>

      <ul style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(({ href, label }) => {
          const active = pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: active ? "var(--ink)" : "var(--ink-muted)",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "2px",
                  borderBottom: active ? "0.5px solid var(--ink)" : "none",
                  transition: "color 0.3s",
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
