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
      'High-impact, data-driven proposals built on LiDAR data, satellite imagery, production modeling, and savings calculations — helping installers close more deals.',
    longDescription: `High-impact, data-driven solar proposals developed using LiDAR data, satellite imagery, system production modeling, energy analysis, and savings calculations. Our proposals provide customers with clear and compelling project insights while helping installers accelerate sales and improve conversion rates.

Each proposal includes a detailed system overview, site-specific production estimates using NREL TMY data, 25-year financial projections with utility rate escalation, incentive breakdowns (federal, state, SREC, and utility programs, where the customer is eligible), and a clean executive summary built for homeowners.

Our team delivers within 2 hours so your sales reps never lose momentum between site assessment and close.`,
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
      'Comprehensive site evaluations covering roof measurements, satellite imagery, shading analysis, and structural considerations — the foundation for accurate system design.',
    longDescription: `Comprehensive site evaluations incorporating roof measurements, satellite imagery, shading analysis, structural considerations, and site-specific conditions. These assessments provide the technical foundation required for accurate system sizing, equipment placement, and installation planning.

Using industry-leading tools such as AuroraSolar, Helioscope, and Scanifly, we model each site with LiDAR-precision roof geometry and real shading data, so system size, layout, and production are validated before design and permitting begin.`,
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
      'Complete, AHJ-ready permit plan sets and full permitting support — site plans, module layouts, single-line diagrams, structural details, SolarAPP+ submissions, and AHJ coordination.',
    longDescription: `Our Permit Design Services form the foundation of a streamlined, efficient, and successful solar installation process. We provide comprehensive, AHJ-ready permit plan packages engineered to facilitate faster approvals, minimize revision cycles, mitigate costly project delays, and keep installations progressing on schedule.

Each permit package is developed with meticulous attention to technical accuracy and regulatory compliance, adhering to NEC 2020/2023 standards, applicable building and fire codes, local jurisdictional requirements, and utility-specific guidelines. Our rigorous quality-control process is designed to maximize the likelihood of first-time approval, helping solar installers reduce administrative overhead and move projects from permitting to construction with greater speed and confidence.

Complete permit packages incorporate site plans, module layouts, electrical schematics, single-line diagrams, structural details, equipment specifications, code notes, and NEC-compliant documentation. Our goal is simple: deliver permit-ready designs that accelerate approvals and installation timelines.

We also manage the permit itself, with full-service support covering permit package preparation, SolarAPP+ submissions, AHJ coordination, application management, revision support, and compliance verification. Our team helps reduce permitting complexity and keeps projects moving toward approval.`,
    tat: '6 Hours',
    features: [
      'Scaled Site Plans – Accurate panel layouts and equipment placement',
      'Single-Line Diagrams (SLD) – Clear electrical system representation',
      'Three-Line Diagrams (3LD) – Detailed electrical design documentation',
      'Code Compliance Review – AHJ-specific verification and permitting support',
      'NEC 2020/2023 Compliance – Up-to-date industry-standard documentation',
      'Equipment Cut Sheets & Specifications – Complete technical documentation for approvals',
      'SolarAPP+ Submissions – Automated permitting where the jurisdiction supports it',
      'AHJ Coordination – Permit application management through to approval',
      'Revision Support – AHJ-requested corrections handled until the permit is approved',
    ],
    planIncludes: [
      'Permit-ready solar drawings prepared according to AHJ and utility requirements',
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
      'Representative sheets from a residential PV permit set. Project identifiers have been removed. Select a sheet to view it full size.',
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
      'Licensed professional engineering support — structural calculations, electrical reviews, and code compliance verification, with PE-stamped documentation where required.',
    longDescription: `Licensed professional engineering support covering structural calculations, electrical engineering reviews, code compliance verification, and jurisdiction-specific requirements. Where required, we provide PE-reviewed and stamped documentation suitable for permitting and regulatory submission.

We provide electrical P.E. stamps for single-line diagrams, three-line diagrams, and power system studies. Structural stamps cover racking system designs, ballasted systems, and ground mounts. All calculations comply with NEC, ASCE 7, IBC, and local building codes.

Our PE stamp service includes permit compliance letters, professional engineer wet stamps or digital signatures, and engineer's calculations as required by the AHJ.`,
    tat: '18-24 Hours',
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
      'End-to-end utility interconnection support — application preparation, technical documentation, and coordination throughout the approval process.',
    longDescription: `End-to-end utility interconnection support, including application preparation, technical documentation, system information, utility-specific requirements, and coordination throughout the approval process. Our structured approach helps simplify grid-connection requirements and reduce administrative bottlenecks.

From the initial customer proposal through system design, permitting, interconnection, installation documentation, and final utility approval, our experienced engineering team provides reliable support across the entire solar project lifecycle.`,
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
      'Accurate post-installation documentation reflecting field modifications, final equipment locations, and installed system configurations — inspection-ready for closeout.',
    longDescription: `Accurate post-installation as-built documentation reflecting field modifications, final equipment locations, installed system configurations, and construction changes. These records provide reliable, inspection-ready documentation for project closeout, future maintenance, and utility or AHJ requirements.

We update all affected drawings from your original permit set: site plans with final panel placement, single-line diagrams with as-installed equipment model numbers and wire sizes, and any structural modifications. Our team compares your site photos and field markups against the original designs to produce accurate, closeout-ready documentation.

Delivered within 6 hours of receiving your field documentation, our as-builts have a 99.2% first-submission closeout rate.`,
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
      'Completed residential rooftop installations — the field conditions our as-built drawings capture for closeout, inspection, and future maintenance.',
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
      'PTO support and project closeout — utility submissions, required documentation, compliance verification, and coordination of final approval requirements.',
    longDescription: `Comprehensive PTO support and project closeout services, including utility submissions, required documentation, compliance verification, and coordination of final approval requirements. We help installers move completed systems toward operational status with greater efficiency.

We combine technical expertise, streamlined workflows, and compliance-driven processes to ensure every project progresses efficiently from concept to commissioning and closeout.`,
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
      'Engineering and documentation support for onshore and offshore wind projects — site and turbine layouts, electrical design, permit packages, and grid-connection documentation.',
    longDescription: `TriventX extends its renewable engineering practice to wind energy, supporting developers, EPC companies, and contractors on onshore and offshore wind projects with accurate, code-compliant design documentation.

Our team prepares site and turbine layout drawings, electrical single-line and collection-system diagrams, permit packages, and interconnection documentation, and coordinates with licensed professional engineers wherever a stamped submission is required.

From early feasibility through construction documentation and as-built records, we apply the same structured workflows and quality-control procedures we use on solar projects, so your documentation stays consistent, complete, and ready for review.`,
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
      'From utility-scale onshore sites to offshore arrays, we provide the engineering documentation each stage of the project requires.',
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
      'Design documentation for telecom infrastructure — 4G/5G sites, fiber-optic routes, site power, and permit-ready construction drawings for carriers and contractors.',
    longDescription: `TriventX supports carriers, tower companies, and contractors with design documentation for telecommunications infrastructure, including mobile network sites, broadband, and fiber-optic networks.

We prepare 4G/5G site layouts, tower and rooftop equipment drawings, fiber-optic route and outside-plant drawings, and site power and backup system diagrams, along with the permit and right-of-way packages needed to move construction forward.

Our engineering support extends through closeout, with as-built documentation and PE review coordination wherever a stamped submission is required, so each site is delivered with complete and consistent records.`,
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
    'Accurate, efficient, and code-compliant solar PV design and engineering drawings for solar installers, EPC companies, and contractors.',
  phone: SITE_CONFIG.phone ? formatPhone(SITE_CONFIG.phone) : '',
  email: SITE_CONFIG.email ?? '',
  address: SITE_CONFIG.address ? addressLines(SITE_CONFIG.address).join(', ') : '',
  social: SITE_CONFIG.social,
  footerTagline: 'Engineering smarter. Delivering faster. Helping solar businesses scale.',
  stats: {
    projects: 10000,
    installers: 500,
    states: 50,
    avgTAT: '6 Hours',
  },
}
