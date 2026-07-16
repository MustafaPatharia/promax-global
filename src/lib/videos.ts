/**
 * Single source for video URLs. Default = local `public/videos` (free,
 * works now). To move to a CDN (Cloudflare R2, Vercel Blob, etc.) set
 * NEXT_PUBLIC_VIDEO_BASE to the bucket's public base URL — no code change.
 *   NEXT_PUBLIC_VIDEO_BASE=https://<pub>.r2.dev
 */
const BASE = (
  process.env.NEXT_PUBLIC_VIDEO_BASE ?? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos`
).replace(/\/$/, "");

/** URL for a video file, e.g. video("container-port-night-topdown-aerial.mp4"). */
export const video = (file: string) => `${BASE}/${file}`;
/** URL for its extracted poster (posters stay beside the videos). */
export const poster = (name: string) => `${BASE}/posters/${name}.jpg`;
