// app/resources/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import ResourceCard from '@/components/ResourceCard'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Section from '@/components/Section'
import StaticTestimonial from '@/components/StaticTestimonial'
import RevealGrid, { RevealCard } from '@/components/RevealGrid'
import Icon from '@/components/Icon'
import { Download } from 'react-feather'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Case studies, FAQs, and free guides to help you make smarter payment decisions.',
  alternates: { canonical: '/resources' },
}

function ResourcesJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Resources Hub - Clear Choice',
    url: 'https://clearchoicepay.com/resources'
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function ResourcesHub() {
  // Featured Library assets (Tier-1 lead magnets)
  const downloads = [
    {
      title: 'ATM Launch Checklist',
      desc: 'Step-by-step plan to go from site prep to live deployment.',
      href: '/resources/library/atm-launch-checklist',
      badge: 'Checklist',
      IconEl: <Icon as={Download} />,
    },
    {
      title: 'ATM Safety Checklist',
      desc: 'Best practices to reduce risk and protect your customers.',
      href: '/resources/library/atm-safety-checklist',
      badge: 'Checklist',
      IconEl: <Icon as={Download} />,
    },
    {
      title: 'ATM Maintenance Checklist',
      desc: 'Keep uptime high with simple, repeatable routines.',
      href: '/resources/library/atm-maintenance-checklist',
      badge: 'Checklist',
      IconEl: <Icon as={Download} />,
    },
  ]

  // Blog: fetch top 3 latest posts from content/blog
  const posts = getAllPosts().slice(0, 3)
  const latestPosts = posts.map((p) => ({
    title: p.title,
    desc: p.excerpt || '',
    href: `/resources/blog/${p.slug}`,
  }))

  return (
    <>
    <main>
      {/* Hero / Intro */}
        <header className="section text-center bg-white">
          <h1 className="text-4xl font-extrabold mb-4 uppercase font-switch">Resources</h1>
          <p className="max-w-2xl mx-auto text-lg text-black/70">
            Practical guides, checklists, and one-pagers to help you reduce costs, improve uptime, and grow revenue.
          </p>
        </header>

      {/* Featured Downloads */}
      <Section variant="surface">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Downloads</h2>
          <Link href="/resources/library" className="text-[#ff4f00] font-semibold hover:underline">
            View all →
          </Link>
        </div>
        <RevealGrid>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map((d) => (
              <RevealCard key={d.href}>
                <ResourceCard title={d.title} desc={d.desc} href={d.href} badge={d.badge} IconEl={d.IconEl} />
              </RevealCard>
            ))}
          </div>
        </RevealGrid>
      </Section>

      {/* Latest Blog */}
      <Section variant="muted">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <Link href="/resources/blog" className="text-[#ff4f00] font-semibold hover:underline">
            View all →
          </Link>
        </div>
        <RevealGrid>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((p) => (
              <RevealCard key={p.href}>
                <ResourceCard title={p.title} desc={p.desc} href={p.href} />
              </RevealCard>
            ))}
          </div>
        </RevealGrid>
      </Section>

      {/* TESTIMONIAL (RESOURCES) */}
      <Section variant="surface">
        <h2 className="text-2xl font-semibold">WHAT READERS SAY</h2>
        <StaticTestimonial
          quote="The guides gave us a clear plan. We cut ATM downtime and lowered fees without switching providers."
          name="Jamie P."
          company="Cedar Point Stores"
        />
      </Section>

      {/* More Resources - mirrored from About page */}
      <Section variant="muted" containerClassName="py-12">
        <h2 className="text-2xl font-semibold mb-8">More Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/resources/case-studies"
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition block"
          >
            <h3 className="font-heading text-base normal-case">Case Studies</h3>
            <p className="text-sm text-gray-600 mt-1">
              Proof from the field — uptime lifted, fees lowered, fewer truck rolls.
            </p>
            <div className="mt-3 text-[#ff4f00] font-cta">See Success Stories →</div>
          </Link>

          <Link
            href="/resources/faqs"
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition block"
          >
            <h3 className="font-heading text-base normal-case">FAQs</h3>
            <p className="text-sm text-gray-600 mt-1">
              Clear answers to the most common questions about ATMs, kiosks, and merchant services.
            </p>
            <div className="mt-3 text-[#ff4f00] font-cta">Read FAQs →</div>
          </Link>

          <Link
            href="/resources/guides/merchant-compliance"
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition block"
          >
            <h3 className="font-heading text-base normal-case">Compliance Guide</h3>
            <p className="text-sm text-gray-600 mt-1">
              Stay compliant with evolving regulations and protect your business.
            </p>
            <div className="mt-3 text-[#ff4f00] font-cta">Get the Guide →</div>
          </Link>
        </div>
      </Section>
    </main>
    <ResourcesJsonLd />
    <BreadcrumbJsonLd items={[{ name: 'Resources', url: '/resources' }]} />
    </>
  )
}
