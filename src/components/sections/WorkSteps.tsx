import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { Icons } from "@/components/Icons";
import type { WorkStepsBlock } from "./types";

/**
 * Numbered process steps (Transland .work-steps-list): each step is a white
 * circle with an auto-incrementing number badge, connected across a row.
 */
export default function WorkSteps({
  eyebrow,
  heading,
  intro,
  steps,
  bg = "bg-slate-50",
}: WorkStepsBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-14 max-w-2xl">
          <SectionTitle ghost="Process" kicker={eyebrow ?? "How we work"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon ? Icons[s.icon] : null;
            return (
              <Reveal key={s.title} variant="up" index={i % 4}>
                <div className="text-center">
                  <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full bg-white text-brand shadow-[0_10px_40px_0_rgba(0,0,0,0.08)]">
                    {Icon ? <Icon className="h-11 w-11" /> : <span className="font-display text-3xl font-extrabold">{i + 1}</span>}
                    <span className="absolute -right-1 top-0 grid h-10 w-10 place-items-center rounded-full border border-brand bg-white font-display text-sm font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold capitalize text-navy">{s.title}</h3>
                  {s.text && <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-500">{s.text}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
