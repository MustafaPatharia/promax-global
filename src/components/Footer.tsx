import Link from "next/link";
import { site, verticals } from "@/lib/site";

/** Footer columns are fixed by the client content doc: Our Portfolio · Strategic Platforms · Find Us. */
const strategicPlatforms = [
  "Infrastructure & Economic Cities",
  "Natural Resources",
  "Digital Economy",
  "Energy Transition",
  "Investment & Capital",
  "National Capability Development",
];

export default function Footer() {
  const year = 2026; // static; bump or compute at build if desired
  return (
    <footer className="bg-navy text-slate-300">
      <div className="shell grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          {/* Client 2026-07-21: no logo in the footer. */}
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            From the UAE to the World. Building the Future of Nations.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Rooted in the UAE&rsquo;s spirit of innovation. We transform bold local ideas into
            global realities, delivering future-forward solutions from the heart of the Middle
            East.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Our Portfolio</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {verticals.map((v) => (
              <li key={v.slug}>
                <Link href={`/portfolio/${v.slug}`} className="hover:text-brand">
                  {v.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Strategic Platforms
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {strategicPlatforms.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Find Us</h3>
          <address className="mt-4 space-y-3 text-sm not-italic text-slate-400">
            <p>📍 {site.contact.address}</p>
            <p>
              ✉️{" "}
              <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                {site.contact.email}
              </a>
            </p>
            <p>
              📞{" "}
              <a href={site.contact.phoneHref} className="hover:text-brand">
                {site.contact.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-400 md:flex-row">
          <p>© {year} Promax Global. Under patronage of Promax United. All rights reserved.</p>
          <p className="font-semibold uppercase tracking-wide text-white">
            Building the Future of Nations
          </p>
        </div>
      </div>
    </footer>
  );
}
