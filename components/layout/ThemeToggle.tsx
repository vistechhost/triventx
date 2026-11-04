'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils/cn'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/5 transition-colors',
        className,
      )}
      aria-label="Switch between light and dark theme"
    >
      {/* Driven by the `dark` class, so the right icon shows before hydration. */}
      <Moon className="w-5 h-5 dark:hidden" aria-hidden="true" />
      <Sun className="w-5 h-5 hidden dark:block" aria-hidden="true" />
    </button>
  )
}
