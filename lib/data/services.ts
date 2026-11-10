import type { Service } from '../types'
import { SITE_CONFIG } from './site-config'
import { addressLines, formatPhone } from '../utils/contact'

// Static fallback data used when Firestore is unavailable
export const SERVICES_DATA: Omit<Service, 'updatedAt'>[] = [
  {
    id: 'solar-sales-proposals',
    slug: 'solar-sales-proposals',
    title: 'Solar Sales Proposals',
    category: 'solar',
    shortDescription:
      'Data-driven proposals built on LiDAR, production modeling, and savings analysis — made to close deals.',
    longDescription: `Data-driven solar proposals built on LiDAR data, satellite imagery, production modeling, and savings analysis.

Each proposal covers the system, production estimates, 25-year savings, and eligible incentives — delivered within 2 hours.`,
    tat: '2 Hours',
    features: [
      'LiDAR data & satellite imagery analysis',
      'System production modeling',
      'Energy usage analysis',
      'Savings & payback calculations',
      'Monthly & annual production estimates (kWh)',
      'Federal, state & utility incentive breakdown',
      'Utility rate escalation modeling',
      'Branded proposal with company logo & colors',
      'Multiple financing options comparison',
      'Environmental impact metrics (CO₂ offset)',
    ],
    heroImageUrl: '/images/solar-proposal-sample.jpg',
    iconName: 'BarChart3',
    order: 1,
  },
  {
    id: 'site-surveys-remote-assessments',
    slug: 'site-surveys-remote-assessments',
    title: 'Site Surveys & Assessments',
    category: 'solar',
    shortDescription:
      'Roof measurements, shading, and structural review — the base for accurate system design.',
    longDescription: `Detailed site evaluations covering roof measurements, satellite imagery, shading, and structural conditions.

Modeled in AuroraSolar, Helioscope, and Scanifly, so size, layout, and production are confirmed before design begins.`,
    tat: '',
    features: [
      'Roof measurements & geometry modeling',
      'High-resolution satellite imagery review',
      'Shading analysis with heat-map overlay',
      'Structural considerations review',
      'Site-specific conditions & obstructions',
      'System sizing guidance',
      'Equipment placement planning',
      'Installation planning support',
    ],
    heroImageUrl: '/images/site-survey-electrical-check.jpg',
    iconName: 'Satellite',
    order: 2,
  },
  {
    id: 'solar-permit-design',
    slug: 'solar-permit-design',
    title: 'Solar Permit Design',
    category: 'solar',
    shortDescription:
      'AHJ-ready permit plan sets and full permitting — SLDs, structural details, SolarAPP+, and AHJ coordination.',
    longDescription: `AHJ-ready permit plan sets built for faster approvals and fewer revisions.

Every package follows NEC 2020/2023, local building and fire codes, and utility rules. We also manage the permit itself — SolarAPP+, AHJ coordination, and revisions through approval.`,
    tat: '6 Hours',
    features: [
      'Scaled Site Plans – Panel layout & equipment placement',
      'Single-Line Diagrams (SLD) – Clear electrical overview',
      'Three-Line Diagrams (3LD) – Detailed electrical design',
      'Code Compliance Review – AHJ-specific checks',
      'NEC 2020/2023 Compliance – Current code editions',
      'Equipment Cut Sheets – Specs for approval',
      'SolarAPP+ Submissions – Where the AHJ supports it',
      'AHJ Coordination – Managed through approval',
      'Revision Support – AHJ corrections until approval',
    ],
    planIncludes: [
      'Permit-ready drawings to AHJ & utility rules',
      'Electrical Single Line & Triple Line Diagrams',
      'Structural Calculations',
      'Equipment Specifications',
      'Code Compliance Review',
      '24/7 Revision Support',
    ],
    heroImageUrl: '/images/permit-site-plan.png',
    heroImageFit: 'contain',
    galleryTitle: 'Sample Permit Drawings',
    galleryDescription:
      'Sheets from a residential permit set, project details removed. Click to view full size.',
    gallery: [
      { src: '/images/permit-site-plan.png', caption: 'PV 1.0 — Site plan with roof sections, fire pathways, and setbacks', fit: 'contain' },
      { src: '/images/permit-three-line-diagram.png', caption: 'E 1.1 — Three-line diagram with conduit and conductor schedule', fit: 'contain' },
      { src: '/images/permit-attachment-string-layout.png', caption: 'PV 1.1 — Attachment and string layout with point-load table', fit: 'contain' },
    ],
    iconName: 'FileText',
    order: 3,
  },
  {
    id: 'engineering-stamps',
    slug: 'engineering-stamps',
    title: 'PE Review & Stamping',
    category: 'solar',
    shortDescription:
      'Licensed PE structural and electrical review, with stamped documents where required.',
    longDescription: `Licensed PE review of structural and electrical design, with stamped documents where your AHJ requires them.

Electrical stamps for SLDs, 3LDs, and power studies. Structural stamps for racking, ballasted, and ground-mount systems — all to NEC, ASCE 7, and IBC.`,
    tat: '6 Hours',
    features: [
      'Structural calculations',
      'Electrical engineering reviews',
      'Code compliance verification',
      'Jurisdiction-specific requirements',
      'PE-reviewed & stamped documentation',
      'Electrical P.E. stamps (SLD, 3LD)',
      'Structural P.E. stamps (racking, ground mount)',
      'Permit compliance letters',
      'NEC, ASCE 7, IBC compliance',
      'Digital & wet stamp options',
    ],
    heroImageUrl: '/images/pe-review-rooftop-plans.jpg',
    iconName: 'Award',
    order: 4,
  },
  {
    id: 'interconnection-services',
    slug: 'interconnection-services',
    title: 'Interconnection Services',
    category: 'solar',
    shortDescription:
      'Utility applications, technical documents, and coordination through approval.',
    longDescription: `End-to-end utility interconnection support, from application to approval.

We prepare the application and technical documents, meet each utility's requirements, and coordinate until the system is approved.`,
    tat: '',
    features: [
      'Interconnection application preparation',
      'Technical documentation',
      'System information packages',
      'Utility-specific requirements',
      'Grid-connection requirement review',
      'Coordination through utility approval',
    ],
    heroImageUrl: '/images/solar-savings-review.jpg',
    iconName: 'PlugZap',
    order: 5,
  },
  {
    id: 'as-built-drawings',
    slug: 'as-built-drawings',
    title: 'As-Built Drawings',
    category: 'solar',
    shortDescription:
      'Post-install drawings showing field changes and final equipment — ready for closeout.',
    longDescription: `Accurate as-built drawings showing field changes, final equipment locations, and the installed system.

We update your original permit set from site photos and field markups — delivered within 6 hours, ready for inspection and closeout.`,
    tat: '6 Hours',
    features: [
      'Field modification documentation',
      'Final equipment locations',
      'Installed system configuration',
      'Construction change records',
      'Updated site plan with final panel layout',
      'Revised single-line diagram (as-installed)',
      'Inspection-ready closeout package',
      'Records for future maintenance',
      'Revision tracking vs. original permit',
      'Digital & print-ready formats',
    ],
    galleryTitle: 'As-Built Solar Projects — Residential',
    galleryDescription:
      'Completed rooftop installs — the field conditions our as-builts capture.',
    gallery: [
      { src: '/images/residential-solar-home.jpg', caption: 'Two-story residence with a pitched-roof PV array' },
      { src: '/images/hero-us-home-solar.jpg', caption: 'Single-story home with a multi-plane rooftop array' },
      { src: '/images/completed-residential-installation.jpg', caption: 'Multi-plane array on a clay-tile roof' },
      { src: '/images/solar-installation-crew.jpg', caption: 'Installation in progress on a shingle roof' },
    ],
    heroImageUrl: '/images/residential-solar-home.jpg',
    iconName: 'PenTool',
    order: 6,
  },
  {
    id: 'pto-support',
    slug: 'pto-support',
    title: 'PTO (Permission to Operate) Support',
    shortTitle: 'PTO Support',
    category: 'solar',
    shortDescription:
      'Utility submissions, closeout documents, and final approval coordination.',
    longDescription: `PTO and closeout support that moves finished systems to operation.

Utility submissions, closeout documents, compliance checks, and final approval coordination.`,
    tat: '',
    features: [
      'PTO utility submissions',
      'Required closeout documentation',
      'Compliance verification',
      'Final approval coordination',
      'Project closeout services',
      'Commissioning & closeout support',
    ],
    heroImageUrl: '/images/completed-residential-installation.jpg',
    iconName: 'BadgeCheck',
    order: 7,
  },
  {
    id: 'wind-energy-services',
    slug: 'wind-energy-services',
    title: 'Wind Energy Services',
    category: 'other',
    shortDescription:
      'Turbine layouts, electrical design, permits, and grid documents for onshore and offshore wind.',
    longDescription: `Engineering documentation for onshore and offshore wind projects.

Site and turbine layouts, electrical and collection-system diagrams, permits, and grid documents — with PE coordination where a stamp is needed.`,
    tat: '',
    features: [
      'Site & turbine layout drawings',
      'Wind resource & feasibility study support',
      'Electrical single-line & collection-system diagrams',
      'Foundation & access-road coordination drawings',
      'Permit & environmental documentation packages',
      'Grid interconnection documentation',
      'PE review coordination where required',
      'As-built drawings & closeout records',
    ],
    heroVisualUrl: '/images/wind-onshore-farm.jpg',
    heroImageUrl: '/images/wind-engineering-team.jpg',
    galleryTitle: 'Wind Project Types We Support',
    galleryDescription:
      'Onshore and offshore — documentation for every project stage.',
    gallery: [
      { src: '/images/wind-turbine-closeup.jpg', caption: 'Onshore utility-scale turbines' },
      { src: '/images/wind-offshore-farm.jpg', caption: 'Offshore wind arrays' },
      { src: '/images/wind-field-engineer.jpg', caption: 'Field verification and as-built records' },
    ],
    iconName: 'Wind',
    order: 8,
  },
  {
    id: 'telecom-engineering-services',
    slug: 'telecom-engineering-services',
    title: 'Telecom Engineering Services',
    category: 'other',
    shortDescription:
      '4G/5G sites, fiber routes, site power, and permit-ready construction drawings.',
    longDescription: `Design documentation for mobile, broadband, and fiber-optic networks.

4G/5G site layouts, tower and rooftop drawings, fiber routes, site power diagrams, and permit packages — through to as-builts.`,
    tat: '',
    features: [
      '4G/5G site design drawings',
      'Tower & rooftop equipment layouts',
      'Fiber-optic route & outside-plant drawings',
      'Broadband & enterprise network documentation',
      'Site power & backup system diagrams',
      'Permit & right-of-way packages',
      'PE review coordination where required',
      'As-built documentation',
    ],
    heroVisualUrl: '/images/telecom-5g-tower.jpg',
    heroImageUrl: '/images/telecom-network-operations.jpg',
    iconName: 'RadioTower',
    order: 9,
  },
]

export const SOLAR_SERVICES = SERVICES_DATA.filter((s) => s.category === 'solar')
export const OTHER_SERVICES = SERVICES_DATA.filter((s) => s.category === 'other')

export function serviceLabel(service: Pick<Service, 'title' | 'shortTitle'>): string {
  return service.shortTitle ?? service.title
}

export const SERVICE_OPTIONS = [
  ...SERVICES_DATA.map((s) => ({ value: s.slug, label: serviceLabel(s) })),
  { value: 'multiple', label: 'Multiple Services' },
]

export const SITE_SETTINGS_DEFAULT = {
  heroHeadline: 'Engineering Smarter. Delivering Faster.',
  heroSubheadline:
    'Code-compliant solar design and engineering for installers, EPCs, and contractors.',
  phone: SITE_CONFIG.phone ? formatPhone(SITE_CONFIG.phone) : '',
  email: SITE_CONFIG.email ?? '',
  address: SITE_CONFIG.address ? addressLines(SITE_CONFIG.address).join(', ') : '',
  social: SITE_CONFIG.social,
  footerTagline: 'Engineering smarter. Delivering faster.',
  stats: {
    projects: 10000,
    installers: 500,
    states: 50,
    avgTAT: '6 Hours',
  },
}
