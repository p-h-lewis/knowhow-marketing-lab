// Podcast.tsx - KnowHow Marketing Lab Podcast
// GEO-optimised pillar page: 400+ words, entity-rich, structured for AI citation
// Schema: PodcastSeries, ItemList (top 10 episodes), FAQPage, BreadcrumbList
// Internal links: /courses/seo, /courses/google-ads, /framework, /blog, /community
// Design: dark navy hero, white body, Space Grotesk headings, DM Sans body

import { useState } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { useSEO } from "@/hooks/useSEO";
import { podcastEpisodes } from "@/lib/podcastEpisodes";

const FREE_COURSE_URL = "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce";
const COMMUNITY_URL = "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home";
const YOUTUBE_PLAYLIST = "https://www.youtube.com/playlist?list=PL3NGUighqOX6JF-ImrO289qWbpsd7kuA4";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@KnowHowMarketingLab";

const YEARS = [2026, 2025, 2024, 2023, 2022];

const faqs = [
  {
    q: "What is the KnowHow Marketing Lab Podcast?",
    a: "The KnowHow Marketing Lab Podcast is a free video podcast hosted by Pip Seymour and Phelan Lewis of Seymour Digital Media. Each episode covers what is actually happening in SEO, Google Ads, GA4, and AI marketing — with practical, data-driven advice for medium-sized businesses. The podcast has published 99+ episodes since 2022 and is available free on YouTube.",
  },
  {
    q: "Who are the hosts of the KnowHow Marketing Lab Podcast?",
    a: "The podcast is co-hosted by Pip Seymour and Phelan Lewis. Pip Seymour is a digital marketing strategist with 20+ years of experience specialising in SEO, Google Analytics 4, and content marketing. Phelan Lewis is a Google Ads specialist and data analyst who builds performance-driven campaigns and teaches businesses how to read their own marketing data. Together they run Seymour Digital Media, a Canadian digital marketing agency.",
  },
  {
    q: "What topics does the podcast cover?",
    a: "The podcast covers SEO strategy, Google Ads campaign management, Google Analytics 4 (GA4), Generative Engine Optimization (GEO), AI marketing tools including ChatGPT and Gemini, Google Search Console, Google Tag Manager, and monthly marketing news. Episodes range from beginner-friendly explainers to advanced technical discussions on topics like Google Ads Scripts, AI Agents, and data-driven decision making.",
  },
  {
    q: "Where can I watch or listen to the podcast?",
    a: "All episodes are available free on YouTube at the KnowHow Marketing Lab channel. You can watch individual episodes or browse the full playlist. There is no separate audio podcast feed — the show is produced as a video podcast on YouTube.",
  },
  {
    q: "How is the podcast different from The Lab community?",
    a: "The podcast is a free, monthly show open to everyone. The Lab is a paid membership community ($29/month) that includes weekly live Q&A every Thursday, monthly deep-dive training sessions, a private community group, and access to the full Google Ads and AI + SEO course library. The podcast is a great way to get a feel for how Pip and Phelan teach — The Lab is where you go to implement what you learn.",
  },
  {
    q: "Is the KnowHow Marketing Lab Podcast suitable for beginners?",
    a: "Yes. The podcast is designed for business owners and marketing teams who want to understand digital marketing without needing a technical background. Episodes are explained in plain language, and the hosts consistently connect technical concepts back to real business outcomes. Beginners will find the 'This Month In The World Of Marketing' episodes especially accessible as a starting point.",
  },
];

