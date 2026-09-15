import { useEffect } from 'react'
import { motion, type Variants } from 'motion/react'
import { EASE_OUT_QUART } from '../lib/motion'

/* ==========================================================================
   Case study — "Two-Audience Commenting"
   A single, immersive long-form page, built to match the Proactive
   Intelligence study and the rest of the site: dark theme, serif display,
   scroll-linked motion on native CSS scroll/view timelines (see index.css).
   motion/react is reserved for the hero entrance and hover micro-interactions.
   NDA: no company, product, or personal names appear anywhere.

   Two functional lane colours run through the product mockups — blue for the
   reviewer-only lane, Aramco teal for the vendor-facing lane. The site's warm
   gold accent is overridden to teal on this page (see the root element), so
   section marks, the progress rail, and closing emphasis all read cool.
   ========================================================================== */

const INTERNAL = '#6e9bff' // reviewer-only lane
const VENDOR = '#2fc7bb' // vendor-facing lane — Aramco teal
const VENDOR_RGB = '47,199,187' // teal, for translucent fills
const INTERNAL_RGB = '110,155,255' // blue, for translucent fills
// Blue → teal: the two lanes blended into one, used for signature moments.
const LANE_GRADIENT = 'linear-gradient(105deg, #6e9bff 0%, #2fc7bb 100%)'

const heroFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.15 + i * 0.16, ease: EASE_OUT_QUART },
  }),
}

export default function CommentVisibility() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Two-Audience Commenting — Case study'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div
      className="cs-root min-h-screen overflow-x-clip"
      // Re-theme this study from the site's warm gold accent to Aramco teal:
      // every element that reads var(--cs-accent) recolours in one shot, and the
      // ambient background glow shifts from gold to a blue/teal wash.
      style={
        {
          '--cs-accent': VENDOR,
          '--cs-accent-soft': '#7fe3da',
          '--cs-glow': `rgba(${VENDOR_RGB},0.5)`,
          backgroundImage: `radial-gradient(120% 80% at 50% -10%, rgba(${VENDOR_RGB},0.08), transparent 55%), radial-gradient(100% 60% at 80% 110%, rgba(${INTERNAL_RGB},0.06), transparent 60%)`,
        } as React.CSSProperties
      }
    >
      <main>
        <Hero />
        <MetaStrip />
        <Problem />
        <CoreIdea />
        <DesignWork />
        <Outcome />
      </main>
    </div>
  )
}

/* ---- 1. The hook ------------------------------------------------------- */

function Hero() {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 cs-parallax cs-parallax-slow"
      >
        <LaneBackdrop />
      </div>

      <motion.div initial="hidden" animate="show" className="relative mx-auto w-full max-w-6xl">
        <motion.div variants={heroFade} custom={0} className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.34em]"
              style={{ color: 'var(--cs-accent)' }}
            >
              Two-Audience Commenting
            </p>
            <span
              className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
              style={{ border: '1px solid var(--cs-accent)', color: 'var(--cs-accent)' }}
            >
              NDA
            </span>
          </div>
          <p className="max-w-lg text-[12px] leading-relaxed" style={{ color: 'var(--cs-mute)' }}>
            Details changed for NDA. No real client, product, or names here. Picture an enterprise
            review portal where in-house experts sign off on outside vendors.
          </p>
        </motion.div>

        <motion.p
          variants={heroFade}
          custom={1}
          className="cs-serif mt-8 max-w-2xl text-xl italic leading-snug md:text-2xl"
          style={{ color: 'var(--cs-mute)' }}
        >
          The sharpest reviewers went quiet.
        </motion.p>

        <motion.h1
          variants={heroFade}
          custom={2}
          className="cs-serif mt-4 max-w-5xl text-[clamp(2.4rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em]"
        >
          How do you get experts to speak their mind
          <br />
          when the vendor they&rsquo;re judging is{' '}
          <span
            className="relative whitespace-nowrap bg-clip-text text-transparent"
            style={{ backgroundImage: LANE_GRADIENT }}
          >
            in the same thread
            <span
              className="cs-pulse absolute -right-5 top-2 h-3 w-3 rounded-full md:top-5"
              style={{ background: VENDOR, boxShadow: `0 0 20px ${VENDOR}` }}
            />
          </span>
          ?
        </motion.h1>

        <motion.p
          variants={heroFade}
          custom={3}
          className="mt-10 max-w-xl text-[15px] font-light leading-relaxed"
          style={{ color: 'var(--cs-text-dim)' }}
        >
          I led the redesign of commenting for an enterprise review portal, where experts rate
          outside vendors in one shared thread. Since anyone might be reading, the experts held back
          and their notes turned to mush. So we stopped hiding the audience and put it front and
          centre.
        </motion.p>
      </motion.div>

      <div
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
        style={{ color: 'var(--cs-mute)' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="cs-scroll-cue" aria-hidden>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M8 2v18M2 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </header>
  )
}

