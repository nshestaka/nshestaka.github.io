export type CaseStudy = {
  id: string
  number: string
  title: string
  kicker: string
  year: string
  role: string
  description: string
  tags: string[]
  cover: string
  /**
   * Optional pencil-sketch variant. When present, the case study card uses the
   * "torch beam" interaction: sketch on top, color below, hover reveals a
   * circular saturated window at the cursor.
   */
  sketchCover?: string
  slug: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'learnhub',
    number: '01',
    title: 'LearnHub',
    kicker: 'Mobile · Education',
    year: '2024',
    role: 'Lead Product Designer',
    description:
      'The goal of a project was to design an application that could help users to develop their career, so that an app could flexibly offer users the courses that are based on career preferences.',
    tags: [
      'Competitor Analysis',
      'Surveys',
      'Inteviews',
      'Jobs Stories',
      'CJM',
      'Prioritization Model Kano',
      'Information Architecture',
      'User Flows',
      'Ptototyping',
      'User Testing',
      'UI Design',
    ],
    cover: '/covers/learnhub.jpg',
    slug: 'learnhub',
  },
  {
    id: 'desiam',
    number: '02',
    title: 'DESIAM',
    kicker: 'Web · Community platform',
    year: '2023',
    role: 'UX/UI Designer',
    description:
      'Web platform where you can store, organize your reference materials, easily collaborate with your team, and also create mood boards right on the web service.',
    tags: [
      'Competitor Analysis',
      'Interviews',
      'User Stories',
      'Personas',
      'Hypothesis',
      'Wireframes',
      'UI Kit',
      'UI Design',
      'Adaptives',
    ],
    cover: '/covers/desiam.jpg',
    slug: 'desiam',
  },
  {
    id: 'winery',
    number: '03',
    title: 'Stine Winery',
    kicker: 'Web · E-commerce',
    year: '2023',
    role: 'Designer & Art Director',
    description:
      "A goal was to create a website that will keep clients and wine enthusiasts informed and up to dated about the winery until it's revived, allowing them to order wines available in ware houses, and explore potential future tours and sommelier courses.",
    tags: [
      'Competitor Analysis',
      'Interviews',
      'User Stories',
      'Hypothesis',
      'Wireframes',
      'UI Kit',
      'UI Design',
      'Adaptives',
      'E-commerce',
    ],
    cover: '/covers/winery.jpg',
    slug: 'stine-winery',
  },
]
