const imgBody = "/covers/learnhub/1c65fbcdb386edcc71c73c58db7142789b37cbfb.png";
const imgMask = "/covers/learnhub/7d96ac48622a589ff14fef6c5cc7a5da979b5a68.png";
const imgScreen1 = "/covers/learnhub/b60e03b5acbed071828ced0096c6021de7f6d54b.png";
const imgScreen2 = "/covers/learnhub/64b56db3305b345fe680d1151c9420910f2edd0a.png";
const imgScreen3 = "/covers/learnhub/ea2cfc6525829daa38e5bc08479e62c20ff47380.png";
const imgScreen4 = "/covers/learnhub/7887ee23205afdd9ca78bdfe0575e1f9c9540fe9.png";
const imgScreen5 = "/covers/learnhub/3539823cccedd239cbdc88f60eb8f5db3c0e5d84.png";

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
      <div
        className="absolute size-[550px]"
        style={{ left, top }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgBody}
        />
      </div>
      <div
        className="absolute h-[488.95px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-160.234px_-30.436px] mask-size-[550px_550px] w-[226.692px]"
        style={{ left: left + 160.23, top: top + 30.43, maskImage: `url("${imgMask}")` }}
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          height="488.95"
          src={screen}
          width="226.692"
        />
      </div>
    </div>
  );
}

export default function Section18() {
  return (
    <section
      data-node-id="9316:69470"
      className="relative w-[1440px] shrink-0 bg-[#4d4f5d] overflow-hidden"
      style={{ height: 1162 }}
    >
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      <div
        className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] top-[40px] w-[1360px]"
        data-node-id="9316:69471"
      >
        <div
          className="content-stretch flex items-start justify-between relative shrink-0 w-full"
          data-node-id="I9316:69471;2475:793"
        >
          <div
            className="content-stretch flex gap-[8px] items-start relative shrink-0"
            data-node-id="I9316:69471;2533:2748"
          >
            <div
              className="border border-[#151516] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0"
              data-node-id="I9316:69471;2533:1334"
            >
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">17</p>
              </div>
            </div>
            <div
              className="bg-[#24242d] border-[#151516] border-[0.5px] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0"
              data-node-id="I9316:69471;2533:2744"
            >
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">Registration</p>
              </div>
            </div>
          </div>
          <div className="h-[37px] relative shrink-0 w-[104px]" data-node-id="I9316:69471;2533:3017" />
        </div>
        <div className="bg-[#828596] h-px relative shrink-0 w-full" data-node-id="I9316:69471;2475:761" />
      </div>
      <div
        className="absolute content-stretch flex items-center left-[40px] p-[8px] top-[166px] w-[800px]"
        data-node-id="9316:69472"
      >
        <p
          className="[word-break:break-word] flex-[1_0_0] font-[Urbanist] font-semibold leading-[1.6] min-w-px relative text-[#d9d9e6] text-[18px] whitespace-pre-wrap"
          data-node-id="9316:69473"
        >{`User can log in or register using their email or social media. The login/ registration step is not mandatory so that user can surf tha app and take a look on the courses  but since some features in the app require user's personal information (notifications, personal career recommendations, enrolling and payment options) user need to register.`}</p>
      </div>
      <div className="absolute contents left-[48px] top-[437px]" data-node-id="9316:69474">
        <div
          className="absolute bg-[#d9d9d9] h-[450px] left-[48px] shadow-[70px_50px_45px_5px_rgba(13,13,36,0.7)] top-[437px] w-[219px]"
          data-node-id="9316:69475"
        />
        <div
          className="absolute bg-[#d9d9d9] h-[438px] left-[335px] shadow-[70px_50px_45px_5px_rgba(13,13,36,0.7)] top-[513px] w-[220px]"
          data-node-id="9316:69476"
        />
        <div
          className="absolute bg-[#d9d9d9] h-[450px] left-[613px] shadow-[70px_50px_45px_5px_rgba(13,13,36,0.7)] top-[440px] w-[219px]"
          data-node-id="9316:69477"
        />
        <div
          className="absolute bg-[#d9d9d9] h-[438px] left-[890px] shadow-[70px_50px_45px_5px_rgba(13,13,36,0.7)] top-[513px] w-[220px]"
          data-node-id="9316:69478"
        />
        <div
          className="absolute bg-[#d9d9d9] h-[450px] left-[1167px] shadow-[70px_50px_45px_5px_rgba(13,13,36,0.7)] top-[440px] w-[219px]"
          data-node-id="9316:69479"
        />
      </div>
      <Phone nodeId="9316:69480" left={-113} top={378} screen={imgScreen1} />
      <Phone nodeId="9316:69485" left={448} top={378} screen={imgScreen2} />
      <Phone nodeId="9316:69490" left={1006} top={378} screen={imgScreen3} />
      <Phone nodeId="9316:69495" left={170} top={458} screen={imgScreen4} />
      <Phone nodeId="9316:69500" left={731} top={458} screen={imgScreen5} />
      </div>
    </section>
  );
}
