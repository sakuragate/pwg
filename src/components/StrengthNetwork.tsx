import Image from "next/image";
import { getTranslations } from "next-intl/server";

const nodes = [
  { key: "ip", x: 70, y: 70, delay: "0.7s" },
  { key: "game", x: 330, y: 70, delay: "0.82s" },
  { key: "creative", x: 70, y: 330, delay: "0.94s" },
  { key: "marketing", x: 330, y: 330, delay: "1.06s" },
] as const;

const spokes = [
  [70, 70],
  [330, 70],
  [70, 330],
  [330, 330],
  [200, 40],
  [40, 200],
  [360, 200],
  [200, 360],
] as const;

export async function StrengthNetwork({
  compact = false,
  onDark = true,
}: {
  compact?: boolean;
  onDark?: boolean;
}) {
  const t = await getTranslations("strength");
  const line = onDark ? "#444444" : "#e6e6e6";
  const fill = onDark ? "#0a0a0a" : "#ffffff";
  const label = onDark ? "text-white" : "text-text";

  return (
    <div
      className={`network-diagram network-diagram-strong relative mx-auto ${compact ? "max-w-[420px]" : "max-w-[520px]"}`}
    >
      <svg viewBox="0 0 400 400" className="h-auto w-full" role="img" aria-label="PLAYWAN strength">
        <circle className="network-pulse-fill" cx="200" cy="200" r="168" />
        <circle
          className="network-pulse"
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="#8bc47a"
          strokeWidth="3.2"
        />
        <circle
          className="network-pulse network-pulse-delay"
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="#8bc47a"
          strokeWidth="3.2"
        />
        <circle
          className="network-pulse network-pulse-third"
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="#8bc47a"
          strokeWidth="3.2"
        />
        <circle
          className="network-ring network-ring-outer"
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke={line}
          strokeWidth="0.6"
        />
        <circle
          className="network-ring network-ring-inner"
          cx="200"
          cy="200"
          r="118"
          fill="none"
          stroke={line}
          strokeWidth="0.6"
        />
        {spokes.map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <line
              className="network-spoke"
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke={line}
              strokeWidth="0.8"
              pathLength={1}
              style={{ animationDelay: `${0.1 * i}s` }}
            />
            <circle
              className="network-node"
              cx={x}
              cy={y}
              r="2.5"
              fill="#70a860"
              style={{ animationDelay: `${0.5 + 0.08 * i}s` }}
            />
          </g>
        ))}
        <circle
          className="network-hub"
          cx="200"
          cy="200"
          r="48"
          fill="#ffffff"
          stroke={onDark ? "#ffffff" : "#0a0a0a"}
          strokeWidth="1"
        />
        {nodes.map((node, i) => (
          <circle
            key={node.key}
            className="network-sat"
            cx={node.x}
            cy={node.y}
            r="28"
            fill={fill}
            stroke="#70a860"
            style={{ animationDelay: `${0.55 + 0.1 * i}s` }}
          />
        ))}
      </svg>
      <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="network-logo flex h-full items-center justify-center">
          <Image
            src="/pwg_rogo.svg"
            alt="PLAYWAN"
            width={728}
            height={803}
            className="h-full w-auto"
          />
        </div>
      </div>
      {nodes.map((node) => (
        <span
          key={node.key}
          className="absolute"
          style={{
            left: `${(node.x / 400) * 100}%`,
            top: `${(node.y / 400) * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span
            className={`network-label inline-block font-display text-[10px] tracking-[0.14em] ${label}`}
            style={{ animationDelay: node.delay }}
          >
            {t(`${node.key}.title`).split(" ")[0]}
          </span>
        </span>
      ))}
    </div>
  );
}
