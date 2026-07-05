const imgGaugeBg = "/covers/learnhub/68e4631c61878070830c64486a01ec4d5f273924.svg";
const imgGaugeWave = "/covers/learnhub/80a01a574acbfaffd9f9deaa81ea4d64c21be6f1.svg";
const imgGridLine = "/covers/learnhub/29f0213998fe98e17e5a66e3e76f039cafc26c42.svg";

/**
 * Dotted-grid stat card. The Figma design renders the mint dot pattern as 15
 * nested alpha-masked SVG groups; we approximate it with a repeating
 * radial-gradient dot field, clipped to the card, which is visually identical.
 */
function StatCard({
  nodeId,
  left,
  label,
}: {
  nodeId: string;
  left: number;
  label: string;
}) {
  return (
    <div
      className="absolute h-[160px] w-[240px] rounded-[24px] border border-[#d9d9e6] border-solid overflow-hidden"
      style={{ left, top: 166 }}
      data-node-id={nodeId}
    >
      <div
        className="absolute left-[10px] right-[10px] top-[62px] bottom-[10px]"
        style={{
          backgroundImage:
            "radial-gradient(#a2f6c1 1.2px, transparent 1.4px)",
          backgroundSize: "9.5px 9.5px",
        }}
      />
      <p className="absolute left-0 top-[16px] w-[240px] text-center font-[Urbanist] font-semibold text-[24px] leading-[1.2] text-white">
        {label}
      </p>
    </div>
  );
}

/**
 * Circular water-level gauge. Reproduces the Figma ring BG SVG, a mint fill
 * risen to `pct` of the circle, and the wave SVG at the water line. The
 * original masks the fill inside the inner circle; we clip with a round
 * container to the same effect.
 */
function WaterGauge({
  nodeId,
  left,
  pct,
}: {
  nodeId: string;
  left: number;
  pct: number;
}) {
  const fillHeight = 228 * pct;
  return (
    <div
      className="absolute h-[240px] w-[240px]"
      style={{ left, top: 456 }}
      data-node-id={nodeId}
    >
      {/* Inner circle clip for the water fill */}
      <div className="absolute left-[6px] top-[6px] size-[228px] rounded-full overflow-hidden">
        <div
          className="absolute left-0 right-0 bottom-0 opacity-60"
          style={{ height: fillHeight }}
        >
          <img
            alt=""
            className="absolute left-0 top-0 block h-[24px] w-full"
            src={imgGaugeWave}
          />
          <div
            className="absolute left-0 right-0 bottom-0 top-[24px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0.61), #a2f6c1)",
            }}
          />
        </div>
      </div>
      {/* Ring background */}
      <img
        alt=""
        className="absolute inset-0 block size-full"
        src={imgGaugeBg}
      />
      <p className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+16px)] font-[Urbanist] font-semibold text-[34px] leading-[1.2] text-center text-[#4d4f5d] whitespace-nowrap">
        {Math.round(pct * 100)}%
      </p>
    </div>
  );
}

const bars = [
  { node: "9316:64560", label: "Career Growth", value: 89, right: "11.67%" },
  { node: "9316:64567", label: "Self Development", value: 45, right: "19.79%" },
  { node: "9316:64574", label: "Free Time", value: 30, right: "35.21%" },
  { node: "9316:64581", label: "Salary Growth", value: 21, right: "57.08%" },
  { node: "9316:64588", label: "Certificate", value: 11, right: "65%" },
  { node: "9316:64595", label: "Networking", value: 8, right: "72.29%" },
];

