import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { StrengthNetwork } from "@/components/StrengthNetwork";

const keys = ["ip", "game", "creative", "marketing"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "strengthPage" });
  return buildMetadata(locale as Locale, "/strength", t("title"));
}

export default async function StrengthPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("strengthPage");

  return (
    <div className="site-grid pb-20">
      <PageHero
        display={t.rich("display", { br: () => <br /> })}
        headline={t.rich("headline", { br: () => <br /> })}
        lead={t("lead")}
      />
      <div className="py-16">
        <StrengthNetwork onDark={false} />
      </div>
      <section className="grid gap-8 bg-ink p-8 text-white md:grid-cols-4 md:p-12">
        {keys.map((key) => (
          <div key={key}>
            <p className="font-display text-[11px] tracking-[0.18em] text-brand">
              {t(`${key}.title`)}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">{t(`${key}.body`)}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
