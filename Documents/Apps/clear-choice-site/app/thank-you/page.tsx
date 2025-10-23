import Link from 'next/link'
import { redirect } from 'next/navigation'

const ASSET_TO_PDF: Record<string, string> = {
  'atm-launch-checklist': '/downloads/atm-launch-checklist.pdf',
  'atm-safety-checklist': '/downloads/atm-safety-checklist.pdf',
  'atm-maintenance-checklist': '/downloads/atm-maintenance-checklist.pdf',
  'merchant-statement-guide': '/downloads/merchant-statement-guide.pdf',
  'watchdog-playbook': '/downloads/watchdog-playbook.pdf',
}

export const metadata = {
  title: 'Thank You',
  description: 'We received your message and will get back to you shortly.',
  alternates: { canonical: '/thank-you' },
}

export default function ThankYouPage({ searchParams }: { searchParams?: { asset?: string } }) {
  const asset = searchParams?.asset
  const pdf = asset ? ASSET_TO_PDF[asset] : undefined

  // If asset was provided and we know the PDF, trigger a client-side download via meta refresh fallback
  // For SSR simplicity, we render a hidden meta refresh tag and a visible link.
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-bold tracking-wide">Thank You</h1>
      <p className="mt-4 text-gray-600">
        We received your request. A team member will reach out soon to schedule next steps.
      </p>

      {pdf && (
        <>
          {/* Gentle auto-open after short delay */}
          <meta httpEquiv="refresh" content={`2;url=${pdf}`} />
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-green-800">
              Your download is starting… If it doesn’t, <a className="underline" href={pdf}>click here</a>.
            </p>
          </div>
        </>
      )}

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="border rounded-xl p-4 bg-white">
          <div className="text-sm font-semibold">What's next?</div>
          <p className="mt-1 text-sm text-gray-600">Watch for an email or call during business hours.</p>
        </div>
        <div className="border rounded-xl p-4 bg-white">
          <div className="text-sm font-semibold">Need something urgent?</div>
          <p className="mt-1 text-sm text-gray-600">Reply to our email or use the <Link href="/contact" className="text-[#ff4f00] font-semibold hover:underline">contact form</Link>.</p>
        </div>
        <div className="border rounded-xl p-4 bg-white">
          <div className="text-sm font-semibold">Prefer a demo?</div>
          <p className="mt-1 text-sm text-gray-600"><Link href="/book-demo" className="text-[#ff4f00] font-semibold hover:underline">Book a Free Demo Now</Link></p>
        </div>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-[#ff4f00] font-semibold hover:underline">Return to Home →</Link>
      </div>
    </main>
  )
}
