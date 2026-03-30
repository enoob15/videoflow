import { NextRequest, NextResponse } from 'next/server'

// Mock workflow execution
export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Basic validation
  if (!body.prompt && !body.image_url) {
    return NextResponse.json(
      { error: 'Either prompt or image_url is required' },
      { status: 400 }
    )
  }

  // Simulate video generation
  const jobId = `job_${Date.now()}`
  
  // Return immediate response with job ID
  return NextResponse.json({
    job_id: jobId,
    status: 'processing',
    message: 'Video generation started. Check status endpoint for updates.',
    estimated_time_seconds: 120,
    webhook_url: body.webhook_url || null
  })
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const jobId = searchParams.get('job_id')
  
  if (!jobId) {
    return NextResponse.json(
      { error: 'job_id parameter is required' },
      { status: 400 }
    )
  }

  // Mock status response
  const isComplete = Math.random() > 0.5 // 50% chance of completion
  
  if (isComplete) {
    return NextResponse.json({
      job_id: jobId,
      status: 'completed',
      output_url: `https://videoflow-outputs.s3.amazonaws.com/${jobId}.mp4`,
      thumbnail_url: `https://videoflow-outputs.s3.amazonaws.com/${jobId}_thumb.jpg`,
      processing_time_seconds: 87,
      cost_credits: 1.5
    })
  } else {
    return NextResponse.json({
      job_id: jobId,
      status: 'processing',
      progress_percent: Math.floor(Math.random() * 80) + 10,
      estimated_remaining_seconds: Math.floor(Math.random() * 60) + 30
    })
  }
}