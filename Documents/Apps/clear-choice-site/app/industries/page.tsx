import { getIndustryCTA } from '@/lib/cta'
// app/industries/page.tsx
import type { Metadata } from 'next'
import Section from '@/components/Section'
import RevealGrid, { RevealCard } from '@/components/RevealGrid'
import ChipIcon from '@/components/ChipIcon'
import StaticTestimonial from '@/components/StaticTestimonial'
import Link from 'next/link'
import FeatureBanner from '../components/FeatureBanner'
import ResourceBanner from '@/components/ResourceBanner'
import DirectCTA from '@/components/DirectCTA'

import { Compass, Sun, Volume, ShoppingBag, Wind, Coffee, Package } from 'react-feather'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Payments and ATMs tailored for convenience, liquor, smoke shop, cannabis, airports, hospitality, and retail.',
  alternates: { canonical: '/industries' },
}

const industries = [
  {
    key: 'convenience',
    title: 'Convenience Stores',
    desc:
      'Keep customers moving with reliable payments and revenue-generating ATMs. Reduce downtime and stay competitive.',
    IconEl: <ChipIcon as={ShoppingBag} />,
  cta: 'Keep Customers Moving',
  ctaSecondary: 'See How It Works',
  ctaLabel: 'Get Started Now',
  },
   {
    key: 'liquor',
    title: 'Liquor Stores',
    desc: 'Secure processing for high-risk categories plus cash management that keeps you compliant and profitable.',
    IconEl: <ChipIcon as={Volume} rotate={-90} nudgeX={4} size={26} />,
  cta: 'Stay Profitable & Compliant',
  ctaSecondary: 'Get Compliance Guide',
  },
  {
    key: 'smoke',
    title: 'Smoke Shops',
    desc:
      'Stable merchant services built for high-risk retail — no surprise account closures and confident checkouts.',
    IconEl: <ChipIcon as={Wind} />,
    cta: 'Protect Your Payments',
    ctaSecondary: 'Avoid Costly Shutdowns',
  },
  {
    key: 'cannabis',
    title: 'Cannabis Businesses',
    desc:
      'Compliant, secure payment flows tailored to cannabis. Reduce cash-handling risk and deliver a smooth experience.',
    IconEl: <ChipIcon as={Sun} />,
    cta: 'Simplify Cannabis Payments',
    ctaSecondary: 'Download Quick Start',
  },
  {
    key: 'airports',
    title: 'Airports',
    desc:
      'Serve international travelers with FX-enabled ATMs and kiosks. Transparent rates and a new revenue stream.',
    IconEl: <ChipIcon as={Compass} />,
  cta: 'Serve International Travelers',
  ctaSecondary: 'Learn About FX Options',
  ctaLabel: 'Talk to Sales Today',
  },
  {
    key: 'hospitality',
    title: 'Hospitality',
    desc:
      'Hotel and venue payments that work around the clock. Give guests flexible options anywhere on your property.',
    IconEl: <ChipIcon as={Coffee} />,
    cta: 'Delight Your Guests',
    ctaSecondary: 'See Guest Success Stories',
  },
  {
    key: 'retail',
    title: 'Retail',
    desc:
      'Modern payment systems and self-service kiosks to speed checkout, cut costs, and delight customers.',
    IconEl: <ChipIcon as={Package} />,
  cta: 'Upgrade Your Checkout',
  ctaSecondary: 'Explore Modern POS',
  },
]

function IndustriesJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industries We Serve',
    url: 'https://clearchoicepay.com/industries',
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

function BreadcrumbJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://clearchoicepay.com/' },
      { '@type': 'ListItem', position: 2, name: 'Industries We Serve' },
    ],
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export default function IndustriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">INDUSTRIES WE SERVE</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you need a single ATM or a complete payment ecosystem, Clear Choice builds the right solution for your business.
        </p>
      </header>
      {/* Industries grid (full-bleed white) */}
      <Section variant="surface">
        <RevealGrid>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ key, title, desc, IconEl }) => (
              <RevealCard key={key}>
                <article className="group border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    {IconEl}
                    <h3 className="font-heading text-xl normal-case">{title}</h3>
                  </div>
                  <p className="text-gray-600 flex-1">{desc}</p>
                  <div className="mt-4">
                    <DirectCTA href="/contact" label={getIndustryCTA(key)} />
                  </div>
                </article>
              </RevealCard>
            ))}
          </div>
        </RevealGrid>
      </Section>

      {/* ATM Safety Feature Banner (ResourceBanner) */}
      <ResourceBanner
        heading="Are your ATMs as safe as they should be?"
        sub="Reduce risk and protect revenue with best practices your team can apply today."
        href="/resources/guides/atm-safety"
        label="Get the Checklist: ATM Safety Best Practices"
        className="mt-12"
      />

      {/* Testimonial (full-bleed gray) */}
      <Section variant="muted">
        <h2 className="text-2xl font-semibold">WHO SAYS?</h2>
        <StaticTestimonial
          quote="Clear Choice stabilized our processing across high‑risk sites and the FX‑enabled ATMs opened a new revenue stream."
          name="Morgan L."
          company="Northgate Retail Group"
        />
      </Section>

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
