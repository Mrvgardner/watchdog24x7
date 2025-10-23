import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] outline outline-4 outline-red-500">
      <div className="relative z-10 max-w-2xl px-6 pt-24 text-white">
        <h1 className="text-5xl font-bold">PAYMENTS WITHOUT LIMITS [HERO DEBUG]</h1>
        <p className="mt-4 text-lg">Clear Choice gives you the tools, support, and revenue opportunities the other guys don’t.</p>
        <a href="/book-demo" className="inline-block mt-6 bg-[#ff4f00] text-white px-6 py-3 rounded-lg font-semibold">BOOK A FREE DEMO NOW</a>
      </div>

    </section>
  )
}