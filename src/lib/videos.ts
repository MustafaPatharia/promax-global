/**
 * Single source for video URLs. Default = local `public/videos` (free,
 * works now). To move to a CDN (Cloudflare R2, Vercel Blob, etc.) set
 * NEXT_PUBLIC_VIDEO_BASE to the bucket's public base URL — no code change.
 *   NEXT_PUBLIC_VIDEO_BASE=https://<pub>.r2.dev
 */
// `??` alone is not enough: an env file that DECLARES the var with no value
// (`NEXT_PUBLIC_VIDEO_BASE=`) yields "", which is not nullish — that collapsed
// every URL to the site root (`/clip.mp4`, `/posters/clip.jpg` → 404). Treat an
// empty/whitespace value as "not set".
const OVERRIDE = process.env.NEXT_PUBLIC_VIDEO_BASE?.trim();
const BASE = (
  OVERRIDE ? OVERRIDE : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos`
).replace(/\/$/, "");

/** URL for a video file, e.g. video("container-port-night-topdown-aerial.mp4"). */
export const video = (file: string) => `${BASE}/${file}`;
/** URL for its extracted poster (posters stay beside the videos). */
export const poster = (name: string) => `${BASE}/posters/${name}.jpg`;
