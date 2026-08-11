import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/nav/Nav";
import ZoomableImage from "@/components/shared/ZoomableImage";
import { projects } from "@/lib/content";

interface Props {
  params: { slug: string };
}

// Splits on `backtick` spans and renders them as inline code pills.
function renderWithInlineCode(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code
        key={i}
        style={{
          fontFamily: "var(--mono)",
          background: "color-mix(in srgb, var(--ink) 6%, transparent)",
          padding: "1px 6px",
          borderRadius: 4,
        }}
      >
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    )
  );
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

      <article style={{ padding: "140px 52px 120px", maxWidth: 904, margin: "0 auto" }}>

        {/* Back */}
        <Link
          href="/building"
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

        {/* Hero */}
        {!project.hideCoverAndSummary && (project.heroEmbeds ? (
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 80 }}>
            {project.heroEmbeds.map((embed, ei) => (
              <div key={ei} style={{ flex: project.heroEmbeds!.length === 1 ? "1 1 100%" : undefined }}>
                <div
                  style={
                    project.heroEmbeds!.length === 1
                      ? {
                          width: "100%",
                          aspectRatio: embed.aspectRatio ?? 16 / 9,
                          borderRadius: 2,
                          overflow: "hidden",
                          border: "0.5px solid var(--border)",
                        }
                      : {
                          height: 344, // fills the 800px hero row across both frames at their real aspect ratios
                          aspectRatio: embed.aspectRatio ?? 16 / 9,
                          borderRadius: 2,
                          overflow: "hidden",
                          border: "0.5px solid var(--border)",
                        }
                  }
                >
                  <iframe
                    src={embed.url}
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                  />
                </div>
                {embed.label && (
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.02em",
                      color: "var(--ink-muted)",
                      marginTop: 12,
                    }}
                  >
                    {embed.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              borderRadius: 2,
              overflow: "hidden",
              marginBottom: 80,
              border: "0.5px solid var(--border)",
            }}
          >
            <ZoomableImage
              src={project.cover}
              alt={project.coverAlt}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ))}

        {/* Summary */}
        {!project.hideCoverAndSummary && (
          <>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.7,
                marginBottom: 80,
              }}
            >
              {project.summary}
            </p>

            <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", marginBottom: 80 }} />
          </>
        )}

        {/* Sections */}
        {project.sections.map((section, i) => (
          <div key={i} style={{ marginBottom: 80 }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                display: "block",
                marginBottom: 16,
              }}
            >
              {String(i + 1).padStart(2, "0")} — {section.title}
            </span>

            {section.body?.map((paragraph, pi) => (
              <p
                key={pi}
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 17,
                  lineHeight: 1.8,
                  marginBottom: pi < section.body!.length - 1 ? 16 : 0,
                }}
              >
                {paragraph}
              </p>
            ))}

            {section.image && (
              <div style={{ marginTop: section.body ? 32 : 0 }}>
                <div
                  style={{
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "0.5px solid var(--border)",
                  }}
                >
                  <ZoomableImage
                    src={section.image.src}
                    alt={section.image.alt}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                {section.image.caption && (
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.02em",
                      color: "var(--ink-muted)",
                      marginTop: 12,
                    }}
                  >
                    {section.image.caption}
                  </p>
                )}
              </div>
            )}

            {section.embeds && !section.stats && (
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  flexWrap: "wrap",
                  marginTop: section.body || section.image ? 32 : 0,
                }}
              >
                {section.embeds.map((embed, ei) => (
                  <div key={ei} style={{ flex: "1 1 320px", minWidth: 280 }}>
                    <div
                      style={{
                        borderRadius: 2,
                        overflow: "hidden",
                        border: "0.5px solid var(--border)",
                        aspectRatio: embed.aspectRatio ?? 16 / 10,
                      }}
                    >
                      <iframe
                        src={embed.url}
                        allowFullScreen
                        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                      />
                    </div>
                    {embed.label && (
                      <p
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 11,
                          letterSpacing: "0.02em",
                          color: "var(--ink-muted)",
                          marginTop: 12,
                        }}
                      >
                        {embed.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {section.callout && (
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "var(--ink-muted)",
                  background: "color-mix(in srgb, var(--border) 20%, var(--bg))",
                  borderLeft: "2px solid var(--border)",
                  padding: "14px 18px",
                  marginTop: 24,
                }}
              >
                {renderWithInlineCode(section.callout)}
              </p>
            )}

            {section.stats && (
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 26, flex: "1 1 320px" }}>
                  {section.stats.map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        display: "flex",
                        gap: 22,
                        alignItems: "baseline",
                        borderTop: "0.5px solid var(--border)",
                        paddingTop: 22,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 22,
                          fontWeight: 500,
                          color: "var(--ink)",
                          whiteSpace: "nowrap",
                          minWidth: 130,
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: 16,
                          color: "var(--ink-muted)",
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {section.embeds?.map((embed, ei) => {
                  const embedHeight = 500;
                  const embedWidth = embedHeight * (embed.aspectRatio ?? 9 / 19.5);
                  return (
                  <div key={ei} style={{ flex: "0 0 auto", width: embedWidth }}>
                    <div
                      style={{
                        height: embedHeight,
                        aspectRatio: embed.aspectRatio ?? 9 / 19.5,
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        src={embed.url}
                        allowFullScreen
                        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                      />
                    </div>
                    {embed.label && (
                      <p
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 11,
                          letterSpacing: "0.02em",
                          color: "var(--ink-muted)",
                          textAlign: "center",
                          marginTop: 12,
                        }}
                      >
                        {embed.label}
                      </p>
                    )}
                  </div>
                  );
                })}
              </div>
            )}
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
