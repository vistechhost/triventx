import type { Service } from '../types'
import type { Timestamp } from 'firebase/firestore'

// Static fallback data used when Firestore is unavailable
export const SERVICES_DATA: Omit<Service, 'updatedAt'>[] = [
  {
    id: 'solar-permit-design',
    slug: 'solar-permit-design',
    title: 'Solar Permit Design',
    shortDescription:
      'AHJ-compliant permit packages with site plans, single-line diagrams, and NEC-code stamped drawings — delivered in 6 hours.',
    longDescription: `Our permit design service is the backbone of every successful solar installation. We produce complete, AHJ-ready permit packages that pass on the first submission — eliminating costly revision cycles and project delays.

Every package includes scaled site plans, single-line and three-line electrical diagrams, equipment specifications, warning labels, and NEC/NESC compliance documentation. Our engineers cross-reference local building codes for all 50 states, ensuring your permit is submission-ready regardless of jurisdiction.

We've processed over 10,000 permit designs for installers ranging from boutique residential firms to Fortune 500 EPC contractors. Our quality assurance process includes a three-stage review by licensed engineers before every delivery.`,
    tat: '6 Hours',
    features: [
      'Scaled site plans with panel placement',
      'Single-line electrical diagrams (SLD)',
      'Three-line electrical diagrams (3LD)',
      'NEC 2020/2023 compliant documentation',
      'AHJ-specific code compliance review',
      'Equipment cut sheets & spec sheets',
      'Warning & danger label placements',
      'Fire setback & pathways documentation',
      'Structural attachment detail drawings',
      'Unlimited revisions until permit approval',
    ],
    heroImageUrl: '',
    iconName: 'FileText',
    order: 1,
  },
  {
    id: 'solar-sales-proposals',
    slug: 'solar-sales-proposals',
    title: 'Solar Sales Proposals',
    shortDescription:
      'Professionally designed, data-rich proposals that close deals faster — with production estimates, ROI analysis, and 25-year savings projections.',
    longDescription: `Convert more leads into signed contracts with our premium solar sales proposals. We combine accurate production modeling with compelling visual design to create proposals your customers will actually read.

Each proposal includes a detailed system overview, site-specific production estimates using NREL TMY data, 25-year financial projections with utility rate escalation, incentive breakdowns (ITC, SREC, local rebates), and a clean executive summary built for homeowners.

Our team delivers within 2 hours so your sales reps never lose momentum between site assessment and close. We've helped over 300 installers increase their close rate by an average of 23% through professional, data-backed proposals.`,
    tat: '2 Hours',
    features: [
      'Branded proposal with company logo & colors',
      'System design overview with roof layout',
      'Monthly & annual production estimates (kWh)',
      '25-year financial savings projections',
      'Federal ITC and state incentive breakdown',
      'Utility rate escalation modeling',
      'Payback period and ROI analysis',
      'Environmental impact metrics (CO₂ offset)',
      'Multiple financing options comparison',
      'AuroraSolar / OpenSolar integration',
    ],
    heroImageUrl: '',
    iconName: 'BarChart3',
    order: 2,
  },
  {
    id: 'solar-preliminary-designs',
    slug: 'solar-preliminary-designs',
    title: 'Solar Preliminary Designs',
    shortDescription:
      'Fast, accurate preliminary layouts using AuroraSolar, Helioscope, and Scanifly to validate system size and production before permit submittal.',
    longDescription: `Our preliminary design service bridges the gap between site assessment and final permit design. Using industry-leading software — AuroraSolar, Helioscope, and Scanifly — we model your site with LiDAR-precision roof geometry, real shading data, and weather-normalized irradiance to produce bankable production estimates.

Preliminary designs are used for customer proposals, financing applications, utility interconnection requests, and internal project validation. Our deliverables include a heat-mapped shading analysis, panel placement drawing, system specifications, and a detailed energy production report.

With a 2-hour turnaround, your project pipeline never stalls waiting for feasibility confirmation.`,
    tat: '2 Hours',
    features: [
      'LiDAR-precision roof geometry modeling',
      'Shading analysis with heat-map overlay',
      'Panel layout optimization for max yield',
      'Hourly energy production simulation',
      'AuroraSolar, Helioscope, Scanifly tools',
      'System sizing recommendations',
      'Tilt & azimuth optimization',
      'Obstructions & setback identification',
      'Interconnection feasibility report',
      'Exportable PDF & native software files',
    ],
    heroImageUrl: '',
    iconName: 'Sun',
    order: 3,
  },
  {
    id: 'engineering-stamps',
    slug: 'engineering-stamps',
    title: 'Engineering Stamps',
    shortDescription:
      'Licensed P.E. stamps for all 50 states — structural, electrical, and power system studies with full code compliance in 18–24 hours.',
    longDescription: `Many jurisdictions require a licensed Professional Engineer to stamp solar permit drawings before approval. Our network of state-licensed P.E. engineers covers all 50 states, ensuring you have the right credentials for every project — from residential rooftops to multi-MW commercial arrays.

We provide electrical P.E. stamps for single-line diagrams, three-line diagrams, and power system studies. Structural stamps cover racking system designs, ballasted systems, and ground mounts. All calculations comply with NEC, ASCE 7, IBC, and local building codes.

Our PE stamp service includes permit compliance letters, professional engineer wet stamps or digital signatures, and engineer's calculations as required by the AHJ.`,
    tat: '18-24 Hours',
    features: [
      'Licensed P.E. coverage in all 50 states',
      'Electrical P.E. stamps (SLD, 3LD)',
      'Structural P.E. stamps (racking, ground mount)',
      'Power system studies (load flow, short circuit)',
      'Permit compliance letters',
      'Stamped engineer\'s calculations',
      'NEC, NESC, ASCE 7, IBC compliance',
      'Residential & commercial systems',
      'Ground-mount & carport structures',
      'Digital & wet stamp options',
    ],
    heroImageUrl: '',
    iconName: 'Award',
    order: 4,
  },
  {
    id: 'as-built-drawings',
    slug: 'as-built-drawings',
    title: 'As-Built Drawings',
    shortDescription:
      'Post-installation as-built documentation capturing field changes, final layouts, and updated single-line diagrams for AHJ closeout.',
    longDescription: `As-built drawings are the final record of how a solar system was actually installed — a legal requirement for AHJ final inspection and utility interconnection closeout. Field conditions often differ from the original permit drawings, and as-builts capture every deviation.

We update all affected drawings from your original permit set: site plans with final panel placement, single-line diagrams with as-installed equipment model numbers and wire sizes, and any structural modifications. Our team compares your site photos and field markups against the original designs to produce accurate, closeout-ready documentation.

Delivered within 6 hours of receiving your field documentation, our as-builts have a 99.2% first-submission closeout rate.`,
    tat: '6 Hours',
    features: [
      'Updated site plan with final panel layout',
      'Revised single-line diagram (as-installed)',
      'Field deviation documentation',
      'As-installed equipment model updates',
      'Wire gauge & conduit fill verification',
      'Interconnection closeout package',
      'AHJ-required stamp updates',
      'Digital & print-ready formats',
      'Revision tracking vs. original permit',
      'Final inspection checklist included',
    ],
    heroImageUrl: '',
    iconName: 'PenTool',
    order: 5,
  },
  {
    id: 'cad-conversion',
    slug: 'cad-conversion',
    title: 'CAD Conversion',
    shortDescription:
      'Convert hand-drawn sketches, PDFs, or legacy drawings to professional CAD format — DWG, DXF, or RVT — with full layer organization.',
    longDescription: `Many solar installers operate from hand-drawn site sketches, scanned PDFs, or outdated legacy drawings that cannot be directly submitted to AHJs. Our CAD conversion service transforms any source document into clean, submission-ready CAD files.

We convert to AutoCAD DWG, DXF, Revit RVT, or PDF format with proper layer organization, title block formatting, and drawing standards compliance. Our drafters are trained in solar industry conventions and ensure all converted drawings meet AHJ submittal requirements.

Whether you need a single sketch converted or a full project library digitized, we deliver within 6 hours with unlimited revision iterations until you're satisfied.`,
    tat: '6 Hours',
    features: [
      'Sketch-to-CAD conversion (any source)',
      'PDF-to-DWG/DXF conversion',
      'AutoCAD, DXF, RVT, PDF output formats',
      'Full layer organization & color coding',
      'Title block & border formatting',
      'Drawing standard compliance (AIA, ANSI)',
      'Batch conversion for project libraries',
      'Dimensioning & annotation cleanup',
      'Scale calibration & verification',
      'Unlimited revision rounds',
    ],
    heroImageUrl: '',
    iconName: 'Layers',
    order: 6,
  },
]

export const SITE_SETTINGS_DEFAULT = {
  heroHeadline: 'Engineering the Solar Revolution',
  heroSubheadline:
    'Precision solar permit designs, engineering stamps, and project documentation — delivered in hours, not days.',
  phone: '+1 (888) 247-6535',
  email: 'hello@triventxenergy.com',
  address: '1234 Innovation Drive, Suite 400, Austin, TX 78701',
  social: {
    linkedin: 'https://linkedin.com/company/triventxenergy',
    facebook: 'https://facebook.com/triventxenergy',
    instagram: 'https://instagram.com/triventxenergy',
    twitter: 'https://twitter.com/triventxenergy',
  },
  footerTagline: 'Powering the clean energy transition through precision engineering.',
  stats: {
    projects: 10000,
    installers: 500,
    states: 50,
    avgTAT: '6 Hours',
  },
}
