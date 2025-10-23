import { getServiceCTA, getMoreSolutionsCTA } from '@/lib/cta'
// app/services/page.tsx
import ServiceCard from '@/components/ServiceCard'
import Icon from '@/components/Icon'
import Section from '@/components/Section'
import RevealGrid, { RevealCard } from '@/components/RevealGrid'
import ServicesJsonLd from './ServicesJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Link from 'next/link'
import FeatureBanner from '@/components/FeatureBanner'
import ResourceBanner from '@/components/ResourceBanner'
import DirectCTA from '@/components/DirectCTA'
import {
  Users,        // Affiliate Program
  MapPin,       // ATM Placement
  Shield,       // Watchdog (security vibe)
  CreditCard,   // Merchant Services
  Monitor,      // Kiosks
  Globe,        // Foreign Exchange
} from 'react-feather'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Merchant services, ATM placement, monitoring, kiosks, and FX designed for stability, compliance, and growth.',
  alternates: { canonical: '/services' },
}

export default function ServicesOverview() {
  const tier1 = [
    {
      title: 'Affiliate Program',
      slug: 'affiliate-program',
      desc: 'Start an ISO-style business without the headaches.',
      icon: <Icon as={Users} />,
      values: ['Recurring revenue', 'Training & compliance', 'Partner support'],
    },
    {
      title: 'ATM Placement',
      slug: 'atm-placement',
      desc: 'Hands-off ATMs that generate new revenue streams.',
      icon: <Icon as={MapPin} />,
      values: ['High uptime', 'Transparent rev share', 'Full servicing'],
    },
    {
      title: 'Watchdog',
      slug: 'watchdog',
      desc: 'Proactive ATM monitoring and 24/7 issue resolution.',
      icon: <Icon as={Shield} />,
      values: ['Real-time alerts', 'Threat detection', 'Fewer truck rolls'],
    },
    {
      title: 'Merchant Services',
      slug: 'merchant-services',
      desc: 'Lower costs with high-risk stability and no surprise drops.',
      icon: <Icon as={CreditCard} />,
      values: ['Interchange optimization', 'Chargeback help', 'Compliance'],
    },
    {
      title: 'All-In-One Kiosks',
      slug: 'kiosks',
      desc: 'Self-service solutions for cash, bill pay, and more.',
      icon: <Icon as={Monitor} />,
      values: ['Modular features', 'Foot traffic lift', 'Modern UX'],
    },
    {
      title: 'Foreign Exchange',
      slug: 'foreign-exchange',
      desc: 'FX-enabled ATMs for international customers.',
      icon: <Icon as={Globe} />,
      values: ['Traveler friendly', 'Transparent rates', 'New fee revenue'],
    },
  ]

  const tier2 = [
    { title: 'Dispensary Solution', desc: 'Secure, compliant payments for cannabis businesses.', ctaLabel: 'Claim Your Free Consultation' },
    { title: 'Cash Management', desc: 'End-to-end cash logistics, replenishment, and audits.' },
    { title: 'Billboard', desc: 'In-store or kiosk-based advertising revenue opportunities.' },
    { title: 'Reliable Equipment', desc: 'Durable, high-performance ATMs and kiosks.' },
    { title: 'Expert Servicing', desc: 'Certified techs for installation, maintenance, and upgrades.' },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-12 pl-4 md:pl-8 lg:pl-12 xl:pl-0">
        <h1 className="text-4xl font-bold mb-4">OUR SERVICES</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you need a single ATM or a complete payment ecosystem, Clear Choice builds the right solution for your business.
        </p>
      </header>

      {/* Core Services */}
      <Section variant="surface">
        <h2 className="font-heading text-2xl mb-6">Core Services</h2>
        <RevealGrid>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tier1.map((s) => (
              <RevealCard key={s.slug}>
                <article className="group border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl normal-case">{s.title}</h3>
                    <div className="text-[#ff4f00] opacity-80 group-hover:opacity-100 transition">{s.icon}</div>
                  </div>
                  <p className="text-gray-600">{s.desc}</p>
                  <ul className="text-sm text-gray-700 space-y-1 mt-3">
                    {s.values.map((v) => (
                      <li key={v} className="flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <a
                      href={`/services/${s.slug}`}
                      className="inline-block bg-[#ff4f00] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e04400] transition"
                    >
                      {getServiceCTA(s.slug)}
                    </a>
                  </div>
                </article>
              </RevealCard>
            ))}
          </div>
        </RevealGrid>
      </Section>

      {/* Scroll to More Solutions Button */}
      <div className="flex justify-end py-12 bg-white max-w-7xl mx-auto px-6">
        <a
          href="#more-solutions"
          className="inline-flex items-center gap-2 bg-[#ff4f00] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e04400] transition-all hover:scale-105 shadow-lg"
        >
          Explore More Solutions
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Blue CTA Banner */}
      <ResourceBanner
        heading="Are you sure your business is industry compliant?"
        sub="Download our free guide to protect your business from hidden fees and compliance pitfalls."
        href="/resources/guides/merchant-compliance"
        label="Download the Free Compliance Guide"
        className="mt-12"
      />

      <Section
        variant="surface"
        className="bg-gray-50 -mt-px"
        containerClassName="py-16"
        id="more-solutions"
      >
        <h2 className="text-2xl font-semibold mb-6">More Solutions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tier2.map((s) => (
            <RevealCard key={s.title}>
              <div
                className="group border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#ff4f00]/40 transition bg-white"
              >
                <h3 className="font-heading text-xl normal-case">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
                <div className="mt-4">
                    <a
                      href="/contact"
                      className="inline-block bg-[#ff4f00] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e04400] transition"
                    >
                      {getMoreSolutionsCTA(s.title)}
                    </a>
                  </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>
    </main>
  );
}