const topicClusters = [
  {
    title: "SEO and Generative Engine Optimization (GEO)",
    color: "#318599",
    body: "Search engine optimization has changed significantly since AI-powered search engines like Google's AI Overviews, Perplexity, and ChatGPT became mainstream. The podcast covers both traditional SEO — keyword research, on-page optimization, Google Search Console, and technical SEO — and the newer discipline of Generative Engine Optimization (GEO), which focuses on making your content discoverable and citable by large language models (LLMs). Episodes explore how to structure content so AI systems can understand and reference it, how to use Google Search Console data to find real ranking opportunities, and how to build a content strategy that works for both human readers and AI crawlers.",
  },
  {
    title: "Google Ads Strategy and Campaign Management",
    color: "#E98C28",
    body: "Google Ads is one of the most powerful tools available to medium-sized businesses — and one of the most misunderstood. The podcast covers Google Ads from the ground up: how the auction system works, how Quality Score affects your cost per click, and how to build Search, Display, Shopping, and Performance Max campaigns that generate real leads and sales. Phelan Lewis brings a data analyst's perspective to every episode, showing how to read your campaign data, set up proper conversion tracking in GA4 and Google Tag Manager, and make decisions based on numbers rather than guesswork.",
  },
  {
    title: "Google Analytics 4 (GA4) and Marketing Data",
    color: "#4F37D8",
    body: "Most businesses have GA4 installed but very few are using it effectively. The podcast dedicates significant time to helping business owners and marketing teams understand their own data — what the numbers actually mean, which metrics matter, and how to build reports that inform real decisions. Episodes cover GA4 setup, event tracking, conversion configuration, audience building, and how to connect GA4 data to your Google Ads campaigns for closed-loop reporting. The hosts consistently emphasise that data-driven marketing starts with measurement, which is the first step in their branded Data-First AI SEO Method.",
  },
  {
    title: "AI Marketing Tools and Automation",
    color: "#318599",
    body: "AI tools like ChatGPT, Google Gemini, and Manus are changing how marketing teams work. The podcast explores practical applications of AI in marketing — from using ChatGPT to generate keyword clusters and content outlines, to building AI Agents that automate repetitive tasks, to understanding how generative AI search engines decide which content to surface. The hosts take a grounded, tool-agnostic approach: they test tools themselves, share what works and what doesn't, and always connect AI capabilities back to the underlying marketing strategy.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://knowhowmarketinglab.com/podcast",
      "url": "https://knowhowmarketinglab.com/podcast",
      "name": "KnowHow Marketing Lab Podcast – Free on YouTube",
      "description": "99+ free podcast episodes on SEO, Google Ads, GA4, and AI marketing. Hosted by Pip Seymour and Phelan Lewis of Seymour Digital Media.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://knowhowmarketinglab.com" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
          { "@type": "ListItem", "position": 2, "name": "Podcast", "item": "https://knowhowmarketinglab.com/podcast" }
        ]
      }
    },
    {
      "@type": "PodcastSeries",
      "name": "KnowHow Marketing Lab Podcast",
      "description": "A free video podcast by Pip Seymour and Phelan Lewis of Seymour Digital Media. Each episode covers SEO, Google Ads, GA4, and AI marketing with practical, data-driven advice for medium-sized businesses. 99+ episodes available free on YouTube.",
      "url": "https://knowhowmarketinglab.com/podcast",
      "webFeed": YOUTUBE_PLAYLIST,
      "genre": ["Digital Marketing", "SEO", "Google Ads", "AI Marketing", "Business"],
      "inLanguage": "en",
      "numberOfEpisodes": 99,
      "startDate": "2022-01-01",
      "author": [
        {
          "@type": "Person",
          "name": "Pip Seymour",
          "jobTitle": "Digital Marketing Strategist",
          "url": "https://knowhowmarketinglab.com/about",
          "worksFor": { "@type": "Organization", "name": "Seymour Digital Media" }
        },
        {
          "@type": "Person",
          "name": "Phelan Lewis",
          "jobTitle": "Google Ads Specialist and Data Analyst",
          "url": "https://knowhowmarketinglab.com/about",
          "worksFor": { "@type": "Organization", "name": "Seymour Digital Media" }
        }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com",
        "sameAs": [YOUTUBE_CHANNEL]
      }
    },
    {
      "@type": "ItemList",
      "name": "KnowHow Marketing Lab Podcast – Recent Episodes",
      "description": "Recent episodes of the KnowHow Marketing Lab Podcast covering SEO, Google Ads, GA4, and AI marketing.",
      "url": "https://knowhowmarketinglab.com/podcast",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "This Month In The World Of Marketing", "url": "https://www.youtube.com/watch?v=Ay0VQU9XPrQ" },
        { "@type": "ListItem", "position": 2, "name": "Year-End Website Audit: What Every Business Owner Must Fix for 2026", "url": "https://www.youtube.com/watch?v=NuPDxQ_P5w0" },
        { "@type": "ListItem", "position": 3, "name": "AI Agents vs. ChatGPT: What Every Business Pro Must Know Before 2026", "url": "https://www.youtube.com/watch?v=9d2Jv0F7wYk" },
        { "@type": "ListItem", "position": 4, "name": "How AI Is Changing the Way We Watch and Create Video", "url": "https://www.youtube.com/watch?v=o8SL0_d-Mns" },
        { "@type": "ListItem", "position": 5, "name": "AI and SEO: How to Use Them Together for Maximum Impact", "url": "https://www.youtube.com/watch?v=XSqYY_9Myug" },
        { "@type": "ListItem", "position": 6, "name": "AI-Powered Search & Social Search Optimization", "url": "https://www.youtube.com/watch?v=7U1eSGtcuBk" },
        { "@type": "ListItem", "position": 7, "name": "How AI is Changing the Search & Social Media Landscape", "url": "https://www.youtube.com/watch?v=ZrF2gvne2dg" },
        { "@type": "ListItem", "position": 8, "name": "Marketing Pulse: This Month's Trends, Tactics & Game-Changers", "url": "https://www.youtube.com/watch?v=cMalSDFK6D4" },
        { "@type": "ListItem", "position": 9, "name": "This Month In The World Of Marketing", "url": "https://www.youtube.com/watch?v=vIPNsUrNu5k" },
        { "@type": "ListItem", "position": 10, "name": "Using GA4 for Data Driven Decisions", "url": "https://www.youtube.com/watch?v=4DvK3FuUVI4" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ]
};

