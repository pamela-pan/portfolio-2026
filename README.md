# Pamela Pan — Portfolio

Personal portfolio site. Built with Next.js 14, TypeScript, and zero UI libraries.

**Design:** Ink-paper minimalism. Xuan paper warmth, Chinese botanical SVGs, EB Garamond × DM Mono typography, CSS blend-mode project reveals.

---

## Quick start

```bash
git clone https://github.com/your-username/pamela-portfolio
cd pamela-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customising

### Your info
Edit **`src/lib/content.ts`** — this is the only file you need to touch for content:

- `person` — name, bio, location, social links
- `territories` — the three work areas shown in the hero footer
- `projects` — your case studies (see schema below)

### Adding a project

1. Drop your screenshot in `public/images/projects/your-project.png`
2. Add a project object to the `projects` array in `content.ts`:

```ts
{
  slug: "your-project",          // URL: /work/your-project
  title: "Project Name",
  subtitle: "One line description",
  tags: ["Tag 1", "Tag 2"],
  year: "2024",
  cover: "/images/projects/your-project.png",
  coverAlt: "Describe the image for screen readers",
  featured: false,               // set true for hero spotlight
  summary: "What you built and why.",
  problem: "The problem you were solving.",
  approach: "How you approached it.",
  outcome: "What happened as a result.",
  link: "https://yourproject.com",   // optional
  linkLabel: "View project",         // optional
}
```

### Design tokens
All visual decisions live in `src/app/globals.css` under `:root`. Change colors, fonts, or motion there and it propagates everywhere.

---

## Structure

```
src/
├── app/
│   ├── page.tsx              # Home / hero
│   ├── work/
│   │   ├── page.tsx          # All projects
│   │   └── [slug]/page.tsx   # Case study
│   ├── about/page.tsx
│   ├── writing/page.tsx
│   └── globals.css           # Design tokens + animations
├── components/
│   ├── nav/Nav.tsx
│   ├── work/ProjectCard.tsx  # The blend-reveal interaction
│   └── shared/Botanical.tsx  # SVG ink illustration
└── lib/
    └── content.ts            # ← All your content lives here
```

---

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/pamela-portfolio)

Or manually:
```bash
npm run build
vercel --prod
```

---

## Stack

- **Next.js 14** App Router + TypeScript
- **No UI library** — pure CSS with custom properties
- **EB Garamond** + **Noto Serif SC** (headings) · **DM Mono** (labels)
- **CSS blend-mode** for the xuan paper project reveal
- **Vercel** for deployment
