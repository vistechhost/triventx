import { Users, FileText, Image, Clock, Plus, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { StatCard } from '@/components/admin/StatCard'
import { getRecentLeadsAction, getLeadsAction } from '@/lib/actions/leads'
import { Badge } from '@/components/ui/Badge'
import { formatDateTime } from '@/lib/utils/format'
import type { Lead } from '@/lib/types'

const statusVariant: Record<Lead['status'], 'accent' | 'warning' | 'secondary' | 'neutral'> = {
  new: 'accent',
  contacted: 'warning',
  qualified: 'secondary',
  closed: 'neutral',
}

export const dynamic = 'force-dynamic'

async function getDashboardData() {
  try {
    const [allLeads, recentLeads] = await Promise.all([
      getLeadsAction(),
      getRecentLeadsAction(5),
    ])
    const now = Date.now()
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000
    const newLeads7d = allLeads.filter((l) => {
      const ts = l.createdAt as unknown as { _seconds: number }
      return ts._seconds * 1000 > sevenDaysAgo
    })
    return { total: allLeads.length, newLeads7d: newLeads7d.length, recentLeads }
  } catch {
    return { total: 0, newLeads7d: 0, recentLeads: [] }
  }
}

export default async function AdminDashboardPage() {
  const { total, newLeads7d, recentLeads } = await getDashboardData()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-text-primary">Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Welcome back to TriventX Admin</p>
        </div>
        <Link
          href="/contact"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm bg-primary text-white font-semibold px-4 py-2 rounded-xl hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" />
          View Public Site
        </Link>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Leads"
          value={total}
          icon={<Users className="w-5 h-5" />}
          trend={{ value: 12, label: 'vs last month' }}
          color="primary"
        />
        <StatCard
          title="New Leads (7d)"
          value={newLeads7d}
          icon={<Clock className="w-5 h-5" />}
          trend={{ value: 8, label: 'vs last week' }}
          color="accent"
        />
        <StatCard
          title="Total Services"
          value="6"
          icon={<FileText className="w-5 h-5" />}
          color="secondary"
        />
        <StatCard
          title="Last Updated"
          value="Today"
          icon={<Image className="w-5 h-5" />}
          color="purple"
        />
      </div>

      {/* Recent leads */}
      <div className="bg-white rounded-2xl border border-border shadow-card">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-heading font-semibold text-lg text-text-primary">Recent Leads</h2>
          <Link
            href="/admin/leads"
            className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {recentLeads.length === 0 ? (
          <div className="px-6 py-12 text-center text-text-secondary">
            <Users className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No leads yet</p>
            <p className="text-sm">Leads submitted through the contact form will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full" aria-label="Recent leads">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-6 py-3">Name</th>
                  <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-6 py-3">Email</th>
                  <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-6 py-3 hidden md:table-cell">Service</th>
                  <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-6 py-3">Status</th>
                  <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-6 py-3 hidden lg:table-cell">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-background-subtle transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-sm text-text-primary">{lead.name}</p>
                      {lead.company && <p className="text-xs text-text-secondary">{lead.company}</p>}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{lead.email}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary hidden md:table-cell">
                      {lead.serviceInterest.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={statusVariant[lead.status]} dot>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-xs text-text-secondary hidden lg:table-cell">
                      {formatDateTime(lead.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="font-heading font-semibold text-lg text-text-primary mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { href: '/admin/services', label: 'Edit Services', icon: FileText, color: 'bg-primary/10 text-primary' },
            { href: '/admin/leads', label: 'Manage Leads', icon: Users, color: 'bg-accent/10 text-accent' },
            { href: '/admin/images', label: 'Upload Images', icon: Image, color: 'bg-secondary/10 text-secondary' },
            { href: '/admin/site-settings', label: 'Site Settings', icon: Clock, color: 'bg-purple-50 text-purple-600' },
          ].map(({ href, label, icon: Icon, color }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-border hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-text-primary text-center">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
