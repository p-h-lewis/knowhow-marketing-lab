// KnowHow Marketing Lab - Home Page
// Full conversion engine: Hero → Trust → AI + SEO Course → Videos → Courses → Community → Testimonials → About → Lead Capture → FAQ → Footer
// Schema: WebPage, EducationalOrganization, Course, VideoObject, FAQPage, BreadcrumbList
// Internal links: /pricing, /about, /resources, /#sections
// External links: seymourdigitalmedia.com, youtube.com, learnwith.seymourdigitalmedia.com, support.google.com, developers.google.com

import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
// Below-fold components - lazy loaded to reduce initial bundle and improve LCP
const CoursesSection = lazy(() => import('@/components/CoursesSection'));
const CommunitySection = lazy(() => import('@/components/CommunitySection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const LeadCaptureSection = lazy(() => import('@/components/LeadCaptureSection'));
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useSEO } from "@/hooks/useSEO";

// Lightweight skeleton shown while below-fold sections load
function SectionSkeleton() {
  return <div className="w-full py-16 bg-white" aria-hidden="true" />;
}

export default function Home() {
  useSEO({
    title: "KnowHow Marketing Lab, AI SEO & Google Ads Training for Business Owners",
    description: "Free AI SEO and Google Ads training for business owners and marketing teams. Learn how to rank on Google and in ChatGPT, Perplexity, and AI search, from 20-year agency veterans Pip Seymour and Phelan Lewis.",
    canonical: "https://knowhowmarketinglab.com/",
    ogType: "website",
    ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-the-lab-55UQsMjgbzaYNNiK63oh8d.png",
  });

  return (
    <div className="min-h-screen bg-white">

      {/* WebPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "KnowHow Marketing Lab - AI + SEO, Google Ads & AI Marketing Training",
            "description": "Free expert training in SEO, GA4, and AI marketing. 60+ free video lessons, weekly live classes, and The Lab community on GoHighLevel. Built by agency veterans Pip Seymour and Phelan Lewis.",
            "url": "https://knowhowmarketinglab.com/",
            "inLanguage": "en-US",
            "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" }
              ]
            },
            "about": {
              "@type": "EducationalOrganization",
              "name": "KnowHow Marketing Lab",
              "description": "Free digital marketing education for medium-sized businesses. Courses in SEO, Google Ads, GA4, Google Tag Manager, and AI marketing automation.",
              "url": "https://knowhowmarketinglab.com",
              "sameAs": [
                "https://www.youtube.com/@knowhowmarketinglab",
                "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce",
                "https://seymourdigitalmedia.com/"
              ],
              "knowsAbout": [
                "Data-Driven SEO",
                "Generative Engine Optimisation",
                "GEO",
                "AI SEO",
                "Google Ads",
                "Google Analytics 4",
                "GA4",
                "Google Search Console",
                "Google Tag Manager",
                "AI Marketing",
                "ChatGPT for SEO",
                "Gemini for Marketing",
                "Manus AI",
                "The Data-First AI SEO Method"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "KnowHow Marketing Lab Courses",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "AI + SEO Accelerator Course", "description": "Free 5-module course teaching the Data-First AI SEO Method for medium-sized businesses. Covers Google Search Console, GA4, keyword research, on-page SEO, and GEO.", "url": "https://knowhowmarketinglab.com/courses/seo" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Google Ads Bootcamp", "description": "Google Ads bootcamp covering campaign types, bidding strategies, ad group structure, and AI tools for Google Ads optimisation. Included in The Lab membership at $29/mo.", "url": "https://knowhowmarketinglab.com/courses/google-ads" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "The Lab - VIP Marketing Community", "description": "$29/month exclusive community with weekly live Q&A, monthly deep-dive training, and private community access.", "url": "https://knowhowmarketinglab.com/pricing" } }
                ]
              },
              "founder": [
                {
                  "@type": "Person",
                  "name": "Pip Seymour",
                  "jobTitle": "SEO & Content Strategy Lead",
                  "worksFor": { "@type": "Organization", "name": "Seymour Digital Media", "url": "https://seymourdigitalmedia.com/" },
                  "knowsAbout": ["SEO", "Google Search Console", "GA4", "Generative Engine Optimisation", "Content Strategy"]
                },
                {
                  "@type": "Person",
                  "name": "Phelan Lewis",
                  "jobTitle": "Google Tag Manager & Analytics Lead",
                  "knowsAbout": ["Google Ads", "Google Tag Manager", "GA4", "AI Marketing Automation", "PPC"]
                }
              ]
            }
          })
        }}
      />

      {/* Course schema - AI + SEO Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Free Data-Driven SEO Course",
            "description": "A 5-module AI + SEO course for medium-sized businesses. Covers keyword research, on-page SEO, Google Search Console, GA4, Google Business Profile, and Generative Engine Optimisation (GEO). No credit card required.",
            "url": "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce",
            "provider": {
              "@type": "Organization",
              "name": "KnowHow Marketing Lab",
              "url": "https://knowhowmarketinglab.com",
              "sameAs": "https://seymourdigitalmedia.com/"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "category": "Free"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "instructor": [
                { "@type": "Person", "name": "Pip Seymour" },
                { "@type": "Person", "name": "Phelan Lewis" }
              ]
            },
            "about": [
              { "@type": "Thing", "name": "Search Engine Optimisation" },
              { "@type": "Thing", "name": "Google Search Console" },
              { "@type": "Thing", "name": "Google Analytics 4" },
              { "@type": "Thing", "name": "Google Business Profile" },
              { "@type": "Thing", "name": "Generative Engine Optimisation" }
            ]
          })
        }}
      />

      {/* ItemList schema - internal page sections for AI navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "KnowHow Marketing Lab - Page Sections",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "AI + SEO Course", "url": "https://knowhowmarketinglab.com/#free-course" },
              { "@type": "ListItem", "position": 2, "name": "Free Video Library", "url": "https://knowhowmarketinglab.com/#videos" },
              { "@type": "ListItem", "position": 3, "name": "Courses - AI + SEO & AI Marketing", "url": "https://knowhowmarketinglab.com/#courses" },
              { "@type": "ListItem", "position": 4, "name": "The Lab on GoHighLevel", "url": "https://knowhowmarketinglab.com/#community" },
              { "@type": "ListItem", "position": 5, "name": "Pricing - Free vs Community", "url": "https://knowhowmarketinglab.com/pricing" },
              { "@type": "ListItem", "position": 6, "name": "About Pip Seymour & Phelan Lewis", "url": "https://knowhowmarketinglab.com/about" },
              { "@type": "ListItem", "position": 7, "name": "Free Resources - Official Google Docs", "url": "https://knowhowmarketinglab.com/resources" },
              { "@type": "ListItem", "position": 8, "name": "The KnowHow Lab Community", "url": "https://knowhowmarketinglab.com/community" },
              { "@type": "ListItem", "position": 9, "name": "GeekSpeak Podcast", "url": "https://knowhowmarketinglab.com/podcast" },
              { "@type": "ListItem", "position": 10, "name": "The Data-First AI SEO Framework", "url": "https://knowhowmarketinglab.com/framework" }
            ]
          })
        }}
      />

      <Navbar />
      <main id="main-content">
        <HeroSection />
        <div className="cv-auto">
          <Suspense fallback={<SectionSkeleton />}>
            <CoursesSection />
          </Suspense>
        </div>
        <div className="cv-auto">
          <Suspense fallback={<SectionSkeleton />}>
            <CommunitySection />
          </Suspense>
        </div>



        {/* ── HOMEPAGE VIDEO CLIP ── */}
        <section className="py-16 bg-white border-t border-gray-100" aria-labelledby="homepage-video-heading">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#318599] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>See it in action</span>
              <h2 id="homepage-video-heading" className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Watch a real session</h2>
              <p className="text-gray-500 mt-2 max-w-lg mx-auto text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>This is the kind of practical, no-fluff marketing training we run every week. Bring your questions and we'll work through them live.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              {/* Video tabs */}
              <div className="flex gap-2 mb-4 justify-center">
                <button
                  id="vid-tab-1"
                  onClick={() => {
                    const f1 = document.getElementById('vid-frame-1') as HTMLIFrameElement | null;
                    const f2 = document.getElementById('vid-frame-2') as HTMLIFrameElement | null;
                    if (f1) f1.style.display = 'block';
                    if (f2) f2.style.display = 'none';
                    document.getElementById('vid-tab-1')?.classList.add('bg-[#318599]','text-white');
                    document.getElementById('vid-tab-1')?.classList.remove('bg-gray-100','text-gray-600');
                    document.getElementById('vid-tab-2')?.classList.remove('bg-[#318599]','text-white');
                    document.getElementById('vid-tab-2')?.classList.add('bg-gray-100','text-gray-600');
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#318599] text-white transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Keyword Research
                </button>
                <button
                  id="vid-tab-2"
                  onClick={() => {
                    const f1 = document.getElementById('vid-frame-1') as HTMLIFrameElement | null;
                    const f2 = document.getElementById('vid-frame-2') as HTMLIFrameElement | null;
                    if (f1) f1.style.display = 'none';
                    if (f2) f2.style.display = 'block';
                    document.getElementById('vid-tab-2')?.classList.add('bg-[#318599]','text-white');
                    document.getElementById('vid-tab-2')?.classList.remove('bg-gray-100','text-gray-600');
                    document.getElementById('vid-tab-1')?.classList.remove('bg-[#318599]','text-white');
                    document.getElementById('vid-tab-1')?.classList.add('bg-gray-100','text-gray-600');
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600 transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Google Business Profile
                </button>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  id="vid-frame-1"
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/eGN0oy0ynbE"
                  title="Google's Secret Weapon for FREE Keyword Research, KnowHow Marketing Lab"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ display: 'block' }}
                />
                <iframe
                  id="vid-frame-2"
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/TDlgrr0cviE"
                  title="Google Business Profile - Everything You Need To Know, KnowHow Marketing Lab"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ display: 'none' }}
                />
              </div>
              <div className="text-center mt-6">
                <a
                  href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-3 px-7 text-sm transition-all duration-150 shadow-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Join The Lab, $29/mo →
                </a>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LeadCaptureSection />
        </Suspense>

        {/* ── LIVE COACHING SECTION ── */}
        <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="coaching-section-heading">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: copy */}
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E98C28] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Live Coaching</span>
                <h2 id="coaching-section-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Get expert eyes on your real campaigns, every week
                </h2>
                <p className="text-gray-600 text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Every Thursday at 12pm Pacific, Pip and Phelan review real websites and Google Ads accounts live. You bring your actual data. We tell you exactly what to fix and why. No slides. No theory. Just practical help on your specific situation.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { icon: '✓', text: 'Live SEO and Google Ads account reviews every Thursday' },
                    { icon: '✓', text: 'Ask questions about your specific campaigns and website' },
                    { icon: '✓', text: 'Access to all session recordings and course materials' },
                    { icon: '✓', text: '$29/month, founding member rate, cancel anytime' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#E98C28]/10 text-[#E98C28] text-xs font-bold flex items-center justify-center">{item.icon}</span>
                      <span className="text-gray-700 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link href="/pricing" className="inline-block bg-[#E98C28] text-white font-bold px-7 py-3 rounded-full hover:bg-[#d47d20] transition-colors text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Join The Lab, $29/mo →
                  </Link>
                  <Link href="/blog/seo-and-analytics-coaching-for-marketers" className="inline-block border border-gray-300 text-gray-700 font-semibold px-7 py-3 rounded-full hover:border-[#318599] hover:text-[#318599] transition-colors text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    What coaching looks like
                  </Link>
                </div>
                {/* Mastermind callout */}
                <div className="mt-2 p-4 rounded-2xl border border-[#E98C28]/30 bg-[#E98C28]/5 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E98C28] animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>New, 5 seats left</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI Marketing Accelerator Mastermind, 8 weeks, $2,000</p>
                  </div>
                  <Link href="/mastermind" className="flex-shrink-0 text-xs font-bold text-[#E98C28] hover:underline whitespace-nowrap" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>See details →</Link>
                </div>
              </div>
              {/* Right: coaching cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    color: '#318599',
                    label: 'SEO & Analytics',
                    title: 'SEO Coaching',
                    desc: 'Bring your Google Search Console data, your content, and your questions. Pip will show you what is working, what is not, and what to do next.',
                    href: '/blog/seo-and-analytics-coaching-for-marketers',
                  },
                  {
                    color: '#E98C28',
                    label: 'Google Ads',
                    title: 'Google Ads Coaching',
                    desc: 'Share your Google Ads account and Phelan will review your campaigns live, conversion tracking, Tag Manager setup, campaign structure, and what the data is actually telling you.',
                    href: '/blog/google-ads-coaching-for-marketers',
                  },
                ].map((card, i) => (
                  <Link key={i} href={card.href} className="block p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: card.color }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: card.color, fontFamily: 'Space Grotesk, sans-serif' }}>{card.label}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#318599] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.title}</h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>{card.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MASTERMIND SECTION ── */}
        <section className="py-20 bg-[#1a1a2e] relative overflow-hidden" aria-labelledby="mastermind-home-heading">
          {/* Background glow */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, #E98C28 0%, transparent 45%), radial-gradient(circle at 85% 30%, #318599 0%, transparent 45%)' }} />
          <div className="container max-w-5xl relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: copy */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#E98C28] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Limited to 8 seats · Cohort starts May 12</span>
                </div>
                <h2 id="mastermind-home-heading" className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Ready to go deeper?<br />
                  <span style={{ color: '#E98C28' }}>The AI Marketing Accelerator</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  8 weeks of intensive, small-group coaching for business owners who want to build a real AI-powered marketing system — not just learn theory. Only 8 seats per cohort.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Weekly 90-min live sessions with Pip & Phelan',
                    'Your real website, ads, and data reviewed every week',
                    'AI tools, automations, and frameworks built for your business',
                    '$2,000 one-time investment · 8 seats · starts May 12',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#E98C28]/20 text-[#E98C28] text-xs font-bold flex items-center justify-center">✓</span>
                      <span className="text-gray-300 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/mastermind" className="inline-block bg-[#E98C28] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#d47d20] transition-colors text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    See the full details →
                  </Link>
                  <a href="https://crm.seymourdigitalmedia.com/widget/booking/6AuyeLl8HIzgz285Vfca" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full hover:border-[#E98C28] hover:text-[#E98C28] transition-colors text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Book a discovery call
                  </a>
                </div>
              </div>
              {/* Right: stats cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '8', label: 'Seats per cohort', color: '#E98C28' },
                  { value: '8', label: 'Weeks of live coaching', color: '#318599' },
                  { value: '$2,000', label: 'One-time investment', color: '#4F37D8' },
                  { value: '90 min', label: 'Per weekly session', color: '#E98C28' },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                    <div className="text-3xl font-extrabold mb-1" style={{ color: stat.color, fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
                    <div className="text-xs text-gray-400 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</div>
                  </div>
                ))}
                <div className="col-span-2 rounded-2xl border border-[#E98C28]/30 bg-[#E98C28]/10 p-5 text-center">
                  <p className="text-sm text-[#E98C28] font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>"This is for the business owner who is done guessing and wants a real system."</p>
                  <p className="text-xs text-gray-400 mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>— Pip Seymour, KnowHow Marketing Lab</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts - internal links to top-ranking posts for SEO link juice */}
        <section className="py-16 bg-gray-50 border-t border-gray-100" aria-labelledby="blog-posts-heading">
          <div className="container max-w-5xl">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>From the Blog</span>
                <h2 id="blog-posts-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Marketing Guides Worth Reading</h2>
              </div>
              <Link href="/blog" className="text-sm font-bold text-[#318599] hover:underline hidden sm:block" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>View all guides →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  href: '/blog/ai-seo-course',
                  tag: 'AI + SEO',
                  title: 'AI SEO Course 2026, The KnowHow AI SEO Framework',
                  desc: 'How to rank on Google and get cited by ChatGPT, Perplexity, and Gemini. The complete AI SEO framework for medium-sized businesses.',
                  color: '#E98C28',
                },
                {
                  href: '/blog/google-ads-framework',
                  tag: 'Google Ads',
                  title: 'The KnowHow Google Ads Framework, 5 Phases to Profitable Campaigns',
                  desc: 'The named 5-phase methodology used by KnowHow Marketing Lab to build profitable Google Ads campaigns from scratch. Covers structure, bidding, quality score, and AI tools.',
                  color: '#318599',
                },
                {
                  href: '/blog/ai-seo-guide',
                  tag: 'AI + SEO',
                  title: 'The Complete Guide to AI SEO',
                  desc: 'How to use AI tools to do keyword research, write content, and optimise your site - faster than ever before.',
                  color: '#E98C28',
                },
                {
                  href: '/blog/adgroups-based-on-user-intent',
                  tag: 'Google Ads',
                  title: 'How to Structure Ad Groups Based on User Intent',
                  desc: 'The ad group structure that actually works - based on what your customers are trying to do, not just what they type.',
                  color: '#318599',
                },
                {
                  href: '/blog/ga4-set-up-guide',
                  tag: 'GA4',
                  title: 'GA4 Set Up & Guide: Step-by-Step for Business Owners',
                  desc: 'Set up Google Analytics 4 the right way from day one. No guessing, no missing data.',
                  color: '#4F37D8',
                },
                {
                  href: '/blog/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns',
                  tag: 'Google Ads',
                  title: 'Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns',
                  desc: 'A structured 5-week plan to go from zero to running profitable Google Ads campaigns for your business.',
                  color: '#318599',
                },
                {
                  href: '/blog/data-driven-seo-guide-medium-sized-businesses',
                  tag: 'SEO',
                  title: 'Data-Driven SEO: The Complete Guide for Medium-Sized Businesses',
                  desc: 'The full playbook for using real data - not guesswork - to grow your organic traffic.',
                  color: '#E98C28',
                },
                {
                  href: '/framework',
                  tag: 'Methodology',
                  title: 'The Data-First AI SEO Method',
                  desc: 'Our branded framework for building an SEO strategy that is measurable, repeatable, and built for AI-driven search.',
                  color: '#4F37D8',
                },
                {
                  href: '/community',
                  tag: 'Community',
                  title: 'The KnowHow Lab, Join the Community',
                  desc: 'Thursday Lab sessions where Pip & Phelan work through your real campaigns live, plus advanced courses, AI tools, and a private group for $29/month.',
                  color: '#318599',
                },
                {
                  href: '/podcast',
                  tag: 'Podcast',
                  title: 'GeekSpeak, The Marketing Podcast',
                  desc: 'Monthly deep-dives on SEO, Google Ads, AI, and the latest in digital marketing. Hosted by Pip Seymour and Phelan Lewis.',
                  color: '#E98C28',
                },
              ].map(post => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group card-elevated p-6 flex flex-col"
                  aria-label={post.title}
                >
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-2 py-1 rounded-full"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: post.color, backgroundColor: post.color + '15' }}
                  >
                    {post.tag}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#318599] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{post.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{post.desc}</p>
                  <span className="mt-4 text-xs font-bold text-[#318599]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Read guide →</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link href="/blog" className="text-sm font-bold text-[#318599] hover:underline" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>View all guides →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
