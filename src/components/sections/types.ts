/**
 * Block model — a page is an ordered list of these, each a section layout
 * ported from the Transland template. Extend the union as new blocks land;
 * the renderer in ./index.tsx switches on `type`.
 */
import type { LineName as IconName } from "@/components/LineIcon";

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
  ghost?: string;
  /** Grid width at lg+. Advisory & Planning is spec'd 4×2 (meeting 00:53:55). */
  columns?: 2 | 3 | 4;
  items: {
    icon?: IconName;
    title: string;
    text?: string;
    checklist?: string[];
    href?: string;
    /** Header photo above the card body — client asked for a "bright" header (00:55:38). */
    image?: string;
    imageAlt?: string;
  }[];
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

/** Plain responsive image grid (no lightbox) — reference/operational imagery. */
export type GalleryBlock = {
  type: "gallery";
  eyebrow?: string;
  heading: string;
  intro?: string;
  images: { src: string; alt: string }[];
};

/**
 * Media-left / copy-right overview band, matching the Home page's Corporate
 * Overview (client: "same style like company overview section").
 */
export type OverviewBlock = {
  type: "overview";
  /** Small kicker above the heading. */
  eyebrow?: string;
  /** Faint watermark word behind the heading. */
  ghost?: string;
  /** Plain string — `content.ts` is not a .tsx, so it cannot carry JSX. */
  heading: string;
  /** Trailing phrase rendered in the accent colour (SectionTitle's <span>). */
  accent?: string;
  /** Optional bold one-liner between heading and body. */
  lead?: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
};

export type Block =
  | OverviewBlock
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
  | GalleryBlock;
