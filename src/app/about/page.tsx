import Image from "next/image";
import Nav from "@/components/nav/Nav";
import { person } from "@/lib/content";

export const metadata = { title: "About — Pamela Pan" };

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      <div className="about-grid">
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
              marginBottom: 32,
            }}
          >
            {person.nameFull}
            {/* <br />
            <span style={{ color: "var(--ink-muted)", fontStyle: "italic" }}>
              {person.nameChinese}
            </span> */}
          </h1>

          {/* Contact */}
          <div style={{ marginBottom: 48, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <a
              href="/pdfs/Pamela_Pan_Resume_072026.pdf"
              target="_blank"
              rel="noopener"
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
              Resume
            </a>
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

          {/* Bio paragraphs — update freely */}
          {[
            "I grew up in southern China and have since called New York and Los Angeles home. Living across different places has made me interested in work that sits between worlds—between technical systems and human judgment, product and go-to-market, and increasingly, between what AI can do and how people actually use it.",
            "At Cloudera, I work on go-to-market for enterprise AI and data products, shaping how complex technologies are understood and adopted across customers, sales teams, and the broader market. Alongside that, I've been building more hands-on AI-native GTM systems—from market intelligence and ICP infrastructure to experiments that connect customer signals directly to sales and growth actions.",
            "I'm most energized by work where I can understand the system, build the missing layer, and make it easier for people to act on better context.",
            "Outside of work, you'll usually find me training for HYROX, practicing martial arts, or halfway up a bouldering wall."
          ].map((para, i) => (
            <p
              key={i}
              className="about-bio"
              style={{
                fontFamily: "var(--serif)",
                fontSize: 17,
                lineHeight: 1.85,
                marginBottom: 28,
                color: i === 0 ? "var(--ink)" : "var(--ink-muted)",
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Right — portrait */}
        <div
          className="about-portrait"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            className="about-photo-wrap"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              border: "0.5px solid var(--border)",
            }}
          >
            <Image
              src="/images/about/pfp.jpg"
              alt={person.nameFull}
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
