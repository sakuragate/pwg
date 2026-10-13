import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { CaseStudy } from "@/data/cases";

export async function CaseStudyCard({
  item,
  featured = false,
}: {
  item: CaseStudy;
  featured?: boolean;
}) {
  const t = await getTranslations("cases");
  const published = item.status === "published" && Boolean(item.contentKey);
  const title = published
    ? t(`items.${item.contentKey}.title`)
    : t("placeholderTitle");
  const body = published
    ? t(`items.${item.contentKey}.body`)
    : t("placeholderBody");

  const className = `grid overflow-hidden border border-line ${
    featured ? "md:grid-cols-[1fr_1.1fr] md:items-stretch" : ""
  }${item.href ? " transition-opacity hover:opacity-90" : ""}`;

  const inner = (
    <>
      <div className="flex flex-col justify-between bg-ink p-8 text-white md:p-10">
        <div>
          <p className="font-display text-[11px] tracking-[0.2em] text-brand">
            CASE {item.caseNo}
          </p>
          <p className="mt-4 font-display text-sm tracking-[0.12em] text-white/60">
            {t(item.categoryKey)}
          </p>
          <h3 className="mt-4 font-display text-3xl leading-snug md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 text-sm text-white/65">{body}</p>
        </div>
        {published ? null : (
          <p className="mt-10 font-display text-xs tracking-[0.18em] text-brand">
            {t("statusComing")}
          </p>
        )}
      </div>
      {item.heroImage ? (
        <div className="relative border-t border-line bg-ink md:border-t-0 md:border-l">
          <Image
            src={item.heroImage}
            alt={title}
            width={1200}
            height={675}
            className="h-auto w-full"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 55vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            priority={featured}
          />
          {item.heroTopFade ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-black via-black/55 to-transparent"
            />
          ) : null}
        </div>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center border-t border-line bg-[linear-gradient(135deg,#111_0%,#2a2a2a_100%)] md:border-t-0 md:border-l">
          <p className="font-display text-sm tracking-[0.24em] text-white/35">
            {t("comingSoon")}
          </p>
        </div>
      )}
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={title}
      >
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}