/** Two faint, interleaving streams of dots — the two lanes, established behind the hook. */
function LaneBackdrop() {
  const dots = Array.from({ length: 30 }, (_, i) => {
    const internal = i % 2 === 0
    const along = (i / 30) * 100
    const drift = ((i * 37) % 22) - 11
    return {
      left: `${along}%`,
      top: `${(internal ? 34 : 66) + drift}%`,
      s: 2 + (i % 3),
      internal,
      strong: i % 7 === 0,
    }
  })
  return (
    <div className="absolute inset-0">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.s,
            height: d.s,
            background: d.internal ? INTERNAL : VENDOR,
            opacity: d.strong ? 0.6 : 0.18,
            boxShadow: d.strong ? `0 0 12px ${d.internal ? INTERNAL : VENDOR}` : 'none',
          }}
        />
      ))}
    </div>
  )
}

/* ---- meta strip -------------------------------------------------------- */

function MetaStrip() {
  const items: [string, React.ReactNode][] = [
    ['Role', 'Senior Product Designer'],
    [
      'Scope',
      <>
        UX · Role-based access ·<br />
        <span className="whitespace-nowrap">Interaction design</span>
      </>,
    ],
    ['Surface', 'Enterprise evaluation portal'],
    ['Users', 'Internal SME reviewers & outside vendors'],
  ]
  return (
    <section className="border-y" style={{ borderColor: 'var(--cs-line)' }}>
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4 md:px-12 cs-stagger">
        {items.map(([k, v]) => (
          <div key={k} className="py-8">
            <dt
              className="text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: 'var(--cs-mute)' }}
            >
              {k}
            </dt>
            <dd className="mt-2 text-[15px] leading-snug" style={{ color: 'var(--cs-text)' }}>
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/* ---- 2. The problem ---------------------------------------------------- */

function Problem() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2 md:px-12 md:py-48">
      <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center">
        <BlendedThread />
      </div>

      <div className="flex flex-col justify-center gap-24 md:py-[30vh]">
        <SectionTag n="01" label="The problem" />
        <div className="cs-reveal max-w-md">
          <h2 className="cs-serif text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
            One thread for two audiences.
          </h2>
          <p className="mt-6 text-[16px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
            Reviewers and the vendors they judged all wrote in the same thread. Any internal note
            could, in theory, be read by the company under review. So the people the whole decision
            leaned on stopped writing anything honest.
          </p>
        </div>
        <div className="cs-reveal max-w-md">
          <p className="text-[16px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
            The old fix was a pile of per-comment privacy toggles no one trusted. When you can&rsquo;t
            tell who&rsquo;s reading, you{' '}
            <em className="cs-serif not-italic" style={{ color: 'var(--cs-text)' }}>
              assume the worst
            </em>{' '}
            and say something safe and pointless.
          </p>
        </div>
        <blockquote className="cs-reveal-blur max-w-lg">
          <p className="cs-serif text-[clamp(1.6rem,3.4vw,2.6rem)] italic leading-tight">
            &ldquo;If I can&rsquo;t tell who sees this, I&rsquo;ll just{' '}
            <span style={{ color: 'var(--cs-accent)' }}>say nothing</span>.&rdquo;
          </p>
          <footer className="mt-4 text-[13px]" style={{ color: 'var(--cs-mute)' }}>
            we heard this in nearly every interview
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

/** The "before": one blended thread where the audience is a shrug, so every comment hedges. */
function BlendedThread() {
  const comments = [
    { who: 'Reviewer', text: 'Looks fine to me, I think.' },
    { who: 'Reviewer', text: 'A few concerns but happy to discuss offline.' },
    { who: 'Reviewer', text: 'No major issues from my side.' },
  ]
  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-3xl border p-6"
      style={{
        borderColor: 'var(--cs-line)',
        background: 'linear-gradient(160deg, var(--cs-panel) 0%, var(--cs-bg) 100%)',
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-semibold" style={{ color: 'var(--cs-text-dim)' }}>
          Submission thread
        </span>
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium"
          style={{ borderColor: 'var(--cs-line-strong)', color: 'var(--cs-mute)' }}
        >
          <EyeQuestion /> Who sees this?
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {comments.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl border px-4 py-3"
            style={{ borderColor: 'var(--cs-line)', background: 'rgba(255,255,255,0.03)' }}
          >
            <p className="text-[11px] font-semibold" style={{ color: 'var(--cs-mute)' }}>
              {c.who}
            </p>
            <p className="mt-1 text-[13px] leading-snug" style={{ color: 'var(--cs-text-dim)' }}>
              {c.text}
            </p>
          </div>
        ))}
      </div>

      <p
        className="absolute inset-x-6 bottom-6 text-center text-[12px] leading-snug"
        style={{ color: 'var(--cs-mute)' }}
      >
        Everyone can read everything → so no one says anything.
      </p>
    </div>
  )
}

/* ---- 3. The core idea (signature) ------------------------------------- */

function CoreIdea() {
  return (
    <section
      className="relative"
      style={
        {
          viewTimelineName: '--thread',
          viewTimelineAxis: 'block',
          minHeight: '340vh',
        } as React.CSSProperties
      }
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20 md:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-12">
          {/* left — the idea */}
          <div className="order-2 flex flex-col gap-8 md:order-1">
            <SectionTag n="02" label="The core idea" />
            <h2 className="cs-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1]">
              One thread.
              <br />
              Two lanes that never blur.
            </h2>
            <p className="max-w-md text-[16px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
              Keep the one thread everyone wanted, but drop each comment into a lane the moment you
              start typing. <span style={{ color: INTERNAL }}>Blue</span> stays between reviewers.{' '}
              <span style={{ color: VENDOR }}>Teal</span> goes to the vendor. You see who&rsquo;s
              reading before you write a word.
            </p>
            <div className="flex flex-wrap gap-3">
              <LaneChip tone="internal" />
              <LaneChip tone="vendor" />
            </div>
          </div>

          {/* right — the thread assembling itself */}
          <div className="order-1 md:order-2">
            <DualLaneThread />
            <p
              className="mx-auto mt-4 max-w-md text-center text-[13px] font-light leading-relaxed"
              style={{ color: 'var(--cs-mute)' }}
            >
              One timeline, so nobody loses the thread. Colour and a clear label hold the line the
              old toggles never could.
            </p>
          </div>
        </div>

        <p
          className="mx-auto mt-16 max-w-3xl text-center cs-serif text-[clamp(1.4rem,2.8vw,2.2rem)] italic leading-tight"
          style={{ color: 'var(--cs-text)' }}
        >
          You had to know the lane{' '}
          <span style={{ color: 'var(--cs-accent)' }}>at a glance</span>, not dig through a menu to
          find it.
        </p>
      </div>
    </section>
  )
}

type Comment = {
  tone: 'internal' | 'vendor'
  who: string
  initial: string
  text: string
  start: number
}

const THREAD: Comment[] = [
  {
    tone: 'internal',
    who: 'SME Reviewer',
    initial: 'R',
    text: 'The thermal margins don’t hold at the upper range. I wouldn’t approve as-is.',
    start: 16,
  },
  {
    tone: 'internal',
    who: 'Domain Lead',
    initial: 'L',
    text: 'Agreed. Let’s get their test data before we frame anything to them.',
    start: 28,
  },
  {
    tone: 'vendor',
    who: 'To vendor',
    initial: 'Q',
    text: 'Can you share thermal test results across the full operating range?',
    start: 40,
  },
  {
    tone: 'vendor',
    who: 'Vendor Rep',
    initial: 'V',
    text: 'Sure, attaching the full-range report now. Happy to walk through it.',
    start: 52,
  },
  {
    tone: 'internal',
    who: 'SME Reviewer',
    initial: 'R',
    text: 'Their data confirms the drop-off. Recommending conditional pass.',
    start: 64,
  },
]

function part(start: number, span = 11): React.CSSProperties {
  return { animationRange: `cover ${start}% cover ${start + span}%` } as React.CSSProperties
}

/**
 * DualLaneThread — the signature scroll-linked visual.
 *
 * A single submission thread that writes itself, comment by comment, as the
 * reader scrolls the pinned scene. Each comment reads a slice of the parent
 * `--thread` view-timeline (declared on the tall section), so the assembly is
 * driven entirely by native CSS scroll-driven animation. Blue comments are the
 * reviewer-only lane; teal ones are visible to the vendor. It closes on an
 * audience-aware composer that names its lane before a word is typed.
 *
 * Without timeline support, or under prefers-reduced-motion, the full thread is
 * shown at rest — never a blank card.
 */
function DualLaneThread() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* blue → teal glow: the two lanes coexisting behind the one thread */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
        style={{
          background: `radial-gradient(55% 55% at 20% 0%, rgba(${INTERNAL_RGB},0.35), transparent 70%), radial-gradient(55% 55% at 85% 100%, rgba(${VENDOR_RGB},0.32), transparent 70%)`,
        }}
      />

      <span
        className="absolute -top-3 right-4 z-20 rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em]"
        style={{
          border: '1px solid var(--cs-line-strong)',
          background: 'rgba(10,10,12,0.85)',
          color: 'var(--cs-mute)',
        }}
      >
        NDA · illustrative
      </span>

      <div
        className="overflow-hidden rounded-2xl border backdrop-blur-xl"
        style={{
          borderColor: 'var(--cs-line-strong)',
          background:
            'linear-gradient(158deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 55%, rgba(255,255,255,0.05) 100%)',
          boxShadow: '0 30px 80px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.12)',
        }}
      >
        {/* header */}
        <div
          className="thread-part flex items-center justify-between border-b px-5 py-3.5"
          style={{ borderColor: 'var(--cs-line)', ...part(6, 8) }}
        >
          <div className="leading-tight">
            <p className="text-[13px] font-semibold tracking-tight" style={{ color: 'var(--cs-text)' }}>
              Submission #4021
            </p>
            <p className="text-[11px]" style={{ color: 'var(--cs-mute)' }}>
              Thermal sensor · v2
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LegendDot tone="internal" />
            <LegendDot tone="vendor" />
          </div>
        </div>

        {/* the thread */}
        <div className="space-y-3 px-5 py-5">
          {THREAD.map((c, i) => (
            <ThreadComment key={i} c={c} />
          ))}
        </div>

        {/* audience-aware composer */}
        <div
          className="thread-part border-t px-5 py-4"
          style={{ borderColor: 'var(--cs-line)', ...part(76, 12) }}
        >
          <div
            className="rounded-xl border px-3.5 py-3"
            style={{ borderColor: INTERNAL, background: 'rgba(110,155,255,0.07)' }}
          >
            <div className="flex items-center justify-between">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: INTERNAL }}
              >
                <LockIcon /> Posting to reviewers only
              </span>
              <span
                className="rounded-full border px-2 py-0.5 text-[9px] font-medium"
                style={{ borderColor: 'var(--cs-line-strong)', color: 'var(--cs-mute)' }}
              >
                switch lane
              </span>
            </div>
            <p className="mt-2 text-[12px]" style={{ color: 'var(--cs-mute)' }}>
              Write a comment…
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ThreadComment({ c }: { c: Comment }) {
  const color = c.tone === 'internal' ? INTERNAL : VENDOR
  const bg = c.tone === 'internal' ? `rgba(${INTERNAL_RGB},0.08)` : `rgba(${VENDOR_RGB},0.08)`
  return (
    <div className="thread-part flex gap-3" style={part(c.start)}>
      <span className="mt-0.5 w-1 shrink-0 rounded-full" style={{ background: color }} aria-hidden />
      <div className="min-w-0 flex-1 rounded-xl border px-3.5 py-2.5" style={{ borderColor: 'var(--cs-line)', background: bg }}>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold" style={{ color: 'var(--cs-text-dim)' }}>
            {c.who}
          </span>
          <span
            className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.1em]"
            style={{ color }}
          >
            {c.tone === 'internal' ? <LockIcon /> : <EyeIcon />}
            {c.tone === 'internal' ? 'Reviewers only' : 'Visible to vendor'}
          </span>
        </div>
        <p className="mt-1 text-[12.5px] leading-snug" style={{ color: 'var(--cs-text)' }}>
          {c.text}
        </p>
      </div>
    </div>
  )
}

/* ---- 4. The design work ------------------------------------------------ */

function DesignWork() {
  const pillars = [
    {
      k: 'A composer that shows its audience',
      lede: 'You pick the lane before you type, and the box turns that colour.',
      body: 'People clammed up when the audience was fuzzy. So the box says it plainly before you write: this colour, these readers. The doubt that used to stop them had nowhere to go.',
      chose: 'Pick the lane first; the box shows the colour and names who’ll read it.',
      rejected: 'A “share with vendor?” checkbox tacked on after you’ve written it.',
      visual: <ComposerViz />,
    },
    {
      k: 'Two lanes, one timeline',
      lede: 'Sorted by colour, ordered by time, never split into tabs.',
      body: 'An early version broke the thread in two. The best reviewers hated the back-and-forth and quit posting. One timeline kept the conversation they relied on; colour and a label did the dividing.',
      chose: 'One timeline, comments colour-coded and labelled by lane.',
      rejected: 'Separate internal and vendor tabs that break the thread apart.',
      visual: <TimelineViz />,
    },
    {
      k: 'You only see your own patch',
      lede: 'Your domain’s submissions show up, and nothing else does.',
      body: 'One giant feed buried people and quietly leaked notes across teams. Scoping everyone to their own area made the feed useful from day one, and turned a cross-team leak into something you’d have to go out of your way to cause.',
      chose: 'Every role sees only its own domain by default.',
      rejected: 'One giant feed and a filter you had to set yourself.',
      visual: <ScopedFeedViz />,
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-48">
      <div className="max-w-3xl">
        <SectionTag n="03" label="The design work" />
        <h2 className="cs-reveal mt-8 cs-serif text-[clamp(2rem,5vw,4rem)] leading-[1.02]">
          Three decisions that made
          <br className="hidden md:block" /> people talk again.
        </h2>
        <p className="cs-reveal mt-6 max-w-xl text-[16px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
          All three protect the same thing: people stay honest only when they can see, without
          stopping to think, who&rsquo;s on the other end.
        </p>
      </div>

      <div className="mt-20 space-y-6">
        {pillars.map((p, i) => (
          <article
            key={p.k}
            className="cs-reveal grid gap-8 rounded-3xl border p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-12"
            style={{
              borderColor: 'var(--cs-line)',
              background:
                'linear-gradient(150deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 60%)',
            }}
          >
            <div>
              <span className="text-[12px] font-semibold tracking-[0.2em]" style={{ color: 'var(--cs-accent)' }}>
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[clamp(1.4rem,3vw,2rem)] font-semibold tracking-tight">{p.k}</h3>
              <p className="mt-4 cs-serif text-[18px] italic leading-snug" style={{ color: 'var(--cs-text)' }}>
                {p.lede}
              </p>
              <p className="mt-4 max-w-md text-[15px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
                {p.body}
              </p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--cs-accent)' }}>
                    Chose
                  </dt>
                  <dd className="mt-1.5 text-[13px] font-light leading-snug" style={{ color: 'var(--cs-text-dim)' }}>
                    {p.chose}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--cs-mute)' }}>
                    Rejected
                  </dt>
                  <dd className="mt-1.5 text-[13px] font-light leading-snug" style={{ color: 'var(--cs-mute)' }}>
                    {p.rejected}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="grid place-items-center">
              <div
                className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border"
                style={{ borderColor: 'var(--cs-line)', background: 'var(--cs-bg)' }}
              >
                <span
                  className="absolute right-3 top-3 z-10 rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em]"
                  style={{
                    border: '1px solid var(--cs-line-strong)',
                    background: 'rgba(10,10,12,0.6)',
                    color: 'var(--cs-mute)',
                  }}
                >
                  NDA · illustrative
                </span>
                {p.visual}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ComposerViz() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-6">
      <div
        className="rounded-lg border px-3 py-2.5"
        style={{ borderColor: INTERNAL, background: 'rgba(110,155,255,0.08)' }}
      >
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: INTERNAL }}>
          <LockIcon /> Reviewers only
        </span>
        <p className="mt-1.5 text-[11px]" style={{ color: 'var(--cs-mute)' }}>
          Honest notes the vendor never sees.
        </p>
      </div>
      <div className="flex justify-center text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--cs-mute)' }}>
        one toggle
      </div>
      <div
        className="rounded-lg border px-3 py-2.5"
        style={{ borderColor: VENDOR, background: `rgba(${VENDOR_RGB},0.08)` }}
      >
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: VENDOR }}>
          <EyeIcon /> Visible to vendor
        </span>
        <p className="mt-1.5 text-[11px]" style={{ color: 'var(--cs-mute)' }}>
          Clear questions you can share.
        </p>
      </div>
    </div>
  )
}

