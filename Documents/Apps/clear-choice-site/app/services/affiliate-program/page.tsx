// app/services/affiliate-program/page.tsx
import Button from '@/components/Button'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Program',
  description: 'Start an ISO‑style business with training, compliance, and support.',
  alternates: { canonical: '/services/affiliate-program' },
}

export default function AffiliateProgram() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Affiliate Program</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Start an ISO-style business without the headaches.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/resources/affiliate-program-guide" variant="secondary">Download Program Guide</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Complex ISO requirements, compliance headaches, and training gaps. Traditional programs leave you drowning in paperwork with minimal support.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Complete training & certification', 'Ongoing compliance support', 'Revenue share & growth tools'].map((step, i) => (
            <li key={step} className="border border-gray-200 rounded-xl p-5">
              <div className="text-sm text-gray-500">Step {i + 1}</div>
              <div className="mt-1 font-semibold">{step}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* Outcomes */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What you'll get</h2>
        <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
          {[
            'Recurring revenue from merchant portfolios',
            'Complete training and compliance support',
            'Partner tools and dedicated account management',
          ].map(b => (
            <li key={b} className="flex gap-2">
              <span className="text-green-500">•</span><span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Proof */}
      <section className="section">
        <h2 className="text-2xl font-semibold">Who says?</h2>
        <blockquote className="mt-4 border-l-4 border-brand pl-4 text-gray-700 max-w-3xl">
          "Clear Choice made ISO partnership simple. Great training, ongoing support, and steady recurring revenue."
          <footer className="mt-3 text-sm text-gray-500">— Partner Name, Clear Choice Affiliate</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to build recurring revenue?</h3>
          <p className="mt-2 text-gray-600">Join our affiliate program and start earning from day one.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <ServiceJsonLd
        name="Affiliate Program"
        description="Start an ISO‑style business with training, compliance, and support."
        url="https://clearchoicepay.com/services/affiliate-program"
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://clearchoicepay.com/' },
        { name: 'Services', url: 'https://clearchoicepay.com/services' },
        { name: 'Affiliate Program' },
      ]}/>
    </main>
  )
}
