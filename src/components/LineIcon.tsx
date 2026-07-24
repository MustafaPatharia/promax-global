import type React from "react";

/**
 * Shared thin LINE icons for the whole site (stroke glyphs, NOT the duotone
 * `Icons` set). The client's theme uses line icons everywhere — reuse this on
 * every page. 24×24, 1.5 stroke, `currentColor`. Lucide-style paths.
 *
 * Need a glyph that isn't here yet? Add it below (source: svgapi.com / Lucide),
 * keeping the same 24×24 / stroke conventions — don't fall back to duotone.
 */
export type LineName =
  | "pin"
  | "globe"
  | "chart"
  | "handshake"
  | "users"
  | "leaf"
  | "shield"
  | "check"
  | "building"
  | "anchor"
  | "briefcase"
  | "layers"
  | "compass"
  | "cpu"
  | "growth"
  | "graduation"
  | "bolt"
  | "landmark"
  | "coins"
  | "hard-hat"
  | "power-tower"
  | "solar-panel"
  | "plug-zap"
  | "gauge"
  | "eco-bulb"
  | "clipboard"
  | "newspaper"
  | "play"
  | "crane"
  | "ship";

const LINE_PATHS: Record<LineName, React.ReactNode> = {
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  pin: (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V6" />
      <path d="M8 17v-4" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  building: (
    <>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </>
  ),
  anchor: (
    <>
      <path d="M12 22V8" />
      <circle cx="12" cy="5" r="3" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </>
  ),
  briefcase: (
    <>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  layers: (
    <>
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
  compass: (
    <>
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265Z" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  cpu: (
    <>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </>
  ),
  growth: (
    <>
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </>
  ),
  bolt: (
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  ),
  /* Landmark — columned civic building: government bodies & authorities. */
  landmark: (
    <>
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
      <path d="M10 18v-7" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="m12 2 8 5H4z" />
    </>
  ),
  /* Coins — capital / sovereign wealth funds. */
  coins: (
    <>
      <circle cx="9" cy="9" r="6" />
      <path d="M18.6 11.1A6 6 0 1 1 11 18.7" />
      <path d="M8 7h1.2v4.2" />
    </>
  ),
  /* Hard hat — EPC contractors & integrators. */
  "hard-hat": (
    <>
      <path d="M2.5 18.5a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1z" />
      <path d="M10 10.5V5.8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.7" />
      <path d="M4.5 17.5V13a5.5 5.5 0 0 1 5.5-5.5" />
      <path d="M14 7.5A5.5 5.5 0 0 1 19.5 13v4.5" />
    </>
  ),
  /* Transmission pylon — utility companies & regulators. */
  "power-tower": (
    <>
      <path d="M12 2 5.5 22" />
      <path d="M12 2 18.5 22" />
      <path d="M12 2v20" />
      <path d="M6.6 8.5h10.8" />
      <path d="M5.1 15h13.8" />
    </>
  ),
  /* Solar panel — angled PV array on a stand (energy & ecology set idiom). */
  "solar-panel": (
    <>
      <path d="M4.5 14h15l-1.6-9a1 1 0 0 0-1-.86H7.1a1 1 0 0 0-1 .86z" />
      <path d="M5.1 9.5h13.8" />
      <path d="M12 4.14V14" />
      <path d="M12 14v3" />
      <path d="M8 20h8" />
      <path d="M12 17v3" />
    </>
  ),
  /* Plug + bolt — electrification / hybrid conversions. */
  "plug-zap": (
    <>
      <path d="M9 2v4" />
      <path d="M15 2v4" />
      <path d="M6 6h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6z" />
      <path d="M12 15v3" />
      <path d="m13.5 18-3 2.4h3L10.5 23" />
    </>
  ),
  /* Gauge — efficiency audits / optimisation. */
  gauge: (
    <>
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </>
  ),
  /* Eco bulb — leaf inside a bulb: LED retrofits / sustainable upgrades. */
  "eco-bulb": (
    <>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5A5.99 5.99 0 0 0 18 7a6 6 0 0 0-12 0c0 1.8.7 3.4 1.5 4.5.8.8 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 12.5V8.8" />
      <path d="M12 8.8c0-1.6 1.2-2.8 2.8-2.8 0 1.6-1.2 2.8-2.8 2.8" />
      <path d="M12 10.2c0-1.6-1.2-2.8-2.8-2.8 0 1.6 1.2 2.8 2.8 2.8" />
    </>
  ),
  clipboard: (
    <>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </>
  ),
  graduation: (
    <>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </>
  ),
  newspaper: (
    <>
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </>
  ),
  play: <polygon points="6 3 20 12 6 21 6 3" />,
  ship: (
    <>
      <path d="M12 10.189V14" />
      <path d="M12 2v3" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </>
  ),
  crane: (
    <>
      <path d="M5 21V5l14 2.8" />
      <path d="M5 9h14" />
      <path d="M16 9v3" />
      <path d="M13.5 12h5l-2.5 3.5z" />
      <path d="M2.5 21h5" />
    </>
  ),
};

export default function LineIcon({
  name,
  className,
}: {
  name: LineName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {LINE_PATHS[name]}
    </svg>
  );
}
