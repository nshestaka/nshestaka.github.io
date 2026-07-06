import {
  ArrowUpRight,
  Building2,
  Check,
  Clock3,
  Eye,
  EyeOff,
  Gauge,
  Lock,
  MessageSquare,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCircle2,
  X,
} from 'lucide-react'

/**
 * Case study — "Two-Audience Commenting".
 *
 * A fully self-contained artifact. Design language is intentionally distinct
 * from the rest of the portfolio (Linear / Vercel / Resend): white surface,
 * Inter, tight tracking, electric blue for the *internal* lane and warm amber
 * for the *vendor-facing* lane. No gradients, no heavy shadows.
 *
 * The whole component is scoped to `font-[Inter]` and a near-white base so it
 * can be dropped anywhere without inheriting the host page's typography.
 */

const BLUE = '#2563EB' // electric blue — internal lane
const AMBER = '#D97706' // warm amber — vendor-facing lane

// ── small primitives ──────────────────────────────────────────────────────

/** Minimal Figma-style callout: a thin line + uppercase label. */
function Annotation({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
      <span className="h-px w-6 bg-neutral-300" />
      {children}
    </div>
  )
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="text-[12px] font-semibold tabular-nums text-neutral-300">{index}</span>
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {children}
      </h2>
    </div>
  )
}

function LaneDot({ tone }: { tone: 'internal' | 'vendor' }) {
  return (
    <span
      className="inline-block h-2 w-2 shrink-0 rounded-full"
      style={{ backgroundColor: tone === 'internal' ? BLUE : AMBER }}
    />
  )
}

// ── 1. Hero ────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <header className="border-b border-neutral-200/80 px-6 pt-20 pb-16 md:px-12 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[12px] font-medium text-neutral-600">
          <ShieldCheck className="h-3.5 w-3.5" style={{ color: BLUE }} />
          Senior Product Designer
          <span className="text-neutral-300">·</span>
          <span className="text-neutral-400">NDA Project</span>
        </div>

        <h1 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-neutral-900 md:text-5xl md:leading-[1.08]">
          Designing role-aware comment visibility so reviewers can be candid without leaking
          internal critique
        </h1>

        <p className="mt-6 text-[15px] font-medium tracking-tight text-neutral-500">
          Enterprise portal
          <span className="mx-2 text-neutral-300">·</span>
          Evaluation tools
          <span className="mx-2 text-neutral-300">·</span>
          Role-based UX
        </p>

        {/* Two-lane motif, established immediately */}
        <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-2">
          <div
            className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3"
            style={{ borderColor: '#DBE5FF' }}
          >
            <Lock className="h-4 w-4" style={{ color: BLUE }} />
            <div>
              <div className="text-[13px] font-semibold text-neutral-800">Internal lane</div>
              <div className="text-[12px] text-neutral-500">Candid, reviewer-only critique</div>
            </div>
          </div>
          <div
            className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3"
            style={{ borderColor: '#F4E3C4' }}
          >
            <Send className="h-4 w-4" style={{ color: AMBER }} />
            <div>
              <div className="text-[13px] font-semibold text-neutral-800">Vendor-facing lane</div>
              <div className="text-[12px] text-neutral-500">Structured, shareable clarification</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// ── 2. Personas ──────────────────────────────────────────────────────────

const personas = [
  {
    name: 'SME Reviewer',
    role: 'Subject-matter expert',
    icon: UserCircle2,
    tone: 'internal' as const,
    summary:
      'A technical expert whose opinions carry the most weight in a decision — and who stays quiet the moment the audience is unclear.',
    traits: [
      'Deep domain expertise, sharp judgement',
      'High-value, high-stakes opinions',
      'Self-censors when unsure who is reading',
    ],
    quote: '“If I can’t tell who sees this, I’ll just say nothing.”',
  },
  {
    name: 'Vendor Representative',
    role: 'External submitter',
    icon: Building2,
    tone: 'vendor' as const,
    summary:
      'Submitted weeks ago and has heard little since. Wants a clear, structured channel to answer questions — not silence or a wall of internal jargon.',
    traits: [
      'Submitted weeks ago, awaiting signal',
      'Feels out of the loop on status',
      'Needs structured, answerable clarification',
    ],
    quote: '“I just want to know what they need from me, and by when.”',
  },
]

