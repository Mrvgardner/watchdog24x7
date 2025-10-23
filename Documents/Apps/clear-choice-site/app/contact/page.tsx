// app/contact/page.tsx
import type { Metadata } from 'next'
import SalesforceLeadForm from '@/components/SalesforceLeadForm'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Icon from '@/components/Icon'
import { Headphones, Briefcase, MessageSquare, Zap } from 'react-feather'
import Link from 'next/link'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Talk to sales or get support. We respond within two business hours during standard hours.',
  alternates: { canonical: '/contact' },
}

function ContactAside() {
  return (
    <aside className="space-y-6">
      <div className="flex items-start gap-3">
        <Icon as={Headphones} />
        <div>
          <h3 className="font-heading text-lg">Sales Team</h3>
          <p className="text-gray-600">Ready to discuss your payment solution needs.</p>
          <p className="text-[#ff4f00] font-semibold mt-1">Call: 972-848-6376</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Icon as={Briefcase} />
        <div>
          <h3 className="font-semibold">Partnerships</h3>
          <p className="text-gray-600">Interested in our affiliate program?</p>
          <span className="text-green-600">Mention "partnership" in your message</span>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Icon as={MessageSquare} />
        <div>
          <h3 className="font-heading text-lg">Support</h3>
          <p className="text-gray-600">Existing customer? We’re here to help.</p>
          <p className="text-[#ff4f00] font-semibold mt-1">Call: 972-645-6233</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Icon as={Zap} />
        <div>
          <h3 className="font-semibold">Quick Response Promise</h3>
          <p className="text-gray-600">We respond within 24 hours (9 AM–5 PM CST, Mon–Fri).</p>
        </div>
      </div>
    </aside>
  );
}

export default function ContactPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to help. Fill out the form below or explore our resources first.
          </p>
        </header>

        <p className="text-sm text-gray-500 text-center mb-8">
          Prefer to self-serve?{' '}
          <a href="#resources" className="text-[#ff4f00] font-cta hover:underline">
            See Resources ↓
          </a>
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <SalesforceLeadForm />
          </div>
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">OTHER WAYS TO REACH US</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Icon as={Headphones} />
                <div>
                  <h3 className="font-heading text-lg normal-case">Sales Team</h3>
                  <p className="text-gray-600">Ready to discuss your payment solution needs.</p>
                  <p className="text-[#ff4f00] font-semibold mt-1">Call: 972-848-6376</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon as={MessageSquare} />
                <div>
                  <h3 className="font-heading text-lg normal-case">Support</h3>
                  <p className="text-gray-600">Existing customer? We’re here to help.</p>
                  <p className="text-[#ff4f00] font-semibold mt-1">Call: 972-645-6233</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon as={Briefcase} />
                <div>
                  <h3 className="font-heading text-lg normal-case">Partnerships</h3>
                  <p className="text-gray-600">Interested in our affiliate program?</p>
                  <p className="text-green-600 font-semibold mt-1">Mention “partnership” in your message</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon as={Zap} />
                <div>
                  <h3 className="font-heading text-lg normal-case">Quick Response Promise</h3>
                  <p className="text-gray-600">We respond within 24 hours (9 AM–5 PM CST, Mon–Fri).</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Resources Teaser */}
        <Section
          variant="muted"
          containerClassName="py-12"
          id="resources"
          className="mt-12"
        >
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
      <BreadcrumbJsonLd items={[{ name: 'Contact', url: '/contact' }]} />
    </>
  );
}
