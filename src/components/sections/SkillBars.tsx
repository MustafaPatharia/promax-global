"use client";
/**
 * Transland `.skill-bars` block: two-column capability section — optional image
 * on one side, a stack of labelled horizontal progress bars on the other. Each
 * bar's fill grows from 0 to its % the first time it scrolls into view.
 * Client component because the fill animation is in-view driven.
 */
import Image from "next/image";
import { motion } from "motion/react";
import SectionTitle from "@/components/SectionTitle";
import { img } from "@/lib/images";
import { prefersReducedMotion } from "@/lib/gsap";

type SkillBarsBlock = {
  type: "skill-bars";
  eyebrow?: string;
  heading: string;
  intro?: string;
  image?: string; // filename in /public/images, use img() helper
  skills: { label: string; value: number }[]; // value 0-100
};

export default function SkillBars({
  eyebrow,
  heading,
  intro,
  image,
  skills,
  bg = "bg-white",
}: SkillBarsBlock & { bg?: string }) {
  const still = prefersReducedMotion();

  const bars = (
    <div className="space-y-6">
      {skills.map((s) => (
        <div key={s.label}>
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-navy">
            <span>{s.label}</span>
            <span className="text-brand">{s.value}%</span>
          </div>
          <div className="h-2.5 rounded-full bg-slate-100">
            {still ? (
              <div className="h-full rounded-full bg-brand" style={{ width: `${s.value}%` }} />
            ) : (
              <motion.div
                className="h-full rounded-full bg-brand"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost="Strengths" kicker={eyebrow ?? "Our capabilities"} heading={heading} />
          {intro && <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>}
        </div>
        {image ? (
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src={img(image)} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            {bars}
          </div>
        ) : (
          <div className="max-w-3xl">{bars}</div>
        )}
      </div>
    </section>
  );
}
