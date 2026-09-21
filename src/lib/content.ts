// ─────────────────────────────────────────────────────
// content.ts — Edit this file to update your portfolio
// ─────────────────────────────────────────────────────

export const person = {
  name: "Pamela",
  nameFull: "Pamela Pan",
  nameChinese: "潘平悦",
  status: "Open to oppty",
  location: "SF - NY - LA",
  bio: "AI-native builder & storyteller",
  email: "pamela.pan0224@gmail.com",         // update
  linkedin: "https://linkedin.com/in/pampan", // update
  github: "https://github.com/pamela-pan",        // update
};

export const territories = [
  {
    num: "01",
    title: "Technical storytelling",
    desc: "Turning complex AI systems into products\nand narratives people can understand.",
  },
  {
    num: "02",
    title: "Human-centered systems",
    desc: "Designing AI experiences that help people think, decide, and create.",
  },
  {
    num: "03",
    title: "From capability to adoption",
    desc: "The gap between what AI can do\nand what people actually use",
  },
];

export type ProjectSection = {
  title: string;                              // e.g. "The problem" — auto-numbered when rendered
  body?: string[];                            // paragraphs
  image?: { src: string; alt: string; caption?: string };
  embeds?: { url: string; label?: string; aspectRatio?: number }[]; // side-by-side iframes (e.g. Figma embeds)
  callout?: string;                           // pull-quote / tech note
  stats?: { value: string; label: string }[]; // impact numbers — use instead of body
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  cover: string;           // path inside /public/images/projects/
  coverAlt: string;
  heroEmbeds?: { url: string; label?: string; aspectRatio?: number }[]; // replaces the hero cover image with side-by-side embeds, matched by height
  hideCoverAndSummary?: boolean; // skips the hero cover image + summary paragraph, jumping straight to sections
  featured: boolean;
  summary: string;
  sections: ProjectSection[];
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "gtm-operating-system",
  
    title: "GTM Operating System",
  
    subtitle:
      "One intelligence layer powering multiple growth workflows.",
  
    tags: ["B2B SaaS", "AI", "Growth Engineering"],
  
    year: "2026",
  
    cover: "/images/projects/gtm-os/cover.png",
  
    coverAlt: "MoeGo GTM operating system",
  
    featured: true,
  
    summary:
      "As MoeGo expanded from SMB grooming businesses into larger boarding and daycare operators, one-size-fits-all messaging no longer reflected how different customers made decisions. At the same time, valuable customer knowledge was scattered across HubSpot, Sales feedback, product expertise, competitive research, and more than 10 industry communities.\n\nI built a shared system for turning customer and market signals into repeatable GTM execution across outbound, paid acquisition, and market intelligence.",
  
    sections: [
      {
        title: "From intelligence to action",
  
        body: [
          "Customer knowledge was scattered across HubSpot, sales feedback, product expertise, competitive research, and more than 10 industry communities.",
  
          "I connected those signals to a shared ICP intelligence layer, then built repeatable workflows for activating that context across growth and sales.",
  
          "AI Skills applied consistent decision logic. n8n managed triggers and handoffs. Human review controlled the audience, positioning, claims, and final action.",
        ],
  
        image: {
          src: "/images/projects/gtm-os/flow.png",
          alt: "Customer signals flowing through ICP intelligence into GTM workflows",
          caption:
            "Signals → ICP intelligence → human decision → activation",
        },
      },
  
      {
        title: "Workflow 1 — Dormant MQLs -> Outbound pipeline",
  
        body: [
          "More than 10,000 marketing-qualified leads were sitting dormant in HubSpot. I built separate campaigns for grooming businesses and growing boarding and daycare operators.",
  
          "We segmented the database by business type, location count, team size, and growth stage, then tested three messaging directions for each ICP across a three-week email sequence.",
  
          "I owned the HubSpot segmentation, corrected mislabeled tags, refined the lists, selected the final messaging, reviewed the copy and claims, coordinated visuals, and executed the campaigns.",
  
          "The conversion path connected each email to an ICP-specific booking page, followed by a completed demo, sales follow-up, and paid conversion.",
        ],
  
        stats: [
          {
            value: "48%",
            label:
              "average open rate, compared with roughly 20% for similar campaigns",
          },
          {
            value: "~50",
            label: "completed demos generated over two months",
          },
          {
            value: "8",
            label: "paid customers converted",
          },
          {
            value: "2 days",
            label:
              "to launch campaigns that previously took roughly two weeks",
          },
        ],
  
        image: {
          src: "/images/projects/dorea/landing-page.png",
          alt: "ICP-specific demo-booking page",
          caption:
            "The same ICP insight carried from the email into the booking experience",
        },
      },
  
      {
        title: "Workflow 2 — ICP messaging -> Paid demand capture",
  
        body: [
          "We reused the same ICP-specific landing pages in Google Search campaigns to test whether the messaging could also convert active demand.",
  
          "The campaign generated 19 demo bookings from approximately $1,147 in spend, at an average cost of roughly $60 per booking.",
  
          "Search-term analysis showed that most conversions came from branded demand. The test validated the pages as a demand-capture asset, while showing that future experiments needed to separate branded and nonbranded acquisition performance.",
        ],
  
        stats: [
          {
            value: "19",
            label: "demo bookings",
          },
          {
            value: "$60",
            label: "average cost per booking",
          },
          {
            value: "8.7%",
            label: "click-through rate",
          },
          {
            value: "$1.34",
            label: "average cost per click",
          },
        ],
      },
  
      {
        title: "Workflow 3 — Community signals -> Opportunities & Execution recommendations",
  
        body: [
          "Our community manager was spending a full day each week manually scanning conversations, while important customer and competitor signals were still easy to miss.",
  
          "I built a tool called Dorea to monitor the market pulse, continuously review community threads, and prioritize the conversations most relevant to customer risk, competitive activity, and buying intent.",
  
          "AI handled the initial reading, classification, and prioritization. Human review determined which signals required a response, escalation, sales follow-up, or update to the ICP knowledge base.",
        ],
  
        stats: [
          {
            value: "100+ / week",
            label: "relevant community threads surfaced",
          },
          {
            value: "10–20",
            label: "threads previously reviewed manually",
          },
          {
            value: "Same day",
            label: "detection of customer and competitive signals",
          },
          {
            value: "$20K+",
            label: "in competitive revenue opportunities surfaced",
          },
        ],
  
        image: {
          src: "/images/projects/dorea/after-intelligence.gif",
          alt: "Market Pulse prioritizing community intelligence",
          caption: "From raw community conversations to prioritized signals",
        },
      },
  
      {
        title: "One system that gets smarter with use",
  
        body: [
          "These were not three disconnected AI projects. Each workflow used the same ICP intelligence and generated new evidence for the others.",
  
          "Market signals improved our understanding of each ICP. That context informed campaign messaging and landing pages. Performance data then showed which pains and buying signals deserved more weight.",
  
          "One example was staff management: it performed across both grooming and boarding campaigns, revealing that operational complexity was a stronger buying signal than vertical alone.",
        ],
      },
  
      {
        title: "AI prepares the decision. People own it.",
  
        body: [
          "AI increased the volume of evidence I could evaluate and accelerated research, segmentation, synthesis, and first drafts.",
  
          "The team and I retained control over targeting, positioning, claims, investment decisions, and what ultimately reached customers.",
        ],
      },
    ],
  },

    {
    slug: "trivo",
    title: "Trivo",
    subtitle: "Closing the gap between cancer patients and the trials that could help them",
    tags: ["Healthtech", "AI", "Hackathon Winner"],
    year: "2024",
    cover: "/images/projects/trivo/cover.png",
    coverAlt: "Trivo conversational clinical trial matching interface",
    heroEmbeds: [
      {
        url: "https://embed.figma.com/proto/A4TIqOnQr26NsfUFA4GwQQ/Cancer-I-Team--Copy-?node-id=345-5856&scaling=scale-down-width&content-scaling=fixed&page-id=30%3A12&starting-point-node-id=333%3A13100&embed-host=share&footer=false&viewport-controls=false",
        label: "Pitch deck — interactive walkthrough",
        aspectRatio: 1920 / 1080,
      },
    ],
    featured: true,
    summary:"",
    sections: [
      {
        title: "Impact",
        stats: [
          {
            value: "1st Place",
            label: "Cornell Tech Silicon Valley Trek hackathon, Spring 2024",
          },
          {
            value: "8",
            label: "Patients matched to potential trials in 3 months",
          },
          {
            value: "3",
            label: "Medical research institutions in collaboration",
          },
          {
            value: "Handed off",
            label: "to Weill Cornell Medicine's research team to carry the work forward",
          },
        ],
        embeds: [
          {
            url: "https://embed.figma.com/proto/A4TIqOnQr26NsfUFA4GwQQ/Cancer-I-Team--Copy-?node-id=201-4760&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=333%3A11965&embed-host=share&footer=false&viewport-controls=false",
            label: "Prototype — click through the patient intake flow",
            aspectRatio: 9 / 19.5,
          },
        ],
      },
      {
        title: "The problem",
        body: [
          "Clinical trials fail to enroll enough patients constantly — not because patients don't exist, but because finding the right trial is slow, manual, and opaque. Only 4.5% of eligible cancer patients ever sign up.",
          "Patients don't know what they qualify for, doctors don't have time to manually cross-reference trial criteria, and clinical research teams are left with under-enrolled trials that can stall or fail entirely.",
        ],
      },
      {
        title: "The approach",
        body: [
          "I led the team through a semester of research before the hackathon itself, then served as product manager, GTM lead, and pitch lead on demo day.",
          "Trivo uses a conversational interface for patient intake — instead of a static eligibility form, patients describe their situation in plain language, and an LLM-based matching engine cross-references it against live trial criteria pulled from ClinicalTrials.gov to surface qualifying trials in real time.",
        ],
        image: {
          src: "/images/projects/trivo/approach.png",
          alt: "Conversational intake flow - Matched trial",
          caption: "From conversation to matched trial",
        },
      },
      {
        title: "What happened",
        body: [
          "Trivo won first place at the Cornell Tech Silicon Valley Trek hackathon (Spring 2024), and the pitch generated real interest from pharma prospects and a VC pipeline afterward.",
          "The team ultimately moved on to other commitments, so rather than let the work sit, we handed the project to Weill Cornell Medicine's research team to carry forward.",
        ],
        image: {
          src: "/images/projects/trivo/outcome.png",
          alt: "PLACEHOLDER — replace with demo-day photo or award moment if you have one",
          caption: "We won! - March 2024, San Francisco SVB Center",
        },
      },
    ],
  },
  {
  slug: "peachy",
  title: "Peachy",
  subtitle: "A Slack copilot built on Google PaLM 2 (now Gemini)",
  tags: ["Google AI", "MongoDB", "Hackathon Winner"],
  year: "2023",
  cover: "/images/projects/peachy/cover.png",
  coverAlt: "Peachy Slack AI assistant interface",
  hideCoverAndSummary: true,
  featured: false,
  summary:
    "Grand Prize winner at Atlas Madness's Hack Monster hackathon (Summer 2023) — Peachy was the first Slack AI assistant built on Google's PaLM 2 model, letting users run advanced reasoning tasks without leaving their workspace. Built with a teammate over two weeks, covering product, architecture, design, and pitch.",
  sections: [
    {
      title: "Watch it",
      embeds: [
        {
          url: "https://www.youtube.com/embed/CNDHOZP25fg",
          label: "Hackathon recap",
        },
      ],
    },
    {
      title: "The problem",
      body: [
        "Generative AI assistants on Slack all ran on ChatGPT — there wasn't one built on Google's PaLM 2, despite its strength at complex reasoning tasks. We saw an opening: bring PaLM 2's reasoning capability directly into the tool millions of teams already work in, instead of asking people to leave Slack to get real value from generative AI.",
      ],
    },
    {
      title: "The approach",
      body: [
        "I owned product specs, architecture design, experience design, and the pitch, working closely with my teammate over the two-week build.",
        "Peachy co-pilots Slack users through advanced reasoning tasks — from coding help to drafting product roadmaps — while staying context-aware of the ongoing conversation and letting users customize the tone of responses.",
        "We designed a three-tier architecture: the Slack SDK on the client side, the Slack Event API and Google Generative AI API as middleware, and Slack App Socket handling backend logic. MongoDB backed user data and conversation state — its flexible schema let us adapt features quickly without the app fighting us, and its fast read/write kept responses timely inside a live chat environment. A CI/CD pipeline via GitHub Actions handled compilation, testing, and deployment, with Dotenv managing secrets.",
      ],
      image: {
        src: "/images/projects/peachy/architecture.png",
        alt: "Architecture & Experience of Peachy",
        caption: "Architecture of Peachy",
      },
    },
    {
      title: "What happened",
      body: [
        "Peachy won the Grand Prize at Atlas Madness's Hack Monster hackathon and generated real interest afterward. The team didn't continue building it past the hackathon, but the core bet — that reasoning-capable generative AI belongs inside the tools people already use, not in a separate destination — turned out to be right; that's now the default shape of most enterprise AI copilots.",
      ],
    },
  ],
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
  //   sections: [
  //     { title: "The problem", body: ["The problem you were solving."] },
  //     { title: "The approach", body: ["How you approached it."] },
  //     { title: "What happened", body: ["What happened as a result."] },
  //   ],
  // },
];

