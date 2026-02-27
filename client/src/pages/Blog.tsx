// KnowHow Marketing Lab — Blog Page
// /blog — All existing posts + new pillar article
// Schema: Blog, BlogPosting, BreadcrumbList, FAQPage
// Internal links: → /#free-course, /pricing, /about, /resources
// External links: → Google Search Central, Google Ads Help, GA4 Help (non-competing authority only)
// Target audience: Medium-sized businesses
// Readability: Grade 5-6
// GEO priority: Data-Driven SEO, Generative Engine Optimization

import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Link } from 'wouter';

const categories = ['All', 'SEO', 'Google Ads', 'AI Marketing', 'Analytics'];

const blogPosts = [
  // ── PILLAR ARTICLE (new) ──
  {
    slug: 'data-driven-seo-guide-medium-sized-businesses',
    title: 'Data-Driven SEO: The Complete Guide for Medium-Sized Businesses (2026)',
    excerpt: 'Most SEO advice is written for startups or enterprise brands. This guide is built specifically for medium-sized businesses — the ones with a real marketing budget, a real team, and real pressure to show ROI. Learn the KnowHow Data-First SEO Method step by step.',
    category: 'SEO',
    author: 'Pip Seymour',
    date: 'February 26, 2026',
    dateISO: '2026-02-26',
    readTime: '18 min read',
    isPillar: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    imageAlt: 'Data-driven SEO analytics dashboard showing Google Search Console and GA4 metrics for a medium-sized business',
    externalUrl: null,
  },
  // ── EXISTING POSTS ──
  {
    slug: 'ultimate-guide-google-ads-campaign-types-2026',
    title: 'The Ultimate Guide to Google Ads Campaign Types (Updated for 2026)',
    excerpt: 'The single most important decision you will make when creating a Google Ads campaign is choosing the right campaign type. This guide covers every type — Search, Display, Performance Max, Demand Gen, and more — with clear guidance on when to use each.',
    category: 'Google Ads',
    author: 'Pip Seymour',
    date: 'December 27, 2025',
    dateISO: '2025-12-27',
    readTime: '12 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    imageAlt: 'Google Ads campaign types overview — Search, Display, Performance Max, and Demand Gen campaigns explained',
    externalUrl: 'https://knowhowmarketinglab.com/ultimate-guide-google-ads-campaign-types-2026/',
  },
  {
    slug: 'google-ads-class-1-fundamentals',
    title: 'Google Ads Class 1: Fundamentals',
    excerpt: 'Part of the KnowHow Marketing Lab Master Google Ads Series. This first class covers the fundamentals — what Google Ads is, how the auction works, and why it is the most powerful paid channel for medium-sized businesses.',
    category: 'Google Ads',
    author: 'Pip Seymour',
    date: 'December 27, 2025',
    dateISO: '2025-12-27',
    readTime: '8 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
    imageAlt: 'Google Ads fundamentals class — understanding the Google Ads auction, keywords, and bidding for beginners',
    externalUrl: 'https://knowhowmarketinglab.com/google-ads-class-1-fundamentals/',
  },
  {
    slug: 'google-ads-masterclass-5-week-roadmap',
    title: 'Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns',
    excerpt: 'Google Ads feels like a casino where the house always wins — until you know the rules. This 5-week roadmap gives you a clear, step-by-step path from zero to profitable campaigns, without burning through your budget.',
    category: 'Google Ads',
    author: 'Pip Seymour',
    date: 'December 20, 2025',
    dateISO: '2025-12-20',
    readTime: '10 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Google Ads masterclass 5-week roadmap to profitable campaigns — step-by-step guide for business owners',
    externalUrl: 'https://knowhowmarketinglab.com/google-ads-masterclass-5-week-roadmap/',
  },
  {
    slug: 'ultimate-guide-google-ads-bidding-strategies-2026',
    title: 'The Ultimate Guide to Google Ads Bidding Strategies (2026 Edition)',
    excerpt: 'Choosing the right bidding strategy in Google Ads can feel like navigating a minefield. Pick the right one and you get a steady stream of profitable customers. Pick the wrong one and you burn through your budget. This guide explains every strategy clearly.',
    category: 'Google Ads',
    author: 'Pip Seymour',
    date: 'December 20, 2025',
    dateISO: '2025-12-20',
    readTime: '9 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    imageAlt: 'Google Ads bidding strategies guide 2026 — Target CPA, Target ROAS, Maximize Conversions, and Manual CPC explained',
    externalUrl: 'https://knowhowmarketinglab.com/ultimate-guide-google-ads-bidding-strategies-2026/',
  },
  {
    slug: 'complete-guide-ai-seo',
    title: 'The Complete Guide to AI SEO',
    excerpt: 'All 7 AI search optimization acronyms — SEO, GEO, AEO, SGE, LLMO, AIO, AI SEO — explained in plain language. They are all related approaches to the same goal: being visible when people search, whether on Google or ChatGPT.',
    category: 'AI Marketing',
    author: 'Pip Seymour',
    date: 'October 19, 2025',
    dateISO: '2025-10-19',
    readTime: '11 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    imageAlt: 'Complete guide to AI SEO — GEO, AEO, SGE, LLMO, AIO explained for medium-sized businesses',
    externalUrl: 'https://knowhowmarketinglab.com/complete-guide-ai-seo/',
  },
  {
    slug: 'url-redirects-seo-guide',
    title: 'URL Redirects: Everything You Need to Know for SEO',
    excerpt: 'Redirects are important in website management and user experience. This guide covers the types of URL redirects — 301, 302, and more — and explains how they affect your SEO strategy and Google rankings.',
    category: 'SEO',
    author: 'Cris',
    date: 'December 2, 2024',
    dateISO: '2024-12-02',
    readTime: '6 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    imageAlt: 'URL redirects SEO guide — 301 vs 302 redirects and how they impact Google rankings and website traffic',
    externalUrl: 'https://knowhowmarketinglab.com/url-redirects-seo-guide/',
  },
  {
    slug: 'how-people-charge-for-google-ads',
    title: 'How People Charge for Google Ads Management',
    excerpt: 'Google Ads management services typically range from $75 to $200 per hour, depending on the agency\'s experience. This guide breaks down all the pricing models — hourly, flat monthly fee, percentage of spend — so you know what to expect.',
    category: 'Google Ads',
    author: 'Cris',
    date: 'December 2, 2024',
    dateISO: '2024-12-02',
    readTime: '5 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    imageAlt: 'How Google Ads agencies charge — hourly rates, flat monthly fees, and percentage of ad spend pricing models',
    externalUrl: 'https://knowhowmarketinglab.com/how-people-charge-for-google-ads/',
  },
  {
    slug: 'adgroups-based-on-user-intent',
    title: 'How to Structure Ad Groups Based on User Intent',
    excerpt: 'Organizing ad groups based on user intent is a highly effective strategy in PPC advertising. This approach aligns the structure of your campaigns with the different stages of the buyer journey — awareness, consideration, and decision.',
    category: 'Google Ads',
    author: 'Cris',
    date: 'December 2, 2024',
    dateISO: '2024-12-02',
    readTime: '7 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
    imageAlt: 'Google Ads ad group structure based on user intent — awareness, consideration, and decision stage campaigns',
    externalUrl: 'https://knowhowmarketinglab.com/adgroups-based-on-user-intent/',
  },
  {
    slug: 'how-ai-is-shaping-marketing',
    title: 'How AI is Shaping Marketing: From Content Creation to Campaign Analysis',
    excerpt: 'AI is changing every part of digital marketing — from writing ad copy to analyzing campaign performance. This guide covers the practical ways medium-sized businesses can use AI tools right now to save time and improve results.',
    category: 'AI Marketing',
    author: 'Pip Seymour',
    date: 'November 15, 2024',
    dateISO: '2024-11-15',
    readTime: '8 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    imageAlt: 'How AI is shaping digital marketing — content creation, campaign analysis, and automation tools for businesses',
    externalUrl: 'https://knowhowmarketinglab.com/how-ai-is-shaping-marketing/',
  },
  {
    slug: 'ga4-setup-guide',
    title: 'GA4 Set Up & Guide: Step-by-Step for Business Owners',
    excerpt: 'Google Analytics 4 (GA4) is the most important free tool for understanding your website traffic. This step-by-step guide walks you through setting up GA4, creating a data stream, and reading your first reports — no technical background needed.',
    category: 'Analytics',
    author: 'Cris',
    date: 'October 27, 2024',
    dateISO: '2024-10-27',
    readTime: '10 min read',
    isPillar: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'GA4 setup guide for business owners — step-by-step Google Analytics 4 configuration and first report walkthrough',
    externalUrl: 'https://knowhowmarketinglab.com/ga4-setup-guide/',
  },
];

