// components/HeroDiagonal.tsx
import Button from '@/components/Button'

export default function HeroDiagonal() {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal accent background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/10 via-transparent to-transparent"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)' }}
        aria-hidden
      />
      <div className="section">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-display font-bold tracking-tight">
              Payments Without Limits
            </h1>
            <p className="mt-4 text-lead text-gray-600">
              From high‑risk merchant stability to proactive ATM monitoring, Clear Choice builds the right payment ecosystem for your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
              <Button href="/services" variant="secondary">Explore Services</Button>
            </div>
          </div>

          {/* Illustration placeholder — swap with your ATM + POS art */}
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-card">
              <div className="aspect-[4/3] rounded-xl bg-gray-100 grid place-items-center text-gray-400">
                <span>ATM + POS Illustration</span>
              </div>
            </div>
            {/* Soft glow */}
            <div className="absolute -inset-6 -z-10 bg-brand/20 blur-3xl opacity-30 rounded-3xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
