import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { resultMetrics } from "@/data/marketingAreas";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { CityMarketingMap } from "@/components/CityMarketingMap";
import { MediaSolutionGrid } from "@/components/MediaSolutionGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "marketingPage" });
  return buildMetadata(locale as Locale, "/marketing", t("title"));
}

export default async function MarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("marketingPage");

  return (
    <div className="site-grid pb-20">
      <PageHero
        display={t.rich("display", { br: () => <br /> })}
        headline={t("headline")}
        lead={t("lead")}
      />
      <div className="space-y-20 py-16">
        <CityMarketingMap />
        <MediaSolutionGrid />
        <section>
          <p className="mb-6 font-display text-[11px] tracking-[0.22em] text-brand">
            {t("roleLabel")}
          </p>
          <div className="grid gap-6 border border-line p-8 font-display tracking-[0.12em] md:grid-cols-3">
            <div>
              <p>{t("roleClient")}</p>
              <p className="mt-2 text-sm text-muted">{t("roleOnline")}</p>
            </div>
            <div>
              <p className="text-brand">PLAYWAN</p>
              <p className="mt-2 text-sm text-muted">{t("rolePlaywan")}</p>
            </div>
            <div>
              <p>{t("roleMarket")}</p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted">{t("roleNote")}</p>
        </section>
      </div>
      <section className="bg-ink p-8 text-white md:p-12">
        <p className="font-display text-[11px] tracking-[0.22em] text-brand">{t("dataLabel")}</p>
        <p className="mt-4 max-w-2xl text-sm text-white/75">{t("dataMessage")}</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {resultMetrics.map((id) => (
            <li key={id} className="border-t border-white/20 pt-3 text-sm">
              {t(`metrics.${id}`)}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
