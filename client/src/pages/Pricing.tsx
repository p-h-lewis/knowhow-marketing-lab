// KnowHow Marketing Lab - Pricing Page
// /pricing - Free vs The Lab comparison
// Schema: PriceSpecification, Offer, FAQPage
// Internal links: → /free-course, → /community, → /videos
// External links: → skillshop.withgoogle.com (Google certifications - non-competing authority)

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { useSEO } from "@/hooks/useSEO";

const freeFeatures = [
  { label: 'Free Power Hours every Tuesday 12–1pm Pacific' },
  { label: 'Live Q&A with Pip — real questions, real answers' },
  { label: 'Topics: SEO, Google Ads, AI, Social Media' },
  { label: 'Complete SEO Course (5 modules)' },
  { label: '60+ free YouTube video lessons' },
  { label: 'Google Search Console training' },
  { label: 'Google Analytics 4 (GA4) training' },
  { label: 'No credit card · No sign-up required' },
];

const communityFeatures = [
  { label: 'Complete SEO Course (5 modules)', included: true },
  { label: '60+ free YouTube video lessons', included: true },
  { label: 'Google Search Console training', included: true },
  { label: 'Google Analytics 4 (GA4) training', included: true },
  { label: 'Google Business Profile training', included: true },
  { label: 'Google Tag Manager intro', included: true },
  { label: 'Thursday Lab sessions — hands-on help with your real campaigns', included: true },
  { label: 'Monthly deep-dive training session', included: true },
  { label: 'Homework & fillable PDF worksheets', included: true },
  { label: 'Google Ads - live monthly training + recordings', included: true },
  { label: 'AI Marketing & Automation course', included: true },
  { label: 'Private community group access', included: true },
  { label: 'Live Q&A with Pip & Phelan', included: true },
  { label: 'All recorded session replays', included: true },
  { label: 'Early access to new content', included: true },
];

const pricingFaqs = [
  {
    q: 'Is the AI + SEO course really free - no hidden fees?',
    a: 'Yes, completely free. No credit card, no trial period, no hidden costs. The AI + SEO course and all 60+ YouTube videos are available with no sign-up required to watch.',
  },
  {
    q: 'What do I get in The Lab that I cannot get for free?',
    a: 'The Lab adds Thursday Lab sessions (12–1pm PT) where Pip and Phelan work through your real campaigns, ad accounts, and SEO issues live — not just Q&A, actual hands-on help. Plus monthly deep-dive training, homework with fillable PDF worksheets, the AI Marketing & Automation course, private community group access, and all recorded session replays.',
  },
  {
    q: 'Can I cancel my community membership anytime?',
    a: 'Yes. Cancel anytime with no penalty. Your access continues until the end of your billing period.',
  },
  {
    q: 'Will the price increase?',
    a: 'Yes - the $29/month rate is an early access price. As the community grows, the price will increase. Members who join now lock in their rate.',
  },
  {
    q: 'Is the community hosted on GoHighLevel?',
    a: 'Yes. The Lab is hosted on the GoHighLevel platform at learnwith.seymourdigitalmedia.com. GoHighLevel provides a secure, all-in-one community and course platform.',
  },
  {
    q: 'Do I need any prior marketing experience?',
    a: 'No. The AI + SEO course starts from the very beginning - what Google is, how search works, and why SEO matters. The community covers beginner through advanced topics.',
  },
];

