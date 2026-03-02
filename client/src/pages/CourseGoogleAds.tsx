// /courses/google-ads - Google Ads Mastery Course page
// Design: White/light contemporary, Space Grotesk + DM Sans, amber #E98C28, teal #318599
// Schema: Course, FAQPage, BreadcrumbList
// Internal links: → /courses/seo, → /pricing, → /blog, → /resources, → /about
// External links: → support.google.com/google-ads, → skillshop.withgoogle.com (non-competing authority)

import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useState } from 'react';
import { useSEO } from "@/hooks/useSEO";

const COMMUNITY_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home';

const modules = [
  { num: '01', title: 'How Google Ads Works', desc: 'Understand the auction system, Quality Score, and how Google decides which ads to show.' },
  { num: '02', title: 'Campaign Structure That Converts', desc: 'Set up your account, campaigns, ad groups, and keywords the right way from day one.' },
  { num: '03', title: 'Keyword Strategy for Google Ads', desc: 'Find the right keywords, use match types correctly, and build a negative keyword list that saves money.' },
  { num: '04', title: 'Writing Ads That Get Clicks', desc: 'Write responsive search ads and headlines that speak directly to what your customer wants.' },
  { num: '05', title: 'Bidding Strategies Explained', desc: 'Choose the right bidding strategy for your goals - manual CPC, target CPA, target ROAS, and more.' },
  { num: '06', title: 'Conversion Tracking Setup', desc: 'Track every form fill, phone call, and purchase so you know exactly which ads are making money.' },
  { num: '07', title: 'Reading Your Data and Optimising', desc: 'Learn which numbers matter, how to spot wasted spend, and what to change to improve results.' },
  { num: '08', title: 'Advanced Campaigns - Display, YouTube, Performance Max', desc: 'Expand beyond search with display ads, YouTube campaigns, and Performance Max.' },
];

const faqs = [
  { q: 'Is the Google Ads course included in the free plan?', a: 'No - the Google Ads Mastery Course is available exclusively to The Lab members at $29/mo. The free plan includes the full SEO course only.' },
  { q: 'Do I need a Google Ads account to take this course?', a: 'Yes, you will need a Google Ads account. You can create one for free at ads.google.com. We walk you through the setup in Module 2.' },
  { q: 'How much budget do I need to run Google Ads?', a: 'You can start with as little as $10 to $20 per day to test. We teach you how to get the most out of a small budget before scaling up.' },
  { q: 'Is this course for beginners or advanced marketers?', a: 'Both. We start from the very basics in Module 1 and build up to advanced strategies like Performance Max and ROAS bidding by Module 8.' },
  { q: 'Does this course cover Google Analytics 4 integration?', a: 'Yes. Module 6 covers linking Google Ads to GA4 for full conversion tracking. We also have a dedicated GA4 video series in the free video library.' },
  { q: 'Can I ask questions while taking the course?', a: 'Yes - The Lab members get weekly live Q&A every Thursday where you can ask Pip and Phelan anything about your Google Ads campaigns in real time.' },
];

