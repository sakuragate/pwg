import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { Inter_Tight, Noto_Sans_JP, Noto_Sans_SC, Noto_Sans_TC } from "next/font/google";
import { routing } from "@/i18n/routing";
import { localeMeta, siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../globals.css";

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSc = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-sc",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoTc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-tc",
  weight: ["400", "500", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const bodyFont =
    locale === "zh-cn" ? notoSc.variable : locale === "zh-tw" ? notoTc.variable : notoJp.variable;

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      className={`${display.variable} ${bodyFont} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col"
        style={{
          fontFamily:
            locale === "zh-cn"
              ? "var(--font-sc), sans-serif"
              : locale === "zh-tw"
                ? "var(--font-tc), sans-serif"
                : "var(--font-jp), sans-serif",
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              legalName: siteConfig.legalName,
              url: siteConfig.url,
              logo: `${siteConfig.url}/brand/playwan-logo.png`,
              foundingDate: siteConfig.founded,
              address: {
                "@type": "PostalAddress",
                streetAddress: "赤坂3-7-13 赤坂HMビル4F",
                addressLocality: "港区",
                addressRegion: "東京都",
                addressCountry: "JP",
              },
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
