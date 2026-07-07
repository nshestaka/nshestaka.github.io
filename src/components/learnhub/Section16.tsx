/**
 * Section 16 — "15 / UI Kit".
 *
 * Simplified from the full component showcase to a stylish, minimal statement
 * that a complete UI Kit was created. Keeps the case study's design language
 * (dark #4d4f5d block, mint #A2F6C1 accents, Urbanist type).
 */
const chips = [
  "Colour styles",
  "Typography",
  "Buttons",
  "Icons",
  "Cards",
  "Tab bars",
  "Progress",
  "Video player",
];

export default function Section16() {
  return (
    <section
      data-node-id="9316-67746"
      className="relative w-[1440px] shrink-0 overflow-hidden bg-[#4d4f5d]"
      style={{ height: 640 }}
    >
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      {/* ---- Header: "15 / UI Kit" pill row + divider ---- */}
      <div
        className="absolute left-[40px] top-[40px] flex w-[1360px] flex-col items-start gap-[8px]"
        data-node-id="9316:67751"
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex items-start gap-[8px]">
            <div className="flex h-[36px] items-center justify-center overflow-clip rounded-[80px] border border-solid border-[#151516] px-[24px] py-[6px]">
              <p className="font-[Urbanist] text-[14px] leading-[1.5] text-[#a2f6c1]">
                15
              </p>
            </div>
            <div className="flex h-[36px] items-center justify-center overflow-clip rounded-[80px] border-[0.5px] border-solid border-[#151516] bg-[#24242d] px-[24px] py-[6px]">
              <p className="font-[Urbanist] text-[14px] leading-[1.5] text-[#a2f6c1]">
                UI Kit
              </p>
            </div>
          </div>
          <div className="h-[37px] w-[104px]" />
        </div>
        <div className="h-px w-full bg-[#828596]" />
      </div>

      {/* ---- Centered statement ---- */}
      <div className="absolute left-1/2 top-[210px] flex w-[920px] -translate-x-1/2 flex-col items-center text-center">
        <span className="font-[Urbanist] text-[14px] font-semibold uppercase tracking-[0.32em] text-[#a2f6c1]">
          Design System
        </span>
        <h2 className="mt-[22px] font-[Urbanist] text-[64px] font-bold leading-[1.05] text-white">
          A complete UI&nbsp;Kit
        </h2>
        <p className="mt-[24px] max-w-[680px] font-[Urbanist] text-[18px] font-normal leading-[1.6] text-[#d9d9e6]">
          Built a full component library — colour styles, a typography scale,
          buttons, icons, cards, navigation and media components — so every
          screen stays consistent and the product scales cleanly.
        </p>

        <div className="mt-[40px] flex max-w-[780px] flex-wrap items-center justify-center gap-[12px]">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-[#828596]/70 px-[18px] py-[8px] font-[Urbanist] text-[14px] text-[#a2f6c1]"
            >
              {c}
            </span>
          ))}
          <span className="rounded-full bg-[#a2f6c1] px-[18px] py-[8px] font-[Urbanist] text-[14px] font-medium text-[#151516]">
            +10 more
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}
