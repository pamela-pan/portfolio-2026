// ─────────────────────────────────────────────────────
// content.ts — Edit this file to update your portfolio
// ─────────────────────────────────────────────────────

export const person = {
  name: "Pamela",
  nameFull: "Pamela Pan",
  nameChinese: "潘平悦",
  location: "Los Angeles, CA",
  status: "Currently open",
  bio: "AI-native builder from Los Angeles. Currently working at the intersection of technical storytelling, interactive systems, and human adoption.",
  email: "hello@pamelapan.co",         // update
  linkedin: "https://linkedin.com/in/pamelapan", // update
  github: "https://github.com/pamelapan",        // update
};

export const territories = [
  {
    num: "01",
    title: "Technical storytelling",
    desc: "Making complex systems legible\nto the humans who use them",
  },
  {
    num: "02",
    title: "Interactive systems",
    desc: "Products that think with people,\nnot at them",
  },
  {
    num: "03",
    title: "Human adoption",
    desc: "The gap between what AI can do\nand what people actually use",
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  cover: string;           // path inside /public/images/projects/
  coverAlt: string;
  featured: boolean;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "trivo",
    title: "Trivo",
    subtitle: "AI clinical trial finder",
    tags: ["AI Product", "Healthcare", "Conversational UX"],
    year: "2024",
    cover: "/images/projects/trivo.png",  // add your screenshot here
    coverAlt: "Trivo — AI clinical trial finder showing a conversational interface and condition search",
    featured: true,
    summary:
      "A personal clinical trial assistant that replaces the painful experience of searching clinicaltrials.gov with a conversational, human-first interface.",
    problem:
      "Patients navigating a cancer diagnosis face an impossibly complex clinical trial search experience — jargon-heavy, filter-hell, zero guidance.",
    approach:
      "Built a conversational AI layer that asks the right questions, understands condition nuance, and surfaces trials in plain language. Designed for patients, not researchers.",
    outcome:
      "Tested with 12 patients in early stage. 100% preferred it to direct clinicaltrials.gov search. Reduced time-to-relevant-trial from ~45 minutes to under 3.",
    link: "https://trivo.ai",  // update or remove
    linkLabel: "View project",
  },
  // ── Add more projects below ──
  // {
  //   slug: "your-project",
  //   title: "Project Name",
  //   subtitle: "One line description",
  //   tags: ["Tag 1", "Tag 2"],
  //   year: "2024",
  //   cover: "/images/projects/your-project.png",
  //   coverAlt: "Description for screen readers",
  //   featured: false,
  //   summary: "What you built and why.",
  //   problem: "The problem you were solving.",
  //   approach: "How you approached it.",
  //   outcome: "What happened as a result.",
  // },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
