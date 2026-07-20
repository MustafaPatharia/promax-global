/**
 * Block model — a page is an ordered list of these, each a section layout
 * ported from the Transland template. Extend the union as new blocks land;
 * the renderer in ./index.tsx switches on `type`.
 */
import type { IconName } from "@/components/Icons";

/** Icon-card grid — Transland .single-features-box / why-chose-us. */
export type FeatureCardsBlock = {
  type: "feature-cards";
  eyebrow?: string;
  heading: string;
  intro?: string;
  columns?: 2 | 3 | 4;
  tone?: "light" | "dark";
  items: { icon?: IconName; title: string; text?: string }[];
};

/** Numbered process steps in circles — Transland .work-steps-list. */
export type WorkStepsBlock = {
  type: "work-steps";
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: { title: string; text?: string; icon?: IconName }[];
};

/** Image cards with bottom gradient + icon + title — Transland .single-our-service. */
export type ServiceOverlayBlock = {
  type: "service-overlay";
  eyebrow?: string;
  heading: string;
  intro?: string;
  columns?: 2 | 3 | 4;
  items: { image: string; icon?: IconName; title: string; text?: string; href?: string }[];
};

/** Team photo cards with name/role overlay — Transland .single-team-member. */
export type TeamPhotosBlock = {
  type: "team-photos";
  eyebrow?: string;
  heading: string;
  intro?: string;
  members: { photo?: string; name: string; role: string }[];
};

/** Big ghost-icon cards with a checklist — Transland .single-freight-service. */
export type ServiceFreightBlock = {
  type: "service-freight";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { icon?: IconName; title: string; text?: string; checklist?: string[]; href?: string }[];
};

/** Animated skill/capability bars — Transland .skill-bars. */
export type SkillBarsBlock = {
  type: "skill-bars";
  eyebrow?: string;
  heading: string;
  intro?: string;
  image?: string;
  skills: { label: string; value: number }[];
};

/** Quote testimonials — Transland .testimonial-wrapper. */
export type TestimonialsBlock = {
  type: "testimonials";
  eyebrow?: string;
  heading: string;
  intro?: string;
  quotes: { text: string; name: string; role?: string }[];
};

/** Pricing / tier cards — Transland .our-price-wrapper. */
export type PricingBlock = {
  type: "pricing";
  eyebrow?: string;
  heading: string;
  intro?: string;
  tiers: { name: string; price?: string; period?: string; features: string[]; featured?: boolean; cta?: { label: string; href: string } }[];
};

/** Location / branch cards — Transland .our-branch-wrapper. */
export type BranchesBlock = {
  type: "branches";
  eyebrow?: string;
  heading: string;
  intro?: string;
  branches: { region: string; address?: string; detail?: string; image?: string }[];
};

/** Logo strip + count-up stats — Transland .brand-showcase-funfact-wrapper. */
export type BrandShowcaseBlock = {
  type: "brand-showcase";
  eyebrow?: string;
  heading: string;
  logos: string[];
  stats?: { value: string; label: string }[];
};

/** Bilingual leadership message — photo + Arabic (RTL) and English scripts. */
export type ChairmanBlock = {
  type: "chairman";
  eyebrow?: string;
  heading: string;
  photo?: string;
  name: string;
  role: string;
  arabic: string;
  english: string;
};

/** Plain responsive image grid (no lightbox) — reference/operational imagery. */
export type GalleryBlock = {
  type: "gallery";
  eyebrow?: string;
  heading: string;
  intro?: string;
  images: { src: string; alt: string }[];
};

export type Block =
  | FeatureCardsBlock
  | WorkStepsBlock
  | ServiceOverlayBlock
  | TeamPhotosBlock
  | ServiceFreightBlock
  | SkillBarsBlock
  | TestimonialsBlock
  | PricingBlock
  | BranchesBlock
  | BrandShowcaseBlock
  | ChairmanBlock
  | GalleryBlock;
