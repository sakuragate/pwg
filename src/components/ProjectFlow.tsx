import { getTranslations } from "next-intl/server";
import { projectFlow } from "@/data/services";

export async function ProjectFlow() {
  const t = await getTranslations("servicesPage");

  return (
    <section className="border-t border-line py-16">
      <p className="mb-8 font-display text-[11px] tracking-[0.22em] text-brand">
        {t("flowLabel")}
      </p>
      <ol className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible">
        {projectFlow.map((step, index) => (
          <li
            key={step}
            className="min-w-[160px] border-t border-brand pt-4 md:min-w-0"
          >
            <p className="font-display text-xs text-muted">0{index + 1}</p>
            <h3 className="mt-3 font-display text-lg leading-snug">{t(`flow.${step}.title`)}</h3>
            <p className="mt-2 text-sm text-muted">{t(`flow.${step}.body`)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
