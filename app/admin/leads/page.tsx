'use client'

import { useState, useEffect, useTransition } from 'react'
import { Users, Download, Search, Filter, Eye, FileText, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { LeadFollowUp, isFollowUpDue } from '@/components/admin/LeadFollowUp'
import { useToast } from '@/components/ui/Toast'
import { getLeadsAction, updateLeadStatus } from '@/lib/actions/leads'
import { getLeadFileUrl } from '@/lib/firebase/storage'
import { SERVICES_DATA, serviceLabel } from '@/lib/data/services'
import { formatDate, formatDateTime } from '@/lib/utils/format'
import type { Lead } from '@/lib/types'

const statusOptions: Lead['status'][] = ['new', 'contacted', 'qualified', 'closed']
const statusVariant: Record<Lead['status'], 'accent' | 'warning' | 'secondary' | 'neutral'> = {
  new: 'accent',
  contacted: 'warning',
  qualified: 'secondary',
  closed: 'neutral',
}

// Older leads may reference a service that has since been renamed or merged.
function serviceName(slug: string): string {
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  return service ? serviceLabel(service) : slug.replace(/-/g, ' ')
}

type StatusFilter = Lead['status'] | 'all' | 'due'

function exportCSV(leads: Lead[]) {
  const headers = [
    'Reference', 'Name', 'Company', 'Email', 'Phone', 'Service', 'Project Volume', 'Project Location', 'Message',
    'Files', 'Submitted From', 'Landing Page', 'Referrer', 'UTM Source', 'UTM Medium', 'UTM Campaign',
    'Status', 'Next Follow-up', 'Notes', 'Date',
  ]
  const rows = leads.map((l) => [
    l.reference || '', l.name, l.company || '', l.email, l.phone,
    serviceName(l.serviceInterest), l.projectVolume || l.projectSize || '', l.projectLocation || '',
    l.message || '', (l.attachments ?? []).map((f) => f.name).join('; '), l.source || '',
    l.attribution?.landingPage || '', l.attribution?.referrer || '', l.attribution?.utmSource || '',
    l.attribution?.utmMedium || '', l.attribution?.utmCampaign || '',
    l.status, l.nextFollowUp || '', l.notes || '',
    formatDateTime(l.createdAt),
  ])
  const csv = [headers, ...rows].map((r) => r.map((v) => `"${v.replace(/"/g, '""')}"`).join(',')).join('\n')
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
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isPending, startTransition] = useTransition()
  const { showToast } = useToast()

  useEffect(() => {
    getLeadsAction().then((data) => {
      setLeads(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const dueCount = leads.filter(isFollowUpDue).length

  const filtered = leads.filter((l) => {
    const term = search.toLowerCase()
    const matchSearch =
      l.name.toLowerCase().includes(term) ||
      l.email.toLowerCase().includes(term) ||
      (l.company || '').toLowerCase().includes(term) ||
      (l.reference || '').toLowerCase().includes(term)
    const matchStatus =
      statusFilter === 'all' || (statusFilter === 'due' ? isFollowUpDue(l) : l.status === statusFilter)
    return matchSearch && matchStatus
  })

  // Keeps the table and the open modal in step after a follow-up change.
  const applyLeadChanges = (id: string, changes: Partial<Lead>) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, ...changes } : l)))
    setSelectedLead((prev) => (prev && prev.id === id ? { ...prev, ...changes } : prev))
  }

  const handleStatusChange = (id: string, status: Lead['status']) => {
    startTransition(async () => {
      await updateLeadStatus(id, status)
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)))
    })
  }

  const handleDownload = async (path: string) => {
    try {
      // Files are stored as attachments, so this downloads them without leaving the page.
      window.location.assign(await getLeadFileUrl(path))
    } catch (error) {
      console.error('Could not open project file:', error)
      showToast('Could not open that file. Please try again.', 'error')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-text-primary">Leads</h1>
          <p className="text-sm text-text-secondary mt-1">
            {leads.length} total submissions
            {dueCount > 0 && (
              <button
                type="button"
                onClick={() => setStatusFilter('due')}
                className="ml-2 font-semibold text-red-600 hover:underline"
              >
                · {dueCount} follow-up{dueCount === 1 ? '' : 's'} due
              </button>
            )}
          </p>
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
            placeholder="Search name, email, company, or reference..."
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
            onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
            className="pl-10 pr-8 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer appearance-none"
            aria-label="Filter by status"
          >
            <option value="all">All Statuses</option>
            <option value="due">Follow-up due</option>
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
                  {['Name', 'Email', 'Service', 'Location', 'Files', 'Status', 'Follow-up', 'Date', 'Actions'].map((h) => (
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
                      {lead.reference && <p className="text-[11px] font-mono text-text-secondary">{lead.reference}</p>}
                    </td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{lead.email}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary">
                      {serviceName(lead.serviceInterest)}
                    </td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{lead.projectLocation || '—'}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{lead.attachments?.length || '—'}</td>
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
                    <td className="px-5 py-4 text-xs whitespace-nowrap">
                      {lead.nextFollowUp ? (
                        <span className={isFollowUpDue(lead) ? 'font-bold text-red-600' : 'text-text-secondary'}>
                          {isFollowUpDue(lead) && 'Due · '}
                          {formatDate(`${lead.nextFollowUp}T00:00:00`)}
                        </span>
                      ) : (
                        <span className="text-text-secondary">—</span>
                      )}
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
        title={selectedLead?.reference ? `Lead ${selectedLead.reference}` : 'Lead Details'}
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
                { label: 'Service', value: serviceName(selectedLead.serviceInterest) },
                { label: 'Project Volume', value: (selectedLead.projectVolume || selectedLead.projectSize || '—').replace(/-/g, ' ') },
                { label: 'Project Location', value: selectedLead.projectLocation || '—' },
                { label: 'Submitted From', value: selectedLead.source || '—' },
                {
                  label: 'Came From',
                  value:
                    [
                      selectedLead.attribution?.utmSource &&
                        `${selectedLead.attribution.utmSource}${selectedLead.attribution.utmMedium ? ` / ${selectedLead.attribution.utmMedium}` : ''}${selectedLead.attribution.utmCampaign ? ` (${selectedLead.attribution.utmCampaign})` : ''}`,
                      selectedLead.attribution?.referrer,
                    ]
                      .filter(Boolean)
                      .join(' · ') || 'Direct / unknown',
                },
                { label: 'Landing Page', value: selectedLead.attribution?.landingPage || '—' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-text-primary mt-0.5 break-words">{value}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">Message</p>
              <p className="text-sm text-text-secondary leading-relaxed bg-background-subtle rounded-xl p-4">
                {selectedLead.message || 'No additional requirements provided.'}
              </p>
            </div>
            {(selectedLead.attachments?.length ?? 0) > 0 && (
              <div>
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">Project Files</p>
                <ul className="space-y-2">
                  {selectedLead.attachments?.map((file) => (
                    <li key={file.path}>
                      <button
                        type="button"
                        onClick={() => handleDownload(file.path)}
                        className="w-full flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-left text-sm font-medium text-text-primary hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        <FileText className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                        <span className="flex-1 min-w-0 truncate">{file.name}</span>
                        <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(selectedLead.failedAttachments?.length ?? 0) > 0 && (
              <p className="flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Failed to upload, ask the client to resend: {selectedLead.failedAttachments?.join(', ')}</span>
              </p>
            )}
            <LeadFollowUp
              key={selectedLead.id}
              lead={selectedLead}
              serviceName={serviceName(selectedLead.serviceInterest)}
              onUpdate={(changes) => applyLeadChanges(selectedLead.id, changes)}
            />
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
