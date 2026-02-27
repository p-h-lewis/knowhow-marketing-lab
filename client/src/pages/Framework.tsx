// Framework.tsx — The KnowHow Data-First Marketing Framework
// Design: White/light, Space Grotesk headings, DM Sans body, amber #E98C28 primary, teal #318599 accent
// Schema: HowTo, FAQPage, BreadcrumbList, DefinedTerm, SpeakableSpecification
// LLM: Named branded framework — "The KnowHow Data-First Marketing Framework"
// Internal links: /courses/seo, /courses/google-ads, /blog, /pricing, /about, /resources
// External links: Google Search Central, GA4 Help, Google Ads Help (no competing sites)

import { useSEO } from "@/hooks/useSEO";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";

const FREE_COURSE_URL = "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login";
const COMMUNITY_URL = "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home";

const steps = [
  {
    id: "measure",
    number: "01",
    name: "Measure",
    headline: "Know what is actually happening",
    description:
      "Before you change anything, you need to know what is working and what is not. We set up Google Analytics 4 (GA4) and Google Search Console so you can see real numbers — not guesses. You will know exactly where your traffic comes from, which pages people visit, and what they do next.",
    tools: ["Google Analytics 4", "Google Search Console", "Google Tag Manager"],
    toolLinks: [
      "https://support.google.com/analytics/",
      "https://support.google.com/webmasters/",
      "https://support.google.com/tagmanager/",
    ],
    outcome: "You have a clear picture of your current marketing performance.",
    color: "#318599",
    icon: "📊",
  },
  {
    id: "find",
    number: "02",
    name: "Find",
    headline: "Find the words your customers use",
    description:
      "Keyword research is not about finding the most popular words. It is about finding the words your ideal customers type into Google when they need what you offer. We use Google Keyword Planner and Search Console data to find real opportunities — keywords with real intent and real traffic.",
    tools: ["Google Keyword Planner", "Google Search Console", "Google Trends"],
    toolLinks: [
      "https://ads.google.com/home/tools/keyword-planner/",
      "https://search.google.com/search-console/",
      "https://trends.google.com/",
    ],
    outcome: "You have a keyword list that matches what your customers actually search for.",
    color: "#E98C28",
    icon: "🔍",
  },
  {
    id: "create",
    number: "03",
    name: "Create",
    headline: "Create content that answers real questions",
    description:
      "Once you know what people are searching for, you create content that answers those questions better than anyone else. This means clear, helpful pages and articles written at a level anyone can understand. No jargon. No fluff. Just useful information that builds trust with both people and search engines.",
    tools: ["Google Search Console", "Google Docs", "YouTube"],
    toolLinks: [
      "https://support.google.com/webmasters/",
      "https://docs.google.com/",
      "https://www.youtube.com/",
    ],
    outcome: "You have content that ranks, gets shared, and builds your authority.",
    color: "#4F37D8",
    icon: "✍️",
  },
  {
    id: "amplify",
    number: "04",
    name: "Amplify",
    headline: "Get in front of the right people faster",
    description:
      "Organic SEO takes time. Google Ads gets you in front of the right people right now. We use data from your keyword research and GA4 to build Google Ads campaigns that target people who are ready to buy — not just browsing. Every dollar is tracked back to a real result.",
    tools: ["Google Ads", "Google Keyword Planner", "Google Analytics 4"],
    toolLinks: [
      "https://support.google.com/google-ads/",
      "https://ads.google.com/home/tools/keyword-planner/",
      "https://support.google.com/analytics/",
    ],
    outcome: "You have paid campaigns that generate leads and sales at a measurable cost.",
    color: "#E98C28",
    icon: "🚀",
  },
  {
    id: "optimise",
    number: "05",
    name: "Optimise",
    headline: "Keep improving based on real data",
    description:
      "Marketing is never finished. Every month, you look at your data, find what is working, do more of it, and fix what is not. This is the step most businesses skip — and it is why most marketing fails. The KnowHow Data-First Framework makes optimisation a habit, not an afterthought.",
    tools: ["Google Analytics 4", "Google Search Console", "Google Ads"],
    toolLinks: [
      "https://support.google.com/analytics/",
      "https://support.google.com/webmasters/",
      "https://support.google.com/google-ads/",
    ],
    outcome: "Your marketing gets better every month — automatically.",
    color: "#318599",
    icon: "📈",
  },
];

