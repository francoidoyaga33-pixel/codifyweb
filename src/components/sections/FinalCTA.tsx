import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

export function FinalCTA() {
  return (
    <Section className="border-t border-border">
      <div className="flex flex-col items-start gap-6">
        <h2 className="text-3xl font-semibold">
          Let’s build something solid.
        </h2>

        <Button asChild>
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </Section>
  );
}
