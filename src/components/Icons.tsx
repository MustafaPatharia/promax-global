/**
 * Promax Global icon set — hand-built inline SVG, no icon-font / library.
 *
 * Style is modelled on the Transland template's flaticon glyphs (see
 * `_references/.../transland-html` — flaticon-cargo-ship-3, -airplane-5,
 * -delivery-truck-1, -drone-2): flat PICTORIAL fills, not hairline outlines.
 * Each icon is duotone — a solid silhouette in `currentColor` plus a lighter
 * `.42` accent layer for depth — so it reads rich at 28–56px on dark plates.
 *
 * 48×48 grid, fill-based, currentColor. Add new icons in the same two-layer
 * idiom so the set stays visually consistent everywhere it is used.
 */
type P = { className?: string };

const S = ({ children, className }: { children: React.ReactNode } & P) => (
  <svg viewBox="0 0 48 48" fill="currentColor" className={className} aria-hidden>
    {children}
  </svg>
);

/** Lighter accent layer — gives the flat fill its duotone depth. */
const A = ({ children }: { children: React.ReactNode }) => <g opacity="0.42">{children}</g>;

export const Icons = {
  /* ---- marine / ports ---- */
  anchor: (p: P) => (
    <S {...p}>
      <A>
        <circle cx="24" cy="9" r="5" />
      </A>
      <path d="M22 13.6a5 5 0 1 1 4 0V18h5a2 2 0 0 1 0 4h-5v16.2c4.9-.8 8.8-4.5 9.8-9.2h-3.2a1 1 0 0 1-.7-1.7l5.4-5.4a1 1 0 0 1 1.4 0l5.4 5.4a1 1 0 0 1-.7 1.7h-3.3C38.9 37.6 32.1 43.5 24 43.5S9.1 37.6 7.9 29H4.6a1 1 0 0 1-.7-1.7l5.4-5.4a1 1 0 0 1 1.4 0l5.4 5.4a1 1 0 0 1-.7 1.7h-3.2c1 4.7 4.9 8.4 9.8 9.2V22h-5a2 2 0 0 1 0-4h5v-4.4Z" />
    </S>
  ),

  /* ---- cargo ship (template: flaticon-cargo-ship-3) ---- */
  ship: (p: P) => (
    <S {...p}>
      <A>
        <path d="M11 28V17a2 2 0 0 1 2-2h9V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v19H11Zm15-15v4h8v-4h-8Z" />
      </A>
      <path d="M6 30h36a2 2 0 0 1 1.9 2.6l-2.3 7A5 5 0 0 1 36.8 43H11.2a5 5 0 0 1-4.8-3.4l-2.3-7A2 2 0 0 1 6 30Z" />
    </S>
  ),

  /* ---- air freight (template: flaticon-airplane-5) ---- */
  plane: (p: P) => (
    <S {...p}>
      <A>
        <path d="M9 34h20a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3Zm0 6h12a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3Z" />
      </A>
      <path d="M43.4 20.9 30 18.2 22.4 5.7A2 2 0 0 0 20.7 4.7h-3a1.5 1.5 0 0 0-1.4 2l4 12.1-8.6-1.7-3.4-4.6a1.5 1.5 0 0 0-1.2-.6H5.4a1.5 1.5 0 0 0-1.4 2l2.6 8a3 3 0 0 0 2.2 2l34 6.9a4 4 0 0 0 .6-7.8Z" />
    </S>
  ),

  /* ---- road freight (template: flaticon-delivery-truck-1) ---- */
  truck: (p: P) => (
    <S {...p}>
      <A>
        <circle cx="14" cy="36" r="5" />
        <circle cx="36" cy="36" r="5" />
      </A>
      <path d="M4 12a3 3 0 0 1 3-3h17a3 3 0 0 1 3 3v20H4V12Zm26 5h6.3a3 3 0 0 1 2.5 1.3l4.7 6.8a3 3 0 0 1 .5 1.7V32H30V17Z" />
    </S>
  ),

  /* ---- infrastructure & economic cities ---- */
  building: (p: P) => (
    <S {...p}>
      <A>
        <path d="M24 8a2 2 0 0 1 2.8-1.8l13 5.7A2 2 0 0 1 41 13.7V41a2 2 0 0 1-2 2H24V8Zm5 9v4h5v-4h-5Zm0 9v4h5v-4h-5Zm0 9v4h5v-4h-5Z" />
      </A>
      <path d="M6 20a2 2 0 0 1 1.2-1.8l10-4.4A2 2 0 0 1 20 15.6V43H8a2 2 0 0 1-2-2V20Zm5 4h4v4h-4v-4Zm0 8h4v4h-4v-4Z" />
    </S>
  ),

  /* ---- port gantry crane ---- */
  crane: (p: P) => (
    <S {...p}>
      <A>
        <path d="M22 14h4v10h-4V14Zm-4 14h12a1 1 0 0 1 1 1v9H17v-9a1 1 0 0 1 1-1Z" />
      </A>
      <path d="M8 8h32a2 2 0 0 1 0 4h-4v28a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V12H8a2 2 0 0 1 0-4Zm8 4v26h16V12H16Z" />
    </S>
  ),

  /* ---- global reach ---- */
  globe: (p: P) => (
    <S {...p}>
      <A>
        <circle cx="24" cy="24" r="20" />
      </A>
      <path d="M24 4a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm0 4c2.4 0 5 4.3 6 12H18c1-7.7 3.6-12 6-12ZM8.3 22a15.9 15.9 0 0 1 3.5-8.7A24 24 0 0 0 14 22H8.3Zm0 4H14a24 24 0 0 0 2.2 8.7A15.9 15.9 0 0 1 8.3 26ZM24 40c-2.4 0-5-4.3-6-12h12c-1 7.7-3.6 12-6 12Zm7.8-5.3A24 24 0 0 0 34 26h5.7a15.9 15.9 0 0 1-7.9 8.7ZM34 22a24 24 0 0 0-2.2-8.7 15.9 15.9 0 0 1 7.9 8.7H34Z" />
    </S>
  ),

  /* ---- location pin (used by the Branches map list) ---- */
  pin: (p: P) => (
    <S {...p}>
      <A>
        <ellipse cx="24" cy="41.5" rx="9" ry="3" />
      </A>
      <path d="M24 3a14 14 0 0 0-14 14c0 9.9 12.3 21.3 12.8 21.8a1.8 1.8 0 0 0 2.4 0C25.7 38.3 38 26.9 38 17A14 14 0 0 0 24 3Zm0 19.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" />
    </S>
  ),

  /* ---- investment & capital ---- */
  briefcase: (p: P) => (
    <S {...p}>
      <A>
        <path d="M18 6h12a5 5 0 0 1 5 5v5h-4v-4a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2v4h-4v-5a5 5 0 0 1 5-5Z" />
      </A>
      <path d="M5 18h38a2 2 0 0 1 2 2v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V20a2 2 0 0 1 2-2Zm17 6v3h4v-3h-4Z" />
    </S>
  ),

  /* ---- natural resources (strata / minerals) ---- */
  layers: (p: P) => (
    <S {...p}>
      <A>
        <path d="M5.1 27.7 23.1 36.5a2 2 0 0 0 1.8 0l18-8.8a1 1 0 0 1 0 1.8l-18 8.8a2 2 0 0 1-1.8 0l-18-8.8a1 1 0 0 1 0-1.8Z" />
        <path d="M5.1 20.7 23.1 29.5a2 2 0 0 0 1.8 0l18-8.8a1 1 0 0 1 0 1.8l-18 8.8a2 2 0 0 1-1.8 0l-18-8.8a1 1 0 0 1 0-1.8Z" />
      </A>
      <path d="M23.1 5.3a2 2 0 0 1 1.8 0l18 8.8a1 1 0 0 1 0 1.8l-18 8.8a2 2 0 0 1-1.8 0l-18-8.8a1 1 0 0 1 0-1.8l18-8.8Z" />
    </S>
  ),

  /* ---- advisory / governance ---- */
  clipboard: (p: P) => (
    <S {...p}>
      <A>
        <path d="M19 4h10a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3Z" />
      </A>
      <path d="M11 8h4v2a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8h4a3 3 0 0 1 3 3v29a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3Zm5 14a1.5 1.5 0 0 0 0 3h16a1.5 1.5 0 0 0 0-3H16Zm0 8a1.5 1.5 0 0 0 0 3h11a1.5 1.5 0 0 0 0-3H16Z" />
    </S>
  ),

  /* ---- energy transition ---- */
  bolt: (p: P) => (
    <S {...p}>
      <A>
        <circle cx="24" cy="24" r="21" />
      </A>
      <path d="M27.6 3.4a1 1 0 0 1 1.7 1L25.7 19h9.6a1.5 1.5 0 0 1 1.1 2.5L20.4 44.6a1 1 0 0 1-1.7-1L22.3 29h-9.6a1.5 1.5 0 0 1-1.1-2.5L27.6 3.4Z" />
    </S>
  ),

  /* ---- digital economy (AI / compute) ---- */
  chip: (p: P) => (
    <S {...p}>
      <A>
        <path d="M18 4a1.5 1.5 0 0 1 3 0v7h-3V4Zm9 0a1.5 1.5 0 0 1 3 0v7h-3V4ZM18 37h3v7a1.5 1.5 0 0 1-3 0v-7Zm9 0h3v7a1.5 1.5 0 0 1-3 0v-7ZM4 18h7v3H4a1.5 1.5 0 0 1 0-3Zm0 9h7v3H4a1.5 1.5 0 0 1 0-3Zm33-9h7a1.5 1.5 0 0 1 0 3h-7v-3Zm0 9h7a1.5 1.5 0 0 1 0 3h-7v-3Z" />
      </A>
      <path d="M14 14h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2Zm5 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H19Z" />
    </S>
  ),

  /* ---- national capability development ---- */
  graduation: (p: P) => (
    <S {...p}>
      <A>
        <path d="M12 22.6l11.1 5.3a2 2 0 0 0 1.8 0L36 22.6V33a2 2 0 0 1-1 1.7C32.1 36.4 28.3 37.5 24 37.5s-8.1-1.1-11-2.8A2 2 0 0 1 12 33V22.6ZM41 19.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-3 0V21a1.5 1.5 0 0 1 1.5-1.5Z" />
      </A>
      <path d="M23.1 6.2a2 2 0 0 1 1.8 0l19 9a1 1 0 0 1 0 1.8l-19 9a2 2 0 0 1-1.8 0l-19-9a1 1 0 0 1 0-1.8l19-9Z" />
    </S>
  ),

  /* ---- growth / returns ---- */
  growth: (p: P) => (
    <S {...p}>
      <A>
        <path d="M6 40h36a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3Z" />
      </A>
      <path d="M44 10v12a1.5 1.5 0 0 1-2.6 1.1l-3.6-3.6-10.7 10.7a2 2 0 0 1-2.6.2l-6.6-5-11 11a2 2 0 0 1-2.8-2.8l12.2-12.2a2 2 0 0 1 2.6-.2l6.6 5 9.2-9.2-3.6-3.6A1.5 1.5 0 0 1 32.5 10H44Z" />
    </S>
  ),

  /* ---- compass / direction ---- */
  compass: (p: P) => (
    <S {...p}>
      <A>
        <circle cx="24" cy="24" r="20" />
      </A>
      <path d="M24 4a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm8.6 10.4-5.2 12.2a2 2 0 0 1-1 1l-12.2 5.2a1 1 0 0 1-1.3-1.3l5.2-12.2a2 2 0 0 1 1-1l12.2-5.2a1 1 0 0 1 1.3 1.3ZM24 21a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </S>
  ),
} as const;

export type IconName = keyof typeof Icons;
