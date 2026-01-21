import { Section } from "./Section";

const metrics = [
  { label: "Performance", value: "Fast by design" },
  { label: "UX Clarity", value: "Intentional flows" },
  { label: "Architecture", value: "Scalable systems" },
  { label: "Scalability", value: "Built to grow" },
];

export function ProofPanel() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-6 md:grid-cols-4">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border p-6"
          >
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className="mt-2 text-lg font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