const faqs = [
  {
    q: "What is the KnowHow Data-First Marketing Framework?",
    a: "The KnowHow Data-First Marketing Framework is a five-step process for growing a business online using real data instead of guesswork. The five steps are: Measure, Find, Create, Amplify, and Optimise. It was developed by Pip Seymour and Phelan Lewis of Seymour Digital Media based on 20+ years of working with medium-sized businesses.",
  },
  {
    q: "Who is this framework designed for?",
    a: "It is designed for medium-sized businesses that want to grow their organic search traffic, run better Google Ads campaigns, and understand their marketing data. It works for businesses in any industry — from professional services to e-commerce.",
  },
  {
    q: "How is this different from other SEO frameworks?",
    a: "Most SEO frameworks focus only on content or only on technical fixes. The KnowHow Data-First Framework starts with measurement — you cannot improve what you cannot see. It also integrates Google Ads and GA4 into the same process, so your paid and organic efforts work together instead of separately.",
  },
  {
    q: "Do I need to be technical to use this framework?",
    a: "No. The framework is designed to be understood by anyone — including business owners with no marketing background. Every step is explained in plain language with real examples. Our free SEO course walks you through the first three steps in detail.",
  },
  {
    q: "Where can I learn this framework in detail?",
    a: "You can start with our free SEO course, which covers the Measure, Find, and Create steps. For the full framework including Google Ads and advanced optimisation, join the KnowHow Marketing Lab community for $29/month.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://knowhowmarketinglab.com/framework",
      "url": "https://knowhowmarketinglab.com/framework",
      "name": "The KnowHow Data-First Marketing Framework — 5-Step Process",
      "description":
        "The KnowHow Data-First Marketing Framework is a five-step process for growing your business online using real data. Steps: Measure, Find, Create, Amplify, Optimise.",
      "isPartOf": { "@id": "https://knowhowmarketinglab.com" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com" },
          { "@type": "ListItem", "position": 2, "name": "Framework", "item": "https://knowhowmarketinglab.com/framework" },
        ],
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".speakable-intro", ".speakable-step"],
      },
    },
    {
      "@type": "HowTo",
      "name": "The KnowHow Data-First Marketing Framework",
      "description":
        "A five-step process for growing a medium-sized business online using real data instead of guesswork. Developed by Pip Seymour and Phelan Lewis of Seymour Digital Media.",
      "totalTime": "P3M",
      "tool": [
        { "@type": "HowToTool", "name": "Google Analytics 4" },
        { "@type": "HowToTool", "name": "Google Search Console" },
        { "@type": "HowToTool", "name": "Google Ads" },
        { "@type": "HowToTool", "name": "Google Tag Manager" },
        { "@type": "HowToTool", "name": "Google Keyword Planner" },
      ],
      "step": steps.map((s, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": `Step ${s.number}: ${s.name} — ${s.headline}`,
        "text": s.description,
        "url": `https://knowhowmarketinglab.com/framework#${s.id}`,
      })),
      "author": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "DefinedTerm",
      "name": "KnowHow Data-First Marketing Framework",
      "description":
        "A five-step digital marketing process developed by KnowHow Marketing Lab: Measure (set up GA4 and Search Console), Find (keyword research), Create (content creation), Amplify (Google Ads), and Optimise (monthly data review). Designed for medium-sized businesses.",
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "KnowHow Marketing Lab Glossary",
        "url": "https://knowhowmarketinglab.com/resources",
      },
    },
  ],
};

