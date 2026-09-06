import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { CompanyProfile } from "@/components/CompanyProfile";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "companyPage" });
  return buildMetadata(locale as Locale, "/company", t("title"));
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("companyPage");

  return (
    <div className="site-grid pb-24 pt-16 md:pt-24">
      <header className="mb-16 text-center">
        <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-snug tracking-tight">
          {t("headline")}
        </h1>
        <p className="mt-3 font-display text-sm tracking-[0.08em]">{t("subhead")}</p>
      </header>
      <CompanyProfile locale={locale as Locale} />
    </div>
  );
}
