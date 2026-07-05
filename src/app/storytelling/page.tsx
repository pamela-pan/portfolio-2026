import Nav from "@/components/nav/Nav";

export const metadata = { title: "Writing — Pamela Pan" };

export default function WritingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />
      <div style={{ padding: "140px 52px 120px", maxWidth: 680 }}>
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
          Writing
        </span>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            marginBottom: 64,
          }}
        >
          Notes on building,<br />
          <em style={{ fontStyle: "italic", color: "var(--ink-muted)" }}>thinking, and taste.</em>
        </h1>

        {/* Placeholder — replace with real posts */}
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: 17,
            lineHeight: 1.8,
            color: "var(--ink-muted)",
            fontStyle: "italic",
          }}
        >
          Essays coming soon. In the meantime, find me on{" "}
          <a
            href="https://linkedin.com/in/pamelapan"
            style={{ color: "var(--ink)", textUnderlineOffset: 3 }}
          >
            LinkedIn
          </a>
          .
        </p>

        {/* When you have posts, map them here:
        {posts.map(post => (
          <article key={post.slug} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "0.5px solid var(--border)" }}>
            <Link href={`/writing/${post.slug}`}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-muted)", display: "block", marginBottom: 8 }}>
                {post.date}
              </span>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, marginBottom: 8 }}>
                {post.title}
              </h2>
              <p style={{ fontFamily: "var(--serif)", fontSize: 16, color: "var(--ink-muted)", lineHeight: 1.7 }}>
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
        */}
      </div>
    </main>
  );
}
