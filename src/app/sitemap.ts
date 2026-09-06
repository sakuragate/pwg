import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { localePath } from "@/lib/metadata";

const paths = [
  "/",
  "/about",
  "/services",
  "/strength",
  "/cases",
  "/marketing",
  "/partners",
  "/contact",
  "/company",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://playwan.jp";

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site}${localePath(locale as Locale, path)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((code) => [
            code,
            `${site}${localePath(code as Locale, path)}`,
          ]),
        ),
      },
    })),
  );
}
