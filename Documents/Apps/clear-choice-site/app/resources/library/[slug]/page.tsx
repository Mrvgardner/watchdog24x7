// app/resources/library/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'
import SalesforceLeadForm from '@/components/SalesforceLeadForm'

// Define library assets here.
// - slug MUST match the route (e.g., /resources/library/atm-launch-checklist)
// - optional cover images go in /public/library-covers/<slug>.png
// - optional PDFs go in /public/downloads/<slug>.pdf
type Asset = {
  slug: string
  title: string
  summary: string
  bullets: string[]
  cover?: string // e.g., `/library-covers/atm-launch-checklist.png`
  pdf?: string   // e.g., `/downloads/atm-launch-checklist.pdf`
  badge?: string // e.g., "Checklist", "One-Pager", "Playbook"
}

const assets: Record<string, Asset> = {
  'atm-launch-checklist': {
    slug: 'atm-launch-checklist',
    title: 'ATM Launch Checklist',
    summary:
      'Everything you need to go from zero to live with dependable uptime: site prep, contracts, cash logistics, and monitoring.',
    bullets: [
      'Day-by-day onboarding map',
      'Compliance & cash logistics',
      'Monitoring & uptime best practices',
    ],
    cover: '/library-covers/atm-launch-checklist.png',
    pdf: '/downloads/atm-launch-checklist.pdf',
    badge: 'Checklist',
  },
  'merchant-statement-guide': {
    slug: 'merchant-statement-guide',
    title: 'How to Read Your Merchant Statement in 10 Minutes',
    summary:
      'Spot junk fees, decode line items, and find savings without hiring a consultant.',
    bullets: ['Fee glossary', 'High-impact savings areas', 'Sample statement annotated'],
    cover: '/library-covers/merchant-statement-guide.png',
    pdf: '/downloads/merchant-statement-guide.pdf',
    badge: 'One-Pager',
  },
  'watchdog-playbook': {
    slug: 'watchdog-playbook',
    title: 'Watchdog: Zero-Downtime Playbook',
    summary:
      'Proactive monitoring that slashes emergency truck rolls. Patterns to watch and workflows that prevent outages.',
    bullets: ['Alert triage workflow', 'Common failure signatures', 'KPIs for uptime'],
    cover: '/library-covers/watchdog-playbook.png',
    pdf: '/downloads/watchdog-playbook.pdf',
    badge: 'Playbook',
  },
  'atm-safety-checklist': {
    slug: 'atm-safety-checklist',
    title: 'ATM Safety Checklist',
    summary: 'Best practices to reduce risk and protect your customers and staff around ATM sites.',
    bullets: [
      'Site lighting and visibility checks',
      'Camera placement and recording guidance',
      'Tamper indicators and incident response steps',
    ],
    cover: '/library-covers/atm-safety-checklist.png',
    pdf: '/downloads/atm-safety-checklist.pdf',
    badge: 'Checklist',
  },
  'atm-maintenance-checklist': {
    slug: 'atm-maintenance-checklist',
    title: 'ATM Maintenance Checklist',
    summary: 'Keep uptime high with simple, repeatable routines your team can follow.',
    bullets: [
      'Daily and weekly cleaning and inspections',
      'Receipt paper, cash cassettes, and consumables',
      'Firmware updates and fault triage basics',
    ],
    cover: '/library-covers/atm-maintenance-checklist.png',
    pdf: '/downloads/atm-maintenance-checklist.pdf',
    badge: 'Checklist',
  },
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(assets).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const asset = assets[params.slug]
  if (!asset) return {}
  return {
    title: `${asset.title} | Resource Library`,
    description: asset.summary.slice(0, 150),
  }
}

export default function LibraryAssetPage({ params }: { params: { slug: string } }) {
  const asset = assets[params.slug]
  if (!asset) return notFound()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {asset.badge ?? 'Guide'}
        </p>
        <h1 className="text-4xl font-bold mt-1">{asset.title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">{asset.summary}</p>
      </div>

      {/* Content layout */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* Cover / Preview */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          {asset.cover ? (
            <Image
              src={asset.cover}
              alt={`${asset.title} cover`}
              width={800}
              height={600}
              className="w-full h-auto rounded"
            />
          ) : (
            <div className="w-full aspect-[4/3] bg-gray-100 rounded grid place-items-center text-gray-400">
              No preview available
            </div>
          )}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">What's inside</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {asset.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gated form */}
        <div>
          <SalesforceLeadForm
            title="Get the download"
            leadSource="Resources"
            interest={`Asset: ${asset.title}`}
            // After form submit, SF will redirect back to /thank-you with the asset slug.
            // Optional: enhance /thank-you to auto-download asset.pdf if present.
            retURL={`/thank-you?asset=${encodeURIComponent(asset.slug)}`}
          />

          {/* Optional direct-download link for testing (remove in prod) */}
          {asset.pdf ? (
            <p className="text-xs text-gray-500 mt-3">
              For testing only: <a className="underline" href={asset.pdf}>Direct download</a>
            </p>
          ) : null}
        </div>
      </div>

      {/* Related / Next steps */}
      <section className="mt-16 text-center bg-[#ff4f00] text-white py-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Want help implementing this?</h2>
        <p className="text-white/90 mb-6">Talk to our team about the right building blocks for your business.</p>
        <a
          href="/contact"
          className="bg-white text-[#ff4f00] font-bold py-3 px-6 rounded-lg shadow hover:scale-105 transition"
        >
          Book a Free Demo Now
        </a>
      </section>
    </main>
  )
}
