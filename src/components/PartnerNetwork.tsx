import { getTranslations } from "next-intl/server";
import { partnerLeft, partnerRight } from "@/data/partners";

export async function PartnerNetwork() {
  const t = await getTranslations("partnersPage");

  return (
    <div className="grid items-center gap-8 md:grid-cols-[1fr_180px_1fr]">
      <ul className="space-y-4 text-right">
        {partnerLeft.map((id) => (
          <li key={id} className="font-display text-sm tracking-[0.08em]">
            {t(`left.${id}`)}
          </li>
        ))}
      </ul>
      <div className="relative mx-auto flex h-40 w-40 items-center justify-center border border-brand">
        <span className="font-display text-xs tracking-[0.18em]">PLAYWAN</span>
        <span className="absolute left-0 top-1/2 hidden h-px w-[80px] -translate-x-full bg-line md:block" />
        <span className="absolute right-0 top-1/2 hidden h-px w-[80px] translate-x-full bg-line md:block" />
      </div>
      <ul className="space-y-4">
        {partnerRight.map((id) => (
          <li key={id} className="font-display text-sm tracking-[0.08em]">
            {t(`right.${id}`)}
          </li>
        ))}
      </ul>
    </div>
  );
}
