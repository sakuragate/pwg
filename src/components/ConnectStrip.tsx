import { getTranslations } from "next-intl/server";
import { InView } from "./InView";

export async function ConnectStrip() {
  const t = await getTranslations("connect");

  return (
    <section className="bg-ink text-white">
      <div className="site-grid flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <p className="font-display text-[11px] tracking-[0.2em] text-brand">
          {t("kicker")}
        </p>
        <InView className="connect-draw min-w-0">
          <p className="connect-flow font-display text-[clamp(1.6rem,4vw,3.4rem)] leading-[0.95] tracking-[0.08em] text-white/35">
            {t("flow")}
          </p>
          <span className="connect-draw-line mt-3 block h-px w-full bg-brand" />
        </InView>
      </div>
    </section>
  );
}
