import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"

const statusStyles: Record<string, string> = {
  Live: "bg-green-500/20 text-green-400",
  "In progress": "bg-yellow-500/20 text-yellow-400",
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-7xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/work"
        className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to work
      </Link>

      {/* Header */}
      <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground md:text-xl">
        {project.tagline}
      </p>

      {/* Meta row */}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
        <span className="text-sm text-muted-foreground">
          {project.year}
        </span>
      </div>

      {/* Stack */}
      <div className="mt-8">
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Tech Stack
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/50 bg-secondary/50 px-3 py-1.5 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-10">
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Highlights
        </h2>
        <ul className="mt-4 space-y-3">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Case Study: Problem / Solution / Results */}
      <div className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Case Study
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {/* Problem */}
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Problem
            </h3>
            <p className="mt-3 text-foreground">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Solution
            </h3>
            <p className="mt-3 text-foreground">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Results
            </h3>
            <ul className="mt-3 space-y-2">
              {project.results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}