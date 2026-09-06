import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");

  return (
    <footer className="border-t border-line bg-bg">
      <div className="site-grid grid gap-10 py-16 md:grid-cols-[200px_1fr]">
        <div>
          <Image
            src="/brand/playwan-logo.png"
            alt="PLAYWAN Gaming"
            width={120}
            height={139}
            className="h-24 w-auto"
          />
        </div>
        <div className="flex flex-col justify-between gap-8">
          <nav className="flex flex-wrap gap-x-5 gap-y-3 font-display text-[11px] tracking-[0.16em]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="min-h-11 py-3 hover:text-brand">
                {nav(item.key)}
              </Link>
            ))}
          </nav>
          <p className="font-display text-2xl leading-snug tracking-[-0.04em] md:text-4xl">
            {t("tagline")}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
            <Link href="/company">{t("company")}</Link>
            <Link href="/privacy">{t("privacy")}</Link>
            <span>{t("copyright")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
