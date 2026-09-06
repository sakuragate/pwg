import type { Locale } from "@/i18n/routing";

export const siteConfig = {
  name: "PLAYWAN Gaming",
  legalName: "株式会社プレイワンゲーミング",
  legalNameEn: "PlayWan Gaming Inc.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://playwan.jp",
  email: "info@playwan.jp",
  founded: "2019-04-22",
  foundedDisplay: {
    ja: "2019年4月22日",
    en: "April 22, 2019",
    "zh-cn": "2019年4月22日",
    "zh-tw": "2019年4月22日",
  },
  address: {
    ja: "東京都港区赤坂3-7-13 赤坂HMビル4F",
    en: "Akasaka HM Bldg. 4F, 3-7-13 Akasaka, Minato-ku, Tokyo",
    "zh-cn": "东京都港区赤坂3-7-13 赤坂HM大厦4F",
    "zh-tw": "東京都港區赤坂3-7-13 赤坂HM大樓4F",
  },
  capital: "200,000,000",
} as const;

export const localeMeta: Record<
  Locale,
  { label: string; htmlLang: string; ogLocale: string }
> = {
  ja: { label: "JP", htmlLang: "ja", ogLocale: "ja_JP" },
  "zh-cn": { label: "簡体", htmlLang: "zh-CN", ogLocale: "zh_CN" },
  "zh-tw": { label: "繁体", htmlLang: "zh-TW", ogLocale: "zh_TW" },
  en: { label: "EN", htmlLang: "en", ogLocale: "en_US" },
};

export const navItems = [
  { href: "/about" as const, key: "about" },
  { href: "/services" as const, key: "services" },
  { href: "/strength" as const, key: "strength" },
  { href: "/cases" as const, key: "cases" },
  { href: "/marketing" as const, key: "marketing" },
  { href: "/partners" as const, key: "partners" },
  { href: "/company" as const, key: "company" },
  { href: "/contact" as const, key: "contact" },
];
