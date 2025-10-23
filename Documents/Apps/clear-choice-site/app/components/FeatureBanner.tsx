'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeatureBanner({
  heading,
  sub,
  href,
  label,
  secondaryHref,
  secondaryLabel,
}: {
  heading: string
  sub: string
  href: string
  label: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="text-[clamp(1.4rem,2.8vw,2rem)] font-bold mb-3">{heading}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
      >
        <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-gray-200 mb-6">{sub}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.22 }}
      >
        <div className="flex items-center gap-4">
          <Link
            href={href}
            className="inline-block bg-[#ff4f00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e04400] transition"
          >
            {label}
          </Link>

          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="inline-block text-[#ff4f00] px-3 py-2 rounded font-medium hover:underline"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </motion.div>
    </div>
  )
}