function EpisodeBrowser() {
  const [activeYear, setActiveYear] = useState<number | 'all'>('all');
  const [search, setSearch] = useState('');

  const yearCounts: Record<number, number> = {};
  podcastEpisodes.forEach(ep => {
    yearCounts[ep.year] = (yearCounts[ep.year] || 0) + 1;
  });

  const filtered = podcastEpisodes.filter(ep => {
    const matchYear = activeYear === 'all' || ep.year === activeYear;
    const matchSearch = search === '' || ep.title.toLowerCase().includes(search.toLowerCase());
    return matchYear && matchSearch;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveYear('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeYear === 'all' ? 'bg-[#0f2236] text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
          >
            All ({podcastEpisodes.length})
          </button>
          {YEARS.map(y => yearCounts[y] ? (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeYear === y ? 'bg-[#0f2236] text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
            >
              {y} ({yearCounts[y]})
            </button>
          ) : null)}
        </div>
        <input
          type="search"
          placeholder="Search episodes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search podcast episodes by title"
          className="border border-slate-200 rounded-lg px-4 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#E98C28]/40 bg-white"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-500">No episodes found for your search.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(ep => (
            <a
              key={ep.id}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              aria-label={`Watch podcast episode: ${ep.title}, published ${ep.date}`}
            >
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${ep.id}/mqdefault.jpg`}
                  alt={`Thumbnail for KnowHow Marketing Lab podcast episode: ${ep.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="320"
                  height="180"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#E98C28] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#318599] font-medium mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{ep.date}</p>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#E98C28] transition-colors line-clamp-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {ep.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Podcast() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "KnowHow Marketing Lab Podcast – Free on YouTube",
    description: "99+ free podcast episodes on SEO, Google Ads, GA4, and AI marketing. Hosted by Pip Seymour and Phelan Lewis. Watch free on YouTube.",
    canonical: "https://knowhowmarketinglab.com/podcast",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AnnouncementBar />
      <Navbar />

      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-[#0f2236] to-[#1a3a54]" aria-labelledby="podcast-heading">
          <div className="container max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E98C28] animate-pulse" aria-hidden="true"></span>
              <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>99+ Episodes · Free on YouTube</span>
            </div>
            <h1
              id="podcast-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              The KnowHow Marketing Lab{" "}
              <span className="text-[#E98C28]">Podcast</span>
            </h1>
            <p className="text-lg text-gray-300 mb-3 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Every month, Pip Seymour and Phelan Lewis sit down to talk about what is actually happening in SEO, Google Ads, and AI marketing — no fluff, no hype, just honest analysis from two agency owners who are in it every day.
            </p>
            <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Since 2022, the show has published 99+ episodes covering everything from Google Analytics 4 setup and Google Ads bidding strategies to Generative Engine Optimization (GEO) and AI marketing tools. All episodes are free on YouTube.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={YOUTUBE_PLAYLIST}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E98C28] text-white font-bold text-sm hover:bg-[#d47d1e] transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Watch all KnowHow Marketing Lab podcast episodes on YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-bold text-sm hover:border-white/60 transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Subscribe to KnowHow Marketing Lab on YouTube"
              >
                Subscribe to Channel
              </a>
            </div>
          </div>
        </section>

        {/* About the Podcast — GEO-optimised pillar content */}
        <section className="py-16 bg-white border-b border-gray-100" aria-labelledby="about-podcast-heading">
          <div className="container max-w-4xl">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>About the Show</span>
              <h2 id="about-podcast-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Real marketing talk for medium-sized businesses
              </h2>

              <div className="prose prose-gray max-w-none space-y-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <p className="text-gray-700 leading-relaxed text-base">
                  The <strong>KnowHow Marketing Lab Podcast</strong> is a free video podcast produced by <strong>Seymour Digital Media</strong>, a Canadian digital marketing agency. Hosts <strong>Pip Seymour</strong> and <strong>Phelan Lewis</strong> have been working in digital marketing for a combined 30+ years, and the podcast reflects the kind of honest, practical conversations they have with clients every day.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  The show launched in 2022 and has published over 99 episodes. It covers the full spectrum of modern digital marketing: <strong>SEO strategy</strong>, <strong>Google Ads campaign management</strong>, <strong>Google Analytics 4 (GA4)</strong>, <strong>Google Search Console</strong>, <strong>Google Tag Manager</strong>, <strong>AI marketing tools</strong>, and the emerging discipline of <strong>Generative Engine Optimization (GEO)</strong> — the practice of making your content discoverable and citable by large language models like ChatGPT, Google Gemini, and Perplexity.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  What makes this podcast different is its focus on <strong>data-driven marketing</strong>. Every recommendation is grounded in real data — from Google Search Console keyword reports to GA4 conversion tracking to Google Ads Quality Score analysis. Pip and Phelan use the same tools and methods they teach, which means every episode reflects what is actually working right now, not what worked three years ago.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  The podcast is the free, public-facing arm of <strong>KnowHow Marketing Lab</strong> — an online training hub for business owners and marketing teams. For those who want to go deeper, <Link href="/community" className="text-[#318599] underline underline-offset-2 hover:text-[#E98C28] transition-colors">The Lab community</Link> offers weekly live Q&amp;A sessions, a full <Link href="/courses/google-ads" className="text-[#318599] underline underline-offset-2 hover:text-[#E98C28] transition-colors">Google Ads course</Link>, a <Link href="/courses/seo" className="text-[#318599] underline underline-offset-2 hover:text-[#E98C28] transition-colors">free AI + SEO course</Link>, and access to the <Link href="/framework" className="text-[#318599] underline underline-offset-2 hover:text-[#E98C28] transition-colors">Data-First AI SEO Method</Link> — the branded five-step framework that underpins everything Pip and Phelan teach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Topic Clusters — deep content for GEO */}
        <section className="py-16 bg-gray-50" aria-labelledby="topics-heading">
          <div className="container max-w-4xl">
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What We Cover</span>
            <h2 id="topics-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Topics covered across 99+ episodes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {topicClusters.map((cluster, i) => (
                <article key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: cluster.color }} aria-hidden="true"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{cluster.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{cluster.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Episode Browser */}
        <section className="py-16 bg-white" aria-labelledby="episodes-heading">
          <div className="container max-w-5xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>All Episodes</span>
              <h2 id="episodes-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {podcastEpisodes.length}+ Episodes — Free on YouTube
              </h2>
              <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>Browse by year or search by topic</p>
            </div>
            <EpisodeBrowser />
            <div className="mt-8 text-center">
              <a
                href={YOUTUBE_PLAYLIST}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#318599] hover:text-[#E98C28] font-medium text-sm transition-colors"
                aria-label="View the full KnowHow Marketing Lab podcast playlist on YouTube"
              >
                View full playlist on YouTube
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Hosts */}
        <section className="py-16 bg-[#0f2236]" aria-labelledby="hosts-heading">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Your Hosts</span>
              <h2 id="hosts-heading" className="text-3xl font-extrabold text-white mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Pip Seymour &amp; Phelan Lewis
              </h2>
              <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Co-founders of Seymour Digital Media. 30+ combined years in digital marketing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 border border-white/20 rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Pip Seymour</h3>
                <p className="text-[#7ecfdf] text-xs font-semibold mb-3 uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Digital Marketing Strategist · SEO · GA4 · Content</p>
                <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Pip has 20+ years of experience helping medium-sized businesses grow their organic search presence. She specialises in SEO strategy, Google Analytics 4, content marketing, and Generative Engine Optimization (GEO). Pip built the Data-First AI SEO Method — a five-step framework for growing a business online using real data instead of guesswork.
                </p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Phelan Lewis</h3>
                <p className="text-[#E98C28] text-xs font-semibold mb-3 uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Google Ads Specialist · Data Analyst · GA4 · GTM</p>
                <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Phelan is a Google Ads specialist and data analyst who builds performance-driven campaigns for medium-sized businesses. He teaches businesses how to read their own marketing data — from GA4 and Google Tag Manager to Google Ads Editor and Scripts. Phelan brings a numbers-first perspective to every episode, connecting campaign performance back to real business outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — H2, structured for GEO and FAQPage schema */}
        <section className="py-16 bg-white border-t border-gray-100" aria-labelledby="faq-heading">
          <div className="container max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FAQ</span>
              <h2 id="faq-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Frequently asked questions
              </h2>
            </div>
            <dl className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <dt>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span className="font-semibold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-[#E98C28] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </dt>
                  <dd
                    id={`faq-answer-${i}`}
                    className={`overflow-hidden transition-all duration-200 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{faq.a}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Internal links — related content */}
        <section className="py-12 bg-gray-50 border-t border-gray-100" aria-labelledby="related-heading">
          <div className="container max-w-4xl">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Go deeper with free courses and resources
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Free AI + SEO Course', href: '/courses/seo', desc: '5 modules. Go at your own pace.' },
                { label: 'Google Ads Course', href: '/courses/google-ads', desc: '8 modules. Search to Performance Max.' },
                { label: 'The Data-First Method', href: '/framework', desc: '5-step framework for growing online.' },
                { label: 'Marketing Blog', href: '/blog', desc: 'Free guides on SEO, GA4, and AI.' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow group"
                >
                  <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#E98C28] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.label}</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-gray-100" aria-labelledby="podcast-cta-heading">
          <div className="container max-w-3xl text-center">
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Go Deeper</span>
            <h2 id="podcast-cta-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Want to learn alongside us every week?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The podcast is monthly. The Lab is weekly — live Q&amp;A every Thursday, monthly deep-dive training, and a private group of marketers doing the same work you are. All for $29/month. No contracts. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Join The Lab community for $29 per month"
              >
                Join The Lab — $29/mo →
              </a>
              <a
                href={FREE_COURSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Start the free AI + SEO course"
              >
                Start Free Course
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Cancel anytime · No contracts · Powered by GoHighLevel</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
