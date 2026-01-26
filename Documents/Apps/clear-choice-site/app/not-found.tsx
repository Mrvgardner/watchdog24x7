import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="section text-center py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <div className="space-x-4">
        <Link 
          href="/services" 
          className="inline-block bg-[#ff4f00] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#e54700] transition"
        >
          View Services
        </Link>
        <Link 
          href="/book-demo" 
          className="inline-block bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
        >
          Book a Demo
        </Link>
      </div>
    </main>
  )
}
