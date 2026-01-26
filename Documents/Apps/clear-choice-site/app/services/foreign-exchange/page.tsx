// app/services/foreign-exchange/page.tsx
import Button from '@/components/Button'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foreign Exchange ATMs',
  description: 'FX-enabled ATMs with transparent rates and new fee revenue.',
  alternates: { canonical: '/services/foreign-exchange' },
}

export default function ForeignExchange() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Foreign Exchange</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Competitive currency exchange with transparent rates and fast processing.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/resources/fx-rates" variant="secondary">View Current Rates</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Hidden fees, poor exchange rates, and slow international transfers. Traditional banks make foreign exchange expensive and unpredictable.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Real-time competitive rates', 'Transparent fee structure', 'Fast, secure transfers'].map((step, i) => (
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
            'Better exchange rates than banks',
            'No hidden fees or surprises',
            'Fast international processing',
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
          "Clear Choice saved us thousands on international transfers. The rates are transparent and the service is fast."
          <footer className="mt-3 text-sm text-gray-500">— CFO, Import/Export Business</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready for better exchange rates?</h3>
          <p className="mt-2 text-gray-600">Let's show you how much you can save on foreign exchange.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <ServiceJsonLd
        name="Foreign Exchange ATMs"
        description="FX-enabled ATMs with transparent rates and new fee revenue."
        url="https://clearchoicepay.com/services/foreign-exchange"
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://clearchoicepay.com/' },
        { name: 'Services', url: 'https://clearchoicepay.com/services' },
        { name: 'Foreign Exchange ATMs' },
      ]}/>
    </main>
  )
}
