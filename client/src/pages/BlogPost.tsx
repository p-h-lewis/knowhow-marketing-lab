// BlogPost.tsx - Individual blog post page
// Design: White/light, Space Grotesk headings, DM Sans body, amber #E98C28 primary
// Schema: Article/BlogPosting, FAQPage, BreadcrumbList, SpeakableSpecification, ImageObject
// LLM: Full Article JSON-LD, SpeakableSpecification, datePublished, dateModified
// Internal links: /blog, /framework, /courses/seo, /courses/google-ads, /pricing
// External links: Google official docs only

import { useSEO } from "@/hooks/useSEO";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "wouter";
import { useState } from "react";

const FREE_COURSE_URL = "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login";
const COMMUNITY_URL = "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home";

// Blog post data - each post has its own URL, schema, and full content
const posts: Record<string, {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  tag: string;
  tagColor: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { heading: string; body: string; externalLink?: { text: string; url: string } }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string; internal: boolean }[];
}> = {
  "data-driven-seo-guide-medium-sized-businesses": {
    slug: "data-driven-seo-guide-medium-sized-businesses",
    title: "Data-Driven SEO for Medium-Sized Businesses: The Complete Guide",
    metaTitle: "Data-Driven SEO for Medium-Sized Businesses - Complete Guide 2025",
    metaDescription:
      "Learn how to use real data to improve your SEO. This guide covers keyword research, Google Search Console, GA4, and content strategy for medium-sized businesses.",
    category: "SEO",
    tag: "SEO",
    tagColor: "#318599",
    readTime: "12 min read",
    datePublished: "2025-01-15",
    dateModified: "2025-02-01",
    author: "Pip Seymour",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Data-driven SEO dashboard showing Google Search Console and GA4 analytics for a medium-sized business",
    intro:
      "Most businesses treat SEO like a mystery. They publish content, wait, and hope something ranks. Data-driven SEO is different. It starts with what people are actually searching for - and uses real numbers to decide what to create, what to fix, and what to ignore. This guide shows you exactly how to do it.",
    sections: [
      {
        heading: "What is data-driven SEO?",
        body: "Data-driven SEO means making decisions based on real search data instead of guesses. You use tools like Google Search Console and Google Analytics 4 to see what people are searching for, which pages are already ranking, and where you are losing traffic. Then you use that information to make smart decisions about what to create and what to improve.",
        externalLink: { text: "Google Search Console Help", url: "https://support.google.com/webmasters/" },
      },
      {
        heading: "Step 1: Set up your measurement tools",
        body: "Before you do anything else, you need to be able to measure results. Set up Google Analytics 4 (GA4) to track how people use your website. Set up Google Search Console to see which keywords bring people to your site. Connect both tools to Google Tag Manager so you can track specific actions - like form submissions and phone calls. Without these tools, you are flying blind.",
        externalLink: { text: "Google Analytics 4 Setup Guide", url: "https://support.google.com/analytics/answer/9304153" },
      },
      {
        heading: "Step 2: Find your keyword opportunities",
        body: "Open Google Search Console and look at the Queries report. You will see every keyword that brought someone to your site in the last 90 days. Look for keywords where you rank between position 5 and 20 - these are your best opportunities. You are already showing up, but not quite on page one. A small improvement in content quality can move you from position 12 to position 3.",
        externalLink: { text: "Google Keyword Planner", url: "https://ads.google.com/home/tools/keyword-planner/" },
      },
      {
        heading: "Step 3: Create content that answers real questions",
        body: "Once you know what people are searching for, create content that answers those questions better than anyone else. Write at a level anyone can understand. Use short paragraphs. Use headings to break up the page. Include the keyword in your title, your first paragraph, and at least two subheadings. Do not stuff keywords - just write naturally about the topic.",
      },
      {
        heading: "Step 4: Track your results every month",
        body: "SEO is not a one-time task. Every month, check your Search Console data to see if your rankings improved. Check your GA4 data to see if more people are visiting your site and staying longer. If something is working, do more of it. If something is not working, change it. This monthly review is what separates businesses that grow from businesses that plateau.",
        externalLink: { text: "GA4 Reports Overview", url: "https://support.google.com/analytics/answer/9212670" },
      },
      {
        heading: "Common SEO mistakes medium-sized businesses make",
        body: "The most common mistake is creating content without checking if anyone is searching for it. The second most common mistake is ignoring existing pages that already rank. The third is focusing on domain authority and link building instead of content quality. Google rewards pages that genuinely help people - not pages optimised for algorithms.",
      },
    ],
    faqs: [
      {
        q: "How long does data-driven SEO take to show results?",
        a: "Most businesses see measurable improvements in 3 to 6 months. Pages that are already ranking between position 5 and 20 can often be improved to page one within 4 to 8 weeks with targeted content updates.",
      },
      {
        q: "Do I need to hire an SEO agency to do this?",
        a: "No. The tools we recommend - Google Search Console, GA4, and Google Keyword Planner - are all free. With the right training, your internal marketing team can do this themselves. That is exactly what our AI + SEO course teaches.",
      },
      {
        q: "What is the difference between SEO and Google Ads?",
        a: "SEO (Search Engine Optimisation) gets your website to rank organically in Google search results - you do not pay per click. Google Ads puts your website at the top of search results immediately - you pay each time someone clicks. Both work best when used together.",
      },
      {
        q: "How is this approach different from traditional SEO?",
        a: "Traditional SEO often focuses on technical fixes and link building. Data-driven SEO starts with what your customers are actually searching for and builds content around real demand. It uses GA4 and Search Console data to make every decision - not assumptions.",
      },
    ],
    relatedLinks: [
      { label: "AI + SEO Course", href: FREE_COURSE_URL, internal: false },
      { label: "The Data-First AI SEO Method", href: "/framework", internal: true },
      { label: "SEO Course Details", href: "/courses/seo", internal: true },
      { label: "Video Library - SEO Lessons", href: "/#video-library", internal: true },
      { label: "Join the Community", href: COMMUNITY_URL, internal: false },
    ],
  },
  "google-analytics-4-setup-guide": {
    slug: "google-analytics-4-setup-guide",
    title: "How to Set Up Google Analytics 4 (GA4) - Step-by-Step Guide",
    metaTitle: "How to Set Up Google Analytics 4 (GA4) in 2025 - Step-by-Step",
    metaDescription:
      "Learn how to set up Google Analytics 4 (GA4) for your business website. Step-by-step guide covering property creation, data streams, and key reports.",
    category: "Analytics",
    tag: "Analytics",
    tagColor: "#4F37D8",
    readTime: "8 min read",
    datePublished: "2025-02-10",
    dateModified: "2025-02-20",
    author: "Phelan Lewis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    imageAlt: "Google Analytics 4 dashboard showing website traffic reports and conversion data",
    intro:
      "Google Analytics 4 (GA4) is Google's latest analytics platform. It replaced Universal Analytics in July 2023. If you have not set it up yet - or if you set it up but are not sure what you are looking at - this guide will walk you through everything from scratch.",
    sections: [
      {
        heading: "What is Google Analytics 4?",
        body: "Google Analytics 4 (GA4) is a free tool from Google that tracks how people use your website. It tells you how many people visited your site, where they came from, which pages they looked at, and what they did. GA4 uses an event-based model - instead of tracking page views, it tracks actions like button clicks, form submissions, and video plays.",
        externalLink: { text: "Google Analytics 4 Help Centre", url: "https://support.google.com/analytics/" },
      },
      {
        heading: "Step 1: Create a GA4 property",
        body: "Go to analytics.google.com and sign in with your Google account. Click Admin (the gear icon at the bottom left). Under Account, click Create Account if you do not have one. Then under Property, click Create Property. Give it a name (your business name), choose your time zone and currency, and click Next.",
      },
      {
        heading: "Step 2: Add a data stream",
        body: "After creating your property, GA4 will ask you to add a data stream. Choose Web. Enter your website URL and give the stream a name. GA4 will give you a Measurement ID (it starts with G-). Copy this ID - you will need it in the next step.",
        externalLink: { text: "Set up a GA4 data stream", url: "https://support.google.com/analytics/answer/9304153" },
      },
      {
        heading: "Step 3: Install the tracking code",
        body: "The easiest way to install GA4 is through Google Tag Manager. If you use GTM, create a new Google Analytics: GA4 Configuration tag, paste your Measurement ID, and set the trigger to All Pages. If you do not use GTM, you can add the GA4 code directly to your website's HTML - paste it in the <head> section of every page.",
        externalLink: { text: "Google Tag Manager Help", url: "https://support.google.com/tagmanager/" },
      },
      {
        heading: "Step 4: Verify your setup",
        body: "After installing the code, go back to GA4 and click the DebugView report (under Admin > DebugView). Open your website in a new tab. If the setup is working, you will see events appearing in DebugView in real time. You should see a page_view event within a few seconds of opening your site.",
      },
      {
        heading: "The most important GA4 reports to check every month",
        body: "Once GA4 is set up, check these three reports every month: (1) Acquisition > Traffic Acquisition - see where your visitors come from. (2) Engagement > Pages and Screens - see which pages get the most traffic. (3) Conversions - see how many people complete your key goals. These three reports give you 80% of the insights you need to make smart marketing decisions.",
        externalLink: { text: "GA4 Reports Overview", url: "https://support.google.com/analytics/answer/9212670" },
      },
    ],
    faqs: [
      {
        q: "Is Google Analytics 4 free?",
        a: "Yes. GA4 is completely free for most businesses. There is a paid version called Google Analytics 360 for very large enterprises, but the free version has everything a medium-sized business needs.",
      },
      {
        q: "What happened to Universal Analytics?",
        a: "Google shut down Universal Analytics (UA) in July 2023. All new analytics tracking now uses GA4. If you were using UA, your historical data is still accessible but no new data is being collected in UA.",
      },
      {
        q: "How long does it take to see data in GA4?",
        a: "Data usually appears in GA4 within 24 to 48 hours. Real-time reports update within seconds. DebugView updates in real time when you are testing your setup.",
      },
      {
        q: "Do I need Google Tag Manager to use GA4?",
        a: "No, but it makes things much easier. Google Tag Manager lets you manage all your tracking codes in one place without touching your website's code. We recommend using GTM for all GA4 installations.",
      },
    ],
    relatedLinks: [
      { label: "AI + SEO Course - Includes GA4 Module", href: FREE_COURSE_URL, internal: false },
      { label: "The Data-First AI SEO Method", href: "/framework", internal: true },
      { label: "Video Library - Analytics Lessons", href: "/#video-library", internal: true },
      { label: "Resources - Official Google Tools", href: "/resources", internal: true },
    ],
  },
};

