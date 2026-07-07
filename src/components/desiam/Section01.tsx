// Faithful reproduction of Figma node 9334:73830 (DESIAM hero). 1440 × 760.
const imgImage8 = '/desiam/hero.png'

export default function Section01() {
  return (
    <div
      className="relative h-[760px] w-[1440px] bg-gradient-to-b from-[#5c5c5c] to-[#898989]"
      data-node-id="9334:73830"
    >
      <div className="absolute left-[-16px] top-px h-[934px] w-[1472px]" data-node-id="9334:73831">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute left-[0.01%] top-[-9.42%] h-full w-[99.99%] max-w-none"
            src={imgImage8}
          />
        </div>
      </div>
      <div className="absolute left-[80px] top-[72px] flex items-start" data-node-id="9334:73832">
        <div className="flex shrink-0 items-center justify-center gap-[6px] overflow-clip rounded-[80px] border-[0.5px] border-solid border-[#e1e1e9] bg-[#24242d] px-[32px] py-[12px]">
          <p className="whitespace-nowrap text-center text-[20px] leading-[1.2] text-[#ffed42]">
            Reference Storing Tool. UX/UI Case Study
          </p>
        </div>
      </div>
      <div
        className="absolute left-[1149px] top-[72px] flex items-center justify-center gap-[6px] overflow-clip rounded-[80px] border-[0.5px] border-solid border-[#e1e1e9] bg-[#24242d] px-[32px] py-[12px]"
        data-node-id="9334:73834"
      >
        <p className="whitespace-nowrap text-center text-[20px] leading-[1.2] text-[#ffed42]">
          Natalia Shestaka
        </p>
      </div>
    </div>
  )
}
