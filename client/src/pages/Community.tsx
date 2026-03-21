// KnowHow Marketing Lab – Community Page (/community)
// Design: Space Grotesk headings, DM Sans body, orange (#E98C28) + teal (#318599) brand palette
// Purpose: Dedicated page explaining The Lab community, what's inside, and driving direct sign-ups to GoHighLevel
// CTAs: All link directly to https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import FoundingMemberCounter from '@/components/FoundingMemberCounter';

const GHL_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';

const perks = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: 'Thursday Lab Sessions – Members Only',
    desc: 'Every Thursday 12–1pm Pacific, Lab members bring their real campaigns, ad accounts, website audits, and SEO issues. Pip and Phelan work through them live — hands-on help, not just Q&A. Every session is recorded.',
    highlight: 'Thursdays 12–1pm PT — Members Only',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Monthly Deep-Dive Training',
    desc: 'A full-length training session every month on a specific topic — Google Ads strategy, SEO audits, GA4 reporting, AI tools, and more. Recorded for on-demand replay anytime.',
    highlight: 'New topic every month',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Fillable Worksheets & Homework',
    desc: 'Every session comes with fillable PDF worksheets and step-by-step homework so you actually implement what you learn — not just watch and forget.',
    highlight: 'Action-first learning',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI & Automation Training',
    desc: 'ChatGPT for brands, AI agents, Google Ads scripts, and automation workflows — practical tools you can use in your business right away. No fluff, no hype.',
    highlight: 'ChatGPT · AI Agents · Scripts',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Private Community Group',
    desc: 'Ask questions, share wins, and get direct feedback from Pip, Phelan, and fellow marketers in the private GoHighLevel community. Real answers from real practitioners.',
    highlight: 'Pip & Phelan respond directly',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Full On-Demand Course Library',
    desc: 'Every recorded session, advanced module, and exclusive training — available on-demand anytime. Google Ads Mastery, AI Marketing, and more. Never miss a lesson.',
    highlight: 'Google Ads · SEO · AI courses',
  },
];

const curriculum = [
  {
    phase: 'Foundation',
    color: '#318599',
    topics: ['Google Search Console setup & interpretation', 'GA4 basics for business owners', 'Google Tag Manager fundamentals', 'Keyword research & keyword clusters', 'Google Business Profile optimisation & local SEO'],
  },
  {
    phase: 'Intermediate',
    color: '#E98C28',
    topics: ['Google Ads campaign types & structure', 'Bidding strategies & smart bidding', 'Ad group setup based on user intent', 'GA4 advanced reporting & custom reports'],
  },
  {
    phase: 'Advanced',
    color: '#4F37D8',
    topics: ['Google Ads Editor for bulk management', 'Google Ads scripts & automation', 'AI agents for marketing workflows', 'Custom ChatGPT for your brand or clients'],
  },
];

const learningHighlights = [
  {
    icon: '📍',
    topic: 'Google Business Profile',
    desc: 'How to fully optimise your GBP listing so your business shows up in local search — categories, attributes, posts, photos, Q&A, and review strategy.',
  },
  {
    icon: '📊',
    topic: 'GA4 & Search Console',
    desc: 'How to actually read your data — which pages are working, where traffic is dropping off, and what to fix first. No guesswork.',
  },
  {
    icon: '🎯',
    topic: 'Google Ads that don\'t waste money',
    desc: 'Campaign structure, bidding, negative keywords, and how to read your reports so you know exactly what\'s working and what to cut.',
  },
  {
    icon: '🤖',
    topic: 'AI tools for real marketing work',
    desc: 'ChatGPT for content, AI agents for workflows, and Google Ads scripts to automate the repetitive stuff — practical, not theoretical.',
  },
];

const schedule = [
  { day: 'Every Thursday', time: '12–1pm Pacific', event: 'Lab Session — hands-on help with real campaigns', type: 'live' },
  { day: 'Monthly', time: 'Announced in advance', event: 'Deep-dive training session', type: 'training' },
  { day: 'Anytime', time: 'On-demand', event: 'Full course library & replays', type: 'ondemand' },
  { day: 'Ongoing', time: 'Community group', event: 'Ask questions, share wins, get feedback', type: 'community' },
];

