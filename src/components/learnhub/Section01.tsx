const imgBackground = "/covers/learnhub/5dc824314e6efc4013ade4b2e58fee978ecba350.png";
const imgIPhone12Pro = "/covers/learnhub/ed700e63d0c7bed13469b64ff3830ee5cfd6da37.png";
const imgShadow = "/covers/learnhub/9c6d5dffc2b25ab426365e8a093f6fb2d70454db.svg";
const imgMock = "/covers/learnhub/1a2c85cb32f3e8c46d1c4f54adf6954622ada9e4.svg";
// Flat light "Search" app screen (Figma node 9323-73580) shown inside the phone.
const imgScreen =
  "/covers/learnhub/63b1d0d752cbd6a823c5dbe330c51e71d6ff8b8e.png";
const imgGroup413 = "/covers/learnhub/64455f20b51385c260f0d19b19fb4ce74ff34b9d.svg";
const imgGroup = "/covers/learnhub/003cae9f7abdc36742004013b9c35bf9b28974d9.svg";
const imgGroup1 = "/covers/learnhub/7a8733ca90ebf31252b71ace9fa17d877e425c0c.svg";
const imgGroup2 = "/covers/learnhub/e52b178027d37b1ed4d4beaef4488556dd5180c6.svg";
const imgLearn = "/covers/learnhub/c4e143e00a9c50fafebe8535dff46c859919cae3.svg";
const imgHub = "/covers/learnhub/4bb483176d19f824aca6740a3a8a2cae8bd16092.svg";

export default function Section01() {
  return (
    <section
      data-node-id="9316:64346"
      className="relative w-[1440px] shrink-0 bg-white overflow-hidden"
      style={{ height: 800 }}
    >
      <div
        className="absolute h-[834.625px] left-0 top-[-34.63px] w-[1440px]"
        data-node-id="9316:64347"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgBackground}
        />
      </div>
      <div
        className="absolute h-[420.5px] left-[912.5px] top-[123.5px] w-[250.5px]"
        data-node-id="9316:64348"
        data-name="Shadow"
      >
        <div className="absolute inset-[-4.76%_-63.87%_-28.54%_0]">
          <img alt="" className="block max-w-none size-full" src={imgShadow} />
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      <div
        className="absolute left-[758px] overflow-clip size-[642px] top-[11px]"
        data-node-id="9316:64349"
        data-name="iPhone12pro"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgIPhone12Pro}
        />
        <div
          className="absolute flex inset-[15.77%_26.73%_15.3%_23.64%] items-center justify-center"
          data-node-id="I9316:64349;65:468"
          style={{ containerType: "size" }}
        >
          <div
            className="flex-none h-[100cqh] w-[100cqw] relative"
            data-name="mock"
            style={{
              transform: "scaleX(-1)",
              WebkitMaskImage: `url("${imgMock}")`,
              maskImage: `url("${imgMock}")`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            {/* The source PNG is stored horizontally mirrored; the wrapper's
                scaleX(-1) both un-mirrors it and flips the mask to match the
                device screen — so the image itself needs no extra transform. */}
            <img
              alt="LearnHub Search screen"
              className="absolute inset-0 size-full object-cover object-top"
              src={imgScreen}
            />
          </div>
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-[Urbanist] font-normal leading-[1.5] left-[calc(50%-0.5px)] text-[#4d4f5d] text-[14px] text-center top-[40px] whitespace-nowrap"
        data-node-id="9316:64350"
      >
        UX/UI case study
      </p>
      <p
        className="[word-break:break-word] absolute font-[Urbanist] font-normal leading-[1.2] left-[160px] text-[#24242d] text-[18px] top-[287px] w-[397px]"
        data-node-id="9316:64351"
      >
        Your personal career couch crafted to provide industry-specific
        knowledge, skill-building exercises, and strategic tools that propel your
        professional growth forward.
      </p>
      <div
        className="absolute border-[#828596] border-[0.5px] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center left-[160px] overflow-clip px-[16px] py-[6px] rounded-[80px] top-[400px]"
        data-node-id="9316:64352"
        data-name="Small Button"
      >
        <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#151516] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">Educational App</p>
        </div>
      </div>
      <div
        className="absolute border-[#828596] border-[0.5px] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center left-[317px] overflow-clip px-[16px] py-[6px] rounded-[80px] top-[400px]"
        data-node-id="9316:64353"
        data-name="Small Button"
      >
        <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#151516] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">Career oriented</p>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-1/2 top-[32px] w-[1360px]"
        data-node-id="9316:64354"
      >
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1360px]">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0">
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4f5d] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">Shestaka Natalia</p>
              </div>
            </div>
          </div>
          <div className="h-[37px] relative shrink-0 w-[104px]" />
        </div>
        <div className="bg-[#828596] h-px relative shrink-0 w-full" />
      </div>
      <div
        className="absolute content-stretch flex flex-col items-start left-[160px] py-[8px] rounded-[80px] top-[195px]"
        data-node-id="9316:64355"
      >
        <div
          className="content-stretch flex gap-[8px] h-[60px] items-center justify-center relative shrink-0"
          data-node-id="9316:64356"
          data-name="LearnHub"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-node-id="9316:64357"
          >
            <div
              className="col-1 h-[60.524px] ml-0 mt-0 relative row-1 w-[53.997px]"
              data-node-id="9316:64358"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgGroup413}
              />
            </div>
            <div
              className="col-1 h-[14.247px] mix-blend-overlay ml-0 mt-[2.34px] relative row-1 w-[12.137px]"
              data-node-id="9316:64362"
              data-name="Group"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgGroup}
              />
            </div>
            <div
              className="col-1 h-[15.259px] mix-blend-overlay ml-[18.75px] mt-[9.76px] relative row-1 w-[9.058px]"
              data-node-id="9316:64364"
              data-name="Group"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgGroup1}
              />
            </div>
            <div
              className="col-1 h-[15.108px] mix-blend-overlay ml-[37.6px] mt-0 relative row-1 w-[9.217px]"
              data-node-id="9316:64366"
              data-name="Group"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgGroup2}
              />
            </div>
          </div>
          <div
            className="h-[21.754px] relative shrink-0 w-[80.001px]"
            data-node-id="9316:64368"
            data-name="Learn"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgLearn}
            />
          </div>
          <div
            className="h-[21.635px] relative shrink-0 w-[63.003px]"
            data-node-id="9316:64374"
            data-name="HUB"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgHub}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
