"use client";
import { useState } from "react";
import type { Ui } from "@/lib/ui.en";

/**
 * Inquiry forms from the client doc. Two variants:
 *   work   — Name, Full Name, Mobile, Email, CV attachment, 200-word brief
 *   invest — Activity (select), Email, Organization, Your Role, 500-word brief
 * Labels come from the locale dictionary (t).
 *
 * ponytail: no backend yet — submit is client-side only (validates, then shows
 * the confirmation). Wire a real endpoint before launch; the CV file is not
 * uploaded anywhere today.
 */
const wordCount = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

export default function InquiryForm({
  variant,
  t,
}: {
  variant: "work" | "invest";
  t: Ui["inquiryForm"];
}) {
  const limit = variant === "work" ? 200 : 500;
  const [brief, setBrief] = useState("");
  const [sent, setSent] = useState(false);
  const words = wordCount(brief);
  const over = words > limit;

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand/30 bg-brand-050 p-8 text-center">
        <p className="text-2xl" aria-hidden>✓</p>
        <h3 className="mt-3 text-xl font-bold text-navy">{t.successTitle}</h3>
        <p className="mt-2 leading-relaxed text-slate-600">{t.successText}</p>
      </div>
    );
  }

  const field = "mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-navy outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
  const label = "block text-sm font-semibold text-navy";

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        if (over) return;
        setSent(true);
      }}
    >
      {variant === "work" ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={label}>
              {t.name}
              <input name="name" required className={field} />
            </label>
            <label className={label}>
              {t.fullName}
              <input name="fullName" required className={field} />
            </label>
            <label className={label}>
              {t.mobile}
              <input name="mobile" type="tel" required className={field} />
            </label>
            <label className={label}>
              {t.email}
              <input name="email" type="email" required className={field} />
            </label>
          </div>
          <label className={label}>
            {t.cv}
            <input
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              className="mt-1 w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-navy file:px-4 file:py-2 file:text-white hover:file:bg-brand"
            />
          </label>
        </>
      ) : (
        <>
          <label className={label}>
            {t.activity}
            <select name="activity" required defaultValue="" className={field}>
              <option value="" disabled>
                {t.selectActivity}
              </option>
              {t.activities.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={label}>
              {t.email}
              <input name="email" type="email" required className={field} />
            </label>
            <label className={label}>
              {t.organization}
              <input name="organization" required className={field} />
            </label>
            <label className={`${label} sm:col-span-2`}>
              {t.role}
              <input name="role" required className={field} />
            </label>
          </div>
        </>
      )}

      <label className={label}>
        {variant === "work" ? t.tellWork : t.tellInvest}
        <textarea
          name="brief"
          rows={variant === "work" ? 5 : 8}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          className={`${field} resize-y`}
          aria-describedby="brief-count"
        />
      </label>
      <p
        id="brief-count"
        className={`-mt-3 text-right text-xs ${over ? "text-red-600" : "text-slate-400"}`}
      >
        {words} / {limit} {t.words}{over ? t.shorten : ""}
      </p>

      <button type="submit" disabled={over} className="btn btn-primary justify-center disabled:opacity-50">
        {t.submit} <span aria-hidden>→</span>
      </button>
    </form>
  );
}
