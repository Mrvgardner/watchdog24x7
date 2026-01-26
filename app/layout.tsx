import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Watchdog 24/7 | Proactive ATM Monitoring & Security | Clear Choice Payment Solutions",
  description: "Advanced 24/7 ATM monitoring and security solution. Real-time alerts, threat detection, and proactive issue resolution to protect your ATM fleet and maximize uptime.",
  keywords: "ATM monitoring, ATM security, 24/7 ATM surveillance, ATM fraud prevention, ATM uptime monitoring, ATM threat detection, ATM management, Clear Choice Payment Solutions",
  authors: [{ name: "Clear Choice Payment Solutions" }],
  creator: "Clear Choice Payment Solutions",
  publisher: "Clear Choice Payment Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.watchdog24x7.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Watchdog 24/7 | Proactive ATM Monitoring That Never Sleeps",
    description: "Protect your ATM investment with 24/7 monitoring, real-time alerts, and proactive threat detection. Minimize downtime and maximize revenue.",
    url: 'https://www.watchdog24x7.com',
    siteName: 'Watchdog 24/7',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Watchdog 24/7 ATM Monitoring',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Watchdog 24/7 | Proactive ATM Monitoring",
    description: "24/7 ATM monitoring and security. Real-time alerts, threat detection, and proactive issue resolution.",
    images: ['/twitter-image.jpg'],
    creator: '@clearchoicepay',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Clear Choice Payment Solutions",
              "url": "https://www.clearchoicepay.com",
              "logo": "https://www.clearchoicepay.com/logo.png",
              "description": "Payment solutions provider offering ATM monitoring, merchant services, and payment processing.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "Customer Service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/clearchoicepay",
                "https://www.linkedin.com/company/clear-choice-payment-solutions"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "ATM Monitoring and Security",
              "provider": {
                "@type": "Organization",
                "name": "Clear Choice Payment Solutions"
              },
              "name": "Watchdog 24/7",
              "description": "24/7 ATM monitoring and security solution with real-time alerts and threat detection",
              "areaServed": "United States",
              "audience": {
                "@type": "Audience",
                "audienceType": "ATM Operators, Financial Institutions, Retail Businesses"
              }
            })
          }}
        />
      </head>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
