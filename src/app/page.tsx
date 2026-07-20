"use client";
import { useEffect } from "react";
import { LOCALE_COOKIE, isLocale, defaultLocale, type Locale } from "@/lib/i18n";

/**
 * Root "/" is a client redirect (static export can't emit a 3xx). Honour the
 * saved language cookie first; otherwise open the language that matches the
 * browser — Arabic browsers land on /ar. A no-JS fallback links to both.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function cookieLocale(): Locale | null {
  const m =
    typeof document !== "undefined" &&
    document.cookie.match(new RegExp("(?:^|; )" + LOCALE_COOKIE + "=([^;]*)"));
  const v = m ? decodeURIComponent(m[1]) : "";
  return v && isLocale(v) ? v : null;
}

export default function RootRedirect() {
  useEffect(() => {
    const nav = (navigator.language || "").toLowerCase();
    const loc: Locale = cookieLocale() ?? (nav.startsWith("ar") ? "ar" : defaultLocale);
    window.location.replace(`${BASE}/${loc}/`);
  }, []);

  return (
    <noscript>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <a href={`${BASE}/en/`}>Continue in English</a> · <a href={`${BASE}/ar/`}>المتابعة بالعربية</a>
      </div>
    </noscript>
  );
}
