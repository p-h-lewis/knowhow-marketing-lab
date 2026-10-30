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
import { FREE_COURSE_URL, LAB_TRIAL_URL as COMMUNITY_URL } from '@/lib/ghlLinks';
import { FREE_COURSE_SUMMARY, FREE_COURSE_DAYS } from '@/lib/freeCourse';


// The five days of the free course, from @/lib/freeCourse (shared everywhere).
const modules: { num: string; title: string; desc: string; aiTip: string }[] = FREE_COURSE_DAYS.map(d => ({
  num: `0${d.day}`,
  title: `Day ${d.day}: ${d.title}`,
  desc: '',
  aiTip: '',
}));

const faqs = [
  { q: 'Is this a good intro to SEO for beginners?', a: `Yes - this course is designed as a complete intro to SEO for business owners and marketing teams. You do not need any prior experience. ${FREE_COURSE_SUMMARY}` },
  { q: 'Is this AI + SEO course free to access?', a: `Yes - no credit card required. ${FREE_COURSE_SUMMARY}` },
  { q: 'Who is this course for?', a: 'This course is built for marketing teams and business owners at medium-sized businesses. If you want to get more traffic from Google without guessing, this is for you.' },
  { q: 'How long does the course take?', a: `${FREE_COURSE_SUMMARY} You can go at your own pace, there is no deadline.` },
  { q: 'Do I need any technical skills?', a: 'No. We teach everything from scratch. If you can use Google, you can take this course.' },
  { q: 'What is the difference between the AI + SEO course and The Lab?', a: 'The free course is a five-day start. Live sessions, site reviews and the full SEO course and class library are in The Lab. The Lab ($29 CAD/mo) adds a live session every Tuesday, 12 to 1 pm Pacific (teaching or a tip, then Q&A and live audits), the AI marketing course, private community access, and all recorded session replays. See the full comparison on our pricing page.' },
  { q: 'Does this course cover AI and generative search?', a: 'Yes. Each day comes with an AI prompt to help, and Day 4 covers how you show up on Google. Deeper AI SEO training is in The Lab.' },
  { q: 'How does AI affect SEO in 2026?', a: 'AI has changed SEO in three big ways. First, Google now shows AI Overviews at the top of search results, which means your content needs to be structured so AI can summarise it accurately. Second, people are searching directly in ChatGPT, Perplexity, and Gemini instead of Google, so your site needs to be cited by those systems too. Third, AI tools like ChatGPT and Gemini can now help you do keyword research, write title tags, and optimise content much faster. This course covers all three shifts.' },
  { q: 'What is Generative Engine Optimisation (GEO)?', a: 'Generative Engine Optimisation (GEO) is the practice of making your content easy for AI search engines like ChatGPT, Perplexity, and Google Gemini to find, understand, and cite. It includes using structured data (schema markup), writing complete answers to specific questions, creating named frameworks, and building topical authority on a subject. GEO is covered in depth in this course.' },
  { q: 'Will AI replace SEO?', a: 'No, but it is changing it fast. AI tools are making SEO faster and more accessible, while AI search engines are creating new ways for people to find content. Businesses that learn to optimise for both traditional search and AI search will have a significant advantage. This course teaches you both.' },
];

