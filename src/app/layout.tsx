import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pamela Pan — AI-native builder",
  description:
    "AI-native builder from Los Angeles. Working at the intersection of technical storytelling, interactive systems, and human adoption.",
  openGraph: {
    title: "Pamela Pan — 潘平悦",
    description: "AI-native builder. Technical storytelling · Interactive systems · Human adoption.",
    url: "https://pamelapan.co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pamela Pan",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400&family=Noto+Serif+SC:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
