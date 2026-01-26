import type { Metadata } from 'next'
import GAWebToLead from '@/components/GAWebToLead'

export const metadata: Metadata = {
  title: 'Merchant Compliance Guide',
  description: 'Download the free guide to avoid hidden fees and compliance pitfalls.',
  alternates: { canonical: '/resources/guides/merchant-compliance' },
}

export default function MerchantComplianceGuide() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const ret = `${base}/resources/guides/merchant-compliance/thank-you`
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">MERCHANT COMPLIANCE GUIDE</h1>
      <p className="mb-6 text-lg text-gray-700">
        Compliance doesn’t have to be overwhelming. Get our free PDF guide and learn
        how to protect your business from fees, chargebacks, and account freezes.
      </p>

      <GAWebToLead
        orgId="00Da500000FOGNx"
        retURL={ret}
        eventLabel="Merchant Compliance Guide"
        className="space-y-4 bg-white border rounded-lg p-6 shadow"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="last_name" required className="w-full border rounded p-2" placeholder="Your name" />
        </div>

        <div>
          <label className="block text-sm font-medium">Company</label>
          <input name="company" required className="w-full border rounded p-2" placeholder="Your company" />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="w-full border rounded p-2" placeholder="you@company.com" />
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
          className="bg-[#ff4f00] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e04400] transition"
        >
          Get the Guide →
        </button>
      </GAWebToLead>
    </main>
  )
}
