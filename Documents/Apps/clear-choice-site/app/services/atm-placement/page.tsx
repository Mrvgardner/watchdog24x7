// app/services/atm-placement/page.tsx
import Button from '@/components/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ATM Placement',
  description: 'Hands-off ATM placement that generates new revenue streams with high uptime and full servicing.',
  alternates: { canonical: '/services/atm-placement' },
}

export default function ATMPlacement() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">ATM Placement</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Hands-off ATMs that generate new revenue streams.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/resources/atm-placement-guide" variant="secondary">Download Placement Guide</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          ATM maintenance headaches, cash management complexity, and unpredictable uptime. Traditional providers leave you managing everything yourself.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Site evaluation & placement', 'Installation & cash loading', 'Ongoing monitoring & maintenance'].map((step, i) => (
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
            'High uptime with proactive monitoring',
            'Transparent revenue sharing agreements',
            'Full servicing and cash management',
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
          "Our ATM is always working and generating revenue. Clear Choice handles everything so we don't have to."
          <footer className="mt-3 text-sm text-gray-500">— Business Owner, Retail Location</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready for hands-off ATM revenue?</h3>
          <p className="mt-2 text-gray-600">Let's evaluate your location and start generating income.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
