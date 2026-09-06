import Image from "next/image";
import { getTranslations } from "next-intl/server";

const spokes = [
  [92, 120],
  [92, 200],
  [104, 278],
  [308, 108],
  [320, 168],
  [320, 228],
  [300, 288],
  [200, 322],
] as const;

const labels = [
  { key: "nodesLeft.taiwan", className: "absolute left-[6%] top-[24%]", delay: "0.7s" },
  { key: "nodesLeft.china", className: "absolute left-[4%] top-[48%]", delay: "0.82s" },
  { key: "nodesLeft.asia", className: "absolute left-[8%] top-[70%]", delay: "0.94s" },
  { key: "nodesRight.ip", className: "absolute right-[18%] top-[20%]", delay: "0.76s" },
  { key: "nodesRight.creative", className: "absolute right-[4%] top-[36%]", delay: "0.88s" },
  { key: "nodesRight.marketing", className: "absolute right-[4%] top-[52%]", delay: "1s" },
  { key: "nodesRight.media", className: "absolute right-[10%] top-[68%]", delay: "1.12s" },
] as const;

export async function NetworkDiagram() {
  const t = await getTranslations("hero");

  return (
    <div className="network-diagram network-diagram-strong relative aspect-square w-full max-w-[560px] overflow-hidden font-display text-[10px] tracking-[0.16em] md:text-[11px]">
      <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="PLAYWAN network">
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
          stroke="#e6e6e6"
          strokeWidth="0.6"
        />
        <circle
          className="network-ring network-ring-inner"
          cx="200"
          cy="200"
          r="118"
          fill="none"
          stroke="#e6e6e6"
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
              stroke="#cfcfcf"
              strokeWidth="0.8"
              pathLength={1}
              style={{ animationDelay: `${0.12 * i}s` }}
            />
            <circle
              className="network-node"
              cx={x}
              cy={y}
              r="3"
              fill="#70a860"
              style={{ animationDelay: `${0.55 + 0.1 * i}s` }}
            />
          </g>
        ))}
        <circle
          className="network-hub"
          cx="200"
          cy="200"
          r="46"
          fill="#fff"
        />
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
      {labels.map((label) => (
        <span
          key={label.key}
          className={`network-label ${label.className}`}
          style={{ animationDelay: label.delay }}
        >
          {t(label.key)}
        </span>
      ))}
      <span className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-brand">
        <span className="network-label inline-block" style={{ animationDelay: "1.2s" }}>
          {t("japanMarket")}
        </span>
      </span>
      <div
        className="network-label absolute bottom-0 right-0 text-right"
        style={{ animationDelay: "1.3s" }}
      >
        <p className="tracking-[0.18em] text-muted">{t("tokyoTaipei")}</p>
        <p className="mt-1 tracking-[0.16em]">{t("activation")}</p>
      </div>
    </div>
  );
}
