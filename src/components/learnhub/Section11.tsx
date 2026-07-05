/**
 * Section 11 — "10 / User Flow".
 *
 * The whole user-flow diagram (header pill, nodes, decision diamonds, labels,
 * arrows and connectors) is baked into the full-bleed Frame589 graphic, so we
 * render just that image. Earlier DOM overlays duplicated the baked diagram and
 * were removed (the page-wide content scaling had exposed the duplicates).
 */
const imgFrame589 = "/covers/learnhub/0506145fe1bfd53535ed9483aede3fa58cc4cf97.png";

export default function Section11() {
  return (
    <section
      data-node-id="9316:66464"
      className="relative w-[1440px] shrink-0 overflow-hidden bg-[#4d4f5d]"
      style={{ height: 1422 }}
    >
      {/* Scale the baked graphic to match every other section's content inset.
          The image's own background is the same #4d4f5d, so the margins blend
          seamlessly and the grey still reads as full-bleed. */}
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
        <div
          className="absolute left-0 top-0 h-[1422px] w-[1440px]"
          data-node-id="9316:66661"
        >
          <img
            alt="User flow diagram"
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
            src={imgFrame589}
          />
        </div>
      </div>
    </section>
  );
}
