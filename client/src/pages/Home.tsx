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
    title: "KnowHow Marketing Lab — AI SEO & Google Ads Training for Business Owners",
    description: "Free AI SEO and Google Ads training for business owners and marketing teams. Learn how to rank on Google and in ChatGPT, Perplexity, and AI search — from 20-year agency veterans Pip Seymour and Phelan Lewis.",
    canonical: "https://knowhowmarketinglab.com/",
    ogType: "website",
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
                  { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "AI-Powered Google Ads Bootcamp", "description": "Free Google Ads course covering campaign types, bidding strategies, ad group structure, and AI tools for Google Ads optimisation.", "url": "https://knowhowmarketinglab.com/courses/google-ads" } },
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
                  "jobTitle": "Google Ads & Analytics Lead",
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
                  title="Google's Secret Weapon for FREE Keyword Research — KnowHow Marketing Lab"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ display: 'block' }}
                />
                <iframe
                  id="vid-frame-2"
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/TDlgrr0cviE"
                  title="Google Business Profile - Everything You Need To Know — KnowHow Marketing Lab"
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
                  Join The Lab — $29/mo →
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
                  title: 'The KnowHow Lab — Join the Community',
                  desc: 'Thursday Lab sessions where Pip & Phelan work through your real campaigns live, plus advanced courses, AI tools, and a private group for $29/month.',
                  color: '#318599',
                },
                {
                  href: '/podcast',
                  tag: 'Podcast',
                  title: 'GeekSpeak — The Marketing Podcast',
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
