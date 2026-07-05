import Nav from "@/components/nav/Nav";
import ProjectCard from "@/components/building/ProjectCard";
import Botanical from "@/components/shared/Botanical";
import { person, territories, featuredProjects } from "@/lib/content";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="hero-section">
        {/* Vertical divider */}
        <div
          className="hero-divider"
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
        <div className="hero-left">
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
            {person.status} &nbsp;/&nbsp; {person.location}
          </span>

          <h1
            className="hero-name"
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: 6,
              opacity: 0,
              animation: "fadeUp 1s ease 0.4s forwards",
            }}
          >
            {person.nameFull}
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
            className="hero-bio"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(19px, 2.2vw, 26px)",
              lineHeight: 1.6,
              marginBottom: 52,
              opacity: 0,
              animation: "fadeUp 1s ease 0.7s forwards",
            }}
          >
            {person.bio}
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
            <a href="/building" style={pillStyle}>
              View work
            </a>
            <a href={`mailto:${person.email}`} style={textLinkStyle}>
              Say hello →
            </a>
          </div>
        </div>

        {/* Right — featured projects */}
        <div className="hero-right">
          {/* Corner botanical */}
          <div
            className="corner-botanical"
            style={{
              opacity: 0,
              animation: "fadeIn 2s ease 1.4s forwards",
            }}
          >
            <Botanical size={90} opacity={0.5} />
          </div>

          <div
            className="hide-scrollbar"
            style={{
              opacity: 0,
              animation: "fadeUp 1.2s ease 1s forwards",
              width: "100%",
              maxWidth: 420,
              maxHeight: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 56,
            }}
          >
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i + 1}
                total={featuredProjects.length}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="scroll-hint"
          style={{
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
      <div className="territory-grid">
        {territories.map((t, i) => (
          <div
            key={t.num}
            className="territory-item"
            style={{
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
