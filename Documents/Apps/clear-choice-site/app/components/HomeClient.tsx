"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import SalesforceLeadForm from '@/components/SalesforceLeadForm';
import ClientOnly from '@/components/ClientOnly';
import RevealGrid, { RevealCard } from '@/components/RevealGrid';
import Icon from '@/components/Icon';
import { Calendar, Compass, Zap, TrendingUp, Shield, Smile } from 'react-feather';
import { trackEvent } from '@/lib/analytics';
import Lottie from 'lottie-react';

// import AngledDivider below if you inject it here; otherwise keep in page layout
// import AngledDivider from '@/components/AngledDivider'

export default function HomeClient() {
  const testimonials = [
    {
      name: 'Alex',
      text:
        "Clear Choice's Affiliate Program gave me everything I needed to break into the ATM space without the sky-high costs. Now I can run a profitable ISO-style business without taking on the traditional ISO headaches. It's hands-down the smartest move I've made.",
      role: 'PayStream',
    },
    {
      name: 'Maya',
      text:
        'Before Watchdog, I was waking up to alerts and scrambling to fix ATM issues before customers noticed. Now I sleep easy. Watchdog catches threats before they happen, and their 24/7 support is rock solid. Zero downtime. Zero drama.',
      role: 'SecureATM Group',
    },
    {
      name: 'Jared',
      text:
        "Managing vault cash was eating up too much of our time and resources. Clear Choice took that burden off our plate entirely. They handle the replenishment, audits, and armored transport, so we don't have to touch the money. It's seamless, secure, and has freed us up to grow our business, not fill our ATM.",
      role: 'Thompson Fuel & Mart',
    },
    {
      name: 'Denise',
      text:
        "As a high-risk business, it's always been tough to find a processor that wouldn't drop us the second things got complicated. Clear Choice not only welcomed us — they set us up with a compliant, long-term solution that just works. We never worry about being shut down or missing a sale.",
      role: 'Smoke Stop Liquors',
    },
    {
      name: 'Tony',
      text:
        'We installed one of Clear Choice\'s kiosks near the checkout and saw a foot traffic bump almost immediately. Customers love having everything — cash, bill pay, even sports betting — all in one spot. It\'s been a serious revenue booster.',
      role: 'RapidFuel Stations',
    },
    {
      name: 'Leila',
      text:
        "With so much international traffic coming through our terminals, Clear Choice's FX-enabled ATMs have been a game-changer. Travelers can easily access local currency, and we're earning more through transaction fees. It keeps our operations modern and our passengers happy.",
      role: 'International Terminal Solutions',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [blueprintAnim, setBlueprintAnim] = useState<any | null>(null);
  const goTo = (i: number) => setCurrent(i);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  // Load Lottie animation from public folder (not bundled) so you can swap file without code change
  useEffect(() => {
    fetch('/animations/building-blocks.json')
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then((data) => setBlueprintAnim(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.warn('Lottie load failed:', err));
  }, []);

  // Hero rotating scenes (airport -> convenience store -> coffee shop)
  const heroScenes = [
    {
      id: 'airport',
      bg: '/images/airport.jpg',
      device: '/images/kiosk.png',
      bgAlt: 'Airport terminal',
      deviceAlt: 'Interactive kiosk'
    },
    {
      id: 'store',
      bg: '/images/store.jpg',
      device: '/images/ATM.png',
      bgAlt: 'Convenience store interior',
      deviceAlt: 'ATM machine'
    },
    {
      id: 'cafe',
      bg: '/images/cafe.jpg',
      device: '/images/pos.png',
      bgAlt: 'Coffee shop interior',
      deviceAlt: 'POS terminal device'
    },
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => {
        const next = (i + 1) % 3;
        console.log('Hero index changing from', i, 'to', next);
        return next;
      });
    }, 8000); // 8 seconds per requirement
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#f5f6f8] text-[#002b5e] antialiased relative">
      {/* Angled Hero with rotating backgrounds (device sits outside clipped container) */}
      <section className="relative overflow-visible text-white">
        <div className="clip-hero-angle relative px-6 pt-32 pb-28 md:pb-44 min-h-[520px]">
          {/* Background slideshow images */}
          {/* Static CSS background fallback fixed to the first scene to avoid pops */}
          <div
            className="absolute inset-0 z-[1] bg-center bg-cover"
            style={{ backgroundImage: 'url(/images/airport.jpg)', filter: 'brightness(0.72)' }}
            aria-hidden
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a38]/70 via-[#001a38]/40 md:via-[#001a38]/55 to-transparent" />
          </div>

          <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
            {heroScenes.map((scene, i) => (
              <div key={scene.id} className="absolute inset-0">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: i === heroIndex ? 1 : 0,
                    scale: i === heroIndex ? 1.03 : 1,
                  }}
                  transition={{
                    opacity: { duration: 1.4, ease: 'easeInOut' },
                    scale: { duration: 10, ease: 'linear' },
                  }}
                  style={{ 
                    willChange: 'opacity, transform', 
                    position: 'absolute', 
                    inset: 0,
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <Image
                    src={scene.bg}
                    alt={scene.bgAlt}
                    fill
                    priority
                    className="object-cover object-center md:object-center brightness-[0.8] md:brightness-[0.72]"
                    style={{ objectPosition: 'center 40%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#001a38]/70 via-[#001a38]/40 md:via-[#001a38]/55 to-transparent" />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start relative px-4 md:px-6 lg:px-8 xl:px-6">
          <div className="relative z-10 md:col-span-3 pl-4 md:pl-8 lg:pl-12 xl:pl-0" suppressHydrationWarning>
            {/* Animated multi-line heading + sequential reveal of content */}
            <ClientOnly
              fallback={
                <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight uppercase font-switch" aria-label="Payments Without Limits">
                  <span className="block">PAYMENTS</span>
                  <span className="block">WITHOUT</span>
                  <span className="block">LIMITS</span>
                </h1>
              }
            >
              <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight uppercase font-switch" aria-label="Payments Without Limits">
                {['PAYMENTS','WITHOUT','LIMITS'].map((line, i, arr) => (
                  <span key={line}>
                    <motion.span
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.18 * i, ease: 'easeOut' }}
                    onAnimationComplete={() => {
                      if (i === arr.length - 1) setShowHeroContent(true);
                    }}
                    >
                      <span className="block">{line}</span>
                    </motion.span>
                  </span>
                ))}
              </h1>
            </ClientOnly>
            {/* Reserve layout space to avoid shift; fade content in when ready */}
            <div
              key="heroContent"
              className="space-y-8 min-h-[180px]"
              style={{ pointerEvents: showHeroContent ? 'auto' : 'none' }}
              aria-hidden={!showHeroContent}
            >
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: showHeroContent ? 1 : 0 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <p className="text-lg text-white/90 m-0 max-w-md">
                Clear Choice gives you the tools, support, and revenue opportunities the other guys don't.
              </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showHeroContent ? 1 : 0 }}
                transition={{ duration: 0.45, delay: showHeroContent ? 0.15 : 0, ease: 'easeOut' }}
              >
                <a
                  href="#contact"
                  className="inline-block bg-white text-[#ff4f00] font-bold py-3 px-6 rounded-lg shadow hover:scale-105 transition uppercase"
                  onClick={() => trackEvent.ctaClick('hero', 'book_demo')}
                >
                  BOOK A FREE DEMO NOW
                </a>
              </motion.div>
            </div>
          </div>

          </div>
          
        </div>

        {/* Kiosk overlay - positioned to extend slightly into white section */}
        <AnimatePresence mode="wait">
          {heroIndex === 0 && (
            <motion.div
              key="kiosk"
              style={{ position: 'absolute', right: '15rem', bottom: '-2rem', width: '220px', zIndex: 30, pointerEvents: 'none' }}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            >
              <div className="hidden sm:block">
                <Image
                  src="/images/kiosk.png"
                  alt="Interactive kiosk"
                  width={640}
                  height={1000}
                  className="block w-full h-auto drop-shadow-xl"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ATM overlay - positioned to extend slightly into white section */}
        <AnimatePresence mode="wait">
          {heroIndex === 1 && (
            <motion.div
              key="atm"
              style={{ position: 'absolute', right: '15rem', bottom: '-2rem', width: '220px', zIndex: 30, pointerEvents: 'none' }}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            >
              <div className="hidden sm:block">
                <Image
                  src="/images/ATM.png"
                  alt="ATM machine"
                  width={640}
                  height={1000}
                  className="block w-full h-auto drop-shadow-xl"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* POS overlay - different position and size */}
        {/* Medium size for lg/xl screens (iPad), moved further right */}
        <div className="absolute hidden lg:block 2xl:hidden" style={{ right: '5rem', top: '8rem', width: '550px', zIndex: 30, pointerEvents: 'none' }}>
          <AnimatePresence mode="popLayout">
            {heroIndex === 2 && (
              <motion.div
                key="pos"
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/POS.png"
                  alt="POS terminal"
                  width={640}
                  height={1000}
                  className="block w-full h-auto drop-shadow-xl"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* POS overlay - full size for 2xl screens (desktop) */}
        <div className="absolute hidden 2xl:block" style={{ right: '15rem', top: '8rem', width: '700px', zIndex: 30, pointerEvents: 'none' }}>
          <AnimatePresence mode="popLayout">
            {heroIndex === 2 && (
              <motion.div
                key="pos-large"
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/POS.png"
                  alt="POS terminal"
                  width={640}
                  height={1000}
                  className="block w-full h-auto drop-shadow-xl"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20 text-center">
        <div className="pl-4 md:pl-8 lg:pl-12 xl:pl-0">
          <h2 className="text-3xl font-bold mb-4 uppercase font-switch">THE PAYMENT INDUSTRY IS RIGGED AGAINST YOU</h2>
          <p className="max-w-3xl mx-auto text-lg text-black/70">
            Hidden fees, dropped accounts, and unreliable support keep small businesses stuck. You shouldn't have to
            worry about whether your processor is working against you.
          </p>
        </div>
      </section>

      {/* Guide */}
      <section className="bg-[#002b5e] text-white px-6 py-20 text-center">
        <div className="pl-4 md:pl-8 lg:pl-12 xl:pl-0">
          <h2 className="text-3xl font-bold mb-4 uppercase font-switch">WE'RE CLEAR CHOICE — AND WE'VE GOT YOUR BACK</h2>
          <p className="max-w-3xl mx-auto text-lg text-white/90">
            With decades of experience and thousands of successful placements, we help businesses take control of their
            processing and grow with confidence.
          </p>
        </div>
      </section>

      {/* 3‑Step Plan */}
      <section id="plans" className="px-6 py-20 text-center bg-white">
        <div className="pl-4 md:pl-8 lg:pl-12 xl:pl-0">
          <h2 className="text-2xl font-bold mb-12 uppercase font-switch">HERE'S HOW TO GET STARTED</h2>
        </div>
        <RevealGrid>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <RevealCard>
              <article className="bg-white p-8 rounded-xl shadow-md border border-black/10 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="mb-5 flex items-center justify-center rounded-full bg-[#002b5e]/5 h-20 w-20">
                  <Icon as={Calendar} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#002b5e] font-heading normal-case">Book a Free Demo</h3>
                <p className="text-black/70 leading-relaxed">Let's talk about your goals and where you're getting stuck.</p>
              </article>
            </RevealCard>

            <RevealCard>
              <article className="bg-white p-8 rounded-xl shadow-md border border-black/10 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="mb-5 flex items-center justify-center rounded-full bg-[#002b5e]/5 h-20 w-20">
                  <Icon as={Compass} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#002b5e] font-heading normal-case">Get Your Custom Strategy</h3>
                <p className="text-black/70 leading-relaxed">We'll recommend the right tools for your business.</p>
              </article>
            </RevealCard>

            <RevealCard>
              <article className="bg-white p-8 rounded-xl shadow-md border border-black/10 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="mb-5 flex items-center justify-center rounded-full bg-[#002b5e]/5 h-20 w-20">
                  <Icon as={Zap} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#002b5e] font-heading normal-case">Start Growing</h3>
                <p className="text-black/70 leading-relaxed">Launch with support and confidence from day one.</p>
              </article>
            </RevealCard>
          </div>
        </RevealGrid>
      </section>

      {/* Custom Strategy (orange) with Lottie */}
      <section className="px-6 py-24 text-white relative overflow-hidden" style={{ backgroundColor: '#ff4f00' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pl-4 md:pl-8 lg:pl-12 xl:pl-0">
          <div className="text-left">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold mb-4 uppercase font-switch">Build your custom payment solution</h2>
            <p className="text-lg text-white/90 mb-6">
              Forget one‑size‑fits‑all “solutions.” We help you snap together the right building blocks—ATM, merchant
              services, kiosks, security, cash management, and more—into a scalable system that practically runs itself.
            </p>
            <ul className="text-left text-base text-white space-y-2 list-disc pl-5 marker:text-white/70">
              <li>Start with the outcome you want</li>
              <li>Add only the blocks you need</li>
              <li>Launch and keep scaling</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block bg-white text-[#ff4f00] font-bold py-3 px-6 rounded-lg shadow hover:bg-white/90 transition uppercase"
              onClick={() => trackEvent.ctaClick('building_blocks', 'custom_strategy')}
            >
              GET YOUR CUSTOM STRATEGY
            </a>
            </motion.div>
          </div>

          <div className="flex justify-center items-center">
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {blueprintAnim ? (
              <div className="w-80 md:w-[26rem] aspect-square">
                <Lottie
                  animationData={blueprintAnim}
                  loop
                  autoplay
                  className="w-full h-full"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            ) : (
              <div className="text-white/70 text-sm animate-pulse">Loading blueprint...</div>
            )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success */}
            {/* Success */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="pl-4 md:pl-8 lg:pl-12 xl:pl-0">
          <h2 className="text-3xl font-bold mb-6 uppercase font-switch">WHAT SUCCESS LOOKS LIKE</h2>
        </div>
        <RevealGrid>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <RevealCard>
              <article className="bg-white p-8 rounded-xl shadow-md border border-black/10 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="mb-5 flex items-center justify-center rounded-full bg-[#002b5e]/5 h-20 w-20">
                  <Icon as={TrendingUp} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#002b5e] font-heading normal-case">More Revenue</h3>
                <p className="text-black/70 leading-relaxed">Unlock new fee lines and higher throughput.</p>
              </article>
            </RevealCard>

            <RevealCard>
              <article className="bg-white p-8 rounded-xl shadow-md border border-black/10 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="mb-5 flex items-center justify-center rounded-full bg-[#002b5e]/5 h-20 w-20">
                  <Icon as={Shield} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#002b5e] font-heading normal-case">Stability & Compliance</h3>
                <p className="text-black/70 leading-relaxed">Fewer surprise drops and better dispute outcomes.</p>
              </article>
            </RevealCard>

            <RevealCard>
              <article className="bg-white p-8 rounded-xl shadow-md border border-black/10 hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="mb-5 flex items-center justify-center rounded-full bg-[#002b5e]/5 h-20 w-20">
                  <Icon as={Smile} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#002b5e] font-heading normal-case">Happier Customers</h3>
                <p className="text-black/70 leading-relaxed">Shorter queues, clear UX, and faster checkouts.</p>
              </article>
            </RevealCard>
          </div>
        </RevealGrid>
      </section>

      {/* Testimonials – animated with dots */}
      <section id="testimonials" className="bg-[#002b5e] text-white px-6 py-24 text-center relative overflow-hidden">
        <div className="pl-4 md:pl-8 lg:pl-12 xl:pl-0">
          <h2 className="text-3xl font-extrabold mb-12 uppercase font-switch">WHAT OUR CUSTOMERS SAY</h2>
        </div>
        <div className="max-w-3xl mx-auto h-48 md:h-40 relative">
          <AnimatePresence mode="wait">
            <div className="absolute w-full">
              <motion.div
              key={testimonials[current].text}
              initial={{ opacity: 0, x: 220 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -220 }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-2xl italic">"{testimonials[current].text}"</blockquote>
              <p className="mt-4 text-sm uppercase font-bold">
                — {testimonials[current].name}, {testimonials[current].role}
              </p>
              </motion.div>
            </div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-3 w-3 rounded-full transition border-2 ${
                i === current ? 'bg-white border-white scale-125' : 'bg-white/40 border-white/40'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#ff4f00] text-white px-6 py-20 text-center">
        <div className="pl-4 md:pl-8 lg:pl-12 xl:pl-0">
          <h2 className="text-3xl font-extrabold mb-4 uppercase font-switch">LET'S TALK ABOUT YOUR BUSINESS GOALS</h2>
          <a
            href="#contact"
            className="inline-block bg-white text-[#ff4f00] font-bold py-3 px-6 rounded-lg shadow hover:scale-105 transition uppercase"
            onClick={() => trackEvent.ctaClick('final_cta', 'book_demo')}
          >
            BOOK A FREE DEMO NOW
          </a>
        </div>
      </section>

      {/* Salesforce Contact Form */}
      <section id="contact" className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto pl-4 md:pl-8 lg:pl-12 xl:pl-0">
          <SalesforceLeadForm title="Contact Us" leadSource="Homepage" interest="General Inquiry" />
        </div>
      </section>
    </main>
  );
}
