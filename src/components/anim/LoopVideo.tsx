/**
 * Smooth autoplay-loop video that fills its (positioned) parent. Never seeks on
 * scroll — no jank. Always autoplays muted (the poster shows only in the rare
 * case a browser blocks even muted autoplay). Parent controls stacking; this
 * sets no z-index, so it works inside cards with a bg color.
 */
export default function LoopVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
