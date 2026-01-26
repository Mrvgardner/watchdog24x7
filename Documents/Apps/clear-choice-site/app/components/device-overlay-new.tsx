"use client"

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

type Device = 'atm' | 'kiosk' | 'pos'

// 👉 point to /public/images/*.png
const SRC: Record<Device, string> = {
  atm:   '/images/atm.png',
  kiosk: '/images/kiosk.png',
  pos:   '/images/pos.png',
}

export default function DeviceOverlay({
  current,
  rotate = false,
  intervalMs = 6000,
}: {
  current?: Device
  rotate?: boolean
  intervalMs?: number
}) {
  const devices: Device[] = ['atm', 'kiosk', 'pos']
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!rotate) return
    const id = setInterval(() => setIdx((i) => (i + 1) % devices.length), intervalMs)
    return () => clearInterval(id)
  }, [rotate, intervalMs])

  const active: Device = current ?? devices[idx]
  const src = SRC[active]

  return (
    <div
      className="
        absolute z-20
        right-4 md:right-8 xl:right-12
        bottom-[-56px] md:bottom-[-64px]
        w-[240px] sm:w-[280px] md:w-[320px] lg:w-[340px] xl:w-[360px] 2xl:w-[360px]
        pointer-events-none select-none
      "
      data-hero-device-frame
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Image
            src={src}
            alt=""
            width={360}
            height={640}
            className="block w-full h-auto drop-shadow-xl"
            priority
            sizes="(min-width:1536px) 360px,
                   (min-width:1280px) 360px,
                   (min-width:1024px) 340px,
                   (min-width:768px)  320px,
                   (min-width:640px)  280px,
                                        240px"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
