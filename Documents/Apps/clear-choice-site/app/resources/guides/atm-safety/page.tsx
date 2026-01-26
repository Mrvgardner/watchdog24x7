import type { Metadata } from 'next'
import GAWebToLead from '@/components/GAWebToLead'

export const metadata: Metadata = {
  title: 'ATM Safety Best Practices',
  description: 'Download the free checklist to reduce tampering, skimming, and jackpotting risk.',
  alternates: { canonical: '/resources/guides/atm-safety' },
}

export default function AtmSafetyGuide() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const ret = `${base}/resources/guides/atm-safety/thank-you` // swap to prod at go-live

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">ATM SAFETY BEST PRACTICES</h1>
      <p className="mb-6 text-lg text-gray-700">
        Reduce the risk of tampering, skimming, and jackpotting with this quick checklist.
        Get a printable PDF you can use with your team.
      </p>

      <GAWebToLead
        orgId="00Da500000FOGNx"
        retURL={ret}
        eventLabel="ATM Safety Checklist"
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

        <button type="submit" className="bg-[#ff4f00] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e04400] transition">
          Get the Checklist →
        </button>
      </GAWebToLead>
    </main>
  )
}
