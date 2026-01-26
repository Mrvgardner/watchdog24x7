'use client'
import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function DemoForm() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = () => {
    setSubmitting(true)
    trackEvent.formSubmit('demo_request')
    trackEvent.demoRequest('website_form')
  }

  return (
    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl"
    >
      {/* Required SF fields */}
      <input type="hidden" name="oid" value="00Da500000FOGNx" />
  <input type="hidden" name="retURL" value={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/thank-you`} />
      <input type="hidden" name="lead_source" value="Website" />

      {/* Honeypot */}
      <div className="hidden">
        <label>Do not fill this out if you are human</label>
        <input type="text" name="00N_spam_trap" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">First name</label>
          <input name="first_name" required className="mt-1 w-full border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name</label>
          <input name="last_name" required className="mt-1 w-full border rounded-lg px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Company</label>
        <input name="company" required className="mt-1 w-full border rounded-lg px-3 py-2" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" required className="mt-1 w-full border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input name="phone" type="tel" className="mt-1 w-full border rounded-lg px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">How can we help?</label>
        <textarea name="description" rows={4} className="mt-1 w-full border rounded-lg px-3 py-2" />
      </div>

      <label className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          required
          className="mt-0"
        />
        <span className="text-sm">
          I agree to the{' '}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff4f00] hover:text-[#e54700] underline"
          >
            Terms & Conditions and Privacy Policy
          </a>
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-block px-6 py-3 bg-[#ff4f00] text-white font-semibold rounded-lg shadow hover:bg-[#e54700] focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:ring-offset-2 transition disabled:opacity-50"
        onClick={() => {
          trackEvent.ctaClick('form', 'demo_submit')
          ;(window as any).gtag?.('event', 'form_submit_click', { form: 'demo' })
        }}
      >
        {submitting ? 'Submitting…' : 'Book a Free Demo Now'}
      </button>
    </form>
  )
}
