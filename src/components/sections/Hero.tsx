"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motions"

export function Hero() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16">
      <FadeIn delay={0}>
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Codify
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          We build high-performance software with sharp UX and clean architecture.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-8 flex gap-4">
          <Button size="lg">Start a project</Button>
          <Button size="lg" variant="outline">View work</Button>
        </div>
      </FadeIn>
    </section>
  )
}