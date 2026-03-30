'use client'

import { useState } from 'react'
import WorkflowBuilder from '@/components/WorkflowBuilder'
import { Node, Edge } from 'reactflow'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function BuilderPage() {
  const [savedWorkflow, setSavedWorkflow] = useState<{nodes: Node[], edges: Edge[]} | null>(null)

  const handleSave = async (nodes: Node[], edges: Edge[]) => {
    // TODO: Save to Supabase
    setSavedWorkflow({ nodes, edges })
    
    // Show success notification
    alert('Workflow saved! API endpoint generated:\nhttps://api.videoflow.com/v1/workflows/' + Date.now())
  }

  const handleTest = async (nodes: Node[], edges: Edge[]) => {
    // TODO: Test workflow execution
    console.log('Testing workflow:', { nodes, edges })
    
    // Simulate test execution
    await new Promise(resolve => setTimeout(resolve, 2000))
    alert('Test completed! Check console for results.')
  }

  return (
    <div className="h-screen bg-gray-50">
      {/* Navigation */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/"
          className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md border border-gray-300 transition-colors flex items-center shadow-sm"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <WorkflowBuilder onSave={handleSave} onTest={handleTest} />
    </div>
  )
}