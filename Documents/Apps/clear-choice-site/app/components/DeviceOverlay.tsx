"use client"

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Device = 'ATM' | 'kiosk' | 'POS'

const DEVICE_SRC: Record<Device, string> = {
  ATM:   '/images/ATM.png',   // case-sensitive as you requested
  kiosk: '/images/kiosk.png',
  POS:   '/images/POS.png',
}

const FADE = 0.6

export default function DeviceOverlay({
  current,
  rotate = false,
  intervalMs = 6000,
}: {
  current?: Device
  rotate?: boolean
  intervalMs?: number
}) {
  const devices: Device[] = ['ATM', 'kiosk', 'POS']
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!rotate) return
    const id = setInterval(() => setIdx((i) => (i + 1) % devices.length), intervalMs)
    return () => clearInterval(id)
  }, [rotate, intervalMs])

  const active: Device = current ?? devices[idx]
  const src = DEVICE_SRC[active]

  const sizeClass =
    active === 'ATM'   ? 'device--atm' :
    active === 'kiosk' ? 'device--kiosk' :
    'device--pos'

  // Calculate styles for each device - these are applied to the inner motion.div
  // so they stay with the fading image and don't cause jumps
  const getDeviceStyles = (deviceType: Device) => {
    if (deviceType === 'ATM' || deviceType === 'kiosk') {
      return {
        scale: 0.78,
        translateX: '-1rem',
        right: '7rem',  // md:right-28
        bottom: '3.5rem', // md:bottom-14
      }
    } else {
      // POS
      return {
        scale: 1.28,
        translateX: '-0.5rem',
        right: '6rem',  // md:right-24
        bottom: '-0.75rem', // md:-bottom-3
      }
    }
  }

  const currentStyles = getDeviceStyles(active)

  return (
    <div className={`hidden sm:block device-wrap ${sizeClass} max-h-[54vh]`} style={{ position: 'absolute', right: 0, bottom: 0 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE }}
          style={{
            transform: `scale(${currentStyles.scale}) translateX(${currentStyles.translateX})`,
            transformOrigin: 'bottom right',
            position: 'absolute',
            right: currentStyles.right,
            bottom: currentStyles.bottom,
          }}
        >
          <Image
            src={src}
            alt=""
            width={640}
            height={1000}
            className="block w-full h-auto drop-shadow-xl"
            sizes="(min-width:1280px) 430px,
                   (min-width:1024px) 340px,
                   (min-width:768px)  300px,
                   (min-width:640px)  260px,
                                      240px"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
