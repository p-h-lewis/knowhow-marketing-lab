// /courses/seo - Free Data-Driven SEO Course page
// Design: White/light contemporary, Space Grotesk + DM Sans, amber #E98C28, teal #318599
// Schema: Course, FAQPage, BreadcrumbList, HowTo, VideoObject
// Internal links: → /courses/google-ads, → /pricing, → /blog, → /resources, → /about
// External links: → developers.google.com/search, → support.google.com/analytics (non-competing authority)

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useState } from 'react';
import { useSEO } from "@/hooks/useSEO";

const FREE_COURSE_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';
const COMMUNITY_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home';

const modules = [
  { num: '01', title: 'SEO Fundamentals', desc: 'How Google finds, reads, and ranks web pages. Learn search intent, SERPs, and how to use AI tools to understand what your audience is actually searching for.', aiTip: 'Use ChatGPT to map search intent for any topic in seconds - before you write a single word.' },
  { num: '02', title: 'Setting Up Your SEO Tools', desc: 'Set up Google Search Console and Google Analytics 4 - the two free tools that show you exactly what is happening on your website. Plus AI tools to help you interpret the data faster.', aiTip: 'Ask AI to explain your GA4 and GSC reports in plain language - no data analyst required.' },
  { num: '03', title: 'Keyword Research Basics', desc: 'Find the exact words your customers type into Google using Google Keyword Planner. Learn how to use AI to expand your keyword list and spot content gaps your competitors miss.', aiTip: 'Use AI to generate 50 keyword variations from one seed term - then validate them in Keyword Planner.' },
  { num: '04', title: 'On-Page SEO Essentials', desc: 'Write title tags, meta descriptions, and internal links that help Google understand your site. Use AI to speed up on-page optimisation without losing your brand voice.', aiTip: 'Use AI to draft title tags and meta descriptions at scale - then edit for brand voice in minutes.' },
  { num: '05', title: 'Google Business Profile', desc: 'Optimise your Google Business Profile so you show up in local search results. Learn how AI-powered search is changing local visibility and what to do about it.', aiTip: 'AI Overviews and Google AI now pull from your Business Profile - learn exactly how to optimise for both.' },
];

const faqs = [
  { q: 'Is this a good intro to SEO for beginners?', a: 'Yes - this course is designed as a complete intro to SEO for business owners and marketing teams. You do not need any prior experience. Module 1 starts with the basics and each module builds on the last, so you go from zero to a working SEO strategy by Module 5.' },
  { q: 'Is this AI + SEO course free to access?', a: 'Yes - no credit card required. You get all 5 modules, all the video lessons, and access to the course platform at no cost.' },
  { q: 'Who is this course for?', a: 'This course is built for marketing teams and business owners at medium-sized businesses. If you want to get more traffic from Google without guessing, this is for you.' },
  { q: 'How long does the course take?', a: 'Most people finish the core 5 modules in 2 to 4 weeks, depending on how much time they have. You can go at your own pace - there is no deadline.' },
  { q: 'Do I need any technical skills?', a: 'No. We teach everything from scratch. If you can use Google, you can take this course.' },
  { q: 'What is the difference between the AI + SEO course and The Lab?', a: 'The AI + SEO course gives you the full SEO foundation. The Lab ($29/mo) adds weekly live Q&A every Thursday, a monthly deep-dive training, the AI marketing course, private community access, and all recorded session replays. See the full comparison on our pricing page.' },
  { q: 'Does this course cover AI and generative search?', a: 'Yes. Module 8 covers content strategy for AI-driven search, including how to structure your content to appear in AI Overviews and be cited by large language models (LLMs).' },
];

