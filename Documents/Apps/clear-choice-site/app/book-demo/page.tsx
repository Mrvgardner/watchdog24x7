import DemoForm from '@/components/DemoForm'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Free Demo',
  description: 'Tell us about your business and we\'ll tailor a walkthrough.',
  alternates: { canonical: '/book-demo' },
}

function BookDemoJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Book a Free Demo',
    url: 'https://clearchoicepay.com/book-demo'
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function BookDemo() {
  return (
    <main className="section">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book a Free Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us a bit about your business and we'll tailor the walkthrough to show you exactly how Clear Choice can boost your revenue.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
            <DemoForm />
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What you'll see:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">✓</span>
                  <span>Custom strategy for your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">✓</span>
                  <span>Real case studies from similar businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">✓</span>
                  <span>Partnership program opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                💡 Demo takes just 15 minutes
              </h4>
              <p className="text-blue-800 text-sm">
                We'll walk through your specific use case and show you the exact revenue potential for your business.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                Common Questions We'll Answer:
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• How much additional revenue can I expect?</li>
                <li>• What's the setup process and timeline?</li>
                <li>• How do you handle compliance and security?</li>
                <li>• What ongoing support do you provide?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BookDemoJsonLd />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://clearchoicepay.com/' },
        { name: 'Book a Free Demo' },
      ]}/>
    </main>
  )
}
