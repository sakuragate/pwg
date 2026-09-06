import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconIp(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <circle cx="18" cy="20" r="7" />
      <circle cx="30" cy="28" r="7" />
    </svg>
  );
}

export function IconCreative(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <rect x="8" y="12" width="24" height="18" />
      <path d="M32 22h8l-4 8H12" />
      <path d="M20 36h8" />
    </svg>
  );
}

export function IconMarketing(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <path d="M10 20v8h6l10 6V14L16 20H10z" />
      <path d="M32 19a7 7 0 0 1 0 10" />
      <path d="M35 15a12 12 0 0 1 0 18" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg viewBox="0 0 48 12" aria-hidden {...base} {...props}>
      <path d="M0 6h44M38 1l6 5-6 5" />
    </svg>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <path d="M8 24h10l6 6 6-8 10 2" />
      <path d="M18 24l4-6h8" />
    </svg>
  );
}

const mediaPaths: Record<string, string> = {
  transit: "M8 16h32v12H8zM14 28v6M34 28v6M8 22h32",
  ooh: "M10 12h28v18H10zM16 30v6h16v-6",
  vision: "M8 10h32v20H8zM18 30h12M24 30v6",
  station: "M12 36V14h24v22M12 20h24M20 26v10M28 26v10",
  event: "M10 16h28v20H10zM10 22h28M18 12v8M30 12v8",
  popup: "M14 14h20v20H14zM14 20h20M20 28h8",
  pr: "M12 16h16v12H12zM28 20l8-4v16l-8-4",
  influencer: "M24 14a6 6 0 1 1 0 12 6 6 0 0 1 0-12zM12 36a12 12 0 0 1 24 0",
  store: "M10 18l4-6h20l4 6v18H10zM18 36V24h12v12",
  movie: "M8 14h32v20H8zM16 14v20M32 14v20M8 20h8M8 28h8M32 20h8M32 28h8",
};

export function IconMedia({
  name,
  ...props
}: IconProps & { name: keyof typeof mediaPaths }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <path d={mediaPaths[name]} />
    </svg>
  );
}
