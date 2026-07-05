import Nav from "@/components/nav/Nav";
import GTMGrid from "@/components/storytelling/GTMGrid";
import { gtmEntries } from "@/lib/content";

export const metadata = { title: "Storytelling — Pamela Pan" };

export default function StorytellingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />
      <div style={{ padding: "140px 52px 120px" }}>
        <div style={{ maxWidth: 680, marginBottom: 64 }}>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              display: "block",
              marginBottom: 24,
            }}
          >
            Storytelling
          </span>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Narratives I&apos;ve shipped,<br />
            <em style={{ fontStyle: "italic", color: "var(--ink-muted)" }}>and the impact they made.</em>
          </h1>
        </div>

        <GTMGrid entries={gtmEntries} />
      </div>
    </main>
  );
}
