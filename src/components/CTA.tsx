import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { RevealLines } from "./InView";

export async function CTA() {
  const t = await getTranslations("cta");
  const common = await getTranslations("common");

  return (
    <section className="bg-ink text-white">
      <div className="site-grid flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-28">
        <div>
          <RevealLines
            as="h2"
            className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]"
          >
            <span>{t("line1")}</span>
            <span>{t("line2")}</span>
          </RevealLines>
          <p className="mt-6 max-w-xl text-sm text-white/70 md:text-base">{t("body")}</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center gap-4 border border-brand px-6 py-3 font-display text-xs tracking-[0.18em] text-brand hover:bg-brand hover:text-ink"
        >
          {common("contactUs")}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
