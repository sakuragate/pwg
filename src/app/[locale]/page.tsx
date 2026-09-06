import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPublicCases } from "@/data/cases";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/Hero";
import { ConnectStrip } from "@/components/ConnectStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceBlock } from "@/components/ServiceBlock";
import { StrengthNetwork } from "@/components/StrengthNetwork";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTA } from "@/components/CTA";
import { CompanyProfile } from "@/components/CompanyProfile";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata(locale as Locale, "/");
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const what = await getTranslations("whatWeDo");
  const companyPage = await getTranslations("companyPage");
  const strength = await getTranslations("strength");
  const cases = await getTranslations("cases");
  const common = await getTranslations("common");
  const publicCases = getPublicCases();

  return (
    <>
      <Hero />
      <ConnectStrip />
      <section className="site-grid py-20 md:py-28">
        <SectionHeading
          label={what("label")}
          title={what.rich("headline", { br: () => <br /> })}
          lead={what("lead")}
        />
        <ServiceBlock />
      </section>
      <section className="bg-ink text-white">
        <div className="site-grid grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <SectionHeading
              invert
              label={strength("label")}
              title={strength.rich("headline", { br: () => <br /> })}
              lead={strength("lead")}
              action={
                <Link
                  href="/strength"
                  className="inline-flex min-h-11 items-center gap-3 font-display text-[11px] tracking-[0.16em] text-brand"
                >
                  {common("viewMore")} →
                </Link>
              }
            />
          </div>
          <StrengthNetwork compact />
        </div>
      </section>
      <section className="site-grid py-20 md:py-28">
        <SectionHeading
          label={cases("label")}
          title={cases.rich("headline", { br: () => <br /> })}
          lead={cases("lead")}
          action={
            <Link
              href="/cases"
              className="inline-flex min-h-11 items-center gap-3 font-display text-[11px] tracking-[0.16em]"
            >
              {common("viewAll")} →
            </Link>
          }
        />
        <div className="space-y-6">
          {publicCases[0] ? <CaseStudyCard item={publicCases[0]} featured /> : null}
          <div className="grid gap-4 md:grid-cols-2">
            {publicCases.slice(1).map((item) => (
              <CaseStudyCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="site-grid py-20 md:py-28">
        <SectionHeading
          label={companyPage("label")}
          title={companyPage("headline")}
        />
        <CompanyProfile locale={locale as Locale} />
      </section>
      <CTA />
    </>
  );
}
