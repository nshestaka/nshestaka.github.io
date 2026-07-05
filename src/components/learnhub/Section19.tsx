const imgBody = "/covers/learnhub/1c65fbcdb386edcc71c73c58db7142789b37cbfb.png";
const imgMask = "/covers/learnhub/d3bedf2de038f037d753351b519cb9de12a1a6ab.png";
const imgScreen1 = "/covers/learnhub/6af61fe2f1e69ea3eb2c3b5ffcbd3a8735f6c26a.png";
const imgScreen2 = "/covers/learnhub/13e6c947bcdc29165d583b935edeae55b80e08c7.png";
const imgScreen3 = "/covers/learnhub/7ff8afc339f5ae46a546451c238ada2dd69ff8bb.png";
const imgScreen4 = "/covers/learnhub/50e721161e668124913b3cfa778a990584218aa2.png";

type PhoneProps = {
  nodeId: string;
  left: number;
  top: number;
  screen: string;
};

function Phone({ nodeId, left, top, screen }: PhoneProps) {
  return (
    <div
      className="absolute contents"
      style={{ left, top }}
      data-node-id={nodeId}
    >
      <div className="absolute size-[700px]" style={{ left, top }}>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgBody}
        />
      </div>
      <div
        className="absolute h-[622.3px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-203.93px_-38.734px] mask-size-[700px_700px] w-[288.517px]"
        style={{ left: left + 203.93, top: top + 38.73, maskImage: `url("${imgMask}")` }}
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          height="622.3"
          src={screen}
          width="288.517"
        />
      </div>
    </div>
  );
}

export default function Section19() {
  return (
    <section
      data-node-id="9316:69505"
      className="relative w-[1440px] shrink-0 bg-[#4d4f5d] overflow-hidden"
      style={{ height: 1182 }}
    >
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      <div
        className="absolute content-stretch flex items-center left-[40px] p-[8px] top-[166px] w-[800px]"
        data-node-id="9316:69506"
      >
        <p
          className="[word-break:break-word] flex-[1_0_0] font-[Urbanist] font-semibold leading-[0] min-w-px relative text-[#d9d9e6] text-[18px]"
          data-node-id="9316:69507"
        >
          <span className="leading-[1.6]">{`The onboarding process for the LearnHub app was carefully `}</span>
          <span className="leading-[1.6] text-[#a2f6c1]">
            designed to guide users effortlessly into their educational proccess
          </span>
          <span className="leading-[1.6]">{`. Through a series of interactive screens, users were asked to enter counrty, language of studying and their career goals `}</span>
          <span className="leading-[1.6]">{`so that they could receive their `}</span>
          <span className="leading-[1.6] text-[#a2f6c1]">
            Personal Recommendations According their Learning Path
          </span>
          <span className="leading-[1.6]">.</span>
        </p>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] top-[40px] w-[1360px]"
        data-node-id="9316:69508"
      >
        <div
          className="content-stretch flex items-start justify-between relative shrink-0 w-full"
          data-node-id="I9316:69508;2475:793"
        >
          <div
            className="content-stretch flex gap-[8px] items-start relative shrink-0"
            data-node-id="I9316:69508;2533:2748"
          >
            <div
              className="border border-[#151516] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0"
              data-node-id="I9316:69508;2533:1334"
            >
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">18</p>
              </div>
            </div>
            <div
              className="bg-[#24242d] border-[#151516] border-[0.5px] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0"
              data-node-id="I9316:69508;2533:2744"
            >
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">Onboarding</p>
              </div>
            </div>
          </div>
          <div className="h-[37px] relative shrink-0 w-[104px]" data-node-id="I9316:69508;2533:3017" />
        </div>
        <div className="bg-[#828596] h-px relative shrink-0 w-full" data-node-id="I9316:69508;2475:761" />
      </div>
      <div className="absolute contents left-[-152px] top-[378px]" data-node-id="9316:69509">
        <Phone nodeId="9316:69510" left={-152} top={378} screen={imgScreen1} />
        <Phone nodeId="9316:69515" left={197} top={378} screen={imgScreen2} />
        <Phone nodeId="9316:69520" left={546} top={378} screen={imgScreen3} />
        <Phone nodeId="9316:69525" left={895} top={378} screen={imgScreen4} />
      </div>
      </div>
    </section>
  );
}
