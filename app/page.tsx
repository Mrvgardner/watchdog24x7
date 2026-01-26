'use client';

import Link from 'next/link';
import Image from 'next/image';
import ATMFraudChart from './components/ATMFraudChart';
import { ArrowRight, Shield, Eye, AlertCircle, CheckCircle, TrendingDown, Lock } from 'react-feather';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/Watchdog-Shield.png"
              alt="Watchdog Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-navy">Watchdog</span>
              <span className="text-xs text-gray-600">by Clear Choice Payment Solutions</span>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy to-blue-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/watchdog_hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
          <div className="mb-8">
            <img
              src="/images/Watchdog-Shield.png"
              alt="Watchdog Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Proactive ATM Monitoring That Never Sleeps
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl">
            24/7 intelligent monitoring, real-time alerts, and comprehensive security for your ATM network
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 text-lg transition-colors">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">WATCHDOG COMPETITIVE ADVANTAGES</h2>
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
                icon: AlertCircle,
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
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
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
              <h2 className="text-4xl font-bold mb-8">THE ATM FRAUD LANDSCAPE</h2>
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
            <div className="flex justify-center">
              <ATMFraudChart />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">WHY CHOOSE WATCHDOG?</h2>
          
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
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-navy">{benefit.title}</h3>
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
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Schedule Demo
            </button>
            <Link
              href="https://clearchoicepay.com"
              className="bg-white text-navy hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">GET IN TOUCH</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <iframe
              src="https://fillout.com/embed/a9PMrjCG6eus"
              className="w-full h-[600px] border-0 rounded"
              title="Watchdog Contact Form"
              style={{ overflow: 'visible' }}
            />
          </div>
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
