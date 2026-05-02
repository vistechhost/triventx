import { Sidebar } from '@/components/admin/Sidebar'

export const metadata = {
  title: {
    default: 'Admin Dashboard | TriventX Energy',
    template: '%s | TriventX Admin',
  },
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