export default function CourseSEO() {
  useSEO({
    title: "SEO Starter: Free 5-Day SEO Course | KnowHow Marketing Lab",
    description: "A free 5-day start to SEO for business owners who want to do their own. Each day is a few short videos (about 72 minutes in total) and one thing to do on your own website or Business Profile, with an AI prompt to help. Free, no credit card.",
    canonical: "https://knowhowmarketinglab.com/courses/seo",
    ogType: "course",
    ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-seo-course_37267649.png",
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
            "description": FREE_COURSE_SUMMARY,
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
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CAD" },
            "teaches": ["SEO", "Generative Engine Optimisation", "AI SEO", "Google Search Console", "GA4", "Keyword Research", "On-Page SEO", "Google Business Profile"],
            "about": [
              { "@type": "Thing", "name": "Search Engine Optimisation" },
              { "@type": "Thing", "name": "Generative Engine Optimisation" },
              { "@type": "Thing", "name": "Google Analytics 4" },
              { "@type": "Thing", "name": "Google Search Console" }
            ],
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "instructor": [
                { "@type": "Person", "name": "Pip Seymour", "url": "https://knowhowmarketinglab.com/about", "jobTitle": "SEO & Digital Marketing Strategist", "description": "Pip Seymour is a digital marketing strategist and SEO specialist, specialising in data-driven SEO and Generative Engine Optimisation." },
                { "@type": "Person", "name": "Phelan Lewis", "url": "https://knowhowmarketinglab.com/about", "jobTitle": "Google Tag Manager & Analytics Specialist", "description": "Phelan Lewis is a Google Tag Manager and analytics specialist helping medium-sized businesses measure what matters." }
              ]
            },
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
                  SEO Starter · Free · 5 Days
                </span>
                <h1 id="seo-course-heading" className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  SEO Starter:<br />
                  <span className="text-[#E98C28]">5 Days, One Thing at a Time</span>
                </h1>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {FREE_COURSE_SUMMARY}
                </p>
                <p className="text-base text-gray-500 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Taught by <strong>Pip Seymour</strong> and <strong>Phelan Lewis</strong> - two Canadian agency owners with 30+ years of combined hands-on experience at <a href="https://seymourdigitalmedia.com" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Seymour Digital Media</a>.
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
                  { value: '30+', label: 'Years Combined', sub: 'Real agency knowledge' },
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
                  Each day comes with an AI prompt, so you can use tools like ChatGPT or Gemini to help with the day's task.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '', title: 'One Thing a Day', desc: 'Five short days. Each one ends with one thing to do on your own website or Business Profile.' },
                  { icon: '', title: 'Data-First Method', desc: 'The same data-first approach we use with our agency clients, in plain English.' },
                  { icon: '', title: 'AI Prompt Each Day', desc: 'Each day has an AI prompt to help you do the task.' },
                  { icon: '', title: 'A Clear Next Step', desc: 'Day 5 looks at your competition and what to do next.' },
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
                {FREE_COURSE_SUMMARY}
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
                    {m.desc && <p className="text-xs text-gray-500 leading-relaxed mb-2.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>{m.desc}</p>}
                    {m.aiTip && (
                    <div className="flex items-start gap-1.5 bg-amber-50 rounded-lg px-2.5 py-1.5">
                      
                      <p className="text-xs text-amber-800 leading-snug" style={{ fontFamily: 'DM Sans, sans-serif' }}><strong>AI tip:</strong> {m.aiTip}</p>
                    </div>
                    )}
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
              The AI + SEO course gives you the foundation. The Lab gives you a live session every Tuesday, 12 to 1 pm Pacific, the AI Marketing &amp; Automation course, and a private group of marketers doing the same work you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Join The Lab for $29 CAD per month"
              >
                Join The Lab - $29 CAD/mo →
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-[#318599] hover:text-[#318599] transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                See What’s Included →
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Cancel anytime · No contracts · Powered by GoHighLevel</p>
          </div>
        </section>

        {/* The Lab CTA (replaces the old 1:1 strategy call booking calendar) */}
        <section className="py-16 bg-gray-50 border-t border-gray-100" aria-labelledby="book-call-heading">
          <div className="container max-w-3xl text-center">
            <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Live Help Every Tuesday</span>
            <h2 id="book-call-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-500 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Bring your website to The Lab. Every Tuesday, 12 to 1 pm Pacific, Pip and Phelan start with teaching or a tip, then answer questions and audit real sites live.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-[#E98C28] hover:bg-[#d47d20] text-white font-bold rounded-xl py-3.5 px-7 text-base transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Try The Lab free for 14 days →
            </Link>
            <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Then $29 CAD/mo · Cancel anytime</p>
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
    </div>
  );
}