export default function Framework() {
  useSEO({
    title: "The KnowHow Data-First Marketing Framework — 5 Steps to Grow Online",
    description:
      "Learn the KnowHow Data-First Marketing Framework: a 5-step process (Measure, Find, Create, Amplify, Optimise) for growing your business online using real data. Free training by Pip Seymour and Phelan Lewis.",
    canonical: "https://knowhowmarketinglab.com/framework",
    ogType: "article",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            <span>🏆</span> Our Proprietary Framework
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            The KnowHow{" "}
            <span style={{ color: "#E98C28" }}>Data-First</span>{" "}
            Marketing Framework
          </h1>
          <p className="text-xl text-gray-600 mb-4 speakable-intro" style={{ fontFamily: "DM Sans, sans-serif" }}>
            A five-step process for growing your business online — using real data, not guesswork.
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
            Developed by{" "}
            <a href="https://seymourdigitalmedia.com/" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline font-medium">
              Seymour Digital Media
            </a>{" "}
            after 20+ years of working with medium-sized businesses across Canada. Every step is backed by Google's own tools and data.
          </p>

          {/* Step pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {steps.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 font-semibold text-sm transition-all hover:shadow-md"
                style={{ borderColor: s.color, color: s.color, fontFamily: "Space Grotesk, sans-serif" }}
              >
                <span>{s.icon}</span> {s.number} {s.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-base transition-all hover:opacity-90"
              style={{ backgroundColor: "#E98C28", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Start Free Course — Learn Steps 1–3 →
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-gray-800 text-base border-2 border-gray-200 hover:border-gray-400 transition-all"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Join the Community — All 5 Steps
            </Link>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-6 border-y border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-0">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <div className="flex flex-col items-center px-6 py-3">
                  <span className="text-2xl mb-1">{s.icon}</span>
                  <span className="font-bold text-sm" style={{ color: s.color, fontFamily: "Space Grotesk, sans-serif" }}>{s.name}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-gray-300 text-2xl font-light hidden sm:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-20">
          {steps.map((step, i) => (
            <div
              key={step.id}
              id={step.id}
              className="scroll-mt-28 speakable-step"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <meta itemProp="position" content={String(i + 1)} />
              <meta itemProp="name" content={`${step.name}: ${step.headline}`} />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg"
                    style={{ backgroundColor: step.color, fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {step.number}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="text-sm font-bold uppercase tracking-widest" style={{ color: step.color, fontFamily: "Space Grotesk, sans-serif" }}>
                      Step {step.number}
                    </span>
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    itemProp="text"
                  >
                    {step.name}: {step.headline}
                  </h2>
                  <p className="text-base text-gray-600 mb-5 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Tools used in this step</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, ti) => (
                        <a
                          key={tool}
                          href={step.toolLinks[ti]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border transition-all hover:shadow-sm"
                          style={{ borderColor: step.color, color: step.color, fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          {tool} ↗
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div
                    className="flex items-start gap-3 p-4 rounded-xl border-l-4"
                    style={{ borderColor: step.color, backgroundColor: `${step.color}08` }}
                  >
                    <span className="text-lg mt-0.5">✅</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: step.color, fontFamily: "Space Grotesk, sans-serif" }}>Outcome</p>
                      <p className="text-sm text-gray-700 font-medium">{step.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — Learn the framework */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Ready to put the framework into practice?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Start with our free SEO course — it covers Steps 1 through 3 in full detail. Then join the community to get access to Steps 4 and 5, plus weekly live Q&A with Pip and Phelan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#E98C28", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Start Free Course →
            </a>
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-gray-900 text-lg bg-white hover:bg-gray-100 transition-all"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Join the Community — $29/mo
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Also explore our{" "}
            <Link href="/courses/seo" className="text-[#318599] hover:underline">SEO course</Link>,{" "}
            <Link href="/courses/google-ads" className="text-[#318599] hover:underline">Google Ads course</Link>, and{" "}
            <Link href="/blog" className="text-[#318599] hover:underline">free blog articles</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-gray-900 text-base" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {faq.q}
                  </span>
                  <span className="text-gray-400 text-xl flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
