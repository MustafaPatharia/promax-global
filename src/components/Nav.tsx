"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { nav } from "@/lib/site";
import { asset } from "@/lib/assets";

/**
 * Sticky header. Shrinks + gains shadow on scroll (Transland signature).
 * Portfolio dropdown + mobile menu use native <details> so they work
 * without extra JS state. Respects the smooth-scroll layout.
 *
 * BILINGUAL LOCKUP (client, meeting 00:33:22 + content doc):
 *   "add Arabic Promax Global Logo in right & English in Left.
 *    Remaining all other info in centre"
 * The bar runs EXTREME LEFT → EXTREME RIGHT (full-bleed, not `shell`), with the
 * English mark hard left and the Arabic mark hard right, BOTH visible at once —
 * including on the English page.
 *
 * The positions NEVER swap. Client said "All conditions left" three times: even on
 * the Arabic (RTL) build the logos hold these sides. That is why this header is
 * pinned `dir="ltr"` while the document flips — the rationale given was
 * "we are asserting we are originating from Middle East", so the pairing itself
 * is the message and mirroring it would destroy the point.
 */
/** Close the enclosing native <details> after a client-side nav (open sticks otherwise). */
const closeDetails = (e: React.MouseEvent<HTMLAnchorElement>) =>
  e.currentTarget.closest("details")?.removeAttribute("open");

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  /**
   * The dropdowns are native <details>, so nothing closes them but a click on a
   * link INSIDE them. Clicking a sibling nav item (Home, Why Us…), or anywhere
   * off the panel, used to leave Portfolio hanging open. Close every open
   * <details> in the header unless the pointer landed inside that same one.
   */
  useEffect(() => {
    const closeOthers = (e: Event) => {
      const target = e.target as Node | null;
      headerRef.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((d) => {
        if (!target || !d.contains(target)) d.open = false;
      });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOthers(e);
    };
    document.addEventListener("pointerdown", closeOthers);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", closeOthers);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  /** Any completed client-side navigation closes whatever is still open. */
  useEffect(() => {
    headerRef.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((d) => (d.open = false));
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      dir="ltr"
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-all duration-300 ${
        scrolled ? "border-slate-100 shadow-[0_8px_30px_-16px_rgba(18,41,63,0.25)]" : "border-transparent"
      }`}
    >
      {/* Full-bleed: px only, NOT `shell` — the bar must reach both screen edges. */}
      <div
        className={`flex items-center gap-4 px-5 transition-all duration-300 md:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* --- EXTREME LEFT: English mark (locked, never mirrors) --- */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Promax Global — home">
          <Image
            src={asset("/brand/promax-logo-color.png")}
            alt="Promax Global"
            width={541}
            height={232}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`}
          />
        </Link>

        {/* Desktop nav — centred between the two marks */}
        <nav className="mx-auto hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <details key={item.href} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-ink transition hover:text-brand">
                  {item.label}
                  <span className="text-slate-400 transition group-open:rotate-180">▾</span>
                </summary>
                {/* Level 1 = the 6 portfolios. Hovering one with children opens the
                    level-2 flyout of that portfolio's page sections. */}
                <ul className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(18,41,63,0.35)]">
                  {item.children.map((c) => (
                    <li key={c.href} className="group/sub relative">
                      <Link
                        href={c.href}
                        onClick={closeDetails}
                        className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-brand-050 hover:text-brand"
                      >
                        {c.label}
                        {c.children && (
                          <span aria-hidden className="text-slate-300 group-hover/sub:text-brand">
                            ›
                          </span>
                        )}
                      </Link>

                      {c.children && (
                        <ul className="invisible absolute left-full top-0 ms-1 w-72 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-[0_20px_50px_-20px_rgba(18,41,63,0.35)] transition group-hover/sub:visible group-hover/sub:opacity-100">
                          {c.children.map((g) => (
                            <li key={g.href}>
                              <Link
                                href={g.href}
                                onClick={closeDetails}
                                className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-brand-050 hover:text-brand"
                              >
                                {g.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink transition hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/invest-with-us" className="btn btn-primary">
            Invest With Us
          </Link>
        </div>

        {/* Mobile menu — sits BEFORE the Arabic mark so that mark keeps the far
            right edge at every breakpoint. `ms-auto` because the centring nav
            that would otherwise push it is hidden below lg. */}
        <details className="ms-auto lg:hidden">
          <summary className="flex cursor-pointer list-none items-center text-navy" aria-label="Menu">
            <span className="text-2xl">≡</span>
          </summary>
          <div className="absolute inset-x-0 top-full border-b border-slate-100 bg-white p-4 shadow-lg">
            <ul className="flex flex-col gap-1">
              {nav.flatMap((item) =>
                item.children
                  ? [
                      <li key={item.href} className="px-3 pt-2 text-xs font-semibold uppercase text-slate-400">
                        {item.label}
                      </li>,
                      ...item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} onClick={closeDetails} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-brand-050">
                            {c.label}
                          </Link>
                        </li>
                      )),
                    ]
                  : [
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeDetails} className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-brand-050">
                          {item.label}
                        </Link>
                      </li>,
                    ]
              )}
            </ul>
            <div className="mt-3 flex gap-2">
              <Link href="/work-with-us" className="btn btn-outline flex-1 justify-center !border-navy !text-navy">
                Work With Us
              </Link>
              <Link href="/invest-with-us" className="btn btn-primary flex-1 justify-center">
                Invest
              </Link>
            </div>
          </div>
        </details>

        {/* --- EXTREME RIGHT: Arabic mark (locked, never mirrors) ---
            Decorative twin of the English lockup, so it carries an empty alt and
            the link is labelled instead — a screen reader shouldn't hear the
            company name twice in one bar. */}
        <Link
          href="/"
          className="ms-4 flex shrink-0 items-center"
          aria-label="بروماكس جلوبال — الصفحة الرئيسية"
        >
          {/* Arabic wordmark as bold text (client 2026-07-21) — no image. */}
          <span
            dir="rtl"
            aria-hidden
            className={`font-display font-bold leading-none tracking-tight text-navy transition-all duration-300 ${
              scrolled ? "text-lg" : "text-xl md:text-2xl"
            }`}
          >
            بروماكس جلوبال
          </span>
        </Link>
      </div>
    </header>
  );
}
