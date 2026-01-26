import type { Metadata } from 'next'
import Link from 'next/link'
import { listDocs } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Proof from the field—uptime lifted, fees lowered, fewer service calls.',
  alternates: { canonical: '/resources/case-studies' },
}

export default function CaseStudiesPage() {
  const cases = listDocs('case-studies')
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/resources/case-studies/${c.slug}`}
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition block"
          >
            <h3 className="font-heading text-lg normal-case">{c.title}</h3>
            {c.description ? <p className="mt-2 text-gray-600">{c.description}</p> : null}
            <div className="mt-3 text-sm text-gray-500">{c.date ? new Date(c.date).toLocaleDateString() : ''}</div>
            <div className="mt-4 text-[#ff4f00] font-cta">Read →</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
