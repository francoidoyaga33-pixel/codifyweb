import Link from "next/link"
import { projects } from "@/data/projects"

const statusStyles: Record<string, string> = {
  Live: "bg-green-500/20 text-green-400",
  "In progress": "bg-yellow-500/20 text-yellow-400",
}

export default function WorkPage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
        Work
      </h1>
      <p className="mt-6 text-lg text-muted-foreground md:text-xl">
        Selected projects. Case studies coming soon.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="flex flex-col rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-blue-500/30 hover:bg-blue-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
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

            {/* Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/50 px-2 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="mt-4 flex-1 space-y-1">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Year */}
            <div className="mt-4 border-t border-border/30 pt-4">
              <span className="text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}