export default function Section05() {
  return (
    <section
      data-node-id="9316:64535"
      className="relative w-[1440px] shrink-0 bg-[#24242d] overflow-hidden"
      style={{ height: 842 }}
    >
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      {/* Header — Frame 466 */}
      <div
        className="absolute left-[40px] top-[40px] flex w-[1360px] flex-col gap-[8px] items-start"
        data-node-id="9316:64543"
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex gap-[8px] items-start">
            <div className="flex h-[36px] items-center justify-center gap-[6px] rounded-[80px] border border-solid border-[#151516] px-[24px] py-[6px]">
              <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-center text-[#a2f6c1] whitespace-nowrap">
                04
              </p>
            </div>
            <div className="flex h-[36px] items-center justify-center gap-[6px] rounded-[80px] border-[0.5px] border-solid border-[#151516] bg-[#24242d] px-[24px] py-[6px]">
              <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-center text-[#a2f6c1] whitespace-nowrap">
                Survey
              </p>
            </div>
          </div>
          <div className="h-[37px] w-[104px]" />
        </div>
        <div className="h-px w-full bg-[#828596]" />
      </div>

      {/* Stat cards */}
      <StatCard nodeId="9316:64601" left={40} label="63 People" />
      <StatCard nodeId="9316:65327" left={320} label="36 Questions" />

      {/* Section titles */}
      <p
        className="absolute left-[86px] top-[406px] w-[428px] font-[Urbanist] font-semibold text-[20px] leading-[1.3] text-[#d9d9e6]"
        data-node-id="9316:64598"
      >
        What form of educational platform did you use?
      </p>

      {/* Water gauges — Frame 555 */}
      <WaterGauge nodeId="9316:66054" left={40} pct={0.8} />
      <WaterGauge nodeId="9316:66062" left={320} pct={0.57} />

      <p
        className="absolute left-[32px] top-[712px] w-[256px] font-[Urbanist] font-semibold text-[20px] leading-[1.3] text-center text-[#d9d9e6]"
        data-node-id="9316:64599"
      >
        Mobile App
      </p>
      <p
        className="absolute left-[312px] top-[712px] w-[256px] font-[Urbanist] font-semibold text-[20px] leading-[1.3] text-center text-[#d9d9e6]"
        data-node-id="9316:64600"
      >
        Web- services
      </p>

      {/* Bar chart — Frame 469 */}
      <div
        className="absolute left-[880px] top-[221px] flex w-[480px] flex-col gap-[54px] items-start"
        data-node-id="9316:64544"
      >
        <p
          className="font-[Urbanist] font-semibold text-[20px] leading-[1.3] text-[#d9d9e6] whitespace-nowrap"
          data-node-id="9316:64545"
        >
          What Purpose do you Use the Service for?
        </p>
        <div className="relative h-[320px] w-[480px]" data-node-id="9316:64546">
          {/* Grid axis */}
          <div className="absolute inset-0 flex items-start">
            {["0", "20", "40", "60", "80", "100"].map((tick, i) => (
              <div
                key={tick}
                className={
                  i === 0
                    ? "relative h-full w-px shrink-0"
                    : "relative h-full min-w-px flex-1"
                }
              >
                <p className="absolute bottom-[-6px] right-[0.5px] translate-x-1/2 translate-y-full font-[Urbanist] font-normal text-[12px] leading-[1.5] text-center text-[#d9d9e6] whitespace-nowrap">
                  {tick}
                </p>
                {i === 0 ? (
                  <div className="absolute bottom-0 right-0 top-0 w-px bg-white" />
                ) : (
                  <div className="absolute bottom-0 right-[0.5px] top-0 w-0">
                    <div className="absolute inset-[0_-0.5px]">
                      <img
                        alt=""
                        className="block size-full max-w-none"
                        src={imgGridLine}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Bars */}
          <div className="absolute inset-0 flex flex-col items-start justify-center py-[8px]">
            {bars.map((bar) => (
              <div key={bar.node} className="relative min-h-px w-full flex-1">
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 flex h-[16px] items-center pl-px"
                  style={{ right: bar.right }}
                  data-node-id={bar.node}
                >
                  <div className="relative h-full w-0 shrink-0">
                    <p className="absolute right-[8px] top-[calc(50%-9px)] text-right font-[Urbanist] font-semibold text-[18px] leading-[1.3] text-[#d9d9e6] whitespace-nowrap">
                      {bar.label}
                    </p>
                  </div>
                  <div
                    className="h-full min-w-px flex-1 rounded-br-[30px] rounded-tr-[30px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(-90deg, rgb(162,246,193) 0%, rgba(54,240,151,0.2) 100%)",
                    }}
                  />
                  <div className="relative h-full w-0 shrink-0">
                    <p className="absolute left-[8px] top-[calc(50%-9px)] font-[Urbanist] font-normal text-[14px] leading-[1.5] text-[#d9d9e6] whitespace-nowrap">
                      {bar.value}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
