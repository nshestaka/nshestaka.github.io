/**
 * KnowledgeGraph - the signature scroll-linked visual.
 *
 * A hub-and-spoke graph that seeds from a single node and densifies into a rich
 * web as the reader scrolls. Every node and edge owns a slice of the parent
 * `--graph` view-timeline (declared on the tall section that wraps this scene),
 * so the growth is driven entirely by native CSS scroll-driven animation - off
 * the main thread, no scroll listeners.
 *
 * Without timeline support, or under prefers-reduced-motion, the full graph is
 * shown at rest (the "rich" end state) - never a blank canvas.
 */

const CX = 300
const CY = 300

type Node = { id: string; x: number; y: number; r: number; ring: number; f: number }

type Ring = { count: number; radius: number; r: number; f: number; phase: number }

const RINGS: Ring[] = [
  { count: 1, radius: 0, r: 9, f: 0, phase: 0 },
  { count: 6, radius: 98, r: 6, f: 0.14, phase: 0.15 },
  { count: 11, radius: 176, r: 4, f: 0.34, phase: 0.42 },
  { count: 17, radius: 240, r: 3, f: 0.55, phase: 0.1 },
  { count: 22, radius: 288, r: 2.1, f: 0.76, phase: 0.34 },
]

// Concrete context types, attached to the six primary (gold) nodes so the graph
// communicates what the accumulated context actually is.
const CONTEXT_LABELS = [
  'your role',
  'watched topics',
  'past questions',
  'flagged reviews',
  'trusted sources',
  'your team',
]

// Timeline window (in `cover` %) across which the whole graph assembles.
const START = 18
const END = 76

function range(f: number, span = 9): string {
  const s = START + f * (END - START - span)
  return `cover ${s.toFixed(1)}% cover ${(s + span).toFixed(1)}%`
}

function buildNodes(): Node[][] {
  return RINGS.map((ring, ri) =>
    Array.from({ length: ring.count }, (_, i) => {
      const angle = (i / ring.count) * Math.PI * 2 + ring.phase
      return {
        id: `${ri}-${i}`,
        x: CX + Math.cos(angle) * ring.radius,
        y: CY + Math.sin(angle) * ring.radius,
        r: ring.r,
        ring: ri,
        // spread reveal within a ring so siblings don't pop in unison
        f: Math.min(1, ring.f + (i / Math.max(1, ring.count)) * 0.12),
      }
    }),
  )
}

function edgeLen(a: Node, b: Node): number {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

export default function KnowledgeGraph({ className = '' }: { className?: string }) {
  const rings = buildNodes()
  const flat = rings.flat()

  // Connect each node to a parent in the previous ring (builds a growing tree).
  const edges: { from: Node; to: Node; f: number }[] = []
  rings.forEach((ring, ri) => {
    if (ri === 0) return
    const parents = rings[ri - 1]
    ring.forEach((node, i) => {
      const parent = parents[Math.floor((i / ring.length) * parents.length)]
      edges.push({ from: parent, to: node, f: node.f })
    })
  })
  // Cross-links so the mature graph reads as a dense web, not just a tree.
  const crossPairs: [number, number][] = [
    [8, 14],
    [10, 20],
    [13, 25],
    [9, 30],
    [16, 35],
    [22, 40],
    [18, 44],
    [26, 48],
    [12, 33],
    [7, 21],
  ]
  crossPairs.forEach(([a, b]) => {
    if (flat[a] && flat[b]) edges.push({ from: flat[a], to: flat[b], f: 0.88 })
  })

  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      fill="none"
      aria-hidden
      role="presentation"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="kg-seed" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--cs-accent-soft)" />
          <stop offset="100%" stopColor="var(--cs-accent)" />
        </radialGradient>
        <filter id="kg-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* soft concentric guides - decorative, faint */}
      {[98, 176, 240, 288].map((rad) => (
        <circle
          key={rad}
          cx={CX}
          cy={CY}
          r={rad}
          stroke="var(--cs-line)"
          strokeWidth={1}
          strokeDasharray="2 8"
        />
      ))}

      {/* edges (drawn first, under nodes) */}
      {edges.map((e, i) => {
        const len = Math.ceil(edgeLen(e.from, e.to))
        return (
          <line
            key={`e-${i}`}
            className="g-edge"
            x1={e.from.x}
            y1={e.from.y}
            x2={e.to.x}
            y2={e.to.y}
            stroke="var(--cs-line-strong)"
            strokeWidth={e.to.ring <= 1 ? 1.4 : 1}
            style={
              {
                '--dash': len,
                animationRange: range(Math.max(0, e.f - 0.04), 7),
              } as React.CSSProperties
            }
          />
        )
      })}

      {/* nodes */}
      {flat.map((n) => {
        const isSeed = n.ring === 0
        return (
          <circle
            key={n.id}
            className="g-node"
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={isSeed ? 'url(#kg-seed)' : n.ring === 1 ? 'var(--cs-accent)' : 'var(--cs-text)'}
            filter={isSeed ? 'url(#kg-glow)' : undefined}
            style={{ animationRange: range(n.f, isSeed ? 6 : 8) } as React.CSSProperties}
          />
        )
      })}

      {/* seed pulse - the "live" heartbeat of accumulated context */}
      <circle
        cx={CX}
        cy={CY}
        r={9}
        fill="none"
        stroke="var(--cs-accent)"
        strokeWidth={1.5}
        className="cs-pulse"
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />

      {/* center label */}
      <text
        className="g-label"
        x={CX}
        y={CY - 20}
        textAnchor="middle"
        fill="var(--cs-text-dim)"
        style={{
          font: '600 11px var(--font-sans)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          animationRange: range(0.06, 8),
        }}
      >
        you
      </text>

      {/* concrete labels attached to each primary node — so the graph says
          plainly what the accumulated context is, instead of vague side words */}
      {rings[1]?.map((n, i) => {
        const dx = n.x - CX
        const dy = n.y - CY
        const len = Math.hypot(dx, dy) || 1
        const ux = dx / len
        const uy = dy / len
        const anchor = ux > 0.25 ? 'start' : ux < -0.25 ? 'end' : 'middle'
        return (
          <text
            key={`lbl-${i}`}
            className="g-label"
            x={n.x + ux * 15}
            y={n.y + uy * 15}
            textAnchor={anchor}
            dominantBaseline="middle"
            fill="var(--cs-mute)"
            style={{
              font: '500 10.5px var(--font-sans)',
              letterSpacing: '0.06em',
              animationRange: range(Math.min(1, n.f + 0.03), 8),
            }}
          >
            {CONTEXT_LABELS[i] ?? ''}
          </text>
        )
      })}
    </svg>
  )
}
