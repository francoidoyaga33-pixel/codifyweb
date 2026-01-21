import { DemoDashboard } from "@/components/lab"

export default function LabPage() {
  return (
    <div className="container mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
        Lab
      </h1>
      <p className="mt-6 text-lg text-muted-foreground md:text-xl">
        Interactive demos that prove how we build.
      </p>

      <div className="mt-12">
        <DemoDashboard />
      </div>
    </div>
  )
}