// app/services/watchdog/page.tsx
import Button from '@/components/Button'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watchdog Monitoring',
  description:
    'Proactive ATM monitoring with real-time alerts to reduce downtime and cut costly truck rolls.',
  alternates: { canonical: '/services/watchdog' },
}

export default function Watchdog() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Watchdog</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Real-time monitoring that catches problems before they become costly.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/resources/watchdog-overview" variant="secondary">How Watchdog Works</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Payment system downtime hits your revenue hard. By the time you notice problems, you've already lost customers and sales.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Real-time system monitoring', 'Instant alert notifications', 'Proactive issue resolution'].map((step, i) => (
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
            '99.9% system uptime guarantee',
            'Instant problem notifications',
            'Reduced revenue loss from downtime',
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
          "Watchdog caught a system issue at 2 AM and had it fixed before we opened. That saved us thousands in lost sales."
          <footer className="mt-3 text-sm text-gray-500">— Restaurant Manager, Multi-Location Chain</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready for bulletproof uptime?</h3>
          <p className="mt-2 text-gray-600">Let's get Watchdog monitoring your systems 24/7.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <ServiceJsonLd
        name="Watchdog ATM Monitoring"
        description="Proactive ATM monitoring with real-time alerts and fewer truck rolls."
        url="https://clearchoicepay.com/services/watchdog"
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://clearchoicepay.com/' },
        { name: 'Services', url: 'https://clearchoicepay.com/services' },
        { name: 'Watchdog ATM Monitoring' },
      ]}/>
    </main>
  )
}
