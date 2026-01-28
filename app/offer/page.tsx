'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ContactFormEmbed from '../components/ContactFormEmbed';

// Simple frame-based counter animation for numeric highlights
function animateValue({
  start,
  end,
  duration,
  onUpdate,
  shouldCancel,
}: {
  start: number;
  end: number;
  duration: number;
  onUpdate: (value: number) => void;
  shouldCancel?: () => boolean;
}) {
  return new Promise<void>((resolve) => {
    const startTime = performance.now();

    const step = (now: number) => {
      if (shouldCancel?.()) {
        resolve();
        return;
      }

      const progress = Math.min((now - startTime) / duration, 1);
      const value = start + (end - start) * progress;
      onUpdate(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(step);
  });
}

export default function OfferPage() {
  const [isOfferValid, setIsOfferValid] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [setupFee, setSetupFee] = useState(250);
  const [monitoringHours, setMonitoringHours] = useState(8);
  const [monitoringDays, setMonitoringDays] = useState(0);

  useEffect(() => {
    // Check if offer is still valid (expires March 16, 2026 at midnight)
    const expirationDate = new Date('2026-03-16T00:00:00');
    const now = new Date();
    setIsOfferValid(now < expirationDate);
  }, []);

  useEffect(() => {
    if (!isOfferValid) return;

    let cancelled = false;

    const run = async () => {
      await animateValue({
        start: 0,
        end: 20,
        duration: 900,
        onUpdate: (value) => setDiscountPercent(Math.round(value)),
        shouldCancel: () => cancelled,
      });

      if (cancelled) return;

      await animateValue({
        start: 250,
        end: 0,
        duration: 1200,
        onUpdate: (value) => setSetupFee(Math.max(0, Math.round(value))),
        shouldCancel: () => cancelled,
      });

      if (cancelled) return;

      await Promise.all([
        animateValue({
          start: 8,
          end: 24,
          duration: 900,
          onUpdate: (value) => setMonitoringHours(Math.min(24, Math.round(value))),
          shouldCancel: () => cancelled,
        }),
        animateValue({
          start: 0,
          end: 7,
          duration: 900,
          onUpdate: (value) => setMonitoringDays(Math.min(7, Math.round(value))),
          shouldCancel: () => cancelled,
        }),
      ]);
    };

    run();

    return () => {
      cancelled = true;
      setDiscountPercent(0);
      setSetupFee(250);
      setMonitoringHours(8);
      setMonitoringDays(0);
    };
  }, [isOfferValid]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <img
              src="/images/Watchdog-Shield.png"
              alt="Watchdog Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-navy">WATCHDOG</span>
              <span className="text-xs text-gray-600">by Clear Choice Payment Solutions</span>
            </div>
          </Link>
          <Link href="/" className="text-navy hover:text-orange-600 font-medium">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="/images/Watchdog-Shield.png"
              alt="Watchdog Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            LIMITED TIME OFFER!
          </h1>
          <p className="text-3xl mb-2">
            Get <span className="text-navy font-extrabold underline decoration-2">20% OFF</span> the cost of Watchdog for life!
          </p>
          <p className="text-xl italic mb-6">Offer ends 3/15/26.</p>
          {!isOfferValid && (
            <div className="bg-white text-orange-600 px-8 py-4 rounded-lg inline-block">
              <p className="text-2xl font-bold">This offer has expired</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      {isOfferValid && (
        <section className="py-12 sm:py-16 bg-gradient-to-r from-navy to-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">LOCK IN YOUR SAVINGS TODAY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">{discountPercent}%</div>
                <p className="text-white">Off for Life</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">${setupFee}</div>
                <p className="text-white">Setup Fees</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">{monitoringHours}/{monitoringDays}</div>
                <p className="text-white">Monitoring</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What You Get Section */}
      {isOfferValid && (
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#002b5e]">WHAT YOU GET WITH WATCHDOG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-2">24/7 Proactive Monitoring</h3>
                  <p className="text-gray-600">Round-the-clock surveillance of your ATM fleet with instant alerts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-2">Automated Fault Detection</h3>
                  <p className="text-gray-600">Advanced AI identifies and reports issues before they impact customers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-2">Comprehensive Reporting</h3>
                  <p className="text-gray-600">Detailed analytics and insights to optimize your ATM performance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-2">Expert Support Team</h3>
                  <p className="text-gray-600">Dedicated specialists ready to assist with any ATM concerns</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-2">Reduced Downtime</h3>
                  <p className="text-gray-600">Minimize lost revenue with early problem detection and resolution</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-2">Seamless Integration</h3>
                  <p className="text-gray-600">Easy setup with your existing ATM infrastructure and systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      {isOfferValid && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#002b5e]">CLAIM YOUR 20% DISCOUNT</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Fill out the form below to lock in your lifetime savings
            </p>
            <ContactFormEmbed formId="iKD4jn4jBFus" />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Watchdog 24x7</h4>
              <p className="text-gray-300 text-sm">Proactive ATM monitoring that never sleeps.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/#features" className="hover:text-orange-600">Features</Link></li>
                <li><Link href="/#benefits" className="hover:text-orange-600">Benefits</Link></li>
                <li><Link href="/#testimonials" className="hover:text-orange-600">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="https://clearchoicepay.com" className="hover:text-orange-600">Clear Choice Pay</Link></li>
                <li><Link href="https://clearchoicepay.com/about" className="hover:text-orange-600">About</Link></li>
                <li><Link href="https://clearchoicepay.com/contact" className="hover:text-orange-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#privacy" className="hover:text-orange-600">Privacy Policy</Link></li>
                <li><Link href="#terms" className="hover:text-orange-600">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Watchdog 24x7 by Clear Choice Payment Solutions. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 sm:mt-0">Protecting ATM Networks Worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
