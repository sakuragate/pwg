import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return buildMetadata(locale as Locale, "/privacy", t("title"));
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <div className="site-grid pb-20">
      <PageHero display={t("title")} headline={t("headline")} lead={t("updated")} />
      <article className="max-w-3xl space-y-6 py-12 text-sm leading-7 text-muted">
        <p className="text-text">{t("intro")}</p>
        <h2 className="font-display text-xl text-text">{t("s1")}</h2>
        <p>{t("s1b")}</p>
        <h2 className="font-display text-xl text-text">{t("s2")}</h2>
        <p>{t("s2b")}</p>
        <h2 className="font-display text-xl text-text">{t("s3")}</h2>
        <p>{t("s3b")}</p>
        <h2 className="font-display text-xl text-text">{t("s4")}</h2>
        <p>{t("s4b")}</p>
        <h2 className="font-display text-xl text-text">{t("s5")}</h2>
        <p>{t("s5b")}</p>
        <h2 className="font-display text-xl text-text">{t("s6")}</h2>
        <p>{t("s6b")}</p>
      </article>
    </div>
  );
}
