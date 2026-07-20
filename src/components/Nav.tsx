"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { NavItem } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/i18n";
import { asset } from "@/lib/assets";

/**
 * Sticky header. Shrinks + gains shadow on scroll (Transland signature).
 * Portfolio dropdown + mobile menu use native <details>. Localized nav items
 * and CTA labels are passed in from the [locale] layout; every href is
 * locale-prefixed via withLocale.
 */
const closeDetails = (e: React.MouseEvent<HTMLAnchorElement>) =>
  e.currentTarget.closest("details")?.removeAttribute("open");

export default function Nav({
  locale,
  items,
  labels,
}: {
  locale: Locale;
  items: NavItem[];
  labels: { workWithUs: string; getStarted: string; invest: string; menu: string; homeAria: string };
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const L = (href: string) => withLocale(href, locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    headerRef.current?.querySelectorAll("details[open]").forEach((d) => d.removeAttribute("open"));
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-all duration-300 ${
        scrolled ? "border-slate-100 shadow-[0_8px_30px_-16px_rgba(18,41,63,0.25)]" : "border-transparent"
      }`}
    >
      <div
        className={`shell flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href={L("/")} className="flex items-center" aria-label={labels.homeAria}>
          <Image
            src={asset("/brand/promax-logo-color.png")}
            alt="Promax Global"
            width={541}
            height={232}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {items.map((item) =>
            item.children ? (
              <details key={item.href} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-ink transition hover:text-brand">
                  {item.label}
                  <span className="text-slate-400 transition group-open:rotate-180">▾</span>
                </summary>
                <ul className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(18,41,63,0.35)]">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={L(c.href)}
                        onClick={closeDetails}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-brand-050 hover:text-brand"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                key={item.href}
                href={L(item.href)}
                className="text-sm font-medium text-ink transition hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={L("/work-with-us")} className="btn btn-navy btn-outline !border-navy !bg-transparent !text-navy hover:!bg-navy hover:!text-white">
            {labels.workWithUs}
          </Link>
          <Link href={L("/invest-with-us")} className="btn btn-primary">
            {labels.getStarted} <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Mobile menu */}
        <details className="lg:hidden">
          <summary className="flex cursor-pointer list-none items-center text-navy" aria-label={labels.menu}>
            <span className="text-2xl">≡</span>
          </summary>
          <div className="absolute inset-x-0 top-full border-b border-slate-100 bg-white p-4 shadow-lg">
            <ul className="flex flex-col gap-1">
              {items.flatMap((item) =>
                item.children
                  ? [
                      <li key={item.href} className="px-3 pt-2 text-xs font-semibold uppercase text-slate-400">
                        {item.label}
                      </li>,
                      ...item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={L(c.href)} onClick={closeDetails} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-brand-050">
                            {c.label}
                          </Link>
                        </li>
                      )),
                    ]
                  : [
                      <li key={item.href}>
                        <Link href={L(item.href)} onClick={closeDetails} className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-brand-050">
                          {item.label}
                        </Link>
                      </li>,
                    ]
              )}
            </ul>
            <div className="mt-3 flex gap-2">
              <Link href={L("/work-with-us")} className="btn btn-outline flex-1 justify-center !border-navy !text-navy">
                {labels.workWithUs}
              </Link>
              <Link href={L("/invest-with-us")} className="btn btn-primary flex-1 justify-center">
                {labels.invest}
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