const faqs = [
  {
    q: 'Is there really a free trial?',
    a: 'Yes — when you sign up, you get 7 days completely free. You can attend a Thursday Lab session, explore the course library, and see if it\'s right for you. If you cancel before day 7, you pay nothing. After the trial, billing starts at $29/month.',
  },
  {
    q: 'Who is The Lab for?',
    a: 'The Lab is built for business owners and marketing teams who want to go beyond the basics. Whether you\'re managing your own Google Ads, training an in-house team, or looking for a more affordable alternative to full-service agency work — this is for you.',
  },
  {
    q: 'What happens if I miss the Thursday live session?',
    a: 'Every session is recorded and uploaded to the course library. You can watch the replay anytime, at your own pace. Nothing is gated behind attendance.',
  },
  {
    q: 'Do I need to be technical to join?',
    a: 'No. The curriculum starts from the foundations — Google Search Console, GA4, and Google Ads basics — and progressively builds to advanced topics like Google Ads scripts and AI agents. Beginners and experienced marketers both get value.',
  },
  {
    q: 'What platform does the community run on?',
    a: 'The Lab runs on GoHighLevel. When you join, you\'ll get access to the private community group, the full course library, and all live session links — all in one place.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. There are no lock-in contracts. Cancel anytime directly from your GoHighLevel account. No questions asked.',
  },
  {
    q: 'Why is the price so low right now?',
    a: 'We\'re in early access. The price is $29/month now and will increase as the community grows and more content is added. Members who join early lock in their rate permanently.',
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
  {
    quote: 'I learned a lot as a business owner. I have a much better understanding of what it takes for SEO and Google.',
    name: 'Lindsay',
    role: 'Agency Owner',
    initial: 'L',
    color: '#E98C28',
  },
];

function JoinButton({ label = 'Start Free Trial – $29/mo →', className = '' }: { label?: string; className?: string }) {
  return (
    <a
      href={GHL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#d4791f] text-white font-bold rounded-xl px-8 py-4 text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 pulse-cta ${className}`}
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      aria-label="Start your 7-day free trial of The KnowHow Lab community"
    >
      {label}
    </a>
  );
}

const communitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://knowhowmarketinglab.com/community",
      "url": "https://knowhowmarketinglab.com/community",
      "name": "The KnowHow Lab – Marketing Community for Business Owners",
      "description": "Join The Lab — weekly live Q&A, Google Ads & SEO training, AI tools, and a private community for $29/month.",
      "isPartOf": { "@id": "https://knowhowmarketinglab.com/#website" }
    },
    {
      "@type": "Service",
      "@id": "https://knowhowmarketinglab.com/community#service",
      "name": "The KnowHow Lab Membership",
      "description": "A paid membership community ($29/month) for business owners and marketing teams. Includes Thursday Lab sessions where members get hands-on help with their real campaigns, monthly deep-dive training, Google Ads and AI + SEO courses, fillable worksheets, and a private community group.",
      "provider": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com"
      },
      "offers": {
        "@type": "Offer",
        "price": "29",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "29",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        },
        "availability": "https://schema.org/InStock"
      },
      "serviceType": "Online Marketing Education and Community",
      "areaServed": "Worldwide"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is The KnowHow Lab?",
          "acceptedAnswer": { "@type": "Answer", "text": "The KnowHow Lab is a paid membership community ($29/month) for business owners and marketing teams who want to go deeper than free content. It includes Thursday Lab sessions (12–1pm PT) where Pip and Phelan work through members' real campaigns live, monthly deep-dive training sessions, Google Ads and AI + SEO courses, fillable worksheets, and a private community group." }
        },
        {
          "@type": "Question",
          "name": "Is there a free trial for The KnowHow Lab?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. The KnowHow Lab includes a 7-day free trial. You can join, attend a Thursday Lab session, explore the course library, and see if it's right for you. If you cancel before day 7, you pay nothing. After the trial, billing starts at $29/month." }
        },
        {
          "@type": "Question",
          "name": "How much does The Lab cost?",
          "acceptedAnswer": { "@type": "Answer", "text": "The Lab is $29 per month after the 7-day free trial. This is an early access price that will increase as the community grows. You can cancel anytime." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between the free Power Hours and The Lab?",
          "acceptedAnswer": { "@type": "Answer", "text": "The free Power Hours are open live sessions every Tuesday on Zoom — anyone can join, no credit card required. The Lab is a paid membership ($29/month) that includes Thursday Q&A sessions where Pip and Phelan work through your real campaigns live, full course access, monthly training, worksheets, and a private community group." }
        }
      ]
    }
  ]
};

