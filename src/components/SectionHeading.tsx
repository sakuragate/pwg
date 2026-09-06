import type { ReactNode } from "react";
import { InView } from "./InView";

export function SectionHeading({
  label,
  title,
  lead,
  invert = false,
  action,
}: {
  label?: string;
  title: ReactNode;
  lead?: ReactNode;
  invert?: boolean;
  action?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {label ? (
          <p className="mb-4 font-display text-[11px] tracking-[0.22em] text-brand">
            {label}
          </p>
        ) : null}
        <h2
          className={`font-display text-[clamp(2rem,5vw,4.4rem)] leading-snug tracking-[-0.04em] ${
            invert ? "text-white" : "text-text"
          }`}
        >
          {title}
        </h2>
        <InView className="reveal-rule mt-6 h-px w-28 bg-brand" />
        {lead ? (
          <div className={`mt-6 max-w-2xl text-sm leading-7 md:text-base ${invert ? "text-white/70" : "text-muted"}`}>
            {lead}
          </div>
        ) : null}
      </div>
      {action}
    </div>
  );
}
