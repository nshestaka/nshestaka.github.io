/**
 * Long-form narrative for the full case-study pages, modelled as an ordered
 * list of typed blocks so each case study can mix section shapes (text,
 * stats, persona, problem/solution table, palette, feature showcase…).
 *
 * The DESIAM content below is transcribed from the Figma source
 * (node 9334-73829). Copy is taken verbatim from the design's text layers;
 * a few long paragraphs are condensed where the source text was truncated.
 * The device-mockup product screenshots in the original are not yet exported
 * — feature blocks render branded placeholder panels until those assets land.
 */

export type Block =
  | { kind: 'text'; heading?: string; body: string[] }
  | { kind: 'stats'; intro?: string; stats: { value: string; label: string }[] }
  | { kind: 'persona'; name: string; role: string; bio: string; rationale?: string }
  | {
      kind: 'table'
      heading?: string
      columns: string[]
      rows: string[][]
      note?: string
    }
  | {
      kind: 'palette'
      colors: { name: string; hex: string }[]
      fonts: { name: string; use: string }[]
    }
  | { kind: 'feature'; heading?: string; body: string }

export type CaseStudyContent = {
  /** Brand accent adopted from the product, used for headings/numbers. */
  accent?: string
  blocks: Block[]
}

export const caseStudyContent: Record<string, CaseStudyContent> = {
  desiam: {
    accent: '#FFED42',
    blocks: [
      {
        kind: 'text',
        body: [
          'Let’s face it — starting work on a new creative project often does not go so smoothly. Inspiration, references and past work end up scattered across bookmarks, folders and chats.',
          'What if we created a web service where you can not only find inspiration, save references and your portfolio, and share your works —',
          '— but also start the primary work process right within the web service: create a mood board, organise references, and collaborate with your team in one place.',
        ],
      },
      {
        kind: 'text',
        heading: 'Design process',
        body: [
          'A UX-led path from discovery to a polished, adaptive interface.',
          'Competitor Analysis · In-depth Interview · Colours & Typography · UI Kit · UI Design · Adaptive Mobile',
        ],
      },
      {
        kind: 'stats',
        intro:
          'By asking deeper questions, I got at the heart of the matter and revealed the pain points. In total, there were 8 interviews.',
        stats: [
          { value: '8', label: 'in-depth interviews conducted' },
          {
            value: '6',
            label: 'wished they had a reference-storing tool on every project',
          },
          { value: '1', label: 'primary persona synthesised from the research' },
        ],
      },
      {
        kind: 'persona',
        name: 'HELEN',
        role: 'UI Designer, 28 y.o.',
        bio: 'Helen juggles multiple creative projects at once. She collects inspiration constantly but loses track of it across tools, and struggles to share visual context with her team quickly.',
        rationale:
          'Based on the quality research I figured out only one persona — the workflows and pain points converged tightly around a single type of user.',
      },
      {
        kind: 'text',
        heading: 'User stories',
        body: [
          'Crafting user stories enables me to create a more empathetic and user-centric design — grounding every feature in a real need rather than an assumption.',
        ],
      },
      {
        kind: 'table',
        heading: 'From problem to solution',
        columns: ['Problem', 'If we create…', 'Then we’ll get…'],
        rows: [
          [
            'References are hard to find again once saved.',
            'a search system with filters and tags,',
            'inspiration that resurfaces instantly, project after project.',
          ],
          [
            'Mood boards live in separate tools.',
            'a “make moodboard” button right in the service,',
            'the primary work starting where the references already are.',
          ],
          [
            'Sharing visual context with a team is slow.',
            'a “start collaboration” button,',
            'teams aligned around the same board in real time.',
          ],
        ],
        note: 'Each hypothesis was validated against the research before moving into design.',
      },
      {
        kind: 'text',
        heading: 'Prototyping',
        body: [
          'Prototyping let me test my design assumptions early — validating flows on real device layouts before committing to high-fidelity UI.',
        ],
      },
      {
        kind: 'palette',
        colors: [
          { name: 'Desiam Primary', hex: '#FFED42' },
          { name: 'Desiam Secondary 1', hex: '#AAC9CC' },
          { name: 'Desiam Secondary 2', hex: '#E4EFF0' },
        ],
        fonts: [
          { name: 'Adobe Devanagari', use: 'Emphasises the strength of quotes.' },
          { name: 'Euclid Circular A', use: 'The base font for headers and body text.' },
        ],
      },
      {
        kind: 'feature',
        heading: 'A UI kit built to scale',
        body: 'Cards, mood-board actions, buttons and more — a consistent component library kept the interface coherent as the product grew, on a spacing scale of 80 / 48 / 16 / 8.',
      },
      {
        kind: 'feature',
        heading: 'Share your work',
        body: 'While sharing a work you can add tags, a description, team members and links to any item you want to share.',
      },
      {
        kind: 'feature',
        heading: 'Collaborate on a moodboard',
        body: 'While working on a moodboard you can add team members, use shapes and text, create a to-do list, drop in other works, and sketch by hand — together, in real time.',
      },
      {
        kind: 'feature',
        heading: 'Need a job?',
        body: 'Right within the web service you can find a job — or find a talent to cooperate with.',
      },
      {
        kind: 'feature',
        heading: 'Looking for a talent?',
        body: 'The same space works both ways: post an opening or discover designers to collaborate with.',
      },
    ],
  },
}
