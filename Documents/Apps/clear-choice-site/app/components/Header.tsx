// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import { Menu, X } from 'react-feather'

const NAV = [
  { label: 'Home', href: '/' },            // ← restored
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/resources/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo + brand (clickable home) */}
        <Link
          href="/"
          className="flex items-center gap-6 pr-8" // increased gap + right padding for breathing room
          aria-label="Clear Choice Home"
        >
          <Image
            src="/clearchoice-logo.svg"
            alt="Clear Choice Payment Solutions"
            width={140}
            height={36}
            priority
          />
          <span className="sr-only">Clear Choice</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm"> {/* increased gap */}
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href="/book-demo" variant="primary" ariaLabel="Book a Free Demo Now">
            Book a Free Demo Now
          </Button>
        </div>

        {/* Mobile hamburger menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#ff4f00] transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`md:hidden fixed left-0 right-0 top-[80px] bg-white z-50 overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-lg text-gray-700 hover:text-[#ff4f00] border-b border-gray-100 transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6">
            <Button href="/book-demo" variant="primary" ariaLabel="Book a Free Demo Now" fullWidth>
              Book a Free Demo Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
