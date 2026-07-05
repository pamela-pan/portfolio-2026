import Image from "next/image";
import Nav from "@/components/nav/Nav";
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
            {person.nameFull}
            {/* <br />
            <span style={{ color: "var(--ink-muted)", fontStyle: "italic" }}>
              {person.nameChinese}
            </span> */}
          </h1>

          {/* Bio paragraphs — update freely */}
          {[
            "I grew up in southern China and have since also called New York and Los Angeles home. Living in different places has taught me that the most interesting work often happens in between—between cultures, disciplines, and increasingly, between AI systems and the humans using them.",
            "Currently at Cloudera, I lead go-to-market initiatives for enterprise AI and data platform products—from shaping product narratives and launching technical collateral to enabling global sales teams and speaking at conferences. I enjoy translating complex technologies into experiences that people can understand, trust, and use.",
            "Outside of work, I'm a three-time hackathon winner and currently serve on the Cornell Tech Alumni Council, helping grow and support a community of more than 1,500 alumni."
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

        {/* Right — portrait */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 320,
              height: 320,
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
