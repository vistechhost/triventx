import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ToastProvider } from '@/components/ui/Toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://triventxenergy.com'),
  title: {
    default: 'TriventX Energy LLP — Solar Engineering Services',
    template: '%s | TriventX Energy LLP',
  },
  description:
    'Precision solar permit designs, engineering stamps, sales proposals, and as-built drawings. AHJ-compliant documentation delivered in hours. Licensed P.E. stamps all 50 US states.',
  keywords: [
    'solar permit design',
    'solar engineering stamps',
    'PE stamp solar',
    'solar as-built drawings',
    'solar sales proposals',
    'AHJ compliant solar drawings',
    'solar preliminary design',
    'CAD conversion solar',
  ],
  authors: [{ name: 'TriventX Energy LLP' }],
  creator: 'TriventX Energy LLP',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://triventxenergy.com',
    siteName: 'TriventX Energy LLP',
    title: 'TriventX Energy LLP — Solar Engineering Services',
    description:
      'Precision solar permit designs, engineering stamps, and project documentation — delivered in hours, not days.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TriventX Energy LLP — Solar Engineering Services',
    description: 'Precision solar engineering services. 6-hour TAT. Licensed P.E. stamps all 50 states.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
