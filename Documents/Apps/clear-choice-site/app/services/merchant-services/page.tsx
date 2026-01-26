// app/services/merchant-services/page.tsx
import Button from '@/components/Button'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Merchant Services',
  description: 'Lower costs with high‑risk stability and zero surprise drops.',
  alternates: { canonical: '/services/merchant-services' },
}

export default function MerchantServices() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Merchant Services</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Lower costs with high‑risk stability and zero surprise drops.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/resources/merchant-services-spec" variant="secondary">Download Spec Sheet</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Payment instability and surprise terminations. Processors categorize you as "high‑risk," then pull support when you need it most.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Evaluate & stabilize', 'Optimize fees & routing', 'Monitor & support 24/7'].map((step, i) => (
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
            'Interchange optimization that reduces effective rates',
            'Compliance guardrails for high‑risk categories',
            'Hands‑on chargeback strategy and tooling',
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
          "Clear Choice kept us compliant and processing while others dropped us. Revenue is up and chargebacks are down."
          <footer className="mt-3 text-sm text-gray-500">— Firstname, Company</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to stabilize and grow?</h3>
          <p className="mt-2 text-gray-600">Let's map your merchant profile and route you right.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <ServiceJsonLd
        name="Merchant Services"
        description="Lower costs with high‑risk stability and zero surprise drops."
        url="https://clearchoicepay.com/services/merchant-services"
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://clearchoicepay.com/' },
        { name: 'Services', url: 'https://clearchoicepay.com/services' },
        { name: 'Merchant Services' },
      ]}/>
    </main>
  )
}
