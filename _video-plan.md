# Promax Global — Video Usage Plan

Goal: put **every usable clip** to work with scroll + cursor interactivity, without
tanking payload. 21 clips exist; only 4 currently play. `VideoScrub` (scroll-scrub)
and `dubai-skyline-burj-aerial` (Burj) are unused.

## Interaction primitives (already built)
- `VideoScrub` — scroll drives `currentTime`. Scrub the footage by scrolling. **Unused → wire in.**
- `ParallaxMedia` — media drifts on scroll (GPU transform, no seek).
- `BackgroundVideo` / `LoopVideo` — muted autoplay loop behind text.
- `HeroScene` globe — now follows cursor across whole hero (fixed).
- Add: **hover-to-play grid tile** + **click-to-expand lightbox** (new, small).

## Rule of restraint (why not ALL at once)
Only ONE heavy playing video per viewport. Scroll-scrub/bg clips load `preload="metadata"`,
lazy-mount when section nears viewport (IntersectionObserver), poster holds until then.
Total autoplay bytes per screen stays ~1 clip. `running-track-aerial` = off-brand, drop.
`dubai-google-earth-zoom` = verify Google Earth rights before use.

## Section-by-section map (home + interior)

| # | Section | Clip | Interaction |
|---|---------|------|-------------|
| 1 | Hero underlay (optional swap) | `digital-globe-iot-network-loop` | bg loop behind particle globe (cursor-follow) |
| 2 | Intro stinger before hero copy | `trot-global-text-intro-port-bg` | scroll-trigger reveal, plays once on enter |
| 3 | Strategic Intent card *(currently shipping-port)* | keep `shipping-port-aerial-panorama` | ParallaxMedia (drift) |
| 4 | **NEW: 24/7 Operations** scrub band | `container-port-night-topdown-aerial` | **VideoScrub** — scroll = time |
| 5 | **NEW: Scrap & Recovery** scrub hero | `scrapyard-grapple-claw-metal` | **VideoScrub** full-bleed + overlay |
| 6 | Funfact stat backdrop *(now world-map)* | `rusty-scrap-metal-pile-scrapyard` | BackgroundVideo, tint overlay, counters on top |
| 7 | Smelting / processing cinematic | `foundry-furnace-molten-metal-worker` | full-bleed LoopVideo + gradient, dark theme |
| 8 | **NEW: Recycling output** 3-tile grid | `aluminium-baled-cubes-recycling`, `port-containers-network-topdown`, `port-night-digital-hologram-overlay` | **hover-to-play** tiles → click = lightbox |
| 9 | Tech / innovation callout | `smart-port-3d-digital-shipping` *(keep)* | LoopVideo underlay |
| 10 | **Global Reach → Burj / HQ** | `dubai-skyline-burj-aerial` | **VideoScrub** (scrub up the tower) or Parallax |
| 11 | Location intro | `dubai-earth-zoom-location-marker` *(keep)* | ParallaxMedia |
| 12 | Corporate wallpaper | `world-map-grid-motion-bg` *(keep, move if needed)* | BackgroundVideo behind logo/text |
| 13 | Sustainability quote bg | `recycle-symbol-sign-sunset` | BackgroundVideo, emotional scroll-fade |
| 14 | **About page — People/Safety** banner | `trot-port-crew-hivis-briefing-a` (+ `-b` alt cut) | wide LoopVideo strip |
| 15 | Loader / page-transition bumper | `trot-logo-reveal-black` (dark) / `trot-logo-reveal-port-bg` (light) | play-once splash, then fade |

## Interactivity ("user can play around")
- **Scroll-scrub** (VideoScrub) on 3 hero bands — user controls footage with scroll speed/direction.
- **Hover-to-play grid** — clip is a poster until hover, plays on hover, pauses on leave.
- **Click-to-expand lightbox** — any grid tile opens full clip with sound + native controls.
- **Cursor-follow hero globe** — already live after fix.
- Optional **drag-to-scrub** slider on the Burj/HQ clip (Motion drag → currentTime).

## Build order (lazy, incremental)
1. ✅ Hero cursor fix (done).
2. Wire `VideoScrub` into sections 4, 5, 10 (biggest visible win — Burj scrub).
3. Add hover-to-play grid tile (~30 lines) → section 8.
4. Swap posters→loops on remaining bands as perf budget allows.
5. Add click-to-expand lightbox last (nice-to-have).

Each new video-heavy section: IntersectionObserver lazy-mount + poster fallback + `prefers-reduced-motion` → static poster. Only transform/opacity animates.
