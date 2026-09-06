"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="site-grid flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/playwan-mark.png"
            alt="PLAYWAN Gaming"
            width={36}
            height={40}
            className="h-10 w-auto shrink-0"
            priority
          />
          <span className="font-display text-[13px] tracking-[0.22em]">
            PLAYWAN
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[11px] tracking-[0.16em] text-text hover:text-brand"
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2 xl:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            <span className="flex w-6 flex-col gap-1.5">
              <span className={`h-px w-full bg-text ${open ? "translate-y-2 rotate-45" : ""} transition-transform`} />
              <span className={`h-px w-full bg-text ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-text ${open ? "-translate-y-2 -rotate-45" : ""} transition-transform`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bg xl:hidden">
          <nav className="site-grid flex flex-col py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center font-display text-sm tracking-[0.14em]"
                onClick={() => setOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="border-t border-line py-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
