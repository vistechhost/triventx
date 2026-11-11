import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/data/site-config'
import { whatsappHref } from '@/lib/utils/contact'

export function WhatsAppButton() {
  if (!SITE_CONFIG.whatsapp) return null

  return (
    <a
      href={whatsappHref(SITE_CONFIG.whatsapp, "Hi TriventX, I'd like to discuss a project.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-navy-950 shadow-xl transition-transform hover:-translate-y-0.5"
      aria-label="Chat with our sales team on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  )
}
