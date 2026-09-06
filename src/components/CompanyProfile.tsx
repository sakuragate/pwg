import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { company } from "@/data/company";
import { siteConfig } from "@/lib/site";

export async function CompanyProfile({ locale }: { locale: Locale }) {
  const t = await getTranslations("companyPage");

  const rows: Array<{ label: string; values: string[] }> = [
    { label: t("fields.name"), values: [company.legalName] },
    { label: t("fields.founded"), values: [siteConfig.foundedDisplay[locale]] },
    { label: t("fields.capital"), values: [t("capitalValue")] },
    { label: t("fields.address"), values: [siteConfig.address[locale]] },
    {
      label: t("fields.officers"),
      values: company.officers.map(
        (officer) => `${t(`roles.${officer.roleKey}`)}　${officer.nameJa}`,
      ),
    },
    { label: t("fields.shareholders"), values: [...company.shareholders] },
    { label: t("fields.clients"), values: [...company.clients] },
  ];

  return (
    <dl className="mx-auto max-w-4xl divide-y divide-line border-y border-line">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-3 py-7 md:grid-cols-[200px_1fr] md:gap-12"
        >
          <dt className="text-sm text-muted">{row.label}</dt>
          <dd className="text-sm leading-8 md:text-base">
            {row.values.map((value) => (
              <p key={value}>{value}</p>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
