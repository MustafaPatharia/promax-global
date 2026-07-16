import type { NextConfig } from "next";

/**
 * `STATIC_EXPORT=true` (set by the GitHub Pages workflow) switches the build to
 * a fully static export under a repo subpath. Local `pnpm dev`/`build` stay
 * server-capable and unaffected.
 *   NEXT_PUBLIC_BASE_PATH — repo subpath, e.g. "/promax" (drives links + assets)
 */
const isExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // static export has no image optimizer
    ...(isExport ? { unoptimized: true } : {}),
  },
  ...(isExport
    ? { output: "export", trailingSlash: true, basePath }
    : {
        async headers() {
          return [
            {
              // long-cache the static video assets (dev/server builds only;
              // GitHub Pages sets its own caching, and export ignores headers)
              source: "/videos/:path*",
              headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
            },
          ];
        },
      }),
};

export default nextConfig;
