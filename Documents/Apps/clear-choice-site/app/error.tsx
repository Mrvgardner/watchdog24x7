'use client'

import Link from 'next/link'

export default function Error({ error }: { error: Error }) {
  return (
    <main className="section text-center py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
      <p className="text-lg text-gray-600 mb-2">{error.message}</p>
      <p className="text-sm text-gray-500 mb-8">Please try again or contact support if the problem persists.</p>
      <div className="space-x-4">
        <button 
          onClick={() => window.location.reload()} 
          className="inline-block bg-[#ff4f00] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#e54700] transition"
        >
          Try Again
        </button>
        <Link 
          href="/" 
          className="inline-block bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
