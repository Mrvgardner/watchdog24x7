
import type { Metadata } from 'next'
import HeroBackground from '@/components/HeroBackground'
import DeviceOverlay from '@/components/DeviceOverlay'
import AngledDivider from '@/components/AngledDivider'

export const metadata: Metadata = {
  title: 'Payments Without Limits',
  description:
    'Stable merchant services, ATM placement & monitoring, kiosks, and FX-enabled ATMs built to grow your revenue.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[70vh]">
        {/* rotating background */}
        <HeroBackground />

        {/* headline / copy / CTA */}
        <div className="relative z-10 max-w-2xl px-6 pt-24 text-white">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-tight">
            PAYMENTS <br /> WITHOUT <br /> LIMITS
          </h1>
          <p className="mt-4 text-lg">
            Clear Choice gives you the tools, support, and revenue opportunities the other guys don’t.
          </p>
          <a
            href="/book-demo"
            className="inline-block mt-6 bg-[#ff4f00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e04400] transition"
          >
            BOOK A FREE DEMO NOW
          </a>
        </div>

        {/* rotating device overlay */}
        <DeviceOverlay rotate intervalMs={6000} />
      </section>

      {/* angled divider into the next light-gray section (matches your old look) */}
      <AngledDivider color="#eef1f5" height={64} />

      {/* ⬇️ PUT YOUR EXISTING HOMEPAGE SECTIONS BACK HERE ⬇️
          Example: Problem section, navy band, cards, etc.
          Keep their markup exactly as it was — we didn’t touch them. */}
      {/* <ProblemSection /> */}
      {/* <NavyPromiseBand /> */}
      {/* <HowToGetStarted /> */}
      {/* ...rest of home content... */}
    </main>
  )
}