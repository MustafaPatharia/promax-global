import { notFound } from "next/navigation";
import { dir, isLocale, locales, getUi, getNav, type Locale } from "@/lib/i18n";
import UtilityBar from "@/components/UtilityBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import HtmlLangSync from "@/components/i18n/HtmlLangSync";
import LangGate from "@/components/i18n/LangGate";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const ui = getUi(locale);

  return (
    <div lang={locale} dir={dir(locale)} className="flex min-h-full flex-1 flex-col">
      <HtmlLangSync locale={locale} />
      <SmoothScroll>
        <UtilityBar locale={locale} />
        <Nav locale={locale} items={getNav(locale)} labels={ui.nav} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </SmoothScroll>
      <LangGate locale={locale} gate={ui.langGate} cookie={ui.cookie} />
    </div>
  );
}
