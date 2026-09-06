import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services, type ServiceId } from "@/data/services";
import { IconCreative, IconIp, IconMarketing } from "./Icons";

const icons = {
  ip: IconIp,
  creative: IconCreative,
  marketing: IconMarketing,
};

const itemKeys: Record<ServiceId, string[]> = {
  ip: ["select", "negotiate", "license", "supervise", "implement", "promo"],
  creative: ["graphic", "character", "ui", "spine", "pv", "web", "banner", "ooh"],
  marketing: [
    "transit",
    "ooh",
    "vision",
    "station",
    "event",
    "popup",
    "pr",
    "influencer",
    "store",
    "movie",
  ],
};

export async function ServiceBlock({
  detailed = false,
}: {
  detailed?: boolean;
}) {
  const t = await getTranslations("whatWeDo");
  const common = await getTranslations("common");

  return (
    <div className="grid gap-0 border-t border-line md:grid-cols-3">
      {services.map((service) => {
        const Icon = icons[service.icon];
        const keys = detailed
          ? itemKeys[service.id]
          : itemKeys[service.id].slice(0, 6);
        return (
          <article
            key={service.id}
            className="border-line py-10 md:border-r md:px-8 md:py-14 last:md:border-r-0"
          >
            <p className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.95] text-brand/80">
              {service.no}
            </p>
            <Icon className="mt-4 h-10 w-10 text-brand" />
            <h3 className="mt-6 font-display text-xl leading-snug tracking-[-0.03em] md:text-2xl">
              {t(`${service.id}.title`)}
            </h3>
            <p className="mt-3 text-sm font-medium">{t(`${service.id}.subtitle`)}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{t(`${service.id}.body`)}</p>
            <p className="mt-8 font-display text-[11px] tracking-[0.18em] text-muted">
              SERVICE
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {keys.map((key) => (
                <li key={key} className="flex gap-3">
                  <span className="text-brand">—</span>
                  {t(`${service.id}.items.${key}`)}
                </li>
              ))}
            </ul>
            {!detailed ? (
              <Link
                href="/services"
                className="mt-8 inline-flex min-h-11 items-center gap-3 font-display text-[11px] tracking-[0.16em]"
              >
                {common("viewMore")}
                <span aria-hidden className="text-brand">
                  →
                </span>
              </Link>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