function TimelineViz() {
  const rows: ('internal' | 'vendor')[] = ['internal', 'internal', 'vendor', 'vendor', 'internal']
  return (
    <div className="flex h-full items-center p-6">
      <div className="relative w-full pl-4">
        <span className="absolute left-0 top-1 bottom-1 w-px" style={{ background: 'var(--cs-line-strong)' }} aria-hidden />
        <div className="space-y-2.5">
          {rows.map((tone, i) => {
            const color = tone === 'internal' ? INTERNAL : VENDOR
            const bg = tone === 'internal' ? `rgba(${INTERNAL_RGB},0.1)` : `rgba(${VENDOR_RGB},0.1)`
            return (
              <div key={i} className="flex items-center gap-2.5">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
                <span
                  className="h-6 rounded-md"
                  style={{ width: `${58 + ((i * 13) % 34)}%`, background: bg, border: `1px solid ${color}44` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ScopedFeedViz() {
  const rows = [
    { mine: true, label: 'Thermal sensors' },
    { mine: true, label: 'Power systems' },
    { mine: false, label: 'Optics — other domain' },
    { mine: false, label: 'Materials — other domain' },
  ]
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-6">
      {rows.map((r, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 rounded-lg border px-3 py-2.5"
          style={{
            borderColor: r.mine ? INTERNAL : 'var(--cs-line)',
            background: r.mine ? 'rgba(110,155,255,0.07)' : 'transparent',
            opacity: r.mine ? 1 : 0.4,
          }}
        >
          <span className="text-[11px]" style={{ color: r.mine ? 'var(--cs-text)' : 'var(--cs-mute)' }}>
            {r.mine ? <EyeIcon /> : <EyeOffIcon />}
          </span>
          <span className="text-[12px]" style={{ color: r.mine ? 'var(--cs-text-dim)' : 'var(--cs-mute)' }}>
            {r.label}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ---- 5. The outcome ---------------------------------------------------- */

const METRICS = [
  { value: '2.3×', label: 'more comments per reviewer' },
  { value: 'Honest', label: 'how the notes read now (before: hedged)' },
  { value: '−74%', label: 'faster vendor replies' },
  { value: '−31%', label: 'from thread opened to decision' },
]

const TRANSFERS = [
  { label: 'SaaS', line: 'Private account notes next to customer-facing replies, one inbox.' },
  { label: 'Fintech', line: 'Analyst risk notes kept clear of the client’s advisory thread.' },
  { label: 'Crypto', line: 'Audit findings kept out of the public governance chat.' },
  { label: 'Startups', line: 'Blunt board talk beside a polished investor update.' },
]

function Outcome() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-48">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <SectionTag n="04" label="The outcome" />
          <h2 className="cs-reveal mt-8 cs-serif text-[clamp(2rem,5vw,4rem)] leading-[1.02]">
            The experts started talking again.
          </h2>
          <p className="cs-reveal mt-6 max-w-md text-[16px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
            With the risk gone, senior reviewers wrote more, and what they wrote had teeth again.
            Vendors got clear questions instead of silence, and answered in days, not weeks.
          </p>
          <p className="cs-reveal mt-6 max-w-md text-[16px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
            The whole review sped up, because the conversation that decided it was finally out in the
            open, just in the right lane.
          </p>
        </div>

        <div className="cs-reveal">
          <CandorCurve />
        </div>
      </div>

      {/* metrics */}
      <div className="mt-24 grid gap-8 border-t pt-16 sm:grid-cols-2 lg:grid-cols-4 cs-stagger" style={{ borderColor: 'var(--cs-line)' }}>
        {METRICS.map((m) => (
          <div key={m.label}>
            <div className="cs-serif text-[clamp(2.4rem,5vw,3.6rem)] leading-none" style={{ color: 'var(--cs-accent)' }}>
              {m.value}
            </div>
            <p className="mt-3 max-w-[15rem] text-[14px] font-light leading-snug" style={{ color: 'var(--cs-text-dim)' }}>
              {m.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[12px] leading-snug" style={{ color: 'var(--cs-mute)' }}>
        Rough figures; the real numbers are under NDA. They show the shape of the change, not
        audited stats.
      </p>

      {/* transferable framing */}
      <div className="mt-28">
        <SectionTag n="05" label="Where it transfers" />
        <p className="cs-reveal mt-8 max-w-2xl text-[16px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
          This one isn&rsquo;t really about vendors. It works anywhere one group has to be honest in
          front of another without the two blurring together.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 cs-stagger">
          {TRANSFERS.map((t) => (
            <div key={t.label} className="rounded-2xl border p-5" style={{ borderColor: 'var(--cs-line)' }}>
              <span
                className="inline-flex rounded-full border px-3 py-1 text-[12px] font-semibold tracking-tight"
                style={{ borderColor: 'var(--cs-line-strong)', color: 'var(--cs-text)' }}
              >
                {t.label}
              </span>
              <p className="mt-3 text-[13px] font-light leading-relaxed" style={{ color: 'var(--cs-text-dim)' }}>
                {t.line}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* closing one-liner */}
      <div className="mt-40 border-t pt-20 text-center" style={{ borderColor: 'var(--cs-line)' }}>
        <p className="cs-reveal-blur mx-auto max-w-4xl cs-serif text-[clamp(1.8rem,4.5vw,3.6rem)] leading-[1.08]">
          People don&rsquo;t go quiet because they&rsquo;ve run out of things to say. They go quiet
          when they can&rsquo;t tell <span style={{ color: 'var(--cs-accent)' }}>who&rsquo;s in the
          room</span>.
        </p>
      </div>
    </section>
  )
}

function CandorCurve() {
  return (
    <div
      className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border p-8"
      style={{
        borderColor: 'var(--cs-line)',
        background: 'linear-gradient(160deg, var(--cs-panel), var(--cs-bg))',
      }}
    >
      <svg viewBox="0 0 400 320" className="h-full w-full" fill="none" aria-hidden>
        <defs>
          <linearGradient id="candor-grad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={INTERNAL} />
            <stop offset="100%" stopColor={VENDOR} />
          </linearGradient>
        </defs>
        {[80, 160, 240].map((y) => (
          <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="var(--cs-line)" strokeDasharray="2 8" />
        ))}
        {/* flat "old thread" reference */}
        <line x1="20" y1="250" x2="380" y2="244" stroke="var(--cs-mute)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />
        {/* reviewer comment volume climbing after launch */}
        <path
          className="cs-draw"
          d="M20 262 C 110 258, 170 250, 220 200 S 320 70, 380 40"
          stroke="url(#candor-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ '--dash': 620 } as React.CSSProperties}
        />
        <circle cx="380" cy="40" r="6" fill={VENDOR} style={{ filter: `drop-shadow(0 0 10px ${VENDOR})` }} />
      </svg>
      <div
        className="pointer-events-none absolute inset-x-8 bottom-6 flex justify-between text-[10px] uppercase tracking-[0.2em]"
        style={{ color: 'var(--cs-mute)' }}
      >
        <span>before</span>
        <span style={{ color: VENDOR }}>honest comments, climbing →</span>
      </div>
    </div>
  )
}

/* ---- shared ------------------------------------------------------------ */

function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[12px] font-semibold tracking-[0.24em]" style={{ color: 'var(--cs-accent)' }}>
        {n}
      </span>
      <span className="h-px w-8" style={{ background: 'var(--cs-line-strong)' }} />
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: 'var(--cs-mute)' }}>
        {label}
      </span>
    </div>
  )
}

function LaneChip({ tone }: { tone: 'internal' | 'vendor' }) {
  const color = tone === 'internal' ? INTERNAL : VENDOR
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-medium"
      style={{ borderColor: `${color}66`, color: 'var(--cs-text-dim)' }}
    >
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      {tone === 'internal' ? 'Internal · reviewers only' : 'Vendor-facing · shareable'}
    </span>
  )
}

function LegendDot({ tone }: { tone: 'internal' | 'vendor' }) {
  const color = tone === 'internal' ? INTERNAL : VENDOR
  return <span className="h-2 w-2 rounded-full" style={{ background: color }} aria-hidden />
}

/* ---- inline icons (kept inline to match the self-contained system) ----- */

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3l18 18M10.6 6.2A9.7 9.7 0 0 1 12 6c6.5 0 10 6 10 6a15.6 15.6 0 0 1-3.4 4M6.6 6.6A15.7 15.7 0 0 0 2 12s3.5 6 10 6a9.6 9.6 0 0 0 3.4-.6" />
      <path d="M9.5 9.5a3 3 0 0 0 4.2 4.2" />
    </svg>
  )
}

function EyeQuestion() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <path d="M10.6 10.5a1.6 1.6 0 1 1 2.2 1.5c-.5.3-.8.6-.8 1.2M12 15.6h.01" />
    </svg>
  )
}
