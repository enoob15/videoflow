export interface WorkflowNode {
  id: string
  type: 'input' | 'transform' | 'output' | 'ai-model'
  position: { x: number; y: number }
  data: {
    label: string
    description?: string
    parameters?: Record<string, any>
    model?: string
    template?: string
  }
}

export interface WorkflowEdge {
  id: string
  source: string
  target: string
  sourceHandle?: string
  targetHandle?: string
}

export interface Workflow {
  id: string
  name: string
  description: string
  nodes: WorkflowNode[]
  edges: WorkflowEdge[]
  isPublic: boolean
  apiKey?: string
  createdAt: string
  updatedAt: string
  totalCalls?: number
  monthlyCallLimit?: number
}

export interface VideoTemplate {
  id: string
  name: string
  description: string
  thumbnail: string
  category: 'text-to-video' | 'image-to-video' | 'style-transfer' | 'upscaling'
  workflow: Workflow
  isPremium: boolean
}

export interface APICall {
  id: string
  workflowId: string
  timestamp: string
  inputParameters: Record<string, any>
  outputUrl?: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  processingTime?: number
  cost?: number
}