export default function CourseSEO() {
  useSEO({
    title: "Free AI + SEO Course – Data-Driven SEO Training",
    description: "Free AI + SEO course for medium-sized businesses. 5 modules covering data-driven SEO, Google Search Console, and AI content strategy.",
    canonical: "https://knowhowmarketinglab.com/courses/seo",
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
            "name": "AI + SEO Course for Medium-Sized Businesses",
            "description": "A 5-module AI + SEO course taught by Pip Seymour and Phelan Lewis. Learn keyword research, on-page SEO, Google Search Console, GA4, and Google Business Profile - using real data and AI tools.",
            "url": "https://knowhowmarketinglab.com/courses/seo",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "KnowHow Marketing Lab",
              "url": "https://knowhowmarketinglab.com",
              "sameAs": ["https://www.youtube.com/@knowhowmarketinglab", "https://seymourdigitalmedia.com"]
            },
            "courseMode": "online",
            "educationalLevel": "Beginner to Intermediate",
            "inLanguage": "en",
            "isAccessibleForFree": true,
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "instructor": [
                { "@type": "Person", "name": "Pip Seymour", "jobTitle": "SEO & Digital Marketing Strategist" },
                { "@type": "Person", "name": "Phelan Lewis", "jobTitle": "Google Ads & Analytics Specialist" }
              ]
            },
            "syllabusSections": modules.map((m, i) => ({
              "@type": "Syllabus",
              "name": `Module ${m.num}: ${m.title}`,
              "description": m.desc,
              "position": i + 1
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "79",
              "bestRating": "5",
              "worstRating": "1"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://knowhowmarketinglab.com/courses/seo" },
                { "@type": "ListItem", "position": 3, "name": "AI + SEO Course", "item": "https://knowhowmarketinglab.com/courses/seo" }
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

      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="seo-course-heading">
          <div className="container max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <li><Link href="/" className="hover:text-[#318599] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-600">AI + SEO Course</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-bold text-[#E98C28] uppercase tracking-widest mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  AI + SEO Course · SEO Accelerator · 5 Modules · Self-Paced
                </span>
                <h1 id="seo-course-heading" className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Data-Driven<br />
                  <span className="text-[#E98C28]">AI + SEO Course</span>
                </h1>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Learn how to get your business found on Google - using real data, not guesswork. This AI + SEO course is a structured SEO accelerator that takes you from zero to a working data-driven strategy. Covers keyword research, Google Search Console, GA4, on-page SEO, and content strategy for AI-driven search.
                </p>
                <p className="text-base text-gray-500 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Taught by <strong>Pip Seymour</strong> and <strong>Phelan Lewis</strong> - two Canadian agency owners with 20+ years of hands-on experience at <a href="https://seymourdigitalmedia.com" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Seymour Digital Media</a>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={FREE_COURSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary pulse-cta"
                    aria-label="Start the AI + SEO course - no credit card required"
                  >
                    Start AI + SEO Course →
                  </a>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#318599] text-[#318599] font-bold text-sm hover:bg-[#318599] hover:text-white transition-all duration-200"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    See All Plans
                  </Link>
                </div>
                <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  100% free · No credit card · No sign-up required to watch videos
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '5', label: 'Course Modules', sub: 'Structured, step-by-step' },
                  { value: '60+', label: 'Video Lessons', sub: 'Free on YouTube' },
                  { value: '100%', label: 'No Credit Card', sub: 'Start immediately' },
                  { value: '20+', label: 'Years Experience', sub: 'Real agency knowledge' },
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

        {/* SEO Accelerator section - targets 'seo accelerator' keyword (17,348 impressions in GSC) */}
        <section className="py-12 bg-[#0D6E7A] text-white" aria-label="SEO Accelerator Program">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-xs font-bold text-[#E98C28] uppercase tracking-widest mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI + SEO Accelerator Program</span>
                <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>This Is Your AI + SEO Accelerator</h2>
                <p className="text-white/80 text-base leading-relaxed mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Most SEO courses give you theory. This AI + SEO accelerator gives you a repeatable, AI-powered system - the same one we use at our agency for medium-sized businesses across Canada.
                </p>
                <p className="text-white/80 text-base leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  In 5 structured modules, you'll go from setting up your tools to publishing content that ranks. AI is built into every step - use ChatGPT, Gemini, and Manus to do keyword research, write title tags, and optimise your content in a fraction of the time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '', title: 'Accelerated Learning', desc: 'Structured modules designed to build on each other - no filler, no fluff.' },
                  { icon: '', title: 'Data-First Method', desc: 'Every decision backed by real data from GA4, GSC, and keyword research.' },
                  { icon: '', title: 'AI at Every Step', desc: 'Use ChatGPT, Gemini, and Manus to do keyword research, write content, and optimise - faster than ever.' },
                  { icon: '', title: 'Measurable Results', desc: 'Know exactly what to track and how to prove your AI + SEO strategy is working.' },
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

        {/* What You Will Learn */}
        <section className="py-16 bg-white" aria-labelledby="modules-heading">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Course Curriculum</span>
              <h2 id="modules-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                What You Will Learn
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Five modules that take you from "I don't know where to start" to running a real, data-driven AI + SEO strategy for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4" itemScope itemType="https://schema.org/ItemList">
              {modules.map((m, i) => (
                <article
                  key={m.num}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#E98C28]/30 hover:shadow-md transition-all duration-200 bg-white"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-extrabold text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="name">{m.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>{m.desc}</p>
                    <div className="flex items-start gap-1.5 bg-amber-50 rounded-lg px-2.5 py-1.5">
                      
                      <p className="text-xs text-amber-800 leading-snug" style={{ fontFamily: 'DM Sans, sans-serif' }}><strong>AI tip:</strong> {m.aiTip}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={FREE_COURSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Start the AI + SEO course now"
              >
                Start AI + SEO Course →
              </a>
            </div>
          </div>
        </section>

        {/* External authority links */}
        <section className="py-10 bg-gray-50 border-y border-gray-100" aria-label="Official Google resources used in this course">
          <div className="container max-w-5xl">
            <p className="text-center text-sm text-gray-500 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              This course uses Google's own official tools and documentation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Google Search Central', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', desc: 'Official SEO starter guide' },
                { label: 'Google Search Console Help', href: 'https://support.google.com/webmasters/', desc: 'Official GSC documentation' },
                { label: 'Google Analytics 4 Help', href: 'https://support.google.com/analytics/', desc: 'Official GA4 documentation' },
                { label: 'Google Skillshop', href: 'https://skillshop.withgoogle.com/', desc: 'Free Google certifications' },
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

        {/* Upgrade CTA - Community */}
        <section className="py-16 bg-white" aria-labelledby="upgrade-heading">
          <div className="container max-w-3xl text-center">
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Go Deeper</span>
            <h2 id="upgrade-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Want Live Help Every Week?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The AI + SEO course gives you the foundation. The Lab gives you live Q&amp;A every Thursday, a monthly deep-dive training, the AI Marketing &amp; Automation course, and a private group of marketers doing the same work you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Join The Lab for $29 per month"
              >
                Join The Lab - $29/mo →
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-[#318599] hover:text-[#318599] transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                See What’s Included →
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Cancel anytime · Price increases as community grows · Powered by GoHighLevel</p>
          </div>
        </section>

        {/* Booking Calendar */}
        <section className="py-16 bg-gray-50 border-t border-gray-100" aria-labelledby="book-call-heading">
          <div className="container max-w-3xl text-center">
            <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free Strategy Call</span>
            <h2 id="book-call-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-500 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Book a free 30-minute call with Pip or Phelan. We will look at your current SEO, tell you exactly what to fix first, and answer your questions - no sales pitch.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <iframe
                src="https://crm.seymourdigitalmedia.com/widget/booking/vRBWL3TL9wPMAoiDTQuH"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                scrolling="no"
                id="vRBWL3TL9wPMAoiDTQuH_seo_course"
                title="Book a free SEO strategy call with KnowHow Marketing Lab"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" aria-labelledby="faq-heading">
          <div className="container max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FAQ</span>
              <h2 id="faq-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-bold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{f.q}</span>
                    <svg className={`w-5 h-5 text-[#E98C28] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === i && (
                    <div id={`faq-answer-${i}`} className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-sm font-bold text-gray-700 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Keep Learning</p>
              <div className="flex flex-wrap gap-3">
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
