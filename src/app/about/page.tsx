import Nav from "@/components/nav/Nav";
import Botanical from "@/components/shared/Botanical";
import { person } from "@/lib/content";

export const metadata = { title: "About — Pamela Pan" };

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      <div
        style={{
          padding: "140px 52px 120px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 80px",
          maxWidth: 1100,
        }}
      >
        {/* Left — text */}
        <div>
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
            About
          </span>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(36px, 4.5vw, 58px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: 48,
            }}
          >
            {person.name}
            <br />
            <span style={{ color: "var(--ink-muted)", fontStyle: "italic" }}>
              {person.nameChinese}
            </span>
          </h1>

          {/* Bio paragraphs — update freely */}
          {[
            "I build at the intersection of AI systems and human experience. My work focuses on the translation problem: how do you take something technically complex and make it feel obvious, useful, and even beautiful to the people who use it?",
            "Before this, I worked across product, strategy, and GTM — which means I've seen how products fail to land even when the underlying technology is exceptional. The gap is almost always human.",
            "I'm drawn to problems where the stakes are real — healthcare, education, civic infrastructure. Places where better product thinking doesn't just drive metrics, it changes someone's day.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--serif)",
                fontSize: 17,
                lineHeight: 1.85,
                marginBottom: 28,
                maxWidth: "48ch",
                color: i === 0 ? "var(--ink)" : "var(--ink-muted)",
              }}
            >
              {para}
            </p>
          ))}

          {/* Contact */}
          <div style={{ marginTop: 64, display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a
              href={`mailto:${person.email}`}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink)",
                border: "0.5px solid var(--border)",
                borderRadius: 100,
                padding: "10px 22px",
                textDecoration: "none",
              }}
            >
              Email
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                textDecoration: "none",
              }}
            >
              LinkedIn →
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                textDecoration: "none",
              }}
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* Right — botanical */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Botanical size={180} opacity={0.45} />
        </div>
      </div>
    </main>
  );
}
