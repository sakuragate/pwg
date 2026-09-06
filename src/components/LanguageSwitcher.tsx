"use client";

import { localeMeta } from "@/lib/site";
import { locales, type Locale } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div
      className={`flex shrink-0 items-center whitespace-nowrap font-display tracking-[0.12em] ${
        compact ? "gap-0.5 text-[10px]" : "gap-1.5 text-[11px]"
      }`}
      role="navigation"
      aria-label="Language"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 ? <span className="text-muted">/</span> : null}
          <Link
            href={pathname}
            locale={code}
            className={`inline-flex items-center justify-center ${
              compact ? "min-h-11 px-0.5" : "min-h-11 px-1"
            } ${locale === code ? "text-text" : "text-muted hover:text-text"}`}
            aria-current={locale === code ? "page" : undefined}
          >
            {localeMeta[code].label}
          </Link>
        </span>
      ))}
    </div>
  );
}
