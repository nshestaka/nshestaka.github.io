const imgBackground =
  "/covers/learnhub/9b32df76d5c0c8c6e1c7e5c5b2f784f0623a29dc.png";
const imgBody = "/covers/learnhub/ffad5026193dbb5cab8b8e36254dca2551046541.png";
const imgSensors = "/covers/learnhub/59e743ac16ddfe2c53ff1e1b27dda831a73af26c.png";
const imgScreenMask = "/covers/learnhub/3d03d17cab76cc8892dc7a6aed49919056a1040b.svg";

const phones = [
  {
    nodeId: "9316:67676",
    left: 40,
    screen: "/covers/learnhub/34e4726cb2d911be7b576cf6a02ace8c9231f584.png",
  },
  {
    nodeId: "9316:67677",
    left: 320,
    screen: "/covers/learnhub/c775f1f94ef279ab86f78d1849e3cf24e83802a7.png",
  },
  {
    nodeId: "9316:67678",
    left: 600,
    screen: "/covers/learnhub/969984a0279433cb863a3137927fea0c70734ae3.png",
  },
  {
    nodeId: "9316:67679",
    left: 880,
    screen: "/covers/learnhub/0abf8ff51e8d4191c8af450521a66c9edf995cfe.png",
  },
  {
    nodeId: "9316:67680",
    left: 1160,
    screen: "/covers/learnhub/cf9b1d9470a5a47c688d48f03d1a6afd17739328.png",
  },
];

export default function Section13() {
  return (
    <section
      data-node-id="9316-66731"
      className="relative w-[1440px] shrink-0 bg-white overflow-hidden"
      style={{ height: 924 }}
    >
      {/* Grey base so any area the backdrop photo doesn't cover stays grey (no white gap). */}
      <div aria-hidden className="absolute inset-0 bg-[#4d4f5d]" />
      {/* Background backdrop image with grey overlay */}
      <div
        className="absolute left-0 top-[-150px] w-[1527px] h-[970px]"
        data-node-id="9316:66732"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img
            alt=""
            className="absolute max-w-none object-cover size-full"
            src={imgBackground}
          />
          <div className="absolute bg-[rgba(77,79,93,0.4)] inset-0" />
        </div>
      </div>

      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      {/* Top pill row: "12" + "Prototyping" + divider */}
      <div
        className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[40px] w-[1360px]"
        data-node-id="9316:66737"
      >
        <div
          className="content-stretch flex items-start justify-between relative shrink-0 w-full"
          data-node-id="I9316:66737;2475:793"
        >
          <div
            className="content-stretch flex gap-[8px] items-start relative shrink-0"
            data-node-id="I9316:66737;2533:2748"
          >
            <div
              className="border border-[#151516] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0"
              data-node-id="I9316:66737;2533:1334"
            >
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">12</p>
              </div>
            </div>
            <div
              className="bg-[#24242d] border-[#151516] border-[0.5px] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0"
              data-node-id="I9316:66737;2533:2744"
            >
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">Prototyping</p>
              </div>
            </div>
          </div>
          <div
            className="h-[37px] relative shrink-0 w-[104px]"
            data-node-id="I9316:66737;2533:3017"
          />
        </div>
        <div
          className="bg-[#828596] h-px relative shrink-0 w-full"
          data-node-id="I9316:66737;2475:761"
        />
      </div>

      {/* Five iPhone 14 Pro mockups */}
      {phones.map((phone) => (
        <div
          key={phone.nodeId}
          className="absolute w-[253px] h-[513px] top-[158px]"
          style={{ left: phone.left }}
          data-node-id={phone.nodeId}
        >
          <div
            className="absolute inset-[0_0.08%_0_0.25%]"
            data-name="Body"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgBody}
            />
          </div>
          <div className="absolute contents inset-[2.13%_5.08%_2.25%_5.33%]">
            <div
              className="absolute inset-[2.13%_5.08%_2.25%_5.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]"
              style={{ maskImage: `url("${imgScreenMask}")` }}
              data-name="Screen"
            >
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute bg-white inset-0" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover size-full"
                  src={phone.screen}
                />
              </div>
            </div>
            <div
              className="absolute inset-[2.13%_5.08%_2.25%_5.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]"
              style={{ maskImage: `url("${imgScreenMask}")` }}
              data-name="Interface"
            >
              <div className="-translate-x-1/2 absolute bg-white bottom-[1.11%] left-1/2 rounded-[4px] top-[98.3%] w-[126px]" />
            </div>
          </div>
          <div
            className="absolute inset-[3.38%_35.53%_92.35%_36.04%]"
            data-name="Sensors"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgSensors}
            />
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
