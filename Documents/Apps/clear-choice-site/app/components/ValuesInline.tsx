"use client"

import { useState } from 'react'
import { ChevronDown } from 'react-feather'

type ValueItem = {
  key: string
  title: string
  summary: string
  details: string
  Icon?: React.ReactNode
}

const VALUES: ValueItem[] = [
  {
    key: 'reliability',
    title: 'Reliability',
    summary: 'Payments that stay up and keep you selling.',
    details:
      'Downtime is lost revenue. We focus on stable processing, proactive monitoring, and clear status so you stay live and avoid unnecessary truck rolls.',
  },
  {
    key: 'growth',
    title: 'Growth',
    summary: 'Optimize fees and unlock new revenue streams.',
    details:
      'From interchange optimization to new fee lines (ATMs, kiosks, FX), we help you reduce cost and increase throughput—without surprise “gotcha” fees.',
  },
  {
    key: 'partnership',
    title: 'Partnership',
    summary: 'Training, compliance, and support as you scale.',
    details:
      'Founded in 2019 to give operators ISO-level tools without ISO-level fees. We train, support, and stand behind you so more revenue stays in your pocket.',
  },
]

export default function ValuesInline() {
  const [open, setOpen] = useState<string | null>(null)
  const toggle = (k: string) => setOpen((v) => (v === k ? null : k))

  return (
    <section id="values" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
  <h2 className="text-2xl font-semibold mb-8">OUR VALUES</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {VALUES.map((v) => {
            const expanded = open === v.key
            return (
              <div
                key={v.key}
                role="button"
                tabIndex={0}
                aria-expanded={expanded}
                onClick={() => toggle(v.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(v.key)
                  }
                }}
                className="border rounded-2xl p-6 bg-white cursor-pointer hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#ff4f00]/40"
              >
                <div className="flex items-center gap-3">
                  {v.Icon}
                  <h3 className="font-heading text-lg normal-case">{v.title}</h3>
                  <button
                    type="button"
                    aria-label={expanded ? `Collapse ${v.title}` : `Expand ${v.title}`}
                    onClick={(e) => { e.stopPropagation(); toggle(v.key) }}
                    className={`ml-auto inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4f00]/40 transition ${expanded ? 'bg-gray-50' : ''}`}
                  >
                    <ChevronDown className={`transition-transform ${expanded ? 'rotate-180' : ''}`} size={18} />
                  </button>
                </div>
                <p className="text-gray-600 mt-2">{v.summary}</p>
                <div
                  className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
                    expanded ? 'max-h-[240px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <p className="text-gray-700">{v.details}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
