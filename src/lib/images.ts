/**
 * Single source for content-image URLs (banners, capability graphics,
 * leadership photos migrated from the old site into /public/images).
 * Mirrors lib/videos: default = local, swap to a CDN via NEXT_PUBLIC_IMAGE_BASE
 * with no code change. basePath-aware so Pages/export links resolve.
 */
const BASE = (
  process.env.NEXT_PUBLIC_IMAGE_BASE ?? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images`
).replace(/\/$/, "");

/** URL for a content image, e.g. img("c820e038_Civil_Infrastructure_Development.png"). */
export const img = (file: string) => `${BASE}/${file}`;
