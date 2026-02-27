// KnowHow Marketing Lab — Pricing Page
// /pricing — Free vs VIP Community comparison
// Schema: PriceSpecification, Offer, FAQPage
// Internal links: → /free-course, → /community, → /videos
// External links: → skillshop.withgoogle.com (Google certifications — non-competing authority)

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { useSEO } from "@/hooks/useSEO";

const freeFeatures = [
  { label: 'Complete SEO Course (8 modules)' },
  { label: '60+ free YouTube video lessons' },
  { label: 'Google Search Console training' },
  { label: 'Google Analytics 4 (GA4) training' },
  { label: 'Google Business Profile training' },
  { label: 'Google Tag Manager intro' },
  { label: 'No credit card required' },
  { label: 'Watch at your own pace, forever' },
];

const communityFeatures = [
  { label: 'Complete SEO Course (8 modules)', included: true },
  { label: '60+ free YouTube video lessons', included: true },
  { label: 'Google Search Console training', included: true },
  { label: 'Google Analytics 4 (GA4) training', included: true },
  { label: 'Google Business Profile training', included: true },
  { label: 'Google Tag Manager intro', included: true },
  { label: 'Weekly live Q&A & support (Thursdays)', included: true },
  { label: 'Monthly deep-dive training session', included: true },
  { label: 'Homework & fillable PDF worksheets', included: true },
  { label: 'Google Ads Mastery course', included: true },
  { label: 'AI Marketing & Automation course', included: true },
  { label: 'Private community group access', included: true },
  { label: 'Live Q&A with Pip & Phelan', included: true },
  { label: 'All recorded session replays', included: true },
  { label: 'Early access to new content', included: true },
];

const pricingFaqs = [
  {
    q: 'Is the free course really free — no hidden fees?',
    a: 'Yes, completely free. No credit card, no trial period, no hidden costs. The free SEO course and all 60+ YouTube videos are available with no sign-up required to watch.',
  },
  {
    q: 'What do I get in the VIP Community that I cannot get for free?',
    a: 'The VIP Community adds weekly live Q&A and support every Thursday, a monthly deep-dive training session on a specific topic (like Google Ads strategy, SEO audits, or AI tools), homework assignments with fillable PDF worksheets, the Google Ads Mastery course, the AI Marketing & Automation course, private community group access, and all recorded session replays.',
  },
  {
    q: 'Can I cancel my community membership anytime?',
    a: 'Yes. Cancel anytime with no penalty. Your access continues until the end of your billing period.',
  },
  {
    q: 'Will the price increase?',
    a: 'Yes — the $29/month rate is an early access price. As the community grows, the price will increase. Members who join now lock in their rate.',
  },
  {
    q: 'Is the community hosted on GoHighLevel?',
    a: 'Yes. The KnowHow Marketing Lab VIP Community is hosted on the GoHighLevel platform at learnwith.seymourdigitalmedia.com. GoHighLevel provides a secure, all-in-one community and course platform.',
  },
  {
    q: 'Do I need any prior marketing experience?',
    a: 'No. The free SEO course starts from the very beginning — what Google is, how search works, and why SEO matters. The community covers beginner through advanced topics.',
  },
];

export default function Pricing() {
  useSEO({
    title: "Pricing — Free SEO Course & VIP Community | KnowHow Marketing Lab",
    description: "Start free with our SEO course, or join the KnowHow Marketing Lab community for $29/month. Includes weekly live Q&A every Thursday, monthly deep-dive training, and expert support.",
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
            "name": "KnowHow Marketing Lab Pricing — Free vs VIP Community",
            "description": "Compare KnowHow Marketing Lab's free SEO course with the VIP Community membership ($29/month). See exactly what is included in each plan.",
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
                "name": "Free SEO Course",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free access to the complete data-driven SEO course and 60+ YouTube video lessons.",
                "url": "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login"
              },
              {
                "@type": "Offer",
                "name": "VIP Community Membership",
                "price": "29",
                "priceCurrency": "USD",
                "description": "Monthly membership with weekly live classes, Google Ads course, AI marketing course, private community, and all session replays.",
                "url": "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login"
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
              Simple, Transparent Pricing
            </span>
            <h1
              id="pricing-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Start Free. Go Deeper When You're Ready.
            </h1>
            <p className="text-gray-500 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              No tricks, no tiers, no upsells. One free plan. One paid community. That's it.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-16 bg-white" aria-label="Pricing plans">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Free plan */}
              <article
                className="rounded-2xl border-2 border-gray-200 p-8 flex flex-col"
                aria-label="Free plan"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free Forever</span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="name">
                    Free SEO Course
                  </h2>
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="text-5xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="price">$0</span>
                    <span className="text-gray-400 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>/forever</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
                    No credit card. No sign-up required to watch videos.
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
                  href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 px-6 rounded-xl font-bold text-sm border-2 border-[#318599] text-[#318599] hover:bg-[#318599] hover:text-white transition-all duration-200"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Start the free SEO course — no credit card required"
                  itemProp="url"
                >
                  Start Free Course →
                </a>
              </article>

              {/* VIP Community */}
              <article
                className="rounded-2xl border-2 border-[#E98C28] p-8 flex flex-col relative"
                aria-label="VIP Community plan"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E98C28] text-white text-xs font-bold px-4 py-1.5 rounded-full" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Most Popular
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>VIP Community</span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="name">
                    Know How Marketing Lab Community
                  </h2>
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="text-5xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="price">$29</span>
                    <span className="text-gray-400 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>/month</span>
                    <span className="text-xs bg-amber-50 text-[#E98C28] font-bold px-2 py-0.5 rounded-full border border-amber-200">Early Access</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
                    Price increases as the community grows. Cancel anytime.
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8" aria-label="VIP Community plan features">
                  {communityFeatures.map(f => (
                    <li key={f.label} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#E98C28] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center pulse-cta"
                  aria-label="Join the KnowHow Marketing Lab VIP Community for $29 per month"
                  itemProp="url"
                >
                  Join the Community — $29/mo →
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
                  aria-label="Google Skillshop — free official Google Ads and Analytics certifications"
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
                { label: 'Browse the Free Video Library', href: '/#videos', desc: '60+ free lessons — no sign-up' },
                { label: 'See the Free SEO Course', href: '/#free-course', desc: '8 modules, beginner to advanced' },
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
