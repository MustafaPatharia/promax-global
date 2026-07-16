import Reveal from "@/components/anim/Reveal";

/**
 * Transland section-title signature, rebuilt as a component:
 *   ghost outline word (watermark)  →  orange kicker with rule  →  two-tone heading
 * Wrap the parts in Reveal so the template layout keeps our scroll motion on top.
 *
 *   <SectionTitle ghost="Service" kicker="Featured Service"
 *      heading={<>What <span>We Do</span></>} />
 */
export default function SectionTitle({
  ghost,
  kicker,
  heading,
  tone = "light",
  align = "left",
  className = "",
}: {
  /** Big faint watermark word behind the heading (e.g. "Service"). */
  ghost: string;
  /** Small orange label with the rule (e.g. "Featured Service"). */
  kicker: string;
  /** Heading; wrap the accent phrase in <span> for the orange second colour. */
  heading: React.ReactNode;
  /** "dark" = white stroke/heading for navy sections. */
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`sectitle tone-${tone} align-${align} ${className}`}>
      <Reveal variant="up">
        <span className="ghost" aria-hidden>{ghost}</span>
      </Reveal>
      <Reveal variant="up" index={1}>
        <p className="kicker">{kicker}</p>
      </Reveal>
      <Reveal variant="up" index={2}>
        <h2>{heading}</h2>
      </Reveal>
    </div>
  );
}
