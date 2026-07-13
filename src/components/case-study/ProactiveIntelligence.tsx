import { motion, type Variants } from 'motion/react'
import { EASE_OUT_QUART } from '../../lib/motion'
import KnowledgeGraph from './KnowledgeGraph'
import ProactiveMessage from './ProactiveMessage'

/* ==========================================================================
   Case study - "Proactive Intelligence"
   A single, immersive long-form page. Scroll-linked motion is built on native
   CSS scroll/view timelines (see index.css); motion/react is reserved for the
   hero entrance and hover micro-interactions. NDA: no company, product, or
   personal names appear anywhere.
   ========================================================================== */

const heroFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.15 + i * 0.16, ease: EASE_OUT_QUART },
  }),
}

export default function ProactiveIntelligence() {
  return (
    <div className="cs-root min-h-screen overflow-x-clip">
      {/* The shared site header is rendered once at the app level (it carries
          the scroll-progress rail on this route). */}
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
      {/* drifting signal dots, parallaxed */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 cs-parallax cs-parallax-slow"
      >
        <Constellation />
      </div>

      <motion.div initial="hidden" animate="show" className="relative mx-auto w-full max-w-6xl">
        <motion.div variants={heroFade} custom={0} className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.34em]"
              style={{ color: 'var(--cs-accent)' }}
            >
              Proactive Intelligence
            </p>
            <span
              className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
              style={{ border: '1px solid var(--cs-accent)', color: 'var(--cs-accent)' }}
            >
              NDA
            </span>
          </div>
          <p className="max-w-lg text-[12px] leading-relaxed" style={{ color: 'var(--cs-mute)' }}>
            Generalized under NDA. No client, product, or personal names appear here; the product is
            described as an AI intelligence analyst, built for a research intelligence firm.
          </p>
        </motion.div>

        <motion.p
          variants={heroFade}
          custom={1}
          className="cs-serif mt-8 max-w-2xl text-xl italic leading-snug md:text-2xl"
          style={{ color: 'var(--cs-mute)' }}
        >
          Most intelligence tools wait to be asked.
        </motion.p>

        <motion.h1
          variants={heroFade}
          custom={2}
          className="cs-serif mt-4 max-w-5xl text-[clamp(2.6rem,8.5vw,7.5rem)] leading-[0.95] tracking-[-0.02em]"
        >
          What does it take to
          <br />
          message you first -{' '}
          <span className="relative whitespace-nowrap" style={{ color: 'var(--cs-accent)' }}>
            and get it right
            <span
              className="cs-pulse absolute -right-5 top-2 h-3 w-3 rounded-full md:top-5"
              style={{ background: 'var(--cs-accent)', boxShadow: '0 0 20px var(--cs-glow)' }}
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
          I led product design for an AI intelligence analyst, built for a research intelligence
          firm. The goal was easy to say and hard to build: don&rsquo;t wait for the user to ask.
          Send the right update first.
        </motion.p>
      </motion.div>

      <div
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
        style={{ color: 'var(--cs-mute)' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="cs-scroll-cue" aria-hidden>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M8 2v18M2 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </header>
  )
}

function Constellation() {
  // deterministic scatter - faint context motes behind the hook
  const dots = Array.from({ length: 34 }, (_, i) => {
    const a = (i * 137.5 * Math.PI) / 180
    const rad = 6 + (i / 34) * 44
    return {
      left: `${50 + Math.cos(a) * rad}%`,
      top: `${50 + Math.sin(a) * rad * 0.8}%`,
      s: 1 + (i % 4),
      accent: i % 9 === 0,
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
            background: d.accent ? 'var(--cs-accent)' : 'var(--cs-mute)',
            opacity: d.accent ? 0.9 : 0.28,
            boxShadow: d.accent ? '0 0 12px var(--cs-glow)' : 'none',
          }}
        />
      ))}
    </div>
  )
}

/* ---- meta strip -------------------------------------------------------- */

