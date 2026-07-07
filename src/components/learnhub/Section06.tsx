import type { ReactNode } from "react";

const imgBg =
  "/covers/learnhub/fb05a0b880e9169161a3d8da2974019bfa40f315.png";
const imgFace1 = "/covers/learnhub/6ac9a387578a6858080c82c45070928cc661284c.png";
const imgFace2 = "/covers/learnhub/06663d6a160b33b2721e1d2c323aee6accf0dda9.png";
const imgFace3 = "/covers/learnhub/a51584512bd8201dca75edebd913edc9ff552824.png";
const imgFace4 = "/covers/learnhub/8d81e5f5cdc968c59aab808cde95006e3cad87c6.png";
const imgFace5 = "/covers/learnhub/ac31f210c203c245f7d3bf40bc85d50a00791628.png";
const imgQuoteMark = "/covers/learnhub/3201f555c9e5b3d573d635ddec2dd4e222b353d4.svg";

const g = "text-[#4fb993]"; // inline highlight green

function QuoteCard({
  nodeId,
  left,
  top,
  face,
  adjective,
  name,
  role,
  quote,
}: {
  nodeId: string;
  left: number;
  top: number;
  face: string;
  adjective: string;
  name: string;
  role: string;
  quote: ReactNode;
}) {
  return (
    <div
      className="absolute flex w-[240px] flex-col items-center gap-[16px] rounded-[24px] border border-solid border-[#a4a7b4] bg-white px-[16px] pt-[16px] pb-[24px]"
      style={{ left, top }}
      data-node-id={nodeId}
    >
      <div className="flex w-full items-center gap-[4px]">
        <img
          alt=""
          className="size-[40px] shrink-0"
          width={40}
          height={40}
          src={face}
        />
        <div className="flex min-w-px flex-1 flex-col items-start text-[#4d4f5d]">
          <p className="font-[Urbanist] font-semibold text-[18px] leading-[1.3] whitespace-nowrap">
            <span className="text-[#a2f6c1]">{adjective}</span>
            <span>{` ${name}`}</span>
          </p>
          <p className="w-[127px] font-[Urbanist] font-normal text-[14px] leading-[1.5]">
            {role}
          </p>
        </div>
      </div>
      <div className="flex w-full items-start gap-[16px] pl-[8px]">
        <img
          alt=""
          className="h-[14px] w-[24px] shrink-0"
          src={imgQuoteMark}
        />
        <p className="min-w-px flex-1 font-[Urbanist] font-normal text-[14px] leading-[1.5] text-[#4d4f5d]">
          {quote}
        </p>
      </div>
    </div>
  );
}

export default function Section06() {
  return (
    <section
      data-node-id="9316:66070"
      className="relative w-[1440px] shrink-0 bg-[#4d4f5d] overflow-hidden"
      style={{ height: 926 }}
    >
      {/* Background photo with overlay */}
      <div
        className="absolute h-[941px] w-[1459.756px]"
        style={{ left: -12, top: -119 }}
        data-node-id="9316:66075"
      >
        <img
          alt=""
          aria-hidden
          className="absolute inset-0 size-full max-w-none object-cover"
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
        data-node-id="9316:66077"
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex gap-[8px] items-start">
            <div className="flex h-[36px] items-center justify-center gap-[6px] rounded-[80px] border border-solid border-[#151516] px-[24px] py-[6px]">
              <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-center text-[#a2f6c1] whitespace-nowrap">
                05
              </p>
            </div>
            <div className="flex h-[36px] items-center justify-center gap-[6px] rounded-[80px] border-[0.5px] border-solid border-[#151516] bg-[#24242d] px-[24px] py-[6px]">
              <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-center text-[#a2f6c1] whitespace-nowrap">
                In-depth Interview
              </p>
            </div>
          </div>
          <div className="h-[37px] w-[104px]" />
        </div>
      </div>

      {/* Quote cards */}
      <QuoteCard
        nodeId="9316:66080"
        left={40}
        top={264}
        face={imgFace3}
        adjective="Talkative"
        name="Kate"
        role="Doctor (29 y.o.) "
        quote={
          <>
            {`I enjoy I could study at any time and place and have access to materials and assignments. The greatest advantage of using these applications was their flexibility and interactivity. They allowed you to learn at your own pace, complete tasks, test your knowledge and `}
            <span className={g}>receive instant feedback</span>
            {` on your results. They could also provide access to resources that I could `}
            <span className={g}>study anywhere</span>
            {`, anytime.`}
          </>
        }
      />
      <QuoteCard
        nodeId="9316:66081"
        left={320}
        top={166}
        face={imgFace4}
        adjective="Ambitious"
        name="Andrew"
        role="Marketer (35 y.o.) "
        quote={
          <>
            {`In some educational apps, I lacked interactivity and `}
            <span className={g}>interaction with teachers</span>
            {`. I wanted more opportunities to `}
            <span className={g}>communicate</span>
            {` and discuss materials `}
            <span className={g}>with other users.</span>
          </>
        }
      />
      <QuoteCard
        nodeId="9316:66082"
        left={600}
        top={403}
        face={imgFace5}
        adjective="Meaningful"
        name="David"
        role="Engineer (40y.o.) "
        quote={
          <>
            {`I felt the `}
            <span className={g}>{`lack of communication with a "live" mentor`}</span>
            {` who would know me, guide me, know my strengths and weaknesses and take into account my goals, my background and help me in my studies`}
          </>
        }
      />
      <QuoteCard
        nodeId="9316:66079"
        left={880}
        top={166}
        face={imgFace2}
        adjective="Reasonable"
        name="Anna"
        role="CEO (44y.o.) "
        quote={
          <>
            {`There was not enough of an `}
            <span className={g}>individual approach</span>
            {`, many courses do not take into account your background, you think that something has been chosen for you according to your needs, and then you find out that it is not so, the level of language knowledge, beginners in business also all come with different levels of experience, someone needs lectures and community, and for someone - tables and analytics`}
          </>
        }
      />
      <QuoteCard
        nodeId="9316:66078"
        left={1160}
        top={403}
        face={imgFace1}
        adjective="Cheerfull"
        name="Alex"
        role="Student (24 y.o.) "
        quote={
          <>
            {`I DO like how we `}
            <span className={g}>exchange experience</span>
            {`, advice and help each other in learning. I participated in `}
            <span className={g}>discussions</span>
            {` on forums and shared my achievements with other users.`}
          </>
        }
      />
      </div>
    </section>
  );
}
