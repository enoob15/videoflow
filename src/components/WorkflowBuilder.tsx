'use client'

import { useState, useCallback } from 'react'
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  Controls,
  Background,
  MiniMap,
  Panel,
} from 'reactflow'
import 'reactflow/dist/style.css'

import { WorkflowNode as WorkflowNodeType } from '@/types/workflow'
import { PlusIcon, PlayIcon, SaveIcon } from '@heroicons/react/24/outline'

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    position: { x: 100, y: 100 },
    data: { label: 'Text Input', description: 'Enter your video prompt' },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 400, y: 100 },
    data: { label: 'AI Video Model', description: 'Generate video from text' },
  },
  {
    id: '3',
    type: 'output',
    position: { x: 700, y: 100 },
    data: { label: 'Video Output', description: 'Generated video file' },
  },
]

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
]

interface WorkflowBuilderProps {
  onSave?: (nodes: Node[], edges: Edge[]) => void
  onTest?: (nodes: Node[], edges: Edge[]) => void
}

export default function WorkflowBuilder({ onSave, onTest }: WorkflowBuilderProps) {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)
  const [isProcessing, setIsProcessing] = useState(false)

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  )
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [],
  )

  const addNode = (type: string, label: string) => {
    const newNode: Node = {
      id: `${Date.now()}`,
      type: type === 'ai-model' ? 'default' : type,
      position: { x: Math.random() * 500 + 200, y: Math.random() * 300 + 200 },
      data: { 
        label, 
        description: `${label} component`,
        ...(type === 'ai-model' && { model: 'stable-video-diffusion' })
      },
      className: 'custom-node',
    }
    setNodes((nds) => [...nds, newNode])
  }

  const handleSave = () => {
    onSave?.(nodes, edges)
    // Show success message or redirect
  }

  const handleTest = async () => {
    setIsProcessing(true)
    try {
      await onTest?.(nodes, edges)
      // Show test results
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="h-screen bg-gray-50">
      <div className="h-full flex flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Workflow Builder</h1>
            
            <div className="flex items-center space-x-4">
              {/* Node Palette */}
              <div className="flex space-x-2">
                <button
                  onClick={() => addNode('input', 'Input')}
                  className="btn-secondary text-sm"
                >
                  <PlusIcon className="w-4 h-4 mr-1" />
                  Input
                </button>
                <button
                  onClick={() => addNode('ai-model', 'AI Model')}
                  className="btn-secondary text-sm"
                >
                  <PlusIcon className="w-4 h-4 mr-1" />
                  AI Model
                </button>
                <button
                  onClick={() => addNode('transform', 'Transform')}
                  className="btn-secondary text-sm"
                >
                  <PlusIcon className="w-4 h-4 mr-1" />
                  Transform
                </button>
                <button
                  onClick={() => addNode('output', 'Output')}
                  className="btn-secondary text-sm"
                >
                  <PlusIcon className="w-4 h-4 mr-1" />
                  Output
                </button>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={handleTest}
                  disabled={isProcessing}
                  className="btn-secondary"
                >
                  <PlayIcon className="w-4 h-4 mr-2" />
                  {isProcessing ? 'Testing...' : 'Test'}
                </button>
                <button
                  onClick={handleSave}
                  className="btn-primary"
                >
                  <SaveIcon className="w-4 h-4 mr-2" />
                  Save & Deploy API
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* React Flow */}
        <div className="flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
            
            <Panel position="top-right" className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">Workflow Info</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Nodes: {nodes.length}</div>
                <div>Connections: {edges.length}</div>
                <div>Status: {isProcessing ? 'Testing' : 'Ready'}</div>
              </div>
            </Panel>
          </ReactFlow>
        </div>
      </div>
    </div>
  )
}