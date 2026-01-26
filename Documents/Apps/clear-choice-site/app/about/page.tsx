// app/about/page.tsx
import type { Metadata } from 'next'
import Icon from '@/components/Icon'
import { Shield, TrendingUp, Users } from 'react-feather'
import Link from 'next/link'
import Section from '@/components/Section'
import ValuesInline from '@/components/ValuesInline'
import FeatureBanner from '@/components/FeatureBanner'
import ResourceBanner from '@/components/ResourceBanner'

export const metadata: Metadata = {
  title: 'About Clear Choice',
  description: 'Founded in 2019 to give operators ISO-level tools without ISO-level fees—stability, transparency, growth.',
  alternates: { canonical: '/about' },
}

const values = [
  { 
    title: 'Reliability', 
    desc: 'Payments that stay up and keep you selling.', 
    IconEl: <Icon as={Shield} /> 
  },
  { 
    title: 'Growth', 
    desc: 'Optimize fees and unlock new revenue streams.', 
    IconEl: <Icon as={TrendingUp} /> 
  },
  { 
    title: 'Partnership', 
    desc: 'Training, compliance, and support as you scale.', 
    IconEl: <Icon as={Users} /> 
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="pt-16 pb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4 uppercase font-switch">About Clear Choice</h1>
        <p className="max-w-2xl mx-auto text-lg text-black/70">
          We provide payment solutions without limits, helping businesses optimize their operations and grow revenue.
        </p>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-[6px,1fr] gap-6">
          {/* Accent vertical bar */}
          <div className="bg-[#ff4f00] rounded-full" />

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">OUR STORY</h2>
            <p className="text-gray-700 mb-4">
              Clear Choice Payment Solutions was founded in <strong>2019</strong> with a simple idea:
              give entrepreneurs a way to make money in the ATM industry <em>without</em> paying the
              outrageous buy-in fees that keep most people out.
            </p>
            <p className="text-gray-700 mb-4">
              Traditional programs forced operators to pay ISO-level costs just for the right to
              participate. We believed there had to be a better way — one that put more money in
              your pocket and less in hidden fees.
            </p>
            <p className="text-gray-700">
              That’s still Clear Choice's mission: to give our partners the tools, transparency, and
              support to succeed. Today, hundreds of merchants and
              partners trust Clear Choice to deliver stable processing, honest revenue share,
              and growth opportunities in payments.
            </p>
          </div>
        </div>
      </section>

  <ValuesInline />

      {/* CTA after Our Story (ResourceBanner) */}
      <ResourceBanner
        heading="See Our Resources"
        sub="Explore guides, checklists, and more to help your business grow."
        href="/resources"
        label="Browse Resources"
      />
      {/* Resources Teaser */}
      <Section variant="muted" containerClassName="py-12">
        <h2 className="text-2xl font-semibold mb-8">Resources</h2>
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
  )
}
