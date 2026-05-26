import Nav from "@/components/nav/Nav";
import ProjectCard from "@/components/work/ProjectCard";
import Botanical from "@/components/shared/Botanical";
import { person, territories, featuredProject, projects } from "@/lib/content";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      {/* ── Hero ─────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "relative",
        }}
      >
        {/* Vertical divider */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "0.5px",
            background: "var(--border)",
            opacity: 0,
            animation: "fadeIn 1.5s ease 0.8s forwards",
          }}
        />

        {/* Left — identity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 52px 72px",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: 28,
              opacity: 0,
              animation: "fadeUp 1s ease 0.2s forwards",
            }}
          >
            {person.location} &nbsp;/&nbsp; {person.status}
          </span>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(52px, 6.5vw, 82px)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: 6,
              opacity: 0,
              animation: "fadeUp 1s ease 0.4s forwards",
            }}
          >
            {person.name}
          </h1>

          <p
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "clamp(15px, 1.8vw, 21px)",
              fontWeight: 300,
              color: "var(--ink-muted)",
              letterSpacing: "0.1em",
              marginBottom: 48,
              opacity: 0,
              animation: "fadeUp 1s ease 0.55s forwards",
            }}
          >
            {person.nameChinese}
          </p>

          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(15px, 1.35vw, 17px)",
              lineHeight: 1.8,
              maxWidth: "36ch",
              marginBottom: 52,
              opacity: 0,
              animation: "fadeUp 1s ease 0.7s forwards",
            }}
          >
            {person.bio
              .split(/(technical storytelling|interactive systems|human adoption)/)
              .map((part, i) =>
                ["technical storytelling", "interactive systems", "human adoption"].includes(part) ? (
                  <em key={i} style={{ fontStyle: "italic", color: "var(--ink-muted)" }}>
                    {part}
                  </em>
                ) : (
                  part
                )
              )}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              opacity: 0,
              animation: "fadeUp 1s ease 0.9s forwards",
            }}
          >
            <a href="/work" style={pillStyle}>
              View work
            </a>
            <a href={`mailto:${person.email}`} style={textLinkStyle}>
              Say hello →
            </a>
          </div>
        </div>

        {/* Right — featured project */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px 48px 72px",
            overflow: "hidden",
          }}
        >
          {/* Corner botanical */}
          <div
            style={{
              position: "absolute",
              top: 52,
              right: 36,
              opacity: 0,
              animation: "fadeIn 2s ease 1.4s forwards",
              pointerEvents: "none",
            }}
          >
            <Botanical size={90} opacity={0.5} />
          </div>

          <div
            style={{
              opacity: 0,
              animation: "fadeUp 1.2s ease 1s forwards",
              width: "100%",
              maxWidth: 420,
            }}
          >
            <ProjectCard
              project={featuredProject}
              index={1}
              total={projects.length}
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: 52,
            display: "flex",
            alignItems: "center",
            gap: 10,
            opacity: 0,
            animation: "fadeUp 1s ease 1.3s forwards",
          }}
        >
          <div
            style={{
              width: 40,
              height: "0.5px",
              background: "var(--border)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "var(--ink-muted)",
                animation: "scrollLine 2s ease 1.6s infinite",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ── Territory teasers ────────────────────── */}
      <div
        style={{
          borderTop: "0.5px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "0 52px",
        }}
      >
        {territories.map((t, i) => (
          <div
            key={t.num}
            style={{
              padding: "36px 40px 36px 0",
              borderRight: i < territories.length - 1 ? "0.5px solid var(--border)" : "none",
              paddingLeft: i > 0 ? 40 : 0,
              opacity: 0,
              animation: `fadeUp 0.8s ease ${1.3 + i * 0.1}s forwards`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--ink-muted)",
                letterSpacing: "0.12em",
                marginBottom: 10,
              }}
            >
              {t.num}
            </div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: 15,
                lineHeight: 1.4,
                marginBottom: 8,
              }}
            >
              {t.title}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--ink-muted)",
                letterSpacing: "0.04em",
                lineHeight: 1.7,
                whiteSpace: "pre-line",
              }}
            >
              {t.desc}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

/* ── Shared styles ─────────────────────────── */
const pillStyle: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--ink)",
  border: "0.5px solid var(--border)",
  borderRadius: 100,
  padding: "10px 22px",
  textDecoration: "none",
  background: "transparent",
  cursor: "pointer",
  display: "inline-block",
};

const textLinkStyle: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--ink-muted)",
  textDecoration: "none",
};
