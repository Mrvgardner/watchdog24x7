'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ATMFraudChart from './components/ATMFraudChart';
import ContactFormEmbed from './components/ContactFormEmbed';
import { ArrowRight, Shield, Eye, AlertCircle, CheckCircle, TrendingDown, Lock, Search } from 'react-feather';

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);
  const [isOfferValid, setIsOfferValid] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if offer is still valid (expires March 16, 2026 at midnight)
    const expirationDate = new Date('2026-03-16T00:00:00');
    const now = new Date();
    setIsOfferValid(now < expirationDate);

    if (!isOfferValid) return;

    // Intersection Observer to trigger animation when visible
    let timer: NodeJS.Timeout | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setShowBanner(true), 500);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isOfferValid]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="https://www.clearchoicepay.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 no-underline">
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
          <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors inline-block">
            Contact Sales
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy to-blue-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/images/watchdog_hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
          <div className="mb-8">
            <img
              src="/images/Watchdog-Shield.png"
              alt="Watchdog Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            PROACTIVE ATM MONITORING THAT NEVER SLEEPS
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl">
            24/7 intelligent monitoring, real-time alerts, and comprehensive security for your ATM network
          </p>
          <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 text-lg transition-colors">
            Protect My ATMs <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Promotional Banner - Animated */}
      {isOfferValid && (
        <div 
          ref={bannerRef}
          className={`overflow-hidden transition-all duration-700 ease-out ${
            showBanner ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div 
            className={`bg-gradient-to-r from-orange-600 to-orange-500 py-12 shadow-lg transform transition-transform duration-700 ease-out ${
              showBanner ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-5xl font-bold mb-4 text-white tracking-wide">LIMITED TIME OFFER!</h3>
              <p className="text-3xl text-white mb-2">
                Get <span className="text-navy font-extrabold underline decoration-2">20% OFF</span> the cost of Watchdog for life!
              </p>
              <a 
                href="/offer"
                className="inline-block bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-colors text-xl underline decoration-2 my-6"
              >
                Lock In 20% for Life
              </a>
              <p className="text-xl text-white italic">Offer ends 3/15/26.</p>
            </div>
        </div>
      </div>
      )}

      {/* Competitive Advantages Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#002b5e]">WATCHDOG COMPETITIVE ADVANTAGES</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Industry-leading features that set Watchdog 24x7 apart from the competition
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: 'Device Replacement & Streamlined Infrastructure',
                description: 'Directly replaces your existing communication device, eliminating unnecessary hardware and simplifying your setup.'
              },
              {
                icon: Search,
                title: 'Fully Managed Monitoring',
                description: 'We perform all monitoring on your behalf, saving you time otherwise spent pulling reports or analyzing health data. Real-time terminal health visibility, including faults, component status, and device performance.'
              },
              {
                icon: TrendingDown,
                title: 'Proactive Uptime & Revenue Protection',
                description: 'Proactively detect and resolve ATM faults remotely, boosting uptime. Monitor all hardware components, ensuring issues are fixed before they cause outages. More uptime = more transactions = more revenue.'
              },
              {
                icon: Lock,
                title: 'Secure & Compliant Software Management',
                description: 'Secure, remote software updates—no USB sticks or on-site work required. Ensure ATMs stay compliant with new regulations and scheme requirements. Remote configuration changes can be made instantly when needed.'
              },
              {
                icon: Shield,
                title: 'Enhanced Security & Risk Reduction',
                description: 'Hardened, secure environment for all communications and monitoring functions. Reduced risk of man-in-the-middle attacks via secure environment. Built-in protections against unauthorized access or tampering.'
              },
              {
                icon: Eye,
                title: 'Cash Management Intelligence',
                description: 'Real-time cash level visibility on all terminals. Automatic low-cash alerts so you can restock before the ATM goes down, preventing lost revenue.'
              },
              {
                icon: CheckCircle,
                title: 'Journal & Dispute Handling',
                description: 'Automatic journal sequence storage for every ATM. Instant retrieval for disputes or network requests, reducing risk and added network charges.'
              },
              {
                icon: Eye,
                title: 'Centralized Remote Administration',
                description: 'Change passwords remotely if needed. Change configuration on the machine if needed. Reduces service time, truck rolls, and labor cost. Helps operators make smarter decisions with actionable insights.'
              },
              {
                icon: TrendingDown,
                title: 'Better Customer & Terminal Experience',
                description: 'Higher uptime = fewer declined transactions. Optimized cash levels = better customer reliability.'
              },
              {
                icon: CheckCircle,
                title: 'Operational Efficiency & Cost Reduction',
                description: 'Automation reduces manual tasks traditionally handled by operators. Eliminates unnecessary on-site visits. Cuts downtime-related revenue loss.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="text-orange-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2 text-[#002b5e]">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats & Threats Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#002b5e]">THE ATM FRAUD LANDSCAPE</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">$27 Billion</h3>
                  <p className="text-gray-600">Annual ATM fraud losses globally</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">1 in 3</h3>
                  <p className="text-gray-600">ATM machines targeted by criminals annually</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">Minutes Matter</h3>
                  <p className="text-gray-600">Average detection time reduced from hours to seconds with Watchdog</p>
                </div>
                <p className="text-gray-700 leading-relaxed pt-4">
                  The Watchdog program uses advanced machine learning algorithms to identify fraudulent patterns and suspicious activities across your entire ATM network, enabling faster response times and better loss prevention.
                </p>
              </div>
            </div>
            <div className="flex justify-center pl-12 border-l border-gray-300">
              <ATMFraudChart />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#002b5e]">WHY CHOOSE WATCHDOG?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Proven Track Record',
                items: ['98% fraud detection rate', 'Used by 500+ financial institutions', 'Average ROI of 300% in first year']
              },
              {
                title: 'Advanced Technology',
                items: ['AI-powered threat detection', 'Real-time machine learning updates', 'Predictive security analytics']
              },
              {
                title: 'Cost Savings',
                items: ['Reduce fraud losses by up to 95%', 'Lower operational costs', 'Eliminate manual monitoring']
              },
              {
                title: 'Expert Support',
                items: ['24/7 monitoring and alerts', 'Dedicated account management', 'Quick incident response']
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-[#002b5e]">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">WHAT OUR PARTNERS SAY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Watchdog has transformed our ATM security operations. We\'ve seen a 92% reduction in fraudulent transactions since implementation.',
                author: 'Sarah Johnson',
                role: 'VP of Operations, Regional Bank'
              },
              {
                quote: 'The real-time alerts and AI-powered detection have saved us millions in potential losses. Exceptional service.',
                author: 'Michael Chen',
                role: 'Security Director, Financial Group'
              },
              {
                quote: 'Best investment we\'ve made for our ATM network. The ROI was achieved within 6 months of deployment.',
                author: 'Jennifer Martinez',
                role: 'CEO, Payment Solutions Provider'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg">
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-navy to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">READY TO SECURE YOUR ATM NETWORK?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Join hundreds of financial institutions protecting their ATM networks with Watchdog 24x7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
              Schedule Demo
            </a>
            <Link
              href="https://clearchoicepay.com/services/watchdog"
              className="bg-white text-navy hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#002b5e]">GET IN TOUCH</h2>
          <ContactFormEmbed />
        </div>
      </section>

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
                <li><Link href="#features" className="hover:text-orange-600">Features</Link></li>
                <li><Link href="#benefits" className="hover:text-orange-600">Benefits</Link></li>
                <li><Link href="#testimonials" className="hover:text-orange-600">Testimonials</Link></li>
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