function MetaStrip() {
  const items: [string, React.ReactNode][] = [
    ['Role', 'Lead Product Designer'],
    [
      'Scope',
      <>
        Product strategy · UX ·<br />
        <span className="whitespace-nowrap">Interaction design</span>
      </>,
    ],
    ['Surface', 'Chat-native web app'],
    ['Users', 'Enterprise R&D & compliance teams'],
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
    <section
      className="relative mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2 md:px-12 md:py-48"
      style={{ viewTimelineName: '--noise', viewTimelineAxis: 'block' } as React.CSSProperties}
    >
      {/* sticky visual holds while copy advances */}
      <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center">
        <NoiseField />
      </div>

      <div className="flex flex-col justify-center gap-24 md:py-[30vh]">
        <SectionTag n="01" label="The problem" />
        <div className="cs-reveal max-w-md">
          <h2 className="cs-serif text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
            Tools that only react create noise.
          </h2>
          <p
            className="mt-6 text-[16px] font-light leading-relaxed"
            style={{ color: 'var(--cs-text-dim)' }}
          >
            R&amp;D and compliance teams use tools that only answer when asked. Every answer is one
            more thing to check, sort, and follow up on. The to-do list never gets shorter.
          </p>
        </div>
        <div className="cs-reveal max-w-md">
          <p
            className="text-[16px] font-light leading-relaxed"
            style={{ color: 'var(--cs-text-dim)' }}
          >
            If a tool only helps when you ask, the hardest part stays on your plate:{' '}
            <em className="cs-serif not-italic" style={{ color: 'var(--cs-text)' }}>
              knowing what to ask
            </em>{' '}
            in the first place. That falls on the busiest person on the team.
          </p>
        </div>
        <blockquote className="cs-reveal-blur max-w-lg">
          <p className="cs-serif text-[clamp(1.6rem,3.4vw,2.6rem)] italic leading-tight">
            Value should arrive <span style={{ color: 'var(--cs-accent)' }}>before</span> it&rsquo;s
            requested.
          </p>
        </blockquote>
      </div>
    </section>
  )
}

function NoiseField() {
  // a dense field of muted "query" fragments, with a single gold signal that
  // sharpens as the section scrolls (driven by the --noise view-timeline)
  const frags = Array.from({ length: 22 }, (_, i) => ({
    top: `${8 + ((i * 53) % 84)}%`,
    left: `${(i * 37) % 78}%`,
    w: 60 + ((i * 29) % 90),
    o: 0.06 + ((i * 13) % 10) / 60,
  }))
  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-3xl border"
      style={{
        borderColor: 'var(--cs-line)',
        background: 'linear-gradient(160deg, var(--cs-panel) 0%, var(--cs-bg) 100%)',
      }}
    >
      {/* the noise */}
      {frags.map((f, i) => (
        <span
          key={i}
          className="absolute h-2 rounded-full"
          style={{
            top: f.top,
            left: f.left,
            width: f.w,
            background: 'var(--cs-text)',
            opacity: f.o,
          }}
        />
      ))}
      {/* the signal cutting through */}
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="cs-reveal-blur flex items-center gap-3 rounded-full border px-5 py-3 backdrop-blur-md"
          style={{
            borderColor: 'var(--cs-accent)',
            background: 'rgba(230,178,76,0.08)',
            boxShadow: '0 0 60px var(--cs-glow)',
          }}
        >
          <span
            className="cs-pulse h-2.5 w-2.5 rounded-full"
            style={{ background: 'var(--cs-accent)' }}
          />
          <span className="text-[13px] font-medium" style={{ color: 'var(--cs-accent-soft)' }}>
            the update you didn&rsquo;t ask for
          </span>
        </div>
      </div>
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
          viewTimelineName: '--graph',
          viewTimelineAxis: 'block',
          minHeight: '320vh',
        } as React.CSSProperties
      }
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20 md:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-8">
          {/* left - the message writing itself */}
          <div className="order-2 flex flex-col gap-8 md:order-1">
            <SectionTag n="02" label="The core idea" />
            <h2 className="cs-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1]">
              The right message,
              <br />
              before you ask.
            </h2>
            <p
              className="max-w-md text-[16px] font-light leading-relaxed"
              style={{ color: 'var(--cs-text-dim)' }}
            >
              The key moment isn&rsquo;t a better answer. It&rsquo;s a useful message the user never
              asked for. It works because the product remembers context from every past session and
              builds on it, session after session. A generic assistant can&rsquo;t do that from a
              single prompt.
            </p>
            <div className="hidden md:block">
              <ProactiveMessage />
            </div>
          </div>

          {/* right - the graph seeding sparse -> rich */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
              <KnowledgeGraph className="absolute inset-0 h-full w-full" />
            </div>
            <p
              className="mx-auto mt-2 max-w-md text-center text-[13px] font-light leading-relaxed"
              style={{ color: 'var(--cs-mute)' }}
            >
              The knowledge graph is the private context the product builds about your work: who you
              are <span style={{ color: 'var(--cs-text-dim)' }}>(your profile)</span>, what you keep
              asking about <span style={{ color: 'var(--cs-text-dim)' }}>(past sessions)</span>, and
              how it all connects. Every session adds to it.
            </p>
          </div>

          {/* message on mobile (below graph) */}
          <div className="order-3 md:hidden">
            <ProactiveMessage />
          </div>
        </div>

        <p
          className="mx-auto mt-16 max-w-3xl text-center cs-serif text-[clamp(1.4rem,2.8vw,2.2rem)] italic leading-tight"
          style={{ color: 'var(--cs-text)' }}
        >
          The advantage isn&rsquo;t the model. It&rsquo;s the{' '}
          <span style={{ color: 'var(--cs-accent)' }}>context</span> the product builds up over
          time.
        </p>
      </div>
    </section>
  )
}

