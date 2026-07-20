"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LOCALE_COOKIE, stripLocale, type Locale } from "@/lib/i18n";
import { getCookie, setCookie } from "./cookies";

const ACK_COOKIE = "promax_cookie_ack";

/**
 * First-visit language gate + cookie-preference bar.
 * - The gate appears until a language is chosen (no promax_lang cookie yet):
 *   "Continue in English" / "المتابعة بالعربية". Choosing stores the cookie and,
 *   if different from the current locale, navigates there.
 * - The slim bottom bar notes that we store the language preference in a cookie.
 * The root "/" redirect already opens the region-matched language; this lets the
 * visitor confirm or switch.
 */
export default function LangGate({
  locale,
  gate,
  cookie,
}: {
  locale: Locale;
  gate: { title: string; body: string; continueEn: string; continueAr: string; dismiss: string };
  cookie: { text: string; accept: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [showGate, setShowGate] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    setShowGate(!getCookie(LOCALE_COOKIE));
    setShowBar(!getCookie(ACK_COOKIE));
  }, []);

  const { rest } = stripLocale(pathname || "/");

  const choose = (l: Locale) => {
    setCookie(LOCALE_COOKIE, l);
    setShowGate(false);
    if (l !== locale) router.push(`/${l}${rest === "/" ? "" : rest}`);
  };

  const ack = () => {
    setCookie(ACK_COOKIE, "1");
    setShowBar(false);
  };

  return (
    <>
      {showGate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gate.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/60 p-4 backdrop-blur-sm"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-7 text-center shadow-2xl">
            <h2 className="text-xl font-bold text-navy">{gate.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{gate.body}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => choose("en")}
                className="btn btn-navy flex-1 justify-center"
              >
                {gate.continueEn}
              </button>
              <button
                type="button"
                onClick={() => choose("ar")}
                className="btn btn-primary flex-1 justify-center"
                lang="ar"
                dir="rtl"
              >
                {gate.continueAr}
              </button>
            </div>
            <button
              type="button"
              onClick={() => choose(locale)}
              className="mt-4 text-xs text-slate-400 hover:text-slate-600"
            >
              {gate.dismiss}
            </button>
          </div>
        </div>
      )}

      {showBar && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-900/95 backdrop-blur">
          <div className="shell flex flex-col items-center gap-3 py-3 text-xs text-slate-300 sm:flex-row sm:justify-between">
            <p className="leading-relaxed">{cookie.text}</p>
            <button
              type="button"
              onClick={ack}
              className="shrink-0 rounded-full bg-brand px-4 py-1.5 font-semibold text-white transition hover:brightness-110"
            >
              {cookie.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
