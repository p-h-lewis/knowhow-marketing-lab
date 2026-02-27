// KnowHow Marketing Lab — Free Resources Page
// /resources — Curated authoritative external links (Google official docs only, no competitors)
// Schema: ItemList, WebPage
// Internal links: → /#free-course, /#videos, /#community, /pricing

import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { useSEO } from "@/hooks/useSEO";

const resourceCategories = [
  {
    title: 'SEO & Google Search',
    color: '#318599',
    icon: '🔍',
    description: 'Official Google documentation for understanding how search works, how to optimize your site, and how to use Google Search Console.',
    resources: [
      {
        name: 'Google SEO Starter Guide',
        desc: 'The official Google guide to search engine optimization fundamentals. The best starting point for any business learning SEO.',
        href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
        source: 'Google Search Central',
      },
      {
        name: 'Google Search Central Documentation',
        desc: 'Complete technical SEO documentation from Google — structured data, crawling, indexing, and ranking best practices.',
        href: 'https://developers.google.com/search/docs',
        source: 'Google Search Central',
      },
      {
        name: 'Google Search Console Help Center',
        desc: 'Official help documentation for Google Search Console — how to verify your site, read reports, and fix coverage issues.',
        href: 'https://support.google.com/webmasters/',
        source: 'Google Support',
      },
      {
        name: 'Google Business Profile Help Center',
        desc: 'Official guide to setting up and optimizing your Google Business Profile for local search and Google Maps visibility.',
        href: 'https://support.google.com/business/',
        source: 'Google Support',
      },
    ],
  },
  {
    title: 'Google Analytics 4 (GA4)',
    color: '#E98C28',
    icon: '📊',
    description: 'Official Google documentation for setting up, configuring, and using Google Analytics 4 to understand your website traffic.',
    resources: [
      {
        name: 'Google Analytics Help Center',
        desc: 'The official GA4 help center — covers account setup, reports, events, conversions, and data analysis.',
        href: 'https://support.google.com/analytics/',
        source: 'Google Support',
      },
      {
        name: 'Set Up Analytics for a Website',
        desc: 'Step-by-step official guide to creating a GA4 property, adding a data stream, and installing the tracking code.',
        href: 'https://support.google.com/analytics/answer/9304153',
        source: 'Google Support',
      },
      {
        name: 'GA4 Recommended Events',
        desc: 'Official list of recommended GA4 events for e-commerce, lead generation, and content sites — the foundation of conversion tracking.',
        href: 'https://support.google.com/analytics/answer/9267735',
        source: 'Google Support',
      },
      {
        name: 'Google Analytics Developer Documentation',
        desc: 'Technical documentation for GA4 implementation — for developers and advanced users setting up custom tracking.',
        href: 'https://developers.google.com/analytics/devguides/collection/ga4',
        source: 'Google Developers',
      },
    ],
  },
  {
    title: 'Google Ads',
    color: '#4F37D8',
    icon: '📢',
    description: 'Official Google Ads help documentation — from campaign setup to bidding strategy, ad formats, and performance optimization.',
    resources: [
      {
        name: 'Google Ads Help Center',
        desc: 'The official Google Ads support hub — covers campaign creation, targeting, bidding, billing, and troubleshooting.',
        href: 'https://support.google.com/google-ads/supporthub',
        source: 'Google Support',
      },
      {
        name: 'Your Guide to Google Ads',
        desc: 'Official beginner\'s guide to Google Ads — how the auction works, campaign types, and getting your first ad live.',
        href: 'https://support.google.com/google-ads/answer/6146252',
        source: 'Google Support',
      },
      {
        name: 'Google Ads Policies',
        desc: 'Official Google Ads advertising policies — understand what is allowed, what is restricted, and how to avoid disapprovals.',
        href: 'https://support.google.com/adspolicy/answer/6008942',
        source: 'Google Support',
      },
      {
        name: 'Google Skillshop — Google Ads Certifications',
        desc: 'Free official Google Ads certifications from Google Skillshop. Earn credentials in Search, Display, Video, and Shopping.',
        href: 'https://skillshop.withgoogle.com/',
        source: 'Google Skillshop',
      },
    ],
  },
  {
    title: 'Google Tag Manager',
    color: '#318599',
    icon: '🏷️',
    description: 'Official Google Tag Manager documentation — how to set up containers, configure tags, and deploy tracking without touching code.',
    resources: [
      {
        name: 'Google Tag Manager Help Center',
        desc: 'Official GTM help center — covers account setup, container configuration, tags, triggers, variables, and debugging.',
        href: 'https://support.google.com/tagmanager/',
        source: 'Google Support',
      },
      {
        name: 'Introduction to Google Tag Manager',
        desc: 'Official introduction to GTM — what it is, how it works, and why it is the standard for marketing tag management.',
        href: 'https://support.google.com/tagmanager/answer/6102821',
        source: 'Google Support',
      },
      {
        name: 'Create a GTM Account and Container',
        desc: 'Step-by-step official guide to creating your first GTM account and container — the starting point for all tag management.',
        href: 'https://support.google.com/tagmanager/answer/14842164',
        source: 'Google Support',
      },
      {
        name: 'Google Tag Platform Documentation',
        desc: 'Technical documentation for Google Tag Manager from Google Developers — for advanced implementations and custom solutions.',
        href: 'https://developers.google.com/tag-platform/tag-manager',
        source: 'Google Developers',
      },
    ],
  },
  {
    title: 'Marketing Research & Insights',
    color: '#E98C28',
    icon: '💡',
    description: 'Official Google research and insights for marketers — consumer trends, digital marketing data, and industry benchmarks.',
    resources: [
      {
        name: 'Think with Google',
        desc: 'Google\'s official marketing research hub — consumer insights, digital trends, and data-driven marketing strategies.',
        href: 'https://www.thinkwithgoogle.com/',
        source: 'Think with Google',
      },
      {
        name: 'Google Digital Marketing Certificate',
        desc: 'Google\'s official digital marketing and e-commerce professional certificate on Coursera — free to audit.',
        href: 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce',
        source: 'Google / Coursera',
      },
    ],
  },
];

