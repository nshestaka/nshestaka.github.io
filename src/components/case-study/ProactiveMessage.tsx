/**
 * ProactiveMessage - the emotional peak.
 *
 * A glass-morphism notification that composes itself, part by part, as the
 * reader scrolls: header, then the private-context line, then the finding,
 * then sources, then the verification stamp reserved for high-stakes outputs,
 * and finally the actions. Each part reads a slice of the shared `--graph`
 * view-timeline, so the message writes itself while the graph fills in behind.
 *
 * `range` values are in the parent timeline's `cover` space and are tuned to
 * land just after the graph's core nodes appear, so cause (accumulated context)
 * visibly precedes effect (the message).
 */

function part(start: number, span = 8): React.CSSProperties {
  return { animationRange: `cover ${start}% cover ${start + span}%` } as React.CSSProperties
}

export default function ProactiveMessage() {
  return (
    <div className="relative w-full max-w-md">
      {/* the "arriving" glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
        style={{
          background: 'radial-gradient(60% 60% at 30% 0%, var(--cs-glow), transparent 70%)',
        }}
      />

      {/* NDA badge — this is an illustrative mockup */}
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
            'linear-gradient(158deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 48%, rgba(255,255,255,0.06) 100%)',
          boxShadow: '0 30px 80px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.14)',
        }}
      >
        {/* header */}
        <div
          className="msg-part flex items-center gap-3 border-b px-6 py-4"
          style={{ borderColor: 'var(--cs-line)', ...part(28, 7) }}
        >
          <span
            className="relative grid h-8 w-8 place-items-center rounded-full"
            style={{ background: 'var(--cs-accent)' }}
          >
            <span
              className="cs-pulse absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 0 3px var(--cs-glow)' }}
            />
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="#0a0a0c"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </span>
          <div className="leading-tight">
            <p
              className="text-[13px] font-semibold tracking-tight"
              style={{ color: 'var(--cs-text)' }}
            >
              Proactive brief
            </p>
            <p className="text-[11px]" style={{ color: 'var(--cs-mute)' }}>
              You didn&rsquo;t ask, but you&rsquo;ll want this
            </p>
          </div>
          <span className="ml-auto text-[11px]" style={{ color: 'var(--cs-mute)' }}>
            07:12
          </span>
        </div>

        {/* body — generous spacing, only the essentials */}
        <div className="space-y-7 px-6 py-7">
          {/* context provenance */}
          <p
            className="msg-part inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px]"
            style={{ borderColor: 'var(--cs-line)', color: 'var(--cs-text-dim)', ...part(35, 7) }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--cs-accent)' }} />
            Based on 6 weeks of your saved threads
          </p>

          {/* the finding */}
          <p
            className="msg-part cs-serif text-[20px] leading-relaxed"
            style={{ color: 'var(--cs-text)', ...part(44, 10) }}
          >
            A change in the area you watch now affects the review you marked as high-stakes. Worth a
            look before your deadline.
          </p>

          {/* sources */}
          <div className="msg-part flex flex-wrap gap-2" style={part(58, 8)}>
            {['3 primary sources', 'cross-checked', 'expert-QA passed'].map((s) => (
              <span
                key={s}
                className="rounded-md px-2.5 py-1 text-[11px]"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--cs-text-dim)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* verification footer — reserved for high-stakes findings, pinned to the bottom */}
        <div
          className="msg-stamp flex items-center gap-2.5 border-t px-6 py-4"
          style={{ borderColor: 'var(--cs-line)', ...part(66, 10) }}
        >
          <span
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2"
            style={{ borderColor: 'var(--cs-accent)', color: 'var(--cs-accent)' }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: 'var(--cs-accent)' }}
          >
            Verified · safe to forward
          </span>
        </div>
      </div>
    </div>
  )
}
