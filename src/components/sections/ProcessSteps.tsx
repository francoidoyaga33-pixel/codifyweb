import { Section } from "./Section";

const steps = ["Discover", "Design", "Build", "Launch"];

export function ProcessSteps() {
  return (
    <Section className="border-t border-border">
      <h2 className="mb-10 text-3xl font-semibold">How we work</h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-xl border border-border p-6"
          >
            <p className="text-sm text-muted-foreground">
              Step {index + 1}
            </p>
            <p className="mt-2 font-medium">{step}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