export default function Resources() {
  useSEO({
    title: "Free Marketing Resources — Google Tools, Guides & Official Docs | KnowHow Marketing Lab",
    description: "Free digital marketing resources: official Google Analytics 4, Google Ads, Search Console, and Tag Manager documentation. Curated by KnowHow Marketing Lab for medium-sized businesses.",
    canonical: "https://knowhowmarketinglab.com/resources",
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
            "name": "Free Digital Marketing Resources — KnowHow Marketing Lab",
            "description": "Curated authoritative resources for SEO, Google Ads, GA4, and Google Tag Manager — all from official Google documentation. No tools that compete with what we teach.",
            "url": "https://knowhowmarketinglab.com/resources",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://knowhowmarketinglab.com/resources" }
              ]
            }
          })
        }}
      />

      <AnnouncementBar />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-24 pb-12 bg-gray-50" aria-labelledby="resources-heading">
          <div className="container text-center max-w-2xl">
            <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Free Resources
            </span>
            <h1
              id="resources-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Official Google Docs We Actually Use
            </h1>
            <p className="text-gray-500 text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Every resource here links directly to official Google documentation. No tools that sell you something. No competing courses. Just the authoritative source material we reference in our training.
            </p>
            {/* Internal link to course */}
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/#free-course" className="btn-primary" aria-label="Start the free SEO course">
                Start Free SEO Course →
              </a>
              <a href="/#videos" className="btn-outline" aria-label="Browse free video lessons">
                Browse Video Library
              </a>
            </div>
          </div>
        </section>

        {/* Resource categories */}
        <section className="py-16 bg-white" aria-label="Resource categories">
          <div className="container max-w-4xl space-y-16">
            {resourceCategories.map(cat => (
              <div key={cat.title}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                  <h2
                    className="text-2xl font-extrabold text-gray-900"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: cat.color }}
                  >
                    {cat.title}
                  </h2>
                </div>
                <p className="text-gray-500 text-sm mb-6 ml-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {cat.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 ml-0">
                  {cat.resources.map(res => (
                    <a
                      key={res.name}
                      href={res.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col gap-2 bg-gray-50 rounded-xl border border-gray-100 p-5 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
                      aria-label={`${res.name} — ${res.source}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          className="font-bold text-sm text-gray-900 group-hover:underline"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {res.name}
                        </h3>
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {res.desc}
                      </p>
                      <span
                        className="text-xs font-semibold mt-auto"
                        style={{ color: cat.color, fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {res.source}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to community */}
        <section className="py-16 bg-[#0f2236]" aria-label="Join the community">
          <div className="container text-center max-w-xl">
            <h2 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Want to Learn How to Use All These Tools Together?
            </h2>
            <p className="text-gray-300 text-sm mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our free SEO course and VIP community teach you how to use GA4, GSC, GTM, and Google Ads as a connected data-driven system. The community includes weekly live Q&A every Thursday, a monthly deep-dive training session, and the full Google Ads course — all for $29/month.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/#free-course" className="btn-primary" aria-label="Start the free SEO course">
                Start Free Course →
              </a>
              <a href="/pricing" className="btn-outline-light" aria-label="See community pricing">
                See Pricing
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
