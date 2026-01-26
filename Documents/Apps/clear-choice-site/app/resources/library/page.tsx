// app/resources/library/page.tsx
'use client'

import { useMemo, useState } from 'react'
import ResourceCard from '@/components/ResourceCard'
import Link from 'next/link'

type Category = 'Checklist' | 'One-Pager' | 'Playbook' | 'Case Study' | 'Worksheet'
type Service =
  | 'Merchant Services'
  | 'ATM Placement'
  | 'Watchdog'
  | 'Kiosks'
  | 'Foreign Exchange'
  | 'Affiliate Program'

type AssetIndex = {
  slug: string
  title: string
  summary: string
  category: Category
  service: Service
  date: string // ISO for sorting
  cover?: string // optional: /library-covers/<slug>.png
}

// 👉 Master index for all Library assets
const ASSETS: AssetIndex[] = [
  {
    slug: 'atm-launch-checklist',
    title: 'ATM Launch Checklist',
    summary: 'Go from zero to live: site prep, contracts, cash logistics, monitoring.',
    category: 'Checklist',
    service: 'ATM Placement',
    date: '2025-05-10',
    cover: '/library-covers/atm-launch-checklist.png',
  },
  {
    slug: 'merchant-statement-guide',
    title: 'How to Read Your Merchant Statement in 10 Minutes',
    summary: 'Spot junk fees, decode line items, and find savings.',
    category: 'One-Pager',
    service: 'Merchant Services',
    date: '2025-04-26',
    cover: '/library-covers/merchant-statement-guide.png',
  },
  {
    slug: 'watchdog-playbook',
    title: 'Watchdog: Zero-Downtime Playbook',
    summary: 'Proactive monitoring that slashes emergency truck rolls.',
    category: 'Playbook',
    service: 'Watchdog',
    date: '2025-05-02',
    cover: '/library-covers/watchdog-playbook.png',
  },
  // 🚀 Add more assets here as you publish them
]

// ⭐ Pick which asset to spotlight
const FEATURED_SLUG = 'watchdog-playbook'

const CATEGORIES: Category[] = ['Checklist', 'One-Pager', 'Playbook', 'Case Study', 'Worksheet']
const SERVICES: Service[] = [
  'Merchant Services',
  'ATM Placement',
  'Watchdog',
  'Kiosks',
  'Foreign Exchange',
  'Affiliate Program',
]

export default function LibraryIndexPage() {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState<Category | 'All'>('All')
  const [service, setService] = useState<Service | 'All'>('All')
  const [sort, setSort] = useState<'newest' | 'a-z'>('newest')

  const featured = useMemo(
    () => ASSETS.find(a => a.slug === FEATURED_SLUG) ?? ASSETS[0],
    []
  )

  const filtered = useMemo(() => {
    let list = [...ASSETS]

    // Remove featured from the grid (it's already shown up top)
    list = list.filter(a => a.slug !== featured.slug)

    // Search
    if (q.trim()) {
      const n = q.toLowerCase()
      list = list.filter(
        a =>
          a.title.toLowerCase().includes(n) ||
          a.summary.toLowerCase().includes(n) ||
          a.slug.toLowerCase().includes(n)
      )
    }

    // Filters
    if (category !== 'All') list = list.filter(a => a.category === category)
    if (service !== 'All') list = list.filter(a => a.service === service)

    // Sort
    if (sort === 'newest') list.sort((a, b) => (a.date < b.date ? 1 : -1))
    else list.sort((a, b) => a.title.localeCompare(b.title))

    return list
  }, [q, category, service, sort, featured.slug])

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero / Intro */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Resource Library</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Premium checklists, playbooks, and one-pagers to help you reduce costs, improve uptime, and grow revenue.
        </p>
      </header>

      {/* ⭐ Featured Banner */}
      {featured && (
        <section className="mb-10 rounded-xl overflow-hidden border border-gray-200 bg-white">
          <div className="grid md:grid-cols-3">
            {/* Cover / visual */}
            <div className="md:col-span-1 bg-gray-50">
              {featured.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={`${featured.title} cover`}
                  src={featured.cover}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[220px] grid place-items-center text-gray-400">
                  No preview
                </div>
              )}
            </div>

            {/* Text + CTA */}
            <div className="md:col-span-2 p-6 md:p-8">
              <p className="text-xs uppercase tracking-wide text-gray-500">{featured.category}</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-1 mb-2">{featured.title}</h2>
              <p className="text-gray-700 mb-4">{featured.summary}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span>{new Date(featured.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>Related: {featured.service}</span>
              </div>
              <Link
                href={`/resources/library/${featured.slug}`}
                className="inline-block bg-[#ff4f00] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#e34700] transition"
              >
                Get the Download
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Controls */}
      <section className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
        <div className="grid gap-4 md:grid-cols-4 items-end">
          {/* Search */}
          <div className="md:col-span-2">
            <label htmlFor="search" className="block text-sm font-semibold mb-1">
              Search
            </label>
            <input
              id="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search titles and summaries…"
              className="w-full border border-black/10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold mb-1">
              Category
            </label>
            <select
              id="category"
              className="w-full border border-black/10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              value={category}
              onChange={(e) => setCategory(e.target.value as Category | 'All')}
            >
              <option value="All">All</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold mb-1">
              Related Service
            </label>
            <select
              id="service"
              className="w-full border border-black/10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              value={service}
              onChange={(e) => setService(e.target.value as Service | 'All')}
            >
              <option value="All">All</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-semibold">{filtered.length}</span> item{filtered.length === 1 ? '' : 's'}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-semibold">
              Sort
            </label>
            <select
              id="sort"
              className="border border-black/10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              value={sort}
              onChange={(e) => setSort(e.target.value as 'newest' | 'a-z')}
            >
              <option value="newest">Newest</option>
              <option value="a-z">A–Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-600 py-16">
          No results. Try a different search or filter.
        </div>
      ) : (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ResourceCard
              key={a.slug}
              title={a.title}
              desc={a.summary}
              href={`/resources/library/${a.slug}`}
              badge={a.category}
            />
          ))}
        </section>
      )}

      {/* CTA */}
      <section className="mt-16 text-center bg-[#ff4f00] text-white py-12 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Need something specific?</h2>
        <p className="text-white/90 mb-6">
          Tell us what you're trying to accomplish and we'll recommend the right building blocks.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#ff4f00] font-bold py-3 px-6 rounded-lg shadow hover:scale-105 transition"
        >
          Talk to Sales
        </Link>
      </section>
    </main>
  )
}