/* ---- 4. The design work ------------------------------------------------ */

function DesignWork() {
  const pillars = [
    {
      k: 'Onboarding without a setup form',
      lede: 'It learns what you care about before you type a word.',
      body: 'Onboarding starts at a webinar, not a signup form. Right after it, the product enriches the new user from their public LinkedIn profile (role, industry, and focus) and uses that to seed a feed of updates they’ll actually care about. A short chat then fine-tunes it. No forms, no empty dashboard on day one; the first message already lands.',
      visual: <OnboardingViz />,
    },
    {
      k: 'The work happens in the background',
      lede: 'A knowledge graph and expert quality checks run behind the scenes, so the user never has to manage them.',
      body: 'The product quietly organizes everything it learns into a knowledge graph, and experts review its work in the background. The user never sees or maintains any of this. It’s why proactive messages can be trusted without someone checking each one by hand.',
      visual: <BackgroundGraph />,
    },
    {
      k: 'A verification stamp for high-stakes findings',
      lede: 'Only the most important findings get a “verified” mark.',
      body: 'High-stakes results get an expert-verified stamp, so a user can forward them to a manager with confidence. We kept it rare on purpose. If everything is stamped, the stamp stops meaning anything.',
      visual: <StampViz />,
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-48">
      <div className="max-w-3xl">
        <SectionTag n="03" label="The design work" />
        <h2 className="cs-reveal mt-8 cs-serif text-[clamp(2rem,5vw,4rem)] leading-[1.02]">
          Three decisions that made
          <br className="hidden md:block" /> it trustworthy.
        </h2>
        <p
          className="cs-reveal mt-6 max-w-xl text-[16px] font-light leading-relaxed"
          style={{ color: 'var(--cs-text-dim)' }}
        >
          These three design choices turned the idea into a product people could rely on. Each one
          protects the same thing: a proactive message only works if the user trusts it before
          double-checking it.
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
              <span
                className="text-[12px] font-semibold tracking-[0.2em]"
                style={{ color: 'var(--cs-accent)' }}
              >
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[clamp(1.4rem,3vw,2rem)] font-semibold tracking-tight">
                {p.k}
              </h3>
              <p
                className="mt-4 cs-serif text-[18px] italic leading-snug"
                style={{ color: 'var(--cs-text)' }}
              >
                {p.lede}
              </p>
              <p
                className="mt-4 max-w-md text-[15px] font-light leading-relaxed"
                style={{ color: 'var(--cs-text-dim)' }}
              >
                {p.body}
              </p>
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

function OnboardingViz() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-6">
      {/* the funnel: webinar sign-up -> LinkedIn enrichment -> personalized seed */}
      <div
        className="mb-1 flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] leading-snug"
        style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--cs-text-dim)' }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="var(--cs-accent)" aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20 8.75 21 11 21 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21H9z" />
        </svg>
        <span>
          <span style={{ color: 'var(--cs-text)' }}>Seeded from your LinkedIn profile</span> after
          the webinar: role, industry, focus.
        </span>
      </div>
      {[
        { me: false, t: 'You lead regulatory affairs for medical devices. Watching that space?' },
        { me: true, t: 'Yes. Especially changes that hit our pipeline.' },
        { me: false, t: 'Done. Your feed is already tuned to it.' },
      ].map((b, i) => (
        <div key={i} className={b.me ? 'flex justify-end' : 'flex justify-start'}>
          <span
            className="max-w-[82%] rounded-2xl px-3.5 py-2 text-[12px] leading-snug"
            style={
              b.me
                ? { background: 'var(--cs-accent)', color: '#0a0a0c' }
                : { background: 'rgba(255,255,255,0.07)', color: 'var(--cs-text-dim)' }
            }
          >
            {b.t}
          </span>
        </div>
      ))}
    </div>
  )
}

