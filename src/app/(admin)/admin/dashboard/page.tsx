'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getDashboardStats } from '@/lib/api/admin'
import {
  FileText,
  Mail,
  TrendingUp,
  Activity,
  ArrowUp,
  Eye,
  Plus,
  Users,
  CheckCircle
} from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalContacts: 0,
    newContacts: 0,
    publishedBlogs: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    try {
      const data = await getDashboardStats()
      setStats(data)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Total Blogs',
      value: stats.totalBlogs,
      icon: FileText,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      link: '/admin/blogs',
      change: '+12%'
    },
    {
      title: 'Published Blogs',
      value: stats.publishedBlogs,
      icon: CheckCircle,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      link: '/admin/blogs',
      change: '+5%'
    },
    {
      title: 'Contact Forms',
      value: stats.totalContacts,
      icon: Mail,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      link: '/admin/contacts',
      change: '+23%'
    },
    {
      title: 'New Inquiries',
      value: stats.newContacts,
      icon: Users,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      link: '/admin/contacts',
      change: 'New'
    },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to A&T Infracon Admin Panel</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/admin/blogs/new"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Blog
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Link
              key={index}
              href={stat.link}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <span className="flex items-center text-sm text-green-600 font-medium">
                  {stat.change !== 'New' && <ArrowUp className="w-4 h-4 mr-1" />}
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">New blog published</p>
                <p className="text-xs text-gray-500">Construction Trends 2024</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Contact form received</p>
                <p className="text-xs text-gray-500">From ABC Corporation</p>
                <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Blog updated</p>
                <p className="text-xs text-gray-500">Safety Guidelines edited</p>
                <p className="text-xs text-gray-400 mt-1">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Contact status updated</p>
                <p className="text-xs text-gray-500">Marked as responded</p>
                <p className="text-xs text-gray-400 mt-1">2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            <Link
              href="/admin/blogs/new"
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-indigo-600">Write New Blog</p>
                  <p className="text-xs text-indigo-500 mt-1">Share insights and updates</p>
                </div>
                <Plus className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link
              href="/admin/contacts?status=new"
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-green-600">View New Contacts</p>
                  <p className="text-xs text-green-500 mt-1">Respond to inquiries</p>
                </div>
                <Mail className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link
              href="/admin/blogs?status=draft"
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-purple-600">Draft Blogs</p>
                  <p className="text-xs text-purple-500 mt-1">Continue writing</p>
                </div>
                <FileText className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link
              href="/admin/contacts"
              className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-orange-600">All Contact Forms</p>
                  <p className="text-xs text-orange-500 mt-1">Manage all inquiries</p>
                </div>
                <Eye className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blog Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Blog Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Published</span>
              <span className="font-semibold">{stats.publishedBlogs}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Drafts</span>
              <span className="font-semibold">{stats.totalBlogs - stats.publishedBlogs}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Avg Reading Time</span>
              <span className="font-semibold">5 min</span>
            </div>
          </div>
        </div>
        {/* Contact Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New Inquiries</span>
              <span className="font-semibold text-green-600">{stats.newContacts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">In Progress</span>
              <span className="font-semibold text-yellow-600">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Responded</span>
              <span className="font-semibold text-blue-600">{stats.totalContacts - stats.newContacts}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}