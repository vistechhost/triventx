import type { Service } from '../types'
import type { Timestamp } from 'firebase/firestore'

// Static fallback data used when Firestore is unavailable
export const SERVICES_DATA: Omit<Service, 'updatedAt'>[] = [
  {
    id: 'solar-sales-proposals',
    slug: 'solar-sales-proposals',
    title: 'Solar Sales Proposals',
    shortDescription:
      'High-impact, data-driven proposals built on LiDAR data, satellite imagery, production modeling, and savings calculations — helping installers close more deals.',
    longDescription: `High-impact, data-driven solar proposals developed using LiDAR data, satellite imagery, system production modeling, energy analysis, and savings calculations. Our proposals provide customers with clear and compelling project insights while helping installers accelerate sales and improve conversion rates.

Each proposal includes a detailed system overview, site-specific production estimates using NREL TMY data, 25-year financial projections with utility rate escalation, incentive breakdowns (ITC, SREC, local rebates), and a clean executive summary built for homeowners.

Our team delivers within 2 hours so your sales reps never lose momentum between site assessment and close.`,
    tat: '2 Hours',
    features: [
      'LiDAR data & satellite imagery analysis',
      'System production modeling',
      'Energy usage analysis',
      'Savings & payback calculations',
      'Monthly & annual production estimates (kWh)',
      'Federal ITC and state incentive breakdown',
      'Utility rate escalation modeling',
      'Branded proposal with company logo & colors',
      'Multiple financing options comparison',
      'Environmental impact metrics (CO₂ offset)',
    ],
    heroImageUrl: '/images/solar-savings-review.jpg',
    iconName: 'BarChart3',
    order: 1,
  },
  {
    id: 'site-surveys-remote-assessments',
    slug: 'site-surveys-remote-assessments',
    title: 'Site Surveys & Remote Assessments',
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
    heroImageUrl: '/images/modern-home-rooftop-solar.jpg',
    iconName: 'Satellite',
    order: 2,
  },
  {
    id: 'solar-permit-design',
    slug: 'solar-permit-design',
    title: 'Solar Permit Design',
    shortDescription:
      'Complete, AHJ-ready permit plan sets — site plans, module layouts, single-line diagrams, structural details, and NEC-compliant documentation built to minimize revisions.',
    longDescription: `Our Permit Design Services form the foundation of a streamlined, efficient, and successful solar installation process. We provide comprehensive, AHJ-ready permit plan packages engineered to facilitate faster approvals, minimize revision cycles, mitigate costly project delays, and keep installations progressing on schedule.

Each permit package is developed with meticulous attention to technical accuracy and regulatory compliance, adhering to NEC 2020/2023 standards, applicable building and fire codes, local jurisdictional requirements, and utility-specific guidelines. Our rigorous quality-control process is designed to maximize the likelihood of first-time approval, helping solar installers reduce administrative overhead and move projects from permitting to construction with greater speed and confidence.

Complete permit packages incorporate site plans, module layouts, electrical schematics, single-line diagrams, structural details, equipment specifications, code notes, and NEC-compliant documentation. Our goal is simple: deliver permit-ready designs that accelerate approvals and installation timelines.`,
    tat: '6 Hours',
    features: [
      'Scaled Site Plans – Accurate panel layouts and equipment placement',
      'Single-Line Diagrams (SLD) – Clear electrical system representation',
      'Three-Line Diagrams (3LD) – Detailed electrical design documentation',
      'Code Compliance Review – AHJ-specific verification and permitting support',
      'NEC 2020/2023 Compliance – Up-to-date industry-standard documentation',
      'Equipment Cut Sheets & Specifications – Complete technical documentation for approvals',
    ],
    planIncludes: [
      'Permit-ready solar drawings prepared according to AHJ and utility requirements',
      'Electrical Single Line & Triple Line Diagrams',
      'Structural Calculations',
      'Equipment Specifications',
      'Code Compliance Review',
      '24/7 Revision Support',
    ],
    heroImageUrl: '/images/completed-residential-installation.jpg',
    iconName: 'FileText',
    order: 3,
  },
  {
    id: 'engineering-stamps',
    slug: 'engineering-stamps',
    title: 'PE Review & Stamping',
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
    heroImageUrl: '/images/solar-installation-crew.jpg',
    iconName: 'Award',
    order: 4,
  },
  {
    id: 'solar-permitting-services',
    slug: 'solar-permitting-services',
    title: 'Solar Permitting Services',
    shortDescription:
      'Full-service permitting support — permit package preparation, SolarAPP+ submissions, AHJ coordination, application management, and revision support.',
    longDescription: `Full-service solar permitting support covering permit package preparation, SolarAPP+ submissions, AHJ coordination, application management, revision support, and compliance verification. Our team helps reduce permitting complexity and keeps projects moving toward approval.

Our engineering solutions are developed with a strong focus on accuracy, regulatory compliance, operational efficiency, and rapid turnaround, enabling our clients to manage higher project volumes while maintaining consistent quality.`,
    tat: '',
    features: [
      'Permit package preparation',
      'SolarAPP+ submissions',
      'AHJ coordination',
      'Permit application management',
      'Revision support',
      'Compliance verification',
    ],
    heroImageUrl: '/images/modern-home-rooftop-solar.jpg',
    iconName: 'ClipboardCheck',
    order: 5,
  },
  {
    id: 'interconnection-services',
    slug: 'interconnection-services',
    title: 'Interconnection Services',
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
    order: 6,
  },
  {
    id: 'as-built-drawings',
    slug: 'as-built-drawings',
    title: 'As-Built Drawings',
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
    gallery: [
      { src: '/images/residential-solar-home.jpg', caption: 'Two-story residence with a pitched-roof PV array' },
      { src: '/images/modern-home-rooftop-solar.jpg', caption: 'Modern flat-roof home with a tilted rooftop array' },
      { src: '/images/completed-residential-installation.jpg', caption: 'Multi-plane array on a clay-tile roof' },
      { src: '/images/solar-installation-crew.jpg', caption: 'Installation in progress on a shingle roof' },
    ],
    heroImageUrl: '/images/residential-solar-home.jpg',
    iconName: 'PenTool',
    order: 7,
  },
  {
    id: 'pto-support',
    slug: 'pto-support',
    title: 'PTO (Permission to Operate) Support',
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
    order: 8,
  },
]

export const SITE_SETTINGS_DEFAULT = {
  heroHeadline: 'Engineering Smarter. Delivering Faster.',
  heroSubheadline:
    'Accurate, efficient, and code-compliant solar PV design and engineering drawings for solar installers, EPC companies, and contractors.',
  phone: '+1 (888) 247-6535',
  email: 'hello@triventxenergy.com',
  address: '1234 Innovation Drive, Suite 400, Austin, TX 78701',
  social: {
    linkedin: 'https://linkedin.com/company/triventxenergy',
    facebook: 'https://facebook.com/triventxenergy',
    instagram: 'https://instagram.com/triventxenergy',
    twitter: 'https://twitter.com/triventxenergy',
  },
  footerTagline: 'Engineering smarter. Delivering faster. Helping solar businesses scale.',
  stats: {
    projects: 10000,
    installers: 500,
    states: 50,
    avgTAT: '6 Hours',
  },
}
