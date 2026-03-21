// /trial — Dedicated free trial landing page
// Design: Distraction-free, no nav, no footer links, single CTA
// Purpose: High-conversion destination for paid ads, email campaigns, and direct links
// No navigation bar — only a minimal logo + exit link
// Brand: Space Grotesk headings, DM Sans body, #E98C28 orange, #318599 teal, #0f2236 dark navy

import { useEffect, useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import FoundingMemberCounter from '@/components/FoundingMemberCounter';

const GHL_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';

const included = [
  {
    icon: '🎯',
    title: 'Thursday Lab Sessions — Members Only',
    desc: 'Every Thursday 12–1pm Pacific. Pip & Phelan work through YOUR real campaigns, ad accounts, and websites live — hands-on, not just Q&A.',
  },
  {
    icon: '📚',
    title: 'Full Course Library',
    desc: 'Complete Google Ads, AI + SEO, GA4, and Search Console courses. Structured learning paths from beginner to advanced.',
  },
  {
    icon: '🤖',
    title: 'AI Marketing & Automation',
    desc: 'ChatGPT for brands, AI agents, Google Ads scripts, and automation workflows — practical tools you can use this week.',
  },
  {
    icon: '📋',
    title: 'Fillable Worksheets & Templates',
    desc: 'Campaign audit templates, keyword research worksheets, and SEO checklists you can use immediately on your own accounts.',
  },
  {
    icon: '💬',
    title: 'Private Community Group',
    desc: 'Ask questions, share wins, get feedback from Pip, Phelan, and fellow members. Active, supportive, no spam.',
  },
  {
    icon: '📹',
    title: 'Monthly Deep-Dive Training',
    desc: 'One focused training session per month on a specific topic — Google Ads scripts, GA4 advanced, AI agents, and more.',
  },
];

const testimonials = [
  {
    quote: 'Google Ads are a must if we want to be found and seen online. So glad I met Pip Seymour to help navigate this challenging space. She knows her stuff!',
    name: 'Sally',
    role: 'Agency Owner',
    initial: 'S',
    color: '#E98C28',
  },
  {
    quote: 'I felt totally ignorant before the course. After completing it I feel like I am an expert. I would rate the course as excellent!',
    name: 'Bob',
    role: 'Photographer',
    initial: 'B',
    color: '#318599',
  },
  {
    quote: 'The course was everything I needed! I was having issues with Search Console and Analytics. The course has helped me so much.',
    name: 'Dave',
    role: 'Business Owner',
    initial: 'D',
    color: '#4F37D8',
  },
];

const faqs = [
  {
    q: 'What happens during the 7-day trial?',
    a: 'You get full access to everything — the course library, the private community, worksheets, and if a Thursday session falls within your trial, you can attend live. There are no restrictions during the trial.',
  },
  {
    q: 'Do I need a credit card to start?',
    a: 'Yes — the checkout requires a card to set up the subscription, but you will not be charged until after day 7. Cancel before then and you pay nothing.',
  },
  {
    q: 'How do I cancel if I decide it\'s not for me?',
    a: 'Log into your GoHighLevel account and cancel in under 60 seconds. No forms, no questions, no penalty. Your access continues until the end of your trial period.',
  },
  {
    q: 'What is the price after the trial?',
    a: '$29/month — that\'s the founding member rate. It will increase as the community grows. Members who join now lock in $29 forever.',
  },
  {
    q: 'Who are Pip and Phelan?',
    a: 'Pip Seymour and Phelan Lewis are the founders of KnowHow Marketing Lab. Together they have 20+ years of agency experience running Google Ads and SEO campaigns for businesses across Canada and beyond.',
  },
];

export default function Trial() {
  useSEO({
    title: "Start Your Free 7-Day Trial — The KnowHow Lab",
    description: "Try The KnowHow Lab free for 7 days. Thursday live sessions, full Google Ads & SEO courses, AI training, and a private community. Then $29/mo. Cancel anytime.",
    canonical: "https://knowhowmarketinglab.com/trial",
    ogType: "website",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* ── Minimal Header (no nav, just logo + exit) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-transparent'}`}
        role="banner"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group" aria-label="KnowHow Marketing Lab home">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
              style={{ background: '#E98C28', fontFamily: 'Space Grotesk, sans-serif' }}
              aria-hidden="true"
            >
              K
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-extrabold text-gray-900 group-hover:text-[#E98C28] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KnowHow</span>
              <span className="block text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>Marketing Lab</span>
            </div>
          </a>

          {/* Exit link */}
          <a
            href="/community"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Learn more first →
          </a>
        </div>
      </header>

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="pt-28 pb-16 bg-[#0f2236] relative overflow-hidden" aria-labelledby="trial-heading">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E98C28]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#318599]/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E98C28]/15 border border-[#E98C28]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E98C28] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E98C28]" />
              </span>
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                7-Day Free Trial
              </span>
            </div>

            <h1
              id="trial-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Try The Lab free.<br />
              <span className="text-[#E98C28]">No risk. No commitment.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get 7 days of full access to Thursday live sessions, the complete course library, AI training, and a private community. If it's not for you, cancel before day 7 and pay nothing.
            </p>

            {/* Primary CTA */}
            <a
              href={GHL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-extrabold rounded-2xl py-4 px-10 text-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #E98C28 0%, #D47D1E 100%)',
                fontFamily: 'Space Grotesk, sans-serif',
                boxShadow: '0 8px 32px rgba(233,140,40,0.4)',
              }}
              aria-label="Start your free 7-day trial of The KnowHow Lab"
            >
              Start My Free 7-Day Trial
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <p className="text-xs text-gray-400 mt-4">
              7 days free · Then $29/mo · Cancel anytime in 60 seconds
            </p>

            <div className="mt-4 flex justify-center">
              <FoundingMemberCounter variant="inline" className="text-gray-400" />
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="bg-[#E98C28] py-3.5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-white text-xs font-bold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span>✓ No charge for 7 days</span>
              <span>✓ Full access from day one</span>
              <span>✓ Cancel in 60 seconds</span>
              <span>✓ 20+ year agency veterans</span>
            </div>
          </div>
        </div>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="py-16 bg-white" aria-labelledby="included-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Everything Included</span>
              <h2
                id="included-heading"
                className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                What you get on day one
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Full access. No drip-feeding. No locked modules. Everything from the moment you sign up.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map(item => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#318599]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm leading-snug" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section className="py-14 bg-gray-50" aria-labelledby="testimonials-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What Members Say</span>
              <h2
                id="testimonials-heading"
                className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Real results from real members
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map(t => (
                <blockquote
                  key={t.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-1 mb-3" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-[#E98C28]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <footer className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: t.color, fontFamily: 'Space Grotesk, sans-serif' }}
                      aria-hidden="true"
                    >
                      {t.initial}
                    </div>
                    <div>
                      <cite className="not-italic text-sm font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t.name}</cite>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEET THE INSTRUCTORS ── */}
        <section className="py-14 bg-white" aria-labelledby="instructors-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Your Instructors</span>
            <h2
              id="instructors-heading"
              className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              20+ years of agency experience, teaching live
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Pip Seymour and Phelan Lewis have spent two decades running Google Ads and SEO campaigns for businesses across Canada. The Lab is how they teach what they actually do — not theory, not slides, but live work on real accounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#E98C28] flex items-center justify-center text-white font-extrabold text-lg mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }} aria-hidden="true">P</div>
                <h3 className="font-extrabold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Pip Seymour</h3>
                <p className="text-xs text-[#E98C28] font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Google Ads & SEO Specialist</p>
                <p className="text-sm text-gray-500">20+ years managing Google Ads campaigns. Founder of Seymour Digital Media. Teaches Thursday Lab sessions and the complete Google Ads curriculum.</p>
              </div>
              <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#318599] flex items-center justify-center text-white font-extrabold text-lg mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }} aria-hidden="true">P</div>
                <h3 className="font-extrabold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Phelan Lewis</h3>
                <p className="text-xs text-[#318599] font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI & Automation Specialist</p>
                <p className="text-sm text-gray-500">Expert in AI marketing tools, Google Ads scripts, and automation workflows. Teaches the AI Marketing & Automation curriculum and co-hosts Thursday sessions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 bg-gray-50" aria-labelledby="trial-faq-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2
                id="trial-faq-heading"
                className="text-2xl md:text-3xl font-extrabold text-gray-900"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Questions about the trial
              </h2>
            </div>
            <div className="space-y-3" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                  role="listitem"
                >
                  <button
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`trial-faq-answer-${i}`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                    <svg
                      className={`w-4 h-4 text-[#E98C28] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div
                      id={`trial-faq-answer-${i}`}
                      className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-[#0f2236] relative overflow-hidden" aria-labelledby="trial-final-cta-heading">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E98C28]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#318599]/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative">
            <h2
              id="trial-final-cta-heading"
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Ready to try it free?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              7 days. Full access. No charge until day 8. Cancel anytime in 60 seconds.
            </p>

            <a
              href={GHL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-extrabold rounded-2xl py-4 px-10 text-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl shadow-lg mb-4"
              style={{
                background: 'linear-gradient(135deg, #E98C28 0%, #D47D1E 100%)',
                fontFamily: 'Space Grotesk, sans-serif',
                boxShadow: '0 8px 32px rgba(233,140,40,0.4)',
              }}
              aria-label="Start your free 7-day trial of The KnowHow Lab"
            >
              Start My Free 7-Day Trial
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <p className="text-xs text-gray-400 mb-4">
              7 days free · Then $29/mo · Cancel anytime in 60 seconds
            </p>

            <div className="flex justify-center mb-6">
              <FoundingMemberCounter variant="inline" className="text-gray-400" />
            </div>

            {/* Risk reversal */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#318599]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Secure checkout
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#318599]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                No contracts
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#318599]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Cancel in 60 seconds
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#318599]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Powered by GoHighLevel
              </span>
            </div>
          </div>
        </section>

        {/* ── Minimal footer ── */}
        <footer className="py-6 bg-[#0a1929] text-center" role="contentinfo">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} KnowHow Marketing Lab ·{' '}
            <a href="/" className="hover:text-gray-400 transition-colors">Home</a>
            {' · '}
            <a href="/community" className="hover:text-gray-400 transition-colors">Community</a>
            {' · '}
            <a href="/pricing" className="hover:text-gray-400 transition-colors">Pricing</a>
          </p>
        </footer>

      </main>
    </div>
  );
}
