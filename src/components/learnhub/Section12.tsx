const imgSilver = "/covers/learnhub/923e4e99f7ec5c1bc8719985da6ba5bf67a1f7c2.png";
const imgScreen1 = "/covers/learnhub/7ca3f3f5d3dc3dbe9c949fac830fa7e825a81df0.png";
const imgScreen2 = "/covers/learnhub/b80ccd16cffd49123f12826e3feba8a113df7f11.png";
const imgScreen3 = "/covers/learnhub/284998183b723ed3c97fd5dd76ceaaa581b704f4.png";
const imgGroup = "/covers/learnhub/1f2a0664324c7d9a3082ddfc393317c7a0fc56d1.svg";
const imgScreen = "/covers/learnhub/e79de8b1ef143673dbb0684d4413fe57ae181a5a.svg";

const missions = [
  { top: 167, num: 1, label: "Register and Onboarding", li: "9316:66671" },
  { top: 279, num: 2, label: "Search and Sort", li: "9316:66677" },
  { top: 391, num: 3, label: "Ask Mentor a question", li: "9316:66683" },
  { top: 503, num: 4, label: "Change password", li: "9316:66689" },
  { top: 615, num: 5, label: "Content download", li: "9316:66695" },
];

const stats = [
  { top: 227, lines: ["Direct Success - 88.5% . Mission unfinished - 0% .Miss click Rate - 65%. ", "Avg Duration - 185s"], w: 456, id: "9316:66723" },
  { top: 339, lines: ["Direct Success - 66% . Mission unfinished - 13% . Miss click Rate - 57%. ", "Avg Duration - 68s"], w: 504, id: "9316:66724" },
  { top: 451, lines: ["Direct Success - 72% . Mission unfinished - 9%. Miss click Rate - 59%. ", "Avg Duration - 70s"], w: 456, id: "9316:66725" },
  { top: 563, lines: ["Direct Success - 96% . Mission unfinished - 4%. Miss click Rate - 61%. ", "Avg Duration - 27s"], w: 456, id: "9316:66726" },
  { top: 675, lines: ["Direct Success - 93% . Mission unfinished - 0%. Miss click Rate - 21%. ", "Avg Duration - 46s"], w: 456, id: "9316:66727" },
];

export default function Section12() {
  return (
    <section
      data-node-id="9316:66662"
      className="relative w-[1440px] shrink-0 overflow-hidden bg-[#4d4f5d]"
      style={{ height: 821 }}
    >
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[40px] w-[1360px]" data-node-id="9316:66670">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="I9316:66670;2475:793">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I9316:66670;2533:2748">
            <div className="border border-[#151516] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0" data-node-id="I9316:66670;2533:1334" data-name="Small Button">
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap" data-node-id="I9316:66670;2533:1334;4256:7613">
                <p className="leading-[1.5]">11</p>
              </div>
            </div>
            <div className="bg-[#24242d] border-[#151516] border-[0.5px] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0" data-node-id="I9316:66670;2533:2744" data-name="Small Button">
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap" data-node-id="I9316:66670;2533:2744;4256:7613">
                <p className="leading-[1.5]">User Testing</p>
              </div>
            </div>
          </div>
          <div className="h-[37px] relative shrink-0 w-[104px]" data-node-id="I9316:66670;2533:3017" />
        </div>
        <div className="bg-[#828596] h-px relative shrink-0 w-full" data-node-id="I9316:66670;2475:761" />
      </div>
      {missions.map((m) => (
        <div key={m.li} data-node-id={m.li} className="absolute bg-[#151516] content-stretch flex gap-[8px] items-start left-[40px] p-[16px] rounded-[8px] w-[520px]" style={{ top: m.top }}>
          <ol className="[word-break:break-word] block flex-[1_0_0] font-[Urbanist] font-normal leading-[0] list-decimal min-w-px relative text-[14px] text-white" start={m.num}>
            <li className="ms-[21px]">
              <span className="leading-[1.5]">{m.label}</span>
            </li>
          </ol>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="lets-icons:done-all-round-duotone-line">
            <div className="absolute inset-[22.5%_8.33%_28.23%_5.83%]" data-name="Group">
              <div className="absolute inset-[0_-2.9%_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgGroup} />
              </div>
            </div>
          </div>
        </div>
      ))}
      {stats.map((s) => (
        <div key={s.id} data-node-id={s.id} className="[word-break:break-word] absolute font-[Urbanist] font-normal leading-[0] left-[56px] text-[#d9d9e6] text-[14px] whitespace-pre-wrap" style={{ top: s.top, width: s.w }}>
          <p className="leading-[1.5] mb-0">{s.lines[0]}</p>
          <p className="leading-[1.5]">{s.lines[1]}</p>
        </div>
      ))}
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[72px] items-end leading-[0] left-[663px] top-[calc(50%+91.5px)]" data-node-id="9316:66701">
        {[
          { screen: imgScreen1, id: "9316:66702", cover: true },
          { screen: imgScreen2, id: "9316:66709", cover: true },
          { screen: imgScreen3, id: "9316:66716", cover: false },
        ].map((phone) => (
          <div key={phone.id} data-node-id={phone.id} className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="iPhone 13 Pro">
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="iPhone-13-Pro-Front">
              <div className="col-1 h-[358px] ml-0 mt-0 relative row-1 w-[177px]" data-name="Silver">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSilver} />
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9.95px] mt-[8.29px] place-items-start relative row-1" data-name="Mockup">
                <div className="col-1 h-[343.204px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.523px_0.738px] mask-size-[157.836px_341.419px] ml-[-0.52px] mt-[-0.74px] relative row-1 w-[158.679px]" style={{ maskImage: `url("${imgScreen}")` }} data-name="Screen">
                  {phone.cover ? (
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={phone.screen} />
                  ) : (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[186.46%] left-0 max-w-none top-[1.06%] w-full" src={phone.screen} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="[word-break:break-word] absolute font-[Urbanist] font-semibold leading-[0] left-[695px] text-[0px] text-white top-[157px] whitespace-nowrap" data-node-id="9316:66728">
        <span className="font-[Urbanist] font-thin leading-[1.3] text-[#a2f6c1] text-[64px]">5</span>
        <span className="leading-[1.3] text-[18px]">{` Test Missions`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-[Urbanist] font-semibold leading-[0] left-[938px] text-[0px] text-white top-[158px] whitespace-nowrap" data-node-id="9316:66729">
        <span className="font-[Urbanist] font-thin leading-[1.3] text-[#a2f6c1] text-[64px]">24</span>
        <span className="leading-[1.3] text-[18px]">{` People`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-[Urbanist] font-semibold leading-[0] left-[1160px] text-[0px] text-white top-[158px] whitespace-nowrap" data-node-id="9316:66730">
        <span className="font-[Urbanist] font-thin leading-[1.3] text-[#a2f6c1] text-[64px]">{`76% `}</span>
        <span className="leading-[1.3] text-[18px]">Usability Score</span>
      </p>
      </div>
    </section>
  );
}