export default function Community() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useSEO({
    title: 'The KnowHow Lab – Marketing Community | KnowHow Marketing Lab',
    description: 'Join The Lab — Thursday sessions where Pip & Phelan work through your real campaigns live, plus Google Ads & SEO training, AI tools, and a private community for $29/month.',
    canonical: 'https://knowhowmarketinglab.com/community',
    ogTitle: 'The KnowHow Lab – Join Our Marketing Community',
    ogDescription: 'Thursday Lab sessions — hands-on help with your real campaigns. Plus Google Ads & SEO training, AI tools, and a private community for $29/month.',
    ogType: 'website',
  });

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(communitySchema) }} />
      <Navbar />

      {/* Sticky bottom CTA bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0f2236] border-t border-[#E98C28]/40 shadow-2xl" role="complementary" aria-label="Join The Lab sticky call to action">
          <div className="container py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Try The Lab Free for 7 Days · Then $29/mo · Cancel anytime</p>
              <p className="text-xs text-gray-400 hidden sm:block" style={{ fontFamily: 'DM Sans, sans-serif' }}>Thursday live sessions · Full Google Ads &amp; SEO courses · Private community</p>
            </div>
            <a href={GHL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-2.5 px-6 text-sm transition-all duration-200 whitespace-nowrap flex-shrink-0" style={{ fontFamily: 'Space Grotesk, sans-serif' }} aria-label="Start your 7-day free trial of The KnowHow Lab">
              Start Free Trial →
            </a>
          </div>
        </div>
      )}

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 bg-gray-950 relative overflow-hidden" aria-labelledby="community-hero-heading">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, #E98C28 0%, transparent 60%), radial-gradient(circle at 75% 50%, #318599 0%, transparent 60%)' }} aria-hidden="true" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs font-bold text-[#E98C28] uppercase tracking-widest mb-4 bg-[#E98C28]/10 px-4 py-1.5 rounded-full" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                The KnowHow Lab
              </span>
              {/* Visitor qualifier */}
              <p className="text-sm text-gray-400 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                For business owners and marketing managers who want to control their own digital marketing.
              </p>
              <h1
                id="community-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                The community for marketers who want{' '}
                <span className="text-[#E98C28]">real results</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Weekly live sessions where Pip &amp; Phelan work through your real Google Ads campaigns, SEO, website audits, and AI tools live — hands-on, not just Q&amp;A. 20+ year agency veterans. $29/mo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <JoinButton label="Start 7-Day Free Trial →" />
                <a href="#whats-inside" className="text-gray-300 hover:text-white font-medium underline underline-offset-4 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  See what's inside ↓
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                7-day free trial · Then $29/mo · Cancel anytime · No contracts
              </p>
              <div className="mt-3 flex justify-center">
                <FoundingMemberCounter variant="inline" className="text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF BAR ── */}
        <div className="bg-[#E98C28] py-4">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span>✓ 7-day free trial — no risk</span>
              <span>✓ Thursday Lab sessions — hands-on with your real campaigns</span>
              <span>✓ 20+ year agency veterans</span>
              <span>✓ Cancel anytime · $29/mo after trial</span>
            </div>
          </div>
        </div>

        {/* ── WHAT'S INSIDE ── */}
        <section id="whats-inside" className="py-20 bg-white" aria-labelledby="whats-inside-heading">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Everything Included</span>
              <h2 id="whats-inside-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                What's inside The Lab
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                One membership. Everything you need to get better at Google Ads, SEO, and AI marketing — with real expert support every week.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {perks.map(perk => (
                <div
                  key={perk.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#318599] hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#318599]/10 text-[#318599] flex items-center justify-center mb-4 group-hover:bg-[#318599] group-hover:text-white transition-colors duration-200">
                    {perk.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{perk.title}</h3>
                  <span className="inline-block text-xs font-semibold text-[#E98C28] bg-[#E98C28]/10 px-2 py-0.5 rounded-full mb-3">{perk.highlight}</span>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WEEKLY SCHEDULE ── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100" aria-labelledby="schedule-heading">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Your Weekly Rhythm</span>
                <h2 id="schedule-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  What a month looks like inside The Lab
                </h2>
              </div>
              <div className="space-y-4">
                {schedule.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-sm ${item.type === 'live' ? 'bg-[#E98C28]' : item.type === 'training' ? 'bg-[#318599]' : item.type === 'ondemand' ? 'bg-gray-700' : 'bg-[#4F37D8]'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.event}</p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.day} · {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <JoinButton label="Start Free Trial →" />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT MEMBERS ARE LEARNING ── */}
        <section className="py-16 bg-[#f8f9fb] border-t border-gray-100" aria-labelledby="learning-heading">
          <div className="container">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What Members Are Learning Right Now</span>
              <h2 id="learning-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Real skills. Real tools. Real results.
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                We help business owners and marketing teams understand what's actually working in their marketing — and what to do about it. No jargon. No fluff. Just clear, practical help from people who do this every day.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {learningHighlights.map((item) => (
                <div key={item.topic} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.topic}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Topics rotate monthly based on what members are working on — so the content is always relevant to what's happening right now.
            </p>
            {/* GBP sample video */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="text-center mb-5">
                <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Sample session</span>
                <h3 className="text-xl font-extrabold text-gray-900 mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>See how we cover Google Business Profile</h3>
                <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>This is the kind of practical walkthrough members get every week — real screens, real examples, no fluff.</p>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/i3mOIj1sh9o"
                  title="Going Into A Google Profile | Google Business Profile — KnowHow Marketing Lab"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CURRICULUM PROGRESSION ── */}
        <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="curriculum-heading">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Clear Learning Path</span>
              <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                From foundations to advanced — we cover it all
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                The curriculum is built for both beginners and experienced marketers. Start where you are. Progress at your own pace.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {curriculum.map((phase) => (
                <div key={phase.phase} className="rounded-2xl border-2 p-6" style={{ borderColor: phase.color }}>
                  <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-4" style={{ backgroundColor: phase.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                    {phase.phase}
                  </div>
                  <ul className="space-y-3">
                    {phase.topics.map(topic => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" style={{ color: phase.color }}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── (moved above pricing CTA for social proof before the ask) */}
        <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What Members Say</span>
              <h2 id="testimonials-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Real results from real students
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex gap-0.5 mb-4" role="img" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#E98C28]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-sm text-gray-600 leading-relaxed mb-4 italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ backgroundColor: t.color, fontFamily: 'Space Grotesk, sans-serif' }} aria-hidden="true">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t.name}</p>
                      <p className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING CTA ── */}
        <section className="py-20 bg-gray-950 relative overflow-hidden" aria-labelledby="pricing-cta-heading">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #E98C28 0%, transparent 50%)' }} aria-hidden="true" />
          <div className="container relative">
            <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-center">
              <span className="inline-block text-xs font-bold text-[#E98C28] uppercase tracking-widest bg-[#E98C28]/10 px-3 py-1 rounded-full mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>7-Day Free Trial · Early Access Price</span>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl font-extrabold text-[#318599] line-through opacity-50" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>$0</span>
                <span className="text-gray-400 font-medium text-base line-through opacity-50">first 7 days</span>
                <span className="text-gray-400 mx-2">→</span>
                <span className="text-6xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>$29</span>
                <span className="text-gray-500 font-medium text-lg">/month</span>
              </div>
              <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Try it free for 7 days. Then $29/mo — founding rate, locked in forever. Price increases as community grows.
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Thursday Lab sessions — hands-on help with your real campaigns',
                  'Monthly deep-dive training',
                  'Full on-demand course library',
                  'Google Ads Mastery course',
                  'AI & automation training',
                  'Fillable worksheets & homework',
                  'Private community group',
                  'Cancel anytime',
                ].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    <svg className="w-5 h-5 text-[#318599] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <JoinButton label="Start My Free 7-Day Trial →" className="w-full text-lg py-5" />
              <p className="text-xs text-gray-400 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                7-day free trial · Then $29/mo · Secure checkout · Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* ── WHO THIS IS FOR ── */}
        <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="who-for-heading">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Is The Lab Right For You?</span>
              <h2 id="who-for-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                This is for you if...
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* This IS for you */}
              <div className="rounded-2xl bg-[#f0faf5] border-2 border-[#318599]/30 p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#318599] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>This IS for you</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'You run a business and want to understand your own marketing — not just pay someone and hope for the best',
                    'You\'re managing Google Ads or SEO in-house and want expert guidance on your real campaigns',
                    'You want to stop guessing and start making decisions backed by data',
                    'You\'ve tried watching YouTube tutorials but want structured, accountable learning with real feedback',
                    'You want an affordable alternative to agency fees — or want to hold your agency accountable',
                    'You\'re a marketing manager who wants to stay sharp on Google Ads, GA4, and AI tools',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#318599] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* This is NOT for you */}
              <div className="rounded-2xl bg-[#fdf5f5] border-2 border-red-200/60 p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-400 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>This is NOT for you</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'You\'re looking for someone to just do your marketing for you (that\'s what agencies are for)',
                    'You want a passive income course to watch once and forget — The Lab requires showing up and doing the work',
                    'You\'re after a quick-fix or "hack" — we teach strategy that compounds over time, not shortcuts',
                    'You\'re not willing to implement — the worksheets and homework are there for a reason',
                    'You expect overnight results — real SEO and Google Ads results take 60–90 days of consistent work',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <JoinButton label="Start My Free 7-Day Trial →" />
              <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>7-day free trial · Then $29/mo · No contracts · Cancel anytime</p>
              <div className="mt-4 flex justify-center">
                <FoundingMemberCounter variant="inline" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FREE VS PAID COMPARISON ── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100" aria-labelledby="free-vs-paid-heading">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Two Ways to Learn With Us</span>
              <h2 id="free-vs-paid-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Free group or paid Lab — which is right for you?
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Start free. Upgrade when you're ready. There's no wrong answer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Free column */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Business Marketing Mixer</p>
                    <p className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>Free Facebook group</p>
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free</div>
                <p className="text-xs text-gray-400 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Forever free · No credit card</p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Weekly Power Hours every Tuesday 12–1pm PT',
                    'Live Q&A with Pip — no slides, real answers',
                    'Topics: SEO, Google Ads, AI, Social Media',
                    'Community discussion in the Facebook group',
                    'Weekly session reminders via email',
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      <svg className="w-4 h-4 text-[#1877F2] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                  {[
                    'Advanced courses & course library',
                    'Fillable worksheets & homework',
                    'Thursday Lab sessions — hands-on help (paid only)',
                    'AI & automation training modules',
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      <svg className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.facebook.com/groups/businessmarketingmixer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#1877F2] hover:bg-[#1565d8] text-white font-bold rounded-xl px-6 py-3.5 text-sm transition-all duration-200"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Join the free Business Marketing Mixer Facebook group"
                >
                  Join Free Group →
                </a>
              </div>

              {/* Paid column */}
              <div className="bg-gray-900 rounded-2xl border-2 border-[#E98C28] p-7 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E98C28] text-white text-xs font-bold px-4 py-1 rounded-full" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Most Popular</span>
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#E98C28]/20 flex items-center justify-center" aria-hidden="true">
                    <span className="text-[#E98C28] font-extrabold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>K</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The KnowHow Lab</p>
                    <p className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>Paid community on GoHighLevel</p>
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>$29<span className="text-base font-normal text-gray-400">/mo</span></div>
                <p className="text-xs text-gray-400 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Early access · Cancel anytime</p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Everything in the free group, plus:',
                    'Thursday Lab sessions 12–1pm PT — hands-on with Pip & Phelan',
                    'Monthly deep-dive training sessions',
                    'Full on-demand course library',
                    'Google Ads Mastery course',
                    'AI & automation training',
                    'Fillable worksheets & homework',
                    'Private community group (GoHighLevel)',
                  ].map((f, i) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${i === 0 ? 'text-[#E98C28] font-semibold' : 'text-gray-300'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {i > 0 && (
                        <svg className="w-4 h-4 text-[#E98C28] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#E98C28] hover:bg-[#d4791f] text-white font-bold rounded-xl px-6 py-3.5 text-sm transition-all duration-200 shadow-md"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Start your 7-day free trial of The KnowHow Lab"
                >
                  Start Free Trial – $29/mo →
                </a>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/power-hours" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Learn more about the free Tuesday Power Hours →
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100" aria-labelledby="faq-heading">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FAQ</span>
                <h2 id="faq-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Common questions
                </h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <button
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:text-[#318599] transition-colors"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-answer-${i}`}
                    >
                      {faq.q}
                      <svg
                        className={`w-5 h-5 flex-shrink-0 text-[#318599] transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div id={`faq-answer-${i}`} className="px-6 pb-5 text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-[#E98C28]" aria-labelledby="final-cta-heading">
          <div className="container text-center">
            <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Try The Lab free for 7 days. No risk.
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Start your free trial today. Weekly live sessions, advanced training, AI tools, and a community that actually helps. If it's not for you, cancel before day 7 and pay nothing.
            </p>
            <a
              href={GHL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#E98C28] font-bold rounded-xl px-10 py-5 text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Start your 7-day free trial of The KnowHow Lab"
            >
              Start My Free 7-Day Trial →
            </a>
            <p className="text-white/70 text-xs mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              7-day free trial · Then $29/mo · Secure checkout · Cancel anytime
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
