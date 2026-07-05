import Nav from "@/components/nav/Nav";
import ProjectCard from "@/components/building/ProjectCard";
import { projects } from "@/lib/content";

export const metadata = { title: "Building — Pamela Pan" };

export default function BuildingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      <div style={{ padding: "140px 52px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              display: "block",
              marginBottom: 16,
            }}
          >
            Selected work
          </span>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              maxWidth: "20ch",
            }}
          >
            Things I&apos;ve built,<br />
            <em style={{ fontStyle: "italic", color: "var(--ink-muted)" }}>and why they matter.</em>
          </h1>
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "80px 60px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i + 1}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
