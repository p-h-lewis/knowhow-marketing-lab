// KnowHow Marketing Lab - Home Page
// Full conversion engine: Hero → Trust → AI + SEO Course → Videos → Courses → Community → Testimonials → About → Lead Capture → FAQ → Footer
// Schema: WebPage, EducationalOrganization, Course, VideoObject, FAQPage, BreadcrumbList
// Internal links: /pricing, /about, /resources, /#sections
// External links: seymourdigitalmedia.com, youtube.com, learnwith.seymourdigitalmedia.com, support.google.com, developers.google.com

import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import FreeCourseSection from '@/components/FreeCourseSection';
import VideoLibrary from '@/components/VideoLibrary';
import CoursesSection from '@/components/CoursesSection';
import CommunitySection from '@/components/CommunitySection';
import AboutSection from '@/components/AboutSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "KnowHow Marketing Lab - AI + SEO, Google Ads & AI Marketing Training",
    description: "Free data-driven SEO course for medium-sized businesses. Learn AI + SEO, Google Ads, and GA4 from 20+ year agency veterans. 60+ free video lessons, weekly live Q&A, no credit card required.",
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
              { "@type": "ListItem", "position": 7, "name": "Free Resources - Official Google Docs", "url": "https://knowhowmarketinglab.com/resources" }
            ]
          })
        }}
      />

      <AnnouncementBar />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <FreeCourseSection />
        <VideoLibrary />
        <CoursesSection />
        <CommunitySection />
        <TestimonialsSection />
        <AboutSection />
        <LeadCaptureSection />

        {/* Featured Blog Posts — internal links to top-ranking posts for SEO link juice */}
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
                  desc: 'How to use AI tools to do keyword research, write content, and optimise your site — faster than ever before.',
                  color: '#E98C28',
                },
                {
                  href: '/blog/adgroups-based-on-user-intent',
                  tag: 'Google Ads',
                  title: 'How to Structure Ad Groups Based on User Intent',
                  desc: 'The ad group structure that actually works — based on what your customers are trying to do, not just what they type.',
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
                  desc: 'The full playbook for using real data — not guesswork — to grow your organic traffic.',
                  color: '#E98C28',
                },
                {
                  href: '/framework',
                  tag: 'Methodology',
                  title: 'The Data-First AI SEO Method',
                  desc: 'Our branded framework for building an SEO strategy that is measurable, repeatable, and built for AI-driven search.',
                  color: '#4F37D8',
                },
              ].map(post => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-200 flex flex-col"
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
