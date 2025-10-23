// app/solutions/page.tsx
import Link from 'next/link'
import type { Metadata } from 'next'
import { ReactElement } from 'react'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Icon from '@/components/Icon'
import { Shield, DollarSign, Monitor, Truck, Settings, Tool } from 'react-feather'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'ATM, POS, kiosks, dispensary, and cash management solutions.',
  alternates: { canonical: '/solutions' },
}

function SolutionsJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Solutions - Clear Choice',
    url: 'https://clearchoicepay.com/solutions'
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

type Solution = {
  title: string
  desc: string
  points: string[]
  ctaHref: string
  icon: ReactElement
}

const solutions: Solution[] = [
  {
    title: 'Dispensary Solution',
    desc: 'Secure, compliant payment flows for cannabis businesses—built for stability and uptime.',
    points: ['Compliant setup', 'Hardware + servicing', 'Chargeback help'],
    ctaHref: '/#contact',
    icon: <Icon as={Shield} />,
  },
  {
    title: 'Cash Management',
    desc: 'End‑to‑end vault cash logistics, replenishment, audits, and armored transport.',
    points: ['Replenishment & audits', 'Armored transport', 'Clear reporting'],
    ctaHref: '/#contact',
    icon: <Icon as={DollarSign} />,
  },
  {
    title: 'Billboard',
    desc: 'Monetize attention with in‑store or kiosk‑based advertising placements.',
    points: ['Dynamic ad slots', 'Local promos', 'New fee revenue'],
    ctaHref: '/#contact',
    icon: <Icon as={Monitor} />,
  },
  {
    title: 'Reliable Equipment',
    desc: 'Durable, high‑performance ATMs and kiosks, tested and serviced by experts.',
    points: ['Modern hardware', 'Low failure rates', 'Certified installs'],
    ctaHref: '/#contact',
    icon: <Icon as={Truck} />,
  },
  {
    title: 'Expert Servicing',
    desc: 'Certified technicians for installation, maintenance, and upgrades—nationwide coverage.',
    points: ['Certified techs', 'Proactive maintenance', 'Fast SLAs'],
    ctaHref: '/#contact',
    icon: <Icon as={Tool} />,
  },
]

export default function Solutions() {
  return (
    <>
    <main className="section">
      {/* Hero / Intro */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Solutions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Supporting services that plug into your custom payment system. Pair these with our core offerings to build a
          solution tailored to your business.
        </p>
      </header>

      {/* Solutions Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="group border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-brand/40 transition"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <div className="group-hover:scale-110 transition">{s.icon}</div>
            </div>

            <p className="text-gray-600 mb-4">{s.desc}</p>

            <ul className="text-sm text-gray-700 space-y-1">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <a
                href="/#contact"
                className="inline-block text-brand font-semibold hover:underline"
              >
                Talk to an expert →
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Optional proof / logos (placeholder) */}
      <section className="mt-16 text-center">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Trusted by growing brands</p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center bg-brand text-white py-12 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Combine the right building blocks</h2>
        <p className="text-white/90 mb-6">
          We'll help you assemble a solution that fits your goals, budget, and growth plan.
        </p>
        <a
          href="/#contact"
          className="bg-white text-brand font-bold py-3 px-6 rounded-lg shadow hover:scale-105 transition"
        >
          Book a Free Demo Now
        </a>
      </section>
    </main>
    <SolutionsJsonLd />
    <BreadcrumbJsonLd items={[{ name: 'Solutions', url: '/solutions' }]} />
    </>
  )
}
