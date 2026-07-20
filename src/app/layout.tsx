import type { Metadata, Viewport } from "next";
import { Poppins, Inter, Alex_Brush } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

// Root-relative OG image resolves against metadataBase (the production domain).
// Kept off the basePath helper on purpose — canonical/OG target the live domain,
// not the GitHub Pages subpath.
const ogImage = "/videos/posters/shipping-port-aerial-panorama.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | UAE Ports, Trade & Investment Group`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: ogImage, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: { card: "summary_large_image", images: [ogImage] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#12293f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} ${alexBrush.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (BitDefender etc.) inject
          bis_register / __processed_* attrs on <body> before React hydrates */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
