"use client";
import { useEffect } from "react";
import { dir, type Locale } from "@/lib/i18n";

/** Keep the root <html lang/dir> in sync with the active locale segment.
 *  Content already renders RTL via the [locale] layout's dir wrapper; this
 *  fixes the document-level attributes for scrollbars, form controls, etc. */
export default function HtmlLangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    const el = document.documentElement;
    el.lang = locale;
    el.dir = dir(locale);
  }, [locale]);
  return null;
}
