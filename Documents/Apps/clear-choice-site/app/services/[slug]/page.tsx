import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Steps from '@/components/Steps'
import Outcomes from '@/components/Outcomes'
import StaticTestimonial from '@/components/StaticTestimonial'
import { Users, MapPin, Shield, CreditCard, Monitor, Globe, Check } from 'react-feather'
import { ReactElement } from 'react'
import RelatedCard from '@/components/RelatedCard'
import FeatureBanner from '@/components/FeatureBanner'
import Section from '@/components/Section'
import ResourceBanner from '@/components/ResourceBanner'
import Link from 'next/link'
import { getRelatedCaseStudies } from '@/lib/resources'

type Svc = {
  title: string
  slug: string
  hero: string
  icon: ReactElement
  bullets: string[]
  plan: string[]
  outcomes: string[]
  quote?: { text: string; name: string; company?: string }
  productKey: string
  industryKey?: string
}

const SERVICES: Record<string, Svc> = {
  'affiliate-program': {
    title: 'Affiliate Program',
    slug: 'affiliate-program',
    hero: 'Start an ISO-style business without the headaches.',
    icon: <Icon as={Users} />,
    bullets: ['Recurring revenue', 'Training & compliance', 'Partner support'],
    plan: ['Sign up & onboarding', 'Training & compliance certification', 'Co-selling with partner support'],
    outcomes: ['Predictable rev share', 'Faster ramp to first deals', 'Long-term account support'],
  quote: { text: 'We launched without heavy startup costs and had help on every deal.', name: 'Alex', company: 'Coastal Payments' },
  productKey: 'Affiliate Program',
  },
  'atm-placement': {
    title: 'ATM Placement',
    slug: 'atm-placement',
    hero: 'Hands-off ATMs that generate new revenue streams.',
    icon: <Icon as={MapPin} />,
    bullets: ['High uptime', 'Transparent rev share', 'Full servicing'],
    plan: ['Site survey & placement', 'Monitoring & cash logistics', 'Monthly reporting & share'],
    outcomes: ['More foot traffic', 'New fee revenue', 'Less downtime'],
    productKey: 'ATM Placement',
  },
  watchdog: {
    title: 'Watchdog',
    slug: 'watchdog',
    hero: 'Proactive ATM monitoring and 24/7 issue resolution.',
    icon: <Icon as={Shield} />,
    bullets: ['Real-time alerts', 'Threat detection', 'Fewer truck rolls'],
    plan: ['Connect terminals', 'Alert thresholds & routing', 'Auto-ticketing & resolution'],
    outcomes: ['Minimized downtime', 'Faster fixes', 'Lower service costs'],
    productKey: 'Watchdog',
    // industryKey: 'Convenience',
  },
  'merchant-services': {
    title: 'Merchant Services',
    slug: 'merchant-services',
    hero: 'Lower costs with high-risk stability and no surprise drops.',
    icon: <Icon as={CreditCard} />,
    bullets: ['Interchange optimization', 'Chargeback help', 'Compliance'],
    plan: ['Profile & stabilize', 'Optimize routing & fees', 'Monitor & support'],
    outcomes: ['Reduced effective rates', 'Fewer surprise drops', 'Better dispute outcomes'],
    productKey: 'Merchant Services',
  },
  kiosks: {
    title: 'All-In-One Kiosks',
    slug: 'kiosks',
    hero: 'Self-service solutions for cash, bill pay, and more.',
    icon: <Icon as={Monitor} />,
    bullets: ['Modular features', 'Foot traffic lift', 'Modern UX'],
    plan: ['Pick configuration', 'Install & train staff', 'Promote & optimize'],
    outcomes: ['More revenue per visit', 'Shorter queues', 'Better CX'],
    productKey: 'All-In-One Kiosks',
  },
  'foreign-exchange': {
    title: 'Foreign Exchange',
    slug: 'foreign-exchange',
    hero: 'FX-enabled ATMs for international customers.',
    icon: <Icon as={Globe} />,
    bullets: ['Traveler friendly', 'Transparent rates', 'New fee revenue'],
    plan: ['Enable FX on eligible sites', 'Transparent rate receipts', 'Compliance reporting'],
    outcomes: ['New fee revenue', 'Happier travelers', 'Competitive edge'],
    productKey: 'Foreign Exchange',
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const svc = SERVICES[params.slug]
  if (!svc) return { title: 'Not found' }
  return {
    title: svc.title,
    description: svc.hero,
    alternates: { canonical: `/services/${svc.slug}` },
  }
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const svc = SERVICES[params.slug]
  if (!svc) return notFound()

  const related = getRelatedCaseStudies({
    product: svc.productKey,
    industry: svc.industryKey,
    limit: 3,
  })

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          {svc.icon}
          <h1 className="text-3xl font-bold tracking-tight">{svc.title}</h1>
        </div>
        <p className="text-lg text-gray-600">{svc.hero}</p>
        <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
          {svc.bullets.map((b) => (
            <li key={b} className="inline-flex items-center gap-2 border rounded-full px-3 py-1">
              <Check size={16} className="text-green-600" /> {b}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/contact" variant="secondary">Talk to Sales</Button>
        </div>
      </header>

      {/* Plan */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <Steps items={svc.plan} />
      </section>

      {/* Outcomes */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <Outcomes items={svc.outcomes} />
      </section>

      {/* Testimonial (optional) */}
      {svc.quote ? (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">WHO SAYS?</h2>
          <StaticTestimonial quote={svc.quote.text} name={svc.quote.name} company={svc.quote.company} />
        </section>
      ) : null}

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Related Resources</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <RelatedCard
                key={r.slug}
                href={`/resources/case-studies/${r.slug}`}
                title={r.title}
                description={r.description}
                date={r.date}
              />
            ))}
          </div>
        </section>
      )}

      {/* Per-page CTA block: direct + transitional (rotated per service) */}
      <section className="mt-16 space-y-4 text-center">
        {(() => {
          const ctas: Record<string, { directLabel: string; directHref: string; transitionalLabel: string; transitionalHref: string }> = {
            'affiliate-program': {
              directLabel: 'Claim Your Free Consultation',
              directHref: '/contact',
              transitionalLabel: 'Download the Free Compliance Guide',
              transitionalHref: '/resources/guides/merchant-compliance',
            },
            'atm-placement': {
              directLabel: 'Talk to Sales Today',
              directHref: '/contact',
              transitionalLabel: 'Get the Checklist: ATM Safety Best Practices',
              transitionalHref: '/resources',
            },
            watchdog: {
              directLabel: 'Start Your Free Demo',
              directHref: '/book-demo',
              transitionalLabel: 'See More Success Stories',
              transitionalHref: '/resources/case-studies',
            },
            'merchant-services': {
              directLabel: 'Grow Your Revenue',
              directHref: '/contact',
              transitionalLabel: 'Download the Free Compliance Guide',
              transitionalHref: '/resources/guides/merchant-compliance',
            },
            kiosks: {
              directLabel: 'Get Started Now',
              directHref: '/contact',
              transitionalLabel: 'Read the FAQs',
              transitionalHref: '/resources/faqs',
            },
            'foreign-exchange': {
              directLabel: 'Talk to Sales Today',
              directHref: '/contact',
              transitionalLabel: 'Download the Free Compliance Guide',
              transitionalHref: '/resources/guides/merchant-compliance',
            },
          }

          const cta = ctas[svc.slug] ?? {
            directLabel: 'Start Your Free Demo',
            directHref: '/book-demo',
            transitionalLabel: 'See More Success Stories',
            transitionalHref: '/resources/case-studies',
          }

          return (
            <>
              <Link href={cta.directHref} className="inline-block bg-[#ff4f00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e04400] transition">
                {cta.directLabel}
              </Link>

              <Link href={cta.transitionalHref} className="block text-sm text-gray-500 hover:text-[#ff4f00]">
                {cta.transitionalLabel}
              </Link>
            </>
          )
        })()}
      </section>

      <ResourceBanner
        heading={`Ready to try ${svc.title}?`}
        sub={`See how ${svc.title} can drive revenue and reduce operational headaches.`}
        href="/book-demo"
        label="Book a Free Demo"
      />
    </main>
  )
}