const pillarFaqs = [
  {
    q: 'What is data-driven SEO?',
    a: 'Data-driven SEO means making every decision based on real data — from Google Search Console, GA4, and keyword research tools — rather than guesswork. Instead of publishing content and hoping it ranks, you use data to find exactly what your audience is searching for, what pages are already getting traffic, and where the biggest opportunities are.',
  },
  {
    q: 'How is data-driven SEO different from regular SEO?',
    a: 'Traditional SEO often focuses on tactics like keyword stuffing, link building, or publishing lots of content without a clear strategy. Data-driven SEO starts with your actual performance data. You look at what is already working, find the gaps, and make targeted improvements that are most likely to move the needle.',
  },
  {
    q: 'What tools do I need for data-driven SEO?',
    a: 'The three core free tools are Google Search Console (to see how Google views your site), Google Analytics 4 (to understand your visitors), and Google Business Profile (for local search). These three tools alone give you more data than most businesses ever use. The KnowHow Marketing Lab free SEO course covers all three in depth.',
  },
  {
    q: 'How long does it take to see results from SEO?',
    a: 'For most medium-sized businesses, you can expect to see meaningful improvements in 3 to 6 months with consistent effort. Some quick wins — like fixing technical issues or optimizing existing pages — can show results in weeks. New content targeting low-competition keywords can rank in 1 to 3 months.',
  },
  {
    q: 'What is Generative Engine Optimization (GEO)?',
    a: 'GEO is the practice of optimizing your content to appear in AI-generated answers from tools like ChatGPT, Google AI Overviews, and Perplexity. The key is creating comprehensive, well-structured content that answers questions completely — the same content that ranks well in traditional SEO also tends to get cited by AI systems.',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [pillarExpanded, setPillarExpanded] = useState(false);

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const pillar = blogPosts[0];
  const rest = filtered.filter(p => !p.isPillar);

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "KnowHow Marketing Lab Blog",
            "description": "Free digital marketing guides for medium-sized businesses. SEO, Google Ads, GA4, and AI marketing tutorials written by agency professionals with 20+ years of experience.",
            "url": "https://knowhowmarketinglab.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "KnowHow Marketing Lab",
              "url": "https://knowhowmarketinglab.com",
              "sameAs": [
                "https://www.youtube.com/@knowhowmarketinglab",
                "https://seymourdigitalmedia.com/"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog" }
              ]
            },
            "blogPost": blogPosts.map(p => ({
              "@type": "BlogPosting",
              "headline": p.title,
              "description": p.excerpt,
              "datePublished": p.dateISO,
              "author": { "@type": "Person", "name": p.author },
              "url": p.externalUrl || `https://knowhowmarketinglab.com/blog/${p.slug}`,
              "image": {
                "@type": "ImageObject",
                "url": p.image,
                "description": p.imageAlt
              }
            }))
          })
        }}
      />
      {/* FAQ Schema for pillar */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": pillarFaqs.map(f => ({
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
        <section className="pt-24 pb-12 bg-gray-50" aria-labelledby="blog-heading">
          <div className="container text-center max-w-2xl">
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Free Marketing Guides
            </span>
            <h1
              id="blog-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              The KnowHow Marketing Lab Blog
            </h1>
            <p className="text-gray-500 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Practical SEO, Google Ads, GA4, and AI marketing guides — written for medium-sized businesses by agency professionals with 20+ years of experience. No fluff. No jargon. Just what works.
            </p>
          </div>
        </section>

        {/* Pillar Article Feature */}
        <section className="py-12 bg-white" aria-labelledby="pillar-heading">
          <div className="container">
            <div className="rounded-2xl border-2 border-[#E98C28] overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    className="w-full h-full object-cover min-h-[240px]"
                    loading="eager"
                    fetchPriority="high"
                    width="800"
                    height="500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#E98C28] text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Pillar Article
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="tag tag-seo mb-3 inline-block">SEO</span>
                    <h2
                      id="pillar-heading"
                      className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {pillar.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {pillar.excerpt}
                    </p>

                    {/* Jump-to-section nav */}
                    <nav aria-label="Pillar article sections" className="mb-6">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Jump to section</p>
                      <ul className="space-y-1 text-sm text-[#318599]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        <li><a href="#what-is-data-driven-seo" className="hover:underline">What is data-driven SEO?</a></li>
                        <li><a href="#the-knowhow-data-first-method" className="hover:underline">The KnowHow Data-First SEO Method</a></li>
                        <li><a href="#google-search-console-setup" className="hover:underline">Step 1: Google Search Console setup</a></li>
                        <li><a href="#ga4-for-seo" className="hover:underline">Step 2: GA4 for SEO decisions</a></li>
                        <li><a href="#keyword-research" className="hover:underline">Step 3: Keyword research with real data</a></li>
                        <li><a href="#on-page-optimization" className="hover:underline">Step 4: On-page optimization</a></li>
                        <li><a href="#geo-ai-overviews" className="hover:underline">Step 5: GEO and AI Overviews</a></li>
                        <li><a href="#pillar-faqs" className="hover:underline">Frequently asked questions</a></li>
                      </ul>
                    </nav>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      <span>{pillar.author}</span>
                      <span>·</span>
                      <span>{pillar.date}</span>
                      <span>·</span>
                      <span>{pillar.readTime}</span>
                    </div>
                    <button
                      onClick={() => setPillarExpanded(!pillarExpanded)}
                      className="btn-primary text-sm py-2.5 px-5"
                      aria-expanded={pillarExpanded}
                      aria-controls="pillar-content"
                    >
                      {pillarExpanded ? 'Collapse ↑' : 'Read Article →'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded pillar content */}
              {pillarExpanded && (
                <div
                  id="pillar-content"
                  className="border-t border-[#E98C28]/30 px-8 md:px-12 py-10 bg-gray-50"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <meta itemProp="headline" content={pillar.title} />
                  <meta itemProp="datePublished" content={pillar.dateISO} />
                  <meta itemProp="author" content={pillar.author} />

                  <div className="max-w-3xl mx-auto prose prose-gray" style={{ fontFamily: 'DM Sans, sans-serif' }}>

                    <h2 id="what-is-data-driven-seo" className="text-2xl font-extrabold text-gray-900 mt-0 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      What is Data-Driven SEO?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Data-driven SEO means making every decision based on real numbers — not gut feelings, not trends, not what your competitor is doing. You use tools like{' '}
                      <a href="https://support.google.com/webmasters/" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Google Search Console</a>{' '}
                      and{' '}
                      <a href="https://support.google.com/analytics/" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Google Analytics 4</a>{' '}
                      to find out exactly what is working, what is not, and where the biggest opportunities are.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      For medium-sized businesses, this approach is especially powerful. You have enough data to make meaningful decisions, but you do not have the budget to waste on tactics that do not move the needle. Data-driven SEO helps you focus your effort where it counts.
                    </p>

                    <h2 id="the-knowhow-data-first-method" className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      The KnowHow Data-First SEO Method
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      At KnowHow Marketing Lab, we teach a five-step framework called the <strong>Data-First SEO Method</strong>. It is the same process we use with our agency clients at{' '}
                      <a href="https://seymourdigitalmedia.com/" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Seymour Digital Media</a>.
                      Here is how it works:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6 ml-2">
                      <li><strong>Measure first</strong> — set up Google Search Console and GA4 before doing anything else</li>
                      <li><strong>Find your baseline</strong> — understand what traffic and rankings you already have</li>
                      <li><strong>Identify opportunities</strong> — find keywords where you rank on page 2 or 3 and can realistically reach page 1</li>
                      <li><strong>Optimize with intent</strong> — improve pages based on what the data tells you, not what you think looks good</li>
                      <li><strong>Measure and repeat</strong> — track changes, learn from results, and keep improving</li>
                    </ol>

                    <h2 id="google-search-console-setup" className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Step 1: Set Up Google Search Console
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <a href="https://support.google.com/webmasters/" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Google Search Console</a>{' '}
                      is the most important free SEO tool available. It shows you exactly which search queries are bringing people to your website, which pages are getting impressions and clicks, and any technical issues Google has found.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      To set it up: go to{' '}
                      <a href="https://search.google.com/search-console/" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">search.google.com/search-console</a>,
                      add your property, and verify ownership using the HTML tag method or your domain registrar. Once verified, data starts flowing within 48 hours.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The most important report to check first is the <strong>Performance report</strong>. Look for queries where your average position is between 8 and 20 — these are your best quick-win opportunities. A small improvement in a page that already ranks on page 1 or 2 can double or triple your traffic.
                    </p>

                    <h2 id="ga4-for-seo" className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Step 2: Use GA4 to Make Better SEO Decisions
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <a href="https://support.google.com/analytics/" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Google Analytics 4</a>{' '}
                      tells you what happens after someone lands on your website. Which pages keep people engaged? Which ones cause people to leave immediately? What actions do visitors take before they become leads or customers?
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Connect GA4 to Search Console for the most powerful combination. You will be able to see which organic search queries lead to the most conversions — not just the most traffic. This is the difference between vanity metrics and real business results. Our{' '}
                      <a href="/blog/ga4-setup-guide" className="text-[#318599] hover:underline">GA4 setup guide</a>{' '}
                      walks you through the full configuration step by step.
                    </p>

                    <h2 id="keyword-research" className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Step 3: Keyword Research with Real Data
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Most keyword research tools show you estimated search volumes. Google Search Console shows you actual data from your own website. Start there. Look at the queries you are already ranking for and ask: are these the right keywords? Are there related terms I should be targeting?
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      For finding new keywords, the{' '}
                      <a href="https://ads.google.com/home/tools/keyword-planner/" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Google Keyword Planner</a>{' '}
                      (free with a Google Ads account) gives you real search volume data directly from Google. Focus on keywords with clear commercial intent — the ones people search when they are ready to buy or hire.
                    </p>

                    <h2 id="on-page-optimization" className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Step 4: On-Page Optimization That Actually Works
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      On-page SEO is about making sure each page on your website clearly communicates its topic to both Google and your visitors. The basics are: a clear H1 heading that includes your target keyword, a meta title and description that make people want to click, and content that fully answers the question the searcher is asking.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The most overlooked on-page factor is <strong>internal linking</strong>. Every page on your website should link to at least 2 or 3 other relevant pages. This helps Google understand the structure of your site and passes authority between pages. It also keeps visitors on your site longer. For more on this, see our guide on{' '}
                      <a href="/blog/url-redirects-seo-guide" className="text-[#318599] hover:underline">URL redirects and SEO</a>.
                    </p>

                    <h2 id="geo-ai-overviews" className="text-2xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Step 5: GEO — Getting Cited in AI Overviews and ChatGPT
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Generative Engine Optimization (GEO) is the practice of optimizing your content to appear in AI-generated answers. When someone asks ChatGPT or Google AI Overviews a question about your industry, you want your content to be the source they cite.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The good news: the same practices that make content rank well in traditional SEO also help it get cited by AI. Comprehensive coverage, clear structure, specific facts, and authoritative sources all signal to AI systems that your content is trustworthy and useful. For a deep dive, read our{' '}
                      <a href="/blog/complete-guide-ai-seo" className="text-[#318599] hover:underline">Complete Guide to AI SEO</a>.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      The KnowHow Marketing Lab free SEO course covers all five steps of the Data-First SEO Method in detail, with hands-on exercises and real examples.{' '}
                      <a href="/#free-course" className="text-[#E98C28] font-semibold hover:underline">Start the free course →</a>
                    </p>

                    {/* FAQ Section */}
                    <h2 id="pillar-faqs" className="text-2xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-5">
                      {pillarFaqs.map(faq => (
                        <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
                          <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {faq.q}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>

                    {/* Internal CTA */}
                    <div className="mt-10 p-6 bg-amber-50 rounded-2xl border border-[#E98C28]/30 text-center">
                      <p className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Want to learn the full Data-First SEO Method?
                      </p>
                      <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        The free KnowHow Marketing Lab SEO course covers all 8 modules — including Google Search Console, GA4, keyword research, and on-page optimization.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="/#free-course" className="btn-primary text-sm py-2.5 px-5">
                          Start Free Course →
                        </a>
                        <Link href="/pricing" className="btn-outline text-sm py-2.5 px-5">
                          View Community Plans
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Category Filter + Post Grid */}
        <section className="py-12 bg-gray-50" aria-labelledby="all-posts-heading">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <h2
                id="all-posts-heading"
                className="text-2xl font-extrabold text-gray-900"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                All Articles
              </h2>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-150 ${
                      activeCategory === cat
                        ? 'bg-[#E98C28] text-white'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-[#E98C28] hover:text-[#E98C28]'
                    }`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    aria-pressed={activeCategory === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(post => {
                const tagClass = post.category === 'SEO' ? 'tag-seo'
                  : post.category === 'Google Ads' ? 'tag-google-ads'
                  : post.category === 'AI Marketing' ? 'tag-ai'
                  : post.category === 'Analytics' ? 'tag-analytics'
                  : 'tag-seo';

                const href = post.externalUrl || `/blog/${post.slug}`;
                const isExternal = !!post.externalUrl;

                return (
                  <article
                    key={post.slug}
                    className="card-base overflow-hidden flex flex-col"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                    aria-label={post.title}
                  >
                    <a
                      href={href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="block relative aspect-video overflow-hidden bg-gray-100"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        width="800"
                        height="450"
                        itemProp="image"
                      />
                    </a>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`tag ${tagClass}`}>{post.category}</span>
                        <span className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>{post.readTime}</span>
                      </div>
                      <h3
                        className="text-base font-bold text-gray-900 mb-2 leading-snug flex-1"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        itemProp="headline"
                      >
                        <a
                          href={href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="hover:text-[#E98C28] transition-colors"
                        >
                          {post.title}
                        </a>
                      </h3>
                      <p
                        className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                        itemProp="description"
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          <span itemProp="author">{post.author}</span>
                          <span>·</span>
                          <time dateTime={post.dateISO} itemProp="datePublished">{post.date}</time>
                        </div>
                        <a
                          href={href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="text-xs font-bold text-[#E98C28] hover:underline"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          aria-label={`Read: ${post.title}`}
                        >
                          Read →
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-14 text-center">
              <p className="text-gray-500 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Want to go deeper? The free SEO course covers all of this — step by step, with real examples.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/#free-course" className="btn-primary" aria-label="Start the free KnowHow Marketing Lab SEO course">
                  Start Free Course →
                </a>
                <Link href="/resources" className="btn-outline" aria-label="Browse free marketing resources and Google official docs">
                  Browse Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
