import type { ReactNode } from "react";

const imgBg =
  "/covers/learnhub/d8c2b4de1d7707c902c0e43522c56ee6752d9db8.png";
const imgConnector =
  "/covers/learnhub/52c891c72927d16b06f7235fc012c26724bd89db.svg";

function JtbdColumn({
  nodeId,
  left,
  when,
  wantFixedHeight,
  want,
  soThat,
}: {
  nodeId: string;
  left: number;
  when: ReactNode;
  wantFixedHeight: boolean;
  want: ReactNode;
  soThat: ReactNode;
}) {
  return (
    <div
      className="absolute top-[166px] flex items-center"
      style={{ left }}
      data-node-id={nodeId}
    >
      <div className="flex flex-col gap-[32px] items-start">
        <div className="flex h-[95px] w-[240px] items-start rounded-[8px] bg-white p-[16px]">
          <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-[#24242d]">
            {when}
          </p>
        </div>
        <div
          className={`flex w-[240px] items-start rounded-[8px] bg-white p-[16px]${
            wantFixedHeight ? " h-[95px]" : ""
          }`}
        >
          <p className="min-w-px flex-1 font-[Urbanist] font-normal text-[14px] leading-[1.5] text-[#24242d]">
            {want}
          </p>
        </div>
        <div className="flex h-[95px] w-[240px] items-start rounded-[8px] bg-[#151516] p-[16px]">
          <p className="min-w-px flex-1 font-[Urbanist] font-normal text-[14px] leading-[1.5] text-white">
            {soThat}
          </p>
        </div>
      </div>
      {/* Dotted connector between the stacked cards */}
      <div className="relative h-[225px] w-[11px] shrink-0">
        <div className="absolute inset-[-0.44%_-9.09%_0_-9.09%]">
          <img alt="" className="block size-full max-w-none" src={imgConnector} />
        </div>
      </div>
    </div>
  );
}

export default function Section07() {
  return (
    <section
      data-node-id="9316:66083"
      className="relative w-[1440px] shrink-0 bg-[#4d4f5d] overflow-hidden"
      style={{ height: 1121 }}
    >
      {/* Bottom photo with overlay (full-bleed backdrop) */}
      <div
        className="absolute left-0 top-[595px] h-[422px] w-[1562px]"
        data-node-id="9316:66089"
      >
        <img
          alt=""
          aria-hidden
          className="absolute inset-0 size-full max-w-none object-bottom object-cover"
          src={imgBg}
        />
        <div className="absolute inset-0 bg-[rgba(77,79,93,0.4)]" />
      </div>

      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      {/* Header */}
      <div
        className="absolute left-[40px] top-[40px] flex w-[1360px] flex-col gap-[8px] items-start"
        data-node-id="9316:66088"
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex gap-[8px] items-start">
            <div className="flex h-[36px] items-center justify-center gap-[6px] rounded-[80px] border border-solid border-[#151516] px-[24px] py-[6px]">
              <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-center text-[#a2f6c1] whitespace-nowrap">
                06
              </p>
            </div>
            <div className="flex h-[36px] items-center justify-center gap-[6px] rounded-[80px] border-[0.5px] border-solid border-[#151516] bg-[#24242d] px-[24px] py-[6px]">
              <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-center text-[#a2f6c1] whitespace-nowrap">
                Jobs to Be Done
              </p>
            </div>
          </div>
          <div className="h-[37px] w-[104px]" />
        </div>
        <div className="h-px w-full bg-[#828596]" />
      </div>

      {/* JTBD columns */}
      <JtbdColumn
        nodeId="9316:66090"
        left={40}
        when={<>&ldquo;When I use learning App</>}
        wantFixedHeight={false}
        want="I want to have a flexible study schedule and access to materials at all times"
        soThat={<>{`so I can learn at a time and pace that's convenient for me”`}</>}
      />
      <JtbdColumn
        nodeId="9316:66091"
        left={320}
        when={<>&ldquo;{`When I'm studying online`}</>}
        wantFixedHeight={false}
        want="I want the ability to interact with instructors or mentors through built-in chats or forums"
        soThat={`to receive support, additional information, and timely answers to my questions."`}
      />
      <JtbdColumn
        nodeId="9316:66092"
        left={600}
        when={<>{`“When I'm studying`}</>}
        wantFixedHeight
        want=" I want to download video lectures and tutorials"
        soThat={`so I can study peacefully without the internet—whether I'm out for a walk or during sports activities."`}
      />
      <JtbdColumn
        nodeId="9316:66093"
        left={880}
        when={<>&ldquo;{`When I'm doing homework`}</>}
        wantFixedHeight
        want=" I want access to a chat with my classmates,"
        soThat={`to get advice, discuss common topics, and boost my motivation."`}
      />
      <JtbdColumn
        nodeId="9316:66094"
        left={1160}
        when={<>&ldquo;When using a learning app</>}
        wantFixedHeight
        want="I want to be able to track my progress and receive feedback"
        soThat={`to track my progress and receive feedback to see my achievements."`}
      />
      </div>
    </section>
  );
}
