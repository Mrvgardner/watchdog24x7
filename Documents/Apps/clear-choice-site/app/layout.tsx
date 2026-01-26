// app/layout.tsx
import './styles/globals.css'
import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const siteName = 'Clear Choice Payment Solutions'
const siteDesc =
  'Payments Without Limits. Merchant services, ATM placement & monitoring, kiosks, and FX-enabled ATMs built to grow your revenue.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDesc,
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDesc,
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDesc,
    images: ['/og.jpg'],
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload brand fonts */}
        <link rel="preload" href="/fonts/SWITCHCOMMERCEREG.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SWITCHCOMMERCEBOLD.otf" as="font" type="font/otf" crossOrigin="anonymous" />

        {/* Google Fonts: Lato */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="ga-init">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: true });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <SeoJsonLd />
        {/* belt-and-suspenders: ensure no lingering dark mode */}
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.classList.remove('dark');localStorage.removeItem('theme')}catch(e){}` }} />
      </body>
    </html>
  )
}