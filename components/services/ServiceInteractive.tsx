'use client'

import dynamic from 'next/dynamic'

const BlueprintHover = dynamic(() => import('./BlueprintHover').then(m => m.BlueprintHover), { ssr: false })
const ProposalPreview = dynamic(() => import('./ProposalPreview').then(m => m.ProposalPreview), { ssr: false })
const AuroraMockup = dynamic(() => import('./AuroraMockup').then(m => m.AuroraMockup), { ssr: false })
const PEStampBadge = dynamic(() => import('./PEStampBadge').then(m => m.PEStampBadge), { ssr: false })
const BeforeAfterSlider = dynamic(() => import('./BeforeAfterSlider').then(m => m.BeforeAfterSlider), { ssr: false })
const CADWireframe = dynamic(() => import('./CADWireframe').then(m => m.CADWireframe), { ssr: false })

const componentMap: Record<string, React.ComponentType> = {
  'solar-permit-design': BlueprintHover,
  'solar-sales-proposals': ProposalPreview,
  'solar-preliminary-designs': AuroraMockup,
  'engineering-stamps': PEStampBadge,
  'as-built-drawings': BeforeAfterSlider,
  'cad-conversion': CADWireframe,
}

export function ServiceInteractive({ slug }: { slug: string }) {
  const Component = componentMap[slug]
  if (!Component) return null
  return <Component />
}
