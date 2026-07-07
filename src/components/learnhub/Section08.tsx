import type { CSSProperties, ReactNode } from "react";

const imgFace1 = "/covers/learnhub/2efdd56c193c74c16d067de861e8fe79989d181b.png";
const imgFace2 = "/covers/learnhub/76d7eb9c62644a74dfc6949f0d2090b99b254496.png";
const imgFace3 = "/covers/learnhub/3e131b6150f9c5042750ba3056e5656dc53d9a88.png";
const imgFace4 = "/covers/learnhub/943c3441984710de0aa7d604fa2c56f74c7a7f6c.png";
const imgEmotionLine =
  "/covers/learnhub/d854b7c4d71f907ac8199bc0305fb0a129c4d2ac.svg";

// White content card holding bulleted text.
function Card({
  nodeId,
  left,
  top,
  dark,
  children,
}: {
  nodeId: string;
  left: number;
  top: number;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute flex h-[192px] w-[240px] items-start rounded-[8px] p-[16px] ${
        dark ? "bg-[#151516]" : "bg-white"
      }`}
      style={{ left, top }}
      data-node-id={nodeId}
    >
      <div
        className={`min-w-px flex-1 font-[Urbanist] font-normal text-[14px] leading-[1.5] ${
          dark ? "text-white" : "text-[#24242d]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

// Row label in the left rail.
function RowLabel({
  nodeId,
  left,
  top,
  children,
}: {
  nodeId: string;
  left: number;
  top: number;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute flex h-[62px] w-[240px] items-center rounded-[8px] p-[8px]"
      style={{ left, top }}
      data-node-id={nodeId}
    >
      <p className="w-[103px] font-[Urbanist] font-semibold text-[18px] leading-[1.3] text-white">
        {children}
      </p>
    </div>
  );
}

// Column header along the top row.
function ColHeader({
  nodeId,
  left,
  fixedHeight,
  children,
}: {
  nodeId: string;
  left: number;
  fixedHeight?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute top-[183px] flex w-[256px] items-center justify-center rounded-[8px] p-[8px]${
        fixedHeight ? " h-[62px]" : ""
      }`}
      style={{ left }}
      data-node-id={nodeId}
    >
      <p className="min-w-px flex-1 font-[Urbanist] font-semibold text-[18px] leading-[1.3] text-white">
        {children}
      </p>
    </div>
  );
}

const emotionFaces: { node: string; src: string; style: CSSProperties }[] = [
  { node: "9316:66157", src: imgFace1, style: { left: 400, top: 908 } },
  { node: "9316:66158", src: imgFace2, style: { left: 680, top: 918 } },
  { node: "9316:66159", src: imgFace3, style: { left: 960, top: 918 } },
  { node: "9316:66160", src: imgFace4, style: { left: 1240, top: 918 } },
];

export default function Section08() {
  return (
    <section
      data-node-id="9316:66095"
      className="relative w-[1440px] shrink-0 bg-[#4d4f5d] overflow-hidden"
      style={{ height: 1309 }}
    >
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      {/* Header */}
      <div
        className="absolute left-[40px] top-[40px] flex w-[1360px] flex-col gap-[8px] items-start"
        data-node-id="9316:66102"
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex gap-[8px] items-start">
            <div className="flex h-[36px] items-center justify-center gap-[6px] rounded-[80px] border border-solid border-[#151516] px-[24px] py-[6px]">
              <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-center text-[#a2f6c1] whitespace-nowrap">
                07
              </p>
            </div>
            <div className="flex h-[36px] items-center justify-center gap-[6px] rounded-[80px] border-[0.5px] border-solid border-[#151516] bg-[#24242d] px-[24px] py-[6px]">
              <p className="font-[Urbanist] font-normal text-[14px] leading-[1.5] text-center text-[#a2f6c1] whitespace-nowrap">
                Customer Journey Map
              </p>
            </div>
          </div>
          <div className="h-[37px] w-[104px]" />
        </div>
        <div className="h-px w-full bg-[#828596]" />
      </div>

      {/* Journey label */}
      <div
        className="absolute left-[40px] top-[193px] flex items-center justify-center p-[8px]"
        data-node-id="9316:66100"
      >
        <p className="font-[Urbanist] font-semibold text-[20px] leading-[1.3] text-[#a2f6c1] whitespace-nowrap">
          Journey
        </p>
      </div>

      {/* Column headers */}
      <ColHeader nodeId="9316:66103" left={312}>
        Onboarding
      </ColHeader>
      <ColHeader nodeId="9316:66115" left={592}>
        Studying, receiving the information
      </ColHeader>
      <ColHeader nodeId="9316:66117" left={872} fixedHeight>
        Practising
      </ColHeader>
      <ColHeader nodeId="9316:66119" left={1152}>
        Knowledge assessment and implementation
      </ColHeader>

      {/* Row labels */}
      <RowLabel nodeId="9316:66105" left={40} top={285}>
        Actions
      </RowLabel>
      <RowLabel nodeId="9316:66107" left={40} top={493}>
        Pains
      </RowLabel>
      <RowLabel nodeId="9316:66109" left={40} top={701}>
        Joys
      </RowLabel>
      <RowLabel nodeId="9316:66111" left={42} top={909}>
        Emotions
      </RowLabel>
      <RowLabel nodeId="9316:66113" left={40} top={1011}>
        Solutions
      </RowLabel>

      {/* Divider lines */}
      <div
        className="absolute left-[40px] top-[243px] h-px w-[1360px] bg-[#a4a7b4]"
        data-node-id="9316:66154"
      />
      <div
        className="absolute left-[281px] top-[174px] h-[1031px] w-px bg-[#a4a7b4]"
        data-node-id="9316:66151"
      />

      {/* Actions row */}
      <Card nodeId="9316:66121" left={320} top={285}>
        <p className="mb-0">-Choose the right educational application</p>
        <p>
          -Install applications
          <br aria-hidden />
          -Test applications
        </p>
      </Card>
      <Card nodeId="9316:66123" left={600} top={285}>
        -Listen to video lectures
        <br aria-hidden />
        -Read texts and articles
        <br aria-hidden />
        -Listen to audio files
      </Card>
      <Card nodeId="9316:66125" left={880} top={285}>
        <p className="mb-0">-Do homework</p>
        <p>
          -Take interactive tests
          <br aria-hidden />
          -Ask a question to the mentor/teacher
          <br aria-hidden />
          -Chat with a community of mates
          <br aria-hidden />
          -Answer the questions
        </p>
      </Card>
      <Card nodeId="9316:66127" left={1160} top={285}>
        <p className="mb-0">
          -Apply your new knowledge
          <br aria-hidden />
          -Get a job in pursuit of new knowledge
        </p>
        <p className="mb-0">-Receive a career promotion</p>
        <p className="mb-0">-Buy another course/continue education</p>
      </Card>

      {/* Pains row */}
      <Card nodeId="9316:66147" left={320} top={493}>
        <p className="mb-0">
          -You spend a lot of time choosing
          <br aria-hidden />
          -Some applications are generally not finished, but they can already be
          downloaded
        </p>
        <p>-Registration is required every time you use the app</p>
      </Card>
      <Card nodeId="9316:66129" left={600} top={493}>
        -The app has much less functionality than the web platform
        <br aria-hidden />
        -Video lectures and content cannot be downloaded to watch without the
        Internet
      </Card>
      <Card nodeId="9316:66131" left={880} top={493}>
        -no access to chat with mentors to ask questions when I need to
        <br aria-hidden />
        -Can&rsquo;t discuss with mates
        <br aria-hidden />
        -there is no individual approach, my previous skills and background are
        not taken into account
      </Card>
      <Card nodeId="9316:66133" left={1160} top={493}>
        {`-I don't see how much I have left to study`}
      </Card>

      {/* Joys row */}
      <Card nodeId="9316:66149" left={320} top={701}>
        -A large selection of applications
      </Card>
      <Card nodeId="9316:66135" left={600} top={701}>
        -You can listen to the same information in different languages
        <br aria-hidden />
        -You can exit and enter where you left off.
      </Card>
      <Card nodeId="9316:66137" left={880} top={701}>
        -Notifications that remind you to do something
        <br aria-hidden />
        -You can choose when to study
        <br aria-hidden />
        -You look only at yourself and your progress and do not compare yourself
        with anyone
      </Card>
      <Card nodeId="9316:66139" left={1160} top={701}>
        -Studies are over, but the networking is still going on
        <br aria-hidden />
        -The community is big, you can get advice after studying
      </Card>

      {/* Emotions row — faces + dashed sentiment line */}
      <div
        className="absolute left-[400px] top-[908px]"
        data-node-id="9316:66155"
      >
        <div
          className="absolute h-[48px] w-[830.5px]"
          style={{ left: 39.5, top: 18 }}
          data-node-id="9316:66156"
        >
          <img
            alt=""
            className="block size-full max-w-none"
            src={imgEmotionLine}
          />
        </div>
      </div>
      {emotionFaces.map((f) => (
        <img
          key={f.node}
          alt=""
          data-node-id={f.node}
          className="absolute size-[80px] object-cover"
          style={f.style}
          src={f.src}
        />
      ))}

      {/* Solutions row */}
      <Card nodeId="9316:66152" left={320} top={1013} dark>
        <p className="mb-0">
          -Make it possible to trial the application without registration
          <br aria-hidden />
          -Quick registration through social accounts
        </p>
        <p>
          -Motivate users to leave reviews to make it easier for new users to
          choose the app
        </p>
      </Card>
      <Card nodeId="9316:66141" left={600} top={1013} dark>
        -Make it possible to download content (lectures, articles)
        <br aria-hidden />
        -Make the app open immediately at the place where the user stopped
        <br aria-hidden />
        -Add the ability to work in two or more languages
      </Card>
      <Card nodeId="9316:66143" left={880} top={1013} dark>
        -Make a chat with classmates
        <br aria-hidden />
        -Chat with a mentor on each topic
        <br aria-hidden />
        {`-Organize group discussions `}
        <br aria-hidden />
        -Add the ability to make notes
        <br aria-hidden />
        {`-Make motivational notifications & reminders about the user's progress`}
      </Card>
      <Card nodeId="9316:66145" left={1160} top={1013} dark>
        -Add the ability to be rated by other users
        <br aria-hidden />
        -Leave the possibility of general chat even after training
        <br aria-hidden />
        -Motivate users to leave reviews to make it easier for new users to
        choose the app
      </Card>
      </div>
    </section>
  );
}
