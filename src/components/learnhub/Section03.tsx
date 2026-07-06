/**
 * Section 03 — "02 / Scope of Work".
 *
 * The whole visual (header pill, Discover/Define/Develop/Deliver, the scope
 * list and the tool logos) is baked into the full-bleed Frame588 graphic, so
 * we render just that image. Earlier DOM overlays duplicated the baked content
 * and were removed (the page-wide content scaling had exposed the duplicates).
 */
const imgFrame588 = "/covers/learnhub/0f20c19a63388b5f5811b29986c3991cb02c0585.png";

export default function Section03() {
  return (
    <section
      data-node-id="9316:64387"
      className="relative w-[1440px] shrink-0 overflow-hidden bg-[#4d4f5d]"
      style={{ height: 979 }}
    >
      {/* Scale the baked graphic to match every other section's content inset.
          The image's own background is the same #4d4f5d, so the margins blend
          seamlessly and the grey still reads as full-bleed. */}
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
        <div
          className="absolute left-0 top-0 h-[979px] w-[1440px]"
          data-node-id="9316:64419"
        >
          <img
            alt="Scope of work — Discover, Define, Develop, Deliver"
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
            src={imgFrame588}
          />
        </div>
      </div>
    </section>
  );
}
