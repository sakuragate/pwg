import { getTranslations } from "next-intl/server";

export async function EastAsiaMap() {
  const t = await getTranslations("about");

  return (
    <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl">
      <svg viewBox="0 0 800 450" className="h-full w-full" role="img" aria-label="TAIPEI PLAYWAN TOKYO">
        <g fill="#d8d8d8" opacity="0.55">
          {Array.from({ length: 18 }).flatMap((_, row) =>
            Array.from({ length: 28 }).map((__, col) => {
              const x = 40 + col * 26;
              const y = 30 + row * 22;
              const hide =
                (row < 3 && col < 8) ||
                (row > 14 && col < 6) ||
                (row > 12 && col > 22);
              if (hide) return null;
              return <circle key={`${row}-${col}`} cx={x} cy={y} r="1.4" />;
            }),
          )}
        </g>
        <path
          d="M250 280 C 340 220, 430 190, 520 170"
          fill="none"
          stroke="#70a860"
          strokeWidth="1.4"
          pathLength={1}
          className="draw-line"
        />
        <circle cx="250" cy="280" r="5" fill="#70a860" />
        <circle cx="390" cy="210" r="6" fill="#70a860" />
        <circle cx="520" cy="170" r="5" fill="#70a860" />
      </svg>
      <span className="absolute bottom-[28%] left-[22%] font-display text-[11px] tracking-[0.16em]">
        {t("taipei")}
      </span>
      <span className="absolute left-1/2 top-[38%] -translate-x-1/2 font-display text-[11px] tracking-[0.16em]">
        PLAYWAN
      </span>
      <span className="absolute right-[26%] top-[28%] font-display text-[11px] tracking-[0.16em]">
        {t("tokyo")}
      </span>
    </div>
  );
}
