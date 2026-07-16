"use client";
/**
 * Scroll-into-view reveal using Framer Motion (`motion`).
 * For discrete UI elements — headings, cards, list items.
 * GSAP handles the heavy scroll-scrub work; Framer handles these
 * one-shot entrance animations where its declarative API is simpler.
 *
 * `variant` picks the entrance so sections don't all move the same way:
 *   up (default) · left · right · scale · blur
 */
import { motion, type Variants } from "motion/react";

type Variant = "up" | "left" | "right" | "scale" | "blur";

const hidden = {
  up: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.9 },
  blur: { opacity: 0, y: 18, filter: "blur(8px)" },
} as const;

function buildVariants(variant: Variant): Variants {
  return {
    hidden: hidden[variant],
    show: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
    }),
  };
}

export default function Reveal({
  children,
  index = 0,
  as = "div",
  variant = "up",
  className,
}: {
  children: React.ReactNode;
  index?: number;
  as?: keyof typeof motion;
  variant?: Variant;
  className?: string;
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={buildVariants(variant)}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </Tag>
  );
}
