import { defineRouting } from "next-intl/routing";

export const locales = ["ja", "zh-cn", "zh-tw", "en"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "ja",
  localePrefix: "as-needed",
  localeDetection: false,
});
