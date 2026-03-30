'use client'

import Link from 'next/link'
import { ArrowLeftIcon, EyeIcon, PlayIcon, CogIcon } from '@heroicons/react/24/outline'

// Mock data
const mockWorkflows = [
  {
    id: '1',
    name: 'Text to Video - Basic',
    description: 'Simple text-to-video generation using Stable Video Diffusion',
    totalCalls: 156,
    monthlyCallLimit: 1000,
    status: 'active',
    createdAt: '2026-03-28',
    apiEndpoint: 'https://api.videoflow.com/v1/workflows/text-to-video-basic'
  },
  {
    id: '2', 
    name: 'Image Animation',
    description: 'Animate static images with motion effects',
    totalCalls: 23,
    monthlyCallLimit: 1000,
    status: 'active',
    createdAt: '2026-03-29',
    apiEndpoint: 'https://api.videoflow.com/v1/workflows/image-animation'
  },
  {
    id: '3',
    name: 'Style Transfer Video',
    description: 'Apply artistic styles to video content',
    totalCalls: 0,
    monthlyCallLimit: 1000,
    status: 'draft',
    createdAt: '2026-03-30',
    apiEndpoint: null
  }
]

const mockStats = {
  totalWorkflows: 3,
  activeAPIs: 2,
  totalCallsThisMonth: 179,
  monthlyLimit: 3000,
  remainingCalls: 2821
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <div className="text-2xl font-bold text-video-purple">VideoFlow Dashboard</div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/builder" className="btn-primary">
                New Workflow
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-video-purple">{mockStats.totalWorkflows}</div>
            <div className="text-gray-600">Total Workflows</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-green-600">{mockStats.activeAPIs}</div>
            <div className="text-gray-600">Active APIs</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-blue-600">{mockStats.totalCallsThisMonth}</div>
            <div className="text-gray-600">Calls This Month</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-orange-600">{mockStats.remainingCalls}</div>
            <div className="text-gray-600">Remaining Calls</div>
          </div>
        </div>

        {/* Usage Progress */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Monthly Usage</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{mockStats.totalCallsThisMonth} calls used</span>
                <span>{mockStats.monthlyLimit} limit</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-video-purple h-2 rounded-full"
                  style={{ width: `${(mockStats.totalCallsThisMonth / mockStats.monthlyLimit) * 100}%` }}
                ></div>
              </div>
            </div>
            <button className="btn-secondary">Upgrade Plan</button>
          </div>
        </div>

        {/* Workflows Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Your Workflows</h2>
              <Link href="/builder" className="btn-primary">
                Create New Workflow
              </Link>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Workflow
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    API Calls
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockWorkflows.map((workflow) => (
                  <tr key={workflow.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{workflow.name}</div>
                        <div className="text-sm text-gray-500">{workflow.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        workflow.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {workflow.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {workflow.totalCalls} / {workflow.monthlyCallLimit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {workflow.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-video-purple hover:text-indigo-900 flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 flex items-center">
                        <CogIcon className="w-4 h-4 mr-1" />
                        Edit
                      </button>
                      {workflow.status === 'active' && (
                        <button className="text-green-600 hover:text-green-900 flex items-center">
                          <PlayIcon className="w-4 h-4 mr-1" />
                          Test
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}