export default function CourseGoogleAds() {
  useSEO({
    title: "Google Ads Course & Bootcamp - Search, Display & Shopping Campaigns | KnowHow Marketing Lab",
    description: "Google Ads course and bootcamp for medium-sized businesses. 8 modules covering Search, Display, Shopping, and Performance Max. Data-driven approach using GA4. Included with The Lab at $29/mo.",
    canonical: "https://knowhowmarketinglab.com/courses/google-ads",
    ogType: "course",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Google Ads Mastery Course for Medium-Sized Businesses",
            "description": "An 8-module Google Ads course for marketing teams and business owners. Learn campaign structure, keyword strategy, bidding, conversion tracking, and advanced campaign types - taught by Pip Seymour and Phelan Lewis.",
            "url": "https://knowhowmarketinglab.com/courses/google-ads",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "KnowHow Marketing Lab",
              "url": "https://knowhowmarketinglab.com",
              "sameAs": ["https://www.youtube.com/@knowhowmarketinglab", "https://seymourdigitalmedia.com"]
            },
            "courseMode": "online",
            "educationalLevel": "Beginner to Advanced",
            "inLanguage": "en",
            "isAccessibleForFree": false,
            "offers": { "@type": "Offer", "price": "29", "priceCurrency": "USD", "billingIncrement": "P1M", "description": "Included with The Lab membership at $29/month" },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "instructor": [
                { "@type": "Person", "name": "Pip Seymour", "jobTitle": "SEO & Digital Marketing Strategist" },
                { "@type": "Person", "name": "Phelan Lewis", "jobTitle": "Google Ads & Analytics Specialist" }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://knowhowmarketinglab.com/courses/google-ads" },
                { "@type": "ListItem", "position": 3, "name": "Google Ads Mastery", "item": "https://knowhowmarketinglab.com/courses/google-ads" }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
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
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="google-ads-course-heading">
          <div className="container max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <li><Link href="/" className="hover:text-[#318599] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/courses/seo" className="hover:text-[#318599] transition-colors">Courses</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-600">Google Ads Mastery</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-bold text-[#E98C28] uppercase tracking-widest mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Google Ads Bootcamp · 8 Modules · The Lab · $29/mo
                </span>
                <h1 id="google-ads-course-heading" className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Google Ads<br />
                  <span className="text-[#E98C28]">Mastery Course</span>
                </h1>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Stop wasting money on Google Ads that don't work. This Google Ads bootcamp takes you from your first campaign to advanced bidding strategies — using the same data-driven approach we use for our agency clients.
                </p>
                <p className="text-base text-gray-500 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Included with the <Link href="/pricing" className="text-[#318599] hover:underline">The Lab membership</Link> at $29/mo. Also includes the AI + SEO course, weekly live Q&amp;A, and monthly training.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary pulse-cta"
                    aria-label="Join The Lab to access the Google Ads Mastery Course for $29 per month"
                  >
                    Join to Access - $29/mo →
                  </a>
                  <Link
                    href="/courses/seo"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-[#318599] hover:text-[#318599] transition-all duration-200"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Start AI + SEO Course
                  </Link>
                </div>
                <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Cancel anytime · Price increases as community grows · Powered by GoHighLevel
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '8', label: 'Course Modules', sub: 'Beginner to advanced' },
                  { value: 'Weekly', label: 'Live Q&A', sub: 'Every Thursday' },
                  { value: 'Monthly', label: 'Deep-Dive Training', sub: 'New topic each month' },
                  { value: '$29', label: 'Per Month', sub: 'Cancel anytime' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                    <div className="text-3xl font-extrabold text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</div>
                    <div className="text-sm font-bold text-gray-800 mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Google Ads Bootcamp section — targets 'google ads bootcamp' keyword */}
        <section className="py-12 bg-[#4F37D8] text-white" aria-label="Google Ads Bootcamp">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-xs font-bold text-[#E98C28] uppercase tracking-widest mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Google Ads Bootcamp</span>
                <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>A Real Google Ads Bootcamp — Not Just a Course</h2>
                <p className="text-white/80 text-base leading-relaxed mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Most Google Ads courses teach you the theory. This bootcamp gives you a step-by-step system — the same one we use at Seymour Digital Media for medium-sized businesses spending real budget.
                </p>
                <p className="text-white/80 text-base leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  In 8 structured modules, you'll go from setting up your first campaign to running advanced Performance Max and ROAS bidding strategies. Every module builds on the last. Weekly live Q&amp;A means you're never stuck.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🚀', title: 'Bootcamp Structure', desc: '8 modules that build on each other — no jumping around, no confusion.' },
                  { icon: '📊', title: 'Data-Driven Decisions', desc: 'Every campaign decision backed by real data from GA4 and Google Ads.' },
                  { icon: '💬', title: 'Weekly Live Q&A', desc: 'Ask Pip and Phelan anything about your campaigns every Thursday.' },
                  { icon: '💰', title: 'Stop Wasting Budget', desc: 'Learn exactly where your money is going and how to fix it fast.' },
                ].map(item => (
                  <div key={item.title} className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</div>
                    <div className="text-xs text-white/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16 bg-white" aria-labelledby="ads-modules-heading">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Course Curriculum</span>
              <h2 id="ads-modules-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                What You Will Learn
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Eight modules that take you from setting up your first campaign to running advanced Google Ads strategies that scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {modules.map((m, i) => (
                <article
                  key={m.num}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#E98C28]/30 hover:shadow-md transition-all duration-200 bg-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-extrabold text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{m.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Join The Lab to access the Google Ads Mastery Course"
              >
                Join the Community - $29/mo →
              </a>
            </div>
          </div>
        </section>

        {/* External authority links */}
        <section className="py-10 bg-gray-50 border-y border-gray-100" aria-label="Official Google Ads resources">
          <div className="container max-w-5xl">
            <p className="text-center text-sm text-gray-500 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              This course references Google's official documentation and tools
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Google Ads Help Centre', href: 'https://support.google.com/google-ads/', desc: 'Official Google Ads documentation' },
                { label: 'Google Ads Skillshop', href: 'https://skillshop.withgoogle.com/', desc: 'Free Google Ads certification' },
                { label: 'Google Ads Keyword Planner', href: 'https://ads.google.com/home/tools/keyword-planner/', desc: 'Official keyword research tool' },
                { label: 'Think With Google', href: 'https://www.thinkwithgoogle.com/', desc: 'Google marketing insights' },
              ].map(r => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-200 hover:border-[#318599] hover:shadow-sm transition-all duration-200 text-sm text-gray-700"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  aria-label={`${r.label} - ${r.desc}`}
                >
                  <svg className="w-4 h-4 text-[#318599]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Calendar */}
        <section className="py-16 bg-white" aria-labelledby="ads-book-call-heading">
          <div className="container max-w-3xl text-center">
            <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free Strategy Call</span>
            <h2 id="ads-book-call-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Want Us to Review Your Google Ads?
            </h2>
            <p className="text-gray-500 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Book a free 30-minute call. We will review your current campaigns, show you where you are wasting money, and tell you what to fix first.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <iframe
                src="https://crm.seymourdigitalmedia.com/widget/booking/vRBWL3TL9wPMAoiDTQuH"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                scrolling="no"
                id="vRBWL3TL9wPMAoiDTQuH_google_ads"
                title="Book a free Google Ads review call with KnowHow Marketing Lab"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50" aria-labelledby="ads-faq-heading">
          <div className="container max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FAQ</span>
              <h2 id="ads-faq-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === i}
                    aria-controls={`ads-faq-answer-${i}`}
                  >
                    <span className="font-bold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{f.q}</span>
                    <svg className={`w-5 h-5 text-[#E98C28] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === i && (
                    <div id={`ads-faq-answer-${i}`} className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100">
              <p className="text-sm font-bold text-gray-700 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Keep Learning</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses/seo" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>AI + SEO Course →</Link>
                <Link href="/pricing" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>Compare Free vs Community →</Link>
                <Link href="/blog" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>Read the Blog →</Link>
                <Link href="/resources" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>Free Resources →</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <script src="https://crm.seymourdigitalmedia.com/js/form_embed.js" type="text/javascript" async />
    </div>
  );
}
