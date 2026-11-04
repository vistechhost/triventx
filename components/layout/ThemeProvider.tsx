'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

// Follows the visitor's OS setting until they choose a theme with the toggle.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}
