import { defineRouting } from "next-intl/routing";

export const locales = ["ja", "en", "zh-cn", "zh-tw"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "ja",
  localePrefix: "as-needed",
  localeDetection: false,
});
