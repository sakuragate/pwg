import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { EastAsiaMap } from "@/components/EastAsiaMap";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return buildMetadata(locale as Locale, "/about", t("title"));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="site-grid pb-20">
      <PageHero
        display={t.rich("display", { br: () => <br /> })}
        headline={t.rich("headline", { br: () => <br /> })}
        lead={`${t("p1")} ${t("p2")} ${t("p3")}`}
      />
      <EastAsiaMap />
      <section className="mt-16 grid gap-8 bg-ink p-8 text-white md:grid-cols-4 md:p-12">
        <div>
          <p className="font-display text-[11px] tracking-[0.2em] text-brand">{t("founded")}</p>
          <p className="mt-3 font-display text-3xl">{t("foundedYear")}</p>
          <p className="mt-2 text-sm text-white/70">{t("foundedValue")}</p>
          <p className="text-sm text-white/70">{t("foundedSub")}</p>
        </div>
        <div>
          <p className="font-display text-[11px] tracking-[0.2em] text-brand">{t("network")}</p>
          <p className="mt-3 text-sm leading-7">{t("networkItems")}</p>
        </div>
        <div>
          <p className="font-display text-[11px] tracking-[0.2em] text-brand">{t("expertise")}</p>
          <p className="mt-3 text-sm leading-7">{t("expertiseItems")}</p>
        </div>
        <div>
          <p className="font-display text-[11px] tracking-[0.2em] text-brand">{t("mission")}</p>
          <p className="mt-3 font-display text-lg leading-snug">
            {t.rich("missionValue", { br: () => <br /> })}
          </p>
        </div>
      </section>
    </div>
  );
}
