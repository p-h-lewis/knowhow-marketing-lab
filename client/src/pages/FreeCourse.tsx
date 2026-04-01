// FreeCourse.tsx - Dedicated landing page for the free AI + SEO course
// Design: Conversion-focused, minimal nav, amber #E98C28 primary, teal #318599 accent
// Schema: Course, FAQPage, BreadcrumbList
// This page is the primary destination for Google Ads and Meta Ads traffic
// Internal links: /pricing, /about, /courses/seo
// External links: GoHighLevel course platform

import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";

const FREE_COURSE_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';

const modules = [
  { num: '01', title: 'SEO Fundamentals', desc: 'How Google finds, reads, and ranks web pages - and how AI is changing the rules.', aiTip: 'Use ChatGPT to map search intent for any topic in seconds.' },
  { num: '02', title: 'Setting Up Your SEO Tools', desc: 'Google Search Console and GA4 - the two free tools every business needs.', aiTip: 'Ask AI to explain your GA4 reports in plain language.' },
  { num: '03', title: 'Keyword Research Basics', desc: 'Find the exact words your customers type into Google using free tools.', aiTip: 'Use AI to generate 50 keyword variations from one seed term.' },
  { num: '04', title: 'On-Page SEO Essentials', desc: 'Title tags, meta descriptions, and internal links that help Google understand your site.', aiTip: 'Use AI to draft title tags and meta descriptions at scale.' },
  { num: '05', title: 'Google Business Profile', desc: 'Optimise your profile so you show up in local search and AI Overviews.', aiTip: 'AI Overviews now pull from your Business Profile - learn how to optimise for both.' },
];

const faqs = [
  { q: 'Is this course really free?', a: 'Yes - completely free. No credit card required. You get all 5 modules and access to the course platform at no cost.' },
  { q: 'How long does it take?', a: 'Each module is 15–25 minutes. You can complete the full course in a weekend, or work through it at your own pace.' },
  { q: 'Who is this course for?', a: 'Marketing teams and business owners at medium-sized businesses who want to get more traffic from Google without guessing or paying for expensive agencies.' },
  { q: 'Do I need any prior SEO knowledge?', a: 'No. The course starts from the basics and builds up. If you know how to use Google, you can do this course.' },
  { q: 'What happens after I complete the course?', a: 'You can join The Lab for $29/month to get access to the full training library, live Q&A sessions every Thursday, and monthly live Google Ads training with full recordings.' },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Free AI + SEO Course for Medium-Sized Businesses",
      "description": "A free 5-module course teaching medium-sized businesses how to use AI and SEO to get found on Google. Covers SEO fundamentals, GA4, keyword research, on-page SEO, and Google Business Profile.",
      "url": "https://knowhowmarketinglab.com/free-course",
      "provider": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com",
        "sameAs": "https://seymourdigitalmedia.com"
      },
      "instructor": [
        { "@type": "Person", "name": "Pip Seymour", "jobTitle": "SEO & Content Strategy Lead" },
        { "@type": "Person", "name": "Phelan Lewis", "jobTitle": "Google Tag Manager & Analytics Lead" }
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "category": "Free"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT2H30M",
        "inLanguage": "en-CA"
      },
      "educationalLevel": "Beginner to Intermediate",
      "teaches": ["SEO", "AI Marketing", "Google Analytics 4", "Google Search Console", "Keyword Research", "On-Page SEO", "Google Business Profile"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "79",
        "bestRating": "5"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
        { "@type": "ListItem", "position": 2, "name": "Free AI + SEO Course", "item": "https://knowhowmarketinglab.com/free-course" }
      ]
    }
  ]
};