function Personas() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="02">Who we designed for</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2">
          {personas.map((p) => {
            const accent = p.tone === 'internal' ? BLUE : AMBER
            const Icon = p.icon
            return (
              <article
                key={p.name}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: p.tone === 'internal' ? '#EEF3FF' : '#FBF1DF' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accent }} />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-tight text-neutral-900">
                      {p.name}
                    </h3>
                    <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                      {p.role}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[14px] leading-relaxed text-neutral-600">{p.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {p.traits.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[13px] text-neutral-700">
                      <LaneDot tone={p.tone} />
                      <span className="-mt-0.5">{t}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className="mt-6 border-l-2 pl-4 text-[14px] font-medium italic leading-snug text-neutral-700"
                  style={{ borderColor: accent }}
                >
                  {p.quote}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── 3. User stories ────────────────────────────────────────────────────────

const stories = [
  {
    persona: 'SME Reviewer',
    tone: 'internal' as const,
    need: 'a private space to flag concerns only other reviewers can see',
    outcome: 'I can be fully candid without the vendor reading my critique',
    theme: 'Candor',
  },
  {
    persona: 'Domain Leader',
    tone: 'internal' as const,
    need: 'to see who a comment is visible to before I post it',
    outcome: 'I never accidentally leak an internal assessment to the vendor',
    theme: 'Visibility control',
  },
  {
    persona: 'Vendor Representative',
    tone: 'vendor' as const,
    need: 'a structured place to receive and answer clarifying questions',
    outcome: 'I can respond precisely instead of guessing what reviewers want',
    theme: 'Vendor communication',
  },
  {
    persona: 'General User',
    tone: 'internal' as const,
    need: 'to only see submissions and threads within my domain',
    outcome: 'my feed stays relevant and confidential to my area',
    theme: 'Domain-scoped access',
  },
]

function UserStories() {
  return (
    <section className="border-t border-neutral-200/80 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="03">User stories</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
          {stories.map((s) => {
            const accent = s.tone === 'internal' ? BLUE : AMBER
            return (
              <div key={s.theme} className="bg-white p-7">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: accent }}
                  >
                    <LaneDot tone={s.tone} />
                    {s.theme}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-neutral-700">
                  <span className="text-neutral-400">As a</span>{' '}
                  <span className="font-semibold text-neutral-900">{s.persona}</span>
                  <span className="text-neutral-400">, I need</span> {s.need}
                  <span className="text-neutral-400"> so that</span> {s.outcome}
                  <span className="text-neutral-400">.</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── 4. Customer journey map ──────────────────────────────────────────────

type Stage = {
  label: string
  actor: 'reviewer' | 'vendor' | 'system'
  pain?: string
  intervention?: string
  emotion: number // 0..1, height of the curve
}

const stages: Stage[] = [
  {
    label: 'Receive submission',
    actor: 'system',
    emotion: 0.55,
  },
  {
    label: 'Open review thread',
    actor: 'reviewer',
    pain: 'One blended thread — unclear who can see what',
    emotion: 0.35,
  },
  {
    label: 'Write comment',
    actor: 'reviewer',
    pain: 'Reviewers self-censor, unsure of the audience',
    intervention: 'Audience-aware compose state, set before typing',
    emotion: 0.25,
  },
  {
    label: 'Publish',
    actor: 'reviewer',
    intervention: 'Lane is explicit & color-coded at the moment of posting',
    emotion: 0.6,
  },
  {
    label: 'Vendor reads / responds',
    actor: 'vendor',
    pain: 'Vendor feels out of the loop, replies are unstructured',
    intervention: 'Vendor reply framing + unread counts at card level',
    emotion: 0.7,
  },
  {
    label: 'Decision reached',
    actor: 'system',
    intervention: 'Domain-scoped feed keeps the record clean',
    emotion: 0.9,
  },
]

function EmotionCurve() {
  // Build a smooth-ish polyline across evenly spaced stages.
  const w = 100
  const h = 100
  const pts = stages.map((s, i) => {
    const x = (i / (stages.length - 1)) * w
    const y = h - s.emotion * h
    return [x, y] as const
  })
  const d = pts
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(' ')

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <path d={d} fill="none" stroke={BLUE} strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1" fill={BLUE} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  )
}

function JourneyMap() {
  return (
    <section className="border-t border-neutral-200/80 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04">Customer journey</SectionLabel>

        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-neutral-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500" /> Pain point
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BLUE }} /> Design
            intervention
          </span>
          <span className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5" style={{ color: BLUE }} /> Emotional curve
          </span>
        </div>

        {/* Emotion curve band */}
        <div className="relative mb-3 h-16 w-full rounded-xl border border-neutral-200 bg-white">
          <EmotionCurve />
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-6">
          {stages.map((s, i) => (
            <div key={s.label} className="flex min-h-[200px] flex-col bg-white p-5">
              <div className="flex items-center gap-2 text-[11px] font-semibold tabular-nums text-neutral-300">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-1 text-[14px] font-semibold leading-snug tracking-tight text-neutral-900">
                {s.label}
              </h3>

              <div className="mt-4 flex flex-1 flex-col gap-3">
                {s.pain && (
                  <div className="rounded-lg bg-red-50 px-3 py-2.5">
                    <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-red-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Pain
                    </div>
                    <p className="text-[12px] leading-snug text-red-900/80">{s.pain}</p>
                  </div>
                )}
                {s.intervention && (
                  <div className="rounded-lg px-3 py-2.5" style={{ backgroundColor: '#EEF3FF' }}>
                    <div
                      className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em]"
                      style={{ color: BLUE }}
                    >
                      <Sparkles className="h-3 w-3" /> Fix
                    </div>
                    <p className="text-[12px] leading-snug text-neutral-700">{s.intervention}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 5. Insight callout ─────────────────────────────────────────────────────

function Insight() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-4xl">
        <Quote className="h-8 w-8 text-neutral-300" />
        <blockquote className="mt-6 text-balance text-3xl font-semibold leading-[1.18] tracking-[-0.02em] text-neutral-900 md:text-[44px] md:leading-[1.12]">
          Reviewers want{' '}
          <span className="relative whitespace-nowrap">
            one place to talk
          </span>{' '}
          — but{' '}
          <span style={{ color: BLUE }}>two visibility lanes</span> that{' '}
          <span style={{ color: AMBER }}>never blur</span>.
        </blockquote>
        <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.16em] text-neutral-400">
          The core insight
        </p>
      </div>
    </section>
  )
}

// ── 6. Design decisions ────────────────────────────────────────────────────

const decisions = [
  {
    title: 'Dual-lane comments',
    icon: MessageSquare,
    chose:
      'A single thread with two visibility lanes — internal (blue) and vendor-facing (amber) — interleaved by time.',
    rejected: 'Two separate tabs or threads forcing reviewers to context-switch.',
    why: 'Earlier tools split the conversation and the strongest reviewers stopped posting. One timeline keeps context; color keeps the boundary.',
  },
  {
    title: 'Audience-aware compose state',
    icon: Eye,
    chose:
      'The composer adopts the lane’s color and shows exactly who will see the comment — before a word is typed.',
    rejected: 'A post-hoc “share with vendor?” checkbox after writing.',
    why: 'SMEs self-censor when the audience is ambiguous. Declaring the lane up front removes the hesitation that silenced them.',
  },
  {
    title: 'Vendor reply framing',
    icon: Send,
    chose:
      'Vendor replies render as structured clarifications anchored to the reviewer’s question, in the amber lane only.',
    rejected: 'A free-form chat box mixed into the reviewer timeline.',
    why: 'Vendors needed to answer precisely; reviewers needed vendor input to never bleed into internal critique.',
  },
  {
    title: 'Domain-scoped feeds',
    icon: ShieldCheck,
    chose:
      'Each role sees only the submissions and threads within their domain by default.',
    rejected: 'A global feed with manual filtering.',
    why: 'General users were overwhelmed and confidentiality leaked across domains. Scoping by default made relevance the baseline, not a chore.',
  },
  {
    title: 'Unread count at card level',
    icon: Gauge,
    chose:
      'Per-lane unread badges surface on the submission card, so reviewers see internal vs. vendor activity at a glance.',
    rejected: 'A single combined notification number.',
    why: 'A blended count hid which lane needed attention — vendors waited while reviewers missed time-sensitive internal flags.',
  },
]

function DecisionCard({ d }: { d: (typeof decisions)[number] }) {
  const Icon = d.icon
  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
          <Icon className="h-4.5 w-4.5 text-neutral-700" />
        </span>
        <h3 className="text-[16px] font-semibold tracking-tight text-neutral-900">{d.title}</h3>
      </div>

      <dl className="mt-6 space-y-5">
        <div>
          <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-600">
            <Check className="h-3.5 w-3.5" /> What I chose
          </dt>
          <dd className="mt-1.5 text-[13px] leading-relaxed text-neutral-700">{d.chose}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
            <X className="h-3.5 w-3.5" /> What I rejected
          </dt>
          <dd className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">{d.rejected}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
            <span className="h-px w-3.5 bg-neutral-300" /> Why
          </dt>
          <dd className="mt-1.5 text-[13px] leading-relaxed text-neutral-600">{d.why}</dd>
        </div>
      </dl>
    </article>
  )
}

function DesignDecisions() {
  return (
    <section className="border-t border-neutral-200/80 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="06">Design decisions</SectionLabel>
        <Annotation>Chose · Rejected · Why — not a feature list</Annotation>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {decisions.map((d) => (
            <DecisionCard key={d.title} d={d} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 7. Metrics framework ───────────────────────────────────────────────────

const metrics = [
  {
    label: 'Reviewer comment rate',
    before: 'Low',
    after: 'High',
    delta: '+2.3×',
    note: 'Comments per active reviewer per submission',
    icon: MessageSquare,
    good: true,
  },
  {
    label: 'Feedback quality score',
    before: 'Hedged',
    after: 'Candid',
    delta: 'Qualitative',
    note: 'SME-rated signal on how candid threads read',
    icon: ShieldCheck,
    good: true,
  },
  {
    label: 'Vendor clarification response time',
    before: '~6 days',
    after: '~1.5 days',
    delta: '−74%',
    note: 'Submission of question → vendor reply',
    icon: Clock3,
    good: true,
  },
  {
    label: 'Time-to-decision',
    before: 'Baseline',
    after: 'Faster',
    delta: '−31%',
    note: 'Thread opened → decision reached',
    icon: Gauge,
    good: true,
  },
]

function Metrics() {
  return (
    <section className="border-t border-neutral-200/80 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="07">Metrics framework</SectionLabel>
        <Annotation>Before → after &amp; proxy signals</Annotation>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
          {metrics.map((m) => {
            const Icon = m.icon
            return (
              <div key={m.label} className="bg-white p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-neutral-400" />
                    <h3 className="text-[14px] font-semibold tracking-tight text-neutral-900">
                      {m.label}
                    </h3>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[12px] font-semibold tabular-nums"
                    style={{ backgroundColor: '#EEF3FF', color: BLUE }}
                  >
                    {m.delta}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span className="text-[13px] font-medium text-neutral-400 line-through decoration-neutral-300">
                    {m.before}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-300" />
                  <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
                    {m.after}
                  </span>
                </div>

                <p className="mt-3 text-[12px] leading-snug text-neutral-500">{m.note}</p>
              </div>
            )
          })}
        </div>
        <p className="mt-4 text-[12px] leading-snug text-neutral-400">
          Directional figures — exact values withheld under NDA. Shown as before → after to convey
          the shape of the impact, not audited numbers.
        </p>
      </div>
    </section>
  )
}

// ── 8. Transferable framing strip ───────────────────────────────────────────

const transfers = [
  {
    label: 'SaaS',
    line: 'Internal account notes vs. customer-visible support replies in one shared inbox.',
  },
  {
    label: 'Fintech',
    line: 'Analyst risk commentary kept private from the client-facing advisory thread.',
  },
  {
    label: 'Crypto',
    line: 'Internal protocol audit findings separated from public governance discussion.',
  },
  {
    label: 'Startups',
    line: 'Founder/board candor lane alongside an investor-facing update lane.',
  },
]

function TransferStrip() {
  return (
    <section className="border-t border-neutral-200/80 bg-neutral-50 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="08">Transferable framing</SectionLabel>
        <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
          The two-lane pattern isn’t about vendors — it’s about any place where one group must be
          candid in front of another without blurring the boundary.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {transfers.map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-neutral-200 bg-white p-5"
            >
              <span className="inline-flex rounded-full border border-neutral-200 px-3 py-1 text-[12px] font-semibold tracking-tight text-neutral-800">
                {t.label}
              </span>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">{t.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── page ─────────────────────────────────────────────────────────────────

export default function CommentVisibility() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-[Inter,ui-sans-serif,system-ui,sans-serif] text-neutral-900 antialiased">
      <div className="mx-auto bg-white shadow-sm">
        <Hero />
        <Personas />
        <UserStories />
        <JourneyMap />
        <Insight />
        <DesignDecisions />
        <Metrics />
        <TransferStrip />
        <footer className="border-t border-neutral-200/80 px-6 py-10 md:px-12">
          <div className="mx-auto flex max-w-5xl items-center justify-between text-[12px] text-neutral-400">
            <span>Two-Audience Commenting · Case study</span>
            <span className="flex items-center gap-1.5">
              <EyeOff className="h-3.5 w-3.5" /> Details abstracted under NDA
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}
