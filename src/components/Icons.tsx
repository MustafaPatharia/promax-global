/**
 * Inline stroke icons (currentColor, 1.6 stroke) for service cards and
 * funfact counters — no icon-font dependency, SSR-safe. Keyed by name.
 */
type P = { className?: string };
const S = ({ children, className }: { children: React.ReactNode } & P) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    {children}
  </svg>
);

export const Icons = {
  anchor: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13M5 12H3a9 9 0 0 0 18 0h-2M8 10l4-3 4 3" />
    </S>
  ),
  compass: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </S>
  ),
  building: (p: P) => (
    <S {...p}>
      <path d="M3 21h18M5 21V5l7-2v18M12 21V9l7 2v10M8 8h1M8 12h1M8 16h1M15 13h1M15 17h1" />
    </S>
  ),
  crane: (p: P) => (
    <S {...p}>
      <path d="M4 21h16M6 21V4l12 2M6 4l14 3M11 7v4m0 0-2 3h4l-2-3ZM9 21v-3h4v3" />
    </S>
  ),
  globe: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </S>
  ),
  briefcase: (p: P) => (
    <S {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </S>
  ),
  layers: (p: P) => (
    <S {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5" />
    </S>
  ),
  clipboard: (p: P) => (
    <S {...p}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V4ZM9 12l2 2 4-4" />
    </S>
  ),
  bolt: (p: P) => (
    <S {...p}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </S>
  ),
} as const;

export type IconName = keyof typeof Icons;
