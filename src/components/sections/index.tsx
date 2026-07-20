/**
 * Block renderer: maps each block's `type` to its ported Transland component,
 * alternating light/slate backgrounds down the page. Add a case per new block.
 */
import FeatureCards from "./FeatureCards";
import WorkSteps from "./WorkSteps";
import ServiceOverlay from "./ServiceOverlay";
import TeamPhotos from "./TeamPhotos";
import ServiceFreight from "./ServiceFreight";
import SkillBars from "./SkillBars";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Branches from "./Branches";
import BrandShowcase from "./BrandShowcase";
import Overview from "./Overview";
import Gallery from "./Gallery";
import type { Block } from "./types";

export type { Block } from "./types";

export default function Blocks({ blocks, offset = 0 }: { blocks?: Block[]; offset?: number }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((b, i) => {
        const bg = (i + offset) % 2 ? "bg-slate-50" : "bg-white";
        switch (b.type) {
          case "overview":
            return <Overview key={i} {...b} bg={bg} />;
          case "feature-cards":
            return <FeatureCards key={i} {...b} bg={bg} />;
          case "work-steps":
            return <WorkSteps key={i} {...b} bg={bg} />;
          case "service-overlay":
            return <ServiceOverlay key={i} {...b} bg={bg} />;
          case "team-photos":
            return <TeamPhotos key={i} {...b} bg={bg} />;
          case "service-freight":
            return <ServiceFreight key={i} {...b} bg={bg} />;
          case "skill-bars":
            return <SkillBars key={i} {...b} bg={bg} />;
          case "testimonials":
            return <Testimonials key={i} {...b} bg={bg} />;
          case "pricing":
            return <Pricing key={i} {...b} bg={bg} />;
          case "branches":
            return <Branches key={i} {...b} bg={bg} />;
          case "brand-showcase":
            return <BrandShowcase key={i} {...b} bg={bg} />;
          case "gallery":
            return <Gallery key={i} {...b} bg={bg} />;
          default:
            return null;
        }
      })}
    </>
  );
}
