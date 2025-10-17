'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllContactSubmissions, updateContactStatus, deleteContact } from '@/lib/api/admin'
import {
    Mail,
    Phone,
    Building,
    Calendar,
    Clock,
    CheckCircle,
    XCircle,
    AlertCircle,
    Eye,
    Trash2,
    Download,
    Search,
    MessageSquare,
    Truck,
    Users,
    Headphones
} from 'lucide-react'

export default function AdminContacts() {
    const [contacts, setContacts] = useState<any[]>([])
    const [filteredContacts, setFilteredContacts] = useState<any[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [reasonFilter, setReasonFilter] = useState('all')
    const [loading, setLoading] = useState(true)
    const [deleteLoading, setDeleteLoading] = useState<number | null>(null)

    useEffect(() => {
        loadContacts()
    }, [])

    useEffect(() => {
        filterContacts()
    }, [searchTerm, statusFilter, reasonFilter, contacts])

    const loadContacts = async () => {
        try {
            const data = await getAllContactSubmissions()
            setContacts(data)
            setFilteredContacts(data)
        } finally {
            setLoading(false)
        }
    }

    const filterContacts = () => {
        let filtered = [...contacts]

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(contact =>
                contact.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.phone?.includes(searchTerm)
            )
        }

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(contact => contact.status === statusFilter)
        }

        // Reason filter (new for FreightSync)
        if (reasonFilter !== 'all') {
            filtered = filtered.filter(contact => contact.reason === reasonFilter)
        }

        setFilteredContacts(filtered)
    }

    const handleStatusChange = async (id: number, newStatus: string) => {
        const { error } = await updateContactStatus(id, newStatus)
        if (!error) {
            await loadContacts()
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this contact submission?')) {
            return
        }

        setDeleteLoading(id)
        try {
            const { error } = await deleteContact(id)
            if (!error) {
                await loadContacts()
            }
        } finally {
            setDeleteLoading(null)
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new':
                return 'bg-blue-100 text-blue-700'
            case 'contacted':
                return 'bg-yellow-100 text-yellow-700'
            case 'converted':
                return 'bg-green-100 text-green-700'
            case 'rejected':
                return 'bg-red-100 text-red-700'
            default:
                return 'bg-gray-100 text-gray-700'
        }
    }

    const getReasonBadge = (reason: string) => {
        switch (reason) {
            case 'demo':
                return { color: 'bg-purple-100 text-purple-700', icon: <Eye className="w-3 h-3" /> }
            case 'sales':
                return { color: 'bg-indigo-100 text-indigo-700', icon: <Truck className="w-3 h-3" /> }
            case 'support':
                return { color: 'bg-orange-100 text-orange-700', icon: <Headphones className="w-3 h-3" /> }
            default:
                return { color: 'bg-gray-100 text-gray-700', icon: <MessageSquare className="w-3 h-3" /> }
        }
    }

    // Export to CSV (Updated for FreightSync)
    const exportToCSV = () => {
        const headers = ['Name', 'Email', 'Phone', 'Company', 'Fleet Size', 'Reason', 'Status', 'Date']
        const csvData = filteredContacts.map(contact => [
            contact.full_name || contact.name,
            contact.email,
            contact.phone || '',
            contact.company || '',
            contact.fleet_size || '',
            contact.reason || '',
            contact.status,
            new Date(contact.created_at).toLocaleDateString()
        ])

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
        ].join('\n')

        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `freightsync-contacts-${new Date().toISOString().split('T')[0]}.csv`
        a.click()
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Contact Forms</h1>
                    <p className="text-gray-600 mt-2">Manage FreightSync inquiries and demo requests</p>
                </div>
                <button
                    onClick={exportToCSV}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                >
                    <Download className="w-4 h-4" />
                    Export CSV
                </button>
            </div>

            {/* Stats Cards (Updated for FreightSync) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Inquiries</p>
                            <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
                        </div>
                        <MessageSquare className="w-8 h-8 text-gray-400" />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Demo Requests</p>
                            <p className="text-2xl font-bold text-purple-600">
                                {contacts.filter(c => c.reason === 'demo').length}
                            </p>
                        </div>
                        <Eye className="w-8 h-8 text-purple-400" />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Sales Inquiries</p>
                            <p className="text-2xl font-bold text-indigo-600">
                                {contacts.filter(c => c.reason === 'sales').length}
                            </p>
                        </div>
                        <Truck className="w-8 h-8 text-indigo-400" />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Support</p>
                            <p className="text-2xl font-bold text-orange-600">
                                {contacts.filter(c => c.reason === 'support').length}
                            </p>
                        </div>
                        <Headphones className="w-8 h-8 text-orange-400" />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Converted</p>
                            <p className="text-2xl font-bold text-green-600">
                                {contacts.filter(c => c.status === 'converted').length}
                            </p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                </div>
            </div>

            {/* Filters (Updated) */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, email, phone, company..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2">
                        <select
                            value={reasonFilter}
                            onChange={(e) => setReasonFilter(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="all">All Reasons</option>
                            <option value="demo">Demo Request</option>
                            <option value="sales">Sales Inquiry</option>
                            <option value="support">Support</option>
                            <option value="other">Other</option>
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="all">All Status</option>
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                    Showing {filteredContacts.length} of {contacts.length} submissions
                </div>
            </div>

            {/* Contacts Table (Updated for FreightSync) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact Info
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Company Details
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Inquiry Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredContacts.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        No contact submissions found
                                    </td>
                                </tr>
                            ) : (
                                filteredContacts.map((contact) => {
                                    const reasonBadge = getReasonBadge(contact.reason)
                                    return (
                                        <tr key={contact.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {contact.full_name || contact.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                                        <Mail className="w-3 h-3" />
                                                        {contact.email}
                                                    </div>
                                                    {contact.phone && (
                                                        <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                                            <Phone className="w-3 h-3" />
                                                            {contact.phone}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm">
                                                    {contact.company && (
                                                        <div className="font-medium text-gray-900 flex items-center gap-1">
                                                            <Building className="w-3 h-3" />
                                                            {contact.company}
                                                        </div>
                                                    )}
                                                    {contact.fleet_size && (
                                                        <div className="text-gray-600 mt-1 flex items-center gap-1">
                                                            <Truck className="w-3 h-3" />
                                                            Fleet: {contact.fleet_size}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${reasonBadge.color}`}>
                                                    {reasonBadge.icon}
                                                    {contact.reason?.charAt(0).toUpperCase() + contact.reason?.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <select
                                                    value={contact.status}
                                                    onChange={(e) => handleStatusChange(contact.id, e.target.value)}
                                                    className={`text-xs font-medium px-3 py-1.5 rounded-full border-0 cursor-pointer ${getStatusColor(contact.status)}`}
                                                >
                                                    <option value="new">New</option>
                                                    <option value="contacted">Contacted</option>
                                                    <option value="converted">Converted</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(contact.created_at).toLocaleDateString()}
                                                    </div>
                                                    <div className="text-xs mt-1">
                                                        {new Date(contact.created_at).toLocaleTimeString()}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Link
                                                        href={`/admin/contacts/${contact.id}/view`}
                                                        className="p-1.5 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                        title="View Details"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(contact.id)}
                                                        disabled={deleteLoading === contact.id}
                                                        className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                                                        title="Delete"
                                                    >
                                                        {deleteLoading === contact.id ? (
                                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                                                        ) : (
                                                            <Trash2 className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}