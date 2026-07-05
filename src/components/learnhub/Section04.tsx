const imgCheck = "/covers/learnhub/8faa76ef93ad9b0d523d037fb7dc7b4b23012957.svg";
const imgCross = "/covers/learnhub/feb1de80f5b5dc50406b45476567171f915654cd.svg";
const imgCheckAlt = "/covers/learnhub/c766b18fd9f192ff44723d091206b4a5fb8fc0a5.svg";

const features = [
  "Interactive Tasks",
  "Offline Mode",
  "Notifications and reminders",
  "Progress Tracking",
  "Tests and Check Ups",
  "Communication with Mentors",
  "Group Discussions",
  "Calendar",
  "Personal recomendations",
  "Synchronization",
  "Feedback from students",
];

// cell values per app column, top to bottom (true = present / check)
const columns: {
  name: string;
  total: string | number;
  cells: boolean[];
}[] = [
  {
    name: "Go IT",
    total: 6,
    cells: [true, false, true, true, true, false, false, false, false, true, false],
  },
  {
    name: "Mate",
    total: 5,
    cells: [true, false, true, true, true, false, false, false, false, true, false],
  },
  {
    name: "EdX",
    total: 3,
    cells: [false, false, true, false, false, false, false, false, false, true, true],
  },
  {
    name: "Coursera",
    total: 11,
    cells: [true, true, true, true, true, true, false, true, true, true, true],
  },
  {
    name: "LinkedIn Learning",
    total: 10,
    cells: [true, true, true, true, true, true, true, false, true, true, true],
  },
  {
    name: "BBC Learning",
    total: 7,
    cells: [true, true, true, true, true, false, false, false, true, true, false],
  },
];

function Icon({ present, alt }: { present: boolean; alt?: boolean }) {
  const src = present ? (alt ? imgCheckAlt : imgCheck) : imgCross;
  return (
    <div className="relative shrink-0 size-[32px]">
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={src}
      />
    </div>
  );
}

export default function Section04() {
  return (
    <section
      data-node-id="9316:64420"
      className="relative w-[1440px] shrink-0 bg-[#4d4f5d] overflow-hidden"
      style={{ height: 1145 }}
    >
      <div
        className="absolute inset-0"
        style={{ transform: "scale(0.88)", transformOrigin: "center center" }}
      >
      <div
        className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[40px] w-[1360px]"
        data-node-id="9316:64421"
      >
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
            <div className="border border-[#151516] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0">
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">03</p>
              </div>
            </div>
            <div className="bg-[#24242d] border-[#151516] border-[0.5px] border-solid content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[24px] py-[6px] relative rounded-[80px] shrink-0">
              <div className="[word-break:break-word] flex flex-col font-[Urbanist] font-normal justify-center leading-[0] relative shrink-0 text-[#a2f6c1] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[1.5]">Competitor Analysis</p>
              </div>
            </div>
          </div>
          <div className="h-[37px] relative shrink-0 w-[104px]" />
        </div>
        <div className="bg-[#828596] h-px relative shrink-0 w-full" />
      </div>

      <div
        className="absolute h-[875px] left-[40px] top-[166px] w-[1360px]"
        data-node-id="9316:64422"
        data-name="Competitive Analysis"
      >
        {/* Feature label column */}
        <div
          className="absolute content-stretch flex flex-col items-start left-0 top-[107px] w-[400px]"
          data-node-id="9316:64423"
          data-name="Properties"
        >
          {features.map((label) => (
            <div
              key={label}
              className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full"
              data-name="Row Property Cell"
            >
              <div className="bg-[#4d4f5d] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[20px] relative w-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-[Urbanist] font-semibold h-full leading-[1.2] min-w-px relative text-[#d9d9e6] text-[24px]">
                  {label}
                </p>
              </div>
            </div>
          ))}
          {/* Total */}
          <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full">
            <div className="bg-[#4d4f5d] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[20px] relative w-full">
              <p className="[word-break:break-word] flex-[1_0_0] font-[Urbanist] font-semibold h-full leading-[1.2] min-w-px relative text-[24px] text-white">
                Total
              </p>
            </div>
          </div>
        </div>

        {/* App columns */}
        <div
          className="absolute bg-[#4d4f5d] content-stretch flex h-[858px] items-start left-[400px] top-[17px]"
          data-node-id="9316:64436"
        >
          {columns.map((col, ci) => {
            const isLast = ci === columns.length - 1;
            const borderX = isLast
              ? "border-[#a4a7b4] border-l border-solid"
              : "border-[#a4a7b4] border-l border-r border-solid";
            return (
              <div
                key={col.name}
                className="content-stretch flex flex-col h-[858px] items-start mr-[-1px] relative shrink-0 w-[160px]"
              >
                <div
                  className={`${
                    ci === 0
                      ? "border-[#a4a7b4] border-r border-solid"
                      : borderX
                  } content-stretch flex h-[90px] min-h-px items-center justify-center px-[8px] py-[32px] relative shrink-0 w-[160px]`}
                  data-name="App"
                >
                  <p className="[word-break:break-word] font-[Urbanist] font-semibold leading-[1.3] relative shrink-0 text-[#d9d9e6] text-[20px] text-center">
                    {col.name}
                  </p>
                </div>
                {col.cells.map((present, ri) => (
                  <div
                    key={ri}
                    className={`${
                      ci === 0
                        ? "border-[#a4a7b4] border-l border-r border-solid"
                        : borderX
                    } content-stretch flex h-[64px] min-h-px items-center justify-center px-[64px] py-[32px] relative shrink-0 w-[160px]`}
                    data-name="Absent / Present"
                  >
                    <Icon present={present} alt={ci === 1 && ri === 0} />
                  </div>
                ))}
                <div
                  className={`${
                    ci === 0
                      ? "border-[#a4a7b4] border-l border-r border-solid"
                      : borderX
                  } content-stretch flex h-[64px] min-h-px items-center justify-center px-[64px] py-[32px] relative shrink-0 w-[160px]`}
                >
                  <p className="[word-break:break-word] font-[Urbanist] font-semibold leading-[1.2] relative shrink-0 text-[#d9d9e6] text-[24px] whitespace-nowrap">
                    {col.total}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Horizontal dividers — single full-width lines at each 64px row
            boundary (header divider at 106, then 12 rows). Drawn as one element
            each so they can never step at the label/app column seam. */}
        {Array.from({ length: 13 }, (_, k) => (
          <div
            key={k}
            className="absolute left-0 h-px w-[1356px] bg-[#a4a7b4]"
            style={{ top: 106 + k * 64 }}
          />
        ))}
        {/* Vertical divider between labels and apps */}
        <div
          className="absolute flex h-[858px] items-center justify-center left-[400px] top-[17px] w-px"
          data-node-id="9316:64534"
        >
          <div className="flex-none rotate-90">
            <div className="bg-[#a4a7b4] h-px relative w-[858px]" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
