export interface Project {
  slug: string
  title: string
  tagline: string
  stack: string[]
  status: "Live" | "In progress"
  year: number
  highlights: string[]
  problem: string
  solution: string
  results: string[]
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    tagline: "High-performance e-commerce platform",
    stack: ["Next.js", "Supabase", "Stripe"],
    status: "Live",
    year: 2024,
    highlights: [
      "50% faster page loads vs previous platform",
      "Real-time inventory sync across channels",
      "Automated order fulfillment pipeline",
    ],
    problem: "The client's legacy e-commerce system couldn't handle peak traffic, resulting in lost sales and frustrated customers during high-demand periods.",
    solution: "We rebuilt the platform from scratch using Next.js for blazing-fast server-side rendering and edge caching. Supabase provided real-time database sync, while Stripe handled secure payments with minimal latency.",
    results: [
      "300% increase in concurrent users supported",
      "Revenue up 45% in first quarter post-launch",
      "Cart abandonment reduced by 28%",
    ],
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "Analytics dashboard for business intelligence",
    stack: ["React", "Node.js", "PostgreSQL"],
    status: "Live",
    year: 2024,
    highlights: [
      "Custom data visualization components",
      "Role-based access control",
      "Export to PDF and Excel",
    ],
    problem: "Decision-makers were drowning in spreadsheets and couldn't get real-time insights from their scattered data sources.",
    solution: "We designed a unified dashboard that aggregates data from multiple APIs and databases. Custom visualization components make complex metrics digestible at a glance, with granular permissions for different team roles.",
    results: [
      "Executive reporting time cut from 8 hours to 15 minutes",
      "Data accuracy improved to 99.7%",
      "Adopted by 12 departments within 3 months",
    ],
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "Workflow automation system",
    stack: ["TBD"],
    status: "In progress",
    year: 2025,
    highlights: [
      "TBD",
      "TBD",
    ],
    problem: "Manual approval processes were creating bottlenecks, with documents stuck in email chains for days before reaching the right stakeholders.",
    solution: "We're building an intelligent workflow engine that routes tasks automatically based on configurable rules. Smart notifications and escalation paths ensure nothing falls through the cracks.",
    results: [
      "Projected 70% reduction in approval cycle time",
      "Estimated $200K annual savings in labor costs",
      "Zero-touch processing for routine requests",
    ],
  },
]