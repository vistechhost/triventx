'use client'

import { useState, useEffect, useTransition } from 'react'
import { Users, Download, Search, Filter, Eye } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { getLeadsAction, updateLeadStatus } from '@/lib/actions/leads'
import { formatDateTime } from '@/lib/utils/format'
import type { Lead } from '@/lib/types'

const statusOptions: Lead['status'][] = ['new', 'contacted', 'qualified', 'closed']
const statusVariant: Record<Lead['status'], 'accent' | 'warning' | 'secondary' | 'neutral'> = {
  new: 'accent',
  contacted: 'warning',
  qualified: 'secondary',
  closed: 'neutral',
}

function exportCSV(leads: Lead[]) {
  const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Project Size', 'Status', 'Date']
  const rows = leads.map((l) => [
    l.name, l.email, l.phone, l.company || '',
    l.serviceInterest, l.projectSize || '', l.status,
    formatDateTime(l.createdAt),
  ])
  const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<Lead['status'] | 'all'>('all')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    getLeadsAction().then((data) => {
      setLeads(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const filtered = leads.filter((l) => {
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      (l.company || '').toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || l.status === statusFilter
    return matchSearch && matchStatus
  })

  const handleStatusChange = (id: string, status: Lead['status']) => {
    startTransition(async () => {
      await updateLeadStatus(id, status)
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)))
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-text-primary">Leads</h1>
          <p className="text-sm text-text-secondary mt-1">{leads.length} total submissions</p>
        </div>
        <button
          onClick={() => exportCSV(leads)}
          className="inline-flex items-center gap-2 text-sm bg-white border border-border text-text-primary font-semibold px-4 py-2 rounded-xl hover:shadow-card transition-all"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="search"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            aria-label="Search leads"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Lead['status'] | 'all')}
            className="pl-10 pr-8 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer appearance-none"
            aria-label="Filter by status"
          >
            <option value="all">All Statuses</option>
            {statusOptions.map((s) => (
              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-text-secondary">
            <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-3" />
            Loading leads...
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <Users className="w-12 h-12 text-text-secondary/30 mx-auto mb-3" />
            <p className="font-medium text-text-secondary">No leads found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full" aria-label="Leads table">
              <thead className="border-b border-border">
                <tr>
                  {['Name', 'Email', 'Service', 'Status', 'Date', 'Actions'].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wide px-5 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-background-subtle transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-sm text-text-primary">{lead.name}</p>
                      {lead.company && <p className="text-xs text-text-secondary">{lead.company}</p>}
                    </td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{lead.email}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary capitalize">
                      {lead.serviceInterest.replace(/-/g, ' ')}
                    </td>
                    <td className="px-5 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                        disabled={isPending}
                        className="text-xs font-semibold bg-transparent border-0 outline-none cursor-pointer"
                        aria-label={`Change status for ${lead.name}`}
                      >
                        {statusOptions.map((s) => (
                          <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-4 text-xs text-text-secondary">{formatDateTime(lead.createdAt)}</td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/5 transition-colors"
                        aria-label={`View details for ${lead.name}`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Lead detail modal */}
      <Modal
        open={!!selectedLead}
        onClose={() => setSelectedLead(null)}
        title="Lead Details"
        size="md"
      >
        {selectedLead && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Name', value: selectedLead.name },
                { label: 'Email', value: selectedLead.email },
                { label: 'Phone', value: selectedLead.phone },
                { label: 'Company', value: selectedLead.company || '—' },
                { label: 'Service', value: selectedLead.serviceInterest.replace(/-/g, ' ') },
                { label: 'Project Size', value: selectedLead.projectSize || '—' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-text-primary mt-0.5 capitalize">{value}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">Message</p>
              <p className="text-sm text-text-secondary leading-relaxed bg-background-subtle rounded-xl p-4">
                {selectedLead.message}
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <Badge variant={statusVariant[selectedLead.status]} dot>
                {selectedLead.status.charAt(0).toUpperCase() + selectedLead.status.slice(1)}
              </Badge>
              <p className="text-xs text-text-secondary">{formatDateTime(selectedLead.createdAt)}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
