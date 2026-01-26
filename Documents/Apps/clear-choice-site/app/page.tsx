import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Payments Without Limits',
  description:
    'Stable merchant services, ATM placement & monitoring, kiosks, and FX-enabled ATMs built to grow your revenue.',
  alternates: { canonical: '/' },
  openGraph: { images: ['/og.jpg'] },
  twitter:   { images: ['/og.jpg'] },
}

export default function HomePage() {
  return (
    <main>
      <HomeClient />
    </main>
  )
}