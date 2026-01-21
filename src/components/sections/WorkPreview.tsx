"use client"

import Link from "next/link"
import { FadeIn } from "@/components/motions"
import { projects } from "@/data/projects"

const statusStyles: Record<string, string> = {
  Live: "bg-green-500/20 text-green-400",
  "In progress": "bg-yellow-500/20 text-yellow-400",
}

export function WorkPreview() {
  const displayedProjects = projects.slice(0, 3)

  return (
    <section className="container mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        Recent work
      </h2>
      <p className="mt-2 text-muted-foreground">
        Selected projects.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <div className="group flex flex-col rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-border">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Tagline */}
              <p className="mt-2 text-sm text-muted-foreground">
                {project.tagline}
              </p>

              {/* Stack chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/50 px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="rounded-md border border-border/50 px-2 py-1 text-xs text-muted-foreground">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>

              {/* Year */}
              <div className="mt-auto pt-4">
                <span className="text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-8">
        <Link
          href="/work"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View all projects →
        </Link>
      </div>
    </section>
  )
}