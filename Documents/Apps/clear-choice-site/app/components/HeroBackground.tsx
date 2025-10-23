"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

// Your real files:
const BG = ['/images/store.jpg', '/images/airport.jpg', '/images/cafe.jpg'] as const

export default function HeroBackground() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % BG.length), 7000)
    return () => clearInterval(id)
  }, [])

  const M = motion as any

  return (
    <div className="absolute inset-0 -z-10">
      <AnimatePresence mode="wait">
        <M.div
          key={BG[i]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image src={BG[i]} alt="" fill className="object-cover opacity-90" priority />
        </M.div>
      </AnimatePresence>
    </div>
  )
}
