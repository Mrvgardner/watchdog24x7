import Link from 'next/link'
import TrackDownload from '@/components/TrackDownload'

export default function MerchantComplianceThankYou() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">THANK YOU</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your guide is ready! Click below to download your free Merchant Compliance PDF.
      </p>
      <TrackDownload
        href="/guides/merchant-compliance.pdf"
        eventLabel="Merchant Compliance Guide PDF"
        className="bg-[#ff4f00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e04400] transition inline-block"
      >
        Download PDF
      </TrackDownload>
      <p className="mt-6 text-gray-500">A copy has also been sent to your email if provided.</p>
      <div className="mt-8">
        <Link href="/resources" className="text-[#ff4f00] font-cta hover:underline">
          ← Back to Resources
        </Link>
      </div>
    </main>
  )
}
