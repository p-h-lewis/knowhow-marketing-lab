// KnowHow Marketing Lab - Mastermind Discovery Call Thank You Page
// URL: /mastermind-thank-you
// Purpose: Post-booking confirmation page. Confirms the call, sets expectations, drives next actions.
// Design: Clean white + navy, brand colors #E98C28 / #318599, Space Grotesk + DM Sans

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useSEO } from '@/hooks/useSEO';

const NEXT_STEPS = [
  {
    number: '01',
    color: '#E98C28',
    title: 'Check your email',
    desc: 'A calendar invite and confirmation are on their way. Check your spam folder if you don\'t see it within a few minutes.',
  },
  {
    number: '02',
    color: '#318599',
    title: 'Read the full Mastermind details',
    desc: 'Get familiar with exactly what the 8-week program covers, who it\'s for, and what you\'ll walk away with.',
    cta: { label: 'Read the details →', href: '/mastermind' },
  },
  {
    number: '03',
    color: '#4F37D8',
    title: 'Watch a real session',
    desc: 'See how Pip and Phelan work through real marketing data live. This is exactly the kind of session you\'ll get in the Mastermind.',
    cta: { label: 'Watch on YouTube →', href: 'https://www.youtube.com/@knowhowmarketinglab', external: true },
  },
  {
    number: '04',
    color: '#E98C28',
    title: 'Join the free community',
    desc: 'The Lab is our free community for business owners learning AI-powered marketing. Ask questions, get feedback, and meet the group before the call.',
    cta: { label: 'Join The Lab free →', href: 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce', external: true },
  },
];

const PREPARE_ITEMS = [
  'Your current monthly marketing budget',
  'Your biggest marketing challenge right now',
  'What you\'ve already tried (ads, SEO, content, etc.)',
  'What a "win" would look like for you in 8 weeks',
];

export default function MastermindThankYou() {
  useSEO({
    title: 'You\'re Booked — Mastermind Discovery Call | KnowHow Marketing Lab',
    description: 'Your Mastermind Discovery Call is confirmed. Here\'s what to do next before your call with Pip Seymour and Phelan Lewis.',
    canonical: 'https://knowhowmarketinglab.com/mastermind-thank-you',
    ogType: 'website',
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content">

        {/* ── HERO CONFIRMATION ── */}
        <section className="pt-20 pb-16 bg-[#1a1a2e] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E98C28 0%, transparent 50%), radial-gradient(circle at 80% 30%, #318599 0%, transparent 50%)' }}
          />
          <div className="container max-w-3xl relative text-center">
            {/* Checkmark icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E98C28]/20 border-2 border-[#E98C28]/40 mb-6">
              <svg className="w-10 h-10 text-[#E98C28]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E98C28] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>You're booked</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Your discovery call<br />
              <span style={{ color: '#E98C28' }}>is confirmed.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Pip or Phelan will be in touch shortly to confirm the details. In the meantime, here's how to make the most of your 30 minutes.
            </p>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ── */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: what happens on the call */}
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#318599] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What to expect</span>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  What happens on the call
                </h2>
                <p className="text-gray-600 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  This is a genuine conversation, not a sales pitch. We'll spend 30 minutes understanding where you are with your marketing, what you're trying to achieve, and whether the Mastermind is the right fit.
                </p>
                <ul className="space-y-3">
                  {[
                    'We\'ll review your current marketing situation',
                    'You\'ll tell us your biggest challenge and goal',
                    'We\'ll explain exactly what the 8 weeks looks like',
                    'You decide if it\'s right — no pressure either way',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#318599]/10 text-[#318599] text-xs font-bold flex items-center justify-center">✓</span>
                      <span className="text-gray-700 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: how to prepare */}
              <div className="rounded-2xl border border-[#E98C28]/20 bg-[#E98C28]/5 p-7">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E98C28] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Come prepared</span>
                <h2 className="text-xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Have these ready for the call
                </h2>
                <ul className="space-y-3">
                  {PREPARE_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#E98C28]/20 text-[#E98C28] text-xs font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="text-gray-700 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-gray-500 italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  The more specific you are, the more useful the call will be for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEXT STEPS ── */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#318599] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>While you wait</span>
              <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Make the most of the time before your call</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {NEXT_STEPS.map((step) => (
                <div key={step.number} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-extrabold" style={{ color: step.color, fontFamily: 'Space Grotesk, sans-serif' }}>{step.number}</span>
                    <h3 className="text-base font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>{step.desc}</p>
                  {step.cta && (
                    step.cta.external ? (
                      <a
                        href={step.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold hover:underline"
                        style={{ color: step.color, fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {step.cta.label}
                      </a>
                    ) : (
                      <Link
                        href={step.cta.href}
                        className="text-sm font-bold hover:underline"
                        style={{ color: step.color, fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {step.cta.label}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FREE COURSE CTA ── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container max-w-3xl text-center">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#318599] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free resource</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Start learning before the call
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our free AI + SEO Accelerator course covers the exact framework we use in the Mastermind. It's a great way to get up to speed and hit the ground running from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#318599] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#26707f] transition-colors text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Start the free course →
              </a>
              <Link
                href="/"
                className="inline-block border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:border-[#318599] hover:text-[#318599] transition-colors text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
