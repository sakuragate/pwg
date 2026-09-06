import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { PartnerNetwork } from "@/components/PartnerNetwork";
import { CTA } from "@/components/CTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partnersPage" });
  return buildMetadata(locale as Locale, "/partners", t("title"));
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("partnersPage");

  return (
    <>
      <div className="site-grid pb-20">
        <PageHero display={t("title")} headline={t("headline")} lead={t("lead")} />
        <div className="py-16">
          <PartnerNetwork />
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-muted">{t("message")}</p>
        </div>
      </div>
      <CTA />
    </>
  );
}
