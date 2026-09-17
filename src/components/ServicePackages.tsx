import { getTranslations } from "next-intl/server";
import { servicePackages } from "@/data/services";

export async function ServicePackages() {
  const t = await getTranslations("servicesPage");

  return (
    <section className="border-t border-line py-16">
      <p className="mb-8 font-display text-[11px] tracking-[0.22em] text-brand">
        {t("packageLabel")}
      </p>

      <div className="md:hidden">
        <ul className="divide-y divide-line border-y border-line">
          {servicePackages.map((id) => (
            <li key={id} className="py-10">
              <p className="font-display text-lg leading-relaxed">
                {t(`packages.${id}.name`)}
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {t(`packages.${id}.content`)}
              </p>
              <p className="mt-5 text-end text-base tabular-nums">
                {t(`packages.${id}.budget`)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] border-y border-line text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="py-6 pr-8 font-display text-[11px] font-normal tracking-[0.18em] text-muted">
                {t("packageColumns.name")}
              </th>
              <th className="py-6 pr-8 font-display text-[11px] font-normal tracking-[0.18em] text-muted">
                {t("packageColumns.content")}
              </th>
              <th className="py-6 text-end font-display text-[11px] font-normal tracking-[0.18em] text-muted">
                {t("packageColumns.budget")}
              </th>
            </tr>
          </thead>
          <tbody>
            {servicePackages.map((id) => (
              <tr key={id} className="border-b border-line last:border-b-0">
                <td className="py-12 pr-8 font-display text-lg leading-relaxed">
                  {t(`packages.${id}.name`)}
                </td>
                <td className="py-12 pr-8 text-base leading-relaxed text-muted">
                  {t(`packages.${id}.content`)}
                </td>
                <td className="py-12 text-end text-base tabular-nums whitespace-nowrap">
                  {t(`packages.${id}.budget`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
