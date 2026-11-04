import type { FAQItem } from '../types'

export type FAQEntry = FAQItem & {
  id: string
  link?: { href: string; label: string }
}

export const FAQS: FAQEntry[] = [
  {
    id: 'turnaround',
    question: 'What is your typical turnaround time for permit designs?',
    answer:
      'Our standard turnaround for solar permit design packages is 6 hours from confirmed receipt of all required project information. Rush orders can be completed in as little as 3 hours. Sales proposals are typically delivered within 2 hours. Engineering stamps require 18–24 hours to allow proper engineering review.',
  },
  {
    id: 'response-time',
    question: 'How quickly will you respond to my request?',
    answer:
      'During business hours we reply within 30 minutes. Requests sent outside business hours are answered the next business morning. Your first reply includes a quote and delivery date once we have your project details.',
  },
  {
    id: 'nec',
    question: 'Which NEC edition do your designs comply with?',
    answer:
      'We design to the NEC edition adopted by each jurisdiction, most commonly NEC 2020 or 2023. We track jurisdiction-specific code adoptions, apply the correct edition for your project location, and note the applicable code cycle on every set of drawings.',
  },
  {
    id: 'revisions',
    question: 'How many revisions are included with each service?',
    answer:
      'Permit design packages include unlimited revisions requested by the AHJ or utility, at no charge, until the permit is approved. That also covers errors on our side, like-for-like equipment swaps, and minor layout changes before approval. A redesign, such as adding battery storage or changing the mounting type, is quoted separately.',
    link: { href: '/terms#revisions', label: 'Read the full revision policy' },
  },
  {
    id: 'commercial',
    question: 'Can you handle utility-scale and commercial projects?',
    answer:
      'Yes. While we specialize in residential and light commercial solar (up to ~2 MW), our engineering team handles ground-mount utility-scale projects, BESS (battery storage) systems, carport canopies, and multi-building commercial installations. For projects over 500 kW, please contact us directly for a custom scope and timeline.',
  },
  {
    id: 'wind-telecom',
    question: 'Do you support wind energy and telecom projects?',
    answer:
      'Yes. Beyond solar, we provide engineering documentation for onshore and offshore wind projects and for telecom infrastructure, including 4G/5G sites and fiber-optic networks. Tell us about your project and we will confirm scope and timing.',
    link: { href: '/services', label: 'See all services' },
  },
  {
    id: 'formats',
    question: 'What file formats do you deliver?',
    answer:
      'Standard deliverables are provided in PDF format, print-ready at 24"×36" or 11"×17" as required by the AHJ. We also provide native CAD files (AutoCAD DWG/DXF) upon request at no extra charge.',
  },
  {
    id: 'pe-stamps',
    question: 'Do you provide PE stamps for all 50 states?',
    answer:
      'Yes. We maintain a network of licensed Professional Engineers covering all 50 states. For electrical stamps, we use PE-licensed electrical engineers in the required state. For structural stamps, we use state-licensed structural or civil PEs. All stamp engineers carry current E&O insurance. Proof of licensure can be provided upon request.',
  },
  {
    id: 'interconnection',
    question: 'Do you handle utility interconnection and PTO?',
    answer:
      'Yes. Beyond design and permitting, we provide end-to-end utility interconnection support — application preparation, technical documentation, system information, and coordination throughout the approval process. Our PTO support covers utility submissions, required closeout documentation, compliance verification, and coordination of final approval requirements.',
  },
  {
    id: 'international',
    question: 'Do you work with clients outside the United States?',
    answer:
      'Yes. Our core focus is supporting solar installers, EPC companies, and contractors across the United States, and we also deliver engineering documentation to clients and industry partners in Canada and Europe.',
  },
  {
    id: 'submit',
    question: 'How do I submit a new project?',
    answer:
      'Use the project form on our Contact page, where you can attach PDFs, DWG files, surveys, and photos, or send everything by email. For permit designs, we need: site address, utility company, roof photos or satellite image, equipment selections (inverter, modules, racking), and any existing site plans.',
    link: { href: '/contact', label: 'Go to the project form' },
  },
  {
    id: 'pricing',
    question: 'What is your pricing structure?',
    answer:
      'We offer per-project pricing with volume discounts for installers completing 10+ projects monthly. Pricing varies by service type, system complexity, and jurisdiction. We provide transparent, upfront quotes with no hidden fees. Contact us for a custom pricing proposal, or request our rate card for standard residential projects.',
  },
]

export function faqsById(ids: string[]): FAQEntry[] {
  return ids.flatMap((id) => FAQS.filter((faq) => faq.id === id))
}