export default function FreeCourse() {
  useSEO({
    title: "Free AI + SEO Course for Medium-Sized Businesses",
    description: "Learn how to use AI and SEO to get found on Google - free 5-module course by Pip Seymour and Phelan Lewis of Seymour Digital Media. No credit card required.",
    canonical: "https://knowhowmarketinglab.com/free-course",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Minimal header - no full nav to keep focus on conversion */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="KnowHow Marketing Lab - home">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-base flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #E98C28, #d47d20)', fontFamily: 'Space Grotesk, sans-serif' }}
              aria-hidden="true"
            >
              K
            </div>
            <span className="font-bold text-sm text-gray-900 hidden sm:block" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KnowHow Marketing Lab</span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Log In
            </a>
            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-white px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ background: '#E98C28', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Start Free →
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">

        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-amber-50 to-white" aria-labelledby="free-course-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200 text-amber-800 text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              5.0 stars · 79 Google reviews · Seymour Digital Media
            </div>

            <h1
              id="free-course-heading"
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Learn How to Use{' '}
              <span style={{ color: '#E98C28' }}>AI + SEO</span>{' '}
              to Get Found on Google
            </h1>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              A free 5-module course for medium-sized businesses. No jargon. No guesswork. Just a clear, data-driven method that actually works - taught by agency veterans with 20+ years of experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><span className="text-green-500"></span> 100% free</span>
              <span className="flex items-center gap-1.5"><span className="text-green-500"></span> No credit card</span>
              <span className="flex items-center gap-1.5"><span className="text-green-500"></span> 5 modules · ~2.5 hours</span>
              <span className="flex items-center gap-1.5"><span className="text-green-500"></span> Instant access</span>
            </div>

            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #E98C28, #d47d20)', fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Start the free AI + SEO course - no credit card required"
            >
              Start the Free Course →
            </a>

            <p className="text-xs text-gray-400 mt-3">Instant access · No credit card · Cancel anytime</p>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="py-16 bg-white" aria-labelledby="modules-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
              id="modules-heading"
              className="text-2xl font-extrabold text-gray-900 text-center mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              What You Will Learn
            </h2>
            <p className="text-gray-500 text-center mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Five practical modules - each with video lessons, a worksheet, and an AI tip you can use immediately.
            </p>
            <div className="space-y-4">
              {modules.map((m) => (
                <div
                  key={m.num}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-sm transition-all duration-200 bg-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-extrabold text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-2.5">{m.desc}</p>
                    <div className="flex items-start gap-1.5 bg-amber-50 rounded-lg px-2.5 py-1.5">
                      
                      <p className="text-xs text-amber-800 leading-snug"><strong>AI tip:</strong> {m.aiTip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 bg-gray-50" aria-labelledby="reviews-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2
                id="reviews-heading"
                className="text-2xl font-extrabold text-gray-900 mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                What People Say About Pip and Phelan
              </h2>
              <p className="text-gray-500 text-sm">Reviews of Seymour Digital Media, the agency behind KnowHow Marketing Lab</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="ml-2 text-sm font-bold text-gray-700">5.0 · 79 reviews on Google</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Jaime Hall', text: 'Pip was absolutely amazing - super knowledgeable and always willing to go the extra mile.' },
                { name: 'Chloe Dertinger', text: 'Pip and Phelan are incredibly knowledgeable on all things Google Business and Google Search Console.' },
                { name: 'Robert Trasolini', text: 'We instantly saw an increase in traffic on all our sites. Their attention to detail has been fantastic.' },
                { name: 'Jason McCormick', text: 'Our goals have been met, monthly budgets have been on point and we have seen growth in multiple service areas.' },
              ].map(r => (
                <blockquote key={r.name} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">"{r.text}"</p>
                  <footer className="text-xs font-bold text-gray-500" style={{ fontFamily: 'Space Grotesk, sans-serif' }}> - {r.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section className="py-16 bg-white" aria-labelledby="instructors-lp-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
              id="instructors-lp-heading"
              className="text-2xl font-extrabold text-gray-900 text-center mb-10"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Your Instructors
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  name: 'Pip Seymour',
                  role: 'SEO & Content Strategy Lead',
                  bio: 'Founder of Seymour Digital Media. 20+ years helping medium-sized businesses rank on Google using data-driven SEO and AI.',
                  color: '#E98C28',
                  photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/pip-seymour-raw_1df8431d.png',
                  initials: 'PS',
                },
                {
                  name: 'Phelan Lewis',
                  role: 'Google Tag Manager & Analytics Lead',
                  bio: 'Google Tag Manager and analytics specialist. Helps businesses measure what matters. Leads AI marketing and automation training in The Lab.',
                  color: '#318599',
                  photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/phelan-lewis-raw_b1f64211.png',
                  initials: 'PL',
                },
              ].map(instructor => (
                <div key={instructor.name} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white">
                  {instructor.photo ? (
                    <img
                      src={instructor.photo}
                      alt={`${instructor.name} - ${instructor.role}`}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 shadow-sm"
                      style={{ borderColor: instructor.color }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0"
                      style={{ background: instructor.color, fontFamily: 'Space Grotesk, sans-serif' }}
                      aria-hidden="true"
                    >
                      {instructor.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{instructor.name}</h3>
                    <p className="text-xs font-semibold mb-2" style={{ color: instructor.color, fontFamily: 'DM Sans, sans-serif' }}>{instructor.role}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{instructor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50" aria-labelledby="faq-lp-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2
              id="faq-lp-heading"
              className="text-2xl font-extrabold text-gray-900 text-center mb-10"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <details key={faq.q} className="bg-white rounded-xl border border-gray-100 p-5 group">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {faq.q}
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-3 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-sm text-gray-600 leading-relaxed mt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-900 text-white" aria-labelledby="final-cta-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2
              id="final-cta-heading"
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Ready to get more traffic from Google?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Join thousands of business owners learning the Data-First AI SEO Method. Free forever.
            </p>
            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #E98C28, #d47d20)', color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Start the free AI + SEO course now"
            >
              Start the Free Course →
            </a>
            <p className="text-xs text-gray-500 mt-4">No credit card · Instant access · 5 modules</p>
            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <Link href="/pricing" className="hover:text-gray-300 transition-colors">See The Lab →</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">About Us →</Link>
              <Link href="/" className="hover:text-gray-300 transition-colors">Back to Home →</Link>
            </div>
          </div>
        </section>

      </main>

      {/* Minimal footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} KnowHow Marketing Lab · A Seymour Digital Media brand</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
