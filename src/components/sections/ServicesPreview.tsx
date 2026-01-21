"use client"

import { FadeIn } from "@/components/motions"
import { Code, Palette, Zap, Settings } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack applications built with modern frameworks.",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Interfaces that users love to interact with.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Workflows that save time and reduce errors.",
  },
  {
    icon: Settings,
    title: "Custom Software",
    description: "Tailored solutions for unique business needs.",
  },
]

export function ServicesPreview() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        What we do
      </h2>
      <p className="mt-2 text-muted-foreground">
        End-to-end capabilities.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1}>
            <div className="rounded-lg border border-border/50 bg-card p-6">
              <service.icon className="h-8 w-8 text-foreground" />
              <h3 className="mt-4 text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}