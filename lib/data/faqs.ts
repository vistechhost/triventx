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
      'Permit designs: 6 hours. Rush: 3 hours. Sales proposals: 2 hours. PE review: 6 hours. The clock starts once we have all project details.',
  },
  {
    id: 'response-time',
    question: 'How quickly will you respond to my request?',
    answer:
      'Within 30 minutes during business hours, or the next business morning after hours. Your first reply includes a quote and delivery date.',
  },
  {
    id: 'nec',
    question: 'Which NEC edition do your designs comply with?',
    answer:
      'The edition your jurisdiction has adopted — usually NEC 2020 or 2023. The code cycle is noted on every drawing set.',
  },
  {
    id: 'revisions',
    question: 'How many revisions are included with each service?',
    answer:
      'Unlimited AHJ and utility revisions, free, until the permit is approved — including our errors, like-for-like equipment swaps, and minor layout changes. Redesigns, such as adding batteries, are quoted separately.',
    link: { href: '/terms#revisions', label: 'Read the full revision policy' },
  },
  {
    id: 'commercial',
    question: 'Can you handle utility-scale and commercial projects?',
    answer:
      'Yes. We focus on residential and light commercial (up to ~2 MW) and also handle ground mounts, battery storage, carports, and multi-building sites. Over 500 kW? Contact us for a custom scope.',
  },
  {
    id: 'wind-telecom',
    question: 'Do you support wind energy and telecom projects?',
    answer:
      'Yes — onshore and offshore wind, plus telecom sites, including 4G/5G and fiber-optic networks.',
    link: { href: '/services', label: 'See all services' },
  },
  {
    id: 'formats',
    question: 'What file formats do you deliver?',
    answer:
      'Print-ready PDFs at 24"×36" or 11"×17", as the AHJ requires. Native CAD files (DWG/DXF) on request, at no extra charge.',
  },
  {
    id: 'pe-stamps',
    question: 'Do you provide PE stamps for all 50 states?',
    answer:
      'Yes. Licensed electrical and structural PEs in every state, all with current E&O insurance. Proof of licensure on request.',
  },
  {
    id: 'interconnection',
    question: 'Do you handle utility interconnection and PTO?',
    answer:
      'Yes — utility applications, technical documents, and coordination through approval, plus PTO submissions and closeout.',
  },
  {
    id: 'international',
    question: 'Do you work with clients outside the United States?',
    answer:
      'Yes. Our focus is the United States, and we also support clients in Canada and Europe.',
  },
  {
    id: 'submit',
    question: 'How do I submit a new project?',
    answer:
      'Use the project form on our Contact page or email us. For permit designs, send the site address, utility, roof photos or satellite image, equipment choices, and any existing site plans.',
    link: { href: '/contact', label: 'Go to the project form' },
  },
  {
    id: 'pricing',
    question: 'What is your pricing structure?',
    answer:
      'Per-project pricing, with volume discounts from 10+ projects a month. Upfront quotes with no hidden fees. Ask for our rate card.',
  },
]

export function faqsById(ids: string[]): FAQEntry[] {
  return ids.flatMap((id) => FAQS.filter((faq) => faq.id === id))
}
