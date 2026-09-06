import { getTranslations } from "next-intl/server";
import { marketingAreas } from "@/data/marketingAreas";

const positions: Record<string, string> = {
  ikebukuro: "top-[8%] left-[38%]",
  shinjuku: "top-[28%] left-[18%]",
  shibuya: "top-[48%] left-[32%]",
  akihabara: "top-[30%] right-[16%]",
  osaka: "bottom-[8%] left-[46%]",
};

export async function CityMarketingMap() {
  const t = await getTranslations("marketingPage");

  return (
    <div>
      <p className="mb-6 font-display text-[11px] tracking-[0.22em] text-brand">
        {t("mapLabel")}
      </p>
      <div className="relative hidden min-h-[420px] border border-line md:block">
        <svg viewBox="0 0 800 420" className="absolute inset-0 h-full w-full">
          <path d="M180 80 L 260 140 L 340 120 L 420 180 L 500 90 L 580 160 L 430 250 L 300 230 Z" fill="none" stroke="#e6e6e6" />
          <path d="M260 140 L 340 120 L 430 250 L 300 230 Z" fill="none" stroke="#70a860" strokeWidth="1.1" />
          <path d="M430 250 L 500 330" fill="none" stroke="#cfcfcf" />
        </svg>
        {marketingAreas.map((area) => (
          <div key={area.id} className={`absolute ${positions[area.id]} max-w-[200px]`}>
            <p className="font-display text-sm tracking-[0.12em]">{t(`areas.${area.id}`)}</p>
            <p className="mt-1 text-[11px] tracking-[0.08em] text-muted">
              {area.tags.join(" / ")}
            </p>
          </div>
        ))}
      </div>
      <ul className="grid gap-4 md:hidden">
        {marketingAreas.map((area) => (
          <li key={area.id} className="border-t border-line pt-4">
            <p className="font-display text-sm tracking-[0.12em]">{t(`areas.${area.id}`)}</p>
            <p className="mt-1 text-xs text-muted">{area.tags.join(" / ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
