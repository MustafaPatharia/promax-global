"use client";

import { useState } from "react";
import Reveal from "@/components/anim/Reveal";

/**
 * Reach Us — two enquiry paths (client, 2026-07-20): WORK WITH US and INVEST WITH US.
 * Each path has its own field set per the content doc; they are NOT interchangeable,
 * so the visitor picks a path first.
 *
 * NOTE: submission is intentionally NOT wired. The client will decide the backend
 * (PHP form on managed hosting, or a form service on static deploy). On submit we
 * only show the doc's confirmation copy. No data leaves the browser.
 */

type Tab = "work" | "invest";

const INVEST_ACTIVITIES = [
  "Strategic Partnership",
  "Joint Venture",
  "Project Co-Investment",
  "General Sourcing Inquiry",
  "Government Relations",
  "Media",
];

const field =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-navy outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

function Label({ children, hint }: { children: string; hint?: string }) {
  return (
    <span className="flex items-baseline justify-between gap-3">
      <span className="text-sm font-medium text-navy">{children}</span>
      {hint && <span className="text-xs text-slate-400">{hint}</span>}
    </span>
  );
}

export default function ReachUsForms() {
  const [tab, setTab] = useState<Tab>("work");
  const [sent, setSent] = useState<Tab | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); // no backend yet — confirmation only
    setSent(tab);
  };

  const switchTab = (t: Tab) => {
    setTab(t);
    setSent(null);
  };

  return (
    <div>
      {/* path selector */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {(
          [
            {
              id: "work" as Tab,
              title: "Work With Us",
              text: "Join the team building the future of nations.",
            },
            {
              id: "invest" as Tab,
              title: "Invest With Us",
              text: "Partner, co-invest, or structure a joint venture.",
            },
          ]
        ).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => switchTab(t.id)}
            aria-pressed={tab === t.id}
            className={`rounded-2xl border p-6 text-left transition ${
              tab === t.id
                ? "border-brand bg-brand/5 shadow-[0_18px_40px_-24px_rgba(58,163,40,0.6)]"
                : "border-slate-200 bg-white hover:border-brand/40 hover:bg-slate-50"
            }`}
          >
            <span
              className={`font-display text-lg font-bold ${
                tab === t.id ? "text-brand" : "text-navy"
              }`}
            >
              {t.title}
            </span>
            <span className="mt-1.5 block text-sm leading-snug text-slate-500">{t.text}</span>
          </button>
        ))}
      </div>

      {sent === tab ? (
        <Reveal variant="scale">
          <div className="rounded-2xl border border-brand/30 bg-brand-050 p-10 text-center">
            <p className="font-display text-2xl font-bold text-navy">
              Inquiry Transmitted Successfully
            </p>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-600">
              Thank you for contacting Promax Global. We will review your submission and connect
              with you soon.
            </p>
            <button
              type="button"
              onClick={() => setSent(null)}
              className="btn btn-outline mt-8 !text-navy"
            >
              Submit another inquiry
            </button>
          </div>
        </Reveal>
      ) : (
        <form
          onSubmit={submit}
          className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-9"
        >
          {tab === "work" ? (
            <div className="grid gap-5">
              <label className="grid gap-1.5">
                <Label>Full Name</Label>
                <input type="text" name="fullName" required className={field} placeholder="Your full name" />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <Label>Mobile</Label>
                  <input type="tel" name="mobile" required className={field} placeholder="+971 …" />
                </label>
                <label className="grid gap-1.5">
                  <Label>Email</Label>
                  <input type="email" name="email" required className={field} placeholder="you@domain.com" />
                </label>
              </div>
              <label className="grid gap-1.5">
                <Label hint="PDF or Word">Attach CV</Label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className={`${field} file:mr-3 file:rounded-md file:border-0 file:bg-navy file:px-3 file:py-1.5 file:text-sm file:text-white`}
                />
              </label>
              <label className="grid gap-1.5">
                <Label hint="Up to 200 words">About You</Label>
                <textarea
                  name="about"
                  rows={6}
                  maxLength={1400}
                  className={field}
                  placeholder="Tell us about your background and why you want to join Promax Global…"
                />
              </label>
            </div>
          ) : (
            <div className="grid gap-5">
              <label className="grid gap-1.5">
                <Label>Area of Interest</Label>
                <select name="activity" required className={field} defaultValue="">
                  <option value="" disabled>
                    Select an option…
                  </option>
                  {INVEST_ACTIVITIES.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <Label>Email ID</Label>
                  <input type="email" name="email" required className={field} placeholder="you@organization.com" />
                </label>
                <label className="grid gap-1.5">
                  <Label>Organization</Label>
                  <input type="text" name="organization" required className={field} placeholder="Your organization" />
                </label>
              </div>
              <label className="grid gap-1.5">
                <Label>Your Role</Label>
                <input type="text" name="role" required className={field} placeholder="e.g. Investment Director" />
              </label>
              <label className="grid gap-1.5">
                <Label hint="Up to 500 words">Your Proposal</Label>
                <textarea
                  name="proposal"
                  rows={10}
                  maxLength={3500}
                  className={field}
                  placeholder="Outline your investment interest, mandate, or partnership proposal…"
                />
              </label>
            </div>
          )}

          <button type="submit" className="btn btn-primary mt-7 w-full justify-center">
            Transmit Inquiry <span aria-hidden>→</span>
          </button>
        </form>
      )}
    </div>
  );
}
