import { getTranslations } from "next-intl/server";
import { NetworkDiagram } from "./NetworkDiagram";
import { RevealLines } from "./InView";

export async function Hero() {
  const t = await getTranslations("hero");
  const common = await getTranslations("common");

  return (
    <section className="site-grid grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <div className="min-w-0">
        <RevealLines className="font-display text-[clamp(3.1rem,8vw,7.4rem)] leading-[0.95]">
          <span>{t("line1")}</span>
          <span>{t("line2")}</span>
          <span>
            JAPAN<span className="text-brand">.</span>
          </span>
        </RevealLines>
        <p className="mt-8 font-display text-sm tracking-[0.14em] text-brand md:text-base">
          {common("formula")}
        </p>
        <h2 className="mt-8 max-w-xl font-body text-xl leading-snug md:text-2xl">
          {t.rich("headline", { br: () => <br /> })}
        </h2>
        <p className="mt-6 max-w-xl text-sm text-muted md:text-base">{t("lead")}</p>
        <p className="mt-4 max-w-xl text-sm text-muted md:text-base">{t("body")}</p>
      </div>
      <div className="flex min-w-0 justify-center overflow-hidden lg:justify-end">
        <NetworkDiagram />
      </div>
    </section>
  );
}
