// components/Footer.tsx
import Link from 'next/link'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 pl-4 md:pl-8 lg:pl-12 xl:pl-6">
        {/* Top: 4-column footer */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/industries" className="hover:underline">Industries</Link></li>
              <li><Link href="/resources" className="hover:underline">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/services/merchant-services" className="hover:underline">Merchant Services</Link></li>
              <li><Link href="/services/watchdog" className="hover:underline">Watchdog Monitoring</Link></li>
              <li><Link href="/services/foreign-exchange" className="hover:underline">Foreign Exchange ATMs</Link></li>
              <li><Link href="/services/affiliate-program" className="hover:underline">Affiliate Program</Link></li>
              <li><Link href="/services/kiosks" className="hover:underline">All-In-One Kiosks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Get in touch</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/book-demo" className="hover:underline">Book a Free Demo Now</Link></li>
              <li><Link href="/contact" className="hover:underline">Talk to Sales</Link></li>
              <li><a href="https://www.switchcommerce.net" target="_blank" rel="noopener noreferrer" className="hover:underline">Customer Login</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-600 text-center sm:text-left">
          <p>
            © {year} Clear Choice Payment Solutions
            <br className="sm:hidden" /> <span className="hidden sm:inline">—</span>
            <span className="sm:hidden">—</span> A Switch Commerce Company
          </p>
        </div>
      </div>
    </footer>
  )
}
