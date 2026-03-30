'use client'

import Link from 'next/link'
import { ArrowRightIcon, PlayIcon, CogIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">VideoFlow</div>
          <div className="flex items-center space-x-4">
            <Link href="/builder" className="text-white hover:text-gray-200">Builder</Link>
            <Link href="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
            <button className="btn-secondary">Sign In</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Visual AI Video Pipeline Builder
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Turn complex ComfyUI workflows into shareable, monetizable APIs. 
          Build once, API forever. No code required.
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <Link href="/builder" className="bg-white text-video-purple hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg flex items-center transition-colors">
            Start Building <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
          <button className="border-2 border-white text-white hover:bg-white hover:text-video-purple font-semibold py-3 px-6 rounded-lg flex items-center transition-colors">
            <PlayIcon className="w-5 h-5 mr-2" /> Watch Demo
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="glass rounded-xl p-6">
            <div className="bg-video-purple rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <CogIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Visual Workflow Builder</h3>
            <p className="text-gray-600">Drag and drop video generation components. Connect nodes visually. No coding required.</p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="bg-video-pink rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <CloudArrowUpIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Instant API Generation</h3>
            <p className="text-gray-600">Every workflow becomes a REST API instantly. Authentication, rate limiting, and billing included.</p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="bg-indigo-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <PlayIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Template Marketplace</h3>
            <p className="text-gray-600">Start with proven video generation workflows. Customize and monetize your own creations.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Free</h3>
            <div className="text-3xl font-bold mb-4 text-gray-800">$0<span className="text-base text-gray-600">/month</span></div>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• 10 API calls/month</li>
              <li>• 3 basic templates</li>
              <li>• Community support</li>
              <li>• Public workflows only</li>
            </ul>
            <button className="btn-secondary w-full">Get Started</button>
          </div>

          <div className="glass rounded-xl p-8 border-2 border-video-purple">
            <div className="bg-video-purple text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Pro</h3>
            <div className="text-3xl font-bold mb-4 text-gray-800">$29<span className="text-base text-gray-600">/month</span></div>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• 1,000 API calls/month</li>
              <li>• All premium templates</li>
              <li>• Private workflows</li>
              <li>• Priority support</li>
              <li>• Custom domains</li>
            </ul>
            <button className="btn-primary w-full">Start Free Trial</button>
          </div>

          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Enterprise</h3>
            <div className="text-3xl font-bold mb-4 text-gray-800">$99<span className="text-base text-gray-600">/month</span></div>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Unlimited API calls</li>
              <li>• White-label solution</li>
              <li>• Dedicated support</li>
              <li>• SLA guarantees</li>
              <li>• Custom integrations</li>
            </ul>
            <button className="btn-secondary w-full">Contact Sales</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <p>&copy; 2026 VideoFlow. Built by Alice at Boone51 Studios. Turn workflows into APIs.</p>
        </div>
      </footer>
    </div>
  )
}