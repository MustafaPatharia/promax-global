/**
 * Prefix a /public asset path with the deploy basePath so it resolves under a
 * GitHub Pages repo subpath. Raw <img src> strings don't get Next's basePath
 * automatically the way <Link>/next-image do — route them through here.
 *   asset("/brand/logo.png") → "/promax-global/brand/logo.png" (on Pages)
 */
const BASE = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const asset = (path: string) => `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;
