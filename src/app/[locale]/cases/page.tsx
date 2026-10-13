import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getPublicCases } from "@/data/cases";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "casesPage" });
  return buildMetadata(locale as Locale, "/cases", t("title"));
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("casesPage");
  const publicCases = getPublicCases();

  return (
    <div className="site-grid pb-20">
      <PageHero
        display={t("title")}
        headline={t.rich("headline", { br: () => <br /> })}
        lead={t("lead")}
      />
      <div className="space-y-6 py-12">
        {publicCases[0] ? <CaseStudyCard item={publicCases[0]} featured /> : null}
        <div className="grid items-start gap-4 md:grid-cols-2">
          {publicCases.slice(1).map((item) => (
            <CaseStudyCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
