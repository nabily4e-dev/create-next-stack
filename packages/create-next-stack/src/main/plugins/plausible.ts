import { createPlugin } from "../plugin"

export const plausiblePlugin = createPlugin({
  id: "plausible",
  name: "Plausible",
  description: "Adds support for Plausible Analytics",
  active: ({ flags }) => Boolean(flags["package-manager"] === "npm"),
  dependencies: {
    "next-plausible": {
      name: "next-plausible",
      version: "^3.0.0",
    },
  },
  technologies: [
    {
      id: "plausible",
      name: "Plausible Analytics",
      description:
        "Plausible Analytics is an easy to use and privacy-friendly alternative to Google Analytics. It is intuitive, lightweight and open source. It also uses no cookies and is fully compliant with GDPR, CCPA and PECR. It is available both self-hosted and fully managed.",
      links: [
        { title: "Website", url: "https://plausible.io/" },
        { title: "Docs", url: "https://plausible.io/docs" },
        { title: "GitHub", url: "https://github.com/plausible/analytics" },
      ],
    },
    {
      id: "next-plausible",
      name: "next-plausible",
      description:
        "next-plausible is a simple Next.js integration of Plausible Analytics. It will add the Plausible script for you, add a proxy to avoid ad-blockers, and let you send custom events.",
      links: [
        { title: "Website", url: "https://next-plausible.vercel.app/" },
        {
          title: "GitHub",
          url: "https://github.com/4lejandrito/next-plausible",
        },
      ],
    },
  ],
} as const)