export default function Pricing() {
  useSEO({
    title: "Pricing - AI + SEO Course & The Lab | KnowHow Marketing Lab",
    description: "Join The Lab for $29/month — weekly live Q&A, monthly Google Ads training, AI marketing course, and a private community of marketers.",
    canonical: "https://knowhowmarketinglab.com/pricing",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "KnowHow Marketing Lab Pricing - Free vs The Lab",
            "description": "Compare KnowHow Marketing Lab's free AI + SEO course with The Lab membership ($29/month). See exactly what is included in each plan.",
            "url": "https://knowhowmarketinglab.com/pricing",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://knowhowmarketinglab.com/pricing" }
              ]
            },
            "mainEntity": [
              {
                "@type": "Offer",
                "name": "AI + SEO Course",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free access to the complete data-driven SEO course and 60+ YouTube video lessons.",
                "url": "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              },
              {
                "@type": "Offer",
                "name": "The Lab Membership",
                "price": "29",
                "priceCurrency": "USD",
                "description": "Monthly membership with weekly live Q&A, monthly Google Ads live training, AI marketing course, private community, and all session replays.",
                "url": "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": pricingFaqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })
        }}
      />

      <AnnouncementBar />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-12 bg-gray-50" aria-labelledby="pricing-heading">
          <div className="container text-center max-w-2xl">
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Join The Lab — $29/mo
            </span>
            <h1
              id="pricing-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Weekly Live Training. Real Answers. $29/mo.
            </h1>
            <p className="text-gray-500 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  The Lab gives you Thursday sessions where Pip &amp; Phelan work through your real campaigns live, full Google Ads &amp; SEO courses, AI training, and a private community. Early access price — locks in forever when you join.
            </p>
            <div className="mt-6">
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-3.5 px-7 text-base transition-all duration-200 shadow-md pulse-cta"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Join The Lab for $29 per month"
              >
                Join The Lab — $29/mo →
              </a>
              <p className="text-xs text-gray-400 mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>Cancel anytime · No contracts · Early access price</p>
            </div>
          </div>
        </section>

        {/* Value Stack */}
        <section className="py-14 bg-[#0f2236]" aria-labelledby="value-stack-heading">
          <div className="container max-w-3xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What You're Actually Getting</span>
              <h2 id="value-stack-heading" className="text-3xl font-extrabold text-white mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Total Value: <span className="text-[#E98C28]">$1,497+/month</span>
              </h2>
              <p className="text-gray-400 mt-2 text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>Your price: $29/month. Here's what that gets you.</p>
            </div>
            <div className="space-y-3">
              {[
                { item: 'Thursday Lab Sessions (live, hands-on help with your campaigns)', value: '$200/session × 4 = $800/mo', highlight: true },
                { item: 'Monthly Deep-Dive Training (full-length, recorded)', value: '$197/session', highlight: false },
                { item: 'AI + SEO Accelerator Course (5 modules)', value: '$497 one-time', highlight: false },
                { item: 'AI-Powered Google Ads Bootcamp', value: '$397 one-time', highlight: false },
                { item: 'AI Marketing & Automation Course', value: '$297 one-time', highlight: false },
                { item: 'All session replays (on-demand, forever)', value: '$97/mo', highlight: false },
                { item: 'Private community + direct access to Pip & Phelan', value: 'Priceless', highlight: false },
                { item: 'Fillable PDF worksheets & homework for every session', value: '$47/mo', highlight: false },
              ].map(row => (
                <div key={row.item} className={`flex items-center justify-between gap-4 rounded-xl px-5 py-3.5 ${
                  row.highlight ? 'bg-[#E98C28]/15 border border-[#E98C28]/40' : 'bg-white/5 border border-white/10'
                }`}>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#E98C28] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm text-gray-200" style={{ fontFamily: 'DM Sans, sans-serif' }}>{row.item}</span>
                  </div>
                  <span className={`text-xs font-bold whitespace-nowrap ${
                    row.highlight ? 'text-[#E98C28]' : 'text-gray-400'
                  }`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#E98C28] p-6 text-center">
              <p className="text-white font-extrabold text-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>All of this for $29/month.</p>
              <p className="text-white/80 text-sm mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Early access price — locks in forever when you join today.</p>
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-white text-[#E98C28] font-bold rounded-xl py-3 px-7 text-base transition-all duration-200 hover:bg-amber-50 shadow-md"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Join The Lab — $29/mo →
              </a>
            </div>
          </div>
        </section>

        {/* Urgency bar */}
        <section className="py-5 bg-[#1a3a50] border-y border-[#E98C28]/30" aria-label="Urgency notice">
          <div className="container max-w-3xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
              <span className="inline-flex items-center gap-2 bg-[#E98C28]/20 border border-[#E98C28]/40 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E98C28] animate-pulse flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Early Access Pricing</span>
              </span>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                The $29/mo rate is available to founding members only. <strong className="text-white">Price increases as the community grows.</strong> Members who join now lock in their rate forever.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-16 bg-white" aria-label="Pricing plans">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Free plan */}
              <article
                className="rounded-2xl border-2 border-gray-200 p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
                aria-label="Free plan"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free Forever</span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="name">
                    Free — Start Here
                  </h2>
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="text-5xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="price">$0</span>
                    <span className="text-gray-400 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>/forever</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
                    Business Marketing Mixer Facebook group + free courses. No credit card ever.
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8" aria-label="Free plan features">
                  {freeFeatures.map(f => (
                    <li key={f.label} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#318599] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.facebook.com/groups/businessmarketingmixer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 px-6 rounded-xl font-bold text-sm border-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-200"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Join the free Business Marketing Mixer Facebook group"
                  itemProp="url"
                >
                  Join Free — Facebook Group + Courses →
                </a>
              </article>

              {/* The Lab */}
              <article
                className="rounded-2xl bg-gray-950 border-2 border-[#E98C28] p-8 flex flex-col relative shadow-2xl shadow-[#E98C28]/20 scale-[1.02]"
                aria-label="The Lab plan"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E98C28] text-white text-xs font-bold px-4 py-1.5 rounded-full" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    ★ Best Value
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The KnowHow Lab</span>
                  <h2 className="text-2xl font-extrabold text-white mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="name">
                    The Lab
                  </h2>
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="text-5xl font-extrabold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="price">$29</span>
                    <span className="text-gray-400 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>/month</span>
                    <span className="text-xs bg-[#E98C28]/20 text-[#E98C28] font-bold px-2 py-0.5 rounded-full border border-[#E98C28]/40">Early Access</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
                    Price increases as the community grows. Join now and lock in $29/mo forever.
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8" aria-label="The Lab plan features">
                  {communityFeatures.map(f => (
                    <li key={f.label} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#E98C28] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-200" style={{ fontFamily: 'DM Sans, sans-serif' }}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center pulse-cta"
                  aria-label="Join The Lab for $29 per month"
                  itemProp="url"
                >
                  Join the Community - $29/mo →
                </a>
                <p className="text-xs text-gray-400 text-center mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Powered by GoHighLevel · Secure checkout · Cancel anytime
                </p>
              </article>
            </div>

            {/* Trust note */}
            <div className="mt-10 text-center max-w-xl mx-auto">
              <p className="text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Want to earn official Google certifications alongside your training?{' '}
                <a
                  href="https://skillshop.withgoogle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#318599] font-semibold hover:underline"
                  aria-label="Google Skillshop - free official Google Ads and Analytics certifications"
                >
                  Google Skillshop
                </a>{' '}
                offers free Google Ads and Analytics certifications that pair perfectly with our courses.
              </p>
            </div>
          </div>
        </section>

        {/* Internal navigation links */}
        <section className="py-12 bg-gray-50 border-t border-gray-100" aria-label="Explore more">
          <div className="container">
            <h2 className="text-lg font-bold text-gray-900 text-center mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Not sure yet? Explore first.
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Browse the Free Video Library', href: '/#videos', desc: '60+ free lessons - no sign-up' },
                { label: 'See the AI + SEO Course', href: '/#free-course', desc: '5 modules, beginner to advanced' },
                { label: 'Learn About the Community', href: '/#community', desc: 'What you get for $29/mo' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="bg-white rounded-xl border border-gray-100 p-4 hover:border-[#E98C28] hover:shadow-sm transition-all duration-200 group"
                  aria-label={link.label}
                >
                  <p className="font-bold text-sm text-gray-900 group-hover:text-[#E98C28] transition-colors mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {link.label} →
                  </p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>{link.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-[#0f2236]" aria-labelledby="pricing-reviews-heading">
          <div className="container max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Why People Trust Us</span>
              <h2 id="pricing-reviews-heading" className="text-3xl font-extrabold text-white mt-2 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                5.0 Stars &middot; 79 Google Reviews
              </h2>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Reviews of <a href="https://seymourdigitalmedia.com" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Seymour Digital Media</a> &mdash; the agency behind KnowHow Marketing Lab
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: 'Rysa Koch', role: 'Mental Health Group Practice, Chicago', review: '\u201cThey have had a serious impact on our ability to get our therapists all full and further expand our reach within the community.\u201d' },
                { name: 'Robert Trasolini', role: 'Business Owner', review: '\u201cWe instantly saw an increase in traffic on all our sites. Their attention to detail has been fantastic.\u201d' },
                { name: 'Jaime Hall', role: 'Client', review: '\u201cPip was absolutely amazing \u2014 super knowledgeable and always willing to go the extra mile.\u201d' },
                { name: 'Chloe Dertinger', role: 'Client', review: '\u201cPip and Phelan are incredibly knowledgeable on all things Google Business and Google Search Console.\u201d' },
                { name: 'Jason McCormick', role: 'Coastal Power Vacuum', review: '\u201cOur goals have been met, monthly budgets have been on point and we have seen growth in multiple service areas.\u201d' },
              ].map((r, i) => (
                <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-6 flex flex-col gap-3">
                  <div className="flex gap-0.5" aria-label="5 stars">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-[#E98C28]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{r.review}</p>
                  <div>
                    <p className="font-bold text-white text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{r.name}</p>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>{r.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <a href="https://www.google.com/search?q=seymour+digital+media#lrd=0x548f13328d738a05:0xc0375cb879d3f04b,1,,,," target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">See all 79 reviews on Google &rarr;</a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" aria-labelledby="pricing-faq-heading">
          <div className="container max-w-2xl">
            <h2
              id="pricing-faq-heading"
              className="text-2xl font-extrabold text-gray-900 text-center mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Pricing FAQ
            </h2>
            <div className="space-y-4">
              {pricingFaqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 text-sm mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
