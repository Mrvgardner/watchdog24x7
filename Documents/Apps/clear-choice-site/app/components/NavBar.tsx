// components/NavBar.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function NavBar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (href: string, label: string) => {
    const active = pathname === href
    return (
      <Link
        href={href}
        className={`px-2 py-1 transition ${
          active ? 'text-brand' : 'text-gray-700'
        } hover:text-brand`}
      >
        {label}
      </Link>
    )
  }

  return (
    <header className={`sticky top-0 z-50 bg-surface/90 backdrop-blur ${scrolled ? 'border-b border-gray-200 shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Replace with your real logo */}
          <Image src="/clearchoice-logo.svg" alt="Clear Choice Logo" width={160} height={40} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-sm font-semibold">
          {link('/', 'Home')}
          {link('/services', 'Services')}
          {link('/solutions', 'Solutions')}
          {link('/resources', 'Resources')}
          {link('/about', 'About')}
          {link('/contact', 'Contact')}
          <Link
            href="/#contact"
            className="ml-2 inline-block bg-brand text-white px-4 py-2 rounded-lg font-bold hover:bg-brand-dark transition"
          >
            Book Demo
          </Link>
        </nav>

        {/* Mobile placeholder (optional burger) */}
        <div className="md:hidden">
          <Link
            href="/#contact"
            className="inline-block bg-brand text-white px-3 py-2 rounded-lg font-bold"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </header>
  )
}
