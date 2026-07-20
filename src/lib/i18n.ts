/**
 * i18n core — EN + AR only. AR renders the whole site RTL.
 *
 * Route model (static-export safe, no middleware): every page lives under
 * `app/[locale]/…` and is generated for both locales. `/` is a client redirect
 * that honours the saved cookie, else the browser language. Content dictionaries
 * are locale-keyed siblings (content.ar.ts / faqs.ar.ts / site.ar.ts / ui.ar.ts);
 * getters below pick the right one so components stay locale-agnostic.
 */
import { pages } from "./content";
import { pagesAr } from "./content.ar";
import { faqs } from "./faqs";
import { faqsAr } from "./faqs.ar";
import { uiEn } from "./ui.en";
import { uiAr } from "./ui.ar";
import { site, nav, verticals, type NavItem } from "./site";
import { siteAr } from "./site.ar";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** OpenGraph-style locale tag per language. */
export const ogLocale: Record<Locale, string> = { en: "en_AE", ar: "ar_AE" };

export const dir = (l: Locale): "rtl" | "ltr" => (l === "ar" ? "rtl" : "ltr");
export const isLocale = (x: string): x is Locale =>
  (locales as readonly string[]).includes(x);

/** Narrow a route param to a Locale (falls back to default; the [locale]
 *  layout already 404s truly invalid segments). */
export const asLocale = (x: string): Locale => (isLocale(x) ? x : defaultLocale);

/** Cookie that stores the visitor's chosen language (set by the switcher/gate). */
export const LOCALE_COOKIE = "promax_lang";

/** Prefix an internal href with the active locale segment. Hashes / mailto /
 *  tel / external URLs pass through untouched. */
export function withLocale(href: string, locale: Locale): string {
  if (!href || href[0] !== "/") return href;
  return `/${locale}${href === "/" ? "" : href}`;
}

/** Split a pathname into its leading locale segment and the rest ("/contact"). */
export function stripLocale(path: string): { locale: Locale | null; rest: string } {
  const m = path.match(/^\/(en|ar)(\/.*)?\/?$/);
  if (!m) return { locale: null, rest: path || "/" };
  return { locale: m[1] as Locale, rest: m[2] || "/" };
}

// ---- locale-aware content selectors ----
export const getPages = (l: Locale) => (l === "ar" ? pagesAr : pages);
export const getFaqs = (l: Locale) => (l === "ar" ? faqsAr : faqs);
export const getUi = (l: Locale) => (l === "ar" ? uiAr : uiEn);
export const getTagline = (l: Locale) => (l === "ar" ? siteAr.tagline : site.tagline);
export const getDescription = (l: Locale) =>
  l === "ar" ? siteAr.description : site.description;
export const getStats = (l: Locale) => (l === "ar" ? siteAr.stats : site.stats);

const arVerticals = siteAr.verticals as Record<string, { title: string; blurb: string }>;
export const getVerticals = (l: Locale) =>
  l === "ar"
    ? verticals.map((v) => ({
        ...v,
        title: arVerticals[v.slug]?.title ?? v.title,
        blurb: arVerticals[v.slug]?.blurb ?? v.blurb,
      }))
    : verticals;

const arNavLabels = siteAr.navLabels as Record<string, string>;
const localizeNav = (items: NavItem[]): NavItem[] =>
  items.map((n) => ({
    ...n,
    label: arNavLabels[n.href] ?? n.label,
    children: n.children ? localizeNav(n.children) : undefined,
  }));

export const getNav = (l: Locale): NavItem[] => (l === "ar" ? localizeNav(nav) : nav);
