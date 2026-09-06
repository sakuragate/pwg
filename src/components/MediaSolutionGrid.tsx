import { getTranslations } from "next-intl/server";
import { mediaSolutions } from "@/data/marketingAreas";
import { IconMedia } from "./Icons";

export async function MediaSolutionGrid() {
  const t = await getTranslations("marketingPage");

  return (
    <section>
      <p className="mb-6 font-display text-[11px] tracking-[0.22em] text-brand">
        {t("mediaLabel")}
      </p>
      <ul className="grid grid-cols-2 border-t border-l border-line md:grid-cols-5">
        {mediaSolutions.map((id) => (
          <li
            key={id}
            className="flex min-h-[140px] flex-col justify-between border-b border-r border-line p-5"
          >
            <IconMedia name={id} className="h-8 w-8 text-brand" />
            <p className="font-display text-[12px] tracking-[0.08em]">
              {t(`media.${id}`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