const featured = projects.filter((p) => p.featured);
export const featuredProjects = featured.length > 0 ? featured : [projects[0]];

export type GTMEntry = {
  slug: string;
  kind: "blogs" | "speaking" | "ebook";
  title: string;
  source?: string;       // publication/venue, e.g. "Cloudera Blog", "Harvard Business Review"
  authors?: string[];
  date: string;           // ISO or display string
  tags: string[];
  cover: string;
  coverAlt: string;
  link?: string;          // writing: opens directly, no lightbox
  items?: { type: "photo" | "demo" | "video"; src: string; caption: string }[]; // speaking/video: lightbox
  note?: string;          // e.g. distribution restriction, download availability
};

export const gtmEntries: GTMEntry[] = [
  {
    slug: "evolve",
    kind: "speaking",
    title: "Cloudera EVOLVE 2025",
    date: "2025",
    tags: ["DC", "São Paulo","Live Demo"],
    cover: "/images/gtm/evolve/dc.jpg",
    coverAlt: "Presenting at Cloudera EVOLVE",
    items: [
      { type: "photo", src: "/images/gtm/evolve/sao-paulo.jpg", caption: "Presenting at Cloudera EVOLVE — São Paulo" },
      { type: "photo", src: "/images/gtm/evolve/dc.jpg", caption: "Presenting at Cloudera EVOLVE — Washington, D.C." },
      { type: "demo", src: "https://app.getreprise.com/launch/wy18oBX/", caption: "Live product demo — click through the same walkthrough shown on stage" },
    ],
  },
  {
    slug: "webinar-agentic-data-engineering",
    kind: "speaking",
    title: "Agentic Data Engineering: Self-Healing Pipelines for Real-Time Insight",
    source: "Cloudera",
    date: "2026",
    tags: ["Webinar"],
    cover: "https://img.youtube.com/vi/Cn0rPq75IPU/hqdefault.jpg",
    coverAlt: "Agentic Data Engineering: Self-Healing Pipelines for Real-Time Insight video thumbnail",
    items: [
      { type: "video", src: "https://www.youtube.com/embed/Cn0rPq75IPU", caption: "Agentic Data Engineering: Self-Healing Pipelines for Real-Time Insight — Cloudera" },
    ],
  },
  {
    slug: "iceberg-for-dummies",
    kind: "ebook",
    title: "Migrating to Apache® Iceberg For Dummies",
    source: "Cloudera eBook",
    date: "2025",
    tags: ["eBook", "Cloudera"],
    cover: "/images/gtm/iceberg-for-dummies/cover.png",
    coverAlt: "Migrating to Apache Iceberg For Dummies eBook cover",
    link: "https://www.cloudera.com/campaign/migrating-to-apache-iceberg-for-dummies.html",
  },
  {
    slug: "hbr-ai-data-readiness",
    kind: "ebook",
    title: "Taming the Complexity of AI Data Readiness",
    source: "Cloudera × Harvard Business Review",
    date: "2026",
    tags: ["HBR", "Video"],
    cover: "https://img.youtube.com/vi/3O7ugPN_Lnk/hqdefault.jpg",
    coverAlt: "Taming the Complexity of AI Data Readiness video thumbnail",
    items: [
      { type: "video", src: "https://www.youtube.com/embed/3O7ugPN_Lnk", caption: "Taming the Complexity of AI Data Readiness — Cloudera × HBR Analytic Services" },
    ],
    note: "Full report available for download via Cloudera/HBR",
  },
  {
    slug: "tiktok-creative-codes",
    kind: "ebook",
    title: "Creative Solutions: The Ultimate How-to Guide",
    source: "TikTok For Business Blog",
    date: "October 8, 2021",
    tags: ["TikTok For Business"],
    cover: "/images/gtm/tiktok-cover.png",
    coverAlt: "Creative Solutions: The Ultimate How-to Guide blog hero image",
    link: "https://ads.tiktok.com/business/en-US/blog/tiktok-creative-ultimate-guide",
  },
  {
    slug: "agent-studio-nvidia",
    kind: "blogs",
    title: "Cloudera Agent Studio and NVIDIA Bring Next-Gen Agents to Enterprise AI",
    source: "Cloudera Blog — Partners",
    authors: ["Charu Anchlia", "Suryakant Bhardwaj", "Pamela Pan"],
    date: "March 18, 2026",
    tags: ["Cloudera AI", "Agent Studio"],
    cover: "https://www.cloudera.com/content/dam/www/marketing/blog/b01/b01-ai-agent-txt.webp",
    coverAlt: "Cloudera Agent Studio and NVIDIA blog hero image",
    link: "https://www.cloudera.com/blog/partners/cloudera-agent-studio-and-nvidia-bring-next-gen-agents-to-enterprise-ai.html",
  },
  {
    slug: "democratize-data-ai",
    kind: "blogs",
    title: "Democratize Data for AI Using Interoperability Across Engines and Zero-Copy Data Collaboration",
    source: "Cloudera Blog — Business",
    authors: ["Pamela Pan", "Akshat Mathur", "Bill Zhang"],
    date: "October 3, 2025",
    tags: ["Cloudera", "Data Sharing"],
    cover: "https://www.cloudera.com/content/dam/www/marketing/blog/b01/b01-getty-174962301.jpg",
    coverAlt: "Democratize Data for AI blog hero image",
    link: "https://www.cloudera.com/blog/business/democratize-data-for-ai-using-interoperability-across-engines-and-zero-copy-data-collaboration.html",
  },
  {
    slug: "external-ide-connectivity-spark",
    kind: "blogs",
    title: "Elevating Productivity: Cloudera Data Engineering Brings External IDE Connectivity to Apache Spark",
    source: "Cloudera Blog — Technical",
    authors: ["Pamela Pan", "Shaun Ahmadian"],
    date: "November 21, 2024",
    tags: ["Cloudera", "Data Engineering"],
    cover: "https://www.cloudera.com/content/dam/www/marketing/blog/b01/b01-getty1387057613.jpg",
    coverAlt: "External IDE Connectivity blog hero image",
    link: "https://www.cloudera.com/blog/technical/elevating-productivity-cloudera-data-engineering-brings-external-ide-connectivity-to-apache-spark.html",
  },
  {
    slug: "tiktok-creator-collaborations",
    kind: "blogs",
    title: "How Creator Collaborations Can Spark Online Shopping Sprees",
    source: "TikTok For Business Blog",
    date: "April 23, 2021",
    tags: [ "TikTok for Business"],
    cover: "https://lf-tt4b.tiktokcdn.com/obj/i18nblog/tt4b_cms/en-US/tipdilz7wysq-LAiD47jjateZ2QGO4qpIW.jpeg",
    coverAlt: "TikTok creator collaborations blog hero image",
    link: "https://ads.tiktok.com/business/en-US/blog/how-creator-collaborations-can-spark-online-shopping-sprees",
  },
];
