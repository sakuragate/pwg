import type { ReactNode } from "react";

export function PageHero({
  display,
  headline,
  lead,
}: {
  display: ReactNode;
  headline: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <header className="grid gap-10 border-b border-line py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95]">{display}</h1>
      <div className="flex flex-col justify-end">
        <h2 className="text-2xl leading-snug md:text-3xl">{headline}</h2>
        {lead ? <p className="mt-6 text-sm text-muted md:text-base">{lead}</p> : null}
      </div>
    </header>
  );
}
