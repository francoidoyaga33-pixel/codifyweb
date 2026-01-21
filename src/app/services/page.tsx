import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Systems",
    description: "Modern web applications built for speed, reliability, and growth.",
    includes: [
      "Landing + multi-page sites",
      "Performance-first build",
      "SEO foundations",
    ],
  },
  {
    title: "UX / UI Design",
    description: "Interfaces that feel intuitive and look exceptional.",
    includes: [
      "User flows & IA",
      "Wireframes to UI",
      "Design system basics",
    ],
  },
  {
    title: "Automation",
    description: "Eliminate repetitive tasks and unlock operational efficiency.",
    includes: [
      "Internal tools",
      "Workflow automation",
      "Data dashboards",
    ],
  },
  {
    title: "Custom Software",
    description: "Tailored solutions for complex business requirements.",
    includes: [
      "Full-stack features",
      "API integrations",
      "Scalable architecture",
    ],
  },
]

const processSteps = [
  {
    title: "Discover",
    description: "Scope, constraints, risks",
  },
  {
    title: "Design",
    description: "Flows, UI, system decisions",
  },
  {
    title: "Build",
    description: "Implementation, QA, performance",
  },
  {
    title: "Launch",
    description: "Handover, monitoring, iteration",
  },
]

const deliverables = [
  {
    title: "Clear scope & milestones",
    description: "Know exactly what's being built and when it ships.",
  },
  {
    title: "UI components / design system baseline",
    description: "Reusable elements that scale with your product.",
  },
  {
    title: "Performance & accessibility pass",
    description: "Fast load times and WCAG-compliant interfaces.",
  },
  {
    title: "SEO & analytics foundations",
    description: "Built-in visibility and data from day one.",
  },
  {
    title: "Documentation & handover",
    description: "Everything your team needs to take ownership.",
  },
  {
    title: "Post-launch support plan",
    description: "We don't disappear after deploy.",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Services
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We focus on performance, user experience, clean architecture, and scalability. 
          Every project is built to last and designed to grow with your business.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {service.description}
              </p>

              {/* Includes */}
              <div className="mt-6">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Includes
                </span>
                <ul className="mt-3 space-y-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  className="inline-flex text-sm font-medium text-blue-500 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Discuss this →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we deliver */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          How we deliver
        </h2>
        <p className="mt-2 text-muted-foreground">
          A clear process that reduces risk and keeps delivery predictable.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-border p-6"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-500">
                {index + 1}
              </div>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          What you get
        </h2>
        <p className="mt-2 text-muted-foreground">
          Concrete outputs, clear handover, and a system you can maintain.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border p-6"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-20 rounded-xl border border-border/50 bg-card p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Tell us what you&apos;re building.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          We&apos;ll respond with scope, timeline, and a clear path forward. No fluff, no pressure.
        </p>
        <p className="mx-auto mt-2 text-sm text-muted-foreground">
          We&apos;ll reply with scope, timeline, and risks.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}