/**
 * BackgroundGraph - a dense, glowing knowledge graph for the "invisible layer"
 * pillar, echoing the Obsidian / force-directed reference look: a bright hub
 * with many amber nodes radiating and cross-linking.
 */
function BackgroundGraph() {
  const CX = 200
  const CY = 150
  // Deterministic scatter: three rings of nodes at golden-angle offsets.
  const nodes = Array.from({ length: 46 }, (_, i) => {
    const a = i * 2.399963 // golden angle (rad)
    const ring = i / 46
    const rad = 18 + ring * 130
    const jitter = ((i * 41) % 17) - 8
    return {
      x: CX + Math.cos(a) * (rad + jitter),
      y: CY + Math.sin(a) * (rad + jitter) * 0.74,
      r: 1.2 + ((i * 13) % 5) * 0.7,
      gold: i % 3 === 0,
      i,
    }
  })
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none" aria-hidden>
      <defs>
        <radialGradient id="bg-hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="var(--cs-accent-soft)" />
          <stop offset="100%" stopColor="var(--cs-accent)" />
        </radialGradient>
        <filter id="bg-soft" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <radialGradient id="bg-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--cs-glow)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* warm halo behind the cluster */}
      <ellipse cx={CX} cy={CY} rx="150" ry="112" fill="url(#bg-halo)" opacity="0.5" />

      {/* edges: hub -> node, plus a few node -> node cross links */}
      {nodes.map((n) => (
        <line
          key={`h-${n.i}`}
          x1={CX}
          y1={CY}
          x2={n.x}
          y2={n.y}
          stroke={n.gold ? 'var(--cs-accent)' : 'var(--cs-line-strong)'}
          strokeWidth={n.i < 8 ? 0.9 : 0.5}
          opacity={n.i < 8 ? 0.7 : 0.35}
        />
      ))}
      {nodes.slice(0, 40).map((n, k) => {
        const m = nodes[(k * 7 + 5) % nodes.length]
        return (
          <line
            key={`c-${n.i}`}
            x1={n.x}
            y1={n.y}
            x2={m.x}
            y2={m.y}
            stroke="var(--cs-line)"
            strokeWidth={0.4}
            opacity={0.22}
          />
        )
      })}

      {/* nodes */}
      {nodes.map((n) => (
        <circle
          key={`n-${n.i}`}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.gold ? 'var(--cs-accent)' : 'var(--cs-text)'}
          opacity={n.gold ? 0.95 : 0.6}
        />
      ))}

      {/* the bright hub */}
      <circle cx={CX} cy={CY} r="16" fill="url(#bg-hub)" filter="url(#bg-soft)" opacity="0.7" />
      <circle cx={CX} cy={CY} r="6.5" fill="url(#bg-hub)" />

      <text
        x={CX}
        y="284"
        textAnchor="middle"
        fill="var(--cs-mute)"
        style={{ font: '600 10px var(--font-sans)', letterSpacing: '0.22em' }}
      >
        SURFACE · GRAPH · EXPERT QA
      </text>
    </svg>
  )
}

