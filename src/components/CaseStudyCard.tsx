import { getTranslations } from "next-intl/server";
import type { CaseStudy } from "@/data/cases";

export async function CaseStudyCard({
  item,
  featured = false,
}: {
  item: CaseStudy;
  featured?: boolean;
}) {
  const t = await getTranslations("cases");

  return (
    <article
      className={`grid overflow-hidden border border-line ${
        featured ? "md:grid-cols-[1fr_1.1fr]" : ""
      }`}
    >
      <div className="flex flex-col justify-between bg-ink p-8 text-white md:p-10">
        <div>
          <p className="font-display text-[11px] tracking-[0.2em] text-brand">
            CASE {item.caseNo}
          </p>
          <p className="mt-4 font-display text-sm tracking-[0.12em] text-white/60">
            {t(item.categoryKey)}
          </p>
          <h3 className="mt-4 font-display text-3xl leading-snug md:text-4xl">{t("placeholderTitle")}</h3>
          <p className="mt-4 text-sm text-white/65">{t("placeholderBody")}</p>
        </div>
        <p className="mt-10 font-display text-xs tracking-[0.18em] text-brand">
          {t("statusComing")}
        </p>
      </div>
      <div className="flex min-h-[220px] items-center justify-center border-t border-line bg-[linear-gradient(135deg,#111_0%,#2a2a2a_100%)] md:min-h-[320px] md:border-t-0 md:border-l">
        <p className="font-display text-sm tracking-[0.24em] text-white/35">
          {t("comingSoon")}
        </p>
      </div>
    </article>
  );
}
