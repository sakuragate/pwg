import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { localeMeta } from "@/lib/site";
import { routing, type Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

export function localePath(locale: Locale, href: "/" | "/about" | "/services" | "/strength" | "/cases" | "/marketing" | "/partners" | "/contact" | "/company" | "/privacy") {
  return getPathname({ locale, href });
}

export async function buildMetadata(
  locale: Locale,
  path:
    | "/"
    | "/about"
    | "/services"
    | "/strength"
    | "/cases"
    | "/marketing"
    | "/partners"
    | "/contact"
    | "/company"
    | "/privacy",
  titleKey?: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://playwan.jp";
  const title = titleKey ? `${titleKey} | PLAYWAN Gaming` : t("title");
  const languages = Object.fromEntries(
    routing.locales.map((code) => [localeMeta[code].htmlLang, `${site}${localePath(code, path)}`]),
  );
  languages["x-default"] = `${site}${localePath("ja", path)}`;

  return {
    title,
    description: t("description"),
    alternates: {
      canonical: `${site}${localePath(locale, path)}`,
      languages,
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      locale: localeMeta[locale].ogLocale,
      url: `${site}${localePath(locale, path)}`,
      siteName: "PLAYWAN Gaming",
      type: "website",
      images: [{ url: `${site}/brand/og.png`, width: 1200, height: 630, alt: "PLAYWAN Gaming" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [`${site}/brand/og.png`],
    },
  };
}
