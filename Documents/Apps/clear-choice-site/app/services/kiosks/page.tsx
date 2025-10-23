// app/services/kiosks/page.tsx
import Button from '@/components/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kiosks',
  description: 'Self-service kiosks that reduce wait times, cut staffing costs, and increase customer satisfaction.',
  alternates: { canonical: '/services/kiosks' },
}

export default function Kiosks() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Kiosks</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Self-service solutions that reduce wait times and increase efficiency.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/resources/kiosk-solutions" variant="secondary">Explore Kiosk Options</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Long customer wait times, staff bottlenecks during peak hours, and the rising cost of labor. Traditional service models can't scale efficiently.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Custom kiosk design & setup', 'Integration with existing systems', 'Training & ongoing support'].map((step, i) => (
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
            'Reduced customer wait times',
            'Lower staffing costs',
            'Increased customer satisfaction',
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
          "Our kiosks handle 60% of transactions now. Wait times are down and our staff can focus on complex customer needs."
          <footer className="mt-3 text-sm text-gray-500">— Operations Manager, Quick Service Chain</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to streamline your operations?</h3>
          <p className="mt-2 text-gray-600">Let's design a kiosk solution that fits your business perfectly.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
