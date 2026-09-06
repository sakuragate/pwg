import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ServiceBlock } from "@/components/ServiceBlock";
import { ProjectFlow } from "@/components/ProjectFlow";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage" });
  return buildMetadata(locale as Locale, "/services", t("title"));
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicesPage");

  return (
    <div className="site-grid pb-20">
      <PageHero
        display={t.rich("display", { br: () => <br /> })}
        headline={t.rich("headline", { br: () => <br /> })}
        lead={t("lead")}
      />
      <ServiceBlock detailed />
      <ProjectFlow />
    </div>
  );
}
