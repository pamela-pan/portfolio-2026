import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav/Nav";
import { projects } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Pamela Pan` : "Project" };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      <article style={{ padding: "140px 52px 120px", maxWidth: 780, margin: "0 auto" }}>

        {/* Back */}
        <Link
          href="/work"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: 64,
          }}
        >
          ← Work
        </Link>

        {/* Tags + year */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                border: "0.5px solid var(--border)",
                borderRadius: 100,
                padding: "4px 12px",
              }}
            >
              {tag}
            </span>
          ))}
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginLeft: "auto",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: 12,
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: 20,
            fontStyle: "italic",
            color: "var(--ink-muted)",
            marginBottom: 64,
          }}
        >
          {project.subtitle}
        </p>

        {/* Hero image */}
        <div
          style={{
            borderRadius: 2,
            overflow: "hidden",
            marginBottom: 80,
            border: "0.5px solid var(--border)",
          }}
        >
          <Image
            src={project.cover}
            alt={project.coverAlt}
            width={1600}
            height={1000}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>

        {/* Summary */}
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(18px, 2vw, 22px)",
            lineHeight: 1.7,
            marginBottom: 80,
            maxWidth: "52ch",
          }}
        >
          {project.summary}
        </p>

        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", marginBottom: 80 }} />

        {/* Problem / Approach / Outcome */}
        {[
          { label: "The problem", content: project.problem },
          { label: "The approach", content: project.approach },
          { label: "What happened", content: project.outcome },
        ].map(({ label, content }) => (
          <div key={label} style={{ marginBottom: 64 }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                display: "block",
                marginBottom: 16,
              }}
            >
              {label}
            </span>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 17,
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              {content}
            </p>
          </div>
        ))}

        {/* Link out */}
        {project.link && (
          <div style={{ marginTop: 80 }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink)",
                border: "0.5px solid var(--border)",
                borderRadius: 100,
                padding: "12px 28px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {project.linkLabel ?? "View project"} →
            </a>
          </div>
        )}
      </article>
    </main>
  );
}