function StampViz() {
  return (
    <div className="grid h-full place-items-center gap-4">
      <div className="relative">
        <div
          className="grid h-24 w-24 place-items-center rounded-full border-2"
          style={{
            borderColor: 'var(--cs-accent)',
            color: 'var(--cs-accent)',
            boxShadow: '0 0 50px var(--cs-glow)',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <span
          className="cs-pulse absolute inset-0 rounded-full border-2"
          style={{ borderColor: 'var(--cs-accent)' }}
        />
      </div>
      <span
        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{ borderColor: 'var(--cs-accent)', color: 'var(--cs-accent)' }}
      >
        Expert verified
      </span>
    </div>
  )
}

/* ---- 5. The outcome ---------------------------------------------------- */

function Outcome() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-48">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <SectionTag n="04" label="The outcome" />
          <h2 className="cs-reveal mt-8 cs-serif text-[clamp(2rem,5vw,4rem)] leading-[1.02]">
            The more it&rsquo;s used, the more useful it gets.
          </h2>
          <p
            className="cs-reveal mt-6 max-w-md text-[16px] font-light leading-relaxed"
            style={{ color: 'var(--cs-text-dim)' }}
          >
            The more someone uses the product, the more context it has, and the more accurate its
            proactive messages get. Users don&rsquo;t just stick around. They rely on it more over
            time.
          </p>
          <p
            className="cs-reveal mt-6 max-w-md text-[16px] font-light leading-relaxed"
            style={{ color: 'var(--cs-text-dim)' }}
          >
            That creates a natural reason to upgrade. Once the messages are accurate enough to act
            on, teams want more seats and wider coverage. Growth comes from the value they already
            get, not from a sales push.
          </p>
        </div>

        <div className="cs-reveal">
          <GrowthCurve />
        </div>
      </div>

      {/* closing one-liner */}
      <div className="mt-40 border-t pt-20 text-center" style={{ borderColor: 'var(--cs-line)' }}>
        <p className="cs-reveal-blur mx-auto max-w-4xl cs-serif text-[clamp(1.8rem,4.5vw,3.6rem)] leading-[1.08]">
          Anyone can answer a question. The real advantage is knowing which one to raise{' '}
          <span style={{ color: 'var(--cs-accent)' }}>before you ask</span>.
        </p>
      </div>
    </section>
  )
}

function GrowthCurve() {
  return (
    <div
      className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border p-8"
      style={{
        borderColor: 'var(--cs-line)',
        background: 'linear-gradient(160deg, var(--cs-panel), var(--cs-bg))',
      }}
    >
      <svg viewBox="0 0 400 320" className="h-full w-full" fill="none" aria-hidden>
        {/* baseline grid */}
        {[80, 160, 240].map((y) => (
          <line
            key={y}
            x1="20"
            y1={y}
            x2="380"
            y2={y}
            stroke="var(--cs-line)"
            strokeDasharray="2 8"
          />
        ))}
        {/* flat "reactive" reference */}
        <line
          x1="20"
          y1="250"
          x2="380"
          y2="230"
          stroke="var(--cs-mute)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.5"
        />
        {/* compounding curve, drawn on scroll */}
        <path
          className="cs-draw"
          d="M20 280 C 120 275, 200 250, 260 180 S 340 60, 380 30"
          stroke="var(--cs-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ '--dash': 620 } as React.CSSProperties}
        />
        <circle
          cx="380"
          cy="30"
          r="6"
          fill="var(--cs-accent)"
          style={{ filter: 'drop-shadow(0 0 10px var(--cs-glow))' }}
        />
      </svg>
      <div
        className="pointer-events-none absolute inset-x-8 bottom-6 flex justify-between text-[10px] uppercase tracking-[0.2em]"
        style={{ color: 'var(--cs-mute)' }}
      >
        <span>day one</span>
        <span style={{ color: 'var(--cs-accent)' }}>more context, better results →</span>
      </div>
    </div>
  )
}

/* ---- shared ------------------------------------------------------------ */

function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="text-[12px] font-semibold tracking-[0.24em]"
        style={{ color: 'var(--cs-accent)' }}
      >
        {n}
      </span>
      <span className="h-px w-8" style={{ background: 'var(--cs-line-strong)' }} />
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.28em]"
        style={{ color: 'var(--cs-mute)' }}
      >
        {label}
      </span>
    </div>
  )
}