// Fallback for unknown slugs
const fallbackPost = {
  slug: "",
  title: "Article Not Found",
  metaTitle: "Article Not Found - KnowHow Marketing Lab",
  metaDescription: "This article could not be found. Browse all articles on the KnowHow Marketing Lab blog.",
  category: "",
  tag: "",
  tagColor: "#E98C28",
  readTime: "",
  datePublished: "",
  dateModified: "",
  author: "",
  image: "",
  imageAlt: "",
  intro: "This article could not be found. Please visit our blog to see all available articles.",
  sections: [],
  faqs: [],
  relatedLinks: [{ label: "Back to Blog", href: "/blog", internal: true }],
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const post = posts[slug] || fallbackPost;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = post.slug
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `https://knowhowmarketinglab.com/blog/${post.slug}`,
            "url": `https://knowhowmarketinglab.com/blog/${post.slug}`,
            "headline": post.title,
            "description": post.metaDescription,
            "datePublished": post.datePublished,
            "dateModified": post.dateModified,
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://seymourdigitalmedia.com/",
            },
            "publisher": {
              "@type": "Organization",
              "name": "KnowHow Marketing Lab",
              "url": "https://knowhowmarketinglab.com",
              "logo": { "@type": "ImageObject", "url": "https://knowhowmarketinglab.com/favicon.svg" },
            },
            "image": {
              "@type": "ImageObject",
              "url": post.image,
              "description": post.imageAlt,
            },
            "mainEntityOfPage": `https://knowhowmarketinglab.com/blog/${post.slug}`,
            "articleSection": post.category,
            "inLanguage": "en-CA",
            "isPartOf": { "@id": "https://knowhowmarketinglab.com/blog" },
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://knowhowmarketinglab.com/blog/${post.slug}` },
            ],
          },
          {
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-intro", ".speakable-section"],
            },
          },
          ...(post.faqs.length > 0
            ? [{
                "@type": "FAQPage",
                "mainEntity": post.faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
              }]
            : []),
        ],
      }
    : null;

  useSEO({
    title: post.metaTitle,
    description: post.metaDescription,
    canonical: `https://knowhowmarketinglab.com/blog/${post.slug}`,
    ogType: "article",
  });

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <AnnouncementBar />
      <Navbar />

      <article className="pt-28">
        {/* Hero */}
        <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-600 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {post.tag && (
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: `${post.tagColor}15`, color: post.tagColor, fontFamily: "Space Grotesk, sans-serif" }}
            >
              {post.tag}
            </span>
          )}

          <h1
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
            {post.author && <span>By <span className="text-gray-600 font-medium">{post.author}</span></span>}
            {post.datePublished && (
              <time dateTime={post.datePublished} className="text-gray-400">
                {new Date(post.datePublished).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            )}
            {post.readTime && <span>{post.readTime}</span>}
          </div>

          {post.image && (
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full rounded-2xl shadow-md mb-8"
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={675}
            />
          )}

          <p className="text-lg text-gray-700 leading-relaxed speakable-intro">
            {post.intro}
          </p>
        </header>

        {/* Table of Contents */}
        {post.sections.length > 0 && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                In this article
              </p>
              <ol className="space-y-2">
                {post.sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="text-sm font-medium hover:underline"
                      style={{ color: "#318599" }}
                    >
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
                {post.faqs.length > 0 && (
                  <li>
                    <a href="#faq" className="text-sm font-medium hover:underline" style={{ color: "#318599" }}>
                      {post.sections.length + 1}. Frequently Asked Questions
                    </a>
                  </li>
                )}
              </ol>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 pb-16">
          {post.sections.map((section, i) => (
            <section key={i} id={`section-${i}`} className="scroll-mt-28 speakable-section">
              <h2
                className="text-2xl font-extrabold text-gray-900 mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {section.heading}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">{section.body}</p>
              {section.externalLink && (
                <a
                  href={section.externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  style={{ color: "#318599" }}
                >
                  📖 {section.externalLink.text} ↗
                </a>
              )}
            </section>
          ))}

          {/* FAQ */}
          {post.faqs.length > 0 && (
            <section id="faq" className="scroll-mt-28">
              <h2
                className="text-2xl font-extrabold text-gray-900 mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        {faq.q}
                      </span>
                      <span className="text-gray-400 text-xl flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related links */}
          {post.relatedLinks.length > 0 && (
            <section className="border-t border-gray-100 pt-10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Related resources
              </p>
              <div className="flex flex-wrap gap-3">
                {post.relatedLinks.map((link, i) =>
                  link.internal ? (
                    <Link
                      key={i}
                      href={link.href}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm font-semibold transition-all hover:shadow-sm"
                      style={{ borderColor: "#E98C28", color: "#E98C28", fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {link.label} →
                    </Link>
                  ) : (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full border text-sm font-semibold transition-all hover:shadow-sm"
                      style={{ borderColor: "#318599", color: "#318599", fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {link.label} ↗
                    </a>
                  )
                )}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Want to put this into practice?
          </h2>
          <p className="text-gray-600 mb-6">
            Our AI + SEO course walks you through every step - with real examples and no jargon. No credit card needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-base transition-all hover:opacity-90"
              style={{ backgroundColor: "#E98C28", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Start AI + SEO Course →
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-gray-700 text-base border-2 border-gray-200 hover:border-gray-400 transition-all"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
