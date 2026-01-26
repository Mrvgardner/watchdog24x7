import type { Metadata } from 'next'
import { ChevronDown } from 'react-feather'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Clear answers to common questions about payments, ATMs, kiosks, and compliance.',
  alternates: { canonical: '/resources/faqs' },
}

function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function FaqsPage() {
  const faqs = [
    {
      q: 'Can you enable FX for airports and tourist areas?',
      a: 'Yes. Our FX-enabled ATMs offer transparent rates for travelers, which builds trust and encourages use. For operators, this creates an additional revenue stream without adding complexity. Whether you’re managing a busy airport, cruise port, or tourist hotspot, we make sure your ATMs are equipped to serve international visitors smoothly and profitably.',
    },
    {
      q: 'Do you handle high-risk merchant categories?',
      a: 'Yes. We specialize in stabilizing processing for high-risk categories by applying the right routing, custom descriptors, and chargeback mitigation strategies. This helps protect your business from sudden disruptions and ensures you have predictable, reliable payment processing, even in industries where other providers hesitate.',
    },
    {
      q: 'How does Watchdog improve ATM and payment security?',
      a: 'Watchdog goes beyond monitoring downtime—it provides layered security for your ATMs and payment environment. We continuously monitor terminals 24/7, alert on anomalies in real time, and place them behind hardened firewalls. Combined with automated ticketing and proactive remediation, Watchdog helps stop threats before they become costly problems. With testing validated by real-world hackers, you can operate confidently knowing your portfolio is shielded.',
    },
    {
      q: 'Do you offer solutions for dispensaries?',
      a: 'Yes. We understand the unique challenges dispensaries face with payment and cash management. Our solutions provide secure, compliant processing designed specifically for high-cash environments. With integrated vaulting options and ATM services, dispensaries can offer customers convenient access to cash while protecting the business against unnecessary risk.',
    },
    {
      q: 'What cash management solutions do you provide?',
      a: 'We make managing cash easy and secure. Whether you need a traditional vault service for your ATM or prefer modern recyclers, we offer both. With recyclers, you can deposit funds directly from your till at the end of each business day, vaulting your ATM without the need for manual pickups. This reduces labor, improves security, and gives you peace of mind that your cash is always accounted for.',
    },
    {
      q: 'Can Clear Choice customize solutions for my industry?',
      a: 'Absolutely. From hospitality to retail, dispensaries to financial institutions, we tailor our services to fit your industry’s specific needs. We take the time to understand your business model and design solutions that reduce friction, improve security, and maximize revenue.',
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">FAQs</h1>

      <div className="mt-6 divide-y divide-gray-200">
        {faqs.map((f, idx) => (
          <details key={idx} className="group py-4">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-heading text-lg normal-case">{f.q}</span>
              <span
                aria-hidden="true"
                className="ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 group-hover:bg-gray-50 group-hover:border-gray-400 transition"
              >
                <ChevronDown className="transition group-open:rotate-180" size={18} />
              </span>
            </summary>
            <div className="mt-3 prose prose-neutral max-w-none">
              <p>{f.a}</p>
            </div>
          </details>
        ))}
      </div>
      <FaqJsonLd items={faqs.map((f) => ({ q: f.q, a: f.a }))} />
    </main>
  )
}
