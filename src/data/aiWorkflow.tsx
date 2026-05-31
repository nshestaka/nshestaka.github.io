import type { ReactNode } from 'react'

export type WorkflowStep = {
  id: string
  label: string
  tool: string
  description: string
  illustration: ReactNode
}

/** Each illustration is a hand-drawn sketch image from /public/workflow,
 *  rendered with object-cover so it fills the right half of the card. */
function SynthesisIllustration() {
  return (
    <img
      src="/workflow/synthesis.png"
      alt="Synthesis — molecular knowledge graph sketch"
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
  )
}

function PersonasIllustration() {
  return (
    <img
      src="/workflow/personas.png"
      alt="Personas — line-portrait sketch"
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
  )
}

function ConceptingIllustration() {
  return (
    <img
      src="/workflow/concepting.png"
      alt="Concepting — twisting sculptural form sketch"
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
  )
}

function PrototypingIllustration() {
  return (
    <img
      src="/workflow/prototyping.png"
      alt="Prototyping — architectural geometric sketch"
      className="absolute inset-0 h-full w-full object-cover"
      style={{ filter: 'grayscale(1) sepia(0.18) contrast(1.02)' }}
      loading="lazy"
    />
  )
}

function IllustrationsIllustration() {
  return (
    <img
      src="/workflow/illustrations.png"
      alt="Illustrations — organic cellular sketch"
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
  )
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'synthesis',
    label: 'Synthesis',
    tool: 'Claude',
    description:
      'I use AI to analyze hours of user interviews in seconds, clustering themes and extracting actionable insights to inform design decisions faster.',
    illustration: <SynthesisIllustration />,
  },
  {
    id: 'personas',
    label: 'Personas',
    tool: 'ChatGPT, Claude',
    description:
      'I build pressure-test personas grounded in real research data, so concepts can be stress-tested against believable users long before the first usability session.',
    illustration: <PersonasIllustration />,
  },
  {
    id: 'concepting',
    label: 'Concepting',
    tool: 'Claude, FigmaMake',
    description:
      'Concept exploration at sketch speed. I generate moodboards and visual directions in minutes, then layer in editorial craft and intent on top — never the other way around.',
    illustration: <ConceptingIllustration />,
  },
  {
    id: 'prototyping',
    label: 'Prototyping',
    tool: 'Claude Code, Conductor',
    description:
      'Working prototypes that ship, not throwaway click-dummies. AI pairing on real code means the handoff is the actual product — same components, same behaviour, no translation layer.',
    illustration: <PrototypingIllustration />,
  },
  {
    id: 'illustrations',
    label: 'Illustrations',
    tool: 'Gemini, NanoBanana',
    description:
      'Custom illustration systems for brands. AI generation paired with strong art direction, so the visual language stays consistent across surfaces — no stock, no slop.',
    illustration: <IllustrationsIllustration />,
  },
]
