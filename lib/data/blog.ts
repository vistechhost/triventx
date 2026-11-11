/**
 * Blog articles. Each post is a list of short sections: a heading, an optional
 * one-line intro, and bullet points — the same point-to-point style as the rest
 * of the site. Add a new post to the top of the list; the newest shows first.
 *
 * Keep posts educational and code-accurate. Don't put company claims
 * (numbers, client names, results) in a post unless they're confirmed.
 */

export type BlogSection = {
  heading: string
  intro?: string
  points?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: 'Permitting' | 'Codes & Standards' | 'Interconnection'
  /** YYYY-MM-DD */
  publishedOn: string
  readMinutes: number
  image: string
  imageAlt: string
  /** `contain` keeps drawings whole on a white background instead of cropping them. */
  imageFit?: 'cover' | 'contain'
  sections: BlogSection[]
  /** Service page the post's call to action points to. */
  relatedService?: { href: string; label: string }
}

export const BLOG_AUTHOR = 'TriventX Engineering Team'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'common-reasons-solar-permits-get-rejected',
    title: '7 Common Reasons Solar Permits Get Rejected',
    excerpt: 'The plan-check comments we see most often — and how to avoid them before you submit.',
    category: 'Permitting',
    publishedOn: '2026-11-11',
    readMinutes: 4,
    image: '/images/permit-three-line-diagram.png',
    imageAlt: 'Three-line electrical diagram from a solar permit plan set',
    imageFit: 'contain',
    sections: [
      {
        heading: '1. Wrong code edition',
        points: [
          'Designing to an NEC or fire code edition the AHJ hasn’t adopted.',
          'Missing the local amendments that sit on top of the model codes.',
          'Fix: confirm the adopted editions and note them on the cover sheet.',
        ],
      },
      {
        heading: '2. Fire pathways and setbacks',
        points: [
          'Roof access pathways and ridge setbacks missing or not dimensioned.',
          'Array placed where the local fire code doesn’t allow it.',
          'Fix: dimension every pathway on the roof plan.',
        ],
      },
      {
        heading: '3. Incomplete structural information',
        points: [
          'No rafter size, spacing, or span shown.',
          'Attachment spacing missing, or load calculations left out where the AHJ requires them.',
          'Fix: include attachment details and the roof framing on the plans.',
        ],
      },
      {
        heading: '4. Equipment that doesn’t match',
        points: [
          'Model numbers on the plans differ from the datasheets attached.',
          'Datasheets that don’t show the required listings.',
          'Fix: cross-check every model number before you submit.',
        ],
      },
      {
        heading: '5. Electrical errors',
        points: [
          'Undersized conductors or incorrect overcurrent protection.',
          'Busbar loading (the 120% rule, NEC 705.12) not addressed.',
          'Grounding, bonding, or rapid shutdown method not shown.',
        ],
      },
      {
        heading: '6. Missing labels and placards',
        points: [
          'Required NEC warning labels not listed or not located.',
          'No placard showing the location of disconnects and rapid shutdown.',
        ],
      },
      {
        heading: '7. Hard-to-read drawings',
        points: [
          'Missing scale, north arrow, dimensions, or sheet numbers.',
          'Sheets that don’t meet the AHJ’s size or format rules.',
        ],
      },
      {
        heading: 'Before you submit',
        points: [
          'Download the AHJ’s current submittal checklist.',
          'Check code editions, setbacks, and structural details.',
          'Match every model number to its datasheet.',
          'Have a second engineer QA the full set.',
        ],
      },
    ],
    relatedService: { href: '/services/solar-permit-design', label: 'Solar permit design' },
  },
  {
    slug: 'what-goes-into-a-permit-ready-solar-plan-set',
    title: 'What Goes Into a Permit-Ready Solar Plan Set',
    excerpt: 'The sheets most AHJs expect to see, and what each one needs to show.',
    category: 'Permitting',
    publishedOn: '2026-11-11',
    readMinutes: 4,
    image: '/images/permit-site-plan.png',
    imageAlt: 'Site plan sheet from a residential solar permit plan set',
    imageFit: 'contain',
    sections: [
      {
        heading: 'Cover sheet',
        points: [
          'Project address, owner, and contractor details.',
          'System size in kW DC and kW AC.',
          'Code editions the design follows.',
          'Sheet index.',
        ],
      },
      {
        heading: 'Site plan',
        points: [
          'Property lines, buildings, and the array location.',
          'Main service panel, meter, and disconnect locations.',
          'Conduit routing between equipment.',
        ],
      },
      {
        heading: 'Roof and array layout',
        points: [
          'Module placement on each roof plane.',
          'Fire code pathways and setbacks, dimensioned.',
          'Roof slope, azimuth, and attachment locations.',
        ],
      },
      {
        heading: 'Structural and attachment details',
        points: [
          'Racking and attachment details.',
          'Rafter size, spacing, and span.',
          'Load checks for wind and snow where the AHJ asks for them.',
        ],
      },
      {
        heading: 'Electrical diagrams',
        points: [
          'Single-line or three-line diagram.',
          'Conductor, conduit, and overcurrent protection sizing.',
          'Grounding, bonding, and the rapid shutdown method.',
          'Interconnection point and busbar calculation.',
        ],
      },
      {
        heading: 'Labels and datasheets',
        points: [
          'Required warning labels and placards, with locations.',
          'Datasheets for modules, inverters, racking, and batteries.',
        ],
      },
      {
        heading: 'Good to know',
        intro: 'Every AHJ is different. Some want structural letters, others accept SolarAPP+ for instant approval. Always check the local checklist first.',
      },
    ],
    relatedService: { href: '/services/solar-permit-design', label: 'Solar permit design' },
  },
  {
    slug: 'nec-690-12-rapid-shutdown-guide',
    title: 'Rapid Shutdown (NEC 690.12): A Quick Guide for Installers',
    excerpt: 'What rapid shutdown requires, how the array boundary works, and what to show on your plans.',
    category: 'Codes & Standards',
    publishedOn: '2026-11-11',
    readMinutes: 3,
    image: '/images/site-survey-electrical-check.jpg',
    imageAlt: 'Technician checking electrical equipment during a solar site survey',
    sections: [
      {
        heading: 'What it is',
        points: [
          'PV systems on buildings must be able to de-energize quickly.',
          'It lowers shock risk for firefighters working on or near the array.',
          'The requirement is in NEC 690.12.',
        ],
      },
      {
        heading: 'The array boundary (2017 NEC and later)',
        points: [
          'The boundary is 1 ft (305 mm) from the array in every direction.',
          'Outside the boundary: controlled conductors drop to 30 V or less within 30 seconds.',
          'Inside the boundary: use a listed PV hazard control system, limit conductors to 80 V within 30 seconds, or meet the no-exposed-wiring option.',
        ],
      },
      {
        heading: 'Initiation device',
        points: [
          'One- and two-family dwellings need it at a readily accessible location outside the building.',
          'The service disconnect often serves as the initiation device.',
        ],
      },
      {
        heading: 'What to show on the plans',
        points: [
          'The rapid shutdown method and equipment, such as module-level electronics.',
          'Location of the initiation device.',
          'Rapid shutdown labels at the service equipment (NEC 690.56(C)).',
          'Datasheets that show the equipment’s rapid shutdown listing.',
        ],
      },
      {
        heading: 'Check the edition',
        intro: 'AHJs adopt different NEC editions (2017, 2020, 2023) and add local amendments. Confirm which applies before you design.',
      },
    ],
    relatedService: { href: '/services/solar-permit-design', label: 'Solar permit design' },
  },
  {
    slug: 'solar-interconnection-to-pto-steps',
    title: 'From Interconnection to PTO: The Steps After the Permit',
    excerpt: 'How a residential solar project moves from utility application to Permission to Operate.',
    category: 'Interconnection',
    publishedOn: '2026-11-11',
    readMinutes: 3,
    image: '/images/completed-residential-installation.jpg',
    imageAlt: 'Completed residential rooftop solar installation',
    sections: [
      {
        heading: '1. Interconnection application',
        points: [
          'Submitted to the utility, usually before installation.',
          'Typically includes a single-line diagram, equipment specs, and system size.',
          'Some utilities also need customer signatures or agreements.',
        ],
      },
      {
        heading: '2. Utility review',
        points: [
          'The utility checks the system against service and transformer capacity.',
          'It may ask for design changes, an export limit, or an upgrade.',
        ],
      },
      {
        heading: '3. Installation and inspection',
        points: [
          'Build to the approved plans.',
          'Pass the AHJ’s final inspection.',
          'Record any field changes on as-built drawings.',
        ],
      },
      {
        heading: '4. Final submission',
        points: [
          'Send proof of the passed inspection to the utility.',
          'Include the final single-line diagram and photos if the utility asks for them.',
        ],
      },
      {
        heading: '5. Meter and Permission to Operate',
        points: [
          'The utility installs or reprograms a bidirectional meter.',
          'It then issues Permission to Operate (PTO).',
          'Don’t switch the system on before PTO.',
        ],
      },
      {
        heading: 'Avoid delays',
        points: [
          'Keep equipment identical across the permit, the application, and the as-builts.',
          'Match the customer name and address to the utility account.',
          'Answer utility requests quickly and track every application’s status.',
        ],
      },
    ],
    relatedService: { href: '/services/interconnection-services', label: 'Interconnection services' },
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${date}T00:00:00Z`),
  )
}
